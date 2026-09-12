/**
 * Rich per-industry page content. Each entry maps 1:1 to an industry in
 * `@/lib/data`. Copy is deliberately specific: each page must satisfy the
 * "would this exist with just the industry name swapped?" test — every page
 * carries real, cited market data (drawn from the research hub's evidence DB)
 * plus industry-specific strategy.
 */

export interface IndustryFaq {
  question: string;
  answer: string;
}

export interface IndustryDetail {
  slug: string;
  heroTag: string;
  heroTitle: string;
  heroSubtitle: string;
  /** The market data block — real, cited numbers from published 2026 studies. */
  marketData: { stat: string; label: string }[];
  intro: { heading: string; body: string[] };
  /** What AI discovery looks like in this vertical. */
  dynamics: { title: string; description: string }[];
  /** Industry-specific priorities, ordered. */
  priorities: { title: string; description: string }[];
  /** KPIs that matter in this vertical. */
  metrics: { title: string; description: string }[];
  faq: IndustryFaq[];
  relatedServices: string[];
  relatedResearch: { title: string; href: string }[];
}

export const industryDetails: Record<string, IndustryDetail> = {
  saas: {
    slug: "saas",
    heroTag: "Industry",
    heroTitle: "AI Search Optimization for SaaS",
    heroSubtitle:
      "SaaS buyers have moved their research into AI assistants. We help software brands become the shortlisted, cited and recommended answer across ChatGPT, Perplexity, AI Overviews and Copilot.",
    marketData: [
      { stat: "51%", label: "of B2B software buyers now start research with an AI chatbot more often than with Google (G2, 2026)" },
      { stat: "71%", label: "rely on AI chatbots during software research — up from ~60% seven months earlier (G2, 2026)" },
      { stat: "8.4×", label: "more citations for the top quartile of SaaS pages vs the bottom half (Digital Applied, 500-page study, 2026)" },
      { stat: "55%", label: "of AI-cited SaaS references flow through the G2 review network (GoGoChimp, 2026)" },
    ],
    intro: {
      heading: "Your next customer shortlists vendors before visiting your website",
      body: [
        "SaaS discovery has split in two. One pipeline still runs through your own domain — ChatGPT cites vendor websites first in a majority of commercial answers. The other runs through the third-party web: review platforms, comparison listicles and community threads that Perplexity, Gemini and Claude lean on heavily.",
        "This split changes what \"being visible\" means for a software company. Ranking for your category head term no longer guarantees you appear when a buyer asks an assistant to compare vendors in your niche. And because roughly 70% of citations for \"best software\" queries come from listicle-style pages, the third-party footprint often matters as much as your own site.",
        "Our SaaS work starts by measuring which pipeline is failing you — website-first retrieval, third-party corroboration, or both — then builds the specific signals each pipeline reads: answer-ready product and pricing pages, structured data, review-platform presence and comparison content that can actually be cited.",
      ],
    },
    dynamics: [
      {
        title: "Two pipelines, two playbooks",
        description:
          "ChatGPT skews to vendor domains for commercial software answers; Perplexity and Gemini skew to third-party sources. Optimizing only your website leaves the second pipeline — and most Perplexity-era buyers — uncovered.",
      },
      {
        title: "Comparison content is the #1 citation magnet",
        description:
          "Pages comparing vendors or listing alternatives are the most-cited format for software commercial queries — yet most SaaS companies publish almost none, because they fear sending traffic to competitors. The citation data says publish them anyway.",
      },
      {
        title: "Review platforms are retrieval infrastructure",
        description:
          "After the G2–Capterra consolidation, a single network underlies the majority of software-review citations. A credible, current, well-described profile there is now part of technical SEO for AI, not optional PR.",
      },
      {
        title: "Pricing pages fail the machines",
        description:
          "Most SaaS pricing pages are partially unreadable to AI agents — heavy client-side rendering, image-based tables, no text fallback. In studies of agentic browsing, error sessions fall back to third-party sources the majority of the time.",
      },
    ],
    priorities: [
      {
        title: "Make product and pricing pages AI-readable",
        description:
          "Server-rendered pricing, plain-text plan tables, explicit feature descriptions and FAQ blocks that answer the questions buyers actually ask assistants.",
      },
      {
        title: "Publish honest comparison and alternatives pages",
        description:
          "\"[Category] vs [category]\", \"[Competitor] alternatives\", and honest market-map pages — structured to be extractable, written to be fair. This is the highest-leverage content gap in most SaaS programs.",
      },
      {
        title: "Build the review and directory layer",
        description:
          "Complete, current, consistently described profiles on the review platforms your category's answers are built from — with real reviews, earned not incentivized.",
      },
      {
        title: "Engineer the documentation layer",
        description:
          "Docs, changelogs and integration pages are heavily retrieved for technical categories. We structure them so assistants can quote them accurately.",
      },
      {
        title: "Measure share of answer, not share of voice",
        description:
          "A fixed prompt panel across ChatGPT, Perplexity, AI Overviews and Copilot, tracked monthly: mention rate, citation share, recommendation position and factual accuracy.",
      },
    ],
    metrics: [
      { title: "Commercial prompt mention share", description: "How often your brand appears for buying-intent prompts in your category, across engines." },
      { title: "Citation share by source type", description: "Vendor-domain vs review-platform vs listicle vs community — so you know which pipeline to invest in." },
      { title: "Accuracy rate", description: "Whether AI systems describe your pricing, features and positioning correctly — the failure mode nobody tracks." },
      { title: "Assisted pipeline", description: "Self-reported attribution and dark-funnel surveys connecting AI answers to trials and demos." },
    ],
    faq: [
      {
        question: "How is AI search optimization different for SaaS than other industries?",
        answer:
          "Two reasons. First, SaaS has the most mature third-party citation layer — review platforms and listicles carry unusual weight, so the work extends well beyond your own domain. Second, B2B software buyers are the heaviest adopters of AI-assisted research, so the commercial stakes per impression are higher.",
      },
      {
        question: "Should a SaaS company block AI crawlers from its product docs?",
        answer:
          "Usually not. Technical documentation is among the most-retrieved content for software categories, and agents evaluating your product benefit from reading it. We review per-crawler: open retrieval bots broadly, evaluate training-collection bots against your content strategy.",
      },
      {
        question: "We already rank #1 on Google for our category. Why does this matter?",
        answer:
          "Because AI answers rarely mirror Google rankings. Per-engine studies show large divergence between which sources each surface cites — and for commercial software prompts, assistants often draw on review platforms and comparison pages rather than the ranking winner. Ranking and being recommended are now different contests.",
      },
      {
        question: "How long before we see movement in AI answers?",
        answer:
          "Technical and readability fixes (rendering, pricing pages, structured data) can influence retrieval within weeks. Third-party footprint — reviews, comparisons, listicle presence — compounds over months. We baseline in week one so every change is measured, not promised.",
      },
    ],
    relatedServices: ["ai-search-optimization", "ai-visibility", "ai-content-optimization"],
    relatedResearch: [
      { title: "The SaaS AI citation playbook", href: "/resources/research/23-saas-ai-search-citation-playbook-2026" },
      { title: "The answer economy: B2B buyers and the AI shortlist", href: "/resources/research/answer-economy-b2b-ai-shortlist-2026" },
      { title: "2026 AI citation study", href: "/resources/research/2026-ai-citation-study" },
    ],
  },

  ecommerce: {
    slug: "ecommerce",
    heroTag: "Industry",
    heroTitle: "AI Search Optimization for E-commerce",
    heroSubtitle:
      "Product discovery is moving into AI answers. We help online stores become the products AI systems see, understand, trust and recommend — across ChatGPT, Perplexity, Gemini and AI Overviews.",
    marketData: [
      { stat: "68%", label: "of US searches now end without a click — product research included (SparkToro, 2026)" },
      { stat: "~58%", label: "CTR reduction for top results when Google AI Overviews appear on the query (Ahrefs, 2026)" },
      { stat: "31.8%", label: "of social/video citations in AI answers come from YouTube — where product content lives (OtterlyAI, 2026)" },
      { stat: "20%+", label: "of SERPs now show AI Overviews, with coverage still expanding (SparkToro, 2026)" },
    ],
    intro: {
      heading: "The product research funnel is being rebuilt around answers",
      body: [
        "E-commerce lived and died by the product listing page and the category landing page. Both still matter — but a growing share of product research now happens inside AI answers: gift guides generated on demand, category recommendations synthesized from review sites, product comparisons assembled without a single click to a store.",
        "The economics explain the urgency. With roughly two-thirds of searches already ending without a click and AI Overviews suppressing click-through when they appear, the stores that win are the ones AI systems can confidently name inside the answer — not just the ones that rank beneath it.",
        "Our e-commerce programs focus on what generative systems actually retrieve for product queries: structured product data, review corroboration, expert-style buying guides, video content and the community threads where real opinions live.",
      ],
    },
    dynamics: [
      {
        title: "Zero-click is the default, not the exception",
        description:
          "Most searches already end on the results page, and AI Overviews cut clicks further when present. Store visibility increasingly means being part of the answer, not position one below it.",
      },
      {
        title: "Structured product data is table stakes",
        description:
          "Product schema, availability, price and review markup are how machines understand your catalog. Thin or broken product data quietly removes you from the retrieval pool.",
      },
      {
        title: "Reviews are the trust layer",
        description:
          "AI systems corroborate product quality through review platforms and on-site review markup. Products with a weak or absent review footprint are harder to recommend confidently.",
      },
      {
        title: "Video and community carry real weight",
        description:
          "YouTube dominates social/video citations in AI answers, and Reddit-style community discussion is heavily cited on Perplexity surfaces. Both are retrievable assets for product queries — and both are routinely absent from e-commerce strategies.",
      },
    ],
    priorities: [
      {
        title: "Product and category data cleanup",
        description:
          "Valid Product, Offer, AggregateRating and FAQ markup at catalog scale, with honest values only — plus text-first category pages that answer the questions shoppers ask.",
      },
      {
        title: "Buying-guide and comparison content",
        description:
          "\"Best X for Y\" guides, gift guides and product comparisons written with genuine expertise and structured for extraction — the formats AI answers draw on for product recommendations.",
      },
      {
        title: "Review-footprint development",
        description:
          "Systems that earn real reviews on-site and on the third-party platforms AI systems read, because recommendation engines prefer evidence over adjectives.",
      },
      {
        title: "Video and community presence",
        description:
          "Long-form YouTube product content (shorts barely get cited) and genuine participation where your buyers discuss products.",
      },
      {
        title: "AI answer monitoring for key categories",
        description:
          "Monthly tracking of which products and competitors appear for your money prompts — with accuracy checks on price, availability and claims.",
      },
    ],
    metrics: [
      { title: "Product prompt visibility", description: "Share of AI answers that mention your products for category and gifting prompts." },
      { title: "Schema validity rate", description: "Percentage of catalog pages with valid, honest structured data — a direct retrieval input." },
      { title: "Review velocity and coverage", description: "Recent, verifiable reviews across the platforms AI systems corroborate against." },
      { title: "Assisted revenue", description: "Attribution from AI-surface referrals and post-purchase surveys capturing dark-funnel influence." },
    ],
    faq: [
      {
        question: "Will AI search actually send e-commerce revenue, or just research traffic?",
        answer:
          "Both patterns exist. Much AI product research is upper-funnel, but assistants increasingly complete commercial tasks — and the traffic that does arrive tends to be well-qualified because the buyer arrives pre-shortlisted. The bigger risk is negative: absent brands aren't just missing upside, they're being excluded from shortlists they used to contend for via rankings.",
      },
      {
        question: "Do AI systems use my product feed (Merchant Center) data?",
        answer:
          "Google's surfaces can draw on Merchant Center data, and structured product data on your site feeds the wider retrieval pool. We treat feed hygiene, on-site Product schema and third-party corroboration as one system — gaps in any layer weaken the others.",
      },
      {
        question: "Is this just re-running our old SEO playbook?",
        answer:
          "No. Classic e-commerce SEO optimizes category pages for keywords. AI visibility adds the corroboration layer — reviews, comparisons, guides, video, community — that determines whether generative systems name your products when they synthesize an answer.",
      },
      {
        question: "We have thousands of SKUs. Where do we start?",
        answer:
          "With your money categories. We fix structured data and content for the 20% of catalog driving 80% of revenue first, measure movement on those prompts, then scale what works across the catalog.",
      },
    ],
    relatedServices: ["ai-content-optimization", "technical-seo", "ai-visibility"],
    relatedResearch: [
      { title: "Content formats that earn AI citations", href: "/resources/research/21-content-formats-ai-citations-listicles-2026" },
      { title: "YouTube and video in AI citations", href: "/resources/research/youtube-ai-citations-video-search-2026" },
      { title: "Zero-click search economics", href: "/resources/research/20-zero-click-search-ai-overview-economics-2026" },
    ],
  },

  b2b: {
    slug: "b2b",
    heroTag: "Industry",
    heroTitle: "AI Search Optimization for B2B",
    heroSubtitle:
      "B2B buying committees now ask AI before they ask vendors. We help B2B companies become the credible, citable, shortlisted answer across the AI surfaces where deals begin.",
    marketData: [
      { stat: "82%", label: "of B2B buyers sourced recommendations from an AI chatbot in the last 24 months (G2 Buyer Behavior, 2026)" },
      { stat: "#1", label: "AI chatbots were the top influence on the vendor shortlist — ahead of review sites (G2, 2026)" },
      { stat: "69%", label: "of buyers say AI research surfaced information that changed their vendor choice (G2, 2026)" },
      { stat: "80%", label: "of deals are won by the pre-contact favorite — built before sales ever engages (6sense, via G2)" },
    ],
    intro: {
      heading: "The shortlist is assembled before anyone talks to sales",
      body: [
        "B2B marketing was built for a funnel you could see: content, forms, pipeline. That funnel now has an invisible first stage. Buying committees research problems and vendors with AI assistants, and the shortlist that survives that stage shapes everything after it — because most deals are won by the vendor who was the favorite before first contact.",
        "The uncomfortable finding from 2026 buyer research: AI chatbots were the single most influential shortlist source, and a meaningful share of buyers report ending up with a different vendor than they originally intended because of what AI research surfaced. If your category's answers cite analysts, review platforms and competitors but not you, that absence is a commercial problem measured in pipeline.",
        "Our B2B programs build the citation layer buying committees actually see: analyst-style research, comparison and category content, expert entities, review-platform presence and the PR footprint that makes your brand easy for systems to trust.",
      ],
    },
    dynamics: [
      {
        title: "The buying committee is AI-assisted",
        description:
          "Champions, economic buyers and skeptics each run their own prompts. Every role asks different questions — and each answer set is a chance to be included or excluded.",
      },
      {
        title: "Category education beats product pitching",
        description:
          "Assistants reward sources that explain the category clearly — frameworks, benchmarks, definitions. Vendors that only talk about themselves give AI systems nothing to cite.",
      },
      {
        title: "Trust transfers from third parties",
        description:
          "Analyst mentions, credible press, review platforms and named experts do the heavy lifting. Self-declared claims transfer poorly.",
      },
      {
        title: "Accuracy compounds or corrodes",
        description:
          "Buyers report encountering inaccurate vendor information in AI answers regularly. If systems misstate your pricing, positioning or capabilities, every downstream conversation starts with a correction.",
      },
    ],
    priorities: [
      {
        title: "Own your category's questions",
        description:
          "The research, definition and comparison content buying committees ask assistants for — built on original data where possible, structured for extraction always.",
      },
      {
        title: "Build named expert entities",
        description:
          "Author pages, consistent bios, external commentary. Person-level credibility is a growing input to whether systems trust and cite your content.",
      },
      {
        title: "Develop the third-party proof layer",
        description:
          "Review platforms, credible press, analyst and community presence — the corroboration that makes systems confident naming you.",
      },
      {
        title: "Fix the accuracy surface",
        description:
          "We test what AI systems currently say about your pricing, integrations and positioning — then correct the record at the sources systems retrieve from.",
      },
      {
        title: "Report in pipeline language",
        description:
          "Share-of-answer tracking tied to the prompts your buyers actually use, plus dark-funnel attribution so leadership sees AI visibility in commercial terms.",
      },
    ],
    metrics: [
      { title: "Shortlist presence", description: "How often your brand appears when buyers ask for vendor recommendations in your category." },
      { title: "Prompt coverage by buying stage", description: "Problem-aware, solution-aware and vendor-comparison prompts each tracked separately." },
      { title: "Citation quality", description: "Which of your assets get cited — and whether the facts stated about you are correct." },
      { title: "Influenced pipeline", description: "Self-reported attribution and win/loss interviews connecting AI-era research to revenue." },
    ],
    faq: [
      {
        question: "Which B2B functions benefit most from AI visibility work?",
        answer:
          "Marketing owns the program, but the biggest beneficiaries are sales (warmer, pre-educated conversations), product marketing (accurate positioning in answers) and demand gen (a new compounding channel alongside paid). In ABM motions, being present in the answers a target account researches is quietly decisive.",
      },
      {
        question: "How do you measure this when AI answers don't send obvious traffic?",
        answer:
          "Three layers: share-of-answer tracking on a fixed prompt panel, self-reported attribution ('how did you hear about us' upgraded for the AI era), and pipeline correlation. No single number is perfect — triangulated, they're decision-grade.",
      },
      {
        question: "Our category has strong analysts and review sites. Can we compete?",
        answer:
          "Yes — by being the most specific, most current source on your niche. Analyst breadth leaves depth gaps; review platforms leave context gaps. Vertical specialists consistently out-punch generalists in niche prompts, and the same logic applies to content and corroboration.",
      },
      {
        question: "How long does a B2B AI visibility program take to show results?",
        answer:
          "Baseline measurement lands in weeks. Content and accuracy corrections show movement within one to two months on long-tail prompts. Recommendation-level presence in competitive category prompts typically builds over quarters as the citation footprint compounds.",
      },
    ],
    relatedServices: ["ai-search-optimization", "citation-optimization", "digital-pr"],
    relatedResearch: [
      { title: "The answer economy: B2B buyers and the AI shortlist", href: "/resources/research/answer-economy-b2b-ai-shortlist-2026" },
      { title: "Reddit and community citations", href: "/resources/research/reddit-community-ai-citations-2026" },
      { title: "How to measure AI search influence", href: "/resources/research/25-how-to-measure-ai-search-influence-2026" },
    ],
  },

  "professional-services": {
    slug: "professional-services",
    heroTag: "Industry",
    heroTitle: "AI Search Optimization for Professional Services",
    heroSubtitle:
      "When someone asks AI for a lawyer, consultant or accounting firm, the shortlist comes from somewhere. We make sure professional-services firms are in it — for the right reasons.",
    marketData: [
      { stat: "46.7%", label: "of Perplexity's citations flow through Reddit-style community discussion (Red-engage, 10k-citation study, 2026)" },
      { stat: "~25%", label: "of US ChatGPT citations draw on just Wikipedia + Reddit combined (5W, 680M-citation audit, 2026)" },
      { stat: "70.8%", label: "of citations for 'best/top' commercial queries come from listicle-style pages (Overthink Group, 2026)" },
      { stat: "38%", label: "of B2B buyers say review sites are their most confidence-inspiring shortlist signal (G2, 2026)" },
    ],
    intro: {
      heading: "Recommendation is the product of trust, and trust lives off-site",
      body: [
        "Professional services — law, accounting, consulting, advisory — are the ultimate recommendation category. Nobody hires a firm from an ad; they hire on trust. What's changed in 2026 is where that trust gets assembled: increasingly inside AI answers that synthesize directories, review platforms, press mentions, community discussion and credential signals before a human ever visits your site.",
        "This creates a structural challenge for professional-services firms. Most have invested in website authority, but AI systems corroborate heavily against third-party sources — community discussion, directories, publications. If those sources don't describe you credibly, the systems have little basis to recommend you, no matter how good your site is.",
        "Our professional-services programs build exactly that: entity clarity about who you are and what you're credentialed in, presence in the directories and publications your category's answers draw from, and content that demonstrates genuine expertise rather than restating services.",
      ],
    },
    dynamics: [
      {
        title: "Third-party corroboration dominates",
        description:
          "For trust-heavy categories, AI systems lean hard on external validation — directories, community discussion, press. Your website alone cannot carry the recommendation.",
      },
      {
        title: "Local and specialty intent interleave",
        description:
          "\"Estate lawyer in Pune\", \"boutique M&A advisory for SaaS\" — prompts combine geography, specialty and sophistication. Firms discoverable for their specific niche consistently outperform generalists.",
      },
      {
        title: "Credentials must be machine-readable",
        description:
          "Bar admissions, certifications, partnerships, publications — these are the attributes systems check. If they're only in a PDF bio, they don't exist to the machine.",
      },
      {
        title: "One wrong fact travels fast",
        description:
          "Outdated firm names, wrong office locations, conflated partners — inaccuracies in trust categories are costly. Monitoring what AI systems say about you matters as much as improving it.",
      },
    ],
    priorities: [
      {
        title: "Entity foundation",
        description:
          "Consistent firm identity — name, credentials, offices, specialties — across site, schema, directories and profiles, so systems resolve exactly who you are.",
      },
      {
        title: "Expertise content that demonstrates, not claims",
        description:
          "Practitioner-authored analysis of real matters (appropriately anonymized), jurisdiction-specific explainers, honest guides. Experience signals are the differentiator.",
      },
      {
        title: "Directory and profile alignment",
        description:
          "The legal, accounting and consulting directories plus review platforms AI systems corroborate against — complete, accurate, consistently described.",
      },
      {
        title: "Local AI visibility where relevant",
        description:
          "For office-based practices, local search signals (profiles, reviews, consistent NAP) measurably influence AI local recommendations — the correlation data is real.",
      },
      {
        title: "Accuracy monitoring",
        description:
          "Ongoing checks of what AI systems say about your firm, your partners and your practice areas — with correction workflows when the record is wrong.",
      },
    ],
    metrics: [
      { title: "Recommendation rate", description: "How often your firm appears when AI is asked for recommendations in your practice area and market." },
      { title: "Niche prompt ownership", description: "Coverage of your specific specialties, not just the head terms every competitor chases." },
      { title: "Accuracy score", description: "Whether systems state your credentials, locations and services correctly." },
      { title: "Local pack + AI local presence", description: "For location-based practices, visibility across both traditional and AI-mediated local discovery." },
    ],
    faq: [
      {
        question: "Can AI systems recommend law or accounting firms at all?",
        answer:
          "They already do, with varying confidence — typically synthesizing directories, review platforms, press and community discussion. The ethical line matters: firms can't and shouldn't manipulate systems into endorsement, but they can make their genuine credentials, experience and specialization unambiguous. That's the work.",
      },
      {
        question: "We're bound by strict advertising rules. Does this still work?",
        answer:
          "Yes, and conservative industries are actually well-suited to it. The core activities — accurate profiles, clear credential signals, genuine expertise content — are compliance-friendly by nature. We review program tactics against your professional rules before anything ships.",
      },
      {
        question: "Is local optimization still relevant if we serve national clients?",
        answer:
          "If you have physical offices, yes — local signals influence AI answers with location intent, and office-city prompts are common even for national engagements. National practices should weight entity and niche content more heavily.",
      },
      {
        question: "How quickly can a professional-services firm see movement?",
        answer:
          "Directory, profile and accuracy fixes act fastest. Content and corroboration build over months. Because these categories are trust-gated, movement is steadier than explosive — which is exactly how a durable referral-grade channel should behave.",
      },
    ],
    relatedServices: ["entity-optimization", "citation-optimization", "ai-visibility"],
    relatedResearch: [
      { title: "Reddit and community citations", href: "/resources/research/reddit-community-ai-citations-2026" },
      { title: "Local 'near me' AI citations", href: "/resources/research/local-near-me-ai-citations-2026" },
      { title: "Wikipedia and Wikidata as entity corroboration", href: "/resources/research/22-wikipedia-wikidata-entity-corroboration-ai-citations-2026" },
    ],
  },

  "local-services": {
    slug: "local-services",
    heroTag: "Industry",
    heroTitle: "AI Search Optimization for Local Services",
    heroSubtitle:
      "\"Near me\" now gets answered, not just listed. We help local businesses become the business AI systems actually recommend when nearby customers ask.",
    marketData: [
      { stat: "+0.16", label: "correlation between Google Business Profile signals and AI local ranking — the strongest measured factor (SearchAtlas, 104,855 citations, 2026)" },
      { stat: "+0.11", label: "correlation for businesses that reply to reviews — a free, controllable signal (SearchAtlas, 2026)" },
      { stat: "1.83→3.17%", label: "local 'near me' lift on Perplexity when local signals are present (Cairrot 1.5M-prompt study, 2026)" },
      { stat: "15%", label: "of ChatGPT citations draw on community platforms like Reddit (5W audit, 2026)" },
    ],
    intro: {
      heading: "AI answers are becoming the new local pack",
      body: [
        "Local discovery is quietly being re-sorted. Instead of scanning a map pack, customers ask assistants for recommendations — and those answers synthesize business profiles, reviews, local directories, community discussion and your website into a handful of named businesses.",
        "What makes this measurable rather than mystical is the correlation data: across a hundred-thousand-plus local citations, Google Business Profile signals show the strongest relationship with AI local ranking, followed by review responses and review volume. Meanwhile domain authority — the obsession of traditional SEO — shows a *negative* correlation in local AI results.",
        "Our local-services programs are built around that evidence: profile excellence, genuine review systems, consistent local entity signals and the community presence local answers draw from. No gimmicks — the boring, verifiable things, done completely.",
      ],
    },
    dynamics: [
      {
        title: "Profiles beat domain authority",
        description:
          "In local AI results, complete and active business profiles correlate with visibility more than website authority does. This flips traditional SEO priorities — and favors businesses willing to do the fundamentals.",
      },
      {
        title: "Review behavior is a ranking input",
        description:
          "Volume matters, but responding to reviews shows one of the strongest measured correlations. AI systems appear to read review ecosystems, not just star averages.",
      },
      {
        title: "Community recommendations get cited",
        description:
          "Local subreddit threads and community groups are frequently cited for 'near me' prompts. Being genuinely recommended there — never astroturfed — is a real channel.",
      },
      {
        title: "Consistency is machine-read",
        description:
          "Name, address, phone, hours and service areas must match everywhere. Conflicting data doesn't just confuse customers; it makes systems less confident recommending you.",
      },
    ],
    priorities: [
      {
        title: "Profile excellence",
        description:
          "Complete, current, actively maintained business profiles — categories, services, photos, posts, Q&A. The single highest-correlated factor in the data.",
      },
      {
        title: "A real review system",
        description:
          "Ethical review generation and — crucially — responses. Reply rates are among the strongest controllable signals measured.",
      },
      {
        title: "Local entity consistency",
        description:
          "NAP, hours, service areas and descriptions aligned across your site, profiles and directories, expressed in schema machines can parse.",
      },
      {
        title: "Website answers for local questions",
        description:
          "Service-area pages with genuine local content — pricing signals, process, photos, FAQs — structured so assistants can extract and cite them.",
      },
      {
        title: "Local answer monitoring",
        description:
          "Monthly tests of 'near me' and recommendation prompts across surfaces, tracking which businesses get named and why.",
      },
    ],
    metrics: [
      { title: "Local answer inclusion", description: "How often your business is named for 'near me' and recommendation prompts in your service area." },
      { title: "Profile health score", description: "Completeness, freshness and activity across the profiles AI systems read." },
      { title: "Review velocity + response rate", description: "Both are measured inputs — volume and engagement." },
      { title: "Calls and bookings from AI surfaces", description: "Tracked via profiles, UTM'd links and call attribution." },
    ],
    faq: [
      {
        question: "Do AI assistants actually recommend local businesses?",
        answer:
          "Yes — with location-aware prompts, assistants increasingly name specific businesses, drawing on profiles, reviews, directories and community sources. Studies of local AI citations show meaningful lift when local signals like complete business profiles are present.",
      },
      {
        question: "Is traditional local SEO dead then?",
        answer:
          "No — it's the foundation. Business profiles, reviews and consistent citations are precisely the signals AI local answers corroborate against. Doing classic local SEO well is most of the work; the AI layer adds answer monitoring, community presence and answer-formatted website content.",
      },
      {
        question: "Should I try to get my business mentioned on Reddit?",
        answer:
          "Only honestly. Community recommendations are cited heavily by AI systems, but they carry weight precisely because they're genuine. Ask real customers to share real experiences where relevant, participate as yourself, and never astroturf — fabricated recommendations are both unethical and increasingly detected.",
      },
      {
        question: "I run a one-location shop with no marketing team. Is this realistic?",
        answer:
          "Yes — because the highest-impact actions are free and controllable: complete profiles, responding to every review, consistent listings, and a simple site that answers common questions. Larger competitors often neglect exactly these.",
      },
    ],
    relatedServices: ["ai-visibility", "entity-optimization", "technical-seo"],    relatedResearch: [
      { title: "Local 'near me' AI citations", href: "/resources/research/local-near-me-ai-citations-2026" },
      { title: "Reddit and community citations", href: "/resources/research/reddit-community-ai-citations-2026" },
      { title: "AI crawler readiness", href: "/resources/research/ai-crawlers-2026-readiness" },
    ],
  },


};
