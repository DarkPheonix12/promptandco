# Prompt&Co. — AEO/GEO & Brand-Entity Playbook (September 2026)

Prepared for: dev + marketing teams, promptco.online (repo: `promptco`, branch `main`)
Scope: rank & earn AI citations for branded, commercial, and India queries
Method: live-site audit of the codebase + web research (Sep 2026). Every recommendation carries a confidence label:
**PROVEN** (peer-reviewed/Google-documented) · **STRONGLY SUPPORTED** (controlled vendor studies) · **EMERGING** (growing, conflicting evidence) · **SPECULATIVE** (unverified industry claims).

---

## A. Executive summary

The site is technically strong: robots.txt lets all AI crawlers in, `/llms.txt` exists, the sitemap is clean, metadata is correct, noindex is absent, and the homepage ships Organization/WebSite/Breadcrumb schema. **That is not the problem.**

The problem is that Prompt&Co. does not exist as an entity, authority, or citation anywhere off-site:

1. **Zero off-site entity footprint.** No LinkedIn, X, Google Business Profile, Crunchbase, or Wikidata entry. The Organization schema's `sameAs` array is intentionally empty (`src/components/schema/SchemaMarkup.tsx:62`), the founder Person schema renders nothing (`:16`), and Google has no entity to attach a knowledge panel to.
2. **Brand collision.** Searching "PromptCo" surfaces `promptco.ai`, an unrelated company. Until Prompt&Co. builds its own entity + content with the punctuated brand (Prompt&Co.), the AI corpus and Google will keep resolving the name to the other company. **STRONGLY SUPPORTED — confirmed in live SERPs.**
3. **Zero third-party corroboration.** The Ranqo corpus study (arXiv 2606.20065) found ~78% of AI citations go to corporate sites, but the best-of listicle is the single most-cited *format* (~21%). Prompt&Co. has published its own honest market maps (`best-geo-agencies`, `best-aeo-agencies`) but gets no citations because nothing third-party references the brand. **STRONGLY SUPPORTED.**
4. **No authority signals Google needs for money queries.** Agencies on page 1 for "GEO agency / AEO agency" (GenOptima, TripleDart, Grizzle, Minuttia, beOmniscient, iPullRank, Go Fish Digital, Siege Media, First Page Sage, Intero Digital, Single Grain, WebFX, plus Accucia Softwares in India) rank via listicle ecosystems, domain authority, and founder visibility — not more code.

**The play: fix the two missing primitives — (1) a resolvable brand entity with real profiles + schema, and (2) third-party citations from listicles/press/founder content — then let the already-good technical base convert.**

Priority ranking below (impact / effort), full details in sections C–K.

| # | Opportunity | Impact | Effort | Confidence | Section |
|---|-------------|--------|--------|------------|---------|
| 1 | Create LinkedIn (company + founder) + X; then wire `sameAs` + `@id` + Person schema | High | Low | STRONGLY SUPPORTED | H, I |
| 2 | Wikidata item with 3–4 references + QID in `sameAs` | High | Low–Med | STRONGLY SUPPORTED | I |
| 3 | Google Business Profile (India service-area) + review program | High | Low | PROVEN | I |
| 4 | 12 best-of listicle / directory placements (Clutch, GoodFirms, UpCity, Sortlist…) | High | Med | STRONGLY SUPPORTED | J |
| 5 | Founder-authored content + Person authorship on research articles | Med–High | Med | STRONGLY SUPPORTED | L |
| 6 | AI-citation measurement panel (20 prompts × 5 engines, weekly) | Med–High | Low | PROVEN (required to close the loop) | K |
| 7 | Brand-disambiguation page + consistent "Prompt&Co." naming everywhere | Med | Low | STRONGLY SUPPORTED | I |
| 8 | Breadcrumb + internal links from research → money pages; author entities | Med | Low | EMERGING | H, G |
| 9 | India-localized pages + schema (`areaServed` IN) to own "GEO agency India" | Med | Med | EMERGING | M |
| 10 | Static logo asset for schema (logo ≠ runtime-generated OG PNG) + OG/Twitter sync | Low | Low | EMERGING | H |

---

## B. Methodology & data sources

