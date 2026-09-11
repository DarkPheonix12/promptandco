# Prompt&Co. — Content Research Database

Internal research memory for the 2026 content program. One record per article.
No secrets or credentials are stored here. Private working document.

Legend — Status: planned → researched → briefed → written → audited → published.
Score: overall opportunity score (1–10), see Phase 21 of the master directive.

---

## 001 — The 2026 AI Citation Study (Article #1)

- Status: **published**
- Commit: `546d8c1`
- URL: https://promptco.online/resources/research/2026-ai-citation-study
- Published: 2026-09-11

### Targeting
- Primary query: "who gets cited by AI" / "AI citation study 2026"
- Primary intent: informational — evidence synthesis; commercial (demonstrates method)
- Supporting queries: "BrightEdge 48%", "Trakkr 73.5%", "ConvertMate freshness", "AI Overviews business sites", "engine citation rates Gemini ChatGPT Perplexity"
- Funnel stage: awareness → interest

### Research
- Sources: BrightEdge (2026, 48% AIO presence business sites), Trakkr (2026, 73.5% one-and-done, 31-day demand half-life), Wellows (2026, 79.6% single-engine), cloro (2026, Gemini ~41% citation rate), ConvertMate (Jan 2026, 105k articles, 3.2x last-month freshness), Google (2025, llms.txt no special weight), Tw93 (2026, ~100 pages/query, ~15% surface).
- Competitors analyzed: industry dashboards/blogs on the same studies; SEO agency roundups. No single competitor owns an evidence-synthesis on this topic.
- Entities: AI Overviews, ChatGPT, Perplexity, Gemini, Bing Copilot/output, AI Search visibility, engines, citation signals, engine overlap.

### Gaps & differentiation
- Gap: nobody had synthesized the 2026 studies into one coherent, engine-level, comparable account with conflict reconciliation (e.g., 32–38% overlap vs 79.6% single-engine).
- Original contribution: overlap/conflict reconciliation table; per-engine signature table; levers table; transparent caveats + COI note; public forthcoming Edition 01 panel.

### QA & validation
- Lint/tsc/build clean; 200; 1x h1; BlogPosting + FAQPage; canonical verified. Deploy: blocked by GitHub Actions Cloudflare token (env, user-side), not code.

---

## 002 — AI Crawlers & Technical Readiness Playbook (Article #2)

- Status: **published**
- Commit: `a38de3b`
- URL: https://promptco.online/resources/research/ai-crawlers-2026-readiness
- Published: 2026-09-11

### Targeting
- Primary query: "AI crawlers 2026" / "robots.txt GPTBot ClaudeBot" / "AI readiness"
- Primary intent: informational + practitioner troubleshooting; commercial (into service line)
- Supporting queries: "should I block GPTBot", "llms.txt does it matter", "why is my site not cited AI"
- Funnel stage: awareness → interest

### Research
- Sources: OtterlyAI (Feb 2026, 1M citations, ~73% sites carry ≥1 technical barrier), Tw93 (2026), Google (2025, robots.txt not designed for all AI surfaces; llms.txt no weight), crawler UA documentation.
- Competitors analyzed: agency "AI crawl" explainers; vendor robots.txt guides.
- Entities: GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot, Google-Extended, Googlebot, Applebot-Extended, Bingbot, Bytespider, Amazonbot, Meta-ExternalAgent, CCBot, robots.txt, sitemap.xml, SSR/SSG, structured data.

### Gaps & differentiation
- Gap: most existing content overstates robots.txt / llms.txt as levers; little covered the real technical parseability layer.
- Original contribution: crawler landscape table; the "robots.txt is opt-out not opt-in" thesis; 8 technical levers; our own audited setup as a case study; 10-point self-audit; honest admission of our own gaps.

---

## 003 — The 2026 Freshness Playbook (Article #3)

- Status: **published**
- Commit: `5cd4930`
- URL: https://promptco.online/resources/research/freshness-playbook-2026
- Published: 2026-09-11

### Targeting
- Primary query: "content freshness AI citations" / "how often update content for AI"
- Primary intent: informational + workbrick how-to
- Supporting queries: "ConvertMate freshness 3.2x", "update content in place vs new URL", "content refresh cadence"
- Funnel stage: interest → consideration

### Research
- Sources: ConvertMate (Jan 2026), Trakkr (2026, 73.5%), Google (2025 office-hours, refresh in place).
- Competitors analyzed: SEO "freshness" blog pieces (mostly pre-2024, no AI-citation data).
- Entities: freshness, citation share, update cadence, lastModified, Wayback, content tiers, evidence pool.

### Gaps & differentiation
- Gap: freshness content is written for Google ranking, not AI citation pools.
- Original contribution: the 3.2x recency table; mechanism account (snapshot selection, evidence-pool copying, back-fill); tiered cadence system; "preserve what got you cited" rule; explicit honesty that 2–4-week cadence is synthesis pending Edition 01.

---

## 004 — AI Visibility Measurement Buyer's Guide (Article #4)

- Status: **published**
- Commit: `b85af06`
- URL: https://promptco.online/resources/research/ai-visibility-measurement-buyers-guide
- Published: 2026-09-11

### Targeting
- Primary query: "how to measure AI visibility" / "AI SEO tools benchmark" / "citation tracking"
- Primary intent: informational + purchase-research
- Supporting queries: "AI score tool legit", "how to track ChatGPT mentions brand", "measure AI Overviews presence"
- Funnel stage: consideration

### Research
- Sources: research series pipeline (BrightEdge, Trakkr, ConvertMate, OtterlyAI, Wellows, cloro); our own measurement SOP.
- Competitors analyzed: vendor marketing pages; "AI SEO tool roundups." No vendor is benchmarked (deliberately) — that is the honesty gap we occupy.
- Entities: citation intelligence, answer monitoring, retrieval visibility, surfaced vs quoted, AI score, query battery, Wayback.

### Gaps & differentiation
- Gap: no credible cross-engine vendor benchmark exists; market is full of unverifiable scores.
- Original contribution: five questions to measure; tool-category capability table; 4-question vendor vet; free self-serve measurement system; explicit non-benchmark disclosure.

---

## 006 — Entity Optimization in 2026 (Article #6 — spoke of hub 005)

- Status: **written + committed + pushed**
- Commit: 8939e1a
- URL: https://promptco.online/resources/research/entity-optimization-2026
- Brief: docs/content-briefs/006-entity-optimization-2026.md

### Targeting
- Primary query: "entity optimization AI search" / "entity SEO 2026" / "brand entity"
- Intent: informational + technical; commercial. Deepens hub levers 9–10.

### Research (fresh 2026)
- Sources: GEO Lab/Ferreira Zenodo experiment (Apr 2026); Searchless.ai 500-brand tracking; Victorious 175-brand test (Jul 2026); Semrush Nov 2025 (230k prompts/100M citations, via Gist); Ahrefs 2025-26; Wills/Searchbloom rho≈0.577; Growth Memo ghost citation; Machine Relations entity chains; Kalicube entity home (SEL Mar 2026); Whitespark 2026; llmreach Gemini entity verification.
- Competitors analyzed: OrganiKPI, Gist, LBJ, Jottler, Nobori, Searchbloom, Searchless, LeadsNow ×2, SEO Strategy Ltd, Machine Relations, Fokal (+13 total).
- Entities: Knowledge Graph, Wikidata QID, sameAs, Organization schema, entity home, disambiguation, corroboration, ghost citation, NAP, Knowledge Panel, entity chains, Gemini AI Mode, Wikipedia, LinkedIn/Crunchbase.

