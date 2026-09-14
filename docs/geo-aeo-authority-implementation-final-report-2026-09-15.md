# GEO/AEO Authority Implementation — Final Report (2026-09-15)

Complete execution log for the playbook `docs/geo-aeo-authority-playbook-2026-09.md` against the repo at `promptco.online` (Next.js 16.3.1 · React 19 · Tailwind v4 · OpenNext/Cloudflare).

---

## 1. Executive summary

Prompt&Co. now has a **stable, disambiguated, citable entity layer** where before it had isolated UnstructuredData pages and a broken logo reference.

Implemented in code (all live in the built output):
- One central brand identity source of truth (`src/lib/entity.ts`) → all schema resolved from it.
- A canonical `@id` spine (`promptco.online/#organization`, `#website`, `#webpage`, `#founder`) that a future Wikidata item can attach `sameAs` to.
- An Organization `@graph` emitted on the homepage with a **real, static logo** (`/logo.svg`, replacing the 404-risking `/og-image.png` logo pointer).
- Research articles now render **Article-level structured data with breadcrumbs** (`Organization → WebSite → Article`) plus a visible "By Prompt&Co. Research" byline — the fix for the previous "BlogPosting authored by an Organization" gap.
- Brand disambiguation published on-page (About + FAQ copy) explicitly separating Prompt&Co. (promptco.online) from the unrelated promptco.ai.
- A new India market vertical page (`/industries/india`) built **entirely from stats the repo already published** — no invented data.

Deliberately NOT done (anti-fabrication contract):
- No person-scale `Person` schema (founder identity unknown — gated behind `founderConfig`, stays invisible until a human sets a real name).
- No `sameAs` URLs, no directory/press backlinks, no reviews, no Wikidata item, no external profiles — none of these exist yet; all are prepared as copy + step-by-step plans in the entity-profile and outreach docs.

Passing gates: `tsc --noEmit` clean · ESLint clean on all touched files · `opennextjs-cloudflare build` green · JSON-LD verified present in rendered HTML (homepage `@graph`; article `#website` refs) · India route prerendered.

---

## 2. Code changes

| File | Change | Why |
|---|---|---|
| `src/lib/entity.ts` *(new)* | Single source of truth: `siteLogo`, `entityIds`, `organization`, `externalProfiles` (all empty), `getVerifiedExternalUris()`, `founderConfig`/`founderHasIdentity` | One place for brand identity; schema + UI read from here |
| `src/lib/entity-graph-nodes.ts` *(new)* | JSON-LD node builders: Organization, WebSite, HomeWebPage, Person (null-gated) | Consistent, non-duplicated schema nodes |
| `src/components/schema/SchemaMarkup.tsx` | Rewritten → `EntityGraphSchema` (home `@graph`), `OrganizationSchema`, `WebSiteSchema`, `PersonSchema` (gated), `BreadcrumbSchema`, `FAQSchema`, `ServiceSchema`; all import from entity nodes | Fix dead organization logic + supply `@id`/`logo`; parents no longer duplicate Org/Person |
| `src/components/research/ArticleLayout.tsx` | Rewritten → Article-level `@graph` (Org + WebSite + Article with `@id` = `researchUrl(slug)#article`, `mainEntityOfPage`, image) + `BreadcrumbList`; visible byline; FAQ section in body | Previous "BlogPosting authored by Org, no breadcrumb" was the semantic gap |
| `src/app/page.tsx` | Home renders `<EntityGraphSchema />` (+ Breadcrumb, FAQ) | Verified: `@graph` contains Org/WebSite/WebPage with sameAs/logo correct |
| `src/app/about/page.tsx` | Added "Official identity and domain" disambiguation section | Resolves the promptco.ai collision in human + AI copy |
| `src/lib/data.ts` | FAQ entry "Is Prompt&Co. the same company as promptco.ai?"; `navigation.industries.children` += India; `industries[]` += India | Navigation + content entry points |
| `src/lib/industry-details.ts` | Full `india` market page entry (hero, 4 repo-sourced stats, dynamics, 4 FAQs, related research links to 4 studies) | New Geo-segmented vertical, zero invented stats |
| `src/app/industries/page.tsx` | "these five" → "these verticals" copy fix | Page auto-lists six → copy no longer contradicts |
| `src/components/Footer.tsx` | India link added to industries column; bottom-bar social links render from `externalProfiles` only when real URLs exist | Dead-profile risk avoided; truth-first linking |
| `public/logo.svg` *(new)* | 512×512 gradient tile (magnifer + "P&Co." wordmark) | Static, referenceable logo for schema/socials |
| `public/llms.txt` | Added "Official domain and canonical name: Prompt&Co. — promptco.online"; India page entry | llm.txt anchors identity + India page |

## 3. Why the build/verify sequence matters — extraction check performed

- `grep` on built HTML: homepage `@graph` → `Organization https://promptco.online/#organization`, `logo: https://promptco.online/logo.svg`, `sameAs: none` (correct — no fabricated profiles), founder absent (correct).
- Research pages: `"@id":"https://promptco.online/#website"` present in SSG article HTML.
- `/industries/india.html` prerendered with its full content.
- Footer bottom bar renders only `Sitemap` (profile links correctly no-op while `externalProfiles` are empty).

## 4. Assets & monitoring you now own

