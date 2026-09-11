# Brief 014 — The "Near Me" Answer Economy: AI Local Search in 2026

Status: researched → brief. Companion to article #14. Private working document (no secrets).

## Working title
The "Near Me" Answer Economy: Why AI Recommends Only 1.2% of Local Businesses — and What Actually Gets Cited

## Slug
`local-near-me-ai-citations-2026`

## Targeting
- Primary query: "local AI search 2026" / "AI Overviews local SEO" / "chatGPT recommend local business" / "'near me' AI citations"
- Primary intent: informational + practitioner decision (local SEOs, multi-location brands); commercial. Spoke of hub 005; distinct from #13 (Google surfaces), #12 (community), F1 (per-engine divergence). Scope: local-service intent, the citation evidence, the visibility gap, and the window.
- Supporting queries: "how do LLMs rank local businesses", "AI Overviews 68% local searches", "do AI engines replace local pack", "1.2% local visibility gap", "Gemini vs ChatGPT local citations"
- Funnel: awareness → consideration

## Evidence base (re-verified, 2026-dated)
- **Anchor — SearchAtlas, Jan 17 2026, "How LLMs Rank Local Businesses: An Empirical Study of 'Near Me' Query Citations"**: 104,855 URL citations, 6 platforms (OpenAI, Gemini, Perplexity, Grok, Google AI Mode, Copilot), Oct 27–Dec 3 2025, broad brand-intent "near me" queries; 35,385 unique domains (2,878 with DA), 14,300 merged with GBP data. Findings: DA/DR/Domain Power NEGATIVELY correlated with citation rank (OpenAI/Grok/AI Mode strongest negative; Perplexity weaker; overall decoupled from classical authority); GBP composite score strongest +0.16 (small), replied reviews +0.11, review count +0.10, rating +0.06, posts −0.01, citation count +0.03, heatmap rank negative — range −0.01…+0.16, all small; semantic relevance strongest & most consistent (OpenAI/Grok/AI Mode 0.18–0.19, Perplexity 0.10, Copilot 0.04); freshness Gemini 0.13 / OpenAI 0.09 / Perplexity 0.02 / Copilot−Grok−AI Mode negative (evergreen); Perplexity higher homepage-citation share; Copilot & AI Mode balanced home/non-home.
- **Anchor — Steady Demand AI Citation Ledger (Ben Fisher, updated Sep 9 2026)**: 1,500 "best plumber near me"-style, 50 US metros, 10 categories, 10,229 citations. Own-site = ~50% of Gemini citations (Jul 58.8% → Sep 49.6%), still > all directories/forums/reviews combined but margin 22 pts → ~7 pts; recommended businesses 91% at 4.5+ stars; Reddit reversal (Jul 13.7% outcited entire directory category → 5 wks later Gemini 1.7%, directories 19.1%; ChatGPT same ~5 wks earlier; no announcement); AI-vs-search instability (pack repeats top listing 83.3% vs Gemini 5.1%); Gemini vs ChatGPT citation-domain overlap 8.3%, same top business 4.9%; ChatGPT own-site 10.5% vs Gemini 49.6%, ChatGPT directories 46.0% vs Gemini 17.7%; 3,738 unique businesses named, only 1.8% in >1 metro (nationals Terminix/Orkin); 2,474 unique domains, long-tail individual businesses; national floor Angi/HomeAdvisor/BBB/ConsumerAffairs in all 50 metros; directives: claim directories (Angi, HomeAdvisor, Expertise, Birdeye, BBB, Thumbtack), don't build on community now, on-site fundamentals still cited most.
- **Prevalence — Whitespark 2026 via SEJ (Adam Heitzman, Jul 22 2026)**: AI Overviews 68% of local searches vs 39% local pack (29-pt gap); informational local 92%; hybrid-intent (cost of dental implants phoenix) 97%; simple transactional ~15% (packs >90%); vertical variance (legal everywhere, home services variable, restaurants/retail lean packs).
- **Consumers — BrightLocal 2026 (n=1,002)**: 45% use genAI for local recommendations (7.5x vs 6% prior year); 74% seek reviews written last 3 months; 47% won't use <20 reviews; 31% only 4.5+; 80% more likely with fully-answered reviews; 19% expect same-day reply (up from 6%). Whitespark panel: review signals 16–20% of classical local ranking.
- **Gap — SOCi 2026 Local Visibility Index via Angarum (Jul 15 2026)**: AI recommends ~1.2% of locations on ChatGPT, 7.4% Perplexity, vs 35.9% in local 3-pack → "the gap is the opportunity"; ChatGPT ~883M MAU; AIO ~55% searches / ~78% local+restaurant queries; pages with schema+FAQs ≈44% more AI citations; 70% orgs expect AEO to shape strategy, ~20% started.
- **Off-page split — Omniscient Digital via SEJ**: 23,000+ citations → owned content ~23% of branded-query citations, 77% off-page. **Kevin Indig** (1.2M ChatGPT responses): 44.2% of citations from first 30% of page; cited passages skew definitive/entity-rich. **Ahrefs 17M citations**: AI-cited content 25.7% fresher. **Price/cost/buy queries trigger AIO >80%** (SEJ). **GatherUp**: 67% don't fact-check AI; 98% consult reviews.
- **Mechanism — DeepDiveAudits 6-Signal Audit (May 2026, 47 audits GTA)**: 88% fail ≥4 of 6; schema 81%, original data 96%, E-E-A-T author 94%, Speakable+lead 91%, entity density 73%, internal-link 47%; retest 6/9 full-implementation → AIO citation in 6–9 weeks; AIO = retrieval/composition layer on same index (not separate ranking system); click path AIO → pack → blue links.
- **Schema caveat — Ahrefs (via Elev8, Jul 25 2026)**: 1,885 pages adding JSON-LD Aug 2025–Mar 2026 → no measurable 30-day citation change (AIO/AI Mode/ChatGPT); five engines extract visible HTML only. Reconcile with Angarum's "schema+FAQs +44%" as correlational, panel-vs-experiment.
- **Inclusion — PromptQuorum/25,000 real queries**: #1 traditional rank → AIO-included ~25% of time; near-zero outside top-10. Local retrieval is a stricter filter on the same index; top-10 is a proxy, not sufficient.

