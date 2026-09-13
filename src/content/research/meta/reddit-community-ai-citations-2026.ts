import type { ResearchMeta } from "@/lib/research";

export const meta = {
  slug: "reddit-community-ai-citations-2026",
  title:
    "Reddit Is the AI-Citation Source You're Quoting Wrong: The 2026 Metrics, the Volatility, and the Thread-Level Play",
  description:
    "The '46.7% of Perplexity citations' figure is a top-10 concentration number, not total volume — full-volume estimates range from 2% to 24% depending on method and window. Reddit is still the single highest-leverage community source in AI answers, but it is volatile (lawsuits, licensing), concentrated in a handful of threads, and often read without attribution. Here is the measured play.",
  datePublished: "2026-09-11",
  dateModified: "2026-09-11",
  category: "Community",
  tags: ["Reddit", "AI citations", "community", "Perplexity", "B2B SaaS", "GEO"],
  readingTimeMinutes: 9,
  faq: [
    {
      question: "Does Reddit really drive 46.7% of Perplexity's citations?",
      answer:
        "Only if you are looking at the top-10 concentration figure. That number is a share of Perplexity's ten most-cited domains, not total citation volume. Depending on the methodology and period, Reddit sits at roughly 2% (Cairrot, 1.5M prompts), 6.6% (Profound full-volume), or 20–24% (Evertune/Tinuiti). It is Perplexity's single largest source either way — but quote it with the definition attached, and check the 'as of' date.",
    },
    {
      question: "What kind of Reddit content do AI engines actually cite?",
      answer:
        "Structure over engagement. The five dominant formats are direct-answer Q&A threads, 'X vs Y' comparisons, troubleshooting/how-to threads, pricing and value debates, and balanced pros-and-cons reviews. Semrush found 80% of cited posts have fewer than 20 upvotes and 70% fewer than 20 comments; the median cited thread is about 900 days old. The most-cited format is a 300–600-word comment with named experience and real numbers.",
    },
    {
      question: "Is Reddit worth it for B2B SaaS companies specifically?",
      answer:
        "Yes, but the payoff is concentrated. Roughly 35% of Reddit-sourced B2B SaaS citations come from just five subreddits (r/SaaS, r/marketing, r/entrepreneur, r/smallbusiness, r/startups), and a single brand's visibility typically rests on 4–5 'anchor' threads that carry most of its retrievals. For any vendor, the practical move is mapping which buyer-matched subreddit threads already rank for your category, then contributing substantive answers to those threads.",
    },
    {
      question: "Do AI engines actually show Reddit as a source, or just read it?",
      answer:
        "Both, and the gap is the story. Discovered Labs measured ChatGPT allocating about 27% of its internal search slots to Reddit yet showing Reddit in only 0.35% of visible citations. Google AI Overviews retrieves Reddit often (27.8% of cases in one June 2026 study) but cites it far less. Reddit routinely shapes AI answers without any visible attribution — which is why quote-tracking alone understates its influence.",
    },
    {
      question: "Is Reddit AI visibility risky or volatile?",
      answer:
        "Yes, treat it as fragile. ChatGPT's Reddit citation share collapsed from roughly 60% to under 10% in a week in September 2025 during a licensing dispute (recovering to ~13%), and Reddit's October 2025 lawsuit against Perplexity preceded an ~86% drop in Perplexity's Reddit citations. ZeroClick Labs found Perplexity's Reddit retrieval fell to 3.5% by June 2026. A strategy built on one platform's current share is a short-lived strategy.",
    },
  ],
} satisfies ResearchMeta;
