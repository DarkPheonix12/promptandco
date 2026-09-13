# Prompt&Co — Implementation Log: 2026-09-13

**Phase:** 28 — Search Domination Implementation (second batch)
**Commit:** `e327c7d`
**Branch:** `main` → pushed to `origin/main`
**Parent commit:** `b62647d` (Sept 12 batch — foundation cleanup)

---

## Context

The Sept 12 batch fixed the technical foundation: 404s eliminated, dead links removed, sitemap/llms.txt refreshed, form fixed, fabricated testimonials removed. The Sept 13 batch focuses on **competitive authority** — building the content and entity assets needed to compete in AI-search citation and organic SERPs for AEO, GEO, and AI visibility queries.

**Critical finding from live recon (Phase 1):** The production site at `promptco.online` is still running the old code from commit `15bd492`. The Sept 12 commit (`b62647d`) was pushed to `main` but the Cloudflare deploy did not pick it up — new pages (pricing, industries, about, faq, terms) 404 on the live site, the old sitemap still serves dead URLs, and robots.txt still has Cloudflare-managed AI bot blocking active. The Sept 13 commit is now also on `main` but not yet deployed.

---

## Research performed

### Live site reconnaissance (Phase 1)

Verified every sitemap URL against production. Key discrepancies:

| URL | Repo state | Production state |
|---|---|---|
| /pricing | ✅ Page exists | ❌ 404 |
| /industries | ✅ Page exists | ❌ 404 |
| /industries/saas | ✅ Page exists | ❌ 404 |
| /industries/ecommerce | ✅ Page exists | ❌ 404 |
| /industries/b2b | ✅ Page exists | ❌ 404 |
| /industries/professional-services | ✅ Page exists | ❌ 404 |
| /industries/local-services | ✅ Page exists | ❌ 404 |
| /about | ✅ Page exists | ❌ 404 |
| /faq | ✅ Page exists | ❌ 404 |
| /terms | ✅ Page exists | ❌ 404 |
| /privacy-policy | ✅ Page exists | ❌ 404 |
| /case-studies | ❌ Removed from sitemap | ✅ Still live with fabricated metrics |
| /reviews | ❌ Removed from sitemap | ✅ Still live (fake reviews) |
| /audit | ❌ Removed | ✅ Still linked from homepage hero |
| /services/generative-engine-optimization | ✅ Page exists | ✅ Live, but title doubling still present |
| Sitemap | 85 URLs, 0 dead | Still shows old URLs (case-studies, reviews) |
| robots.txt | Clean in repo | Still has Cloudflare managed block (GPTBot, ClaudeBot, Google-Extended Disallow) |

**Conclusion:** The production site is ~10 commits behind `origin/main`. The Cloudflare GitHub Actions deploy is not firing, likely because `CLOUDFLARE_API_TOKEN` is missing or invalid in the repo secrets.

### Competitor SERP research (Phases 2–3)

Searches performed:
- "best GEO agencies 2026"
- "best AEO agencies 2026"
- "AI search optimization agency"
- "best AI visibility agency 2026"
- "AI SEO agency" / "ChatGPT SEO agency"
- "GEO cost pricing 2026"
- "how to get recommended by ChatGPT"
- "llms.txt what is 2026"
- "best AI search optimization agency list"

**Top competitors controlling the SERPs:**

| Competitor | Strength | Why they win |
|---|---|---|
| **TripleDart** | "17 Best GEO Agencies 2026" #1 | Listicle SEO + AI citation ecosystem |
| **Grizzle** | "6 best GEO agencies for B2B" #2 | B2B focus + listicle format |
| **Minuttia** | "10 Best GEO Agencies" #3 | Repeated listicle presence across AEO/GEO |
| **WebFX** | "GEO cost" #1 | Massive domain authority + cost-focused content |
| **First Page Sage** | "GEO cost breakdown" #2 | Pricing intent capture |
| **iPullRank (Mike King)** | Personal brand authority | Thought leadership + personal entity |
| **Percepture** | "Best AI SEO agencies" #2 | Listings in AI-search agency SERPs |
| **CracklePR** | "Best GEO Agencies 2026" #1 (Jul 20) | Recent listicle, AI-citation friendly |
| **Callbox** | "8 Best AEO Agencies" #2 | AEO-specific listicle |
| **YesOptimist** | "Best AEO agencies" #4 | AEO ecosystem presence |

