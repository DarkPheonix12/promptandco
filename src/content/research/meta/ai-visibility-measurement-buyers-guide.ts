import type { ResearchMeta } from "@/lib/research";

export const meta = {
  slug: "ai-visibility-measurement-buyers-guide",
  title:
    "How to Measure AI Visibility in 2026: A Buyer's Guide to Citation-Intelligence Tools",
  description:
    "The tools market exploded before the measurement standard did. What citation-intelligence tools can and cannot prove, how to vet them, and a self-serve system that costs nothing.",
  datePublished: "2026-09-11",
  dateModified: "2026-09-11",
  category: "Practical",
  tags: ["citation tracking", "AI SEO tools", "measurement", "AEO", "analytics"],
  readingTimeMinutes: 10,
  faq: [
    {
      question: "Can any tool tell me my 'AI score' or rank?",
      answer:
        "Treat single-number scores with suspicion. Assistants are non-deterministic and re-fetch on their own schedules, so a stable, comparable ranking of your site across engines requires controlled, repeated sampling. Any product that sells you a definitive AI rank without a published methodology and raw-data export is selling you a projection.",
    },
    {
      question: "What should I measure instead of a score?",
      answer:
        "Five things: whether you are retrieved at all, over which time window, on which assistants, from which pages, and whether the assistant links, quotes, or paraphrases you. Retrieval, page-level source share, and verbatim attribution are all more honest and more actionable than a composite score.",
    },
    {
      question: "How often should I re-measure AI visibility?",
      answer:
        "Weekly for trend-sensitive pages, monthly for evergreen. Citation pools churn on roughly four-week windows — partly because answer engines cache source snapshots — so monthly at minimum, and weekly if you are running an active refresh program.",
    },
    {
      question: "Do I need to buy a tool at all?",
      answer:
        "Not to start. A fixed battery of twenty to fifty money queries, run manually through a few assistants on a weekly cadence, with sources and quoted text recorded, gives you a defensible baseline within a month. Tooling is worth buying once the manual system proves the signal exists for your category.",
    },
    {
      question: "How do I trust a vendor's claims about measurement methodology?",
      answer:
        "Ask four questions: what queries and sample, how often re-measured, does it distinguish surfaced vs quoted attribution, and can you export the underlying raw data. If a vendor cannot answer all four in writing, treat their dashboard numbers as directional at best.",
    },
  ],
} satisfies ResearchMeta;