- **Codebase audit (live):** robots.txt, llms.txt, sitemap.ts, layout.tsx metadata, SchemaMarkup.tsx, service/industry/research page templates, navigation/data files.
- **Live site check:** https://promptco.online renders; H1 "AI Search Optimization Agency"; on-site AI-visibility demo tool live.
- **Web research (Sep 2026):** page-1 SERPs for GEO/AEO/commercial queries, incl. India; AI-platform citation behavior; academic + vendor evidence (see confidence labels).
- **In-repo prior work reused (not duplicated):** `docs/seo-strategy-2026-09.md`, `docs/site-audit-2026-09.md`, `src/content/research/*` (30+ evidence pages — the main authority asset).

Sources of note:
- Aggarwal et al., *GEO: Generative Engine Optimization*, ACM 2024 — **PROVEN**.
- Ranqo corpus study, arXiv 2606.20065 — brand-stature ladder, citation-source and format stats — **STRONGLY SUPPORTED** (preprint, precise).
- *Generative Engine Optimization survey*, arXiv 2607.14035 (45 studies) — **STRONGLY SUPPORTED**.
- Google Search Central, "Creating helpful, reliable, people-first content" — E-E-A-T / trust — **PROVEN**.
- Moz Whiteboard Friday (brand entity), Kalicube/Jason Barnard (knowledge-graph process, ~30 sources for KG confidence, 3.2× KG panel odds for Wikidata-verified brands), Schema App sameAs case study, Ahrefs case study (Wikidata QID indexed same day; KG panel ≤7 days) — **STRONGLY SUPPORTED** (vendor-controlled).
- Zen Media (Apr 2026) PR→AI-citation data — **EMERGING**.

---

## C. Keyword & search-intent matrix

Intent keys: T=transactional · C=commercial investigation · I=informational · H=hub/brand.
Difficulty proxy for this domain: **Low** = winnable in 30–60 days with current DA ~0 once entities exist; **Med** = 60–120 days with citations + content; **High** = 6+ months or heavy authority.

| Keyword | Intent | Vol | Difficulty | Opportunity → Prompt&Co. | Priority |
|---|---|---|---|---|---|
| promptco / promptandco / "prompt & co" | H | Med | High (brand collision w/ promptco.ai) | Own via entity + brand SERP assets; disambiguation page | High |
| promptco ai seo agency | C | Low | Low | Source-of-truth entity pages | High |
| aeo agency | C | High | High | Needs listicle presence + listicle pages | High |
| geo agency | C | High | High | Same two-pronged play | High |
| ai seo agency / ai search optimization agency | C | High | High | FAQ/GGP-style extractable blocks + GBP | Med |
| generative engine optimization agency | C | Med | Med | Own exact-match page + terminology hub | Med |
| answer engine optimization agency | C | Med | Med | Same | Med |
| chatgpt seo services / perplexity optimization | C | Med | Med | Service pages already exist → citation angle | Med |
| geo agency india / aeo agency india | C | Med | Low–Med | Localized pages, `areaServed` IN, India entity | High (low competition) |
| ai seo agency india | C | Med | Med | Same | Med |
| what is geo / what is aeo / geo vs seo | I | High | Med | Cornerstone guides (research corpus exists) | Med |
| best geo agencies / best aeo agencies 2026 | I+C | High | Med | **Already published** (`/resources/research/…`) — needs amplification | High |
| llms.txt / llms.txt implementation | I | Med | Low | Guide + own /llms.txt as live example | Med |
| sameAs schema ai citations | I | Low | Low | Research page covers it → rank once entity set | Low |
| [brand] case study "[ai visibility]" | T | Low | Low | Case-study pages with believable metrics | Low |

Winnable first: brand set, India set, llms.txt/schema informatics, and "best … agencies" promotion. Money-core ("aeo agency") is a 3–6 month play requiring B + J below.

---

## D. SERP competitive tableau (Sep 2026)

Page-1 players for "GEO agency / AEO agency / AI SEO agency" (listicles + agencies):

| Company | Model | Why it ranks | Threat/lesson to copy |
|---|---|---|---|
| GenOptima | $6k–25k/mo GEO service | High-DR, comparison content | Publish comparison + result-led content |
| TripleDart / Grizzle / Minuttia / beOmniscient / CSP / Silverback | GEO/AEO boutique | Listicle ecosystem + founder content | Founder visibility + "best-of" outreach |
| iPullRank (Mike King) / Go Fish Digital / Siege Media / First Page Sage | Agency thought leadership | Founder authority, reputable research | Co-author research; get cited |
| Intero Digital / Single Grain / WebFX | Big agencies | DR, breadth, GBP, reviews | Reviews + GBP now |
| Accucia Softwares (Pune) | India AEO/GEO/AIO | Local India targeting in English | Own "geo agency india" intent |
| — | Listicle roundups (many publishers) | Best-of format = most-cited ~21% | **Submit to these; pitch your listicles to them** |

