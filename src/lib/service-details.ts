/**
 * Rich per-service page content. Each entry maps 1:1 to a service in
 * `@/lib/data`. Page copy is deliberately substantive — these pages target
 * commercial AI-search queries, and AI engines favor pages with clear,
 * extractable answers.
 */

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface ServiceDetail {
  slug: string;
  heroTag: string;
  heroTitle: string;
  heroSubtitle: string;
  intro: { heading: string; body: string[] };
  deliverables: { title: string; description: string }[];
  process: { title: string; description: string }[];
  outcomes: string[];
  faq: ServiceFaq[];
  related: string[];
}

export const serviceDetails: Record<string, ServiceDetail> = {
  "ai-search-optimization": {
    slug: "ai-search-optimization",
    heroTag: "Flagship Service",
    heroTitle: "AI Search Optimization",
    heroSubtitle:
      "One integrated strategy across technical SEO, content, entities and authority — so your brand is easier to discover, understand, verify and recommend across every AI search surface.",
    intro: {
      heading: "Discovery no longer happens in one place",
      body: [
        "Your customers discover brands across ChatGPT, Google AI Overviews and AI Mode, Perplexity, Gemini, Copilot and Claude — and each surface combines signals differently. Optimizing a single page for a single keyword was the old game. The new game is building an interconnected digital footprint that every system can read.",
        "AI Search Optimization is Prompt&Co.'s flagship engagement. It brings together the disciplines behind modern discovery — technical SEO, AEO, GEO, content, entity authority, digital PR and measurement — into one coordinated program run against your specific market and revenue goals.",
      ],
    },
    deliverables: [
      {
        title: "AI visibility baseline",
        description:
          "We measure how often, where and how your brand appears across the AI surfaces your buyers use — before we change anything.",
      },
      {
        title: "Technical foundation",
        description:
          "Crawlability, rendering, structured data and information architecture fixed first, so every other effort compounds.",
      },
      {
        title: "Answer & citation architecture",
        description:
          "Content restructured around the questions and prompts that influence your market, engineered to be quoted.",
      },
      {
        title: "Entity & authority development",
        description:
          "Consistent entity signals across your site, schema and the third-party sources AI systems corroborate against.",
      },
      {
        title: "Monitoring & reporting",
        description:
          "Monthly visibility reporting with share of voice, citation tracking and competitor benchmarks.",
      },
    ],
    process: [
      {
        title: "Discover",
        description:
          "We map the searches, questions and AI prompts that influence your market and establish your baseline visibility.",
      },
      {
        title: "Audit",
        description:
          "We assess your technical foundation, content, entity signals, citations and competitive position.",
      },
      {
        title: "Build",
        description:
          "We fix foundations and create the content and architecture both buyers and AI systems understand.",
      },
      {
        title: "Strengthen",
        description:
          "We build authority beyond your website through relevant sources, mentions and digital footprint.",
      },
      {
        title: "Monitor & compound",
        description:
          "We track visibility across surfaces and continually expand coverage around revenue-relevant prompts.",
      },
    ],
    outcomes: [
      "A measurable baseline for AI visibility in your category",
      "Consistent brand presence across the AI surfaces your buyers use",
      "A compounding content and authority footprint — not one-off tactics",
    ],
    faq: [
      {
        question: "How is AI Search Optimization different from SEO?",
        answer:
          "SEO optimizes for ranking in a list of links. AI Search Optimization builds the full signal set — technical, content, entity and authority — that determines whether AI systems can discover, understand, trust and recommend your brand inside generated answers. Strong SEO is one input; it is no longer sufficient on its own.",
      },
      {
        question: "Which AI platforms does this cover?",
        answer:
          "We optimize for the broader AI search ecosystem rather than a single platform — including ChatGPT, Google AI Overviews and AI Mode, Gemini, Claude, Perplexity, Microsoft Copilot and emerging systems.",
      },
      {
        question: "How long until we see results?",
        answer:
          "Foundational fixes (technical, structured data, entity clarity) typically show effect within weeks. Content and authority signals compound over months. We establish a baseline in week one so progress is measured, not promised.",
      },
    ],
    related: ["answer-engine-optimization", "generative-engine-optimization", "ai-visibility"],
  },

  "answer-engine-optimization": {
    slug: "answer-engine-optimization",
    heroTag: "AEO",
    heroTitle: "Answer Engine Optimization",
    heroSubtitle:
      "Structure your expertise so answer engines can understand, retrieve and present it — when customers ask questions, your brand is the answer.",
    intro: {
      heading: "Customers don't want ten blue links. They want an answer.",
      body: [
        "When someone asks ChatGPT, Perplexity or Google AI Mode a question, there is no page one. There is one synthesized answer, drawn from a handful of sources the system trusts. Either your expertise is structured well enough to be part of that answer, or it isn't.",
        "AEO is the discipline of making your content the clearest, most verifiable answer to the questions your market asks — through answer architecture, FAQ strategy, structured data and entity optimization.",
      ],
    },
    deliverables: [
      {
        title: "Question research & mapping",
        description:
          "We identify the real questions your buyers ask AI systems and map each to owned content.",
      },
      {
        title: "Answer architecture",
        description:
          "Direct, extractable answers with supporting depth — formatted the way answer engines parse.",
      },
      {
        title: "FAQ strategy",
        description:
          "Question-first pages and FAQ sections targeting long-tail conversational queries.",
      },
      {
        title: "Structured data",
        description:
          "FAQPage, HowTo and QAP schema that makes answers machine-readable at a glance.",
      },
      {
        title: "Answer monitoring",
        description:
          "Ongoing tracking of which questions surface your brand — and which still surface competitors.",
      },
    ],
    process: [
      {
        title: "Question mining",
        description:
          "We harvest the questions your market asks across AI platforms, search and your sales conversations.",
      },
      {
        title: "Gap analysis",
        description:
          "We test which questions already surface your brand and which surface competitors instead.",
      },
      {
        title: "Answer build-out",
        description:
          "We rewrite and restructure content into extractable, verifiable answers with schema.",
      },
      {
        title: "Validation",
        description:
          "We re-test answers across platforms monthly and iterate on the gaps.",
      },
    ],
    outcomes: [
      "Ownership of the questions that matter in your category",
      "Content engineered for retrieval, not just ranking",
      "A growing footprint of questions where AI answers cite your brand",
    ],
    faq: [
      {
        question: "What is Answer Engine Optimization?",
        answer:
          "AEO is the practice of structuring and strengthening a brand's content and digital presence so answer-oriented search experiences can understand, retrieve and present it effectively.",
      },
      {
        question: "Is AEO the same as SEO?",
        answer:
          "No. AEO builds on SEO but focuses explicitly on answer-oriented discovery. Strong technical SEO, crawlability, relevance and authority remain important foundations.",
      },
      {
        question: "Does AEO work for B2B?",
        answer:
          "Especially well. B2B buying starts with research questions asked to AI assistants. Brands whose expertise is structurally answerable get shortlisted before a sales conversation ever happens.",
      },
    ],
    related: ["ai-search-optimization", "ai-content-optimization", "entity-optimization"],
  },

  "generative-engine-optimization": {
    slug: "generative-engine-optimization",
    heroTag: "GEO",
    heroTitle: "Generative Engine Optimization",
    heroSubtitle:
      "Strengthen the signals behind AI recommendations — so when systems synthesize an answer, the brand they name is yours.",
    intro: {
      heading: "AI systems don't rank pages. They recommend brands.",
      body: [
        "Generative search changes the competitive landscape. Instead of presenting users with a list of pages, AI systems synthesize information from multiple sources and recommend what they believe is most relevant — a shift that quietly rewires who gets shortlisted in your market.",
        "GEO strengthens the signals behind that recommendation layer: brand mentions, citation-worthy sources, entity authority and the third-party corroboration that makes an AI system confident enough to name you.",
      ],
    },
    deliverables: [
      {
        title: "Brand mention optimization",
        description:
          "We increase the quality and consistency of how your brand is described across the sources AI systems read.",
      },
      {
        title: "Citation building",
        description:
          "We earn references in the publications and sources your category's AI answers are built from.",
      },
      {
        title: "AI recommendation signals",
        description:
          "We identify and strengthen the characteristics that make systems confident recommending a brand.",
      },
      {
        title: "Competitive analysis",
        description:
          "We map which competitors get recommended for your prompts today — and the footprint behind it.",
      },
      {
        title: "Recommendation monitoring",
        description:
          "Monthly tracking of recommendation share across the generative surfaces that matter.",
      },
    ],
    process: [
      {
        title: "Recommendation baseline",
        description:
          "We test your market's buying prompts across AI platforms and record who gets recommended today.",
      },
      {
        title: "Signal audit",
        description:
          "We trace which sources and signals the systems rely on when recommending in your category.",
      },
      {
        title: "Footprint build",
        description:
          "We build mentions, citations and corroboration across the sources that move recommendations.",
      },
      {
        title: "Measure & iterate",
        description:
          "We re-run prompts monthly and expand coverage where share is shifting.",
      },
    ],
    outcomes: [
      "Higher recommendation share for commercial prompts in your category",
      "A defensible third-party footprint AI systems corroborate against",
      "Visibility that compounds as AI usage grows",
    ],
    faq: [
      {
        question: "What is Generative Engine Optimization?",
        answer:
          "GEO is the practice of improving a brand's visibility and representation in generative search and AI-generated answers — strengthening the entity, content and authority signals that influence what AI systems retrieve, cite and recommend.",
      },
      {
        question: "Does GEO replace SEO?",
        answer:
          "No. SEO remains an important foundation for AI discoverability. GEO and AEO build on top of strong SEO fundamentals.",
      },
      {
        question: "Can you guarantee AI will recommend my brand?",
        answer:
          "No responsible practitioner can guarantee what a third-party model generates. What we do is measurably strengthen the signals those systems weigh — and show you the movement in recommendation share over time.",
      },
    ],
    related: ["citation-optimization", "digital-pr", "ai-search-optimization", "entity-optimization"],
  },

  "ai-visibility": {
    slug: "ai-visibility",
    heroTag: "Measurement",
    heroTitle: "AI Visibility Monitoring",
    heroSubtitle:
      "See exactly where, how and why your brand appears across AI answers — share of voice, citations, sentiment and competitor benchmarks, measured monthly.",
    intro: {
      heading: "You can't improve what you don't measure",
      body: [
        "Traditional rank tracking tells you nothing about AI answers. There is no position three in ChatGPT — there is being named, being cited, or being invisible. And AI answers change as models update, making one-off audits obsolete within weeks.",
        "We run continuous monitoring across the AI surfaces your buyers use, tracking share of voice, citation sources, sentiment and factual accuracy — benchmarked against the competitors AI systems mention instead of you.",
      ],
    },
    deliverables: [
      {
        title: "Prompt & query coverage",
        description:
          "A representative prompt set built from your market's real buying and research questions.",
      },
      {
        title: "Share of voice tracking",
        description:
          "How often your brand appears — and how often competitors appear — for every tracked prompt.",
      },
      {
        title: "Citation source tracking",
        description:
          "Which pages and publications AI systems cite when your category comes up.",
      },
      {
        title: "Sentiment & accuracy checks",
        description:
          "How your brand is described — and whether the facts AI systems state about you are right.",
      },
      {
        title: "Monthly reporting",
        description:
          "A clear report with movement, causes and the next highest-impact actions.",
      },
    ],
    process: [
      {
        title: "Baseline",
        description:
          "We run your full prompt set across platforms and record the current state of visibility.",
      },
      {
        title: "Coverage design",
        description:
          "We finalize the prompt set and competitor set so measurement reflects your real market.",
      },
      {
        title: "Continuous monitoring",
        description:
          "We re-run coverage monthly (or weekly for active engagements) with consistent methodology.",
      },
      {
        title: "Insight & action",
        description:
          "Each report translates movement into specific next actions — not just dashboards.",
      },
    ],
    outcomes: [
      "A defensible number for AI visibility in your category",
      "Early warning when answers about your brand change",
      "Proof of what's working — and where to invest next",
    ],
    faq: [
      {
        question: "How do you measure AI visibility?",
        answer:
          "We run a representative set of buying and research prompts across the major AI platforms on a fixed schedule, recording brand mentions, citations, position in answers, sentiment and factual accuracy — then benchmark those against your competitors.",
      },
      {
        question: "Which platforms do you monitor?",
        answer:
          "ChatGPT, Google AI Overviews and AI Mode, Perplexity, Gemini, Copilot and Claude, with the platform mix tuned to where your buyers actually search.",
      },
      {
        question: "Can we use this without a full engagement?",
        answer:
          "Yes. Monitoring can run standalone — many clients start with measurement, then invest where the data shows gaps.",
      },
    ],
    related: ["ai-search-optimization", "generative-engine-optimization", "citation-optimization"],
  },

  "entity-optimization": {
    slug: "entity-optimization",
    heroTag: "Entity",
    heroTitle: "Entity Optimization",
    heroSubtitle:
      "Make it unambiguous to search engines and AI systems who your brand is, what you do, and what you should be known for.",
    intro: {
      heading: "Before AI can recommend you, it has to understand you",
      body: [
        "AI systems organize the world as entities — distinct things with attributes and relationships — not as strings of keywords. If your brand's entity is thin, inconsistent or conflated with other companies, you are harder to retrieve and riskier to recommend.",
        "We strengthen the entity signals connecting your brand to its products, services, people, industries, locations and areas of expertise — across your site, your schema and the external sources used for corroboration.",
      ],
    },
    deliverables: [
      {
        title: "Organization entity",
        description:
          "A canonical, consistent definition of who you are — name, founding, location, offering — everywhere it appears.",
      },
      {
        title: "Service & product entities",
        description:
          "Clear entity separation between what you sell, so systems can match you to relevant queries.",
      },
      {
        title: "People & authors",
        description:
          "Credible author entities with consistent bios and credentials — a growing trust input for AI answers.",
      },
      {
        title: "sameAs & structured data",
        description:
          "Organization, Person and Service schema wired to your profiles and corroborating sources.",
      },
      {
        title: "External corroboration",
        description:
          "Alignment across wikis, directories, profiles and industry sources AI systems check against.",
      },
    ],
    process: [
      {
        title: "Entity audit",
        description:
          "We inventory how your brand is described across your properties and the wider web.",
      },
      {
        title: "Consistency fixes",
        description:
          "We resolve conflicting names, descriptions and attributions that confuse systems.",
      },
      {
        title: "Schema implementation",
        description:
          "We implement and validate structured data that expresses your entity graph.",
      },
      {
        title: "Corroboration build",
        description:
          "We align external sources so the entity story is confirmed everywhere systems look.",
      },
    ],
    outcomes: [
      "Unambiguous brand identity across AI systems",
      "Accurate, confident descriptions of what you do",
      "Reduced conflation with similarly named companies",
    ],
    faq: [
      {
        question: "What is entity optimization?",
        answer:
          "Entity optimization is the practice of making a brand's identity, attributes and relationships unambiguous to search engines and AI systems — through consistent descriptions, structured data and corroborating third-party sources.",
      },
      {
        question: "Do we need a Wikipedia page?",
        answer:
          "No. Wikipedia helps notable brands, but it is one of many corroboration sources. For most companies, consistency across their own properties, industry directories, publications and profiles matters more than a wiki presence.",
      },
      {
        question: "How is this different from brand consistency?",
        answer:
          "Brand consistency is for humans; entity optimization makes the same consistency machine-readable — schema, canonical URLs, sameAs links and structured attributes that systems can parse directly.",
      },
    ],
    related: ["ai-search-optimization", "technical-seo", "ai-content-optimization"],
  },

  "ai-content-optimization": {
    slug: "ai-content-optimization",
    heroTag: "Content",
    heroTitle: "AI Content Optimization",
    heroSubtitle:
      "Build source-worthy content — designed for people first, structured so machines can interpret it clearly and quote it confidently.",
    intro: {
      heading: "AI systems quote content that deserves to be quoted",
      body: [
        "Generative engines are ruthless about quality. They retrieve content that demonstrates first-hand experience, original data or genuine expertise — and skip the rest. Volume publishing now actively hurts you, because thin content dilutes the entity and authority signals everything else builds.",
        "We build source-worthy content: original research, expert analysis, comparison content, FAQs, commercial pages, definitions, explainers and decision-support resources — written for people and structured so machines interpret them clearly.",
      ],
    },
    deliverables: [
      {
        title: "Original research",
        description:
          "Proprietary data and studies that give AI systems something only your brand can answer with.",
      },
      {
        title: "Expert analysis",
        description:
          "Named expert commentary that carries author entities and first-hand experience signals.",
      },
      {
        title: "Comparison & decision content",
        description:
          "The commercial-decision pages buyers and AI systems consult when shortlisting options.",
      },
      {
        title: "Definitions & explainers",
        description:
          "Canonical treatment of your category's concepts — the pages AI systems cite to define terms.",
      },
      {
        title: "Structured formatting",
        description:
          "Headers, lists, tables and schema that make answers extractable at a glance.",
      },
    ],
    process: [
      {
        title: "Content audit",
        description:
          "We assess which existing pages AI systems already use — and which dilute your signals.",
      },
      {
        title: "Topic architecture",
        description:
          "We map the questions, terms and decisions in your market to a deliberate content graph.",
      },
      {
        title: "Production",
        description:
          "Expert-led drafting with original data, structured for retrieval from day one.",
      },
      {
        title: "Refresh cycles",
        description:
          "We keep priority pages current — freshness is a measurable input to AI citation.",
      },
    ],
    outcomes: [
      "A library of pages AI systems retrieve and cite",
      "Content differentiated by originality, not volume",
      "Commercial pages that win AI recommendations, not just rankings",
    ],
    faq: [
      {
        question: "What makes content 'source-worthy' for AI?",
        answer:
          "First-hand experience, original data, named expertise and clear extractable structure. AI systems favor content they can verify and quote confidently — and increasingly ignore generic, unattributed writing.",
      },
      {
        question: "Should we publish more content or better content?",
        answer:
          "Better. A smaller library of original, well-structured, expert-led pages outperforms high-volume publishing in AI retrieval — and avoids diluting your entity and authority signals.",
      },
      {
        question: "Do you write the content or optimize ours?",
        answer:
          "Both. We optimize existing priority pages first (fastest wins), then produce new content where the topic map shows gaps.",
      },
    ],
    related: ["answer-engine-optimization", "entity-optimization", "citation-optimization"],
  },

  "citation-optimization": {
    slug: "citation-optimization",
    heroTag: "Citations",
    heroTitle: "Citation Optimization",
    heroSubtitle:
      "Strengthen the sources, references and authority signals that AI systems draw on when they decide who to cite and recommend.",
    intro: {
      heading: "AI systems synthesize from sources. Become the source.",
      body: [
        "AI systems don't operate in a vacuum — they retrieve and synthesize information from sources across the web. Which sources they trust in your category largely determines which brands appear in answers.",
        "We identify the sources influencing your category, assess where competitors are being referenced and build a stronger authority footprint around your brand — so the retrievable web corroborates you, not just them.",
      ],
    },
    deliverables: [
      {
        title: "Citation landscape mapping",
        description:
          "We map the publications, studies and pages AI systems actually cite in your category.",
      },
      {
        title: "Gap analysis",
        description:
          "Where competitors are present and you are absent — prioritized by influence.",
      },
      {
        title: "Placement program",
        description:
          "Earned references through expert commentary, data-led stories and industry publications.",
      },
      {
        title: "Directory & profile alignment",
        description:
          "Authoritative directories and profiles cleaned up to corroborate your entity.",
      },
      {
        title: "Reference tracking",
        description:
          "Monthly tracking of which sources cite you — and which still don't.",
      },
    ],
    process: [
      {
        title: "Source discovery",
        description:
          "We analyze AI answers in your category to find the sources that get cited.",
      },
      {
        title: "Prioritization",
        description:
          "We rank sources by influence on answers and feasibility of earning presence.",
      },
      {
        title: "Earned placements",
        description:
          "We run the outreach, commentary and data programs that put you in those sources.",
      },
      {
        title: "Measurement",
        description:
          "We track citation share movement and feed wins back into content and PR.",
      },
    ],
    outcomes: [
      "Presence in the sources AI systems cite in your category",
      "Third-party corroboration that supports recommendations",
      "A citation footprint competitors can't quickly copy",
    ],
    faq: [
      {
        question: "What is citation optimization?",
        answer:
          "Citation optimization is the practice of earning and strengthening your brand's presence in the sources AI systems retrieve from and cite — publications, research, directories and other third-party references — so generated answers have grounds to include and recommend you.",
      },
      {
        question: "Is this just link building?",
        answer:
          "No. Links matter for search, but AI systems weight brand mentions, entity corroboration and source credibility — including unlinked references. The target is being a trusted source in your category, not accumulating URLs.",
      },
      {
        question: "How do you find the right sources?",
        answer:
          "Empirically. We analyze which pages and publications actually appear as citations in AI answers for your category's prompts, then prioritize by measured influence.",
      },
    ],
    related: ["digital-pr", "generative-engine-optimization", "ai-content-optimization"],
  },

  "technical-seo": {
    slug: "technical-seo",
    heroTag: "Foundation",
    heroTitle: "Technical SEO",
    heroSubtitle:
      "Fix the crawlability, structure and performance foundations that AI systems and search engines both depend on.",
    intro: {
      heading: "If crawlers can't read you, nothing else matters",
      body: [
        "AI answer engines retrieve from the same web search engines crawl — and increasingly with their own crawlers too. If your site blocks the wrong bots, renders empty to non-browser clients, or buries content in unparseable markup, you're invisible before content quality ever gets considered.",
        "We audit and fix the technical foundation — crawlability, rendering, information architecture, structured data and performance — so every other optimization effort compounds on solid ground.",
      ],
    },
    deliverables: [
      {
        title: "Crawl & index diagnostics",
        description:
          "Full crawl analysis: bot access, redirects, canonicals, noindex traps and index coverage.",
      },
      {
        title: "AI crawler access review",
        description:
          "Verify GPTBot, ClaudeBot, PerplexityBot, Google-Extended and friends can access what you want them to.",
      },
      {
        title: "Structured data",
        description:
          "Organization, Service, FAQ and Article schema implemented and validated.",
      },
      {
        title: "Information architecture",
        description:
          "Internal linking and site structure that makes topical authority legible to machines.",
      },
      {
        title: "Core Web Vitals",
        description:
          "Server response, rendering path and performance fixes that affect both ranking and crawling.",
      },
    ],
    process: [
      {
        title: "Technical audit",
        description:
          "A full crawl, render and index diagnostic across search and AI crawler perspectives.",
      },
      {
        title: "Prioritized fixes",
        description:
          "Issues ranked by impact on discoverability — with clear owners and effort estimates.",
      },
      {
        title: "Implementation",
        description:
          "We implement directly or work alongside your engineering team.",
      },
      {
        title: "Verification",
        description:
          "We re-crawl and confirm fixes from both search and AI crawler perspectives.",
      },
    ],
    outcomes: [
      "A site every legitimate crawler can fully access and parse",
      "Structured data that machines interpret correctly",
      "A foundation that makes content and authority work compound",
    ],
    faq: [
      {
        question: "Does technical SEO still matter in the AI era?",
        answer:
          "More than ever. AI answer engines retrieve from crawled web content — often with their own crawlers. If technical barriers block retrieval, your content can't be considered regardless of quality.",
      },
      {
        question: "Should I allow AI crawlers into my site?",
        answer:
          "For most brands that want AI visibility: yes. Blocking AI crawlers in robots.txt removes you from the pool of retrievable sources. We review your bot access per-crawler and configure it to match your goals.",
      },
      {
        question: "Can you work with our engineering team?",
        answer:
          "Yes — many clients prefer we hand prioritized, specific tickets to their engineers and verify the fixes afterwards. We can also implement directly on most stacks.",
      },
    ],
    related: ["ai-search-optimization", "entity-optimization", "ai-visibility"],
  },

  "digital-pr": {
    slug: "digital-pr",
    heroTag: "Authority",
    heroTitle: "Digital PR",
    heroSubtitle:
      "Earn the mentions, citations and third-party sources that AI systems trust — turning external validation into durable visibility.",
    intro: {
      heading: "The web's opinion of you is an AI ranking input",
      body: [
        "AI systems learn who to recommend from what the web says about you — not just from your own site. Third-party mentions, expert quotes and data-led stories in the publications your category reads are among the strongest corroboration signals you can build.",
        "We run digital PR programs engineered for the AI search era: earning mentions in the publications, directories and communities your category's AI answers are actually built from.",
      ],
    },
    deliverables: [
      {
        title: "Digital PR campaigns",
        description:
          "Newsworthy stories and angles built around your expertise and data.",
      },
      {
        title: "Expert commentary placement",
        description:
          "Your named experts quoted in the outlets journalists and AI systems reference.",
      },
      {
        title: "Data-led stories",
        description:
          "Original research packaged for press pickup — stories that keep earning citations.",
      },
      {
        title: "Directory & profile cleanup",
        description:
          "Authoritative profiles aligned so every source tells the same story about your brand.",
      },
      {
        title: "Mention monitoring",
        description:
          "Tracking of new mentions and their appearance in AI answers over time.",
      },
    ],
    process: [
      {
        title: "Angle development",
        description:
          "We find the stories in your data, expertise and point of view that publications want.",
      },
      {
        title: "Target mapping",
        description:
          "We prioritize outlets by their presence in AI citations for your category.",
      },
      {
        title: "Outreach & placement",
        description:
          "We pitch, place and manage coverage with your named experts.",
      },
      {
        title: "Amplification",
        description:
          "We connect earned mentions back into your entity and content strategy.",
      },
    ],
    outcomes: [
      "Mentions in the sources AI answers actually draw from",
      "Named expert presence that builds author entities",
      "Third-party validation AI systems can corroborate",
    ],
    faq: [
      {
        question: "How is digital PR for AI different from traditional PR?",
        answer:
          "Traditional PR optimizes for audience reach. Digital PR for AI search optimizes for source authority — targeting the specific publications and pages AI systems retrieve and cite in your category, with consistent entity-rich brand descriptions.",
      },
      {
        question: "Do unlinked mentions actually help?",
        answer:
          "Yes. AI systems weight brand mentions and context, not just hyperlinks. A correctly attributed mention in a credible publication is a usable corroboration signal even without a link.",
      },
      {
        question: "How fast does PR affect AI visibility?",
        answer:
          "Placements can appear in AI answers within weeks for fresh or fast-moving sources, but durable recommendation share builds over months of consistent presence.",
      },
    ],
    related: ["citation-optimization", "generative-engine-optimization", "ai-content-optimization"],
  },
};
