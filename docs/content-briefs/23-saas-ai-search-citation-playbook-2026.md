# Brief #23 — SaaS Vertical Playbook: The Two-Pipeline AI Search Strategy

Status: researched → brief. Private working document.

## Working title
The SaaS AI Search Playbook: Two Citation Pipelines, One Vertical

## Slug
`saas-ai-search-citation-playbook-2026`

## Targeting
- Primary query: "SaaS AI search" / "GEO for B2B SaaS" / "SaaS ChatGPT citations" / "software AI visibility" / "get SaaS mentioned by AI"
- Intent: informational/commercial (SaaS founders, product marketers, growth leads, SEO/GEO practitioners for software). Bridges F2 buyer shortlist. Spoke of hub 005.

## Evidence base (fresh 2026)

**Anchor — Analyze State of AI Search in B2B (Aug 4 2026):** 22,295 AI answers, 460 B2B prompts, 115,843 citations, 37 orgs, 12 months. AI Mode cites 97.4% of answers, Perplexity 93.2%, ChatGPT 68.3%. ChatGPT draws 68.8% of citations from brand websites (Website-first); Perplexity and AI Mode split evenly across websites/lists/editorial. Directory cited → focal brand mention +23.9pp; brand website cited → +15.8pp; community cited → −9.2pp. Naming brand in prompt = +60.4pp. YouTube in 9.15% Perplexity answers vs 0.013% ChatGPT.

**Anchor — VisibleIQ (Apr 1 2026, 75 queries, 2,020 citations):** ChatGPT GPT-5.4 = 74.6% first-party (vendor site) citations on product queries; Perplexity/Gemini/Claude = 79% third-party. ChatGPT runs `site:` fan-out queries to vendor pricing/product pages (Writesonic: vendor citations jumped 8%→56% between GPT-5.3 and 5.4). Format by stage: listicles 50% consideration, comparisons 42% evaluation, pricing guides 30% decision (80% contain numbers), how-tos 46% implementation. Blogs = 66.9% of all citations.

**Anchor — Overthink Group/Amadora (Jul 14 2026, 1,263 solution-aware prompts, 250 niches):** G2 network (G2+Capterra+GetApp+Software Advice) = 8% of total citations; G2.com single most-cited domain 5.8%; Perplexity contributed 71% of G2 citations. 70.8% of all citations = "best/top" listicles; 51.6% include "2026". ChatGPT 14.5% and Perplexity 11.3% citations = synthetic spam sites. Google AIO+Gemini cite vendor domains ~3× the rate of ChatGPT/Perplexity. Reddit only 1.4% in niche B2B.

**Anchor — GoGoChimp (Aug 2 2026):** Only 36 brands hold top-100 AI visibility across 4 engines; average AI Presence Score 56.9/100. G2 supplies 55% of AI-cited SaaS references. 11% B2B SaaS domain overlap across engines. AI-referred SaaS traffic converts at 14.2%. G2 acquired Capterra/Software Advice/GetApp (Feb 5 2026, ~$110M): 6M verified reviews, 200M annual buyers, 55–58% of global software-review influence in one entity. 45% of buyers say review-site citations are the most confidence-inspiring signal in an AI answer.

**Anchor — Pepper Content (Jul 9 2026):** ~12% of ChatGPT citations on software recommendations come from the vendor's own domain; 88% outside. Every ChatGPT-cited tool had Capterra reviews (99% G2, 78.8% Wikipedia). Review score weakly correlated; Domain Rating stronger. G2 Best Software Awards ≈ 60% of G2 citations in LLM answers. Bots can't run JS — client-rendered sites invisible. 50–75 reviews for meaningful LLM visibility. dateModified ≤ 3 months ≈ 3× citations in fast categories.

**Anchor — Poyar/Growth Unhinged (Sep 2 2026, 7,600 pricing responses, Cloud 100):** Commercial-intent ChatGPT queries rose 13.9%→19.2% YoY. Company pricing pages in 46% of responses but primary source only 12%; only 57% of pricing pages AI-readable. External pricing sources: Vendr 18.7%, Reddit 18.6%, G2 15.9%. ChatGPT cites vendor pricing first 38% of time; Google tools bury it. Plaid "pricing answer stack": billing docs 70%, pricing 64%, FAQs 50%.

