import {
  foundationHomeWebPageNode,
  foundationOrganizationNode,
  foundationPersonNode,
  foundationWebSiteNode,
} from "@/lib/entity-graph-nodes";
import { entityIds, organization } from "@/lib/entity";

/**
 * Thin schema surface for pages. All entity nodes come from
 * src/lib/entity-graph-nodes.ts (single source of identity); these components
 * just wrap them in JSON-LD scripts.
 */
const sanitizeLd = (jsonLd: unknown) => JSON.stringify(jsonLd).replace(/</g, "\\u003c");

/**
 * Homepage entity graph: Organization + WebSite + WebPage (+ Person once a real
 * founder exists) emitted as one connected @graph.
 */
export function EntityGraphSchema() {
  const graph: Record<string, unknown>[] = [
    foundationOrganizationNode(),
    foundationWebSiteNode(),
    foundationHomeWebPageNode(),
  ];
  const person = foundationPersonNode();
  if (person) graph.push(person);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: sanitizeLd({ "@context": "https://schema.org", "@graph": graph }),
      }}
    />
  );
}

export function OrganizationSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: sanitizeLd({
          "@context": "https://schema.org",
          ...foundationOrganizationNode(),
        }),
      }}
    />
  );
}

export function WebSiteSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: sanitizeLd({
          "@context": "https://schema.org",
          ...foundationWebSiteNode(),
        }),
      }}
    />
  );
}

export function PersonSchema() {
  const person = foundationPersonNode();
  if (!person) return null;
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: sanitizeLd({ "@context": "https://schema.org", ...person }),
      }}
    />
  );
}

export function BreadcrumbSchema({
  items,
}: {
  items: Array<{ name: string; url: string }>;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
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
      dangerouslySetInnerHTML={{ __html: sanitizeLd(schema) }}
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
      dangerouslySetInnerHTML={{ __html: sanitizeLd(schema) }}
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
    provider: { "@id": entityIds.organization },
    areaServed: organization.areaServed,
    serviceType: "AI Search Optimization",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: sanitizeLd(schema) }}
    />
  );
}