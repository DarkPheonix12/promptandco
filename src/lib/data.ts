// ─── Site Configuration ───
export const siteConfig = {
  name: "Prompt&Co.",
  tagline: "Be the brand AI recommends.",
  url: "https://promptco.online",
  email: "hello@promptco.online",
  phone: "",
  description:
    "Prompt&Co. is an AI search optimization agency specializing in AEO and GEO—helping brands become more discoverable, understandable, citable and recommendable across the AI search ecosystem.",
};

// ─── Navigation ───
export const navigation = {
  main: [
    {
      label: "Services",
      href: "/services",
      children: [
        { label: "AI Search Optimization", href: "/services/ai-search-optimization" },
        { label: "Answer Engine Optimization", href: "/services/answer-engine-optimization" },
        { label: "Generative Engine Optimization", href: "/services/generative-engine-optimization" },
        { label: "AI Visibility", href: "/services/ai-visibility" },
        { label: "Entity Optimization", href: "/services/entity-optimization" },
        { label: "AI Content Optimization", href: "/services/ai-content-optimization" },
        { label: "Citation Optimization", href: "/services/citation-optimization" },
        { label: "Technical SEO", href: "/services/technical-seo" },
        { label: "Digital PR", href: "/services/digital-pr" },
      ],
    },
    {
      label: "Industries",
      href: "/industries",
      children: [
        { label: "SaaS", href: "/industries/saas" },
        { label: "E-commerce", href: "/industries/ecommerce" },
        { label: "B2B", href: "/industries/b2b" },
        { label: "Professional Services", href: "/industries/professional-services" },
        { label: "Local Services", href: "/industries/local-services" },
      ],
    },
    {
      label: "Resources",
      href: "/resources",
      children: [
        { label: "Blog", href: "/resources/blog" },
        { label: "Guides", href: "/resources/guides" },
        { label: "Research", href: "/resources/research" },
        { label: "FAQ", href: "/faq" },
        { label: "Glossary", href: "/resources/glossary" },
      ],
    },
    { label: "About", href: "/about" },
    { label: "Case Studies", href: "/case-studies" },
  ],
  cta: { label: "Get AI Visibility Audit", href: "/contact" },
};

// ─── AI Platforms ───
export const aiPlatforms = [
  { name: "ChatGPT", description: "OpenAI's conversational AI" },
  { name: "Google AI", description: "AI Overviews & AI Mode" },
  { name: "Gemini", description: "Google's multimodal AI" },
  { name: "Claude", description: "Anthropic's AI assistant" },
  { name: "Perplexity", description: "AI-powered answer engine" },
  { name: "Microsoft Copilot", description: "AI across Microsoft ecosystem" },
  { name: "Grok", description: "xAI's conversational AI" },
  { name: "Emerging Platforms", description: "Next-generation AI search" },
];

