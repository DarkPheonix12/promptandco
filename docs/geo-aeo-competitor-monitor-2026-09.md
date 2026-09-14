# Competitor & Category Monitor (Sep 2026)

What we watch so we can react to share-of-answer changes in the GEO/AEO agency category — pairs with the citation monitor (`docs/ai-citation-monitor-2026-09.md`). Anything that gets named when our target prompts run is worth tracking; anything that gets cited is a target gap.

## 1. Competitive set — who gets cited

Populated from the market maps we already published + observed answers. Mark + never guess:

| Slug | Player | Category | Cited-in answers I've seen | Notes |
|---|---|---|---|---|
| classic-aeo | AEO incumbents (e.g., Canopy, Advanced Settings) | AEO tooling | definitional + "AEO agency" prompts | Track their llms/GEO pages |
| geo-agency-portfolio | GEO-ran agencies in `best-geo-agencies-2026-honest-market-map.mdx` | GEO agency | commercial agency prompts | Re-scan monthly for new entrants |
| aeo-agency-portfolio | AEO agencies in `best-aeo-agencies-2026.mdx` | AEO agency | commercial agency prompts | Re-scan monthly |
| promptco-ai | promptco.ai | ambiguous same-named brand | discrete brand prompts | Disambiguation watch — must always resolve to us |
| tool-llms | llms.txt tooling (Cloudflare, LangChain guardrails, Vercel AI) | infra | definitional llms.txt prompts | Watch their llms docs for citation edges |

Portfolio rows come directly from the repo's own research MDX — don't re-pull names; keep this doc as the index.

## 2. What to capture each week (during the citation-monitor panel)

For each of the 5 engines, in the commercial + definitional prompts, record:
1. **Which domains** are cited (exact URL → new-domain dedupe).
2. **Which agency/category names** appear in the narrative answer.
3. **Prompt position** of any competitor vs us (0 = absent).
4. **Why they were chosen** if visible: cited article title, review-site presence (Clutch/GoodFirms), YouTube, LinkedIn posts, presence in a "Best of" listicle, encyclopedia/wikidata corroboration.

## 3. Weekly outputs
- Append the citations to `snapshots/citations-<date>.csv` (competitor column) — one pass, no extra tooling.
- Monthly: email 3-line summary — "Named this month: [X]; newly-cited domains: [Y]; gap: [we were absent in N/Y commercial prompts]; our counter-move → [link]."

## 4. Counter-move library (what to do when a gap appears)
| Gap observed | Playbook move |
|---|---|
| Competitor cited in "best GEO/AEO agency 2026" | Build/refresh the published market maps (interested-party + named work) so a comparable "citable" source exists; escalate directory submissions |
| Competitor cited via a "Best of" listicle | Our listicle-format content (content-formats study says 70.8% of citations go to listicle format) → publish an updated listicle; get it + flanking listicle onto 1–2 reviewed directories (see outreach doc) |
| Competitor cited with a review footprint we can't match | LinkedIn/Clutch profile live, request 2–3 verified reviews from real authorized clients — never purchased/fake reviews |
| Competitor wins disambiguation when we show "promptco.ai" | Sharpen the About FAQ answer, add the disambiguation in more copy (price/contact), validate that the Wikidata + sameAs spine is picked up |
| Competitor has fresher studies captured by citation engines | Raise research-post cadence (1/week), ensure each has PublishDate + a fresh llms.txt reference |

## 5. Status tracking
Today (baseline): no competitor-vs-us tracking yet; snapshot #1 will establish it. Owner: [assign to marketing lead]. First monthly report: 2026-09-30.

## 6. Anti-fabrication
- Only record competitors that actually appeared in a logged answer row (with prompt + engine + date). No "assumed" competition entries in the snapshot.
- Never downgrade a competitor or post anonymously about them anywhere; our counter-play is adding citable material, not denigration.