### Gaps & differentiation
- Gap: no competitor anchors entity work on a controlled recognition-gating experiment or separates recognition/disambiguation/corroboration cleanly.
- Original contribution: gating mechanism + ghost-citation link + 4-part build + 30-day sprint + per-engine layer divergence + "necessary not sufficient" tie to hub.

### QA & validation
- Committed + pushed (8939e1a); rendered checks passed (200 / h1 / BlogPosting / FAQPage / canonical / sitemap / index).

---

## 005 — The 11 Levers of AI Citation (Article #5 — hub)

- Status: **written + committed + pushed**
- Commit: c58643c
- URL: https://promptco.online/resources/research/ai-citation-levers-2026
- Brief: docs/content-briefs/005-ai-citation-levers-2026.md

### Targeting
- Primary query: "what gets cited by AI" / "AI citation factors" / "how to get cited by AI"
- Primary intent: informational hub; commercial (methodology-led entry)
- Supporting queries: "AI ranking factors 2026", "GEO levers", "why won't ChatGPT cite me", "ChatGPT vs Perplexity citations overlap", "is schema important for AI search"
- Funnel: awareness → consideration
- Role: hub for cluster (links to 001, 002, 003, 004; they link back).

### Research (fresh 2026)
- Sources: SIGIR '26 competitive GEO (252,000 trials); GEO-16 (arXiv:2509.10762, 1,702 citations); Aggarwal/Princeton KDD 2024; Ahrefs 2025-26 (75k brands, llms.txt, schema RCT); Wix AI Search Lab & HubSpot (>1M citations); citations.press (60,350); ConvertMate (105k); RankSenseAI synthesis; Zyppy 54-study meta; Trakkr; Muck Rack; Stacker (239%); llmreach/whyiq engine syntheses; Watanabe & Nakayashiki AEO natural experiment; Ranqo arXiv; Foragentis; TurboAudit; AirOps; Moz; Weather/Meltwater.
- Competitors analyzed: RankSenseAI report, llmreach.ai, whyiq.ai, TurboAudit, Dupple, authoritytech.io, citations.press, Searchless Journal, AuditAE, Foragentis, Trakkr guide, Restplex, eastbound (definition pages), and 5 repeated academic syntheses.
- Entities: ChatGPT/Perplexity/Gemini/Claude/AI Overviews/Brave, OAI-SearchBot/GPTBot/PerplexityBot/Google-Extended/ClaudeBot, RAG, citation, retrieval, grounded answer, earned media, E-E-A-T, entity verification, schema, freshness, listicle, comparison, fan-out, volatility, Matthew effect, tailwind.

### Gaps & differentiation
- Gap: no competitor publishes an evidence-ranked lever model that (a) preserves the disagreements (schema), (b) separates gatekeepers/differentiators/refinements, and (c) states volatility + tailwind-inflation caveats. Market noise is "AI scores" and laundry lists.
- Original contribution: 11-lever evidence-rated model; engine weight-table; "what changed in 2026"; SIGIR-derived diagnostic; horizon sequencing (Foragentis). Remains hub of the cluster.

### QA & validation
- Pending: lint, tsc, build, rendered checks (200/h1/schema/canonical/sitemap/index), then commit + push + Phase 25 report.

---

## 007 — SEO vs GEO vs AEO vs LLMO (Article #7 — strategy tier)

- Status: **written** (validation in progress)
- Commit: pending (this commit)
- URL: https://promptco.online/resources/research/seo-geo-aeo-llmo-guide-2026
- Brief: docs/content-briefs/007-seo-geo-aeo-llmo-guide-2026.md

### Targeting
- Primary query: "SEO vs GEO vs AEO vs LLMO" / "GEO definition" / "AEO vs GEO" / "LLMO SEO"
- Intent: definitional + strategic; decision support. Tier-3 strategy post; stitches cluster.

### Research (fresh 2026)
- Sources: Search Counsel Co; Serpstat; Eastbound (China gap, 540-call Jaccard); The GEO Lab three-models; Google AI optimization guide (market-terms stance); Chen/Wang/Chen/Koudas arXiv 2601.16858 (pre-training divergence, citation-miss 0.06–0.73); Watanabe & Nakayashiki arXiv 2606.04362 (tailwind-adjusted 1.8–2.3×, placebo p=0.16); Ranqo/Kumar arXiv 2606.20065 (73/44/11 ladder); appwebseo funnel chain; Aggarwal KDD 2024; Puerto C-SEO Bench.
- Competitors analyzed: Search Counsel Co, Serpstat, Eastbound, MV3, appwebseo, The GEO Lab, Google docs (+7).
- Entities: SEO/AEO/GEO/LLMO/AIO/AAO, retrieval→extraction→compression→citation pipeline, pages-vs-sections, pre-training bias, earned media, platform tailwind, prompt recall, entity coverage, funnel chain.

### Gaps & differentiation
- Gap: no competitor anchors the taxonomy dispute on 2026 measurement studies or presents Google-vs-academy-vs-vendor tension as the organizing device.
- Original contribution: three-models framing (adopted+cited); measurement-led tiebreaker (pre-training divergence + tailwind-controlled natural experiment); funnel chain; China substrate caveat; "name surface, intervention, metric, owner" rule; deep cross-link spine.

### QA & validation
- Passed: lint, tsc, build, rendered checks (200 / 1×h1 / BlogPosting / FAQPage / canonical / sitemap / index).
- Pending: commit + push + Phase 25 report.

---

## 008 — E-E-A-T for the Machine (Article #8 — spoke of hub 005)

- Status: **written** (validation in progress)
- Commit: pending (this commit)
- URL: https://promptco.online/resources/research/eeat-ai-trust-signals-2026
- Brief: docs/content-briefs/008-eeat-ai-trust-signals-2026.md

### Targeting
- Primary query: "E-E-A-T AI search" / "Google E-E-A-T algorithm" / "trust signals AI citations"
- Intent: informational + strategic; operationalizes hub lever 6; pairs with entity spoke (recognition + corroboration).

### Research (fresh 2026)
- Sources: Xu/Iqbal/Montgomery arXiv 2605.14021 (AIO audit); Google creating-helpful-content + AI guide; SIGI 77-signal taxonomy ×3; flozi 100-vs-100 paired study; GEO-16; KDD 2024; Ahrefs/SEJ/U Toronto/Yext; Springer CRD (Sep 2026); SEOHack evidence tiers; mentionLAB; Area51 trust triangle.
- Competitors analyzed: SEOHack, cite.solutions, Nadia Mohamed, Area 51, authoritytech, flozi, mentionLAB, SIGI (+8).
- Entities: E-E-A-T, provenance, corroboration, author entity, methodology, trust signals, fidelity, training-time vs retrieval trust, institutional halo, CRD.

### Gaps & differentiation
- Gap: competitors argue "E-E-A-T dead/reborn" or vend unverifiable effect sizes; none surface the fidelity-independence finding (11% unsupported despite credible sources) or split training-time vs retrieval trust alongside entity work.
- Original contribution: rater-rubric→machine-signals reframe; 4-pillar evidence map; provenance-as-uncertainty-reducer (flagged attribution); corroboration-over-links cluster; "what is honestly contested"; sequenced 4–6wk/6–18mo timeline.

### QA & validation
- Passed: lint, tsc, build, rendered checks (200 / 1×h1 / BlogPosting / FAQPage / canonical / sitemap / index).
- Pending: commit + push + Phase 25 report.

---

## 009 — The Earned Media Engine (Article #9 — spoke of hub 005)

- Status: **written** (validation in progress)
- Commit: pending (this commit)
- URL: https://promptco.online/resources/research/earned-media-ai-search-playbook-2026
- Brief: docs/content-briefs/009-earned-media-ai-search-playbook-2026.md

