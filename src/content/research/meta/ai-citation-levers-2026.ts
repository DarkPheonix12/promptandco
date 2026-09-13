import type { ResearchMeta } from "@/lib/research";

export const meta = {
  slug: "ai-citation-levers-2026",
  title:
    "The 11 Levers of AI Citation in 2026: What Actually Decides Whether AI Assists Cite You",
  description:
    "Every lever that gets brands cited by ChatGPT, Perplexity, Gemini and Claude — evidence-ranked into gatekeepers, differentiators and refinements, with the disagreements shown plainly.",
  datePublished: "2026-09-11",
  dateModified: "2026-09-11",
  category: "Practical",
  tags: ["AI citations", "GEO", "AEO", "AI visibility", "citation levers", "AI SEO"],
  readingTimeMinutes: 15,
  faq: [
    {
      question: "What is the single most important factor for getting cited by AI?",
      answer:
        "Retrievability: whether the assistant's crawler can actually fetch and parse your page. Across a 54-study meta-analysis, URL accessibility scored the strongest citation factor (9.5/10), and crawler-visit research shows 88.5% of pages are fetched exactly once. If the page cannot be retrieved, every other lever is moot.",
    },
    {
      question: "Does schema markup actually help AI citations?",
      answer:
        "The evidence is genuinely split. The GEO-16 study found structured data associated with roughly a +39% lift, and an AirOps analysis measured 38.5% vs 32% on ChatGPT. But Ahrefs' controlled study of 1,885 schema-enabled pages against 4,000 matched controls found near-zero uplift — and a sitewide rollout reported a huge AI Overview gain but declines on ChatGPT, Gemini and Copilot. Treat schema as hygiene, not as a lever that saves weak content.",
    },
    {
      question: "Why doesn't ranking #1 on Google get me cited?",
      answer:
        "Because retrieval has disconnected from rank. The overlap between Google's organic top-10 and AI-cited sources collapsed from roughly 76% in mid-2025 to 17-38% by early 2026 in several measurements, and ChatGPT's cited sources overlap Google's top-10 by only about 6.8%. Assistants retrieve and re-rank their own candidate pool, and fan-out queries reach far past page one.",
    },
    {
      question: "Is freshness really that important for AI citations?",
      answer:
        "Yes, and engines differ in how much. ConvertMate measured ~3.2x citation share for pages updated within the last month; independent analyses put content under three months old at ~3x the citation rate of two-year-old pages. Perplexity weights freshness at roughly 40% of its ranking signal and deprioritizes content older than 30 days for fast-moving topics, while ChatGPT responds far more slowly to updates.",
    },
    {
      question: "Can I trust an 'AI visibility score' dashboard?",
      answer:
        "Check how it is measured before trusting it. AI citations are volatile — one analysis found 40-60% month-over-month churn and only ~30% of brands visible in one answer still visible in the next — and raw before/after multiples are inflated by platform growth (a controlled natural experiment found headline growth of ~6x overstates the credible intervention effect of roughly 2x). Numbers are only as good as the sampling behind them.",
    },
  ],
} satisfies ResearchMeta;