Implication: the format that wins is (a) listing in third-party roundups, (b) publishing original, citable research, (c) founder authority. Prompt&Co. has research (b) done — missing (a) and (c).

---

## E. Google ranking-factors ↔ site gap analysis

| Factor | Google stance (PROVEN) | Prompt&Co. status | Gap / action |
|---|---|---|---|
| Relevance & topical authority | Core | Strong content (30+ research pages), but clustered under brand-new domain | Interlink money ↔ research; query-matched headings |
| Content quality/helpfulness | PROVEN (helpful content) | Exceeds most competitors | Keep; add extractable answer blocks + question-led formatting |
| E-E-A-T / trust | PROVEN (trust most important) | **Weak** — anonymous bylines, no founder entity, no reviews | Person schema + founder visibility + GBP reviews |
| Entity recognition | STRONGLY SUPPORTED | **Absent** — sameAs empty, no Wikidata/LinkedIn | Entity build-out (I) |
| Backlinks / domain authority | PROVEN | **~0 referring domains** | Listicle + PR + founder content campaign (J) |
| Technical parity | PROVEN (hygiene) | Strong (robots/llms/sitemap/meta ✓, no noindex) | Few fixes only (H) |
| Structured data | EMERGING (no direct lift, but identity layer) | Org/WebSite/Service/Breadcrumb/FAQ ✓; **Person and @id/sameAs missing** | H |
| Freshness | PROVEN | Research carries 2026 dates | Keep a monthly "2026 update" cadence |
| User/UX + speed | PROVEN | Good (static Next.js) | No action |

**Gap verdict:** code is not the constraint; entity, authority/links, and E-E-A-T are. Do not spend another engineering cycle on markup beyond H.

---

## F. AEO/GEO status per AI platform

All AI systems retrieve from the open web the same way: crawl the site (allowed ✓), resolve the entity (absent ✗), find third-party corroboration (absent ✗). That is why you see ~0 citations today.

| Platform | 2026 behavior | Prompt&Co. status | Winning move |
|---|---|---|---|
| Google AI Overviews | Cites high-authority, formatted, entity-backed pages | None | Entity + listicle presence + Q&A blocks |
| ChatGPT | Strong site-source preference (corporate sites ~78% of citations) | None | Be listed in roundups; publish original data |
| Perplexity | Favors explicit, citable, structured sources | None | Same + fast pages + clear methodology on research |
| Bing Copilot / Gemini / Grok / Meta AI | Similar retrieval+entity logic | None | Same 2 primitives + Wikidata |
| On-site demo tool | — | Live (AI visibility demo) | ✓ — unique angle to cite |

---

## G. llms.txt / llms-full.txt — keep, don't overbuild

Current: `/llms.txt` exists and is well structured. **PROVEN/EMERGING**: llms.txt is an opt-in, model-to-site handshake; it helps where other signals exist, rarely enough alone.

Keep exactly this:
- `llms.txt` — short link list (About, Services index, Research index, Contact). ✓ exists.
- Add optionally `llms-full.txt` when all research pages are stable — concise-summary form, not dump.
- Do **not** mirror the whole site; do **not** put marketing copy; keep markdown, keep URLs absolute.
- Long TTL on the file's cache in Cloudflare; keep it reachable without auth. Re-check quarterly after the entity build.

---

## H. Structured data — gap table (from `SchemaMarkup.tsx`)

| Item | Status | Fix | Priority |
|---|---|---|---|
| Organization `@id` node identity | **Missing** | Add stable `@id`: `https://promptco.online/#organization`, reuse identically on every page | High |
| Organization `sameAs` | Empty (intentionally — good gate) | Populate **the day profiles exist** (LinkedIn, X, Wikidata QID, Crunchbase, GBP) | High (gated on I) |
| Person (founder) | Renders nothing (`FOUNDER.name === ""`) | Fill real founder details + LinkedIn/X `sameAs`; ship only real data | High |
| Logo in schema | Points to `/og-image.png` (runtime-generated OG) | Point at a **static** logo asset (new `/logo.png` or existing `/icon`), not the OG route | Low–Med |
| WebSite | Correct, no fake SearchAction | ✓ nothing | — |
| Service / FAQ / Breadcrumb on money pages | Present on services/industries/pricing/faq | Ensure consistent on all money pages incl. localized India pages | Med |
| Breadcrumb on research articles | **Absent** | Add `BreadcrumbSchema` to research + blog templates | Low–Med |
| Author/Person per research article | Author = Organization (blunt) | Mark up real person authorship once founder entities exist | Med |
| Article/@id ↔ Organization/@id link | Missing | Fewer than the above; add after @id spine | Low |

