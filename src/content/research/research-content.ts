/**
 * Research article CONTENT loaders — one lazy import per slug.
 *
 * Article bodies are loaded through per-slug dynamic imports so each MDX file
 * lands in its own chunk and a given page only bundles the article it renders.
 * Metadata lives separately in research-meta.ts / meta/<slug>.ts.
 *
 * To add a new article: add one import() line to the map below (key = slug,
 * specifier = the .mdx file). Only slugs present in research-meta.ts are
 * routed/prerendered.
 */
import type { ComponentType } from "react";

const contentLoaders: Record<string, () => Promise<{ default: ComponentType }>> = {
  "2026-ai-citation-study": () => import(/* webpackChunkName: "research-2026-ai-citation-study" */ "./2026-ai-citation-study.mdx"),
  "ai-crawlers-2026-readiness": () => import(/* webpackChunkName: "research-ai-crawlers-2026-readiness" */ "./ai-crawlers-2026-readiness.mdx"),
  "freshness-playbook-2026": () => import(/* webpackChunkName: "research-freshness-playbook-2026" */ "./freshness-playbook-2026.mdx"),
  "ai-visibility-measurement-buyers-guide": () => import(/* webpackChunkName: "research-ai-visibility-measurement-buyers-guide" */ "./ai-visibility-measurement-buyers-guide.mdx"),
  "ai-citation-levers-2026": () => import(/* webpackChunkName: "research-ai-citation-levers-2026" */ "./ai-citation-levers-2026.mdx"),
  "entity-optimization-2026": () => import(/* webpackChunkName: "research-entity-optimization-2026" */ "./entity-optimization-2026.mdx"),
  "seo-geo-aeo-llmo-guide-2026": () => import(/* webpackChunkName: "research-seo-geo-aeo-llmo-guide-2026" */ "./seo-geo-aeo-llmo-guide-2026.mdx"),
  "eeat-ai-trust-signals-2026": () => import(/* webpackChunkName: "research-eeat-ai-trust-signals-2026" */ "./eeat-ai-trust-signals-2026.mdx"),
  "earned-media-ai-search-playbook-2026": () => import(/* webpackChunkName: "research-earned-media-ai-search-playbook-2026" */ "./earned-media-ai-search-playbook-2026.mdx"),
  "schema-ai-citations-2026-evidence": () => import(/* webpackChunkName: "research-schema-ai-citations-2026-evidence" */ "./schema-ai-citations-2026-evidence.mdx"),
  "llms-txt-2026-evidence": () => import(/* webpackChunkName: "research-llms-txt-2026-evidence" */ "./llms-txt-2026-evidence.mdx"),
  "reddit-community-ai-citations-2026": () => import(/* webpackChunkName: "research-reddit-community-ai-citations-2026" */ "./reddit-community-ai-citations-2026.mdx"),
  "ai-mode-vs-ai-overviews-2026": () => import(/* webpackChunkName: "research-ai-mode-vs-ai-overviews-2026" */ "./ai-mode-vs-ai-overviews-2026.mdx"),
  "local-near-me-ai-citations-2026": () => import(/* webpackChunkName: "research-local-near-me-ai-citations-2026" */ "./local-near-me-ai-citations-2026.mdx"),
  "agent-ready-content-2026-mcp-a2a": () => import(/* webpackChunkName: "research-agent-ready-content-2026-mcp-a2a" */ "./agent-ready-content-2026-mcp-a2a.mdx"),
  "per-engine-citation-divergence-2026": () => import(/* webpackChunkName: "research-per-engine-citation-divergence-2026" */ "./per-engine-citation-divergence-2026.mdx"),
  "answer-economy-b2b-ai-shortlist-2026": () => import(/* webpackChunkName: "research-answer-economy-b2b-ai-shortlist-2026" */ "./answer-economy-b2b-ai-shortlist-2026.mdx"),
  "youtube-ai-citations-video-search-2026": () => import(/* webpackChunkName: "research-youtube-ai-citations-video-search-2026" */ "./youtube-ai-citations-video-search-2026.mdx"),
  "multilingual-ai-search-international-geo-2026": () => import(/* webpackChunkName: "research-multilingual-ai-search-international-geo-2026" */ "./19-multilingual-ai-search-international-geo-2026.mdx"),
  "zero-click-search-ai-overview-economics-2026": () => import(/* webpackChunkName: "research-zero-click-search-ai-overview-economics-2026" */ "./20-zero-click-search-ai-overview-economics-2026.mdx"),
  "content-formats-ai-citations-listicles-2026": () => import(/* webpackChunkName: "research-content-formats-ai-citations-listicles-2026" */ "./21-content-formats-ai-citations-listicles-2026.mdx"),
  "wikipedia-wikidata-entity-corroboration-ai-citations-2026": () => import(/* webpackChunkName: "research-wikipedia-wikidata-entity-corroboration-ai-citations-2026" */ "./22-wikipedia-wikidata-entity-corroboration-ai-citations-2026.mdx"),
  "saas-ai-search-citation-playbook-2026": () => import(/* webpackChunkName: "research-saas-ai-search-citation-playbook-2026" */ "./23-saas-ai-search-citation-playbook-2026.mdx"),
  "what-changed-ai-search-2026-year-in-review": () => import(/* webpackChunkName: "research-what-changed-ai-search-2026-year-in-review" */ "./24-what-changed-ai-search-2026-year-in-review.mdx"),
  "how-to-measure-ai-search-influence-2026": () => import(/* webpackChunkName: "research-how-to-measure-ai-search-influence-2026" */ "./25-how-to-measure-ai-search-influence-2026.mdx"),
  "structured-data-schema-ai-search-2026": () => import(/* webpackChunkName: "research-structured-data-schema-ai-search-2026" */ "./26-structured-data-schema-ai-search-2026.mdx"),
  "ai-contact-flow-lead-routing-2026": () => import(/* webpackChunkName: "research-ai-contact-flow-lead-routing-2026" */ "./27-ai-contact-flow-lead-routing-2026.mdx"),
  "what-is-generative-engine-optimization": () => import(/* webpackChunkName: "research-what-is-generative-engine-optimization" */ "./what-is-generative-engine-optimization.mdx"),
  "geo-strategy-2026": () => import(/* webpackChunkName: "research-geo-strategy-2026" */ "./geo-strategy-2026.mdx"),
  "ai-search-statistics-2026": () => import(/* webpackChunkName: "research-ai-search-statistics-2026" */ "./ai-search-statistics-2026.mdx"),
  "best-geo-agencies-2026-honest-market-map": () => import(/* webpackChunkName: "research-best-geo-agencies-2026-honest-market-map" */ "./best-geo-agencies-2026.mdx"),
  "best-aeo-agencies-2026": () => import(/* webpackChunkName: "research-best-aeo-agencies-2026" */ "./best-aeo-agencies-2026.mdx"),
};

/**
 * Load the MDX component for a slug. Returns undefined for unknown slugs —
 * callers render notFound() in that case.
 */
export async function loadArticleContent(
  slug: string
): Promise<ComponentType | undefined> {
  const loader = contentLoaders[slug];
  if (!loader) return undefined;
  const mod = await loader();
  return mod.default;
}