- `scripts/citation-monitor/create-snapshot.mjs` — regenerates a **100-row foundational CSV** (20 prompts × 5 engines) for the weekly panel.
- `snapshots/citations-2026-09-14.csv` — baseline template (rows empty = record real answers only).
- `docs/ai-citation-monitor-2026-09.md` — KPI definitions (`mention share`, `citation share`, `disambiguation score`, `competitor shadow`), 3×-run variance protocol, scoring.
- `docs/geo-aeo-authority-outreach-2026-09.md` — 12 directly actionable targets (Clutch, GoodFirms, UpCity, Sortlist, DesignRush, AgencySpotter, The Manifest, Semrush Directory, TechRound, Featured, Qwoted, trade-press pitches) + **paste-ready** bios (50/100/250), founder bio placeholder flagged `[MANUAL]`, evidence URLs, anchor text.
- `docs/geo-aeo-entity-profile-plan-2026-09.md` — step-by-step to stand up LinkedIn, X, GBP (eligibility-gated), Crunchbase, Wikidata; exact copy; the exact fields in `src/lib/entity.ts` to fill after each is real.
- `docs/geo-aeo-competitor-monitor-2026-09.md` — what to capture weekly, counter-move library, honest baseline (previously no tracking).
- `docs/geo-aeo-90-day-plan-2026-09.md` — 3-sprint execution plan with owners + measurable KPI targets by day 30/60/90.

## 5. Manual actions required (humans, priority order)

1. **Founder identity decision → Person schema.** Decide the public founder persona; only then fill `founderConfig` in `src/lib/entity.ts` (name + sameAs). Until then the Person node renders nothing by design.
2. **LinkedIn company page** (create, verify promptco.online site ownership, paste 100-word bio) → fill `externalProfiles.linkedin`.
3. **X profile** (create, canonical name + promptco.online in bio) → fill `externalProfiles.twitter`.
4. **Crunchbase** — claim/verify; fill `externalProfiles.crunchbase`.
5. **Wikidata** — create item with real references per plan; fill `externalProfiles.wikidata`.
6. **GBP** — confirm eligibility (virtual operator may be ineligible); if eligible, service-area profile → fill `externalProfiles.googleBusinessProfile`.
7. **Directories** — submit the prepared asset pack to the 12 targets; record true status.
8. After each fill: `npx tsc --noEmit`, rebuild (`npm run build`), re-verify `sameAs` present in `.next/server/app/index.html`, re-run branded prompts in the citation monitor and log movement.

## 6. Impact table (before → after)

| Lever | Before | After |
|---|---|---|
| Logo reference in schema | `/og-image.png` (static file missing → 404/failed extraction) | `/logo.svg` static file, verified in rendered HTML |
| Org `@id` | none (dead replaces) | `promptco.online/#organization` fixed spine |
| Org `sameAs` | empty object passed to schema | filtered-out until real (no dead URLs) |
| Article semantics | BlogPosting, Org author, no breadcrumbs | Article `@graph` (Org→WebSite→Article), breadcrumbs, byline |
| Person/founder | dead schema code | gated, zero-risk until identity exists |
| promptco.ai ambiguity | unresolved in copy | About FAQ + FAQ page + about section reset it |
| India reach | absent | nav entry + page + footer + llms.txt + sitemap auto-entry |
| Monitoring | none | 100-row panel + protocol + baseline |
| Third-party base | none | 12 target tracker + paste-ready assets |

## 7. Risks & safeguards

- **Fabrication risk** — locked down: every URL/document referenced is real within the repo; all external claims are gated on existence; founder identity is unforced and documented as pending.
- **Schema bloat/duplication** — single source (`entity.ts`/`entity-graph-nodes`); page parents no longer duplicate Org/Person; verified only one Org node in rendered home.
- **AI-bot indexing** — robots.txt unchanged (allows all); Cloudflare managed AI-bot block left **OFF** (note in profile-plan doc).
- **Deprecation drift** — FAQ schema usage kept minimal and mono; `PublishDate`/freshness hooks on research; monitor re-checks engine behavior monthly.

## 8. Regression check

- `npx tsc --noEmit` — pass.
- ESLint all touched files — pass.
- `npm run build` (opennextjs-cloudflare) — pass; every route + research slug + `industries/india` prerendered.
- Live HTML extraction — `@graph`/breadcrumbs present; footer no-op’s until profiles exist.

## 9. Next 10 actions (in order)

1. Commit + push → CI deploys (verify live at promptco.online).
2. Create LinkedIn company page; fill `externalProfiles.linkedin`.
3. Create X profile; fill `externalProfiles.twitter`.
4. Run week-1 citation panel → fill `snapshots/citations-2026-09-14.csv` (or regen with today's date).
5. Submit prepared assets to Clutch + GoodFirms + UpCity + Sortlist.
6. Claim/verify Crunchbase.
7. Create minimal Wikidata item with promptco.online reference.
8. Establish Person `founderConfig` once identity confirmed.
9. Commit each profile-add as its own commit; rebuild + verify `sameAs` live each time.
10. Day-30 review gate per `docs/geo-aeo-90-day-plan-2026-09.md`.

## 10. Honest caveats

- This is code + process + prepared content. **External accounts, directory listings, reviews, backlinks and the Wikidata/founder items require human action**, and the playbook's promise depends on completing them.
- The citation-monitor CSVs are templates for real observations — a single AI-era panel reading is probabilistic; do not read authority or absence from one run.
- Two prior repo quirks noted for a future session: home `Industries.tsx` still lists some links that may 404 (pre-existing, out of scope); `npm run lint` at repo root OOMs in this environment (use per-file ESLint or raise heap).
- `.env.local` contains secrets; it was never read and should stay untracked.