// ─── Services ───
export const services = [
  {
    id: "aeo",
    slug: "answer-engine-optimization",
    title: "Answer Engine Optimization",
    shortTitle: "AEO",
    description:
      "Structure your expertise so answer engines can understand and use it.",
    longDescription:
      "When customers ask questions, they don't always want ten blue links. They want an answer. Prompt&Co. helps brands structure their digital presence so the information search and answer systems need is clear, accessible and authoritative.",
    icon: "search",
    benefits: [
      "Question research & mapping",
      "Answer architecture",
      "Content optimization",
      "FAQ strategy",
      "Entity optimization",
      "Structured data",
      "Technical SEO",
      "AI prompt monitoring",
    ],
  },
  {
    id: "geo",
    slug: "generative-engine-optimization",
    title: "Generative Engine Optimization",
    shortTitle: "GEO",
    description:
      "Improve your brand's visibility across generative search and recommendation experiences.",
    longDescription:
      "Generative search changes the competitive landscape. Instead of presenting users with a list of pages, AI systems can synthesize information from multiple sources and recommend what they believe is most relevant. Prompt&Co. helps strengthen the signals behind that recommendation layer.",
    icon: "sparkles",
    benefits: [
      "Brand mention optimization",
      "Citation building",
      "Source authority",
      "AI recommendation signals",
      "Content structuring",
      "Entity authority",
      "Digital footprint",
      "Competitive analysis",
    ],
  },
  {
    id: "ai-search",
    slug: "ai-search-optimization",
    title: "AI Search Optimization",
    shortTitle: "AI Search",
    description:
      "Connect technical SEO, content, entities and authority into one AI-search strategy.",
    longDescription:
      "AI Search Optimization brings together the disciplines behind modern discovery: technical SEO, AEO, GEO, content, entity authority, digital PR and measurement. Rather than optimizing one page for one keyword, we build the interconnected digital footprint that helps your brand become easier to discover, understand, verify and recommend.",
    icon: "brain",
    benefits: [
      "Integrated AI search strategy",
      "Technical SEO foundation",
      "Content architecture",
      "Entity signals",
      "Authority building",
      "AI visibility monitoring",
      "Performance measurement",
      "Continuous optimization",
    ],
  },
  {
    id: "entity",
    slug: "entity-optimization",
    title: "Entity Optimization",
    shortTitle: "Entity",
    description:
      "Make it easier for search engines and AI systems to understand who your brand is, what you do and what you are known for.",
    longDescription:
      "Before an AI system can recommend your company, it needs to understand what your company actually is. We strengthen the entity signals connecting your brand to its products, services, people, industries, locations and areas of expertise.",
    icon: "building",
    benefits: [
      "Organization entity",
      "Service entities",
      "People & authors",
      "sameAs signals",
      "Structured data",
      "External mentions",
      "Knowledge consistency",
      "Brand footprint",
    ],
  },
  {
    id: "content",
    slug: "ai-content-optimization",
    title: "AI Content Optimization",
    shortTitle: "Content",
    description:
      "Build content designed for people—and structured so machines can interpret it clearly.",
    longDescription:
      "We build source-worthy content. Original research, expert analysis, comparison content, FAQs, commercial pages, definitions, explainers, decision-support content and industry resources—all designed for people first and structured so machines can interpret them clearly.",
    icon: "document",
    benefits: [
      "Original research",
      "Expert analysis",
      "Comparison content",
      "FAQ strategy",
      "Decision-support content",
      "Industry resources",
      "Commercial pages",
      "Structured formatting",
    ],
  },
  {
    id: "citation",
    slug: "citation-optimization",
    title: "Citation Optimization",
    shortTitle: "Citations",
    description:
      "Strengthen the sources, references and authority signals that can support AI-generated recommendations.",
    longDescription:
      "AI systems don't operate in a vacuum. They retrieve and synthesize information from sources across the web. We identify the sources influencing your category, assess where competitors are being referenced and build a stronger authority footprint around your brand.",
    icon: "link",
    benefits: [
      "Digital PR",
      "Industry publications",
      "Original research",
      "Expert commentary",
      "Authoritative directories",
      "Third-party sources",
      "Citations & backlinks",
      "Brand references",
    ],
  },
  {
    id: "ai-visibility",
    slug: "ai-visibility",
    title: "AI Visibility",
    shortTitle: "Visibility",
    description:
      "See exactly where, how and why your brand appears across AI answers — and what to do about it.",
    longDescription:
      "You can't improve what you don't measure. We monitor how your brand appears across ChatGPT, Google AI Overviews and AI Mode, Perplexity, Gemini, Copilot and Claude — tracking share of voice, citation sources, sentiment and accuracy, and benchmarking you against the competitors AI systems mention instead of you.",
    icon: "chart",
    benefits: [
      "AI answer monitoring",
      "Share of voice tracking",
      "Competitor benchmarking",
      "Prompt & query coverage",
      "Citation source tracking",
      "Sentiment & accuracy checks",
      "Monthly visibility reporting",
      "Alerting on changes",
    ],
  },
  {
    id: "technical-seo",
    slug: "technical-seo",
    title: "Technical SEO",
    shortTitle: "Technical",
    description:
      "Fix the crawlability, structure and speed foundations that AI and search systems depend on.",
    longDescription:
      "If AI systems and search crawlers can't access, render and parse your site cleanly, nothing else matters. We audit and fix the technical foundation — crawlability, rendering, information architecture, structured data and performance — so every other optimization effort compounds on solid ground.",
    icon: "wrench",
    benefits: [
      "Crawl & index diagnostics",
      "Core Web Vitals",
      "Structured data",
      "Information architecture",
      "Internal linking",
      "Server response & rendering",
      "Schema implementation",
      "Log & bot analysis",
    ],
  },
  {
    id: "digital-pr",
    slug: "digital-pr",
    title: "Digital PR",
    shortTitle: "Digital PR",
    description:
      "Earn the mentions, citations and third-party sources that AI systems trust.",
    longDescription:
      "AI systems learn who to recommend from what the web says about you — not just from your own site. We run digital PR programs that earn mentions in the publications, directories and communities your category's AI answers are built from, turning third-party validation into a durable visibility asset.",
    icon: "globe",
    benefits: [
      "Digital PR campaigns",
      "Expert commentary placement",
      "Data-led stories",
      "Industry publication outreach",
      "Podcast & webinar appearances",
      "Directory & profile cleanup",
      "Brand mention monitoring",
      "Relationship building",
    ],
  },
];

