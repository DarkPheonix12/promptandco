import type { ResearchMeta } from "@/lib/research";

export const meta = {
  slug: "youtube-ai-citations-video-search-2026",
  title:
    "YouTube Is a Text Asset: How AI Reads and Cites Your Videos in 2026",
  description:
    "94% of YouTube AI citations go to long-form videos. Views and subscribers show near-zero correlation with citation frequency. AI reads transcripts, not pixels. Data-backed playbook.",
  datePublished: "2026-09-11",
  dateModified: "2026-09-11",
  category: "Strategy",
  tags: [
    "YouTube",
    "video SEO",
    "AI citations",
    "GEO",
    "video marketing",
    "Perplexity",
    "AI Overviews",
    "transcript optimization",
  ],
  readingTimeMinutes: 8,
  faq: [
    {
      question: "Do AI engines actually watch YouTube videos?",
      answer:
        "Almost never. Most AI systems read the video's transcript, description, and chapter markers — the text layer — not the footage itself. The one exception is Gemini, which can process YouTube URLs including audio and visual frames. Claude has no direct YouTube access. For every other engine, the transcript is the only way your video's content can be read and cited. A visually impressive video with a missing or inaccurate transcript is invisible to AI retrieval.",
    },
    {
      question: "What percentage of AI citations come from YouTube?",
      answer:
        "YouTube accounts for 31.8% of all social media citations across six AI search platforms, making it the second most-cited social platform behind Reddit at 46.4% (OtterlyAI, Mar 2026). But the distribution is sharply uneven: Perplexity drives 38.7% of YouTube citations, Google AI Overviews 36.6%, and AI Mode 19.6%. ChatGPT cited YouTube just 49 times out of 1.6 million citations — 0.003% (Indexly, May 2026). If your audience uses ChatGPT, video is not your path in.",
    },
    {
      question: "Do views, likes, or subscribers matter for AI citations?",
      answer:
        "Almost not at all. Across 100 million+ AI citations, subscriber count showed a Pearson correlation of negative 0.03 with citation frequency — effectively zero (OtterlyAI, Mar 2026). 40.83% of AI-cited videos had fewer than 1,000 views, and 36% had fewer than 15 likes. AI systems evaluate reference value and structural clarity, not popularity. A small channel with a tightly structured, well-described video on a specific topic can out-cite a 500,000-subscriber channel.",
    },
    {
      question: "How do timestamps and chapters affect AI citations?",
      answer:
        "Timestamps turn one video into multiple citable assets — but only on Google. Of timestamped YouTube citations, 73% appeared in Google AI Overviews and 27% in AI Mode. No other AI platform cited timestamps during the study window (OtterlyAI, Mar 2026). Among timestamped videos cited by Google's AI platforms, 78% were cited more than once, typically across two to five distinct chapters. Only 31% of cited videos had any timestamp structure, suggesting a wide optimization gap.",
    },
    {
      question: "Which AI engines cite YouTube the most?",
      answer:
        "Perplexity (38.7% of all YouTube citations) and Google AI Overviews (36.6%) drive the vast majority. Together with AI Mode (19.6%), they account for over 94% of YouTube citations. ChatGPT trails at 4.4%, Copilot at 0.5%, and Gemini at 0.2% (OtterlyAI, Mar 2026). Perplexity also has the highest YouTube citation rate as a share of its own citations at 3.75%, while ChatGPT's rate is 0.003%. YouTube is a Perplexity and Google surface, not a ChatGPT one.",
    },
  ],
} satisfies ResearchMeta;
