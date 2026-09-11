# Internal article brief — 010 Schema / structured data vs AI citations

Status: researched → briefed → written. Internal.

## Targeting
- Primary query: "does schema markup help AI citations", "JSON-LD GPT citations", "schema structured data AI search 2026", "FAQ schema ChatGPT"
- Intent: informational + commercial; technical SEOs deciding whether schema budget is a citation strategy.
- Role: Tier-2 spoke; resolves the hub's "openly contested" schema lever (9) with the full controlled-evidence stack; pairs with entity (sameAs), crawlers (rendering), E-E-A-T (attribute/author fields), measurement spokes.

## Evidence (fresh 2026)
- Ahrefs (Linehan & Guan, May 2026): 6M URLs — cited pages ~3x JSON-LD (53 vs 19%); DiD RCT 1,885 treated vs ~4,000 controls (Aug 2025–Mar 2026): AIO −4.6% (sig), AI Mode +2.4% (null), ChatGPT +2.2% (null).
- Fischman (SSRN 6284518, Feb 2026): 730 citations; naive pooled OR 0.546 p<.001 is rank artifact; corrected GEE null (schema OR 0.678 p=.296; richness 1.001; alignment 1.068); rank OR 0.762/pos, 43%→5% pos1→7; attribute-rich 61.7% vs generic 41.6% BUT no-schema 59.8% (Cheung re-analysis, June 2026).
- GEO Lab (Ferreira, 2026): 480-query FAQ test −1.7% null; Gemini mention 21.2% vs cite 0%.
- Authority Radar (Aug 2026): 120 matched pages, ~12,000 prompt-runs, 90 days; only Perplexity +1.3pp (90% CI).
- searchVIU (2026): 5 systems read visible HTML only; JSON-LD/Microdata/RDFa ignored at citation-selection.
- Williams-Cook DUCKYEA (2026): malformed JSON-LD read as text.
- GEO-16 (Ferencz): r=0.63, "+39%" over-quoted (citation-harvested corpus, no uncited baseline).
- AirOps/Indig (2026): 16,851 queries, JSON-LD 38.5 vs 32.0 (correlational).
- Schanbacher (peer-reviewed): FAQPage OR≈13, Product OR≈4 (correlational).
- citability.dev (Haller, 2026): FAQPage 71%/HowTo 66%/Article 58%/TechArticle 55%/SoftwareApplication 44%/Product 39%/Review 30%/Org 21%/Website 17%/Breadcrumb 12%; fields>type.
- Google 2026: "MYTHBUSTING" — schema not required; FAQ rich results sunset May 7 2026; Mueller llms.txt crutch.
- Bing (Canel/Capconvert): schema documented helpful for Copilot + Bing-fed ChatGPT index (the one live-retrieval positive).
- Web Data Commons (2026): 106B RDF quads / 3.1B entities → training layer feed.
- Ahrefs llms.txt audit: 137,000 domains, 28% publish, 97% zero requests, 1.1% retrieval bots, Claude-Code agents 10.5%.
- Trustpilot/AIOSite: no reviews cited 1% vs active 75.3%; reviews ~14% of citations (corroboration rider, not markup).

## Competitors
Backlinko, Ahrefs blog, Search Engine Land, Andrew Clark/Growth Memo, Cheung. Gap: most either cheerlead schema for AI (vendors, correlational decks) or dismiss it entirely (Ahrefs headline). None split the evidence into correlational vs controlled AND keep the attribute-rich/no-schema-59.8% nuance with a per-use allocation (entity spine, WDC training, Bing/Copilot, last-mile attributes, visible-facts-first).

## Original contribution
The correlational-vs-causal verdict (all controlled tests null/negative) laid next to the five places markup still pays with honesty labels; the 59.8%≈61.7% fact-over-format proof; mention-vs-citation gap (21.2%→0); rank-dominates (43%→5%) reallocation rule; meta-aware transparent admission that our own pages carry FAQ/BlogPosting JSON-LD as infrastructure, not citation trick.

## Metadata
Slug: schema-ai-citations-2026-evidence · Title: Schema Is Not an AI Citation Lever: The 2026 Controlled Evidence, the Correlation Trap, and Where Markup Still Pays · Technical · BlogPosting + FAQPage (5 Qs) · ~1,800 words.

## Scoring
Demand 9 · Competition 6 · AI-search relevance 10 · Freshness 9 · Business value 8 · Gap 7 · Authority value 9 → ~8.6.