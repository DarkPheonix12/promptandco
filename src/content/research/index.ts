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
import type { ResearchArticle, ResearchMeta } from "@/lib/research";

const remeta = aiCitationStudyMeta as ResearchMeta;
const emeta = aiCrawlersReadinessMeta as ResearchMeta;
const fmeta = freshnessPlaybookMeta as ResearchMeta;
const bmeta = buyersGuideMeta as ResearchMeta;
const lmeta = citationLeversMeta as ResearchMeta;

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
];

export function getPost(slug: string): ResearchArticle | undefined {
  return posts.find((post) => post.meta.slug === slug);
}