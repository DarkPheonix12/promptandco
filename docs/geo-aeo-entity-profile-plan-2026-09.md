# External Entity Profile Plan — LinkedIn · X · GBP · Crunchbase · Wikidata (Sep 2026)

Purpose: plant Prompt&Co. as a **verifiable entity with third-party corroboration** on the exact platforms AI systems use to confirm an organization exists and is credible. Every profile URL added here maps into `src/lib/entity.ts` → `externalProfiles` → `getVerifiedExternalUris()` → Organization `sameAs` + Footer links.

Current state of the entity config (`src/lib/entity.ts`): all five profiles are `url: ""` and are therefore **filtered out of the emitted schema** (`sameAs: none` — verified in the rendered homepage). This is correct behavior: **do not fabricate a single profile.** Fill URLs only after a human creates the real profile and confirms it with the canonical domain promptco.online.

Rule set (non-negotiable, mirrors playbook):
- A URL goes into `externalProfiles` **only** after the account actually exists and is verifiable.
- Every profile must: use the canonical legal-capitalized name **Prompt&Co.**, list **promptco.online**, use **/logo.svg** (512×512) as the avatar, and describe the company as an AI search optimization agency (AEO/GEO/entity optimization/technical SEO/digital PR).
- Never register domestic consumer accounts (e.g., personal Google) or contradict the About-page disambiguation (we are the promptco.online company, unrelated to promptco.ai).
- Founder identity: unknown at repo time. The Person schema (`founder_config`, `foundationPersonNode`) stays inactive until a real name + verified profiles exist. The founder bio placeholder already prepared in the outreach doc must be replaced with real facts before any publication.

---

## 1. LinkedIn (Company page) — highest priority
- **URL placed into** `externalProfiles.linkedin` once live: `https://www.linkedin.com/company/promptandco` — verify on LinkedIn before finalizing the path (may be taken; confirm).
- **Profile copy (paste-ready):**
  - Banner/Headline: `AI search optimization agency — AEO • GEO • entity optimization • technical SEO • digital PR`.
  - Company description = "Company bio — 100 words" from docs/geo-aeo-authority-outreach-2026-09.md.
  - Website: https://promptco.online · Logo: https://promptco.online/logo.svg
  - Industries: Marketing & Advertising; Online Media.
  - Specialties: Answer Engine Optimization (AEO), Generative Engine Optimization (GEO), AI Search Optimization, Entity Optimization, llms.txt & AI indexing, Digital PR.
- **Steps:** (1) create with the profile administrator logged into a separate business LinkedIn identity — do not reuse clickwrap-linked personal accounts; (2) verify website ownership via DNS CNAME as LinkedIn requires; (3) fill About/Specialties per above; (4) add 2–3 employees/roles so it isn't a shell; (5) post the first 2 research studies as company updates (canonical links).
- **Publish content cadence:** 1 research-link post/week (per Efficiency list in the 90-day plan).
- **Required check before committing URL:** open the company page while logged out — must show the canonical site + correct description.

## 2. X/Twitter (professional account)
- **URL** → `externalProfiles.twitter` once live (e.g., `https://x.com/promptandco`; confirm availability).
- **Profile copy:** Name `Prompt&Co.` (use Unicode/setup exactly the canonical capitalization); bio ≤160 chars: `AI search optimization agency. We make brands discoverable, understandable, citable & recommendable in AI search. AEO · GEO · entity · digital PR. promptco.online`.
- **Avatar:** /logo.svg · **Header:** clean gradient tile (reuse AnimatedLogo art) · **Website:** https://promptco.online.
- **Cadence:** share each week's research post + 1 thread/2 weeks on a study's finding (with the canonical link inline). Threads give X a reason to count this as an official account vs an abandoned shell.
- **Note:** never post before founder identity decisions if the profile purports to speak for a named person — keep it company-voice.

