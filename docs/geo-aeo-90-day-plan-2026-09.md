# 90-Day Authority Execution Plan (Sep–Dec 2026)

Sequenced roadmap across the four primitives (Discover · Understand · Verify · Corroborate). Everything already done in code is marked **[DONE]**. `[MANUAL]` rows require a human (accounts, credentials, publishing) and become the "Manual Actions Required" in the final report.

## Sprint 1 — Days 0–30: Entity & credibility foundation

| # | Task | Arc | Owner |
|---|---|---|---|
| 1 | Entity spine shipped: `@id`, Org/WebSite/Person schema, canonical logo, llms.txt anchor | Understand · Verify | [DONE] |
| 2 | Article schema + breadcrumbs live on all 29+ research pages | Understand | [DONE] |
| 3 | Disambiguation content live (About FAQ, promptco.ai note, India page, FAQ page) | Understand | [DONE] |
| 4 | Citation monitor snapshot #1 (baseline) across 5 engines × 20 prompts | Verify | [MANUAL] marketing |
| 5 | LinkedIn company page live; X profile live; both point to promptco.online + /logo.svg | Corroborate | [MANUAL] owner |
| 6 | Fill `externalProfiles.linkedin/twitter` in `src/lib/entity.ts`, rebuild, verify `sameAs` in rendered HTML + footer links | Corroborate | dev |
| 7 | Submit to 4 directories (Clutch, GoodFirms, UpCity, Sortlist) with prepared asset pack | Corroborate | [MANUAL] marketing |
| 8 | Claim/verify Crunchbase; decide GBP eligibility (default: skip if no physical location) | Corroborate | [MANUAL] owner |
| 9 | First monthly competitor/citation report (2026-09-30) | Verify | [MANUAL] marketing |

## Sprint 2 — Days 31–60: Corroboration & velocity

| # | Task | Arc | Owner |
|---|---|---|---|
| 10 | Wikidata item (minimal: instance-of, official website, logo, country — with promptco.online reference) | Verify · Corroborate | [MANUAL] owner + community |
| 11 | 2 trusted directory features landed (DesignRush, The Manifest, or AgencySpotter) once reviews exist | Corroborate | [MANUAL] marketing |
| 12 | Featured + Qwoted expert accounts live; 1 answer/week with a study stat | Corroborate | [MANUAL] founder |
| 13 | Trade-press pitch (Ahrefs/SEJ/SEL) with the 2026 citation-study stat | Corroborate | [MANUAL] founder |
| 14 | Research cadence: 1 new/updated study or listicle/week (listicle format ≤70.8% edge) | Discover | content |
| 15 | Refresh `best-*` market maps biweekly; always keep `PublishDate` updated | Understand | content |
| 16 | Re-run citation snapshot #3; measure mention share vs baseline; gap-plays per competitor doc | Verify | [MANUAL] marketing |

## Sprint 3 — Days 61–90: Hardening & scale

| # | Task | Arc | Owner |
|---|---|---|---|
| 17 | GBP if eligible (service-area only) | Corroborate | [MANUAL] owner |
| 18 | Person schema active — only after real founder name + profiles; fill `founderConfig` | Understand | dev + [MANUAL] owner |
| 19 | Wikidata item referenced from 1 independent source (directory + press) | Corroborate | [MANUAL] |
| 20 | India page: 1–2 backlinks from upcoming GEO/industry features (monitor snapshot rows 17–20) | Discover | [MANUAL] |
| 21 | Every study referenced by ≥1 external named source (Google/Bing/SEJ/SEMRush blog etc.) | Corroborate | [MANUAL] marketing |
| 22 | Share-of-answer report — target: Prompt&Co. named in 4/4 branded + ≥2/20 commercial prompts; promptco.ai fully disambiguated | Verify | lead |

## Standing cadence (weeks 1–13)
- **Weekly:** 1 research post (LinkedIn + X), 1 Featured/Qwoted answer, citation snapshot panel when time allows (min ChatGPT+Perplexity+AI Overviews).
- **Biweekly:** refresh market-map MDX + PublishDate; re-check llms.txt/sitemap.
- **Monthly:** citation IS/IS-NOT report, competitor report, GSC impressions on money queries, reviewer-status refresh.

## KPI targets by day 90 (measurable, honest)
| Metric | Baseline | Day-30 | Day-90 |
|---|---|---|---|
| Disambiguation score (branded prompts resolve to us) | ≈0 (promptco.ai leaks) | ≥50% | ≥90% |
| Citation share (brand cited ÷ 100 responses) | ≈0% | ≥5% | ≥20% |
| External profile URLs live + in sameAs | 0 | 2 (LinkedIn, X) | 5 (done/eligible) |
| Independent named mentions (dirs + press) | 0 | 4 | 12+ |
| Backlinks to research/India | ≈0 | ≥5 | ≥15 |
| Person schema rendered | off | off | on (if identity ready) |

Numbers are targets, not promises — update the report with real readings.

## Review gates
- 2026-10-31 (day 30): hold everything marked [MANUAL]; ask for account creds or delegate; author= re-plan Person schema.
- 2026-11-30 (day 60): re-baseline board.
- 2026-12-31 (day 90): write next-quarter plan; extend monitor cadence.

## Anti-fabrication (copied forward)
Never record a directory/press/backlink that wasn't actually received, never invent reviews/case counts/founder identity, never guess founding dates. Everything [DONE] in code is verifiable in the repo.