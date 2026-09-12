import { MetadataRoute } from "next";
import { posts } from "@/content/research";
import { blogPath } from "@/lib/blog";
import { services } from "@/lib/data";
import { industryDetails } from "@/lib/industry-details";

// Sitemap only lists URLs that actually exist. Pages still unbuilt
// (case-studies, reviews, locations/*, guides, glossary, /resources hub)
// are intentionally absent and must be added the day those routes deploy.
// See docs/seo-strategy-2026-09.md §3 (C2).
const baseUrl = "https://promptco.online";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages = [
    { url: baseUrl, lastModified: now, changeFrequency: "weekly" as const, priority: 1 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/pricing`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${baseUrl}/faq`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/privacy-policy`, lastModified: now, changeFrequency: "yearly" as const, priority: 0.2 },
    { url: `${baseUrl}/terms`, lastModified: now, changeFrequency: "yearly" as const, priority: 0.2 },
  ];

  const industriesHub = [
    { url: `${baseUrl}/industries`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 },
  ];

  const industryPages = Object.keys(industryDetails).map((slug) => ({
    url: `${baseUrl}/industries/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const servicePages = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const serviceHub = [
    { url: `${baseUrl}/services`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.9 },
  ];

  const resourcePages = [
    { url: `${baseUrl}/resources/blog`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.7 },
    { url: `${baseUrl}/resources/research`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.7 },
  ];

  const researchPages = posts.map((post) => ({
    url: `${baseUrl}/resources/research/${post.meta.slug}`,
    lastModified: new Date(post.meta.dateModified),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const blogPages = posts.map((post) => ({
    url: `${baseUrl}${blogPath(post.meta.slug)}`,
    lastModified: new Date(post.meta.dateModified),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    ...staticPages,
    ...serviceHub,
    ...servicePages,
    ...industriesHub,
    ...industryPages,
    ...resourcePages,
    ...researchPages,
    ...blogPages,
  ];
}