## 3. Google Business Profile
- **Eligibility first (manual):** GBP requires a physical location or service-area business. If Prompt&Co. is a virtual/remote operator, it may **not** be eligible (Google's policy on suspended/remote business). Check before investing. Document the decision.
- **If eligible:** category `Internet Marketing Service` (or `Search Engine Optimization`) + service area (list served services: AI search optimization, AEO, GEO, etc.); website promptco.online; logo /logo.svg; hours as real operating hours; no fake photos.
- **URL config** → `externalProfiles.googleBusinessProfile` if GBP publishes a shareable site/profile URL (many profiles only get an internal `g.page` style link; the `g.page` is acceptable to Google but no UI value — include anyway once live).
- **Why it matters:** local "GEO/AEO agency near me" answers in AI Overviews and Gemini dip into GBP for the knowledge panel's authority block. Low priority until LinkedIn/X exist.

## 4. Crunchbase
- **URL** → `externalProfiles.crunchbase` once live. Better data quality: claim via the Crunchbase organizer/claim flow using the official email domain; suggest an admin to verify.
- **Copy:** One-liner `AI search optimization agency (AEO/GEO/entity optimization) serving brands in the India, UAE, UK, US and Canada markets.` Website promptco.online. Founded year: use the real founding year (repo does not contain one spot-checked — confirm with a human; do not guess out of the blue; leave blank if unconfirmed).
- **Funding/seats fields:** leave empty (do not invent).
- **Why it matters:** Crunchbase is a frequently-cited corroborator for "is this company real" verification in Perplexity/ChatGPT.

## 5. Wikidata — the compounding one
- **URL** → `externalProfiles.wikidata` once the item is live.
- **Item structure to propose (all claims need real references):**
  - `instance of (P31): business enterprise (Q4830453)`
  - `official website (P856): https://promptco.online`
  - `logo image (P154): https://promptco.online/logo.svg` (upload to Wikimedia Commons first — never hotlink)
  - `country (P17): India` (subject to legal domicile confirmation — confirm with a human)
  - `services or served industries` via `industry (P452)` or statements if data exists
  - `contact point / email` via `official website` verification snapshot
  - `description (only in the item's language): AI search optimization agency`
- **Proposed labels:** label `Prompt&Co.` → Wikidata disambiguation is what disambiguates us from promptco.ai, so add an alias/redirect if the other project is lexically similar (Wikidata handles lexeme/sitelink separation; propose `Prompt and Co` / `Prompt&Co AI` as aliases).
- **References required on every claim** (Wikidata requires them): the single source of truth is promptco.online (site self-verification) + at least one independent source once available (a directory listing from the outreach doc, or trade press). Until an independent source exists, keep the item minimal and reference the official site.
- **Why it matters:** Wikidata is the canonical entity hub — the fixed `@id` spine we built in `entity-graph-nodes.ts` (`promptco.online/#organization`) aligns exactly with a Wikidata item pattern, giving AI engines a stable identifier to attach sameAs to.

---

## Order of execution (dependency-aware)
1. LinkedIn company page (real) → 2. X profile (real) → 3. Claim/review Crunchbase → 4. Wikidata item (needs earliest independent source — pull one directory listing from outreach first if possible) → 5. GBP subject to eligibility.
Each step: fill URL in `src/lib/entity.ts` (`externalProfiles.<key>.url`), commit, redeploy, re-verify the homepage `@graph` shows the `sameAs` array, then re-run the citation snapshot's branded prompts to measure movement.

## Validation pass (do after EACH profile goes live)
1. `npx tsc --noEmit` clean.
2. Log out + verify the profile shows canonical name, promptco.online, /logo.svg.
3. In the repo: `grep -n "sameAs" .next/server/app/index.html` shows the URLs after a rebuild.
4. Run `node scripts/citation-monitor/create-snapshot.mjs` and fill the 4 branded prompts × 5 engines — confirm the "disambiguation text" now says us, not promptco.ai.

## Anti-fabrication checklist
- No profile URL is added without a screenshot; no "done" status without a recorded @type/Mark dated confirmation.
- No invented founding dates; no invented employee names; no invented reviews; no invented case numbers.
- Founder Person schema remains off until real identity — visible attribution is the company byline "By Prompt&Co. Research" (already live across research pages).