# Brief 013 — Google AI Is Two Engines: AI Mode vs AI Overviews

Status: researched → brief. Companion to article #13. Private working document (no secrets).

## Working title
Google AI Is Two Engines: The 13.7% Citation Overlap Between AI Mode and AI Overviews, Explained

## Slug
`ai-mode-vs-ai-overviews-2026`

## Targeting
- Primary query: "AI Mode vs AI Overviews" / "AI Mode SEO" / "cite both AI Overviews and AI Mode"
- Primary intent: informational + practitioner decision; premium commercial. Spoke of hub 005; pairs with #12 (community) and F1 (cross-engine divergence, later). Scope: the two-Google-surfaces problem specifically, at query level.
- Supporting queries: "13.7% citation overlap AI Overviews AI Mode", "AI Mode query fan-out", "why does AI Mode cite different sources", "AI Mode 4x longer entities", "track AI Mode visibility"
- Funnel: awareness → consideration

## Evidence base (re-verified, 2026-dated)
- **Ahrefs (Gavoyannis & Guan, Dec 15, 2025) — anchor.** Sep 2025 US Brand Radar: 540,000 query pairs (citations) + 730,000 (similarity). URL overlap 13.7% (top-3: 16.3%); word overlap (Jaccard) 16%; same first sentence 2.51%; identical 0.51%; semantic similarity 86% / 89.7% of pairs >0.8; AI Mode ~4x longer; entities 3.3 vs 1.3; 61% brand-carry (AI Mode includes AIO entities + more); citation gaps 3% (AI Mode) vs 11% (AIO); source-preference deltas (Wikipedia 28.9% vs 18.1%; Quora 3.5x; health ~2x; Facebook 2x; YouTube top in AIO and ~2x; Reddit similar); query fan-out (Google docs); caveat: single generation, ~45% of AIO citations change between generations.
- **Reconciliation of measurement units:** per-query URL overlap 13.7% (Ahrefs; Finseo replicate: 42,937 prompt-days → 13.7% URL / 18.7% domain; AIO 6.31 vs AI Mode 10.79 URLs/answer); SE Ranking ~10.7% URL / ~16% domain; Victorious (1,540 queries): 77% of domains on one surface only, zero exact matches; but **BrightEdge AI Catalyst (Apr 2026): pairwise top-100 domain overlap — AIO vs AI Mode is the HIGHEST pair at ~59%**, Gemini vs AIO 34%, Gemini vs AI Mode 27%, Gemini vs ChatGPT 39%; brand overlap tight 36–55%. So: divergence is at query level, convergence at ecosystem level — "two engines wearing one coat."
- **Why they diverge:** query fan-out; Google states AIO/AI Mode may use different models and techniques; AI Mode scores passages against invisible sub-questions (not whole pages); ~9.2 vs 7.7 domains/query; 97% vs 89% citation rates.
- **Source-type profiles:** MR Research (Jul 2026, MRI data): market-research/database sources skew AI Mode (G2 1.81:1, Grand View 1.90, MarketsandMarkets 1.63, Mordor 1.60); wire/consulting skew AIO (PR Newswire 0.67, Deloitte 0.71; Crunchbase outlier 0.59). SEOAuthori: AIO video/community; AI Mode encyclopedic/reference.
- **Reach & CTR:** I/O May 2026 merge ("one seamless experience", AI Mode default; users ~1B vs AIO ~2.5B, adamarant); Seer Interactive: organic CTR 1.76%→0.61% with AIO (−61%), 3,119 queries/42 clients/25.1M impressions (Jun 2024–Sep 2025); BrightEdge 16-month (via MR): AIO/organic overlap 32.3%→54.5%, 45.5% of citations outside organic top results.
- **Context links:** cross-engine 35–40% zero-shared-domain queries (Search Atlas, 5.5M responses); Gemini-ChatGPT 42% overlap; QuickSEO 62% brand disagreement / 11% ChatGPT-Perplexity domain overlap; BuzzStream 595 prompts → 37.4% Jaccard; Semrush 58% URL (corpus-level — different unit, do not confuse).

## Competitor analysis (Phase 4) & gap
Competitors: Ahrefs blog, SEJ, SEOAuthori, ApiSerpent, MR Research, Link Building Journal, adamarant, outpaceseo, finseo, agencydashboard, BrightEdge.
- Gap: most pieces report the 13.7% headline, or the "86% similar" paradox, in isolation. None reconcile per-query overlap (14%) with top-100 domain similarity (59%) and explain that divergence lives at the *query* level — nor pair source-type profiles (market-research→AI Mode; wire→AIO) with a dual-surface allocation. We own the "two engines, one coat" reconciliation + per-surface allocation.

## Original angle / contribution
1. "Same coat, two engines" — the measurement-units reconciliation (per-query vs top-100 domain).
2. The divergence mechanism explained (query fan-out, passage-level scoring, citation-gap asymmetry).
3. Source-preference / source-type profile table per surface (incl. G2/Grand View ratios vs PR Newswire/Deloitte).
4. Brand carry + competition dynamics (61% carry; 77% single-surface domains).
5. Dual-surface playbook: passage-depth for AI Mode, video/UGC/community for AIO, entity+encyclopedic coverage for both, dual tracking with "diverged" signal, revenue-not-clicks (Seer −61%).
6. Volatility honesty: ~45% of AIO citations change between generations; overlap figures drift; re-baseline quarterly.

## SEO / AEO / GEO strategy
- H1: "Google AI Is Two Engines…". Entities: AI Overviews, AI Mode, Gemini, query fan-out, Brand Radar, Wikipedia, Quora, YouTube, Reddit, G2, passage indexing, entity mentions.
- FAQ (5): same sources? why different? brand-carry? which to prioritize? does organic rank predict AI visibility?
- Internal links: hub ai-citation-levers-2026; #12 Reddit (community layer); measurement buyer's guide; #10 schema (Bing/source-selection); #7 SEO-vs-GEO taxonomy (query fan-out grounding).

## Phase 21 score
8.0 — deep unique reconciliation; high practitioner demand; clean slot between #12 and flagship F1.

## Writing credo checklist
One h1; exactly 5 FAQ; DefinitionCard opener; ~1500–1900 words; attribute every stat inline + Sources & notes; label measurement units (per-query URL vs top-100 domain vs corpus) explicitly; no fabrication; datePublished 2026-09-11; raw `<` in tables → `&lt;`.