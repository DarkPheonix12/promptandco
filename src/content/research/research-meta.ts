/**
 * Research article METADATA ONLY — no MDX components are imported here.
 *
 * Article metadata lives in per-slug pure-TS modules (./meta/<slug>.ts) so
 * every surface that only needs metadata (blog index, research index, sitemap,
 * service-page research links) can import it without pulling compiled article
 * bodies into its bundle. Article bodies are loaded per-slug via
 * research-content.ts (lazy import map).
 *
 * To add a new article:
 *   1. Create <file>.mdx in this directory containing ONLY the article body
 *      (no meta export).
 *   2. Create meta/<slug>.ts with the standard `meta` export.
 *   3. Add one import + one array entry here (array order drives the research
 *      index and blog listing order).
 *   4. Add the matching loader line in research-content.ts.
 */
import type { ResearchMeta } from "@/lib/research";

import { meta as m2026AiCitationStudyMeta } from "./meta/2026-ai-citation-study";
import { meta as aiCrawlers2026ReadinessMeta } from "./meta/ai-crawlers-2026-readiness";
import { meta as freshnessPlaybook2026Meta } from "./meta/freshness-playbook-2026";
import { meta as aiVisibilityMeasurementBuyersGuideMeta } from "./meta/ai-visibility-measurement-buyers-guide";
import { meta as aiCitationLevers2026Meta } from "./meta/ai-citation-levers-2026";
import { meta as entityOptimization2026Meta } from "./meta/entity-optimization-2026";
import { meta as seoGeoAeoLlmoGuide2026Meta } from "./meta/seo-geo-aeo-llmo-guide-2026";
import { meta as eeatAiTrustSignals2026Meta } from "./meta/eeat-ai-trust-signals-2026";
import { meta as earnedMediaAiSearchPlaybook2026Meta } from "./meta/earned-media-ai-search-playbook-2026";
import { meta as schemaAiCitations2026EvidenceMeta } from "./meta/schema-ai-citations-2026-evidence";
import { meta as llmsTxt2026EvidenceMeta } from "./meta/llms-txt-2026-evidence";
import { meta as redditCommunityAiCitations2026Meta } from "./meta/reddit-community-ai-citations-2026";
import { meta as aiModeVsAiOverviews2026Meta } from "./meta/ai-mode-vs-ai-overviews-2026";
import { meta as localNearMeAiCitations2026Meta } from "./meta/local-near-me-ai-citations-2026";
import { meta as agentReadyContent2026McpA2aMeta } from "./meta/agent-ready-content-2026-mcp-a2a";
import { meta as perEngineCitationDivergence2026Meta } from "./meta/per-engine-citation-divergence-2026";
import { meta as answerEconomyB2bAiShortlist2026Meta } from "./meta/answer-economy-b2b-ai-shortlist-2026";
import { meta as youtubeAiCitationsVideoSearch2026Meta } from "./meta/youtube-ai-citations-video-search-2026";
import { meta as multilingualAiSearchInternationalGeo2026Meta } from "./meta/multilingual-ai-search-international-geo-2026";
import { meta as zeroClickSearchAiOverviewEconomics2026Meta } from "./meta/zero-click-search-ai-overview-economics-2026";
import { meta as contentFormatsAiCitationsListicles2026Meta } from "./meta/content-formats-ai-citations-listicles-2026";
import { meta as wikipediaWikidataEntityCorroborationAiCitations2026Meta } from "./meta/wikipedia-wikidata-entity-corroboration-ai-citations-2026";
import { meta as saasAiSearchCitationPlaybook2026Meta } from "./meta/saas-ai-search-citation-playbook-2026";
import { meta as whatChangedAiSearch2026YearInReviewMeta } from "./meta/what-changed-ai-search-2026-year-in-review";
import { meta as howToMeasureAiSearchInfluence2026Meta } from "./meta/how-to-measure-ai-search-influence-2026";
import { meta as structuredDataSchemaAiSearch2026Meta } from "./meta/structured-data-schema-ai-search-2026";
import { meta as aiContactFlowLeadRouting2026Meta } from "./meta/ai-contact-flow-lead-routing-2026";
import { meta as whatIsGenerativeEngineOptimizationMeta } from "./meta/what-is-generative-engine-optimization";
import { meta as geoStrategy2026Meta } from "./meta/geo-strategy-2026";
import { meta as aiSearchStatistics2026Meta } from "./meta/ai-search-statistics-2026";
import { meta as bestGeoAgencies2026HonestMarketMapMeta } from "./meta/best-geo-agencies-2026-honest-market-map";
import { meta as bestAeoAgencies2026Meta } from "./meta/best-aeo-agencies-2026";

export const postsMeta: ResearchMeta[] = [
  m2026AiCitationStudyMeta as ResearchMeta,
  aiCrawlers2026ReadinessMeta as ResearchMeta,
  freshnessPlaybook2026Meta as ResearchMeta,
  aiVisibilityMeasurementBuyersGuideMeta as ResearchMeta,
  aiCitationLevers2026Meta as ResearchMeta,
  entityOptimization2026Meta as ResearchMeta,
  seoGeoAeoLlmoGuide2026Meta as ResearchMeta,
  eeatAiTrustSignals2026Meta as ResearchMeta,
  earnedMediaAiSearchPlaybook2026Meta as ResearchMeta,
  schemaAiCitations2026EvidenceMeta as ResearchMeta,
  llmsTxt2026EvidenceMeta as ResearchMeta,
  redditCommunityAiCitations2026Meta as ResearchMeta,
  aiModeVsAiOverviews2026Meta as ResearchMeta,
  localNearMeAiCitations2026Meta as ResearchMeta,
  agentReadyContent2026McpA2aMeta as ResearchMeta,
  perEngineCitationDivergence2026Meta as ResearchMeta,
  answerEconomyB2bAiShortlist2026Meta as ResearchMeta,
  youtubeAiCitationsVideoSearch2026Meta as ResearchMeta,
  multilingualAiSearchInternationalGeo2026Meta as ResearchMeta,
  zeroClickSearchAiOverviewEconomics2026Meta as ResearchMeta,
  contentFormatsAiCitationsListicles2026Meta as ResearchMeta,
  wikipediaWikidataEntityCorroborationAiCitations2026Meta as ResearchMeta,
  saasAiSearchCitationPlaybook2026Meta as ResearchMeta,
  whatChangedAiSearch2026YearInReviewMeta as ResearchMeta,
  howToMeasureAiSearchInfluence2026Meta as ResearchMeta,
  structuredDataSchemaAiSearch2026Meta as ResearchMeta,
  aiContactFlowLeadRouting2026Meta as ResearchMeta,
  whatIsGenerativeEngineOptimizationMeta as ResearchMeta,
  geoStrategy2026Meta as ResearchMeta,
  aiSearchStatistics2026Meta as ResearchMeta,
  bestGeoAgencies2026HonestMarketMapMeta as ResearchMeta,
  bestAeoAgencies2026Meta as ResearchMeta,
];

export function getPostMeta(slug: string): ResearchMeta | undefined {
  return postsMeta.find((post) => post.slug === slug);
}