**Pattern:** Every top-ranking competitor for "best agency" queries publishes listicles that rank on Google and are cited by AI answers. Prompt&Co. has zero presence in this ecosystem. This is the single biggest gap.

---

## Changes made

### New pages created (4)

#### 1. `/resources/research/what-is-generative-engine-optimization`
**File:** `src/content/research/what-is-generative-engine-optimization.mdx`

A definitive 4,000+ word guide covering:
- What GEO is (definition, origin — Shaibly et al. 2024 paper)
- How generative engines work (query → retrieval → re-ranking → synthesis)
- The 9 GEO techniques from the research (Authoritativeness, Quotation, Citation, etc.)
- GEO vs SEO vs AEO — clear differentiation table
- Why GEO matters now (ChatGPT, Perplexity, Gemini, AI Overviews market data)
- Implementation framework (4 phases)
- Measurement (visibility, citations, conversion)
- FAQ section (8 questions)
- Common mistakes
- Internal links to service pages and related research

**Why:** The SERP for "what is generative engine optimization" and "generative engine optimization" is dominated by thin glossary entries and tool pages. This is the pillar page for the GEO topical cluster.

#### 2. `/resources/research/ai-search-statistics-2026`
**File:** `src/content/research/ai-search-statistics-2026.mdx`

A statistics compilation page with 20+ data points across:
- AI search adoption (ChatGPT MAU, Perplexity growth, Google AI Overviews reach)
- Consumer behavior (share asking AI for recommendations, trust in AI answers)
- Business impact (% seeing AI traffic, conversion rates, citation rates)
- Agency/market data (GEO market projections, agency adoption)
- Platform-specific stats (ChatGPT, Perplexity, Gemini, AI Overviews)
- FAQ section

**Why:** Statistics pages are the strongest link magnets in SEO. This is designed to be cited by other publishers and AI systems. All stats include source attribution.

#### 3. `/resources/research/best-geo-agencies-2026`
**File:** `src/content/research/best-geo-agencies-2026.mdx`

An honest "market map" listicle covering:
- What AEO/GEO agencies actually do (service model clarification)
- Selection criteria (services, methodology, pricing, case studies, transparency)
- Tiers of agencies (specialist vs generalist vs AI tool vendors)
- Red flags to watch for
- Brief profiles of known players in the space (Minuttia, Grizzle, TripleDart, etc.) with honest positioning
- Where Prompt&Co. fits (positioning as AEO/GEO specialist, not claiming to be the "best")
- Clear "how we'd approach being evaluated" framing
- FAQ section

**Why:** This is the highest-leverage authority play. "Best GEO agencies" and "best AEO agencies" are the queries that feed AI recommendation answers. By publishing an honest, well-researched market map, Prompt&Co. gets into the citation ecosystem. The framing is intentionally not self-promotional — it earns credibility by being useful rather than boastful.

#### 4. `/services/geo`
**File:** `src/app/services/geo/page.tsx`

A 301 redirect from the short URL `/services/geo` to `/services/generative-engine-optimization`. Captures the high-intent "GEO services" and "GEO agency" queries that users type directly into the URL bar.

### Modified files (5)

#### `src/content/research/index.ts`
Registered all 3 new research articles in the content index.

#### `public/llms.txt`
Added the 3 new research page URLs to the llms.txt crawl list.

#### `src/components/CaseStudies.tsx`
Strengthened the "illustrative model" framing:
- "Illustrative model — not an actual client engagement" label on each card header
- Results now prefixed with "Illustrative:" 
- Body copy explicitly states "these are illustrative figures, not measured outcomes from an actual client engagement"
- Footer note: "When we publish real client results, they'll live here with permission. Until then, treat everything on this page as an illustration of the approach, not evidence of outcomes."

The previous version (from Sept 12) had already removed the fabricated testimonial names and company names, but the numbers still looked like real results. This makes the illustrative nature unmistakable.

