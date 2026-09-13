import type { ResearchMeta } from "@/lib/research";

export const meta = {
  slug: "ai-mode-vs-ai-overviews-2026",
  title:
    "Google AI Is Two Engines: The 13.7% Citation Overlap Between AI Mode and AI Overviews",
  description:
    "AI Overviews and AI Mode agree on what to say 86% of the time — and cite different sources on 86% of queries. The per-query URL overlap is just 13.7%. That gap is a measurement-units story, a divergence mechanism, a source-type divide, and a dual-surface optimization play.",
  datePublished: "2026-09-11",
  dateModified: "2026-09-11",
  category: "Strategy",
  tags: ["AI Overviews", "AI Mode", "Google", "citations", "GEO", "query fan-out"],
  readingTimeMinutes: 9,
  faq: [
    {
      question: "Do AI Mode and AI Overviews cite the same sources?",
      answer:
        "Rarely, on a per-query basis. Ahrefs' 540,000-query-pair study of US data shows citation URL overlap of just 13.7% (16.3% for top-3 sources), with word-level overlap around 16%. Replicate studies land in the same range: Finseo measured 13.7% URL and 18.7% domain overlap across 42,937 prompt-days, and SE Ranking roughly 10.7% URL and 16% domain. There is a catch about units: while the two surfaces diverge query-by-query, they are actually the most similar pair at aggregate level — BrightEdge's top-100 domain comparison shows AI Overviews and AI Mode overlap about 59%.",
    },
    {
      question: "Why do they cite different sources if they are both Google?",
      answer:
        "The two surfaces run different retrieval pipelines. Google states AI Overviews and AI Mode may use different models and techniques, and AI Mode splits a query into multiple parallel sub-questions (query fan-out), scoring passages against those sub-questions rather than whole pages. That produces more, longer answers with a wider source set: about 9–11 URLs per answer versus 6–8 for AI Overviews, roughly 4x the answer length, and more entities. AI Mode is also more likely to actually cite what it retrieves (97% vs 89% of responses).",
    },
    {
      question: "If I am cited in AI Overviews, will I appear in AI Mode?",
      answer:
        "Frequently, but not automatically, and never alone. Ahrefs found that 61% of the time AI Mode includes the entities AI Overviews used — then adds more on top. Victorious' study of 1,540 queries found 77% of unique cited domains appear on only one surface, with zero exact citation matches. Track each surface separately; treat 'cited in AI Mode but not AI Overviews' (or vice versa) as an actionable signal rather than a contradiction.",
    },
    {
      question: "Should I optimize for AI Mode or AI Overviews?",
      answer:
        "Both, because they serve different jobs and their weight is skewing how you measure results. AI Overviews has far broader distribution (~2.5B monthly users vs ~1B reported for AI Mode) and skews toward video and community sources. AI Mode cites more, answers 4x longer, and prefers encyclopedic and market-research sources. And remember that either surface suppresses organic clicks: Seer Interactive measured organic CTR dropping from 1.76% to 0.61% when an AI Overview is present. Measure visibility and revenue, not clicks.",
    },
    {
      question: "Does ranking at the top of organic search get me into AI Overviews or AI Mode?",
      answer:
        "Partially, and less every month. BrightEdge's 16-month data shows AI Overview citations that come from pages in the organic top-10 have grown from 32.3% to 54.5%, but 45.5% of citations still come from pages outside the top organic results — and AI Mode diverges further because it scores passages against sub-questions. Neither surface is static either: roughly 45% of an AI Overview's citations change between generations, so any snapshot needs a re-baseline date.",
    },
  ],
} satisfies ResearchMeta;
