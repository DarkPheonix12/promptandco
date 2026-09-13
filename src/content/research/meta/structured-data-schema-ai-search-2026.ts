import type { ResearchMeta } from "@/lib/research";

export const meta = {
  slug: "structured-data-schema-ai-search-2026",
  title: "Structured Data After the FAQ Death: What Schema Actually Does in 2026",
  description:
    "Eight schema types are dead. Google says no special markup is required. The Ahrefs study found no direct citation lift. So what is JSON-LD actually doing — and why does the entity layer still matter?",
  datePublished: "2026-09-11",
  dateModified: "2026-09-11",
  category: "Technical SEO",
  tags: [
    "schema markup",
    "JSON-LD",
    "FAQPage deprecated",
    "AI citations",
    "structured data",
    "entity SEO",
    "AI Overviews",
    "agent-ready",
  ],
  readingTimeMinutes: 10,
  faq: [
    {
      question: "Is schema markup required for AI Overview citations?",
      answer:
        "Google's official May 2026 guidance says no. Its exact line: 'There's no special schema.org markup you need to add' for generative AI search. The Ahrefs controlled study (1,885 pages, May 2026) found no measurable citation uplift from adding JSON-LD — AI Mode and ChatGPT moved within statistical noise. Schema still helps AI systems understand your content and resolve your entity, but it is not a ticket into AI answers. It is infrastructure.",
    },
    {
      question: "What happened to FAQ schema in May 2026?",
      answer:
        "Google fully deprecated the FAQ rich result on May 7, 2026 — the expandable question-and-answer dropdowns in Google Search stopped appearing for all sites, including government and health domains. Search Console lost FAQ reporting in June 2026; the API dropped it in August. FAQPage remains a valid schema.org type and AI engines still use it to extract clean Q&A pairs, but the rich result reward is gone. Keep FAQPage on pages with genuine visible Q&A content; stop shipping it as a rich-result tactic.",
    },
    {
      question: "Which schema types still work in 2026?",
      answer:
        "Fourteen types still earn Google rich results in 2026: Article, BreadcrumbList, Product (with MerchantListing and ProductVariants), Recipe, Event, LocalBusiness, JobPosting, Video, Organization, Speakable, Return Policy, Shipping Policy, Loyalty Program, and Carousel. Eight types are dead or irrelevant for most sites: Book Actions, Course Info, ClaimReview, Estimated Salary, Learning Video, Special Announcement, Vehicle Listing, and FAQPage. The four most impactful for AI citation specifically are Organization (entity identity), Article (authorship and freshness), FAQPage (Q&A extraction, no rich result), and BreadcrumbList (hierarchy).",
    },
    {
      question: "Does ChatGPT or Perplexity read JSON-LD directly?",
      answer:
        "Not at the point of citation selection. An experiment by searchVIU tested five major AI systems — ChatGPT, Claude, Perplexity, Gemini, and Google AI Mode — and all extracted only visible HTML during real-time page fetching. Hidden structured data (JSON-LD, Microdata, RDFa) was not processed at the point a citation decision was made. Schema works indirectly: Google and Bing parse your JSON-LD during normal crawling, feed it into their knowledge graphs and entity indexes, and AI platforms query those enriched indexes when selecting sources. Schema is an index-time input, not a runtime one.",
    },
    {
      question: "What is entity linking and why does it matter for AI citations?",
      answer:
        "Entity linking is connecting your Organization and Person schema to known entities in external databases — especially Wikipedia and Wikidata. Use the sameAs property to link your Organization to your Wikidata Q-identifier, LinkedIn, Crunchbase, and other verified profiles. Give the block a stable @id and reuse it across every page so all your content resolves to one recognized brand. Linking your content to a Wikidata identifier is widely regarded as one of the strongest 2026 signals for being retrieved and cited in generative AI, because it maps you to a known entity in the graph these engines already trust.",
    },
  ],
} satisfies ResearchMeta;
