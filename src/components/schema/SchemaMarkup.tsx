import { siteConfig } from "@/lib/data";

// Founder Person schema: intentionally disabled until real founder details
// are confirmed. Fill in the FOUNDER object below and the schema ships
// automatically. Placeholder values must never ship in structured data.
const FOUNDER = {
  name: "",
  jobTitle: "Founder",
  url: `${siteConfig.url}/about`,
  // Add real profile URLs (LinkedIn, X) the day they exist.
  sameAs: [] as string[],
};

export function PersonSchema() {
  // Renders nothing until FOUNDER.name is set — never publish placeholders.
  if (!FOUNDER.name) return null;

  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: FOUNDER.name,
    jobTitle: FOUNDER.jobTitle,
    url: FOUNDER.url,
    affiliation: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    knowsAbout: [
      "Answer Engine Optimization",
      "Generative Engine Optimization",
      "AI Search Optimization",
      "AI Visibility",
      "Entity Optimization",
      "Technical SEO",
      "Digital PR",
      "AI Citations",
      "LLM SEO",
      "Brand Visibility in AI",
    ],
  };
  if (FOUNDER.sameAs.length > 0) {
    schema.sameAs = FOUNDER.sameAs;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    logo: `${siteConfig.url}/og-image.png`,
    // sameAs intentionally omitted until real profiles exist — an empty array
    // is worse than absent. Add LinkedIn/Wikidata/X here the day they exist.
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: siteConfig.email,
      availableLanguage: "English",
    },
    areaServed: ["IN", "AE", "GB", "US"],
    knowsAbout: [
      "Answer Engine Optimization",
      "Generative Engine Optimization",
      "AI Search Optimization",
      "AI Visibility",
      "Entity Optimization",
      "Technical SEO",
      "Digital PR",
      "AI Citations",
      "ChatGPT Visibility",
      "Perplexity Optimization",
      "Google AI Overviews",
      "LLM SEO",
      "Brand Visibility in AI",
      "Citation Optimization",
      "GEO Strategy",
      "AI Search Measurement",
      "Third-Party Citation Building",
      "AI Search Tools",
    ],
    foundingDate: "2024",
    // founder intentionally omitted until Person schema values are confirmed.
    // Add a founder block here the day real founder details exist:
    // founder: { "@type": "Person", name: "...", jobTitle: "...", url: "...", sameAs: ["..."] },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    // No potentialAction: the /search route doesn't exist, and a SearchAction
    // pointing at a 404 is invalid structured data.
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ServiceSchema({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: ["IN", "AE", "GB", "US"],
    serviceType: "AI Search Optimization",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbSchema({
  items,
}: {
  items: Array<{ name: string; url: string }>;
}) {
  const schema = {
    "@context": "https://schema.org",      "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQSchema({
  faqs,
}: {
  faqs: Array<{ question: string; answer: string }>;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