### Targeting
- Primary query: "digital PR AI search" / "earned media AI citations" / "PR for AI" / "how to get cited by ChatGPT"
- Intent: informational + commercial; PR/comm teams, CMOs; budget justification. Operationalizes hub levers 9–10.

### Research (fresh 2026)
- Sources: Muck Rack series (3 editions); 5WPR 680M synthesis; LLM Pulse 5.3M; Foglift Q3; Stacker controlled experiment; Ahrefs/LumenGEO/Evertune correlations; AirOps/Superlines/BrightEdge; SE Rank; Semrush PR protocol; U Toronto arXiv 2509.08919.
- Competitors analyzed: machinerelations, firstmotion, semrush, atomicagi, 5wpr, foglift, llmpulse, authoritytech (+8).
- Entities: earned media, digital PR, brand mentions, citation share, share of voice, service journalism, listicle, corroboration, review platforms, citation displacement, tailwind.

### Gaps & differentiation
- Gap: competitors sell "earned = 84%" as measurement; none give the per-engine audience map with dosage caveats (3.26% news share), tailwind calibration, and the mention-threshold/compounding loop together.
- Original contribution: mechanical confirmation-problem framing; per-engine reading table; threshold + compounding loop; 5-move playbook; multiplier-honesty section (on-domain control); deep cross-link spine.

### QA & validation
- Passed: lint, tsc, build, rendered checks (200 / 1×h1 / BlogPosting / FAQPage / canonical / sitemap / index).
- Pending: commit + push + Phase 25 report.

---

## 010 — Schema Is Not an AI Citation Lever (Article #10 — spoke of hub 005)

- Status: **written + committed + pushed**
- Commit: f19ec7e
- URL: https://promptco.online/resources/research/schema-ai-citations-2026-evidence
- Brief: docs/content-briefs/010-schema-ai-citations-2026-evidence.md

### Targeting
- Primary query: "does schema markup help AI citations" / "JSON-LD GPT citations" / "schema structured data AI search 2026" / "FAQ schema ChatGPT"
- Intent: informational + commercial; technical SEOs deciding whether schema budget is a citation strategy. Resolves hub's openly-contested schema lever (9) with the controlled-evidence stack; pairs with entity (sameAs), crawlers (rendering), E-E-A-T (author/attribute fields), measurement spokes.

### Research (fresh 2026)
- Sources: Ahrefs (Linehan & Guan, May 2026; 6M URLs + DiD RCT 1,885 vs ~4,000; AIO −4.6% sig / AI Mode +2.4% null / ChatGPT +2.2% null); Fischman (SSRN 6284518, Feb 2026; rank-corrected GEE null; attribute-rich 61.7% vs generic 41.6% vs no-schema 59.8%); GEO Lab FAQ 480-query (−1.7%; mention 21.2% vs cite 0%); Authority Radar 90-day (Perplexity +1.3pp only); searchVIU live-retrieval (HTML-only at citation-selection); Williams-Cook DUCKYEA (JSON-LD read as text); GEO-16 (+39% is sampling artifact); AirOps 16,851 queries (38.5 vs 32.0 correlational); Schanbacher peer-reviewed (FAQPage OR≈13); citability.dev per-type/per-field; Google MYTHBUSTING + FAQ rich-results sunset May 7 2026; Bing/Canel Copilot; Web Data Commons 106B quads; Ahrefs llms.txt 137k audit; Trustpilot review-presence rider.
- Competitors analyzed: Backlinko, Ahrefs blog, Search Engine Land, Andrew Clark/Growth Memo, Daniel Cheung (+5).
- Entities: JSON-LD, schema.org, FAQPage, Product/Review schema, attribute-rich vs generic, FAQ rich results, llms.txt, Web Data Commons, retrieval rank, difference-in-differences, training layer vs retrieval layer, Copilot/Bing index.

### Gaps & differentiation
- Gap: competitors either cheerlead schema for AI (vendor correlational decks) or dismiss it outright (Ahrefs headline); none split correlational vs controlled AND keep the attribute-rich/no-schema-59.8% nuance with a per-use allocation.
- Original contribution: correlational-vs-causal verdict; five places markup still pays with honesty labels (entity spine, WDC training feed, Bing/Copilot, last-mile attributes, visible-facts-first); rank-dominates reallocation rule (43%→5%); own-site meta-aware admission (FAQ/BlogPosting = infrastructure, not citation trick).

### QA & validation
- Passed: lint, tsc, build, rendered checks (200 / 1×h1 / BlogPosting / FAQPage / canonical / sitemap / index).
- Pending: commit + push + Phase 25 report.

---

## 011 — llms.txt: The 137K-Site Audit, Who Reads It, When It Matters (Article #11)

- Status: **written + committed + pushed**
- Commit: 73a9b04
- URL: https://promptco.online/resources/research/llms-txt-2026-evidence
- Brief: docs/content-briefs/011-llms-txt-2026-evidence.md

