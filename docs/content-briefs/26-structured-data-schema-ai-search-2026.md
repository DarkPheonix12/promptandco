# Brief #26 — Schema r.2: What Structured Data Actually Does After May 2026

Status: researched → brief. Private working document.

## Working title
Structured Data After the FAQ Death: What Schema Actually Does in 2026

## Slug
`structured-data-schema-ai-search-2026`

## Targeting
- Primary query: "schema markup AI search 2026" / "FAQPage schema deprecated" / "structured data AI citations" / "schema AI Overviews" / "JSON-LD AI search"
- Intent: informational (technical SEOs, developers, marketing leads). Sequel to the broader GEO series; pairs with #23 SaaS playbook, #24 year-in-review, #25 measurement, and the entity-optimization piece (#11).

## Evidence base (fresh 2026)

**Google policy changes (confirmed):**
- FAQPage fully deprecated May 7 2026 (restricted to gov/health since Aug 2023); Rich Results Test support dropped June 2026; Search Console API support removed August 2026.
- HowTo deprecated Aug 2023 for general sites; HowTo schema still valid, no rich results.
- June 2025: Henry Hsu (Google) announced phase-out of 7 types (Book Actions, Course Info, ClaimReview, Estimated Salary, Learning Video, Special Announcement, Vehicle Listing). API dropped Jan 2026; Search Console reporting dropped Sep 2025.
- Nov 2025: John Mueller confirmed simplification is a program, not a one-off.
- **May 2026 AI optimization guide**: "There's no special schema.org markup you need to add" for generative AI search; "no new machine-readable files, AI-specific text files, or special markup formats" required; llms.txt ignored.
- **May 15 2026 web spam policy update**: "attempts to manipulate generative AI responses in Google Search" added as a spam category.
- March 2026 core update: targeted schema abuse — FAQPage on non-FAQ content, HowTo on non-procedural content, Article on non-editorial content.
- **14 active schema types** that still earn rich results in 2026: Article, Breadcrumb, Product (incl. MerchantListing, ProductVariants), Recipe, Event, LocalBusiness, JobPosting, Video, Organization, Speakable, Return Policy, Shipping Policy, Loyalty Program, Carousel (Space & Story).
- Google documentation: "FAQPage markup itself is not harmful" and Google still parses it for understanding — but no visible search feature.
- FAQ rich result now officially gone; the entire reason most people shipped JSON-LD evaporated — but the AI-comprehension benefit persists.

**The Ahrefs controlled study (May 2026):**
- 1,885 pages; matched difference-in-differences design (schema vs control pages with similar citation levels; 30 days before/after).
- Result: AI Mode +2.4%, ChatGPT +2.2% (statistical noise); AI Overviews −4.6% (small but real in the sample).
- Caveat: all pages were already receiving 100+ AI Overview citations before schema was added — can't speak to undiscovered pages.
- Ahrefs 75,000-brand analysis: branded web mentions correlate with AI visibility at 0.664; backlinks at 0.218; YouTube mentions at 0.737.
- **Correlation ≠ causation**: pages with schema markup are more likely to be cited, but those pages belong to authoritative, well-maintained sites doing everything else right.

**AI retrieval mechanism (searchVIU experiment, 2026):**
- Tested across ChatGPT, Claude, Perplexity, Gemini, Google AI Mode — all five systems extract only visible HTML during real-time page fetching.
- Hidden structured data (JSON-LD, Microdata, RDFa) not processed at point of citation selection.
- Schema gets fed into Knowledge Graphs / entity indexes by search engine crawling → enriched indexes → AI platforms query enriched indexes.

**Contradictory industry studies:**
- BrightEdge: 44% increase in AI Overview appearances for pages with proper structured data (unclear methodology vs Ahrefs controlled test).
- RankDraft/MV3/DM: 2.5–3.2× higher citation rates with schema (correlational, not controlled).
- Ciselity: pages with FAQPage schema 35% more AI citation impressions (BrightEdge 2026).
- SetProduct: 29 AIO citations on a DR42 blog; every cited article had FAQPage schema; but many articles with FAQPage were never cited.

**Entity-first architecture (the real story):**
- Organization schema with stable @id + sameAs to Wikipedia/Wikidata/LinkedIn = strongest single entity signal (Unified Platforms, TheStacc, Numinam).
- Person schema with jobTitle + worksFor + sameAs = E-E-A-T encoding for author credibility.
- Article schema with dateModified = freshness signal AI systems use to deprioritize stale content.
- @id references across pages = site-wide entity graph (TheStacc).
- Entity linking via sameAs → Wikidata Q-identifier = "widely regarded as the strongest 2026 signal for being retrieved and cited in generative AI."
- BreadcrumbList = low-effort, no-risk, improves both hierarchy comprehension and AI extractors.
- Product + Review = top for e-commerce; Google and Bing confirm use for AI shopping.

**Agent-ready architecture (Google guidance + Microsoft NLWeb):**
- Google: AI agent optimization = crawlability + semantic HTML + accessible interactions + stable interfaces (NOT schema-first).
- Microsoft NLWeb (created by R.V. Guha, Schema.org creator): uses Schema.org as the data layer for conversational AI interfaces on websites — schema as an interface, not a ranking signal.
- Schema.org proposal: WebPageSemanticRepresentation type for AI agent consumption — signaling the next evolution from markup-as-SEO to markup-as-infrastructure.

**FAQPage post-deprecation reality:**
- FAQPage still valid as schema.org type; Google still parses for understanding; AI engines still extract Q&A pairs.
- GSC generative AI report now replaces the FAQ rich result reporting for practical purposes.
- Keep genuine FAQ content + FAQPage markup; remove stuffed/hollow FAQ content.

## Original angle / contribution
1. "The race is over. Fourteen types survived; eight are dead." — definitive 2026 schema map, post-May 2026 reality.
2. "Schema stopped being a ranking trick and became an identity layer" — the entity-graph thesis (Organization→@id→sameAs→Wikidata→Person→Article).
3. "The engines don't read your JSON-LD in real time" — searchVIU finding + the indexing pipeline explanation (why schema works indirectly).
4. "The FAQ rich result is dead. The FAQ for AI comprehension is not." — post-May 2026 FAQPage reality.
5. "Schema is not a GEO tactic. It is infrastructure for every AI system that touches your site" — the NLWeb/agent-ready frame.

## SEO / AEO / GEO strategy
- H1: "Structured Data After the FAQ Death: What Schema Actually Does in 2026"
- FAQ (5): Is schema markup required for AI Overview citations? / What happened to FAQ schema in May 2026? / Which schema types still work in 2026? / Does ChatGPT or Perplexity read JSON-LD directly? / What is entity linking and why does it matter for AI citations?
- Internal links: #23 SaaS playbook, #24 year-in-review, #25 measurement, #11 entity optimization, hub 005.

## Phase 21 score
7.7 (technical infrastructure piece; intersects agent-ready trends; less urgent than measurement/measure but important foundation)

## Writing credo checklist
One h1; exactly 5 FAQ (meta.faq); DefinitionCard opener; ~1600-1800 words; attribute every stat; no fabrication; datePublished 2026-09-11; raw `<` → `&lt;`; meta requires tags + dateModified + readingTimeMinutes.