**Anchor — Siteline/Kaufman (Jun 18 2026, 100 B2B products, 534 agent sessions):** ~1/3 of agent pricing sessions hit access errors; error sessions pulled 58% of content from third-party vs 12% for clean runs; 5% abandoned vendor site for 100% third-party; 14% disclose no pricing; Zendesk client-side pricing → blog fallback; Supabase single SSR page 24KB = best-in-class.

**Anchor — Digital Applied (Apr 26 2026, 500 SaaS pages):** Top quartile cited 8.4× more than bottom half. Comparison sections +38% (ChatGPT +51%); llms.txt +24%; SoftwareApplication schema +18%; answer-format H2s +22%. DA correlates only +0.18 with citation rate; 8-point structural rubric +0.71.

**Anchor — Gracker (Feb 2026, 10,000 citations, 57 queries):** ChatGPT 3–4 brands/answer (market leaders); Perplexity ~13 brands (mid-market opportunity); <4% of citations from vendor sites; review multiplier (Perplexity): G2 67% inclusion, Capterra 54%, TrustRadius 41%; G2 threshold ~100 reviews @ 4.5+. Vendor "best X" listicles ≈ 40% of SaaS citations on Perplexity/AIO but ChatGPT filters (predicted 60–80% decline). Vertical specialists: Pipedrive 23% generic "CRM" vs 81% "simple CRM for sales teams"; Monday 89% generic vs 67% agency niche.

**Anchor — AreYouFoundByAI/Distribb (Jul 23 2026, 1,001 high-intent SERPs):** "brand vs rival" own page wins 33%; "brand alternatives" own page 16% (84% someone else's listicle). "brand pricing" own page 81%. Median winning page = 21 backlinks; #1 vs #2 = 82 vs 6. FAQ schema on only 7–11% of winners.

**Anchor — Rankeo (May 2026, 142 sites, 240 prompts):** ChatGPT 3.8 distinct brands/answer (hardest to break in, top share 24%); Claude 5.1 (long-form room, most attainable); Perplexity long-tail. >100 doc pages = 2.3× Claude citations; comparison pages cited 3.7× more on ChatGPT.

## Original angle / contribution
1. "Two pipelines, one vertical": SaaS is the only vertical where the engine your buyers most use (ChatGPT) is Website-first (68.8% brand-site citations, 74.6% first-party) while Perplexity/Gemini/AIO are third-party-first (79%) — two separate operating pipelines, one budget.
2. "The G2 consolidation is structural, not noise": one company now holds 55–58% of global software-review influence; 100% Capterra presence among cited tools; review layer is load-bearing infrastructure for SaaS retrieval.
3. "The two-thirds surrender": brands own "brand pricing" (81%) but not "brand vs rival" (33%) or "brand alternatives" (16%) — yet comparison pages are the #1 ChatGPT citation magnet (3.7×, +51%). Publish your own honest vs/alternatives pages.
4. "Pricing is the negative blind spot": client-side rendering and hidden pricing hand the answer to Vendr/Reddit/G2 (18.7/18.6/15.9%); the pricing answer stack (page + FAQ + billing docs + AI-readable infra) fixes it; Supabase's 24KB SSR page is the template.
5. "37 of 36": only ~36 brands clear top-100 across engines while 65%+ of the category is functionally invisible (score <57); the gap closes on a structural rubric (+0.71) not domain authority (+0.18).

## SEO / AEO / GEO strategy
- H1: "The SaaS AI Search Playbook: Two Citation Pipelines, One Vertical"
- FAQ (5): What share of SaaS AI citations come from review sites? / Why does ChatGPT cite vendors directly but Perplexity doesn't? / Own site or third-party content first? / Why does AI cite third-party pricing instead of my pricing page? / What should I do when I don't control the comparison?
- Internal links: hub; F2 answer economy; #12 Reddit; #21 formats; #20 zero-click (14.2% conversion); #10 schema; #18 YouTube.

## Phase 21 score
7.7 (reclaims SaaS vertical wedge bridging F2)

## Writing credo checklist
One h1; exactly 5 FAQ (meta.faq); DefinitionCard opener; ~1600-1800 words; attribute every stat; no fabrication; datePublished 2026-09-11; raw `<` → `&lt;`; meta requires tags + dateModified + readingTimeMinutes.