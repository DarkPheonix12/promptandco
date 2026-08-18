import { MetadataRoute } from "next";

const baseUrl = "https://promptco.online";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages = [
    { url: baseUrl, lastModified: now, changeFrequency: "weekly" as const, priority: 1 },
    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${baseUrl}/faq`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/case-studies`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/reviews`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/privacy-policy`, lastModified: now, changeFrequency: "yearly" as const, priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified: now, changeFrequency: "yearly" as const, priority: 0.3 },
  ];

  const servicePages = [
    "ai-search-optimization",
    "answer-engine-optimization",
    "generative-engine-optimization",
    "ai-visibility",
    "entity-optimization",
    "ai-content-optimization",
    "citation-optimization",
    "technical-seo",
    "digital-pr",
  ].map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const industryPages = [
    "saas",
    "ecommerce",
    "b2b",
    "healthcare",
    "finance",
    "legal",
    "real-estate",
    "professional-services",
    "education",
    "hospitality",
    "technology",
    "local-services",
  ].map((slug) => ({
    url: `${baseUrl}/industries/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const locationPages = [
    "india",
    "delhi",
    "mumbai",
    "bangalore",
    "hyderabad",
    "dubai",
    "london",
    "new-york",
  ].map((slug) => ({
    url: `${baseUrl}/locations/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const resourcePages = [
    { url: `${baseUrl}/resources`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.7 },
    { url: `${baseUrl}/resources/blog`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.7 },
    { url: `${baseUrl}/resources/guides`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/resources/research`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/resources/glossary`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.6 },
  ];

  return [...staticPages, ...servicePages, ...industryPages, ...locationPages, ...resourcePages];
}
