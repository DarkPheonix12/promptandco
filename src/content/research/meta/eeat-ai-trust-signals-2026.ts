import type { ResearchMeta } from "@/lib/research";

export const meta = {
  slug: "eeat-ai-trust-signals-2026",
  title:
    "E-E-A-T for the Machine: How AI Engines Operationalize Trust in 2026",
  description:
    "E-E-A-T was a human rater rubric; AI search has turned it into machine-extractable signals. The 2026 evidence on provenance, corroboration over links, author entities, and what is still honestly contested.",
  datePublished: "2026-09-11",
  dateModified: "2026-09-11",
  category: "Strategy",
  tags: ["E-E-A-T", "trust signals", "provenance", "authorship", "corroboration", "AI citations"],
  readingTimeMinutes: 11,
  faq: [
    {
      question: "Is E-E-A-T a ranking factor for AI search?",
      answer:
        "No — for either classic or AI search. E-E-A-T is a description of the signals humans raters look for, and Google says it is not a single ranking factor. What AI engines do is infer the same qualities from signals they can parse: named authors, third-party mentions, consistent facts, methodology and sourcing. The four pillars still structure the work; they just no longer pass through a human evaluator.",
    },
    {
      question: "What most separates cited pages from uncited pages in 2026?",
      answer:
        "Provenance and corroboration. A 2026 comparison of 100 frequently-cited and 100 rarely-cited sources across ChatGPT, Perplexity and Google AI Overviews found cited sources averaged 8–12 external citations and updates per piece, versus 2–3 for uncited ones. A single strong trust signal was rarely decisive; pages missing more than two out of five minimum signals (named author, transparent about page, dates, sourcing, external validation) failed mainly on trust itself.",
    },
    {
      question: "Do I need author Person schema and a 'reviewedBy' role?",
      answer:
        "The machine-readable part of expertise is a resolvable author entity: a Person with a stable @id, a real browsable about page, credentials, and sameAs links. Whether a separate reviewer ('reviewedBy') matters varies by engine and topic — it is most heavily weighted in editorial-heavy engines and on YMYL content. But an anonymous byline is a negative signal everywhere; mark up what is true, and never ship an @id that points to a page that does not exist.",
    },
    {
      question: "Does citing trustworthy sources guarantee accurate AI answers?",
      answer:
        "No, and this is the most under-discussed finding of the year. A large 2026 audit of Google AI Overviews (55,393 queries, 98,020 atomic claims) found 11% of claims were unsupported by the cited pages — and found source quality and claim fidelity were largely independent. Trust signals raise your citation odds; they do not make the engine's synthesis correct. Do not optimize trusted content into answers that then assert something you never said.",
    },
    {
      question: "How fast can trust signals start producing citations?",
      answer:
        "Fast for the retrieval layer, slow for the reputation layer. Recency metadata, semantic structure and valid structured data correlate most strongly with citation in controlled audits and can be shipped in weeks. Corroboration — the mentions, listings and third-party coverage that move the most weight in 2026 — compounds over 6–18 months. New sites in one study earned a first AI citation within three months with a deliberate trust-and-retrieval program; 'earned authority' is the slow half.",
    },
  ],
} satisfies ResearchMeta;
