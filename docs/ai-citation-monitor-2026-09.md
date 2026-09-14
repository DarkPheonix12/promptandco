# AI Citation Monitor — operational spec (Sep 2026)

Tracks the single KPI the playbook says matters most: **share of answer on a fixed prompt panel across the major AI engines, weekly.**

## What we are measuring

Whether Prompt&Co. is *mentioned*, *cited*, and *correctly represented* when real buyers and researchers run the categories' money prompts — and whether the brand resolves to us rather than the unrelated `promptco.ai`.

## Panel

`scripts/citation-monitor/create-snapshot.mjs` generates an empty CSV snapshot:

```bash
node scripts/citation-monitor/create-snapshot.mjs [YYYY-MM-DD]
```

- Panel: **20 prompts** (branded / commercial / definitional / benefit / India-market) × **5 engines** (ChatGPT, Perplexity, Google AI Overviews/AI Mode, Gemini, Microsoft Copilot).
- Cadence: **weekly, same day + approximate timezone**, to keep deltas comparable.
- AI answers are non-deterministic. For each prompt run the query **3×** per engine and record the **majority behavior**; note variance in the Notes column. Single-run readings are unreliable (the site's own multilingual study flagged instability as a property of the systems).

## Snapshot fields

| Column | Definition |
|---|---|
| Prompt | Canonical prompt text (fixed — do not edit between weeks) |
| Engine | One of the five engines |
| Date | ISO date (YYYY-MM-DD) |
| Brand mentioned? | Yes / No — Prompt&Co. appears in the answer at all |
| Brand cited? | Yes / No — a promptco.online URL is attached as a source |
| Brand position | 1st / 2nd / 3rd / n/a — where the brand sits in the recommendation |
| URL cited | The exact URL the engine attached (promptco.online page or other) |
| Competitor cited | Yes / No — is a competitor (see competitor monitor) cited instead? + name |
| Citation type | brand-domain / listicle / review / community / press / none |
| Answer text/snippet | Paste a 1–2 sentence excerpt of what it said about the brand |
| Change from previous week | ↑ / ↓ / → vs last snapshot; + short note |
| Notes | Variance across the 3 runs, engine quirks, model version if visible |

## Where rows come from — never fabricated

- **Manual:** a person runs the 20 prompts in the 5 engines and fills the CSV. Best-effort: prioritize ChatGPT + Perplexity + AI Overviews initially; add Gemini/Copilot as budget allows. The site's own AI-visibility demo tool on the homepage (`AIVisibilityAudit`) can double as a screening pass.
- **API (when licensed access exists):** OpenAI Responses/Assistants API, Perplexity Sonar, Gemini API, Bing Copilot demo APIs. For each: run the prompt with `include sources` where supported and record cited URLs. **Do not stream/pretend — only record real outputs.**

## Scoring

Customer-friendly comfort metrics computed from the CSVs:

- **Brand mention share** = rows with "Brand mentioned? = Yes" ÷ total rows.
- **Citation share** = "Brand cited? = Yes" ÷ total rows.
- **Disambiguation score** = how many branded-prompt rows correctly describe Prompt&Co. (promptco.online, AI search agency) vs confuse us with promptco.ai. Target 100% by day 90.
- **Competitor shadow** = % of commercial rows where a competitor is cited and we are not.

## Who owns it

| Task | Owner |
|---|---|
| Generate snapshot + run panel | Marketing (or agency tooling) |
| Fill rows, keep answers paste-only (no editing) | Marketing |
| Monthly trending + share-of-answer report | SEO/Content lead |
| Cache cleanups (clear quotes, old snapshots) | Dev (quarterly) |

## Reads that make this credible

- Prompt panel results feed the "measurement" section of every client/internal report.
- Cross-reference with Google Search Console impressions growth on money queries and with referrer data from AI surfaces.

## Baseline (Sep 2026, pre-work)

- Brand named in branded prompts: **no consistent resolution** — `promptco.ai` frequently surfaces instead.
- Citation share: **≈0%**; referring domains: **≈0**.
- Rebaseline monthly against the first snapshot after the entity build (LinkedIn/X/Wikidata/sameAs) goes live.