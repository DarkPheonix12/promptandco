# Brief 011 — llms.txt: The 137K-Site Audit, Who Actually Reads It, and When It Still Matters

Status: researched → brief. Companion to article #11. Private working document (no secrets).

## Working title
llms.txt in 2026: The 137,000-Site Audit, Who Actually Reads the File, and When It Still Matters

## Slug
`llms-txt-2026-evidence`

## Targeting
- Primary query: "does llms.txt matter" / "llms.txt AI search" / "llms.txt study 137k"
- Primary intent: informational + practitioner decision ("should I publish it?"); commercial (undoes wasted-effort spend; redirects to evidence-based levers)
- Supporting queries: "who reads llms.txt", "llms.txt vs robots.txt", "97% llms.txt zero requests", "llms.txt Claude-Code GPTBot", "WebMCP", "llms.txt blind spots 2026"
- Funnel stage: awareness → interest → consideration

## Why now (evidence base — Phase 1 re-verification)
- **Ahrefs (Linehan & Guan)** — published **June 15, 2026** (not 2025-11-10; that is stale page metadata — re-verified), dataset = May 2026, 137,210 domains in Ahrefs Web Analytics + Bot Analytics:
  - 28% publish ≈ 38,000 domains (upper bound; technical panel)
  - **97% of published files zero requests in May 2026** (≈1,100 domains / 22K requests total)
  - Of files served: 96% bot requests; **77% of bots are not AI tools**
  - **AI = 19.5%** (most generous reading; fetch ≠ read): agents & agentic infra 10.5% (Claude-Code largest of any AI bot; IbouBot), training crawlers 5.3% (GPTBot 4.51%, ClaudeBot 0.80%, DeepseekBot 0.02%), retrieval bots **1.1%** (OAI-SearchBot, PerplexityBot), assistants ~2%
  - **12% from tools studying the standard** (GEO/AEO tools 5.8%, llms.txt discoverability bots 3.6%); SEO audit tools ~21.7% top bucket; **Slackbot fetched more than PerplexityBot**
  - **Zero AI bots request missing llms.txt** — 404s 98% human, AI share zero
  - Lighthouse llms.txt audit ≈ 22 requests ≈ **~1 in 1,000**
- **SE Ranking (Nov 2025)** — ~300,000 domains, 10.13% adoption; no correlation with AI citation frequency; removing the llms.txt feature *improved* XGBoost model accuracy. Clean null.
- **Originality.ai tracker (Jun/Jul 2026)** — 4,088 llms.txt (Jun 2025) → 36,120 (May 2026) = **8.8x**; 38,980 incl. llms-full.txt + ai.txt across 3M+ sites.
- **OtterlyAI (90-day)** — 62,100+ AI bot visits; /llms.txt got 84 visits, ~3x worse than average content pages.
- **EZY Research (27 Apr–19 Jul 2026, 12 weeks, 83 live sites)** — robots.txt vs llms.txt fetches: OpenAI 3,990 vs **7**; Anthropic 3,120 vs **9**; PerplexityBot 775 vs **0**; Googlebot 5,125 vs 67; **Meta-ExternalAgent 172 vs 193** (Meta reads llms.txt more than robots.txt).
- **Digital Applied / server-log study (Apr 13, 2026)** — ~900 domains, 7 months (Sep 2025–Apr 2026): 1,227 family-path requests; 88% of estate zero; top requester commercial aggregator (Dataprovider 64.7%), Chrome 31.9%; **zero verified frontier-lab crawlers**.
- **Common Crawl (Jul 2026 crawl, published Aug 31, 2026)** — 6,563,125 sampled URLs, 69.8% 404, 19.61% 200, 11.72% served a text body for /llms.txt; 584,107 files analyzed; denial policy in file: CCBot 26.23% denied, GPTBot 20.00%, ClaudeBot 18.88%, Google-Extended 16.87%; prompt-injection instruction language present in some files.
- **Google positions** — AI-search guide "MYTHBUSTING" (May 15, 2026; clarified Jun 15): llms.txt not required for Search; Mueller (Jun 2025/Jun 2026): "no AI system currently uses llms.txt", "not done for search", "a temporary crutch, perhaps to save some tokens"; contrast: **Chrome Lighthouse 13.3.0 (May 7, 2026)** agentic-browsing audit in default config; **WebMCP** (agent-to-site structured tool contracts) moving to origin trial in Chrome 149; A2A protocol (Apr 2025).
- Attribution rule: Ahrefs = anchored study, cited as "Ahrefs, June 2026 (May 2026 logs)". Every independent study gets its own line.

