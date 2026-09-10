import type { ComponentType } from "react";
import AiCitationStudy, {
  meta as aiCitationStudyMeta,
} from "./2026-ai-citation-study.mdx";
import type { ResearchArticle, ResearchMeta } from "@/lib/research";

const remeta = aiCitationStudyMeta as ResearchMeta;

export const posts: ResearchArticle[] = [
  {
    meta: remeta,
    Content: AiCitationStudy as ComponentType,
  },
];

export function getPost(slug: string): ResearchArticle | undefined {
  return posts.find((post) => post.meta.slug === slug);
}