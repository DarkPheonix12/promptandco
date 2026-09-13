import type { ResearchMeta } from "@/lib/research";

export const meta = {
  slug: "ai-crawlers-2026-readiness",
  title:
    "AI Crawlers in 2026: Are Bots Actually Reading Your Site? A Technical Readiness Playbook",
  description:
    "A dealer's-eye map of the AI crawler landscape — GPTBot, ClaudeBot, PerplexityBot, Google-Extended and friends — and the technical levers that decide whether an AI agent can parse your content at all.",
  datePublished: "2026-09-11",
  dateModified: "2026-09-11",
  category: "Technical",
  tags: ["AI crawlers", "robots.txt", "technical SEO", "AI readiness", "AEO"],
  readingTimeMinutes: 10,
  faq: [
    {
      question: "Does robots.txt get me cited by AI?",
      answer:
        "No. robots.txt is an opt-out mechanism, not an opt-in one. Allow-listing every AI crawler does nothing to make you citable; it only avoids blocking them. The levers that matter are technical: parseable server-rendered HTML, real content per URL, fast responses, honest structured data, and freshness.",
    },
    {
      question: "Should I block AI crawlers?",
      answer:
        "Only if you have a licensing or data-protection reason, or you are seeing abusive fetch volume — not as a visibility tactic. Blocking well-known assistants' crawlers removes the path for your pages to be retrieved and cited, and undisclosed agents will keep coming regardless.",
    },
    {
      question: "Does Google's robots.txt automatically cover AI Mode?",
      answer:
        "Not reliably. Google has stated that robots.txt is not designed to govern every AI surface, and AI experiences can draw on independent indexing. If you rely on robots.txt to exclude content from AI, you should treat that as a tested assumption, not a guarantee.",
    },
    {
      question: "Does llms.txt help my AI rankings?",
      answer:
        "Google has stated that llms.txt carries no special ranking weight. It can still be useful as a human-maintained map of your content, but it is not a ranking lever.",
    },
    {
      question: "What is the single biggest technical blocker to AI citations?",
      answer:
        "Content that only exists after JavaScript runs client-side. In a million-citation technical audit, roughly 73% of sampled sites carried at least one technical barrier to being cited — and client-side rendering was the most common one. If your page's body isn't in the initial HTML, an agent may never see it.",
    },
  ],
} satisfies ResearchMeta;
