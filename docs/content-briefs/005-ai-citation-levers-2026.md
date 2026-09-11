# Internal article brief — 005 "The 11 Levers of AI Citation"

Status: researched → briefed. Not for publication.

## Search strategy
- Primary query: "what gets cited by AI" / "AI citation factors" / "how to get cited by AI"
- Primary intent: informational (hub/cheatsheet); commercial (methodology-led service entry)
- Secondary intents: "AI ranking factors 2026", "GEO levers", "why won't ChatGPT cite me", "AI visibility levers"
- Supporting queries: "ChatGPT vs Perplexity citations overlap", "is schema important for AI", "earned media AI citations", "AI search volatility"
- Funnel: awareness → consideration
- Audience: brand/content leaders, SEO/GEO practitioners, founders

## Evidence base (fresh, 2026)
- SIGIR '26 controlled competitive-GEO study (252,000 trials, 6 LLMs, 18 factors): topic match + list position are gatekeepers for the FIRST citation; price info + recent timestamp help; formatting-only edits ≈ no effect.
- GEO-16 (arXiv:2509.10762): 1,702 citations; pillars Metadata&Freshness r=.68 (+47%), Semantic HTML r=.65 (+42%), Structured Data r=.63 (+39%), Evidence&Citations r=.61 (+37%), Authority&Trust r=.59 (+35%), Internal Linking r=.57 (+33%). G≥0.70 & ≥12 hits → 78% cross-engine citation rate (OR 4.2).
- Zyppy 54-study meta (2026): URL accessibility 9.5, classic search rank 9.4, fan-out rank 9.3, cluster depth 8.9, answer-near-top 8.8, AI-ready structure 8.6, self-contained passages 8.0.
- RankSenseAI synthesis (Jul 2026): original data 38–65% vs 6–15% blog posts; ~3x under 3 months old; overlap GPT↔Google top10 6.8%; collapse 76%→17–38% where measured.
- Wix AI Search Lab + HubSpot (>1M citations): listicles/articles/product/category = top formats; ChatGPT comparison format ~95% citation rate; "best X" 43.8% of ChatGPT page types.
- citations.press (60,350 citations): ranked-list pages 81% of ChatGPT / 75% of Claude citations; homepages least cited 7%/4%; ~18% source-domain overlap between engines; shared spine TechRadar/Forbes/G2/Which/NerdWallet.
- Authority signals: named-author odds ratio 1.40 (llmreach/Yext); expert quotes +40.9%, sourced stats +30.6%, inline citations +27.5% (Princeton GEO-derived); 44.2% of LLM citations from first third of content; 72.4% of ChatGPT-cited pages carried direct answer after question heading.
- Earned media: 85%+ of non-paid citations earned (Muck Rack); Stacker earned-distribution median lift 239%; U Toronto ~325%; Ahrefs branded-web-mentions r=.664 vs backlinks r=.218; YouTube mentions r=.737 (Dec-2025 follow-up); citations.press: homepage often the wrong target.
- Graphite/Ranqo (arXiv:2606.20065): stature ladder 73%/44%/11%; listicle ~21% of all citations; sentiment flips ~6.7x more than mention; Matthew effect.
- AEO natural experiment (arXiv:2606.04362): tailwind dominates raw multiples; credible intervention-aligned lift ~1.8–2.3x and even that is only suggestive (placebo p=.16).
- Schema: genuinely contested — GEO-16 +39%, AirOps JSON-LD 38.5% vs 32%; Ahrefs 1,885 vs 4,000 controls = ~zero; BrightonSEO sitewide = +1500% AIO but negative elsewhere; Zyppy 5.6/10; Google: no special schema needed. Treat as hygiene.
- Freshness: ConvertMate 3.2x last-30-days; Perplexity 40% weight, ~30-day deprioritization; pages under 3 months ~3x (RankSenseAI).
- llms.txt: effectively inactive (Ahrefs 97% zero requests across 137,210 domains; Google/Gary Illyes no support; John Mueller = "keywords meta tag").
- Citation volatility: 40–60% month-over-month; only ~30% of brands stay visible across answers (AirOps 2026). Single screenshots are samples.

## Entities & terminology
Entities: ChatGPT, Perplexity, Gemini, Claude, AI Overviews, Brave, OAI-SearchBot, GPTBot, PerplexityBot, Google-Extended, ClaudeBot, Retrieval, citation, source, grounded answer, RAG, AEO, GEO, LLMO, earned media, E-E-A-T, entity, structured data/schema, freshness, listicle, comparison, fan-out, volatility, knowledge graph.
Terminology: gatekeeper vs differentiator; first-citation; surfaced vs quoted; answer capsule; provenance; retrieval set.

## Content gap
- Competitors offer either one-number "AI scores" or laundry lists. Nobody has released an evidence-ranked, gatekeeper/differentiator/refinement model that also discloses the disagreements (schema) and the volatility caveat. That honesty structure is our differentiation.

## Original contribution
- The 11-lever framework organized as GATEKEEPERS / DIFFERENTIATORS / REFINEMENTS, each lever with an evidence rating and conflicting data shown where it exists.
- A per-engine weight table and a 4-step diagnostic workflow (derived from SIGIR workflow).
- Explicit "what changed in 2026" + inflation/volatility caution (no magic bullet).
- Reads as the hub for the existing 4-article cluster (Phase 14 hub-and-spoke).

## SEO metadata
- Slug: ai-citation-levers-2026
- Meta title: "The 11 Levers of AI Citation in 2026: What Actually Gets You Cited | Prompt&Co."
- Meta description: f/ranked, gatekeepers-first.
- Canonical: https://promptco.online/resources/research/ai-citation-levers-2026
- Schema: BlogPosting + FAQPage (5–6 Qs), breadcrumb, tags.

## Scoring
Demand 9 · Competition 6 (crowded but formulaic) · AI-search relevance 10 · Freshness 9 · Business value 9 · Original-research opportunity 8 · Gap 8 · Authority value 9 → opportunity ~8.5.

## Search-readiness comparison (Phase 16, internal)
| Dimension | Best competitor | Our article | Advantage |
| --- | --- | --- | --- |
| Search intent | Laundry-list "factors" (TurboAudit) or single-vendor data (RankSenseAI) | Gatekeeper/differentiator/refinement model = decision framework | Structure |
| Freshness | Feb–Jul 2026 | 2026-09-11, cites SIGIR '26 + GEO-16 + Wix/HubSpot + Ranqo + AEO natural experiment | Freshest |
| Original research | Vendor syntheses | Evidence-rated levers + openly contested digits | Transparent |
| Evidence | Single source often | Multi-source per lever, rated verified/supported/contested/hypothesis | Verifiability |
| Practicality | Checklists | Diagnostic workflow + horizon sequencing + engine weight-table | Actionable |
| Clarity | Confident single numbers | Shows disagreements + volatility/tailwind caveats | Honest |
| AI-search usefulness | Commercial pitch lines | AEO-ready structure, verified claims, direct answer | Extraction |