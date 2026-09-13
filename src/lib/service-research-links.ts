/**
 * Per-service research links. Connects each commercial service page to the
 * research articles that support its topical cluster. Only slugs that exist
 * in the research index may appear here — a stale slug breaks the static
 * build, so this stays in sync with src/content/research/index.ts.
 */
import { posts } from "@/content/research";

export interface ServiceResearchLink {
  slug: string;
  title: string;
  description: string;
}

export interface ResolvedResearchLink extends ServiceResearchLink {
  href: string;
}

export const serviceResearchLinks: Record<string, ServiceResearchLink[]> = {
  "generative-engine-optimization": [
    {
      slug: "what-is-generative-engine-optimization",
      title: "What Is Generative Engine Optimization? The 2026 Definitive Guide",
      description: "The full GEO guide: how generative engines decide what to retrieve, cite and recommend.",
    },
    {
      slug: "geo-strategy-2026",
      title: "GEO Strategy 2026: Building a Program That Compounds",
      description: "The five-layer framework in priority order — baseline, access, entity, content, footprint.",
    },
    {
      slug: "ai-citation-levers-2026",
      title: "The 11 Levers of AI Citation",
      description: "The levers model behind every GEO engagement, ranked by evidence.",
    },
    {
      slug: "best-geo-agencies-2026-honest-market-map",
      title: "Best GEO Agencies 2026: An Honest Market Map",
      description: "How to evaluate any GEO agency — including us.",
    },
  ],
  "answer-engine-optimization": [
    {
      slug: "seo-geo-aeo-llmo-guide-2026",
      title: "SEO vs GEO vs AEO vs LLMO: The Taxonomy Guide",
      description: "What separates the acronyms, and where each discipline actually earns its keep.",
    },
    {
      slug: "26-structured-data-schema-ai-search-2026",
      title: "Schema and Structured Data After the FAQ Death",
      description: "What structured data still does for answer engines in 2026.",
    },
    {
      slug: "ai-citation-levers-2026",
      title: "The 11 Levers of AI Citation",
      description: "The evidence-ranked levers model behind AEO work.",
    },
  ],
  "ai-search-optimization": [
    {
      slug: "ai-citation-levers-2026",
      title: "The 11 Levers of AI Citation",
      description: "The evidence-ranked model behind the integrated program.",
    },
    {
      slug: "2026-ai-citation-study",
      title: "The 2026 AI Citation Study",
      description: "Who gets cited, per engine — and what you can control.",
    },
    {
      slug: "ai-crawlers-2026-readiness",
      title: "AI Crawler Readiness",
      description: "The technical layer: rendering, robots, and how assistants budget fetches.",
    },
  ],
  "ai-visibility": [
    {
      slug: "ai-visibility-measurement-buyers-guide",
      title: "AI Visibility Measurement: A Buyer's Guide",
      description: "Tools, methodology and cadence for measurement that holds up.",
    },
    {
      slug: "how-to-measure-ai-search-influence-2026",
      title: "How to Measure AI Search Influence in 2026",
      description: "The three-layer measurement approach and its blind spot.",
    },
    {
      slug: "per-engine-citation-divergence-2026",
      title: "Per-Engine Citation Divergence",
      description: "Why ChatGPT, Perplexity and AI Overviews cite different sources.",
    },
  ],
  "citation-optimization": [
    {
      slug: "2026-ai-citation-study",
      title: "The 2026 AI Citation Study",
      description: "Who gets cited, per engine, and what the data says you can control.",
    },
    {
      slug: "content-formats-ai-citations-listicles-2026",
      title: "Content Formats That Earn AI Citations",
      description: "Listicles, comparisons and the formats engines quote for commercial queries.",
    },
  ],
  "entity-optimization": [
    {
      slug: "entity-optimization-2026",
      title: "Entity Optimization for AI Search",
      description: "Making your brand unambiguous to systems that organize the world as entities.",
    },
    {
      slug: "wikipedia-wikidata-entity-corroboration-ai-citations-2026",
      title: "Wikipedia and Wikidata as Entity Corroboration",
      description: "The third-party entity layer engines verify against.",
    },
  ],
  "digital-pr": [
    {
      slug: "earned-media-ai-search-playbook-2026",
      title: "The Earned-Media AI Search Playbook",
      description: "Building the third-party footprint recommendation engines cite.",
    },
    {
      slug: "reddit-community-ai-citations-2026",
      title: "Reddit and Community Citations",
      description: "Community platforms anchor AI answers — here's how citation actually works there.",
    },
  ],
};

export function getResearchLinks(slug: string): ResolvedResearchLink[] {
  const links = serviceResearchLinks[slug];
  if (!links) return [];
  const known = new Set(posts.map((p) => p.meta.slug));
  return links.flatMap((link) =>
    known.has(link.slug)
      ? [{ ...link, href: `/resources/research/${link.slug}` }]
      : []
  );
}
