# Prompt&Co. — 2026 Topic & Opportunity Map

Private working document. No secrets or credentials here.
Companion to `docs/content-research-db.md` and `docs/content-briefs/`.

Status: **draft for approval** — research and prioritization stage (Phases 0–5, 19–21). Article mass-production is deliberately paused until this map is confirmed.

---

## 1) Phase 0 — Repository Audit (findings only, nothing fixed)

- **Framework:** Next.js 16.3.1 (App Router, Turbopack), React 19.2.8, MDX via `@next/mdx`; Tailwind v4. Content SSG at `/resources/research`; registry `src/content/research/index.ts`; sitemap + `/resources/research` index auto-derive from it.
- **Deployment:** Cloudflare Workers via `@opennextjs/cloudflare` (`open-next.config.ts`, `wrangler.jsonc` worker name `promptandco`). GitHub Actions auto-deploys on push to main; CI is **blocked on invalid/rotated `CLOUDFLARE_API_TOKEN` / `CLOUDFLARE_ACCOUNT_ID` secrets** (user-side, deprioritized — not blocking content). Contact API lazily inits Resend (avoided CI build failure); `NOTIFICATION_EMAIL=founder@promptco.online`, `FROM_EMAIL=noreply@promptco.online`.
- **SEO/AEO surface:** `robots.txt` allows Googlebot, Bingbot, OAI-SearchBot, anthropic-ai, ClaudeBot, PerplexityBot, Applebot-Extended; disallows `/api/` `/admin/` `_next/`. Per-article BlogPosting + FAQPage JSON-LD (sanitized `\u003c`), canonical, OG article + twitter summary_large_image, breadcrumb. Homepage carries Organization/WebSite/FAQ schema.
- **Audit flags (recorded, not fixed — fixing is gated on user approval):**
  1. `sitemap.ts` lists routes that do not exist: `/about`, `/faq`, `/case-studies`, `/reviews`, `/privacy-policy`, `/terms`, `/services/*`, `/industries/*`, `/locations/*`, `/resources/blog`, `/resources/guides`, `/resources/glossary`. Serve a site where these land (pages or 404s) to match the sitemap.
  2. Root `layout.tsx` references `/og-image.png`, which does not exist. `public/og-image.svg` exists but is unused. Fix the OG image (PNG) before promoting the homepage.
  3. Author schema = Organization (site) on every article; no per-article **Person** authorship. For a trust-signal-led brand (E-E-A-T article #8) this undercuts the "named author" evidence. Person props + author pages are a strong gap to fill.
  4. No RSS/feed — low priority.
- **Git hygiene:** branch `main`, remote `git@github.com:DarkPheonix12/promptandco.git`, clean tree after `24ecfea`. `AGENTS.md` nextjs-agent-rules block is auto-generated and re-added by `next dev`; always commit it with work.

## 2) Fresh Research Digest (Phases 1–3, deep searches, 2026-dated)

Twelve deep searches across three batches. Grouped by theme. Every claim below carries a named source for in-article attribution.

### 2.1 AI Mode vs AI Overviews — two Google surfaces, near-disjoint citing
- Ahrefs analyzed **730k** AI responses: AI Mode and AI Overviews share only **13.7% of cited URLs**; sources come from different pools. Machine Relations research (2026-07-22) independently found the same Gemini backbone cites *different* sources **86%** of the time across the two surfaces.
- Corroboration: ApiSerpent ~13.7% URL overlap; SEOAuthori + BrightEdge (~40k data points) both ~**16% word-level overlap**; OtterlyAI (~30k citations, German market) same pattern.
- Implication: optimizing for "Google AI" is no longer one target — surface-specific optimization is a distinct, unclaimed niche in practitioner content.

### 2.2 llms.txt & machine-readable discovery — largely inert, but read
- Ahrefs scanned **137,210 domains**: only **28%** publish an `llms.txt`; of those, **97% got zero requests in May 2026** (an entire month). 96% of all `llms.txt` requests are bots; **19.5%** come from named AI tools (GPTBot #1, Claude-Code #2). **Only ~12%** of publishers are the industry studying itself; no tool looks up *non-existent* files, so "missing" llms.txt causes no traffic loss.
- Attribution caveat: search result showed a 2025-11-10 publish date while the dataset references May 2026 traffic — resolve the exact study date before citing.
- Fits our #10 schema verdict: structured-adjacent files are "read but not weighted." Sibling article opportunity.

### 2.3 Agentic search — the next surface
- arXiv 2608.29063 (**Agent2UCB**): bandit-based agentic GEO system evaluated on GEO-Bench — first controlled evidence that agent-optimization changes retrieval outcomes.
- ACL Findings 2026 paper 2149: multi-agent GEO via reusable strategy learning.
- Ahrefs earlier: **Claude-Code is the largest *agent* consumer (~10.5%)** even dwarfing browser-based usage share in that cohort — agents read technical/docs pages, not landing pages.

### 2.4 Local / "near me" AI retrieval — measurable, under-covered
- SearchAtlas "How LLMs Rank Local Businesses": **104,855 URL citations** from OpenAI, Gemini, Perplexity, Grok, Copilot, AI Mode, merged with Google Business Profile signals (GBP score, heatmap rank, citation count, posts, reviews, review replies). Gives a factual basis for a *local* AI-search playbook that competitors mostly sell as guesswork.

### 2.5 Community / Reddit — the single strongest platform citation source
- Red-engage (2026-04-19): **10,000+ citations, 90 days, 4 engines**. Reddit = **46.7% of Perplexity's citations**, 21% of AI Overviews, 18% ChatGPT, 15% Gemini.
- r/SaaS, r/marketing, r/entrepreneur, r/smallbusiness, r/startups ≈ **35% of B2B/SaaS category citations**.
- Cited comments are **long-form (300–600 words), name a real experience, 50+ upvotes**. This is a cheap-to-own, evidence-backed spoke we have not covered.

### 2.6 B2B "answer economy" — buyer behavior data
- **G2 2026 AI Search Insight Report** (1,000+ B2B software buyers): **51% start research with an AI chatbot more often than Google**; **71%** rely on chatbots in software research (up from ~60% seven months prior); chatbots are **#1 source influencing the shortlist**; **69%** surfaced info that changed their vendor choice; 8/10 say chatbots accelerated the purchase.

### 2.7 Video / YouTube — the biggest social citation pool
- OtterlyAI (100M+ citation instances/30 days): YouTube = **31.8% of social/video citations**; social/video ≈ 5.54% of all. Drives come almost entirely from **Perplexity (38.7%) and AI Overviews (36.6%)**; Gemini (0.2%) and Copilot (0.5%) effectively never cite YouTube.
- **94% of YouTube citations are long-form** (not Shorts); views/likes/subscriber count correlation ≈ **−0.03** (popularity doesn't predict citation); timestamps exist only on Google surfaces (AIO 73% / AI Mode 27%); 78% of timestamped videos are cited repeatedly across 2–5 chapters.

### 2.8 Zero-click economy
- SparkToro (via Search Engine Land, 2026-06-09): **68.01% of US searches zero-click** Jan–Apr 2026 (vs 60.45% in 2024); click-bearing searches fell **−9.51pp (−22.9%)**. **AI Overviews on 20%+ of SERPs; when present, CTR drops ~58–60%**. AI Mode = only 0.34% of searches in the window.
- Ahrefs independently: "AI Overviews Reduce Clicks by 58%." High-leverage stat for CMO/board discussion.

### 2.9 Multilingual / international
- arXiv 2608.30052 ("The Language of the Question Selects the Market"): 234-run controlled probe, 4 exit countries, 6 query languages — **query language (not exit IP) decides whether local suppliers appear**; top recommendation is unstable across identical runs; minority-language users see a distinct middle tier (e.g., Russian from Estonia).

### 2.10 Still-uncovered levers from our own hub (from the DB, no new fetch needed)
- Listicle/definition-page formats (eastbound definition pages; HubSpot/Wix >1M citations; GEO-16 listicle finding).
- Wikipedia/Wikidata corroboration (entity spoke complement).
- Note: no fresh fetch on these yet — flagged for Phase 1 re-run before their articles.

## 3) Coverage Map — what the site already owns

Published cluster today (10 of 25):

- Hub: #5 11 Levers — engine signatures, gatekeepers/differentiators/refinements.
- Spokes: #1 overall citation study, #2 crawlers/technical, #3 freshness, #4 measurement buyer's guide, #6 entity, #7 strategy taxonomy, #8 E-E-A-T, #9 earned media, #10 schema (resolved).
- **Levers still unclaimed by a spoke:** formats/listicles, community/platform fan-out, video, local, agents, multilingual, AI-Mode-vs-AIO, answer-economy/B2B, zero-click economics.

## 4) Tiered Portfolio (Phase 19) — Candidates for #11–#25

### Tier 0 — Research-led flagships (for 2 of the remaining 15; keep total ≤3 of 25 incl. #1)

**F1. The Per-Engine Citation Divergence Study**
- Thesis: "Where each AI engine gets its answers — and why they disagree." Anchors the 13.7%/86% AI-Mode-vs-AIO divergence, SEOAuthori/BrightEdge 16% word overlap, Wellows 79.6% single-engine, cloro Gemini ~41%, Red-engage Reddit share, OtterlyAI YouTube drivers into one per-engine citation-source map.
- Why flagship: highest research density; produces an original divergence matrix nobody else has assembled; directly extends hub #5's engine signature table.
- Risk: overlaps #1 — differentiate by *engine × source-channel* cross-tab, not overall rates.

**F2. The Answer Economy: B2B buyers and the AI shortlist**
- Thesis: G2's 51%/71%/#1-shortlist/69%-vendor-change data, interpreted for B2B sellers; what "become the shortlisted answer" means operationally (flagship bridge from research to an agency offer).
- Why flagship: converts the strongest *buyers* dataset into strategy; commercial-relationship article; pairs with F1 (supply side) and #9 earned media (execution).
- Risk: keep it data-first; resist a vendor/ranking promise.

### Tier 1 — High-intent evidence-led spokes (each has a 2026 measured dataset)

| ID | Working title | Anchor evidence | Opportunity (Phase 21) |
|----|--------------|-----------------|------------------------|
| 11 | llms.txt & machine-readable files: what the 137k-domain audit actually shows | Ahrefs 137,210-domain audit; GPTBot/Claude-Code mix; 97% zero requests | 8.5 |
| 12 | Community & Reddit' s AI-citation share (Perplexity 46.7%) | Red-engage 10k citations; 35% B2B subreddit concentration; 300–600-word comment profile | 8.2 |
| 13 | AI Mode vs AI Overviews: the 13.7% overlap problem | Ahrefs 730k; MR 86% diverge; BrightEdge/SEOAuthori 16% | 8.0 |
| 14 | Local AI search / "near me" citations | SearchAtlas 104,855 citations × GBP signals | 8.0 |
| 15 | Agent-ready content & agentic search | Agent2UCB; Claude-Code 10.5%; ACL new-agent-GEO | 7.8 |
| 16 | Video & YouTube in the AI-citation mix | OtterlyAI 100M; 94% long-form; −0.03 popularity | 7.5 |
| 17 | Multilingual & international GEO | arXiv 2608.30052 language-selects-market | 7.3 |

### Tier 2 — Emerging / supporting completions (fill remaining ~8 slots)

- 18 | Zero-click economics & AIO answer-format playbook (68.01%, CTR −58%) — possibly merge with #13 as complementary pair.
- 19 | Listicle/definition/fact-block formats for AI SERPs (re-fetch HubSpot/Wix/eastbound numbers).
- 20 | Wikipedia/Wikidata corroboration spine (re-fetch Kalicube/Victorious entity corroboration).
- 21 | Vertical playbook: SaaS AI search (bridges F2; uses r/SaaS data).
- 22 | "What changed in 2026" year-review / Edition-01 evidence re-contact (freshness of the evidence pool itself).
- 23 | Measurement sequel: how to track divergence between surfaces (extends #4).
- 24 | Schema r.2: last-mile attributes & Bing/Copilot (extends #10 verdict).
- 25 | AI contact flow / lead capture for "answer-first" search (site-level, pairs with homepage revamp).
- Backup if any Tier-2 flips to Tier-1: agentic evaluation indie study, PAA/question-intent mapping, security/robots ethics.

## 5) Competitor & Gap Notes (Phase 20, initial pass)

- **Divergence (F1/#13):** nobody owns an AI-Mode-vs-AIO crossover; vendor pieces stop at "they differ." We own the 13.7% number + a cross-tab nobody has built.
- **llms.txt:** competitors either cheerlead (vendors) or one-liner-dismiss. We can own the "read but not weighted — here's who actually requests it" position (mirrors our schema verdict, builds authority).
- **Reddit:** agency content treats Reddit as PR ("build-a-community"); none cross-reference the 46.7% Perplexity share to a citation-flow model. Own the citation-flow framing.
- **Local:** local-SEO vendors frame AI search as GBP tweaks; SearchAtlas dataset lets us own the empirical layer.
- **Agents:** mostly hype pieces. Agent2UCB + Claude-Code data let us be the measured voice.
- **B2B (F2):** G2's report gets press releases, not *operational* articles; the playbook translation is ours for the taking.
- Deep-dive competitor reverse-engineering (spec: voice, structure, authority signals, internal-link strategy) happens per-article inside Phase 4 of each article's brief, not in this map.

## 6) Proposed Prioritized Queue (draft — needs user confirmation)

Wave A (articles #11–#15):
1. #11 llms.txt / machine-readable files (already in_progress; highest evidence density remaining; sibling to #10).
2. #12 Community & Reddit citation share (cheap to own, unique data, two-sided).
3. #13 AI Mode vs AI Overviews divergence (pairs with F1; high practitioner demand).
4. #14 Local AI search ("near me") evidence playbook.
5. #15 Agent-ready content & agents (horizon, matches our "emerging layer" thesis).

Flagships woven in by slot ~#16–#18:
6. F1 Per-Engine Citation Divergence Study.
7. F2 The Answer Economy (B2B).

Then Tier 2 wave #19–#25 as stand-ins evolve (opportunity scores re-checked at write time, per Phase 21).

Scores: 11=8.5, 12=8.2, 13=8.0, 14=8.0, 15=7.8, F1=9.3, F2=9.0. All candidates ≥7.0 clear the "publish" bar.

## 7) Gates

- **Gate A (this document):** user confirms queue + flagships count (2 of remaining; total 3 incl. #1).
- **Gate B (#11):** Phase 4 competitor reverse-engineering + Phase 6 original brief → user-visible brief → article.
- **Gate C (each article):** claim audit + originality audit (copy signals, not expression) → QA loop → one commit + push → Phase 25 report.
- Audit-flag fixes (sitemap/og-image/Person-author) remain queued post-queue; homepage revamp bundled after the map is approved.