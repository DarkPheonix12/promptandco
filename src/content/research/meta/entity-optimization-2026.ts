import type { ResearchMeta } from "@/lib/research";

export const meta = {
  slug: "entity-optimization-2026",
  title:
    "Entity Optimization in 2026: Why AI Engines Cite Brands They Can Resolve — and No One Else",
  description:
    "Entity resolution happens before citation selection. Why recognition gates every other lever, the 2026 evidence, and a four-part build: entity home, Wikidata QID, identity consistency, corroboration.",
  datePublished: "2026-09-11",
  dateModified: "2026-09-11",
  category: "Technical",
  tags: ["entity SEO", "knowledge graph", "entity signals", "sameAs", "Wikidata", "brand entity"],
  readingTimeMinutes: 12,
  faq: [
    {
      question: "What is the difference between entity recognition and a citation?",
      answer:
        "Recognition is whether an engine can confidently resolve your brand as one thing before it retrieves anything. Citation is whether your page is then named and linked in the answer. A controlled 2026 experiment found page-level entity density had no effect on citations at all while a test domain had not first cleared recognition — recognition gates everything downstream.",
    },
    {
      question: "Is a Wikidata entry required to get cited by AI?",
      answer:
        "No, but it is the cheapest strong disambiguation anchor available. Wikidata has no notability threshold — unlike Wikipedia — and feeds Google's Knowledge Graph as machine-readable data. Pointing your Organization schema's sameAs array at your QID closes the loop in both directions.",
    },
    {
      question: "What is a 'ghost citation'?",
      answer:
        "Growth Memo's 2026 analysis found cases where a brand's content informs an answer without the brand being named — content cited, entity absent. It happens when a page wins retrieval but the engine has no high-confidence entity record behind the brand, so it borrows the content and credits a competitor or nobody.",
    },
    {
      question: "How long does entity work take to show up in AI answers?",
      answer:
        "The identity layer — an Organization schema with a complete sameAs array, a Wikidata item, and consistent profiles — registers within weeks to a few months. Third-party corroboration compounds over many months. Recognition itself typically takes a quarter or more in crowded categories; it is a slow, compounding signal, not a same-week switch.",
    },
    {
      question: "Does entity optimization replace content and technical work?",
      answer:
        "No — it sits underneath them. Recognition decides whether your page-level levers reach the citation layer at all; content quality decides whether a recognized entity wins the slot. The GEO Lab zero-citation experiment cut both ways: density helped nothing before recognition, and original, brand-owned concepts in the same test showed 20% citation after recognition cleared. Both layers matter.",
    },
  ],
} satisfies ResearchMeta;
