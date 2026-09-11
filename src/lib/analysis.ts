import type { ScrapedData } from "./scraper";
import { callLlm, extractJson } from "./llm";

/**
 * AI visibility analysis pipeline: persona → simulated buying prompts →
 * scored visibility analysis → actionable plan. Everything runs in ONE LLM
 * call to conserve free-tier quota (Groq 1,000/day, Gemini fallback).
 */

export interface VisibilityScores {
  technicalSEO: number;
  contentQuality: number;
  aiReadability: number;
  entitySignals: number;
  authorityPresence: number;
}

export interface PersonaProfile {
  name: string;
  role: string;
  companyType: string;
  goals: string;
  painPoints: string;
}

export interface BuyingPrompt {
  prompt: string;
  outcome: "mentions_brand" | "cites_brand" | "competitor_only" | "no_mention";
}

export interface QuickWin {
  title: string;
  action: string;
  impact: "high" | "medium" | "low";
  effort: "quick" | "medium" | "involved";
}

export interface AnalysisResult {
  scores: VisibilityScores;
  insights: string[];
  persona: PersonaProfile;
  simulatedPrompts: BuyingPrompt[];
  quickWins: QuickWin[];
  summary: string;
  isFallback: boolean;
  provider: string | null;
}

export const SCORE_LABELS: Record<keyof VisibilityScores, string> = {
  technicalSEO: "Technical SEO",
  contentQuality: "Content Quality",
  aiReadability: "AI Readability",
  entitySignals: "Entity Signals",
  authorityPresence: "Authority Presence",
};

function heuristicScores(scrapedData: ScrapedData): VisibilityScores {
  // Deterministic signal-based scoring — no randomness, so the same site
  // always gets the same honest baseline when LLMs are unavailable.
  const clamp = (n: number) => Math.min(100, Math.max(0, Math.round(n)));

  const hasTitle = scrapedData.title.length > 10 ? 1 : 0;
  const hasDesc = scrapedData.description.length > 50 ? 1 : 0;
  const og = scrapedData.openGraph.title ? 1 : 0;
  const twitter = scrapedData.twitterCard.title ? 1 : 0;
  const canonical = Boolean(scrapedData.canonicalUrl) ? 1 : 0;
  const technicalSEO = clamp(
    (hasTitle + hasDesc + og + twitter + canonical + (scrapedData.hasStructuredData ? 1 : 0) + (scrapedData.hasSchemaMarkup ? 1 : 0)) / 7 * 100
  );

  const words = scrapedData.wordCount;
  const contentQuality = clamp(
    Math.min(40, words / 40) +
      Math.min(15, scrapedData.headings.length * 2) +
      (hasDesc ? 10 : 0) +
      (scrapedData.textContent.length > 4000 ? 10 : 4)
  );

  const wordyParas = scrapedData.textContent.split(/[.!?]\s/).filter((s) => s.length > 40).length;
  const listSignals = (scrapedData.textContent.match(/\n\s*[-•*]\s/g) || []).length;
  const aiReadability = clamp(
    Math.min(30, scrapedData.headings.length * 3) +
      Math.min(20, wordyParas * 2) +
      Math.min(15, listSignals * 2) +
      (words > 600 ? 15 : 5) +
      10
  );

  const entitySignals = clamp(
    (scrapedData.hasStructuredData ? 35 : 8) +
      (scrapedData.hasSchemaMarkup ? 20 : 5) +
      (og ? 10 : 0) +
      (twitter ? 5 : 0) +
      (hasTitle && hasDesc ? 15 : 5) +
      (scrapedData.language === "en" ? 15 : 8)
  );

  const internal = scrapedData.links.filter((l) => {
    try {
      return new URL(l, scrapedData.url).hostname === new URL(scrapedData.url).hostname;
    } catch {
      return false;
    }
  }).length;
  const external = scrapedData.links.length - internal;
  const authorityPresence = clamp(
    Math.min(25, internal * 2) +
      Math.min(20, external * 2) +
      (scrapedData.images.filter((i) => i.alt).length / Math.max(1, scrapedData.images.length)) * 15 +
      (hasDesc ? 10 : 0) +
      (words > 1000 ? 15 : 5) +
      15
  );

  return { technicalSEO, contentQuality, aiReadability, entitySignals, authorityPresence };
}

