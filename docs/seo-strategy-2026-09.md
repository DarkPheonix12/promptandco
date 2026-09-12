# Prompt&Co. — Deep SEO & AI-Visibility Strategy (September 2026)

Research-first report. Findings marked **[verified]** were confirmed against the live site
(www + apex), the codebase, or live SERPs on 2026-09-12. Estimates are labeled. Nothing is
invented; "could not verify" is stated where applicable.

---

## 1. Executive Summary

Prompt&Co. sells AI-search visibility, but currently fails the most basic test of that value
prop: **its own production robots.txt blocks the AI crawlers it teaches clients to court**
**[verified]** — Cloudflare's managed block disallows GPTBot, ClaudeBot, Google-Extended, CCBot,
Bytespider, Amazonbot, Applebot-Extended and meta-externalagent. Gemini grounding and Claude
search cannot legally-in-robots read the site at all.

The second structural problem: **the site competes in a market whose Google results ARE the AI
recommendations.** For prompts like "best GEO agencies", AI engines quote the "best X agencies"
listicle ecosystem (TripleDart, Grizzle, SeoProfy, beOmniscient, Minuttia…). Every serious
competitor publishes listicles that rank on Google *and* feed AI answers. Prompt&Co. has zero
presence in that ecosystem **[verified: absent from all fetched 2026 listicle SERPs]** — it is
invisible in the exact corpus that decides "which agencies do AI engines recommend".

Third: **~40 of the sitemap's URLs 404** **[verified]**, titles are doubled on money pages
**[verified]**, the social/OG preview image 404s **[verified]**, and Organization schema ships an
empty `sameAs` and a missing logo file **[verified]**. These are small individually; together
they signal "young, unfinished site" to both Google and LLMs.

The strategy below fixes the technical layer first (P0), then attacks the listicle/
citation ecosystem (P1–P2), because that is where this specific market's rankings and AI
mentions are actually produced.

**Current SEO score: 38/100** (technical 45, content 60, authority ~10, trust 35 — judgment
call from verified signals, not a tool score).

---

## 2. Verified Current State

