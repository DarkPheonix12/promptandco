import type { ResearchMeta } from "@/lib/research";

export const meta = {
  slug: "2026-ai-citation-study",
  title:
    "The 2026 AI Citation Study: Who Actually Gets Cited by AI — and What the Data Says You Can Control",
  description:
    "A source-by-source synthesis of the published 2026 AI-citation research: how ChatGPT, Perplexity, Gemini, AI Overviews, AI Mode, Copilot and Claude cite sources, where the studies disagree, and which levers have evidence behind them.",
  datePublished: "2026-09-11",
  dateModified: "2026-09-11",
  category: "Research",
  tags: ["AI search", "citations", "GEO", "AEO", "brand visibility"],
  readingTimeMinutes: 14,
  faq: [
    {
      question: "What is an AI citation?",
      answer:
        "An AI citation is a named source — a website, domain, brand, study or dataset — that an AI assistant includes in its answer to a question. It is the unit of visibility in AI search: if your brand is not cited, it is effectively not present.",
    },
    {
      question: "Why do the published overlap numbers disagree so much?",
      answer:
        "The studies measure different things. Some count how many AI-cited URLs also rank in Google's top 10, others measure how much two AI engines draw from the same source pool, and still others track overlap of the same query across engines over time. Different baskets, definitions and engines produce numbers that range from roughly 20% to 55% — none are wrong, they are measuring different claims.",
    },
    {
      question: "Should I optimize for rankings or for AI citations?",
      answer:
        "Both, but the two are no longer the same job. Across the largest 2025–2026 datasets, roughly one-third of AI-cited URLs also rank in Google's top 10, and the reverse — cited pages that rank — is even lower. Ranking helps, but the evidence points to citation-specific work: named sources in third-party content, freshness, honest structured data, and presence on the platforms AI systems reference.",
    },
    {
      question: "How long does an AI citation last?",
      answer:
        "Not long. A 2026 longitudinal study covering eight models across ten months found that 73.5% of cited URLs appeared exactly once, and that brand-level citation presence decays with a half-life around 31 days. The same body of research recommends remeasuring on 2–4 week windows.",
    },
    {
      question: "Can I make an AI assistant cite me directly?",
      answer:
        "There is no direct submission or guaranteed formula. The evidence points to strengthening the signals that co-occur with citations: being a named source in authoritative third-party content, keeping pages updated, adding honest structured data, and making content technically accessible to crawlers.",
    },
    {
      question: "How often should I measure my AI visibility?",
      answer:
        "More often than SEO taught you. Best-practice studies recommend 7–8 or more repeated prompts per query within a measurement run, and remeasurement windows of 2–4 weeks, because single-run numbers are noisy: repeated runs of the same prompt can show source overlap as low as 32–43%.",
    },
  ],
} satisfies ResearchMeta;
