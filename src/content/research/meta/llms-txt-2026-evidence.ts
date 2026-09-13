import type { ResearchMeta } from "@/lib/research";

export const meta = {
  slug: "llms-txt-2026-evidence",
  title:
    "llms.txt in 2026: The 137,000-Site Audit, Who Actually Reads the File, and When It Still Matters",
  description:
    "Ahrefs' 137,000-domain log audit found 97% of published llms.txt files got zero requests in a month — while the AI retrieval bots that decide citations made up 1.1% of the little traffic that existed. Who really reads the file, why it cannot move citations, and where it still pays (coding agents, WebMCP, docs).",
  datePublished: "2026-09-11",
  dateModified: "2026-09-11",
  category: "Technical",
  tags: ["llms.txt", "AI crawlers", "robots.txt", "coding agents", "WebMCP", "AI citations"],
  readingTimeMinutes: 8,
  faq: [
    {
      question: "Does publishing llms.txt help my site get cited by AI search engines?",
      answer:
        "No strong evidence exists that it does. Ahrefs' June 2026 analysis of 137,210 domains found 97% of published llms.txt files received zero requests in May 2026, and the AI retrieval bots behind ChatGPT and Perplexity answers were just 1.1% of the traffic that did exist. SE Ranking modeled ~300,000 domains and found no link between the file and AI citation frequency. It is infrastructure agents read, not a citation lever.",
    },
    {
      question: "Who actually reads llms.txt files?",
      answer:
        "Coding agents and developer tooling, then training crawlers. Claude-Code (Anthropic's coding agent) fetched the file more than any AI search or assistant bot, and the agentic-web category drove 10.5% of requests versus 1.1% for AI retrieval bots. Slackbot — a link-unfurl bot — requested the file more often than PerplexityBot did.",
    },
    {
      question: "Should I publish an llms.txt file in 2026?",
      answer:
        "Keep it proportional. It is cheap insurance and worth doing if a platform generates it for you, especially for developer-docs and API sites whose users run coding agents. But the base rate is blunt: a 97% chance nothing reads it in any given month, and no AI system 'goes looking' for files that aren't there. Do not spend budget on it expecting AI citations — spend that on the content, entity and trust levers engines have shown they read.",
    },
    {
      question: "Does Google use llms.txt?",
      answer:
        "Google Search ignores it. The AI-search guide's 'MYTHBUSTING' section says machine-readable files such as llms.txt are not required for generative-AI features, and John Mueller has called it 'a temporary crutch, perhaps to save some tokens' for coding tools, 'not done for search.' The only Google property touching it is Chrome's Lighthouse, which audits llms.txt under a new 'agentic browsing' category — developer tooling, not a ranking signal.",
    },
    {
      question: "What is the difference between robots.txt and llms.txt?",
      answer:
        "Robots.txt is a control file every crawler checks constantly — in EZY Research's 12-week logs, OpenAI's crawler fetched robots.txt 3,990 times versus 7 times for llms.txt, and Perplexity fetched llms.txt zero times. llms.txt is an optional opt-in map of your content that agents fetch when directed, not speculatively. Robots.txt decides whether AI can reach you; llms.txt is guidance for what already reached you.",
    },
  ],
} satisfies ResearchMeta;