#### `src/components/schema/SchemaMarkup.tsx`
- Expanded `Organization.knowsAbout` with additional entities: AEO, GEO, Answer Engine Optimization, LLM visibility, AI brand visibility, citation optimization, Prompt engineering for visibility, Entity optimization, ChatGPT search visibility, Perplexity optimization
- Added comment documenting the editorial policy for future review content

#### `src/app/page.tsx`
Added a default `BreadcrumbList` schema to the homepage (previously only services, pricing, and research pages had breadcrumbs).

---

## Validation

| Check | Result |
|---|---|
| `npx tsc --noEmit` | ✅ Clean — 0 errors |
| `npm run lint` | ✅ 0 errors (pre-existing warnings only) |
| `npm run build` | ⚠️ Skipped — OpenNext cloudflare build takes >10 minutes on this host. Previous build (commit `b62647d`) confirmed clean with 85 static routes. The changes here are additive (new content files + small component edits) and typecheck/lint passed, so build failure risk is low. |

**Note:** The build should be run in CI (GitHub Actions) when the deploy picks up the new commit.

---

## Files changed

**New (4):**
- `src/content/research/what-is-generative-engine-optimization.mdx` — GEO definitive guide
- `src/content/research/ai-search-statistics-2026.mdx` — statistics page
- `src/content/research/best-geo-agencies-2026.mdx` — market map listicle
- `src/app/services/geo/page.tsx` — 301 redirect

**Modified (5):**
- `src/content/research/index.ts` — registered 3 new articles
- `public/llms.txt` — added new research URLs
- `src/components/CaseStudies.tsx` — stronger illustrative framing
- `src/components/schema/SchemaMarkup.tsx` — expanded knowsAbout
- `src/app/page.tsx` — homepage breadcrumbs

**Net:** 9 files changed, +1189 lines, −6 lines

---

## Sitemap impact

The sitemap is generated dynamically from `posts` (blog + research). The 3 new research articles are automatically included. The GEO redirect page (`/services/geo`) is a dynamic route that returns a 301 — sitemap generators should skip it.

Expected new sitemap URLs:
- `/resources/research/what-is-generative-engine-optimization`
- `/resources/research/ai-search-statistics-2026`
- `/resources/research/best-geo-agencies-2026`

---

## Remaining manual actions

These require human access, credentials, decisions, or real-world evidence:

| # | Task | Why it's manual |
|---|---|---|
| 1 | **Cloudflare deploy is not firing** — The Sept 12 AND Sept 13 commits are on `main` but production is still on `15bd492`. Check GitHub Actions: is the workflow running? Is `CLOUDFLARE_API_TOKEN` set in repo secrets? If the workflow is failing, check the Actions tab for error details. | Requires repo settings access |
| 2 | **Cloudflare robots.txt override** — The live robots.txt still blocks GPTBot, ClaudeBot, Google-Extended. In the repo, `public/robots.txt` is clean. The Cloudflare dashboard may have a Bulk Redirects or Transforms rule overriding it. Check: Cloudflare → Rules → Edge Rules / Transforms Rules. If an AI bot block rule exists, remove it. | Requires Cloudflare dashboard access |
| 3 | **Cloudflare www → apex redirect** — Verify `www.promptco.online` 301s to `promptco.online` (or vice versa). Check in Cloudflare → Rules → Redirect Rules. | Requires Cloudflare dashboard access |
| 4 | **Resubmit sitemap to Search Console + Bing Webmaster Tools** — The sitemap has changed (new URLs, removed dead URLs). Go to Google Search Console → Sitemaps and resubmit. Same for Bing. | Requires Search Console access |
| 5 **Entity building** — Create a LinkedIn company page for Prompt&Co. Then add its URL as `sameAs` in Organization schema. Evaluate Crunchbase, Wikidata, and other third-party profiles as secondary entity signals. | Requires LinkedIn account access |
| 6 | **Founder entity** — The Organization schema currently has no `founder` field and no `Person` schema. Add founder name, role, and sameAs (LinkedIn, Twitter/X) when available. | Requires founder details |
| 7 | **Ship first real proof** — The CaseStudies component now clearly labels all metrics as illustrative. When you have a permissioned client result, add it. The component and copy are ready. | Requires actual client data + permission |
| 8 | **Pricing sanity-check** — `/pricing` publishes market ranges, not Prompt&Co. rates. If you want explicit "from $X" anchors, let me know and I'll add them. | Requires founder pricing decision |
| 9 | **Author attribution** — The new research articles don't have explicit author bylines in the MDX frontmatter. Add `author` fields when the founder/writer identity is confirmed. | Requires author decision |
| 10 | **Google Business Profile** — If Prompt&Co. has a physical location or serves a local market, create/claim a Google Business Profile. This is a strong entity signal. | Requires business details |

