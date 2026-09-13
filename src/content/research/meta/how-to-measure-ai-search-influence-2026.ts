import type { ResearchMeta } from "@/lib/research";

export const meta = {
  slug: "how-to-measure-ai-search-influence-2026",
  title: "How to Measure AI Search Influence in 2026: Three Layers, One Blind Spot",
  description:
    "Search Console's generative-AI report is impressions-only with no queries. GA4's native channel misses Perplexity. Only 1% of citation clicks land. The practical 2026 measurement stack.",
  datePublished: "2026-09-11",
  dateModified: "2026-09-11",
  category: "Strategy",
  tags: [
    "AI visibility",
    "measurement",
    "Search Console",
    "GA4",
    "AI Mode",
    "share of voice",
    "AI citations",
    "attribution",
  ],
  readingTimeMinutes: 10,
  faq: [
    {
      question: "How do I measure AI search visibility in 2026?",
      answer:
        "Run three layers in parallel. (1) Impressions: Google Search Console's Generative AI performance report shows how often your URLs appear in AI Overviews and AI Mode, by page, country, device, and date. (2) Referral traffic: GA4 captures AI referral clicks via its native AI Assistant channel plus a custom regex band above Referral for Perplexity and Copilot. (3) Citation presence: run a fixed 20–50 prompt battery across ChatGPT, Perplexity, Gemini, and Claude monthly, logging mention rate, citation rate, sentiment, and competitors. None of the three alone is sufficient — they measure different things.",
    },
    {
      question: "Why doesn't Google Search Console show my AI queries?",
      answer:
        "Because Google split the data across two reports. The Generative AI performance report (launched June 3, 2026) has impressions, pages, countries, devices, and dates — but no Queries, Clicks, CTR, or position dimension. The query text that SOME AI Mode turns generate lands in the main Performance report, unlabeled, as conversational fragments like \"yes go on\" — because Google counts each follow-up question in AI Mode as a new query. Google also withholds rare queries from an anonymized pool, which one practitioner measured at roughly 58% of impressions.",
    },
    {
      question: "What's the difference between mentions, citations, and clicks?",
      answer:
        "A mention is your brand being named in an AI answer's prose (with or without a link). A citation is a URL — often on a third party's domain — being linked as a source; a review site's page about you is a citation of their domain and a mention of your brand. A click is someone following a cited link to your site, which GA4 captures only when the referrer passes through. Semrush's 50,000-brand study found that in 79% of categories, the most-cited domain is not the most-mentioned brand — so track the three separately and never merge them.",
    },
    {
      question: "Why is AI traffic invisible in GA4?",
      answer:
        "Three reasons. First, GA4's native AI Assistant channel (May 13, 2026) recognizes only ChatGPT, Gemini, and Claude, with no historical backfill — Perplexity and Copilot need a custom regex channel group placed above Referral. Second, ChatGPT only began appending utm_source in June 2025, and mobile/in-app browsers often strip referrers entirely, leaving traffic in Direct. Third, Google's AI Overviews and AI Mode report as normal organic — indistinguishable from a regular click. One estimate puts unattributed AI traffic as high as 70.6%; treat GA4 as a floor, not the total.",
    },
    {
      question: "What is the minimal measurement setup for a small team?",
      answer:
        "Start free, for under an hour a month. (1) Verify the site in Search Console and Bing Webmaster Tools and read the Generative AI and Bing AI Performance reports monthly. (2) Add a GA4 custom channel group with a regex matching chatgpt.com, perplexity.ai, gemini.google.com, and claude.ai, ordered above Referral. (3) Keep a spreadsheet of 20–30 buyer-intent prompts run against ChatGPT and Perplexity monthly, logging whether you were mentioned, cited, and which competitors appeared instead. Monthly capture, quarterly trend review. Move to a paid tracker when manual work exceeds about three hours a month or you need five-plus competitors tracked.",
    },
  ],
} satisfies ResearchMeta;
