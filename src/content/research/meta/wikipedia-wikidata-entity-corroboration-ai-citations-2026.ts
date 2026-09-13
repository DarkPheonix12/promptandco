import type { ResearchMeta } from "@/lib/research";

export const meta = {
  slug: "wikipedia-wikidata-entity-corroboration-ai-citations-2026",
  title: "Wikipedia and Wikidata Are the Entity Corroboration Spine of AI Citations",
  description:
    "Wikipedia takes 47.9% of ChatGPT's top-10 citations and Wikipedia + Reddit drive 25%+ of them. Wikidata-verified brands earn 2.7x more AI Overview citations. The corroboration chain, with 2026 evidence.",
  datePublished: "2026-09-11",
  dateModified: "2026-09-11",
  category: "Strategy",
  tags: [
    "Wikipedia",
    "Wikidata",
    "entity SEO",
    "knowledge graph",
    "AI citations",
    "GEO",
    "brand SERP",
  ],
  readingTimeMinutes: 9,
  faq: [
    {
      question: "What share of AI citations come from Wikipedia?",
      answer:
        "In 5W's Q1 2026 audit of 680M+ citations, Wikipedia took 13.15% and Reddit 11.97% — together 25%+ of all US ChatGPT citations (Similarweb Jan–Feb 2026). Wikipedia holds 47.9% of ChatGPT's top-10 citation share and roughly 7.8% to 12.1% of all ChatGPT citations depending on the study. Resocial's weighted average puts Wikipedia at 32% of citations across five engines.",
    },
    {
      question: "Do I need a Wikipedia article to be cited by AI?",
      answer:
        "No — it is a strong trigger, not a requirement. Wikidata applies no notability threshold, so a well-referenced Wikidata item, complete Organization schema with a sameAs array, and consistent third-party corroboration can establish an entity without a Wikipedia article. RanketAI notes top RAG-path citations are achievable without Wikipedia. If your brand qualifies under Wikipedia's notability guidelines, an accurate, well-sourced entry remains one of the highest-leverage activities available.",
    },
    {
      question: "How does Wikidata help with AI citations?",
      answer:
        "Wikidata gives your brand a machine-readable identity — a permanent QID that disambiguates you from similarly named entities and bridges your site to the knowledge graphs AI consults. Kalicube's analysis of 75,000+ brands found Wikidata-verified brands are 3.2× more likely to earn a knowledge panel and 2.7× more likely to appear in AI Overview citations. In an Ahrefs case study, a Wikidata entry appeared in Google's graph the same day the site's Organization schema added the sameAs link.",
    },
    {
      question: "Is Wikipedia the top source on every AI engine?",
      answer:
        "No. Wikipedia is top-5 on every major platform, but it is close to ChatGPT-anchored: Conductor's seven-month, 1,056-point study found ChatGPT and ChatGPT Search are the only Wikipedia-anchored engines. Perplexity is the inverse — Reddit-led (46.7% of its top-10 share) with Wikipedia near 12.4%. Gemini runs ~38%, AI Overviews ~25%, and Claude weighs Wikipedia plus tier-1 editorial heavily.",
    },
    {
      question: "What's the fastest path to entity corroboration?",
      answer:
        "The four-node chain: (1) Organization schema with sameAs on your site, (2) a well-referenced Wikidata entry with your QID, (3) third-party profiles and press that describe you the same way, and (4) a Wikipedia article if you meet notability. Legal, healthcare, finance, and mid-market brands not eligible for Wikipedia can use Wikidata plus directory, review, and government-registry listings. Reach ~30 authoritative corroborating sources for full knowledge-panel confidence.",
    },
  ],
} satisfies ResearchMeta;
