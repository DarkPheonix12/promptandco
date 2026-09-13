import type { ResearchMeta } from "@/lib/research";

export const meta = {
  slug: "local-near-me-ai-citations-2026",
  title:
    "The 'Near Me' Answer Economy: Why AI Recommends Only 1.2% of Local Businesses — and What Actually Gets Cited",
  description:
    "AI engines recommend just 1.2% of local businesses on ChatGPT and 7.4% on Perplexity versus 35.9% in Google's 3-pack. The citation evidence shows why: semantic relevance beats domain authority, Gemini cites your own site ~50% of the time while ChatGPT leans on directories, and there is a 12–18 month window before competitors catch up.",
  datePublished: "2026-09-11",
  dateModified: "2026-09-11",
  category: "Local",
  tags: ["local SEO", "near me", "Google Business Profile", "reviews", "AI Overviews", "ChatGPT", "GEO"],
  readingTimeMinutes: 9,
  faq: [
    {
      question: "Do AI engines actually recommend local businesses, or just show them?",
      answer:
        "Recommendation is still thin — and that is the opportunity. SOCi's 2026 Local Visibility Index found AI platforms recommend only about 1.2% of locations on ChatGPT and 7.4% on Perplexity, versus 35.9% visible in Google's local 3-pack. When engines do answer a 'near me' query, citations split sharply by platform: Gemini cites the business's own website about 49.6% of the time, while ChatGPT leans on general business directories (46.0%) and barely cites own sites (10.5%).",
    },
    {
      question: "Does ranking in Google's local pack or top-10 get me into AI answers?",
      answer:
        "Ranking is a proxy, not the mechanism. Top-10 organic still correlates with AI Overview inclusion — 25,000-query analyses put the #1 result inside an AI Overview about 25% of the time — but AI Overviews now appear above the pack on 68% of local searches, and the map-rank to AI-citation link does not transfer directly: SearchAtlas found heatmap average rank negatively correlated with LLM citation position. Cite-ability is decided on answer-extractability, original data, and entity consistency, not on which number your pin holds.",
    },
    {
      question: "What matters more for local AI visibility — my website, my reviews, or my Google Business Profile?",
      answer:
        "A semantic-relevance, answer-first website is the primary asset for Gemini, while review platforms and directories supply the roughly 77% of off-page citations that feed branded queries. Google Business Profile signals are modest but real: SearchAtlas found GBP composite score is the strongest business signal (~+0.16 correlation), with replied reviews (+0.11) and review count (+0.10) close behind — a supporting layer, not a switch. Schema markup alone produced no measurable 30-day citation change in Ahrefs' controlled tracking of 1,885 pages.",
    },
    {
      question: "Should I still buy local citations and directory listings (Yext, Moz Local, aggregators)?",
      answer:
        "Yes — directories are the universal floor. ChatGPT already leans on general business directories for 46.0% of its local citations, and when both engines dropped Reddit between July and September 2026, directories absorbed almost all of that share (Angi, HomeAdvisor, Expertise, Birdeye, BBB, Thumbtack rose to 19.1% of Gemini's citations). The map-prioritized play is to claim those listings, keep NAP identical everywhere, and answer the price/cost/buy queries — which trigger an AI Overview more than 80% of the time — that most local businesses leave open.",
    },
    {
      question: "Is it still early enough to win AI local search?",
      answer:
        "Yes, and the window is closing. BrightLocal's 2026 survey found 45% of consumers now use generative AI for local business recommendations — up from 6% a year earlier (a 7.5x jump) — while SOCi data shows only ~1.2–7.4% of locations are currently recommendable on AI platforms. Practitioners agree the timing is urgent: 70% of organizations expect answer-engine optimization to shape their strategy, but only about 20% have started. Local SEOs who fix answer-first service pages, original market data, and entity consistency in the next 12–18 months establish the citation baseline their competitors will inherit.",
    },
  ],
} satisfies ResearchMeta;
