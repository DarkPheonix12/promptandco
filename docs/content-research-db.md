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