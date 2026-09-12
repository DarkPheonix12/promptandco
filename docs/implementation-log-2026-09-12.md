# Implementation Log — September 12, 2026

Companion to `docs/seo-strategy-2026-09.md` (strategy) and
`docs/site-audit-2026-09.md` (baseline). Every change below was implemented,
typechecked (`tsc --noEmit`), linted (0 errors), built (`next build`, 85 static
routes) and runtime-verified (`next start` + curl: sitemap, schema, API
contract). Claims about third-party data cite published 2026 studies; nothing
was fabricated.

## P0 — Critical

### 1. Built the 5 highest-value industry pages + hub (12 nav/footer/sitemap 404s → real pages)

- **Files:** `src/lib/industry-details.ts` (new), `src/app/industries/page.tsx`
  (new), `src/app/industries/[slug]/page.tsx` (new)
- **Problem:** Header, homepage, Footer and sitemap promised 12 industry URLs
  that 404'd — the largest single block of dead links on the site, and the
  commercial-modifier landing pages (`AI SEO for SaaS`, `GEO for ecommerce`…)
  identified as low-competition opportunities in the strategy.
- **New state:** Five substantive pages — SaaS, E-commerce, B2B,
  Professional Services, Local Services — each with cited 2026 market data
  (G2, SparkToro, Ahrefs, Red-engage, 5W, SearchAtlas, Cairrot, Overthink
  Group, GoGoChimp, Digital Applied), industry-specific dynamics, prioritized
  programs, KPI definitions, vertical-specific FAQs, related services and
  research links. Hub page lists the five and states honestly that other
  industries are served but not yet written up. Service schema + FAQPage
  schema + BreadcrumbList on every page.
- **Rejection rationale:** The seven Tier-3 industries (healthcare, finance,
  legal, real estate, education, hospitality, technology) remain unbuilt —
  no industry-specific evidence or content depth exists yet; templated pages
  would violate the quality standard (§35 of the brief).
- **Validation:** `next build` renders all 5 SSG pages; schema verified in
  rendered HTML (`Service`, `FAQPage`, `BreadcrumbList`, `Question/Answer`);
  single-brand title `AI Search Optimization for SaaS | Prompt&Co.` confirmed.

### 2. Built /pricing — the "cost" SERP entry (H4 from audit §5 backlog)

- **File:** `src/app/pricing/page.tsx` (new)
- **Problem:** No pricing page. "GEO/AEO cost/pricing" is a low-competition,
  high-intent cluster the strategy flagged (WebFX owns it with thin content);
  also an AI-recommendation precondition — assistants favor vendors with
  transparent pricing signals.
- **New state:** Leads with a direct answer (retainers ~$2k–$15k/mo, audits
  ~$1k–$4k, tools ~$50–$1k/mo) sourced to named 2026 guides (OutreachBloom,
  RevvGrowth, The Remarkable Agency, Strategi.is, XSeek), labeled as market
  ranges rather than our price list. Includes a five-step engagement model
  (free assessment → fixed-fee audit → foundation → growth → monitoring-only)
  and 5 pricing FAQs with FAQPage schema. No invented Prompt&Co. prices.
- **Validation:** 200 via `next start`; title/one-brand rule confirmed.

### 3. Removed fabricated testimonials (E-E-A-T integrity, flagged in the brief)