function heuristicResult(scrapedData: ScrapedData, provider: string | null): AnalysisResult { // eslint-disable-line
  return {
    scores: heuristicScores(scrapedData),
    insights: [
      "Add Organization and Service structured data (schema.org) so AI systems can verify who you are and what you sell.",
      scrapedData.headings.length < 5
        ? "Very few headings were found — AI systems parse poorly structured pages less completely. Add descriptive H2/H3s."
        : "Restructure key pages so each section answers one specific question your buyers ask AI assistants.",
      "Publish original research or comparison content that AI systems can only source from you — generic pages get skipped.",
    ],
    persona: {
      name: "Your ideal buyer",
      role: "Decision maker",
      companyType: "your market",
      goals: "finding a credible provider",
      painPoints: "too little time to vet every option",
    },
    simulatedPrompts: [],
    quickWins: [],
    summary:
      "Signal-based baseline computed without AI analysis (LLM providers unavailable). Scores reflect measurable on-page factors only.",
    isFallback: true,
    provider,
  };
}

function buildPrompt(scrapedData: ScrapedData, formData: {
  industry: string;
  targetMarket: string;
  improve: string;
  message: string;
}): string {
  const internal = scrapedData.links.filter((l) => {
    try {
      return new URL(l, scrapedData.url).hostname === new URL(scrapedData.url).hostname;
    } catch {
      return false;
    }
  }).length;

  return `You are an AI Search Visibility expert at Prompt&Co. (promptco.online), an AEO/GEO agency.

Analyze this website and produce an AI visibility assessment.

LEAD CONTEXT (from the assessment request form):
- Industry: ${formData.industry || "unknown"}
- Target market: ${formData.targetMarket || "unknown"}
- Their stated goal: ${formData.improve}
- Extra notes: ${formData.message || "none"}

WEBSITE DATA:
- URL: ${scrapedData.url}
- Title: ${scrapedData.title || "MISSING"}
- Meta description: ${scrapedData.description || "MISSING"}
- Word count: ${scrapedData.wordCount}
- Headings (${scrapedData.headings.length}): ${scrapedData.headings.slice(0, 25).join(" | ") || "NONE"}
- Structured data (ld+json): ${scrapedData.hasStructuredData}
- Schema.org markup: ${scrapedData.hasSchemaMarkup}
- Open Graph title: ${scrapedData.openGraph.title || "MISSING"}
- Images missing alt text: ${scrapedData.images.filter((i) => !i.alt).length} of ${scrapedData.images.length}
- Internal links: ${internal}, External links: ${scrapedData.links.length - internal}
- Language: ${scrapedData.language}

PAGE TEXT (first 4000 chars):
${scrapedData.textContent.substring(0, 4000)}

Respond with ONLY a valid JSON object in exactly this shape:
{
  "persona": {
    "name": "<first-name-style persona name>",
    "role": "<job title of the typical buyer>",
    "companyType": "<what kind of company buys this>",
    "goals": "<what this persona is trying to achieve, 1 sentence>",
    "painPoints": "<their main pain points, 1 sentence>"
  },
  "simulatedPrompts": [
    { "prompt": "<a question this persona would realistically type into ChatGPT/Perplexity/AI Mode when buying ${formData.industry || "this"} solutions>" },
    { "prompt": "<a comparison prompt, e.g. best tools/vendors>" },
    { "prompt": "<a problem-aware prompt describing symptoms>" }
  ],
  "scores": {
    "technicalSEO": <0-100>,
    "contentQuality": <0-100>,
    "aiReadability": <0-100>,
    "entitySignals": <0-100>,
    "authorityPresence": <0-100>
  },
  "insights": [
    "<specific observation about THEIR site tied to a score, 1-2 sentences>",
    "<specific observation>",
    "<specific observation>"
  ],
  "quickWins": [
    { "title": "<action title>", "action": "<1-2 sentence concrete instruction>", "impact": "high|medium|low", "effort": "quick|medium|involved" },
    { "title": "<...>", "action": "<...>", "impact": "<...>", "effort": "<...>" },
    { "title": "<...>", "action": "<...>", "impact": "<...>", "effort": "<...>" }
  ],
  "summary": "<2-3 sentence executive summary of their AI visibility situation>"
}

SCORING GUIDE:
- technicalSEO: meta tags, structured data, canonicals, crawlability signals
- contentQuality: depth, relevance, uniqueness vs the market
- aiReadability: heading structure, lists, extractable answers
- entitySignals: schema, consistent brand description, knowledge-graph readiness
- authorityPresence: external links quality, content that earns citations, brand footprint
Be honest and specific — generic insights are useless to the recipient. Ground every insight in the actual data above.`;
}

