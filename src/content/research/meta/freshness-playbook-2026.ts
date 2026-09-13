import type { ResearchMeta } from "@/lib/research";

export const meta = {
  slug: "freshness-playbook-2026",
  title:
    "The 2026 Freshness Playbook: How Content Updates Actually Move AI Citation Rates",
  description:
    "The 3.2x citation gap between month-old and year-old pages, why recency works inside answer engines, and a tiered update system you can run without gutting your archive.",
  datePublished: "2026-09-11",
  dateModified: "2026-09-11",
  category: "Practical",
  tags: ["freshness", "content refresh", "content lifecycle", "citation growth", "AEO"],
  readingTimeMinutes: 11,
  faq: [
    {
      question: "How big is the freshness effect on AI citations?",
      answer:
        "In a 105,000-article longitudinal sample (ConvertMate, January 2026), pages updated within the previous month captured 3.2x the citation share of pages last updated a year or more ago — and over 3.8x the share of pages updated two or more years ago.",
    },
    {
      question: "Is bumping the date alone enough to refresh a page?",
      answer:
        "No. Visibly falsifying update signals trains both engines and people to distrust your timestamps, and answer systems recrawl content — not timestamps. The reliable pattern is a real content edit, a truthful visible timestamp, and a confirmation the page was re-fetched.",
    },
    {
      question: "Should I refresh old URLs or replace them?",
      answer:
        "Refresh old URLs. Google's own guidance has long been to update in place rather than move or recreate content — relocated pages lose accumulated signals and day-one re-fetch windows. New URLs also mean your citation history starts over.",
    },
    {
      question: "How often should different pages be refreshed?",
      answer:
        "Tier it. Money and trend-dependent pages: meaningful updates on a 2- to 4-week cadence. Evergreen reference: quarterly to semi-annual verification. News and data pages: continuously, where warranted. The important discipline is matching the cadence to how much the topic actually changes.",
    },
    {
      question: "What is the single biggest freshness mistake?",
      answer:
        "Rewriting away the content that originally got you cited. Refreshing means preserving, strengthening, and dating your evidence — not replacing the exact facts and quotes that a retrieval system already matched. Update the weakest sections, keep your citations citable, and repoint internal links at the refreshed page.",
    },
  ],
} satisfies ResearchMeta;