## Competitor analysis (Phase 20 initial) & gap
Competitors seen: Ahrefs blog (primary), SEJ, Rabbit Rank, Foundgrove, Perkins Growth, Primo Interactive, llmtxt.info, BetterAISearch, Digital Applied, ppc.land, Originality.ai, EZY.
- Shape of the market: (a) single-study recaps that breathlessly repeat "97%"; (b) vendor "do it anyway" pieces; (c) Google-vs-Chrome "contradiction" takes.
- **Gap:** nobody assembles the *convergent multi-method evidence* (server logs × RCT-grade prediction × crawl tracking × live 404/200 splits) into a decision framework, and almost none connect the finding to (1) the agent/docs boundary, (2) WebMCP/A2A as the real agent standard, and (3) a "what to do instead" allocation. Competitors flip-flop between "dead" and "future-proof" — we occupy the measured middle, consistent with our schema (#10) and crawler (#2) verdicts.

## Original angle / contribution
1. **"Read, not weighted"** — flags-fly-but-no-lift, explained structurally (map vs control file; opt-in not opt-out; nobody probes 404s).
2. **The reader hierarchy that inverts expectations** — agents > training > auditors ≈ everyone > retrieval bots; Slackbot > PerplexityBot; Meta's crawler reads it.
3. **Convergence table** — four independent methods, same null (Ahrefs logs, SE Ranking model, OtterlyAI crawl, EZY logs; Digital Applied supplement).
4. **Where it genuinely pays** — agent/docs layer today; WebMCP horizon; "if you publish, do it right" (map not marketing; linked; no injection prompts; spec conformance per Common Crawl).
5. **Decision framework** — four-box allocation; measure via your own logs (base rate 97%).
6. Phase 16 search-readiness comparison table (llms.txt vs robots.txt vs sitemap vs WebMCP vs schema vs visible facts).

## SEO / AEO / GEO strategy
- H1 contains "llms.txt" + "2026". SEO title mirrors working title.
- Entities to cover: llms.txt, llms-full.txt, robots.txt, GPTBot, OAI-SearchBot, PerplexityBot, ClaudeBot, Claude-Code, Google-Extended, Meta-ExternalAgent, WebMCP, A2A, Lighthouse, Ahrefs, Common Crawl, Mueller, Slackbot, coding agents, retrieval bots, training crawlers, prompt injection.
- FAQ (5): does it help citations? who reads it? should I publish? does Google use it? vs robots.txt.
- Internal links: hub `ai-citation-levers-2026` (gatekeepers section), spoke `ai-crawlers-2026-readiness` (robots/technical), spoke `schema-ai-citations-2026-evidence` (sibling verdict), measurement `ai-visibility-measurement-buyers-guide` (track own logs).
- No duplicate angles with #2/#10: #2 = crawl access/parseability (robots); #10 = schema causality; #11 = llms.txt & machine-readable files specifically.

## Phase 21 score
8.5 — highest evidence density of remaining candidates; unique "who reads" story; direct sibling to the #10 narrative that performed well.

## Writing credo checklist
- One h1; exactly 5 FAQ; `<DefinitionCard>` opener; ~1500–1900 words; every stat attributed inline; Sources & notes at end; no fabrication; no ranking promises; honest uncertainty labels; datePublished `2026-09-11`; raw `<` in tables → `&lt;`.