/**
 * Signal-based analysis without any LLM call — used by the route as a
 * last-resort guard if analyzeVisibility itself throws unexpectedly.
 */
export function heuristicAnalysis(scrapedData: ScrapedData): AnalysisResult {
  return heuristicResult(scrapedData, null);
}

const clampScore = (n: unknown): number =>
  Math.min(100, Math.max(0, Math.round(typeof n === "number" ? n : 50)));

export async function analyzeVisibility(
  scrapedData: ScrapedData,
  formData: { industry: string; targetMarket: string; improve: string; message: string }
): Promise<AnalysisResult> {
  try {
    const { text, provider } = await callLlm(
      "You are an expert AI search visibility analyst. You respond with strict JSON only.",
      buildPrompt(scrapedData, formData),
      2048
    );

    const raw = extractJson(text) as Record<string, unknown>;

    const scores = (raw.scores ?? {}) as Record<string, unknown>;
    const persona = (raw.persona ?? {}) as Record<string, unknown>;
    const prompts = Array.isArray(raw.simulatedPrompts) ? raw.simulatedPrompts : [];
    const insights = Array.isArray(raw.insights) ? raw.insights : [];
    const wins = Array.isArray(raw.quickWins) ? raw.quickWins : [];

    return {
      scores: {
        technicalSEO: clampScore(scores.technicalSEO),
        contentQuality: clampScore(scores.contentQuality),
        aiReadability: clampScore(scores.aiReadability),
        entitySignals: clampScore(scores.entitySignals),
        authorityPresence: clampScore(scores.authorityPresence),
      },
      insights: insights.slice(0, 3).map((i) => String(i)),
      persona: {
        name: String(persona.name ?? "Your ideal buyer"),
        role: String(persona.role ?? "Decision maker"),
        companyType: String(persona.companyType ?? "your market"),
        goals: String(persona.goals ?? "finding a credible provider"),
        painPoints: String(persona.painPoints ?? "vetting options quickly"),
      },
      simulatedPrompts: prompts
        .slice(0, 3)
        .map((p) => {
          const item = p as { prompt?: unknown; outcome?: unknown };
          const outcome = String(item.outcome ?? "no_mention");
          return {
            prompt: String(item.prompt ?? ""),
            outcome: (["mentions_brand", "cites_brand", "competitor_only", "no_mention"].includes(outcome)
              ? outcome
              : "no_mention") as BuyingPrompt["outcome"],
          };
        })
        .filter((p) => p.prompt),
      quickWins: wins.slice(0, 3).map((w) => {
        const item = w as { title?: unknown; action?: unknown; impact?: unknown; effort?: unknown };
        const impact = String(item.impact ?? "medium");
        const effort = String(item.effort ?? "quick");
        return {
          title: String(item.title ?? "Optimize key page"),
          action: String(item.action ?? ""),
          impact: (["high", "medium", "low"].includes(impact) ? impact : "medium") as QuickWin["impact"],
          effort: (["quick", "medium", "involved"].includes(effort) ? effort : "quick") as QuickWin["effort"],
        };
      }),
      summary: String(raw.summary ?? ""),
      isFallback: false,
      provider,
    };
  } catch (error) {
    console.error("[Analysis] All LLM providers failed, using heuristics:", error);
    return heuristicResult(scrapedData, null);
  }
}