- **Files:** `src/lib/data.ts`, `src/components/Testimonials.tsx`
- **Problem:** `testimonials` shipped two invented quotes with fabricated
  names, roles, companies ("Rajesh Kumar @ TechScale Solutions", "Priya Sharma
  @ CloudFirst India") and 5-star ratings under the heading "Real results from
  real brands." The user brief explicitly flags fabricated proof as
  unacceptable; for an agency selling trust this is the single worst liability
  on the site.
- **New state:** Replaced with four verifiable proof points (research-first
  method, baseline measurement, no-guarantees stance, operator backgrounds) and
  an honest framing: "We're a young agency… the moment we have client results
  we can publish, they'll appear here as real case studies with real numbers."
  Real testimonials get added only with genuine, permissioned evidence.
- **Validation:** Component compiles; `testimonials` export no longer exists;
  grep confirms no fabricated names remain.

### 4. Fixed the homepage audit form — it never submitted anything (conversion bug)

- **Files:** `src/components/AIVisibilityAudit.tsx`, `src/app/api/contact/route.ts`
- **Problem:** The homepage "What's AI saying about your brand today?" form
  only set local state — it never POSTed, so visitors believed they'd
  requested an audit while nothing was sent. Silent lead loss on the primary
  conversion surface.
- **New state:** Form POSTs to `/api/contact` with loading/error states; API
  updated to accept optional email/company (mini-form collects website +
  market), sends the founder notification either way, and emails the report
  only when an address exists.
- **Validation:** Live POST via curl with the mini-form payload returned
  `{"success":true}`; response then verified against rate limiter.

## P1 — Highest growth opportunity

### 5. Built /about, /faq, /privacy-policy, /terms (4 more 404s → real pages)

- **Files:** `src/app/about/page.tsx`, `src/app/faq/page.tsx`,
  `src/app/privacy-policy/page.tsx`, `src/app/terms/page.tsx` (all new)
- **Problem:** Footer + FinalCTA linked all four; all 404'd. Legal pages were
  a compliance gap (the contact form collects PII); /faq and /about are
  E-E-A-T and AI-answer surfaces ("who operates this company?", "how much
  does it cost?", "can they guarantee results?").
- **New state:**
  - `/about` — explicit positioning, working principles (evidence over
    promises, no guaranteed placements, white-hat only, teach don't gatekeep),
    editorial standards, honest team section.
  - `/faq` — homepage FAQ set + 12 extended buyer-intent questions (pricing,
    AEO vs GEO vs SEO, guarantees, timelines, AI-crawler policy, schema value)
    with FAQPage schema; deduped.
  - `/privacy-policy` — accurate to the actual data flows (Cloudflare hosting,
    Resend email, D1 rate-limit counters, Groq/Gemini report drafting with
    scraped-website content only; no sale of data, no model training on
    submissions).
  - `/terms` — free-assessment disclaimer, acceptable use, IP with attribution
    license for research quoting, liability cap, governing law (India).
- **Validation:** All four render in build; FAQ schema present on /faq.

### 6. Eliminated all remaining dead internal links (was ~17, now 0)

- **Files:** `src/components/Footer.tsx`, `src/components/Header.tsx` (via
  `data.ts` nav), `src/components/CaseStudies.tsx`,
  `src/app/services/page.tsx`, `src/components/Industries.tsx`,
  `src/components/FinalCTA.tsx` (via `/about` now existing)
- **Changes:**
  - Footer: removed `/resources/guides`, `/resources/glossary`, `/resources`
    hub, `/reviews`, `/case-studies` (all unbuilt → 404); added Industries
    hub, Pricing, FAQ; legal links kept and additionally surfaced in the
    brand column; sitemap link added.
  - Nav (`data.ts`): Resources parent now points to `/resources/blog`
    instead of the unbuilt `/resources` hub; Guides/Glossary dropdown entries
    removed; Case Studies nav entry removed; Pricing added.
  - `/services` hub: "See the results" → `/case-studies` (404) replaced with
    "See pricing" → `/pricing`.
  - Homepage CaseStudies section CTAs (2× `/case-studies` 404s) rerouted to
    `/contact` with honest labels.
- **Validation:** Automated source scan: every `href="/…"` in `src/` now maps
  to a built route (only `/` remained by design).

### 7. Sitemap now ships the real IA (+11 URLs, 0 dead)

- **File:** `src/app/sitemap.ts`
- **Change:** Added `/about`, `/pricing`, `/faq`, `/privacy-policy`, `/terms`,
  `/industries` + 5 industry pages. Unbuilt routes (case-studies, reviews,
  guides, glossary, resources hub, locations) remain excluded by design.
- **Validation:** `curl /sitemap.xml` shows all 11 new URLs; every URL in the
  sitemap corresponds to a built route.

### 8. Truth-in-advertising pass on homepage claims (audit H5 continuation)

- **Files:** `src/components/CaseStudies.tsx`, `src/components/Hero.tsx`
- **Changes:**
  - Case-study card titles reframed from declarative fake results ("SaaS
    Company Increases AI Mentions by 340%") to explicit "Illustrative model:"
    framing; section heading now "What an engagement actually looks like."
  - Hero demo: fake "Live Analysis" badge → "Sample report"; fake
    `promptco.online/audit` chrome URL → "AI visibility demo". The demo
    widget's fabricated score/mention numbers are now clearly framed as a
    product sample, not a live readout.
- **Validation:** Compiled; no behavioral changes beyond labeling.

### 9. Article OG images now use the real generated PNG

- **Files:** `src/app/resources/blog/[slug]/page.tsx`,
  `src/app/resources/research/[slug]/page.tsx`
- **Change:** Article OG images pointed at `/og-image.svg` (SVG is not a
  valid OG image format on most platforms — previews break). Switched to the
  generated `/opengraph-image` PNG (1200×630) that already exists at root.
- **Validation:** Build passes; metadata emits the PNG URL for all 54 article
  pages.

### 10. llms.txt updated with the new IA

- **File:** `public/llms.txt`
- **Change:** Added Pricing, Industries hub + 5 verticals, About, FAQ; added
  three more research links (SaaS playbook, Answer Economy, Local citations).
  This is the machine-readable map AI assistants are told to read.

### 11. Misc code hygiene surfaced by validation

- `src/components/Services.tsx`, `Industries.tsx`, `Testimonials.tsx`:
  `<a>` → `next/link` for internal navigation (lint errors; proper
  client-side nav + prefetch).
- `src/app/privacy-policy/page.tsx`: removed unused import.
- `data.ts`: added `seoMetadata.industries` / `seoMetadata.pricing` (single
  source for hub metadata, per the no-doubled-brand rule).

## Not implemented (deliberate)

| Item | Reason |
|---|---|
| 7 Tier-3 industry pages | No unique evidence or content depth yet — templated pages would fail the brief's §35 test. Build when vertical research exists. |
| `/case-studies`, `/reviews` | Requires real client evidence. Fake proof is worse than no proof. |
| `/resources` hub, `/guides`, `/glossary` | Lower traffic priority than the commercial cluster; queued P2. The nav no longer promises them. |
| Market-map listicles ("Best GEO agencies…") | Highest-leverage authority play but needs founder input on honest methodology and competitor treatment before publishing. P2, brief drafted in strategy §9. |
| Cloudflare www→apex 301, AI-crawl control verification, GSC/Bing WMT | Dashboard actions — require user access (see remaining manual tasks). |

## Remaining manual tasks (need human access/decisions)

1. **Cloudflare:** confirm "Block AI bots" stays OFF (the strategy docs
   verified it was fixed live on 2026-09-12 — keep it that way) and add the
   www→apex 301 redirect rule.
2. **Search Console + Bing WMT:** resubmit the regenerated sitemap; monitor
   indexing of the 12 new URLs.
3. **Real proof:** ship the first permissioned case study and/or testimonial
   as soon as one exists — the "Proof over promises" section now explicitly
   invites this.
4. **Entity building:** create the LinkedIn company page (then add `sameAs`
   to Organization schema), evaluate Crunchbase/Wikidata.
5. **Pricing sanity-check:** the /pricing page publishes market ranges, not
   your rates. If you want explicit "from $X" anchors, they need founder
   sign-off — say the word and I'll add them.
6. **Commit & deploy:** changes are uncommitted in the working tree (same
   state as the prior pass). GitHub Actions deploys on push to main once the
   `CLOUDFLARE_API_TOKEN` secret is valid.

## Validation summary

| Check | Result |
|---|---|
| `tsc --noEmit` | ✅ clean |
| `eslint src` | ✅ 0 errors (2 pre-existing warnings) |
| `next build` | ✅ 85 static routes (73 → 85) |
| Route inventory | +12 (5 industries + hub, pricing, about, faq, privacy, terms) |
| Internal links | ✅ 0 dead (was ~17 incl. 12 industry 404s) |
| Sitemap | ✅ +11 URLs, all built routes |
| Schema on new pages | ✅ Service + FAQPage + BreadcrumbList verified in HTML |
| Titles | ✅ single brand suffix via layout template |
| Homepage form → API | ✅ POST verified end-to-end (202 pipeline incl. rate limiting) |
| Fabricated proof | ✅ removed/replaced with labeled illustrative content |
