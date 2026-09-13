import type { ResearchMeta } from "@/lib/research";

export const meta = {
  slug: "schema-ai-citations-2026-evidence",
  title:
    "Schema Is Not an AI Citation Lever: The 2026 Controlled Evidence, the Correlation Trap, and Where Markup Still Pays",
  description:
    "Cited pages are 3x more likely to have JSON-LD — yet controlled tests found adding schema produced no citation lift. Why the correlation misleads, what engines actually read, the attribute-rich nuance, and the five places markup still earns its keep.",
  datePublished: "2026-09-11",
  dateModified: "2026-09-11",
  category: "Technical",
  tags: ["schema", "JSON-LD", "structured data", "FAQ rich results", "llms.txt", "AI citations"],
  readingTimeMinutes: 11,
  faq: [
    {
      question: "Does adding schema markup increase citations on pages AI already cites?",
      answer:
        "The best-controlled 2026 evidence says no. Ahrefs tracked 1,885 pages that added JSON-LD against ~4,000 matched controls across Google AI Overviews, AI Mode and ChatGPT: no statistically significant uplift on any platform (AI Mode +2.4%, ChatGPT +2.2%, AI Overviews −4.6%). Four separate statistical tests converged on the same null result. Markup may help a page clear initial crawling or indexing, but it does not push an already-visible page higher.",
    },
    {
      question: "Why do AI-cited pages always seem to have schema?",
      answer:
        "Correlation without causation. In a 6-million-URL analysis, cited pages were roughly three times more likely to carry JSON-LD (53% vs 19%) — but the sites that implement structured data also invest in technical SEO, authoritative content, links and maintenance, which are the actual citation drivers. Once you control for ranking position and authority (Fischman's corrected models; Ahrefs' difference-in-differences), the schema effect collapses to zero.",
    },
    {
      question: "Do AI engines even read JSON-LD during retrieval?",
      answer:
        "Not at the citation-selection step. Live-retrieval tests (searchVIU) across ChatGPT, Claude, Perplexity, Gemini and AI Mode found all five extract only visible HTML; hidden JSON-LD, Microdata and RDFa were ignored. Williams-Cook's planted tests show engines can read markup the same way they read ordinary text — not as validated structured objects. The one documented counter-example: Bing's LLMs (which power Copilot and parts of ChatGPT's index) are explicitly said to benefit from schema, and Google's own structured-data pipeline feeds training corpora.",
    },
    {
      question: "Is attribute-rich schema worth more than generic schema?",
      answer:
        "Carefully. One 730-citation study found Product/Review schema with populated prices and ratings cited at 61.7% vs 41.6% for generic types — but pages with no schema at all sat at 59.8%. The honest reading: dense facts win, and visible fact text alone nearly matched rich markup. Markup is not the unlock; the concrete, quotable facts are. Keep those facts visible in prose and in the markup, and treat schema as infrastructure, not as the lever.",
    },
    {
      question: "What about FAQ schema and llms.txt — do they still matter?",
      answer:
        "Both have narrow, shrinking roles. FAQ rich results were fully sunset by Google in May 2026, and controlled tests found FAQPage schema neutral for AI retrieval (−1.7% over 480 queries). llms.txt: Ahrefs' 137,000-domain audit found 97% of published files received zero requests in May 2026, and the largest AI consumer was agentic/coding tooling (Claude-Code), not citation engines. Neither is an AI-citation lever; both retain legitimate niche uses.",
    },
  ],
} satisfies ResearchMeta;
