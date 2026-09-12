# Prompt&Co. Website Audit — September 2026

Full audit of the live site (https://promptco.online), the codebase routes, the sitemap,
and every internal link. Use this as the working backlog.

## Current state (TL;DR)

- **Only 6 pages exist**: `/`, `/contact`, `/resources/blog`, `/resources/blog/[slug]`,
  `/resources/research`, `/resources/research/[slug]` (27 MDX articles).
- **28 internal links return 404** — the nav, footer, and sitemap promise ~50 pages that
  were never built.
- The contact API works (400 on invalid payload, RESEND + GEMINI secrets configured).

## 1. Pages that exist and work ✅

| Route | Status |
|---|---|
| `/` | 200 — full homepage (hero, services, industries, results, FAQ, audit tool) |
| `/contact` | 200 — form posts to `/api/contact`, validation works |
| `/resources/blog` | 200 — index with 3 prime reads + all posts |
| `/resources/blog/[slug]` | 200 — 27 articles, own canonical URLs |
| `/resources/research` | 200 |
| `/resources/research/[slug]` | 200 — 27 articles, prime reads below |
| `/sitemap.xml` | 200 |
| `/robots.txt`, `/favicon.ico`, `/og-image.svg` | 200 |

## 2. Missing pages — linked from nav/footer/sitemap (all 404) ❌

### Tier 1 — Revenue & conversion critical (build first)
1. `/services` — services hub (footer dropdown parent)
2. `/services/ai-search-optimization` — flagship service
3. `/services/answer-engine-optimization` (AEO)
4. `/services/generative-engine-optimization` (GEO)
5. `/services/ai-visibility`
6. `/services/entity-optimization`
7. `/services/ai-content-optimization`
8. `/services/citation-optimization`
9. `/services/technical-seo`
10. `/services/digital-pr`
11. `/case-studies` — hub ("Proof over promises" section on home already promises this)
12. `/reviews` — social proof (footer + home "Results" section)

### Tier 2 — Trust & credibility
13. `/about` — "Built by operators" section on home links here
14. `/faq` — dedicated FAQ page (home has an FAQ section already; reuse content)
15. `/industries` — industries hub
16. `/industries/saas`
17. `/industries/ecommerce`
18. `/industries/b2b`
19. `/industries/professional-services`
20. `/industries/local-services`

### Tier 3 — Secondary industries (in sitemap only)
21. `/industries/healthcare`
22. `/industries/finance`
23. `/industries/legal`
24. `/industries/real-estate`
25. `/industries/education`
26. `/industries/hospitality`
27. `/industries/technology`

### Tier 4 — Resources & legal
28. `/resources` — resources hub (nav dropdown parent)
29. `/resources/guides` — guides index (footer links it)
30. `/resources/glossary` — glossary (footer links it)
31. `/privacy-policy` — legally required, contact form collects PII
32. `/terms` — legally required

## 3. Gaps beyond 404s (not linked anywhere yet)

33. `/resources/blog/[slug]` pages have no next/prev or related-posts nav beyond prime reads
34. Individual case study detail pages (`/case-studies/[slug]`) — needed once hub exists
35. `/thank-you` (post-form-submit confirmation page) — currently no confirmation UX
36. `/audit` or `/tools/ai-visibility-checker` — dedicated landing page for the homepage
    audit tool (high-intent keyword target)
37. `/pricing` — top agencies publish pricing or "how engagements work" page
38. `/team` — or fold into About; at least one person page for E-E-A-T
39. `/newsletter` — or a subscribe endpoint; blog has no email capture
40. `/changelog` or `/resources/news` — optional; freshness signal for AI crawlers
41. Author/entity pages (`/authors/promptco`) — strengthens entity corroboration
    (matches the Wikipedia/Wikidata thesis in research article #22)

## 4. Technical issues found

| Issue | Severity | Detail |
|---|---|---|
| `www.promptco.online` serves 200 without redirecting to apex | High | Duplicate-host SEO risk; pick one canonical host and 301 the other |
| Cloudflare managed robots.txt blocks AI crawlers | Critical | The managed block disallows GPTBot, ClaudeBot, Google-Extended, Perplexity-relevant bots, etc. — directly contradicts the site's own robots rules and the entire AEO/GEO value prop. Turn off Cloudflare "Block AI bots" (Security → Bots) or override managed content signals |
| No `/manifest.json` | Low | 404; add PWA manifest or remove any references |
| Sitemap lists ~50 URLs that 404 | High | Submitting 404 URLs wastes crawl budget; regenerate sitemap from real routes (sitemap already imports content registry, so it self-heals as pages are added — but 404 entries ship today) |
| `/api/contact` has no rate limiting | Medium | Spam/abuse risk on the open form endpoint |
| No analytics evidence | Medium | Verify Cloudflare Web Analytics or GA4 is wired before driving traffic |

## 5. Recommended build order

1. **Robots fix + www redirect** (Cloudflare dashboard, ~10 min, unblocks AI visibility)
2. **Tier 1**: `/services` hub + 10 service pages, `/case-studies`, `/reviews`
3. **Tier 2**: `/about`, `/faq`, `/industries` hub + 5 main industries
4. **Tier 4 first half**: `/privacy-policy`, `/terms` (required before ad spend)
5. **Tier 3**: remaining 7 industry pages
6. **Tier 4 second half**: `/resources` hub, `/resources/guides`, `/resources/glossary`
7. **Section 3**: pricing, audit landing page, thank-you, newsletter capture
