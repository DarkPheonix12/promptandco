import type { ResearchMeta } from "@/lib/research";

export const meta = {
  slug: "saas-ai-search-citation-playbook-2026",
  title: "The SaaS AI Search Playbook: Two Citation Pipelines, One Vertical",
  description:
    "ChatGPT pulls 68.8% of SaaS citations from vendor websites; Perplexity pulls 79% from third parties. G2 now owns 55-58% of software-review influence. The two-pipeline SaaS playbook, with 2026 evidence.",
  datePublished: "2026-09-11",
  dateModified: "2026-09-11",
  category: "Strategy",
  tags: [
    "SaaS",
    "B2B software",
    "G2",
    "AI citations",
    "ChatGPT",
    "Perplexity",
    "GEO",
    "pricing pages",
    "comparison pages",
  ],
  readingTimeMinutes: 10,
  faq: [
    {
      question: "What share of SaaS AI citations come from review sites like G2?",
      answer:
        "G2's network — G2, Capterra, GetApp, and Software Advice — accounts for about 8% of citations across niche B2B software prompts, with G2.com itself the single most-cited domain at 5.8% (Overthink Group, 1,263 prompts, 2026). G2 supplies roughly 55% of AI-cited SaaS references (GoGoChimp, 2026), and Capterra presence is effectively compulsory: every ChatGPT-cited tool in a 2026 study had Capterra reviews and 99% had G2 reviews. Perplexity drives most of this — it contributes 71% of all citations G2 earns.",
    },
    {
      question: "Why does ChatGPT cite vendor websites directly but Perplexity doesn't?",
      answer:
        "Different retrieval architectures. ChatGPT runs site-restricted fan-out queries and pulls 68.8% of its SaaS citations from brand-owned websites, citing vendor pages first in 38% of pricing answers (Analyze, 22,295 answers; Poyar, 7,600 responses). Perplexity, Gemini, and Claude pull 79% of product-query citations from third-party content — blogs, comparisons, and review platforms. The same brand faces a website-first pipeline on ChatGPT and a third-party-first pipeline everywhere else, which is why using the same materials in parallel is the core of the playbook.",
    },
    {
      question: "Should my SaaS invest in its own website or third-party content first?",
      answer:
        "Both, but on different engines. For ChatGPT, invest in your own site: clear pricing, strong product pages, docs, and comparison pages — ChatGPT now cites vendor pages 8 to 56% of the time across model versions. For Perplexity and Google AI Mode, invest in third-party placement: G2 and Capterra review velocity (50–75 reviews for meaningful visibility), listicle inclusion, and editorial. Directory citations add 23.9 percentage points of brand mention, and brand-website citations add 15.8 (Analyze, 2026). Which investment dominates depends on which engine your buyers use to research first.",
    },
    {
      question: "Why does AI cite third-party pricing instead of my pricing page?",
      answer:
        "Because most pages are not AI-readable. Only 57% of Cloud 100 pricing pages are fully readable to AI bots, and roughly a third of agent pricing sessions hit access errors — pushing the agent to third-party blogs for 58% of its content (Poyar; Siteline, 534 sessions). When the vendor's site fails, AI answers fall back to Vendr (18.7% of runs), Reddit (18.6%), and G2 (15.9%). The fix is a pricing answer stack: a server-rendered pricing page, natural-language FAQs, billing documentation, and explicit units — the pattern that lets Plaid's docs appear in 70% of answers about its pricing.",
    },
    {
      question: "What should I do if I don't control the comparison pages about my product?",
      answer:
        "Publish your own. Brands win only 33% of \"brand vs rival\" searches and 16% of \"brand alternatives\" searches with their own page — the other two-thirds are answered by a rival's comparison page, an affiliate listicle, or a review site (AreYouFoundByAI, 1,001 SERPs). Because comparison pages are declared ChatGPT citation magnets (cited 3.7× more than feature pages), publishing an honest head-to-head page for each pair AI actually names against you converts a surrendered query into your best citation surface.",
    },
  ],
} satisfies ResearchMeta;