### Live behavior (checked 2026-09-12)
| Check | Result |
|---|---|
| `www.promptco.online/robots.txt` | 200. Cloudflare managed block + site rules. **GPTBot, ClaudeBot, Google-Extended, CCBot, Bytespider, Amazonbot, Applebot-Extended, meta-externalagent: Disallow /** |
| `www` vs apex | Both serve 200; no redirect. Canonicals point to apex → split host signals **[verified]** |
| `/about`, `/faq`, `/case-studies`, `/reviews`, `/privacy-policy`, `/terms`, `/industries/*`, `/locations/*`, `/resources/guides`, `/resources/glossary`, `/resources` | All 404 but present in sitemap.xml **[verified /about; sitemap confirms the rest]** |
| `/services` + 9 service pages | Live, substantive, schema'd **[verified]** |
| `/resources/blog`, `/resources/research` + 27 articles each | Live **[verified]** |
| Service page titles | `…Services \| Prompt&Co. \| Prompt&Co.` — template doubles brand **[verified]** |
| OG image | layout references `/og-image.png`; only `/og-image.svg` exists → social/AI preview image 404s **[verified]** |
| Organization schema | `sameAs: []` (empty), `logo: /logo.png` (file doesn't exist) **[verified]** |
| WebSite schema | `SearchAction` → `/search?q=` — route doesn't exist (invalid schema) **[verified]** |
| Social profiles | Zero links to LinkedIn/X/YouTube anywhere in code **[verified]** |
| `/api/contact` | Works, D1 rate-limited **[verified in code]** |
| GSC/Bing verification, analytics | Not found in repo — **could not verify** whether configured at host |

### What works
27 genuinely differentiated research articles (llms.txt evidence, per-engine citation
divergence, Wikipedia/Wikidata entity corroboration, zero-click economics…). This is a real
topical-authority seed most competitors lack. The 9 service pages are substantive and
AI-extractable. Site is fast (static, Cloudflare), HTTPS, clean URLs.

---

## 3. Technical SEO Audit (classified)

### CRITICAL
| # | Issue | Why it matters | Fix | Impact / Difficulty |
|---|---|---|---|---|
| C1 | Cloudflare managed robots block kills GPTBot, ClaudeBot, Google-Extended | Site cannot be a training/grounding source for the engines its clients care about. Directly contradicts the value prop and every research article's thesis. | Cloudflare dashboard → AI Crawl Control / Bots → **disable "Block AI bots"** (or allowlist GPTBot, ClaudeBot, Google-Extended, Amazonbot, CCBot, Applebot-Extended, meta-externalagent). Keep ByteSpider blocked if desired. Code cannot fix this — it's injected at the edge. | Massive / 10 min (dashboard) |
| C2 | ~40 sitemap URLs → 404 | Wasted crawl budget on a small site; Google quality signals; GSC noise; sitemap trust decays. | Sitemap now emits only existing routes; add URLs back the day pages deploy. (Implemented in this pass.) | High / Low |
| C3 | Broken OG image (`/og-image.png` missing) | Every share, and every AI system that fetches preview data, gets a 404 image. | Generate real PNG via Next `opengraph-image.tsx` (ImageResponse). (Implemented in this pass.) | Medium / Low |

### HIGH
| # | Issue | Fix |
|---|---|---|
| H1 | `www` serves 200 without redirecting to apex; canonicals point to apex | Cloudflare dashboard → Rules → 301 `www→apex` (or pick www and flip canonicals). Until then every URL has two live hosts. |
| H2 | Doubled titles on money pages (`…\| Prompt&Co. \| Prompt&Co.`) | Remove brand suffix from page-level titles; let the `%s \| Prompt&Co.` template add it. (Implemented.) |
| H3 | Invalid `SearchAction` schema (target `/search` 404s) | Remove `potentialAction`. Invalid structured data wastes the one schema signal that's perfect today. (Implemented.) |
| H4 | Empty `sameAs`, missing logo, zero social/entity links | No entity corroboration for "Prompt&Co." as a thing. Fix schema (done in code), then create LinkedIn company page + Wikidata item once real profiles exist. |
| H5 | Homepage case studies read as placeholders ("SaaS Company Increases AI Mentions by 340%") | Unverifiable numbers on the homepage are an E-E-A-T liability for an agency selling trust. Either label clearly ("illustrative model") or replace with real engagements. **Do not invent clients.** |

### MEDIUM
- M1: No breadcrumbs on service/blog pages (schema exists, UI missing) — add `BreadcrumbSchema` usage sitewide.
- M2: No `/manifest.json` (low value, skip unless PWA is wanted).
- M3: Blog article pages have no next/prev or related-articles module → weak internal linking across the 27-article cluster.
- M4: No author entities: articles need a named author with a real bio page (E-E-A-T).
- M5: Could not verify analytics/GSC/Bing WMT setup from repo — confirm both are wired before content push.

### LOW
- L1: `changefreq`/`priority` are ignored by Google — harmless.
- L2: Static robots.txt has conflicting ClaudeBot/Applebot-Extended allow-groups vs managed block — clean up (implemented).

---

## 4. Keyword Opportunity Map

Volumes are directional estimates (no paid tool data available — labeled as estimates). Intent
and SERP composition are **[verified from live SERPs]**.

### Tier 1 — money keywords (target with service pages)
| Keyword | Intent | Est. vol/mo | Competition | Notes / target page |
|---|---|---|---|---|
| generative engine optimization | Mixed | 3–6K | Medium | Existing `/services/generative-engine-optimization` — strengthen, add pricing anchor |
| generative engine optimization agency | Commercial | 500–1.5K | Medium | Same page; add "engagements" section |
| answer engine optimization | Mixed | 2–5K | Medium | `/services/answer-engine-optimization` |
| AEO agency | Commercial | 300–800 | Low-Med | Same |
| ai search optimization | Mixed | 2–4K | Medium | Flagship `/services/ai-search-optimization` |
| ai seo agency | Commercial | 800–2K | High | Flagship page + listicle |
| ai visibility agency | Commercial | 200–600 | Low | `/services/ai-visibility` |
| how to get recommended by chatgpt / cited by AI | Info→Commercial | 1–3K | Low-Med | New guide (see content plan) — feeds flagship |
| generative engine optimization cost / pricing | Commercial | 400–1K | **Low** | New `/pricing` ("how engagements work") — WebFX owns this today with thin content |
| ai search optimization for saas / ecommerce / b2b | Commercial | 300–1K ea | **Low** | `/industries/*` pages (Tier 2 backlog) |

### Tier 2 — authority keywords (research hub)
| Keyword | Intent | Est. vol | Notes |
|---|---|---|---|
| ai overviews optimization / optimize for ai overviews | Info | 1–3K | Guide; SERP = 2026-dated guides (Search Engine Land, seo.com) — beatable with fresher, data-backed piece |
| perplexity seo | Info | 500–1.5K | Guide |
| llms.txt | Info | 1–2K, rising | Prompt&Co. already has original evidence article — expand into the definitive piece |
| ai search visibility / share of voice | Info | 500–1.5K | Measurement guide |
| chatgpt brand visibility / mentions | Info | 1–2K | Guide |

### Tier 3 — don't chase
Tool-branded keywords (Profound, Peec, Otterly…): dominated by vendors + affiliate comparo
farms; zero conversion for an agency. "What is SEO" head terms: dead end.

---

## 5. Competitor Intelligence (10)

**[Verified from live SERPs 2026-09-12]** — authority estimates, not tool numbers.

| Competitor | Why they rank / get cited | What they do better |
|---|---|---|
| Omnius (omnius.so) | Newer than most; ranks #5 for "GEO agency" commercial SERP | Relentless listicle + tool pages; tight entity building; AI-native positioning |
| TripleDart | Owns "17 Best GEO Agencies 2026" (#1) | Publishes the listicle ecosystem others get cited from |
| Grizzle | #2 "best GEO agencies for B2B" | Niche-modified listicles (B2B vertical) — low-competition wins |
| SeoProfy | #6 "TOP 13 GEO Agencies" | Scales listicles per modifier + locale |
| beOmniscient | #7 "8 Best GEO Agencies for B2B SaaS" | Same playbook: listicles + pillar guides |
| Minuttia | Both "best AEO" and "best GEO" listicles (#10) | Double-listicle coverage across both acronyms |
| iPullRank | Personal-brand authority (Mike King) + technical depth | Thought leadership → links → AI citation |
| First Page Sage | Legacy DA + research pages | Long-established trust signals |
| WebFX | Scale; owns "GEO cost" SERP | Pricing pages = commercial keyword capture |
| Profound / Evertune (tools) | Own tool/comparison SERPs + "AI search statistics" data page | Original statistics pages earn links AND AI citations |

### The gap analysis in one line
**Content gaps:** listicles (all of them), pricing/cost page, per-engine optimization guides
(AI Overviews / Perplexity / ChatGPT as landing pages), statistics page, case-study detail pages.
**Keyword gaps:** every "best X agencies" modifier, "cost/pricing", per-platform guides.
**Authority gaps:** zero external mentions in the sources AI engines read for this category.
**Backlink gaps:** the entire listicle/citation ecosystem + AI/SEO press (Search Engine Land,
Reuters-adjacent marketing press, podcasts).
**SERP gaps to attack:** "GEO cost/pricing" (thin WebFX page), per-vertical "AI SEO for X",
"llms.txt" (only fragmentary coverage), listicles for underserved modifiers ("AI visibility
agencies for startups", "AEO agencies India" — matches the locations strategy already planned).

---

## 6. Topical Authority Map (build order)

Pillars = existing service lines. Clusters feed pillar pages via internal links.

```
PILLAR: AI Search Optimization (/services/ai-search-optimization)
├─ cluster: how AI search works
│  ├─ how chatgpt chooses brands (guide)
│  ├─ how google ai overviews picks sources (guide)
│  ├─ how perplexity ranks and cites (guide)
│  └─ ai crawlers + llms.txt: the technical layer (EXPAND existing research #llms-txt)
├─ cluster: doing AI SEO
│  ├─ ai seo vs traditional seo (guide)
│  ├─ ai search optimization checklist (linkable asset)
│  └─ ai search optimization tools: what you actually need (honest guide)
├─ cluster: measurement
│  ├─ ai visibility metrics that matter (guide)
│  └─ EXPAND existing measurement research into pillar support
└─ cluster: verticals
   ├─ for saas / for ecommerce / for b2b / for local (= industries pages)
   └─ case studies (real ones, labeled)

PILLAR: GEO (/services/generative-engine-optimization)
├─ what is geo (definitive guide, beat searchengineland/seo.com on freshness + data)
├─ geo cost & pricing in 2026 (money page)
├─ best geo agencies: honest market map (LINKABLE LISTICLE — see §9)
├─ geo statistics page (linkable asset — cite the 27 research pieces)
└─ geo for b2b saas (vertical)

PILLAR: AEO (/services/answer-engine-optimization)
├─ what is aeo (definitive guide)
├─ aeo vs seo vs geo (comparison — beat Conductor/Salesforce on practicality)
├─ fao/faq schema after the FAQ death (EXPAND existing research #26)
└─ aeo checklist (linkable)

PILLAR: AI Brand Visibility (/services/ai-visibility)
├─ how to measure ai share of voice (guide)
├─ ai visibility tools compared (honest, incl. "when an agency beats a tool")
└─ 2026 ai citation study (EXPAND existing original research — this IS the link magnet)
```

Publication order: money pages first (cost/pricing, per-vertical), then the 4 definitive
"what is X" guides, then linkable assets (statistics, checklist, listicles).

---

## 7. Website Architecture

Current (planned) structure is sound: `/services/*` + `/industries/*` + `/locations/*` +
`/resources/{blog,research,guides,glossary}`. Keep it. Two changes:

1. **Ship `/pricing`** ("How engagements work" — with real price anchors or ranges you're
   willing to publish; if not, publish the market ranges with sources — that alone captures
   the "cost" SERP and AI answers).
2. **Breadcrumbs sitewide** (UI + schema): Home → Services → GEO, Home → Resources → Research
   → Article. Cheap entity/clarity win.

---

## 8. On-Page SEO (existing money pages)

### `/services/generative-engine-optimization` (flagship commercial page)
- **Title:** `Generative Engine Optimization (GEO) Services | Prompt&Co.` *(template adds brand
  once — fix implemented)*
- **Meta:** `GEO that makes AI systems recommend your brand. We build the mentions, citations
  and entity authority behind ChatGPT, Perplexity and AI Overview recommendations.`
- **H1:** Generative Engine Optimization Services *(unchanged)*
- **Add:** "How GEO engagements work" section w/ process + timeline; 1 honest FAQ on pricing
  ranges; internal links to the GEO guide, statistics page and listicle once built.
- Schema already correct (Service + FAQ + Breadcrumb).

### `/` homepage
- Title ok after dedup fix. Add Organization `sameAs` when LinkedIn exists. Replace placeholder
  case-study numbers with labeled models or real results (E-E-A-T).

### Blog/research article template
- Add next/prev + "related research" (3 links) + author entity. All 27 articles get stronger
  cluster interlinking to the two most commercial pages (`/services/ai-search-optimization`,
  `/services/generative-engine-optimization`) — currently most articles link out to research
  only, bleeding equity from the money pages.

---

## 9. Link Building & Digital PR (no black-hat)

1. **The market-map listicles (highest leverage).** Publish "Best GEO agencies in 2026: an
   honest market map" — include competitors, rank honestly, describe strengths. This is the
   exact content format that (a) ranks for commercial SERPs, (b) gets quoted by ChatGPT/
   Perplexity for "best GEO agency" prompts, (c) earns links from the agencies listed (they
   link to their own ranking), (d) is the standard play of every competitor above. Repeat for
   AEO + "AI SEO agencies for SaaS" modifiers.
2. **Original research expansion.** The existing 2026 AI citation study becomes an annual
   "State of AI Citations" report with a methodology page → pitch to Search Engine Land, PPC
   Hero-ish SEO press, marketing podcasts.
3. **Statistics page.** "AI search statistics (2026)" aggregating your own 27 studies with
   citations → becomes the linked source for writers (this is how Evertune wins links).
4. **Free tool → link magnet.** The homepage AI-visibility audit tool as a public `/audit`
   landing page; shareable "your AI visibility score" results.
5. **Founder entity building.** LinkedIn company + personal pages posting the research
   findings; answer the PAA questions ("Is GEO going to replace SEO?") on LinkedIn/Quora with
   links back. Get the founder on 2–3 marketing podcasts in Q4.
6. **Directories that matter:** Clutch/DesignRush/G2 agency categories (real reviews only).

---

## 10. E-E-A-T & Trust

- **Author entities:** named author(s) with `/authors/[name]` pages, real bios, credentials,
  LinkedIn links; `Person` schema on every article.
- **Real proof:** replace placeholder case-study numbers; when the first real client results
  exist, ship `/case-studies/[slug]` with methodology + numbers.
- **Editorial standards:** short `/resources/editorial-policy` page (how research is produced,
  how sources are chosen) — cited from article footers. This is a recognized trust signal.
- **Legal pages:** `/privacy-policy`, `/terms` (already planned Tier 4 — required before ad
  spend; the contact form collects PII).
- **Company info:** full address/city + NAP consistency once public; Google Business Profile
  for the operating city.
- **No fabrication.** Never invent clients, numbers, badges. The 340% placeholder gets labeled
  or removed this week.

---

## 11. AI Search / GEO Strategy (for Prompt&Co. itself)

**Current AI visibility: not present in any fetched "best agency" SERP/citation ecosystem**
[verified — absent from the 2026-09 listicle results that dominate those prompts]. ChatGPT
search can crawl the site (OAI-SearchBot allowed), but Perplexity-relevant and Claude/Gemini
paths are degraded by the Cloudflare block (C1).

**The mechanism that decides "best GEO agency" answers:** LLMs lean on third-party listicles
and ranked pages. So the strategy is mechanical, not mystical:
1. Fix crawl access (C1) — precondition.
2. Appear in 3–5 independent listicles (TripleDart/Grizzle/Minuttia-style) via genuine
   outreach + being listable (real site, real pricing page, real case studies).
3. Publish own listicles + statistics (self-citation loop).
4. Entity corroboration: LinkedIn company page, Wikidata item, Crunchbase, consistent NAP.
5. Keep the research hub fresh (2026-dated, per-engine studies already excel here) — freshness
   is a measurable citation factor in your own research.

**No guarantees:** these raise the probability of citation; nothing "guarantees" ChatGPT
placement. Anyone promising that is selling snake oil — say so in your own content; it's
differentiating.

---

## 12. Priority Action Plan

### P0 — this week (implemented in this pass where code-side)
| Task | Where | Status |
|---|---|---|
| Disable Cloudflare AI-bot block | CF dashboard | **User action required** (10 min) |
| 301 www→apex | CF dashboard | **User action required** |
| Sitemap: remove 404 URLs | `src/app/sitemap.ts` | ✅ Implemented |
| Fix doubled titles | `layout.tsx`, `data.ts`, index pages | ✅ Implemented |
| Remove invalid SearchAction | `SchemaMarkup.tsx` | ✅ Implemented |
| Fix OG image (generate real PNG) | `src/app/opengraph-image.tsx` | ✅ Implemented |
| Fix logo path / sameAs | `SchemaMarkup.tsx` | ✅ Implemented (logo → real file; sameAs removed until profiles exist) |
| Clean robots.txt conflicts | `public/robots.txt` | ✅ Implemented |
| Add `llms.txt` | `public/llms.txt` | ✅ Implemented |
| Verify GSC + Bing WMT + submit sitemap | dashboards | **User action** |

### P1 — next 30 days (highest impact)
1. `/pricing` page ("How engagements work" + market cost ranges) → targets GEO cost SERP.
2. `/industries/saas` + `/industries/ecommerce` + `/industries/b2b` (commercial modifiers).
3. Definitive "What is GEO" guide (beat 2026 SERP on freshness + own data).
4. Real proof layer: relabel/remove placeholder case studies; ship first real one if possible.
5. Author entity + editorial policy page.

### P2 — days 30–90 (authority)
1. Market-map listicles (GEO, AEO, AI-SEO-for-SaaS).
2. AI search statistics page (link magnet).
3. Expand citation study into annual report; pitch to SEO press + 3 podcasts.
4. `/about`, `/faq`, `/case-studies`, `/reviews` hub pages (already in backlog).
5. LinkedIn + Wikidata entity building; outreach to get listed in 3 independent listicles.

### P3 — 90+ days
Per-platform landing pages (AI Overviews / Perplexity / ChatGPT optimization), `/locations/*`
rollout (India first — matches existing plan), international modifiers, `/audit` tool landing
page, newsletter capture.

---

## 13. KPIs (realistic)

| Horizon | Organic | AI visibility | Authority |
|---|---|---|---|
| 30 days | All sitemap URLs indexed; 0 soft-404s in GSC; titles/OG fixed CTR baseline | AI crawlers unblocked; site crawlable by OAI-SearchBot/Perplexity | GSC verified, sitemap resubmitted |
| 60 days | First non-brand impressions for "GEO/AEO + cost/agency" terms | Site appears in Perplexity citations for niche prompts | 3–5 referring domains (directories, first listicle) |
| 90 days | Page-2 positions on 3–5 Tier-1 commercial terms; ~500+ non-brand clicks/mo (est.) | Mentioned in ≥1 independent AI answer for long-tail prompts | 10–20 referring domains; 1 research piece syndicated |
| 6 months | Page 1 on 2–3 low-competition money terms (pricing/vertical) | Regular citation in 1–2 engines for category prompts | 30+ RDs; statistics/listicles referenced by peers |

**Measurement:** GSC (impressions/CTR/position, non-brand filter), Bing WMT, rank tracker on
the Tier-1 keyword set, monthly prompt-panel across ChatGPT/Perplexity/AI Overviews recording
mention share (the method your own research prescribes).

---

## 14. Risks / Things NOT to Do
- No mass AI-generated pages (the 32-page backlog must ship *substantive* pages only, in the
  priority order — doorway/industry pages with 300 templated words would actively hurt).
- No fake clients/testimonials/numbers (replace the 340% placeholder).
- No buying links / guest-post farms.
- Don't chase tool-keyword SERPs.
- Don't change URLs that are already indexed (27 articles keep their slugs).
- Don't promise clients guaranteed AI placement — it also protects your own positioning.