## Competitor analysis (Phase 4) & gap
Competitors: SEJ (Heitzman), Whitespark, BrightLocal, SOCi, Angarum, Steady Demand, SearchAtlas, DeepDiveAudits, Elev8, Search Engine Land guide (van Luijtelaar).
- Gap: pieces split into (a) prevalence-stat roundups (Whitespark 68%), (b) authority-correlation math (SearchAtlas), (c) vendor audits (DeepDiveAudits), (d) single-agency ledgers (Steady Demand). Nobody assembles: the 1.2%-vs-35.9% visibility gap + the source-category economics (own-site vs directories, per engine) + "semantic relevance not authority" + the 12–18-month window into one operator decision framework. The Gemini-vs-ChatGPT own-site/directory split is the under-covered engine difference.

## Original angle / contribution
1. The opening frame: "AI recommends 1.2% of local businesses" — the visibility gap as the opportunity (few competitors own this stat).
2. The two-source-system reconciliation: own-site ~50% (Gemini) vs ~10.5% (ChatGPT) — engines read different parts of the local web; directories are the only universal floor.
3. "Your map rank is a proxy, not a signal": authority/DA negative correlation + heatmap-rank negative + GBP modest; semantic relevance primary; top-10 organic correlates with AIO *inclusion* but ordering is semantic.
4. Volatility & honesty: Reddit reversal (Jul→Sep 2026), pack-vs-AI instability (83.3% vs 5.1%), engines agree on top business 4.9%.
5. The operator play: answer-first service pages + original market data + NAP/entity consistency + review reply cadence + cost/pricing guides (AIO >80%) + claim the directory floor; schema handling honestly (experiment null vs correlational 44%).
6. The window: 12–18 months; 45% consumer genAI adoption (7.5x YoY); 70% expect AEO, 20% started.

## SEO / AEO / GEO strategy
- H1: "The 'Near Me' Answer Economy…". Entities: AI Overviews, ChatGPT, Gemini, Perplexity, Google Business Profile, "near me", local pack, semantic relevance, reviews, directories.
- FAQ (5): Do AI engines recommend local businesses? / Does map rank get me into AI answers? / Website vs reviews vs GBP? / Do I still buy local citations? / Is it too early?
- Internal links: hub ai-citation-levers-2026; #12 Reddit (community layer + reversal cross-ref); #13 AI Mode vs AIO (engine-divergence companion); measurement buyer's guide; E-E-A-T.

## Phase 21 score
8.0 — local is the most measurable vertical; several unreconciled data layers offer a defensible synthesis no competitor owns.

## Writing credo checklist
One h1; exactly 5 FAQ; DefinitionCard opener; ~1700–2000 words; attribute every stat inline + Sources & notes; label correlational vs experimental evidence; no fabrication; datePublished 2026-09-11; raw `<` in tables → `&lt;`.