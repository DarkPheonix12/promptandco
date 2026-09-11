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

## 005 — Planned: The 11 Levers of AI Citation (Article #5)

- Status: **planned** (in progress)
- Working slug: `ai-citation-levers-2026`
- Working title: "The 11 Levers of AI Citation: What Actually Controls Whether AI Assists Cite You"
- Ur: hub guide for the cluster; consolidates Articles 1–4 into one decision document for brands.
- Research phase: fresh web research in progress (2026-09-11).

---