import type { ResearchMeta } from "@/lib/research";

export const meta = {
  slug: "per-engine-citation-divergence-2026",
  title:
    "Five Engines, Five Rules: The 2026 Per-Engine Citation Divergence Matrix",
  description:
    "ChatGPT, Perplexity, Gemini, Copilot, and Google AI Mode cite fundamentally different sources for identical queries. A data-backed per-engine citation matrix for 2026.",
  datePublished: "2026-09-11",
  dateModified: "2026-09-11",
  category: "Research",
  tags: [
    "AI search",
    "citation analysis",
    "ChatGPT",
    "Perplexity",
    "Gemini",
    "Copilot",
    "AI Mode",
    "source diversity",
    "cross-engine optimization",
  ],
  readingTimeMinutes: 11,
  faq: [
    {
      question: "Do AI search engines cite the same sources for the same query?",
      answer:
        "Almost never. A study of 559 citations across ChatGPT, Perplexity, and Gemini found that 72% of cited domains appeared on exactly one engine, and only 4% appeared on all three. A separate study of 31,128 citations across four engines found source overlap as low as 0.9% between ChatGPT and Perplexity. However, brand overlap — meaning the same company mentioned regardless of which page is cited — ranges from 35% to 42% across all engine pairs. The engines agree on who matters but disagree on which page proves it.",
    },
    {
      question: "Which AI engine cites the most sources per answer?",
      answer:
        "In a fixed-basket study of 735 queries across five engines, Google AI Mode cited an average of 19.5 sources per answer, ChatGPT cited 13.3, Perplexity cited 10.6, Copilot cited 5.1, and Gemini cited just 4.4 — though when Gemini cited at all, it averaged 13.4. Perplexity consistently delivers the highest raw citation count in most independent studies, ranging from 7.8 to 21.9 sources per answer depending on methodology.",
    },
    {
      question: "What source type does each AI engine prefer?",
      answer:
        "Each engine has a distinct editorial identity. ChatGPT favors Wikipedia (47.9% of citations) and editorial authority sites. Perplexity favors Reddit (46.7%) and live web content with broad diversity. Google AI Mode relies heavily on its own search index, with 58% of citations from the top-10 results. Gemini is anchored by YouTube across every intent category and delivers the sparsest citations. Copilot draws from LinkedIn (43.8% of social citations) and the Microsoft ecosystem. Claude favors institutional and editorial brand domains, citing no Reddit, YouTube, or Wikipedia.",
    },
    {
      question: "Is traditional SEO enough to get cited across all AI engines?",
      answer:
        "No. Traditional SEO targets Google's top-10, but across four independent studies, 74% to 89% of pages cited by AI engines are not in Google's top-10. Domain authority explains just 5% of citation behavior across engines. A multi-investment approach is required: Wikipedia and authoritative editorial for ChatGPT and Claude, Reddit for Perplexity and Google AI products, YouTube for Gemini and AI Overviews, and structured brand content for Copilot.",
    },
    {
      question: "Which AI engine matters most for B2B buyers?",
      answer:
        "It depends on the journey stage. ChatGPT reaches the broadest audience with authority-focused citations. Perplexity has the highest citation density and strongest conversion signals. Google AI Overviews reaches the widest Google surface area. Claude matters for technical evaluation with its institutional-source preference. Copilot captures Microsoft-ecosystem and LinkedIn audiences. The data shows that no single engine dominates all stages — a multi-engine presence is the only sustainable B2B strategy in 2026.",
    },
  ],
} satisfies ResearchMeta;