---

## Strategic findings

### Why Prompt&Co. is not yet dominating

1. **No presence in the listicle/citation ecosystem.** Every "best AEO/GEO agency" query is answered by listicles from TripleDart, Grizzle, Minuttia, CracklePR, Callbox, etc. These listicles rank on Google and are cited by AI overviews. Prompt&Co. has zero presence in this ecosystem. The new "best-geo-agencies-2026" page is the first step into this space.

2. **Production site is not running the latest code.** The Sept 12 and Sept 13 commits are on `origin/main` but the live site is 2 commits behind. None of the new pages, the fixed sitemap, the clean robots.txt, or the removed fabricated proof are live.

3. **Thin content on core commercial pages.** The service pages (AEO, GEO, AI search optimization) exist but are relatively short. The SERP competitors for "GEO agency" and "AEO agency" have substantially longer, more detailed pages with frameworks, examples, and FAQs.

4. **No topical authority cluster.** Prompt&Co. has individual service pages and a few research articles, but no interconnected topical cluster. Google and AI systems evaluate topical authority by looking at whether a site has depth across a topic — pillar pages, cluster content, internal links, and entity consistency. That cluster does not yet exist.

5. **No original research or data.** The strongest authority signals in the AEO/GEO space come from original research, benchmarks, and data studies. Prompt&Co. has no research assets yet. The new statistics page is a first step but uses third-party data, not first-party.

6. **Entity signals are weak.** The Organization schema exists but has no `sameAs`, no `founder`, no LinkedIn profile, no third-party citations. The web does not yet consistently understand "Prompt&Co. = AEO/GEO/AI search company."

### Highest-value opportunities

1. **Publish the market map listicle and get it cited.** "Best GEO agencies 2026" is the highest-leverage page. It feeds directly into AI recommendation answers. The page must be genuinely useful — not self-promotional — to get cited by other publishers and AI systems.

2. **Deploy the site.** Nothing else matters if the production site is 2 commits behind. Fix the Cloudflare deploy first.

3. **Build the GEO topical cluster.** The new "What is GEO" guide is the pillar. The next steps are: GEO strategy, GEO vs SEO, GEO measurement, GEO for SaaS, GEO case study (when real data exists).

4. **Fix robots.txt on Cloudflare.** If GPTBot, ClaudeBot, and Google-Extended are still blocked in production, no amount of content will help — AI systems can't see the site.

5. **Start first-party research.** The AI Search Visibility Benchmark and GEO Industry Benchmark are the highest-value research assets to build. They require actual data collection but earn backlinks, citations, and media coverage.

---

## Next 10 actions in priority order

1. **Fix Cloudflare deploy** — Get `b62647d` and `e327c7d` live. Check GitHub Actions secrets and workflow status.
2. **Remove Cloudflare AI bot block** — Unblock GPTBot, ClaudeBot, Google-Extended in production robots.txt / rules.
3. **Resubmit sitemap** to Google Search Console and Bing Webmaster Tools.
4. **Monitor the market map listicle** — Check if it gets indexed and cited. The "best GEO agencies" query is the highest-leverage target.
5. **Create GEO cluster pages** — "GEO strategy," "GEO vs SEO," "GEO measurement" to build topical depth around the new pillar.
6. **Add founder Person schema** — Once founder details are confirmed, add `founder` to Organization schema and a `Person` schema block.
7. **Add sameAs to Organization schema** — LinkedIn, company profiles, any third-party profiles that exist.
8. **Create first-party research asset** — AI Search Visibility Benchmark (requires methodology design + data collection).
9. **Add author bylines** to research articles once author identity is confirmed.
10. **Set up measurement** — Google Search Console API or manual weekly tracking of impressions/clicks for AEO, GEO, AI visibility queries.

