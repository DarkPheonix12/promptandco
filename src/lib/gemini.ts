import { ScrapedData } from "./scraper";

export interface AnalysisResult {
  scores: {
    technicalSEO: number;
    contentQuality: number;
    aiReadability: number;
    entitySignals: number;
    authorityPresence: number;
  };
  insights: string[];
  isFallback: boolean;
}

const SCORE_LABELS = {
  technicalSEO: "Technical SEO",
  contentQuality: "Content Quality",
  aiReadability: "AI Readability",
  entitySignals: "Entity Signals",
  authorityPresence: "Authority Presence",
};

function generateFallbackScores(): AnalysisResult {
  const scores = {
    technicalSEO: Math.floor(Math.random() * 32) + 42,
    contentQuality: Math.floor(Math.random() * 32) + 42,
    aiReadability: Math.floor(Math.random() * 32) + 42,
    entitySignals: Math.floor(Math.random() * 32) + 42,
    authorityPresence: Math.floor(Math.random() * 32) + 42,
  };

  const insights = [
    "Adding structured data (Schema.org markup) can help AI systems better understand your services and expertise.",
    "Expanding your content with detailed FAQs and authoritative answers can improve how AI platforms reference your brand.",
    "Building entity signals across your website strengthens how AI systems recognize and categorize your business.",
  ];

  return { scores, insights, isFallback: true };
}

function buildPrompt(scrapedData: ScrapedData, goal: string): string {
  return `You are an AI Search Visibility expert at Prompt&Co. (promptco.online). Analyze this website and provide a professional AI visibility assessment.

Website URL: ${scrapedData.url}
Business Goal: ${goal}

Website Data:
- Title: ${scrapedData.title || "Not found"}
- Meta Description: ${scrapedData.description || "Not found"}
- Word Count: ${scrapedData.wordCount}
- Headings Found: ${scrapedData.headings.slice(0, 20).join(", ") || "None"}
- Has Structured Data: ${scrapedData.hasStructuredData}
- Has Schema Markup: ${scrapedData.hasSchemaMarkup}
- Open Graph Title: ${scrapedData.openGraph.title || "Not found"}
- Open Graph Description: ${scrapedData.openGraph.description || "Not found"}
- Images: ${scrapedData.images.length} total, ${scrapedData.images.filter((i) => !i.alt).length} missing alt text
- Internal Links: ${scrapedData.links.filter((l) => l.includes(new URL(scrapedData.url).hostname)).length}
- External Links: ${scrapedData.links.filter((l) => !l.includes(new URL(scrapedData.url).hostname)).length}
- Language: ${scrapedData.language}

Content Sample (first 3000 chars):
${scrapedData.textContent.substring(0, 3000)}

Respond with ONLY a valid JSON object (no markdown, no code blocks) in this exact format:
{
  "scores": {
    "technicalSEO": <number 0-100>,
    "contentQuality": <number 0-100>,
    "aiReadability": <number 0-100>,
    "entitySignals": <number 0-100>,
    "authorityPresence": <number 0-100>
  },
  "insights": [
    "<specific insight 1 about their website>",
    "<specific insight 2 about their website>",
    "<specific insight 3 about their website>"
  ]
}

Scoring Guide:
- technicalSEO: Meta tags, structured data, canonical URLs, page speed signals, mobile-friendliness
- contentQuality: Content depth, relevance, uniqueness, readability, keyword coverage
- aiReadability: How well AI systems can parse and understand the content (headings, lists, clear structure)
- entitySignals: Brand recognition signals, consistent NAP, schema markup, knowledge graph presence
- authorityPresence: Backlinks, citations, mentions, domain authority, brand mentions across web

Write insights as specific, actionable recommendations based on the actual website data. Each insight should be 1-2 sentences.`;
}

export async function analyzeWithGemini(
  scrapedData: ScrapedData,
  goal: string
): Promise<AnalysisResult> {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    console.warn("GEMINI_API_KEY not set, using fallback scores");
    return generateFallbackScores();
  }

  try {
    const prompt = buildPrompt(scrapedData, goal);

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: {
            temperature: 0.3,
            maxOutputTokens: 1024,
          },
        }),
        signal: AbortSignal.timeout(30000),
      }
    );

    if (response.status === 429 || response.status === 403) {
      console.warn("Gemini API quota exceeded, using fallback scores");
      return generateFallbackScores();
    }

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Gemini API error:", errorText);
      return generateFallbackScores();
    }

    const data = await response.json();
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!text) {
      console.error("No content in Gemini response");
      return generateFallbackScores();
    }

    // Extract JSON from response (handle markdown code blocks)
    let jsonStr = text;
    const jsonMatch = text.match(/```(?:json)?\s*([\s\S]*?)```/);
    if (jsonMatch) {
      jsonStr = jsonMatch[1];
    }

    // Try to find JSON object in the response
    const objectMatch = jsonStr.match(/\{[\s\S]*\}/);
    if (objectMatch) {
      jsonStr = objectMatch[0];
    }

    const result = JSON.parse(jsonStr);

    // Validate scores
    const scores = {
      technicalSEO: Math.min(100, Math.max(0, Math.round(result.scores?.technicalSEO || 50))),
      contentQuality: Math.min(100, Math.max(0, Math.round(result.scores?.contentQuality || 50))),
      aiReadability: Math.min(100, Math.max(0, Math.round(result.scores?.aiReadability || 50))),
      entitySignals: Math.min(100, Math.max(0, Math.round(result.scores?.entitySignals || 50))),
      authorityPresence: Math.min(100, Math.max(0, Math.round(result.scores?.authorityPresence || 50))),
    };

    const insights = Array.isArray(result.insights)
      ? result.insights.slice(0, 3).map((i: string) => String(i))
      : [
          "Adding structured data can help AI systems better understand your business.",
          "Expanding content with FAQs can improve AI discoverability.",
          "Building entity signals strengthens brand recognition across AI platforms.",
        ];

    return { scores, insights, isFallback: false };
  } catch (error) {
    console.error("Gemini analysis error:", error);
    return generateFallbackScores();
  }
}

export { SCORE_LABELS };
