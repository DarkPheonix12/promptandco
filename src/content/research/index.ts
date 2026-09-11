import type { ComponentType } from "react";
import AiCitationStudy, {
  meta as aiCitationStudyMeta,
} from "./2026-ai-citation-study.mdx";
import AiCrawlersReadiness, {
  meta as aiCrawlersReadinessMeta,
} from "./ai-crawlers-2026-readiness.mdx";
import FreshnessPlaybook, {
  meta as freshnessPlaybookMeta,
} from "./freshness-playbook-2026.mdx";
import BuyersGuide, {
  meta as buyersGuideMeta,
} from "./ai-visibility-measurement-buyers-guide.mdx";
import CitationLevers, {
  meta as citationLeversMeta,
} from "./ai-citation-levers-2026.mdx";
import EntityOptimization, {
  meta as entityOptimizationMeta,
} from "./entity-optimization-2026.mdx";
import SeoGeoAeoLlmoGuide, {
  meta as seoGeoAeoLlmoGuideMeta,
} from "./seo-geo-aeo-llmo-guide-2026.mdx";
import EeatAiTrustSignals, {
  meta as eeatAiTrustSignalsMeta,
} from "./eeat-ai-trust-signals-2026.mdx";
import EarnedMediaAiSearchPlaybook, {
  meta as earnedMediaAiSearchPlaybookMeta,
} from "./earned-media-ai-search-playbook-2026.mdx";
import SchemaAiCitations2026, {
  meta as schemaAiCitations2026Meta,
} from "./schema-ai-citations-2026-evidence.mdx";
import type { ResearchArticle, ResearchMeta } from "@/lib/research";

const remeta = aiCitationStudyMeta as ResearchMeta;
const emeta = aiCrawlersReadinessMeta as ResearchMeta;
const fmeta = freshnessPlaybookMeta as ResearchMeta;
const bmeta = buyersGuideMeta as ResearchMeta;
const lmeta = citationLeversMeta as ResearchMeta;
const nmeta = entityOptimizationMeta as ResearchMeta;
const ometa = seoGeoAeoLlmoGuideMeta as ResearchMeta;
const pmeta = eeatAiTrustSignalsMeta as ResearchMeta;
const qmeta = earnedMediaAiSearchPlaybookMeta as ResearchMeta;
const rmeta = schemaAiCitations2026Meta as ResearchMeta;

export const posts: ResearchArticle[] = [
  {
    meta: remeta,
    Content: AiCitationStudy as ComponentType,
  },
  {
    meta: emeta,
    Content: AiCrawlersReadiness as ComponentType,
  },
  {
    meta: fmeta,
    Content: FreshnessPlaybook as ComponentType,
  },
  {
    meta: bmeta,
    Content: BuyersGuide as ComponentType,
  },
  {
    meta: lmeta,
    Content: CitationLevers as ComponentType,
  },
  {
    meta: nmeta,
    Content: EntityOptimization as ComponentType,
  },
  {
    meta: ometa,
    Content: SeoGeoAeoLlmoGuide as ComponentType,
  },
  {
    meta: pmeta,
    Content: EeatAiTrustSignals as ComponentType,
  },
  {
    meta: qmeta,
    Content: EarnedMediaAiSearchPlaybook as ComponentType,
  },
  {
    meta: rmeta,
    Content: SchemaAiCitations2026 as ComponentType,
  },
];

export function getPost(slug: string): ResearchArticle | undefined {
  return posts.find((post) => post.meta.slug === slug);
}