// ─── Methodology Steps ───
export const methodology = [
  {
    step: "01",
    title: "Discover",
    description:
      "We identify the searches, questions and AI prompts that influence your market.",
    icon: "compass",
  },
  {
    step: "02",
    title: "Audit",
    description:
      "We assess your technical foundation, content, entity signals, citations, authority and competitive visibility.",
    icon: "magnifier",
  },
  {
    step: "03",
    title: "Build",
    description:
      "We fix the foundations and create the content and information architecture your audience—and AI systems—can understand.",
    icon: "wrench",
  },
  {
    step: "04",
    title: "Strengthen",
    description:
      "We build authority beyond your website through relevant sources, mentions, PR and digital footprint development.",
    icon: "shield",
  },
  {
    step: "05",
    title: "Monitor",
    description:
      "We track how your brand appears across relevant search and AI surfaces.",
    icon: "chart",
  },
  {
    step: "06",
    title: "Compound",
    description:
      "We continually expand coverage around the prompts and topics that matter to revenue.",
    icon: "growth",
  },
];

// ─── Industries ───
export const industries = [
  { name: "SaaS", slug: "saas", icon: "cloud" },
  { name: "E-commerce", slug: "ecommerce", icon: "cart" },
  { name: "B2B", slug: "b2b", icon: "handshake" },
  { name: "Healthcare", slug: "healthcare", icon: "heart" },
  { name: "Finance", slug: "finance", icon: "chart" },
  { name: "Legal", slug: "legal", icon: "scale" },
  { name: "Real Estate", slug: "real-estate", icon: "home" },
  { name: "Professional Services", slug: "professional-services", icon: "briefcase" },
  { name: "Education", slug: "education", icon: "book" },
  { name: "Hospitality", slug: "hospitality", icon: "star" },
  { name: "Technology", slug: "technology", icon: "cpu" },
  { name: "Local Services", slug: "local-services", icon: "map" },
];

// ─── Testimonials ───
export const testimonials = [
  {
    quote:
      "Prompt&Co. completely transformed how we think about search visibility. Their AEO strategy helped us become a top recommendation across AI platforms in our category.",
    name: "Rajesh Kumar",
    role: "Head of Marketing",
    company: "TechScale Solutions",
    rating: 5,
  },
  {
    quote:
      "Within six months of working with Prompt&Co., our brand mentions in AI-generated answers increased significantly. Their systematic approach to entity optimization and authority building is unmatched.",
    name: "Priya Sharma",
    role: "CMO",
    company: "CloudFirst India",
    rating: 5,
  },
];

