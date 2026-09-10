import type { ComponentType } from "react";
import { siteConfig } from "@/lib/data";

export interface ResearchFaq {
  question: string;
  answer: string;
}

export interface ResearchMeta {
  slug: string;
  title: string;
  description: string;
  datePublished: string;
  dateModified: string;
  category: string;
  tags: string[];
  readingTimeMinutes: number;
  faq?: ResearchFaq[];
}

export interface ResearchArticle {
  meta: ResearchMeta;
  Content: ComponentType;
}

export const researchUrl = (slug: string) => `${siteConfig.url}/resources/research/${slug}`;

export const researchPath = (slug: string) => `/resources/research/${slug}`;