---

## I. Entity / knowledge-graph playbook (the highest-leverage gap)

Ordered; each step unlocks the next. **STRONGLY SUPPORTED** (Kalicube ~30-source KG-confidence model; Ahrefs same-day QID indexing + ≤7-day KG panel; Moz brand-entity model).

1. **Week 1–2 — Profiles that already exist online:**
   - LinkedIn company page + founder personal (5–10 posts, priority "AI search optimization", location India, URL promptco.online).
   - X (same handle as LinkedIn/site; consistent bio using the punctuated name **Prompt&Co.**).
   - Google Business Profile: service-area business covering IN + AE + GB + US, category "Search engine optimization service". Add 3 verified services and start review collection (PROVEN: local + review trust).
   - Crunchbase entry (low effort, high map value).
2. **Week 2–3 — Wikidata item** with typographic name "Prompt&Co.", URL, country, `official website`, `business sector`. Needs references → links from LinkedIn/GBP/Crunchbase/press (create #1–4 first so references exist). Record the QID.
3. **Week 3 — Wire the schema:** `@id` + full `sameAs` (now containing real URLs) + founder Person schema + static logo. Reuse `@id` across every page.
4. **Ambiguity control:** consistently use "Prompt&Co." with the ampersand and "promptco.online"; add a brand-page answer on About addressing the unrelated `promptco.ai` (factual, one line, not a smear). This is what lets Google/AI resolve the name to *you*.
5. **Onward (months 2–3):** reach ~30 corroborating referenced mentions (listicles, press, directory listings) for full KG confidence; then request/knowledge-panel review if one doesn't appear.

**Knowledge-Graph F.A.Q. (from repo meta evidence):** Wikidata has no notability threshold; a well-referenced item works without Wikipedia. Kalicube: Wikidata-verified brands ≈3.2× more likely to earn a KG panel, ≈2.7× more likely AI-Overview cited. This is cheapest strong disambiguation anchor available.

---

## J. Competitor reverse-engineering + citation/PR playbook

The Ranqo format math (best-of listicles ≈21% of citations; corporate sites ≈78%) dictates where to spend PR effort. **Start with self-published assets, then external.**

1. **Self-published (done, amplify):** your own `best-geo-agencies` / `best-aeo-agencies` maps are exactly the format engines cite. Promote them: LinkedIn posts, newsletter, founder X threads.
2. **Submit to third-party roundups (Weeks 2–8):** pitch Prompt&Co. into the ecosystem that ranks/cites — e.g. Clutch top AEO/GEO agency lists, GoodFirms, UpCity, Sortlist, DesignRush, and blog roundups your content already names. Deliverables: 1-pager with services, India+AE/GB/US footprint, 1–2 believable proof points.
3. **Digital PR → AI citations (EMERGING, Zen Media Apr 2026 supports):** 2 press releases in 90 days (differentiate via "we publish the market maps others rank on"), 4+ expert-quote placements (Qwoted/HARO/Featured, agency-marketing beats), founder podcast/guest posts.
4. **Founder visibility (STRONGLY SUPPORTED):** named authorship with credentials + LinkedIn/X is the machine-readable E-E-A-T signal; competitors rank because their founders are entities.
5. **Target pacing:** 10–15 referring domains in 90 days; then verify your own brand appearing in a ChatGPT/Perplexity prompt panel (K).

---

## K. Measurement framework

**Baseline (Sep 2026):** 0 known AI citations; 0 referring domains; no KG panel; brand SERP usurped by promptco.ai.

| KPI | Where | Baseline | 30d | 90d | 180d |
|---|---|---|---|---|---|
| Brand keyword owns 1st result | Google | No | In progress | Yes | Yes |
| Knowledge panel | Google | No | — | Watch | Likely (if 30 sources) |
| sameAs/QID live in schema | Code | No | Yes | Yes | Yes |
| Wikidata item | Wikidata | No | Yes | Yes | Yes |
| Referring domains | Ahrefs/GSC | 0 | 3–5 | 10–15 | 25+ |
| "Best-*" listicle inclusions | Manual | 0 | 2–4 | 6–10 | 15+ |
| AI citation coverage (share of answer on 20-prompt panel × ChatGPT/Perplexity/AI Overviews/Copilot/Gemini) | Fixed prompt tool (or site's own demo tool) | 0 | Track | 1–2% | 5%+ |
| Branded name-resolution to Prompt&Co. vs promptco.ai | GPT/Perplexity "What is PromptCo?" | Wrong entity | Mixed | Mostly correct | Correct |
| GSC organic impressions (money queries) | GSC | Low | + | 2–3× | 5×+ |

Run the prompt panel weekly (fixed 20 business-relevant prompts, 5 engines), log share-of-answer + citation URLs; this is the single most important closed loop.

---

## L. Content & topical authority — next 90 days

1. Founder-authored POV posts (2–3) re-using existing research: e.g. "I audited 12 AEO agencies", "What prompts actually cite" — formats that get quoted.
2. Per-article **Person authorship** once founder entity exists.
3. Question-led formatting + extractable answer blocks on money pages for AI retrieval.
4. /resources/research remains the differentiation engine — link each study from its relevant service page (internal linking now; this is a real gap).
5. Breadcrumb on all research/blog templates (easy, EMERGING hygiene).

---

## M. India & GCC play

"Geo agency india / aeo agency india" is under-occupied (Accucia Pune is the named local competitor; most roundups are global). SERP evidence: competitors apply generic English-India targeting and win by default.

- Service-area schema already lists IN/AE/GB/US (`SchemaMarkup.tsx`) ✓ — build on it.
- Create India-focused landing content + localized GBP; verify GSC geo-reporting; use region-tagged testimonials.
- Cost to win is low because nobody localizes; do it while citations build.
- Confidence: **EMERGING** (based on SERP structure, not a controlled test).

---

## N. 2026 AI-landscape flags (data-backed)

- AI Overviews continues to expand answer surfaces; citation patterns favor entity-backed, formatted pages (STRONGLY SUPPORTED).
- ~78% of citations → corporate sites; best-of ≈21% format share (STRONGLY SUPPORTED, Ranqo/arXiv).
- Wikidata-verified brands: ≈3.2× KG panel odds, ≈2.7× AI-Overview citation odds (STRONGLY SUPPORTED, Kalicube).
- Cross-check the site's own `src/content/research/*` for the fuller 45-study survey (arXiv 2607.14035) before marketing writes headline stats.

---

## O. Technical housekeeping — final checklist (code-level)

- [x] robots.txt: AI crawlers allowed; Cloudflare AI-bot block must stay **off**.
- [x] llms.txt reachable; metadata + canonical set; no noindex anywhere.
- [ ] Add stable `@id` to Organization; reuse across pages.
- [ ] Populate `sameAs` only when real profiles exist (gated: section I).
- [ ] Fill founder Person schema with real data; add per-article author entities.
- [ ] Static logo asset for schema/OpenGraph consistency (logo ≠ OG PNG route).
- [ ] Breadcrumbs on research/blog templates.
- [ ] Internal links: research → money pages; money pages → research.
- [ ] After entity launch: resubmit sitemap, watch GSC for any cover/crawl surprises.

## P. 90-day rollout (dev ↔ marketing handoff)

**Weeks 1–2 (dev + founder):** LinkedIn/X/GBP/Crunchbase/Wikidata; static logo; `@id` spine; schema sameAs + Person once URLs exist; breadcrumbs on research; verify /llms.txt caching.
**Weeks 3–6 (marketing):** submit to 12 roundups/directories; founder POV posts + authorship updates; 2 press releases + 4 expert quotes; India landing localized.
**Weeks 7–12:** push corroborations toward ~30; monthly freshness pass on research; weekly prompt-panel measurement; iterate top-20 keyword pages with answer blocks + FAQ schema; first GBP reviews live.

---

## Q. What NOT to do (guardrails)

- No spam directories, link farms, or PBNs — contradicts the E-E-A-T trust signal that outranks all else (PROVEN).
- No empty schema values — an empty `sameAs`/logo is worse than absent (already coded correctly; keep the principle).
- No fake founder/authorship data before real details exist.
- Do not shift attention back to markup while entity + citations remain zero — that is the mistake the current site state almost makes.
- Do not chase every "2026 AI ranking factor" headline; the two primitives above compound more than any single new schema.

---

## R. One-line summary

> Keep the codebase as-is except H (identity/@id/sameAs/Person + static logo + breadcrumbs), and spend all remaining budget building the entity (I), the third-party citation footprint (J), and the measurement loop (K). That combination — not more technical SEO — is what moves "promptco" and "GEO/AEO agency" SERPs.