// ─── Comparison Table ───
export const comparisonData = [
  {
    dimension: "Optimizes for",
    seo: "Search engines",
    aeo: "Answer engines",
    geo: "Generative search",
  },
  {
    dimension: "Core outcome",
    seo: "Rankings & clicks",
    aeo: "Inclusion in answers",
    geo: "Mentions, citations & recommendations",
  },
  {
    dimension: "Focus",
    seo: "Pages & queries",
    aeo: "Questions & answers",
    geo: "Brand/entity + sources + context",
  },
  {
    dimension: "Example",
    seo: '"AEO agency"',
    aeo: '"What is AEO?"',
    geo: '"Who are the best AEO agencies?"',
  },
  {
    dimension: "Key signals",
    seo: "Relevance, links, technical health",
    aeo: "Clear answers, structure, authority",
    geo: "Entity authority, sources, content, mentions",
  },
];

// ─── FAQ ───
export const faqData = [
  {
    question: "What is Answer Engine Optimization?",
    answer:
      "Answer Engine Optimization, or AEO, is the practice of structuring and strengthening a brand's content and digital presence so answer-oriented search experiences can understand, retrieve and present it effectively.",
  },
  {
    question: "What is Generative Engine Optimization?",
    answer:
      "Generative Engine Optimization, or GEO, is the broader practice of improving a brand's visibility and representation in generative search and AI-generated answers.",
  },
  {
    question: "Is AEO the same as SEO?",
    answer:
      "No. AEO builds on SEO but focuses more explicitly on answer-oriented discovery. Strong technical SEO, crawlability, relevance and authority remain important foundations.",
  },
  {
    question: "How do I get my business recommended by ChatGPT?",
    answer:
      "There is no guaranteed formula or direct submission that makes ChatGPT recommend a business. Prompt&Co. works on the underlying signals that can influence discoverability, including technical accessibility, relevant content, entity clarity, authority, citations and third-party presence.",
  },
  {
    question: "Does GEO replace SEO?",
    answer:
      "No. SEO remains an important foundation for AI discoverability. GEO and AEO build on top of strong SEO fundamentals.",
  },
  {
    question: "Which AI platforms do you optimize for?",
    answer:
      "Prompt&Co. focuses on the broader AI search ecosystem rather than a single platform, including relevant experiences from ChatGPT, Google AI, Gemini, Claude, Perplexity, Microsoft Copilot, Grok and other emerging AI systems.",
  },
  {
    question: "How long does AEO/GEO take?",
    answer:
      "Timelines vary by domain authority, competition, technical condition, content depth, industry and the scope of the engagement. We establish a baseline first and measure progress against defined visibility and business metrics.",
  },
];

// ─── SEO Metadata for Pages ───
export const seoMetadata = {
  home: {
    title: "AI Search Optimization Agency | AEO & GEO | Prompt&Co.",
    description:
      "Prompt&Co. helps brands improve AI discoverability through AEO, GEO, entity optimization, content and authority across modern AI search.",
  },
  about: {
    title: "About Prompt&Co. | AI Search & AEO/GEO Agency",
    description:
      "Learn about Prompt&Co., an AI search optimization agency specializing in AEO, GEO, entity optimization and AI discoverability.",
  },
  contact: {
    title: "Contact Prompt&Co. | Get Your AI Visibility Audit",
    description:
      "Get a free AI visibility assessment. Find out what AI says about your brand and discover opportunities to improve your AI search presence.",
  },
  faq: {
    title: "AEO, GEO & AI Search — Frequently Asked Questions",
    description:
      "Answers to common questions about Answer Engine Optimization, Generative Engine Optimization, AI search and how Prompt&Co. helps brands become AI-discoverable.",
  },
  services: {
    title: "AI Search Optimization Services | AEO, GEO & More | Prompt&Co.",
    description:
      "Comprehensive AI search optimization services including AEO, GEO, entity optimization, AI content, citation optimization and digital PR.",
  },
};