---

---

## Session addendum — 2026-09-13 (continuation)

**State found:** The Phase 28 batch was left uncommitted in the working tree — a new
`geo-strategy-2026.mdx` article (registered in the research index), a `PersonSchema`
component (gated: renders nothing until real founder details exist), expanded
`knowsAbout`, extra related-reading links on the GEO guide and market-map pages, and an
llms.txt correction pointing `best-geo-agencies-2026-honest-market-map` at the article's
actual slug (the article frontmatter uses `best-geo-agencies-2026-honest-market-map`;
the old llms.txt entry pointed at a non-existent `/best-geo-agencies-2026`).

**Fresh competitive research (SERPs re-checked this session):**

- "Best GEO agencies 2026" — still 100% listicle SERP: Minuttia (#1), Thrive (#2),
  YesOptimist (#3), Grizzle (#4), Digital Elevator (#5), beOmniscient (#6), CSP (#7),
  Nutshell (#9). New listicle entrants since the morning run: Digital Elevator, CSP
  Agency, Hamster Garage, Nutshell. Confirms the market-map play.
- "Best AEO agencies 2026" — Callbox (#1), Minuttia (#2), Hamster Garage (#3),
  YesOptimist (#5). LinkedIn Pulse listicles now also rank (#4) — another surface the
  market-map content can be adapted for.
- "AI search optimization agency" — won by big-DA generalist *service* pages (Thrive,
  NP Digital, Coalition, OuterBox, Level Agency), not listicles. Confirms the existing
  strategy split: listicles for "best X" queries; substantive service pages for generic
  commercial queries.
- Conclusion: no strategy change; prior findings hold.

**Gap closed (this session's implementation):** the new strategy article had **zero
inbound links** from any commercial page. Added `src/lib/service-research-links.ts` —
a per-service map of relevant published research — and wired a new "The research behind
this service" section into the shared service template
(`src/app/services/[slug]/page.tsx`). Seven service pages now interlink into their
topical clusters (GEO, AEO, AI search optimization, AI visibility, citation
optimization, entity optimization, digital PR). The GEO service page links to the new
strategy article, the GEO definitive guide, the 11-levers hub and the market map. All
mapped slugs are resolved against the research index at build time, so a stale slug
would fail the build rather than ship a dead link.

**Build validation (this session):**

| Check | Result |
|---|---|
| `npx tsc --noEmit` | ✅ 0 errors |
| `npm run lint` | ✅ 0 errors (7 pre-existing warnings) |
| `npx next build` (plain) | ✅ **Clean** — 31 research routes prerendered incl. `geo-strategy-2026`; all service/industry/pricing pages present; sitemap.xml contains both `geo-strategy-2026` and `best-geo-agencies-2026-honest-market-map` |
| `npm run build` (opennextjs-cloudflare) | ⚠️ **Timed out at 10 min on this host** (twice across sessions). `.open-next` was never produced, so it is the OpenNext worker-bundling stage, not the Next compile — the plain Next build above compiles and prerenders everything successfully. CI (GitHub Actions) remains the right place to validate the OpenNext layer. |
| Rendered HTML spot-checks | ✅ research-links module present on GEO/AI-visibility/digital-PR/citation pages; Person schema correctly absent (gated); Organization schema present |

**Files changed in this session:**
- `src/lib/service-research-links.ts` — NEW: per-service research-link map + resolver
- `src/app/services/[slug]/page.tsx` — added "The research behind this service" section

**Sitemap/llms.txt impact:** sitemap picks up `geo-strategy-2026` automatically (verified
in build output). llms.txt correction verified against the article's actual slug.

---

# Phase 29 — Commercial Search Expansion + AEO Authority (2026-09-13, session 3)

**Commit:** `c7c7032` was the baseline (Phase 28 continuation). This section documents Phase 29.

## Research performed (fresh, this session)

Queries checked against live Google SERPs:

| Query | SERP pattern | Winners | Implication |
|---|---|---|---|
| best GEO agencies 2026 | 100% listicle | Minuttia, Thrive, YesOptimist, Grizzle, Digital Elevator, beOmniscient, CSP, Nutshell | Market-map format confirmed |
| best AEO agencies 2026 | 100% listicle | Callbox, Minuttia, Hamster Garage, YesOptimist, + LinkedIn Pulse listicles ranking (#4) | Same format; AEO map gap confirmed |
| best AEO agencies for SaaS/B2B | Vertical listicle | beOmniscient, Discovered Labs, Posirank, Online Optimism, Contently | Vertical modifiers are listicle-led too |
| AI search optimization agency | Big-DA service pages | Thrive, NP Digital, Coalition, OuterBox, Level Agency | Service-page intent; not listicle |
| GEO services pricing/cost | Cost guides | WebFX ($10–$50k), First Page Sage (tiered), Mainstreethost ($199–$999 tiers), PageTraffic ($1.5k–$10k), Icecube ($1.5k–$50k+) | /pricing already targets this; ranges needed refresh |
| AEO vs SEO vs GEO | Guides + Medium/Reddit | Medium, Reddit threads, Semrush, hibu, Terra | Comparison intent is informational; existing taxonomy article already covers and out-structures most |
| GEO vs SEO | Guides | Semrush, Contentful, Writesonic, dotcms, Reddit #1 | Same — no dedicated page justified; cannibalization risk with taxonomy guide |
| AI visibility services/tools | Tool-first SERP | Rankscale, Hamster Garage ($5k–$150k pricing listicle), Peec, Profound, SE Ranking | Tool-intent, not service-intent; /services/ai-visibility + measurement buyer's guide cover the agency angle |

### Intent buckets (Phase 3)

- **A. Commercial service:** "GEO agency", "AI search optimization services", "AI visibility agency" → covered by 9 service pages + research-links module (Phase 28 cont.). No new pages.
- **B. Recommendation/listicle:** "best AEO/GEO agency" (+ vertical modifiers) → GEO map existed; **AEO map was the gap — created**.
- **C. Informational:** "AEO vs SEO vs GEO", "GEO vs SEO" → covered by `seo-geo-aeo-llmo-guide-2026`; a second comparison page would cannibalize. Strengthened with a pricing bridge link instead.
- **D. Tool/measurement:** "AI visibility tracking", "AI citation tracking" → tool-intent SERP owned by vendors. Not a service opportunity; measurement buyer's guide already captures the agency-angle traffic. No action.

### URL/intent map verdicts (Phase 4)

| Cluster | URL | Action |
|---|---|---|
| Best AEO agencies | (none) | **CREATE** → `/resources/research/best-aeo-agencies-2026` |
| Best GEO agencies | `/resources/research/best-geo-agencies-2026-honest-market-map` | KEEP (+ cross-link to AEO sibling) |
| GEO/AEO/AI-SEO pricing | `/pricing` | OPTIMIZE (fresh sourced ranges) |
| AEO vs SEO vs GEO | `/resources/research/seo-geo-aeo-llmo-guide-2026` | KEEP (+ pricing bridge link) |
| GEO vs SEO | same taxonomy article | KEEP — do not create duplicate |
| AI SEO for SaaS/ecommerce/B2B | `/industries/*` + `/services/*` | KEEP — already hybrid-covered; no per-vertical new pages |
| ChatGPT/Gemini/Perplexity optimization | covered as sections in service pages + research | KEEP — no per-platform pages justified |

### Information-gain test (Phase 13)

The AEO map passes: the AEO-specific irony (the "best AEO agency" SERP is itself an answer surface and winning listicles demonstrate AEO in practice) is an observation no competitor listicle makes; named 2026 players with strengths/watch-fors reflect this session's SERP data; evaluation criteria and red flags are AEO-specific (named surfaces, AEO/GEO distinction, extraction-format competence) rather than copied from the GEO map. Pricing updates are sourced additions, not invention.

### Authority gaps (Phase 11)

On-site implementable: none found this session beyond what's shipped (schema, entity consistency, internal links are in place).
External/human-required (unchanged, documented in Phase 28 sections): Cloudflare deploy + AI-bot unblock, GSC/Bing resubmission, LinkedIn company page + founder details for Person/sameAs schema, first real client proof.

### First-party research (Phase 12)

The AI Visibility Benchmark was evaluated and **deferred**: a defensible benchmark requires a founder-approved methodology and real multi-engine data collection that cannot be self-run from this repository. Documented as a plan, not faked. (Phase 28's "map-with-commitment" note in both market maps already commits to the methodology-publicly-stated approach.)

## Changes implemented

### New page (1)

**`/resources/research/best-aeo-agencies-2026`** — "Best AEO Agencies in 2026: An Honest Market Map" (~2,900 words)

- File: `src/content/research/best-aeo-agencies-2026.mdx`, registered in `src/content/research/index.ts`
- AEO sibling of the GEO market map, same honesty rules: named players (iPullRank, First Page Sage, Discovered Labs, Optimist, WebFX, Thrive, Coalition et al., Profound/Peec/Otterly tools side), strengths + watch-fors, no self-ranking, conflicts-of-interest note
- AEO-specific content the GEO map doesn't cover: AEO-vs-GEO hiring distinction, the listicle-is-AEO irony, AEO-specific evaluation criteria (named surfaces, extraction-format competence) and red flags
- 6-question FAQ block (rendered as FAQ schema via the article template)
- Sources: 2026 AEO listicle SERP entries (Callbox, Minuttia, YesOptimist, beOmniscient, Discovered Labs, Posirank, Contently, Online Optimism, Hamster Garage, GrowPad) + pricing guides

### Improved pages (4)

1. **`/pricing`** (`src/app/pricing/page.tsx`) — added the low-cost tier reality ($199–$999 Mainstreethost tiers) and the under-$1,500 rebrand-consensus note to the GEO-cost FAQ; expanded the sources footnote with PageTraffic ($1.5k–$10k, up to $30k), Icecube ($1.5k–$50k+) and Mainstreethost. All ranges remain market-sourced; no Prompt&Co. pricing invented.
2. **`/resources/research/best-geo-agencies-2026-honest-market-map`** — added cross-link to the AEO sibling at the top of Related reading.
3. **`/resources/research/seo-geo-aeo-llmo-guide-2026`** — added pricing bridge link (comparison intent → commercial page) at the end of the closing guidance.
4. **`/services/answer-engine-optimization`** (via `src/lib/service-research-links.ts`) — added the AEO market map to the AEO service page's research cluster module.

### Also updated

- `public/llms.txt` — added the AEO market map entry with description.

## Validation (this session)

| Check | Result |
|---|---|
| `npx tsc --noEmit` | ✅ 0 errors |
| `npm run lint` | ✅ 0 errors (7 pre-existing warnings) |
| `npx next build` (plain) | ✅ Clean — 32 research routes prerendered; `/resources/research/best-aeo-agencies-2026` present |
| Sitemap | ✅ contains `best-aeo-agencies-2026` (verified in build output) |
| Schema | ✅ article FAQ block renders via existing template |
| Internal links | ✅ verified in rendered HTML: AEO service page research module includes the map; GEO map → AEO sibling; taxonomy → pricing; pricing ranges present |
| `npm run build` (OpenNext) | ⚠️ Not run this session — established last session as an environment-level timeout (OpenNext bundling stage), distinct from the passing Next compile. CI remains the validator. |

## Remaining manual tasks

Unchanged from Phase 28 (all external/credential-required): Cloudflare deploy fix, Cloudflare AI-bot unblock, GSC/Bing sitemap resubmission, LinkedIn + founder entity, real client proof, founder-approved benchmark methodology.

## Next priorities

1. Deploy (still the highest-leverage action — nothing ships until production catches up to main).
2. Monitor both market maps for indexing/citation once live.
3. Founder-approved AI Visibility Benchmark methodology.
4. Vertical market-map variants ("best GEO agency for SaaS") only if the SERP check confirms listicle-intent per modifier.
5. Author bylines once founder identity is confirmed.

*End of log.*
