/**
 * Canonical JSON-LD node builders for the Prompt&Co. entity graph.
 *
 * Every page that emits structured data builds its nodes here so Organization,
 * WebSite, WebPage and Person are described identically across the site (same
 * @id spine, same strings). SchemaMarkup and ArticleLayout both import these —
 * never hand-roll a second definition.
 */
import {
  entityIds,
  founderConfig,
  founderHasIdentity,
  getFounderSameAs,
  getVerifiedExternalUris,
  organization,
} from "./entity";

export function foundationOrganizationNode() {
  const node: Record<string, unknown> = {
    "@id": entityIds.organization,
    "@type": "Organization",
    name: organization.name,
    alternateName: organization.alternateName,
    url: organization.url,
    logo: organization.logo,
    description: organization.description,
    foundingDate: organization.foundingDate,
    areaServed: [...organization.areaServed],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: organization.contactPoint.contactType,
      email: organization.contactPoint.email,
      availableLanguage: organization.contactPoint.availableLanguage,
    },
    knowsAbout: [...organization.knowsAbout],
  };

  const sameAs = getVerifiedExternalUris();
  if (sameAs.length > 0) node.sameAs = sameAs;
  if (founderHasIdentity) node.founder = { "@id": entityIds.founder };

  return node;
}

export function foundationWebSiteNode() {
  return {
    "@id": entityIds.website,
    "@type": "WebSite",
    name: organization.name,
    url: organization.url,
    description: organization.description,
    inLanguage: "en",
    publisher: { "@id": entityIds.organization },
  };
}

export function foundationHomeWebPageNode() {
  return {
    "@id": entityIds.homePage,
    "@type": "WebPage",
    url: organization.url,
    name: organization.name,
    isPartOf: { "@id": entityIds.website },
    about: { "@id": entityIds.organization },
  };
}

/** Returns null until a real founder is configured — never ship a stub. */
export function foundationPersonNode() {
  if (!founderHasIdentity) return null;
  const node: Record<string, unknown> = {
    "@id": entityIds.founder,
    "@type": "Person",
    name: founderConfig.name,
    jobTitle: founderConfig.jobTitle,
    url: founderConfig.url,
    affiliation: { "@id": entityIds.organization },
    worksFor: { "@id": entityIds.organization },
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
  const sameAs = getFounderSameAs();
  if (sameAs.length > 0) node.sameAs = sameAs;
  return node;
}