### Targeting
- Primary query: "does llms.txt matter" / "llms.txt AI search" / "llms.txt study 137k"
- Intent: informational + practitioner decision; commercial (redirects wasted-effort spend). Spoke of hub 005; sibling to schema verdict (#10) and crawler readiness (#2).

### Research (fresh 2026, source re-verified)
- Anchor: Ahrefs / Linehan & Guan, published **June 15, 2026** (dataset May 2026; the 2025-11-10 date on the URL is stale page metadata — re-verified via multiple 2026 coverages), 137,210 domains + Bot Analytics: 28% publish (~38k, upper bound); 97% of valid files zero requests; of served, 96% bots / 77% not AI; AI 19.5% ceiling (agents 10.5% with Claude-Code top, training 5.3% GPTBot 4.51%, retrieval 1.1%, assistants ~2%); SEO audit tools ~21.7%; 12% studying the standard; Slackbot > PerplexityBot; zero AI bots on 404s (98% human); Lighthouse ~1 in 1,000.
- Convergence nulls: SE Ranking Nov 2025 (~300k domains, no correlation; removing feature improved XGBoost model); OtterlyAI 90-day (62,100+ AI visits; /llms.txt 84 visits, ~3x worse than avg page); EZY Research 12 weeks/83 sites (OpenAI 3,990 vs 7; Anthropic 3,120 vs 9; Perplexity 775 vs 0; Googlebot 5,125 vs 67; Meta-ExternalAgent 193 vs 172); Digital Applied Apr 2026 (~900 domains, 7 mo, 1,227 requests, 88% zero, zero frontier-lab crawlers).
- Adoption: Originality.ai 8.8x in 12 months (4,088 → 36,120 by May 2026; 38,980 incl. llms-full/ai.txt).
- Content: Common Crawl Jul 2026 crawl (Aug 2026) — 6.5M URLs, 69.8% 404, 19.61% 200, 11.72% text body; denial policies; prompt-instruction language in a subset.
- Platforms: Google MYTHBUSTING (not required; clarified Jun 15, 2026); Mueller "temporary crutch... not done for search"; Lighthouse 13.3.0 agentic-browsing audit (May 7, 2026); WebMCP origin trial Chrome 149; A2A (Apr 2025); OpenAI/Anthropic crawler docs → robots.txt.
- Competitors analyzed: Ahrefs blog, SEJ, Rabbit Rank, Foundgrove, Perkins Growth, Primo Interactive, llmtxt.info, BetterAISearch, Digital Applied, ppc.land, Originality.ai, EZY (+12). Gap: single-study recaps vs vendor cheerleading; none assemble convergent multi-method nulls into a decision framework or connect to agents/WebMCP/docs boundary.

### Gaps & differentiation
- Gap: market splits between "dead" (single-study recaps) and "future-proof" (vendors); nobody gives the reader hierarchy (agents > training > auditors > retrieval), the structural why (map vs control file; nobody probes 404s), and a four-box allocation.
- Original contribution: "read, not weighted" thesis; inverted reader pyramid; four-study convergence table; WebMCP/A2A horizon; if-you-publish-do-it-right rules; search-readiness comparison table (Phase 16); own-logs base-rate framing (97% = default not bug).

### QA & validation
- Passed: lint (MDX ignored by config, 0 errors), tsc, build (19 routes), rendered smoke (200 / 1×h1 / BlogPosting / FAQPage 5 questions / canonical https://promptco.online/resources/research/llms-txt-2026-evidence / sitemap ref / index ref / og:type article).
- Pending: Phase 25 report delivered in-task; commit+push hash recorded above.

---

## 012 — Reddit & Community: The AI-Citation Source You're Quoting Wrong (Article #12)

- Status: **written + committed + pushed**
- Commit: 3e93b37
- URL: https://promptco.online/resources/research/reddit-community-ai-citations-2026
- Brief: docs/content-briefs/012-reddit-community-ai-citations-2026.md

### Targeting
- Primary query: "Reddit AI citations 2026" / "Reddit Perplexity citations" / "Reddit SEO for AI"
- Intent: informational + practitioner decision; commercial. Spoke of hub 005 (community/platform fan-out). Differentiated from #9 (earned media/PR broadly) — thread-level community layer with volatility mechanics.

### Research (fresh 2026)
- Red-engage (Apr 2026, 10,000+ citations/90 days): top-10 shares (Perplexity 46.7%, AIO 21%, ChatGPT 18%, Gemini 15%); top-5 subreddits ≈35% of B2B SaaS; 300–600-word comments > posts; upvote threshold ~50.
- Correction sources: 5W/Bluefish/PikaSEO trace via CiteFlow (46.7% = top-10 concentration; Profound full-volume ≈6.6%); Everything-PR/Evertune 200M + Tinuiti Q1 2026 (20–24%; brand cite 13.05% vs ChatGPT 0.59%); Cairrot 1.5M prompts (2.05% Perplexity share / 16.6% prompt share; local lift 1.83→3.17%; Claude none since Mar 2026).
- Hidden influence: Discovered Labs (144,284 citations; ChatGPT 27% slots vs 0.35% visible; Google 2.11%; Gemini 0.99%).
- Volatility: ChatGPT 60%→<10% Sep 2025 (licensing; recovered ~13%); Reddit v Perplexity Oct 2025 → ~86% drop; ZeroClick (Jun 2026, 7,905 retrievals): Perplexity retrieval 3.5%; AIO retrieves 27.8% vs ChatGPT 15.1% but cites ~10x less; 5 anchor threads = 62% of retrievals; scam-warning threads 1.57 vs 0.97 baseline; astroturfing traced but authentic wins.
- Format: Resocial triangulation (5 formats ≈3/4 of citations; pos 5% vs neg 6.1%); Semrush 248K URLs (80% <20 upvotes, 70% <20 comments, median ~900 days); SE Ranking Jul 2026 (share ~2.3→4.5%; 9% survivor posts → 48% of citations; ~10 median upvotes).
- Competitors: Red-engage, ThriveStack, Authoricy, OperatorIQ, EMGI, Discovered Labs, Resocial, Everything-PR, CiteFlow, Cairrot, ZeroClick Labs. Gap: nobody reconciles method-dependent numbers + volatility + hidden-influence + concentration into one survivable strategy.

### Gaps & differentiation
- Gap: playbooks built on a single headline number (46.7%) or vendor metrics; no shared "the number depends on definition" reconciliation or volatility timeline.
- Original contribution: "you're quoting it wrong" framing (top-10 vs full-volume with three magnitudes); volatility timeline (Sep 2025 collapse, Oct 2025 lawsuit); retrieved-vs-cited-vs-shown gap; format-first play (structure beats engagement); anchor-thread concentration/fragility; per-engine pairing map; Phase 16 comparison table.

### QA & validation
- Passed: tsc, build (20 routes), rendered smoke (200 / 1×h1 / BlogPosting / FAQPage 5 / canonical / sitemap / index / og:type article).
- Pending: commit + push + Phase 25 report.

---

## 013 — Google AI Is Two Engines: AI Mode vs AI Overviews (Article #13)

- Status: **written + committed + pushed**
- Commit: 57ef366
- URL: https://promptco.online/resources/research/ai-mode-vs-ai-overviews-2026
- Brief: docs/content-briefs/013-ai-mode-vs-ai-overviews-2026.md

### Targeting
- Primary query: "AI Mode vs AI Overviews" / "AI Mode SEO" / "cite both AI Overviews and AI Mode"
- Intent: informational + practitioner decision; premium commercial. Spoke of hub 005; pairs with #12 (community) and flagship F1 (per-engine divergence, later). Scope: the two-Google-surfaces problem at query level.

### Research (fresh 2026, measurement-units reconciliation)
- Anchor: Ahrefs / Gavoyannis & Guan, **Dec 15, 2025**, US Brand Radar Sep 2025: 540k query pairs (citations) + 730k (similarity). URL overlap 13.7% (top-3 16.3%); word overlap ~16%; same first sentence 2.51%; identical 0.51%; semantic 86% (89.7% of pairs >0.8); AI Mode ~4x longer; entities 3.3 vs 1.3; 61% entity-carry; citation gaps 3% vs 11%; source-preference deltas (Wikipedia 28.9% vs 18.1%; Quora 3.5x; health ~2x; Facebook 2x; YouTube ~2x AIO; Reddit similar); query fan-out; ~45% of AIO citations change between generations.
- Reconciliation (per-query vs top-100): Finseo Sep 4 2026 (42,937 prompt-days → 13.7% URL / 18.7% domain; AIO 6.31 vs AI Mode 10.79 URLs/answer); SE Ranking ~10.7% URL / ~16% domain; Victorious 1,540 queries (77% single-surface domains, 0 exact matches); **BrightEdge AI Catalyst Apr 2026 — top-100 domain overlap: AIO vs AI Mode ≈59% = HIGHEST pair**; Gemini vs AIO 34%, Gemini vs AI Mode 27%, Gemini vs ChatGPT 39%; brand overlap 36–55%.
- Source-type profiles: MR Research Jul 2026 ratios (AI Mode-leaning: G2 1.81, Grand View 1.90, MarketsandMarkets 1.63, Mordor 1.60; AIO-leaning: PR Newswire 0.67, Deloitte 0.71; Crunchbase 0.59 outlier).
- Reach & CTR: I/O May 2026 "seamless experience" (UI merge, AI Mode default for more queries); adamarant ~2.5B (AIO) vs ~1B (AI Mode) users; Seer Interactive (3,119 queries/42 clients/25.1M impressions, Jun 2024–Sep 2025): organic CTR 1.76%→0.61% when AIO present (−61%); BrightEdge 16-month (via MR): AIO/organic overlap 32.3%→54.5%, 45.5% citations outside organic top-10.
- Cross-engine context (do not confuse units): Search Atlas 5.5M responses → 35–40% zero-shared-domain queries; Gemini–ChatGPT 42% overlap; QuickSEO 62% brand disagreement; BuzzStream 595 prompts → 37.4% Jaccard; Semrush 58% corpus-level URL figure is a different unit (deliberately not quoted as an overlap headline).
- Competitors: Ahrefs blog, SEJ, SEOAuthori, ApiSerpent, MR Research, Link Building Journal, adamarant, outpaceseo, finseo, agencydashboard, BrightEdge. Gap: nobody reconciles per-query overlap (14%) with top-100 aggregates (59%) or pairs source-type profiles with a dual-surface allocation.

### Gaps & differentiation
- Gap: single-headline pieces reporting "13.7%" or "86% similar" in isolation; no reconciliation of units; no per-surface source-type allocation guidance.
- Original contribution: "two engines wearing one coat" — the measurement-units reconciliation (per-query URL vs top-100 domain); divergence mechanism (query fan-out, passage-level scoring, citation-gap asymmetry); source-preference/source-type table per surface; 61% brand carry + 77% single-surface domains; dual-surface playbook (passage depth for AI Mode, video/community/press for AIO, entity/reference depth for both, separate 'diverged' tracking, revenue-not-clicks); volatility honesty (~45% AIO citation churn; labelled units; quarterly re-baseline).

### QA & validation
- Passed: lint (MDX ignored by config, 0 errors), tsc, build (21 routes), rendered smoke (200 / 1×h1 / BlogPosting / FAQPage 5 questions / canonical https://promptco.online/resources/research/ai-mode-vs-ai-overviews-2026 / sitemap ref / index ref / og:type article). Verified exactly one BlogPosting + one FAQPage ld+json block.
- Pending: Phase 25 report delivered in-task; commit+push hash recorded above.

---

## 014 — The "Near Me" Answer Economy: AI Local Search in 2026 (Article #14)

- Status: **written + committed + pushed**
- Commit: e1af87a
- URL: https://promptco.online/resources/research/local-near-me-ai-citations-2026
- Brief: docs/content-briefs/014-local-near-me-ai-citations-2026.md

### Targeting
- Primary query: "local AI search 2026" / "AI Overviews local SEO" / "chatGPT recommend local business" / "'near me' AI citations"
- Intent: informational + practitioner decision (local SEOs, multi-location brands); commercial. Spoke of hub 005; distinct from #13 (Google surfaces), #12 (community), F1 (per-engine divergence). Scope: local-service intent, citation evidence, the visibility gap, the window.

### Research (fresh 2026)
- Anchor — SearchAtlas Jan 17 2026: 104,855 URL citations, 6 platforms, Oct 27–Dec 3 2025; 35,385 unique domains (2,878 DA), 14,300 merged with GBP. DA/DR/Domain Power NEGATIVELY correlated with LLM rank (OpenAI/Grok/AI Mode strongest; Perplexity weaker; overall decoupled); GBP composite score strongest +0.16 (small), replied reviews +0.11, review count +0.10, rating +0.06, posts −0.01, citation count +0.03, heatmap rank negative; range −0.01…+0.16; semantic relevance strongest (OpenAI/Grok/AI Mode 0.18–0.19, Perplexity 0.10, Copilot 0.04); freshness Gemini 0.13 / OpenAI 0.09 / Perplexity 0.02 / Copilot−Grok−AI Mode negative; Perplexity homepage-heavy; Copilot/AI Mode balanced.
- Anchor — Steady Demand AI Citation Ledger (Ben Fisher, updated Sep 9 2026): 1,500 queries, 50 metros, 10 categories, 10,229 citations. Own-site Gemini 49.6% (Jul 58.8%) > all directories/forums/reviews combined (margin 22 pts → ~7 pts); recommended businesses 91% at 4.5+ stars; Reddit reversal 13.7%→1.7% Gemini / ChatGPT earlier (~5 wks); directories absorbed (19.1%); pack repeat 83.3% vs Gemini 5.1%; Gemini vs ChatGPT domain overlap 8.3%, same top business 4.9%; ChatGPT own-site 10.5% / directories 46.0% vs Gemini 17.7%; 3,738 businesses / 2,474 domains / 1.8% multi-metro (Terminix/Orkin nationals); long-tail individual businesses.
- Prevalence — Whitespark 2026 via SEJ (Heitzman Jul 22 2026): AIO 68% vs pack 39%; informational 92%; hybrid 97%; simple transactional ~15% (packs >90%); vertical variance; price/cost trigger >80%.
- Consumers — BrightLocal 2026 (n=1,002): 45% use genAI local (7.5x YoY); 74% seek <3-month reviews; 47% won't use <20 reviews; 31% only 4.5+; 80% fully-answered; 19% expect same-day reply (up from 6%). Whitespark panel: review signals 16–20% classical ranking.
- Gap — SOCi 2026 Local Visibility Index via Angarum Jul 15 2026: ChatGPT 1.2% / Perplexity 7.4% / 3-pack 35.9%; ChatGPT ~883M MAU; AIO ~55% overall / ~78% local+restaurant; schema+FAQs +44% (correlational); 70% expect AEO / ~20% started.
- Off-page split — Omniscient Digital (23,000+): owned content ~23%, off-page ~77%. Kevin Indig (1.2M): 44.2% citations in first 30% of page; entity-rich passages. Ahrefs 17M: AI-cited content 25.7% fresher. DeepDiveAudits May 2026 (47 audits): 88% fail ≥4/6 signals; retest 6/9 full-fix → 6–9 weeks. Ahrefs null: 1,885 pages + JSON-LD → no 30-day citation change. PromptQuorum 25k queries: #1 → AIO inclusion ~25%; near-zero outside top-10. GatherUp: 67% don't fact-check AI.
- Competitors: SEJ, Whitespark, BrightLocal, SOCi, Angarum, Steady Demand, SearchAtlas, DeepDiveAudits, Elev8, Search Engine Land (van Luijtelaar). Gap: prevalence roundups vs authority correlations vs vendor audits; nobody synthesizes 1.2%-vs-35.9% gap + two-source-system economics + semantic-relevance-not-authority + 12–18 month window into one operator decision framework.

### Gaps & differentiation
- Gap: pieces split into (a) prevalence-stat roundups, (b) authority-correlation math, (c) vendor audits, (d) agency ledgers — no synthesis owns the visibility gap + the two-source-system + the operator decision.
- Original contribution: "AI recommends 1.2%" visibility gap frame; the two-source-system (Gemini own-site 49.6% vs ChatGPT directories 46% — engines read different parts of local web); "map rank is a proxy, not a mechanism" (DA negative, heatmap negative, GBP modest); volatility honesty (Reddit reversal, pack vs AI instability 83.3% vs 5.1%); schema null (Ahrefs) + correlational +44% reconciliation; operator playbook (answer-first pages, original local data, NAP/entity consistency, review cadence, cost guides, directory floor); 12–18 month labeled window.

### QA & validation
- Passed: lint (MDX ignored by config, 0 errors), tsc, build (22 routes), rendered smoke (200 / 1×h1 / BlogPosting / FAQPage 5 / canonical / sitemap ref / index ref). Verified exactly one BlogPosting + one FAQPage ld+json block.
- Pending: Phase 25 report delivered in-task; commit+push hash recorded above.

---

## 015 — The Three-Layer Protocol Stack: Agent-Ready Content for MCP, A2A, and WebMCP (Article #15)

- Status: **written + committed + pushed**
- Commit: be6a7c8
- URL: https://promptco.online/resources/research/agent-ready-content-2026-mcp-a2a
- Brief: docs/content-briefs/015-agent-ready-content-2026-mcp-a2a.md

### Targeting
- Primary query: "agent-ready content" / "MCP for content teams" / "AI agent content optimization" / "A2A content strategy"
- Intent: informational + practitioner decision (B2B content/editorial, product marketing, SEO). Spoke of hub 005; complementary to #2 (crawlers), #13 (engine surfaces), measurement buyer's guide. Scope: the protocol stack as a content-editorial problem, not a developer one.

### Research (fresh 2026)
- MCP — settled tool layer: Anthropic Nov 2024 → Linux Foundation AAIF Dec 2025; ~190 members by May 2026; SDK downloads: npm 38.5M→156M monthly (Jul 2026), PyPI ~271M mcp + ~93M fastmcp; combined ~427M core alone (AgentsCamp Jul 1 2026). Servers: Smithery 6,652 / PulseMCP 20,120 / mcp.so ~23,000; ~10,000 active; 47 enterprise orgs production; 5 major clients native. Protocol revision Jul 2026: stateless, session removed, multi-round-trip; OAuth 2.1 mandatory but 8.5% implement; 53% hard-coded credentials. Stacklok Dec 2025: 41–45% software-industry production use (300 leaders); "78% enterprise" claim walked back. Toolradar Aug 2026: 228 tools (114x); Q3 132 new; 85% free tier. ArXiv 177,436 tools (Nov 2024–Feb 2026): software dev 67%/90%; action tools 27%→65%; AI-assisted 28%→62% new servers. VibeDNA: <5% monetized; Python 38.5%/TypeScript 27.3%.
- A2A — horizontal layer: Google Apr 2025 → Linux Foundation Jun 2025; v1.0 Mar 2026, v1.2 Apr 2026 (signed Agent Cards); 150+ orgs production (Azure AI Foundry, Amazon Bedrock, Salesforce, SAP, ServiceNow); 22,000+ GitHub stars; 5 SDKs; native in ADK/LangGraph/CrewAI/LlamaIndex/Semantic Kernel/AutoGen; IBM ACP merged Aug 2025. Agent Card at /.well-known/agent-card.json; JSON-RPC 2.0; OAuth 2.0; gRPC. Production: supply chain, financial services, insurance, IT ops. Complements MCP (vertical vs horizontal).
- WebMCP — browser layer (preview): Chrome Canary preview Feb 2026 (Google + Microsoft, W3C Web ML CG); declarative API (page elements as tools) + imperative JS (`navigator.modelContext`); "sites as MCP servers by consent not scraping"; Cloudflare partial; also Markdown for Agents (Feb 12 2026); Lighthouse 13.3.0 agentic-browsing audit May 7 2026; not production.
- Content implications: 62% MCP deployments connect to knowledge bases (directional); Indig 44.2% citations in first 30% of page; Ahrefs 25.7% freshness premium; open access beats gated; Presenc AI: brands without agent-facing surface invisible in MCP journeys; schema null (Ahrefs) + correlational +44% reconciliation; Sunwest 95%+ AIO URLs updated <3 months; AGENTS.md 60,000+ repos.
- Stack framing: IngestThis Jul 6 2026 (architecture not sprawl; MCP settled, A2A 1.0, WebMCP preview); o-mega Aug 1 2026 (MCP only first; A2A only across trust boundary); Pondero Jul 15 2026 (MCP/A2A/WebMCP compose not compete).
- Competitors: MCP Institute, AgentsCamp, Presenc AI, IngestThis, NeuralCoreTech, Pondero, o-mega, Koenig, VibeDNA, Toolradar, Google DevBlog, arXiv. Gap: every piece developer-facing; no B2B content-editorial translation of the protocol stack.

### Gaps & differentiation
- Gap: protocol articles are for engineers; nobody translates the three-layer stack into what content teams write differently, or frames "agent-ready" as the structural minimum for both humans and machines, with protocol-layer status clearly marked.
- Original contribution: "your content already lives in a three-layer protocol stack" framing; MCP/A2A/WebMCP content-side translation per layer; brand-visibility gap (Presenc); "build for settled layers, track preview"; schema-hygiene/honesty (Ahrefs null); publication cadence > date-stamp; Agent Card equivalent as editorial concept; editorial playbook table with protocol layer marked per row.

### QA & validation
- Passed: lint (MDX ignored by config, 0 errors), tsc, build (23 routes), rendered smoke (200 / 1×h1 / BlogPosting / FAQPage 5 / canonical / sitemap ref / index ref). Verified exactly one BlogPosting + one FAQPage ld+json block. Fixed raw `<3` and `or or` MDX-parse errors before build.
- Pending: Phase 25 report delivered in-task; commit+push hash recorded above.

---

## 016 — Five Engines, Five Rules: The 2026 Per-Engine Citation Divergence Matrix

Status: published.
Score: 9.3.
URL: https://promptco.online/resources/research/per-engine-citation-divergence-2026
Brief: docs/content-briefs/f1-per-engine-citation-divergence-2026.md
Commit: d62aedb
Pushed: d62aedb

### Targeting
- Primary query: "per-engine citation differences" / "ChatGPT vs Perplexity vs Gemini citations" / "AI search engine source comparison 2026" / "which sources does each AI engine cite"
- Intent: informational + practitioner decision (B2B content/SEO/GEO strategists, agency leads). Flagship of hub 005; differentiates from #13 (Google surfaces only) by covering all five engines. Crown-jewel evidence piece of the series.

### Research (fresh 2026)
- MR Research (May 24 2026): 11,500 queries; Vu et al. arXiv:2601.16858. GPT-4o 0.0% Google top-10 overlap; Perplexity 14.3%; Gemini 8.5%. ChatGPT Bing-dependent when browsing; Perplexity own crawler; Gemini Google grounding. AuthorityTech 366K citations across 12 models.
- AI Search Index / cloro (Jul 6 2026 State + Jul 16 Edition 01): Fixed 735-query basket, 5 engines. Citation presence: AI Mode 100%, Perplexity 100%, Copilot 98.6%, ChatGPT 98.4%, Gemini 32.9%. Sources/answer: AI Mode 19.5, ChatGPT 13.3, Perplexity 10.6, Copilot 5.1, Gemini 4.4. Compression Q2→Q3: ChatGPT 21→12, AI Mode 21→10. Top domains: YouTube 2,598, Reddit 771, Google 695. Perplexity citation memory 67% vs ChatGPT/Gemini 34%.
- MERIIN (Jun 14 2026): 25 questions × 3 engines; 559 citations → 322 domains. 72% single-engine; 4% all-three. Volume 2.4× range (ChatGPT 4.24, Perplexity 7.80, Gemini 10.32).
- SlateHQ (Aug 27 2026): 1,000 questions × 4 engines; 31,128 citations. Links/answer: Perplexity 19.08, Claude 12.49, AIO 9.42, ChatGPT 3.10, Gemini 0.07. ChatGPT-Perplexity page overlap 0.9%. 74.1% not in Google top-10. Reddit: Perplexity 1,051×, ChatGPT/Claude 0. 88.7% single-engine.
- GetMentioned (Apr 22 2026): 412,000 citations, 26,000+ domains. 474 all-three (<2%). ChatGPT ~19K unique; Gemini ~1,500 unique. Gemini "listicle engine" 36.77%. 64% of Gemini top-100 absent from other models' top-500.
- Conductor (May 7 2026): 7 engines, Sep 2025–Mar 2026, 1,056 data points. Per-engine editorial identities: ChatGPT Search encyclopedic; Perplexity video-anchored; AIO video-biased; AI Mode exploratory/Google properties; Gemini YouTube every intent; Claude institutional.
- MR Index v2 (Aug 4 2026): 10,661 runs, 17,266 domains, 82 days. Reddit 12.6% (4 engines only); domain authority r²=0.05.
- CiteMetrix (May 18 2026) + Resocial (May 11 2026): Per-engine source shares; Wikipedia 32% weighted; Reddit 21%; tier-1 14%; brand 11%.

### Gaps & differentiation
- Gap: every competitor publishes one engine or two-engine comparison. Nobody assembles: (a) citation presence rates, (b) citations per answer, (c) per-engine source-type preference, (d) cross-engine overlap from multiple independent studies, (e) brand-vs-source overlap paradox (35-42% vs <1%), (f) longitudinal editorial identity.
- Original contribution: convergence paradox (agree on brands, disagree on pages); per-engine signature map with five-column evidence table; citation compression trend; Gemini paradox (83.7% mention, 21.4% link); multi-engine investment matrix; "optimize for AI search" obituary backed by convergent evidence from 5+ independent studies.

### QA & validation
- Passed: lint (0 errors), tsc, build (24 routes), rendered smoke (200 / 1×h1 / BlogPosting 2 / FAQPage 5 / canonical / sitemap ref / index ref). Verified exactly 2 ld+json blocks. Fixed `<2` MDX-parse error before build.

---

## 017 — The Answer Economy: How AI Chatbots Rewired the B2B Shortlist in 2026

Status: published.
Score: 9.0.
URL: https://promptco.online/resources/research/answer-economy-b2b-ai-shortlist-2026
Brief: docs/content-briefs/f2-answer-economy-b2b-ai-shortlist-2026.md
Commit: b344823
Pushed: b344823

### Targeting
- Primary query: "B2B buyers AI chatbot research" / "AI shortlist vendor selection" / "answer economy B2B" / "how buyers use AI to choose software"
- Intent: informational + commercial decision (B2B marketing leaders, CMOs, sales enablement, GTM strategy). Flagship bridge from research to agency offer; pairs with F1 (supply side) and #9 earned media (execution).

### Research (fresh 2026)
- G2 Answer Economy Report (Apr 15 2026): 1,076 B2B buyers, Mar 2026. 51% AI-first start (up from 29%); 71% rely on AI chatbots; 53% say AI more productive; AI = #1 shortlist influencer; 69% vendor switch; 33% bought from unknown; 85% AI-mention lift; 80% accelerated decision; 45% review citations #1 trust; 64% encounter inaccuracies; comparing vendors #1 use case (41%); ChatGPT 63%.
- G2 Buyer Behavior Report (Jul 22 2026): 1,000+ buyers, 50+ interviews. Review sites 38% surpassed AI chatbots 37%; 61% use/plan AI agents; IT security 39% delay; finance 31%→46%; evaluation longest stage for 40%.
- Kevin Indig/G2 (Jun 26 2026): G2 22.4% influence; 30,000 citations; 10% more reviews → 2% more AI citations.
- Semrush (Jul 8 2026): 622 professionals; 92% AI-shaped shortlist; 83% AI-influenced decision.
- Forrester 2026: 89% adoption; 13 stakeholders + 9 influencers.
- 6sense 2025: pre-contact favorite wins 80%; shortlist 3.2→2.5.
- AI-referred traffic 14.2% vs 2.8% Google organic (5.1x).
- 70-80% buyer journey untracked (Similarweb dark funnel).

### Gaps & differentiation
- Gap: G2 report gets press releases; nobody builds operational playbook translating "reference to inference" into what content teams, review programs, and GTM strategy do in practice.
- Original contribution: "third compression" thesis (Sanders); two-step pattern (AI sets shortlist, reviews validate); attribution blind spot (70-80% untracked); review-AI flywheel; shrinking shortlist; conversion gap pre-traffic.

### QA & validation
- Passed: lint (0 errors), tsc, build (25 routes), rendered smoke (200 / 1×h1 / BlogPosting 2 / FAQPage 5 / canonical / sitemap ref / index ref). Verified exactly 2 ld+json blocks.

---

## 018 — YouTube Is a Text Asset: How AI Reads and Cites Your Videos in 2026

Status: published.
Score: 7.5.
URL: https://promptco.online/resources/research/youtube-ai-citations-video-search-2026
Brief: docs/content-briefs/18-youtube-ai-citations-video-search-2026.md
Commit: 0b2d4a4
Pushed: 0b2d4a4

### Targeting
- Primary query: "YouTube AI citations" / "optimize YouTube for AI search" / "video GEO"
- Intent: informational (content marketers, video producers, SEO/GEO practitioners). Spoke of hub 005.

### Research (fresh 2026)
- OtterlyAI (Mar 2 2026): 100M+ citations, 30 days, 6 platforms. YouTube 31.8% social citations; 94% long-form; Perplexity 38.7%, AI Overviews 36.6%, AI Mode 19.6%, ChatGPT 4.4%; popularity r=-0.03; timestamps Google-only; 78% multi-citation.
- Indexly (May 15 2026): 3M+ URLs, 95K prompts, 5 engines. 22,781 YT citations; 7,083 unique videos; Perplexity 3.75%, ChatGPT 0.003%.
- Similarweb (Jul 13 2026): YT SEO vs GEO; description r=0.31; Ask YouTube launch May 2026.
- Rankshift/BrightonSEO (May 4 2026): 1.7M citations; TRYSEO case study 64% share of voice.
- Goodie AI (Aug 2026): YT share 18.9%→39.2% (Aug-Dec 2025).

### Gaps & differentiation
- Gap: every competitor publishes tactical "optimize YouTube for AI" lists. Nobody centers the core insight: video is a text asset; popularity is irrelevant (r=-0.03).
- Original contribution: "YouTube is a text asset" reframe; engine-specific targeting map; timestamp multiplier (Google-only); long tail (7,083 unique videos, top 50=14%); YouTube GEO vs SEO distinction.

### QA & validation
- Passed: lint (0 errors), tsc, build (26 routes), rendered smoke (200 / 1×h1 / BlogPosting 2 / FAQPage 5 / canonical / sitemap ref). Verified exactly 2 ld+json blocks.

---

## 019 — Query Language Selects the Market: The Multilingual AI Search Playbook for 2026

Status: published.
Score: 7.3.
URL: https://promptco.online/resources/research/multilingual-ai-search-international-geo-2026
Brief: docs/content-briefs/19-multilingual-ai-search-international-geo-2026.md
Commit: 05a3043
Pushed: 05a3043

### Targeting
- Primary query: "multilingual AI search" / "international GEO" / "AI search language bias" / "ChatGPT English bias"
- Intent: informational (international marketing leads, global SEO teams, localization managers). Spoke of hub 005.

### Research (fresh 2026)
- arXiv 2608.30052 (Żatuchin, Aug 30 2026): 234 runs, ChatGPT web + API, 4 countries × 6 languages. Language (not location) gates local suppliers; Turkish from Berlin → German suppliers in Turkish; Russian from Tallinn → Estonian suppliers in Russian; minority language = middle tier; top recommendation unstable across identical runs (4/6 prompts); instability identical browser + API; nationally regulated category = no language effect.
- MaxAEO (Jul 24 2026): 4,000 AI answers, 12 B2B SaaS. English 38.2% mention; Spanish 24.1% (-37%); French 20.9% (-45%); German 17.3% (-55%); Japanese 9.4% (-75%). Prompt language 16× more impact than location. Natively written 2.3× MT mirrors. Brand C: 6%→27% German in 9 weeks.
- Search Engine Land / Serraris (Aug 5 2026): ChatGPT fetches English 65-79% (2.6× over-indexing); Copilot 1.07 neutral; Google AI 0.79. Bias at answer-time (ChatGPT-User), not training (GPTBot). /en/ folder → 122% ChatGPT uplift.
- Geodocs.dev (Apr 29 2026): ChatGPT English-heavy; Perplexity in-language where corpora strong; Gemini most bidirectional; Claude host-dependent. CJK Perplexity/Gemini strongest local.
- Weglot (May 21 2026): 1.3M citations; translated sites 327% more AI Overviews visibility; English-only → 80% citation drop for Japanese.
- Profound (Mar 2026): 3.25B citations, 7 models, 14 countries; Spanish TikTok ×5; Portuguese YouTube 65%; Arabic Instagram 29%.
- Global Spanish / Search Engine Land (Mar 30 2026): models collapse Spanish markets; Peninsular best identified; hreflang less influential in AI synthesis.

### Gaps & differentiation
- Gap: every competitor runs "translate your site for AI" listicles. Nobody centers the controlled-evidence core: query language selects the market; location only picks which market's suppliers.
- Original contribution: "query language selects the market" thesis (controlled 234-run proof); three-tier citation system (official → minority → English); instability-as-system-property (40-trial measurement baseline); ChatGPT English gravity (2.6× answer-time bias); translation retrievable vs native cited (2.3×).

### QA & validation
- Passed: lint (0 errors), tsc, build (27 routes), rendered smoke (200 / 1×h1 / BlogPosting 2 / FAQPage 5 / canonical / sitemap ref / index ref). Verified exactly 2 ld+json blocks.

---

## 020 — How Zero-Click Search Changed the Economics of SEO in 2026

Status: published.
Score: 8.0.
URL: https://promptco.online/resources/research/zero-click-search-ai-overview-economics-2026
Brief: docs/content-briefs/20-zero-click-search-ai-overview-economics-2026.md
Commit: 5b1bee8
Pushed: 5b1bee8

### Targeting
- Primary query: "zero-click search 2026" / "AI Overviews reduce clicks" / "zero-click marketing" / "AI Mode traffic measurement"
- Intent: informational (CMOs, SEO leads, content strategists). Complement to #13 (AI Mode vs AI Overviews). Spoke of hub 005.

### Research (fresh 2026)
- SparkToro / Fishkin (Jun 8 2026, Similarweb panel): 68.01% US zero-click Jan–Apr 2026 (vs 60.45% 2024); AIO on 20%+ of searches cuts CTR ~60%; Clicks 1X+ −9.51pp (−22.9%); AI Mode 0.34%; 232 open-web clicks / 1,000 searches.
- Pew panel (Mar 2025, cited 2026): 8% click with AI summary vs 15% without (~47%); citation clicks 1%; 26% sessions end after AIO page vs 16%.
- Ahrefs (Dec 2025): position-one CTR on AIO keywords 0.073→0.016; counterfactual-adjusted 58% reduction (up from 34.5% Apr 2025).
- Seer Interactive (Jun 2024–Feb 2026): AIO-keyword organic CTR 1.76%→0.61% (−65%); cited brands +120% organic clicks/impression (Apr 2026).
- Agarwal & Sen (SSRN Apr 2026): randomized field experiment, 1,065 participants; AIO → organic clicks −38%; zero-click 54%→72%.
- Google I/O 2026: AI Mode >1B monthly users; queries >2×/quarter. ~93% AI Mode zero-click (Semrush avg 4.3 queries/session). LeafWorldMedia: ranking-vs-citation overlap 75%→17-38%.
- Mintec (Aug 8 2026): AI Mode follow-up queries in regular GSC performance report; generative AI report shows only aggregated impressions; "yes, pricing" tell.
- Google May 6 2026 five AIO/AI Mode updates (inline links, hover previews, Subscribed label, Explore new angles) — attribution tweaks, not traffic recovery.
- Cite Solutions (Jul 25 2026): AIO-query zero-click ~83%; citation half-life ~4.5 weeks; AI search traffic converts ~4× better.

### Gaps & differentiation
- Gap: vendors publish either "SEO is dead" panic or "AI Overviews are fine" apologetics. Nobody triangulates the click-suppression claim across three methods side by side, or splits success into two scoreboards.
- Original contribution: two-scoreboard thesis (clicks vs citations measure different wins); triangulated AIO click claim (Pew panel + Ahrefs counterfactual + randomized field); cited-brands +120% clicks (citation amplifies clicks for the cited); three-zone zero-click portfolio (click/hybrid/citation); AI Mode follow-up-query measurement blind spot; 4.5-week citation half-life lever.

### QA & validation
- Passed: lint (0 errors), tsc, build (28 routes), rendered smoke (200 / 1×h1 / BlogPosting 2 / FAQPage 5 / canonical / sitemap ref / index ref). Verified exactly 2 ld+json blocks.

---

## 021 — Which Content Formats Earn AI Citations in 2026

Status: published.
Score: 7.9.
URL: https://promptco.online/resources/research/content-formats-ai-citations-listicles-2026
Brief: docs/content-briefs/21-content-formats-ai-citations-listicles-2026.md
Commit: TBD
Pushed: TBD

### Targeting
- Primary query: "content formats AI citations" / "listicle AI search" / "best content type for ChatGPT" / "format AI SERPs"
- Intent: informational (content strategists, editorial teams, SEO/GEO practitioners). Spoke of hub 005. Reclaims "formats/listicles" wedge.

### Research (fresh 2026)
- Wix AI Search Lab + HubSpot State of AEO 2026 (1M+ citations, 75k answers): listicles 21.9% / articles 16.7% / product pages 13.7% of all citations; commercial listicle share 40.86%; ChatGPT comparison 95%; Gemini blog 76%; AIO blog 42%; Perplexity product 84%; title patterns by engine.
- Evertune (Mar–Apr 2026, ~400M occurrences, ~25k URLs, 6 engines): 63% of citations → listicles; ranked Top-N 71–86% of listicles; cited pages 1,000–2,000 words (Copilot ~964, Gemini ~1,977); ChatGPT median ~941 words, 4 H2s, 15 links, 10 images.
- Presenc AI (Jun 2026, 2,400+ brands): comparison 33% / data 30% / definition 27% (39 avg words — best per-effort) / how-to 24% / listicle 19% median; listicle 23% ChatGPT vs 15% Perplexity; scannable 1.5× prose.
- AirOps (Jun 5 2026): 44% citations from top 30%; stats +41%; schema 3.2×; sequential headings 2.8×; third-party listicles 80.9% vs self-promo 19.1%; only 38% AIO citations from top-10 (Digital Applied, 863k SERPs); 11% domains shared ChatGPT×Perplexity; 90-day refresh 1.6×.
- Peec (Dec 2025–Feb 2026): self-promotional listicles ~11% of citations; ChatGPT 3.6–4%; AI Mode/Perplexity 10–11%.
- Ahrefs: only 12% of ChatGPT/Gemini/Copilot citations in Google top-10 (15k prompts).
- Princeton/Georgia Tech (KDD 2024): named quotes +40.9%; sourced stats +30.6%; inline citations +27.5%; keyword stuffing −8.3%.

### Gaps & differentiation
- Gap: competitors publish "lists win" cheerleading or "listicles are dying" scares. Nobody separates ranked vs self-promotional, or derives the format-to-intent matrix from both million-citation datasets side by side.
- Original contribution: "ranked ≠ self-promotional" (third-party 80.9%, ChatGPT self-promo collapse 3.6%); format-to-intent matrix across six engines; the 1,000–2,000-word anti-pillar-page frame; structure-beats-prose (1.5×, 44% top-30%); definition-page per-word economics (27% from 39 words); rankings-don't-proxy-citations (12% / 38%).

### QA & validation
- Passed: lint (0 errors), tsc, build (29 routes), rendered smoke (200 / 1×h1 / BlogPosting 2 / FAQPage 5 / canonical / sitemap ref / index ref). Verified exactly 2 ld+json blocks.

---

(End of file)