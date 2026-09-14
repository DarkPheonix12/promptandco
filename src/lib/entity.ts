/**
 * Prompt&Co. brand entity — single source of truth for identity.
 *
 * Everything that describes the organization, the website, the logo, the
 * founder and the external profiles lives here so schema, footer, About and
 * outreach material all describe ONE entity with ONE set of strings.
 *
 * RULES:
 * - Never fabricate a profile URL, founder name or identifier. `externalProfiles`
 *   entries start empty and are filled ONLY by a human when the real account
 *   exists (see docs/geo-aeo-entity-profile-plan-2026-09.md).
 * - Schema code reads these values at build time; empty values are filtered out
 *   before anything ships, so placeholders never reach the DOM.
 */
import { siteConfig } from "./data";

/** Canonical, crawlable logo asset (static file, not a generated route). */
export const siteLogo = {
  path: "/logo.svg",
  width: 512,
  height: 512,
};

/** Canonical @id anchors — the identity spine reused across every page. */
export const entityIds = {
  organization: "https://promptco.online/#organization",
  website: "https://promptco.online/#website",
  homePage: "https://promptco.online/#webpage",
  founder: "https://promptco.online/#founder",
};

export const organization = {
  name: siteConfig.name, // "Prompt&Co."
  alternateName: "Prompt&Co",
  url: siteConfig.url,
  logo: `${siteConfig.url}${siteLogo.path}`,
  description: siteConfig.description,
  foundingDate: "2024",
  email: siteConfig.email,
  areaServed: ["IN", "AE", "GB", "US"] as const,
  contactPoint: {
    contactType: "customer service",
    email: siteConfig.email,
    availableLanguage: "English",
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
};

/**
 * External profiles that represent the OFFICIAL Prompt&Co. entity.
 * Fill `url` only when the account genuinely exists. Verified URLs are the
 * only ones allowed into Organization sameAs — search-results URLs and
 * similarly-named unrelated entities (e.g. promptco.ai) must never be added.
 */
export const externalProfiles: Record<
  "linkedin" | "twitter" | "googleBusinessProfile" | "crunchbase" | "wikidata",
  { name: string; url: string; note: string }
> = {
  linkedin: {
    name: "LinkedIn",
    url: "",
    note: "Company page + founder personal page. Create first; then people know what to link.",
  },
  twitter: {
    name: "X (Twitter)",
    url: "",
    note: "Same handle/bio as LinkedIn and the site; use the punctuated name Prompt&Co.",
  },
  googleBusinessProfile: {
    name: "Google Business Profile",
    url: "",
    note: "Service-area business (IN cover). Only create if legitimately eligible.",
  },
  crunchbase: {
    name: "Crunchbase",
    url: "",
    note: "Low effort, high landmark value for entity resolution.",
  },
  wikidata: {
    name: "Wikidata",
    url: "",
    note: `Set to the item URL (https://www.wikidata.org/wiki/Q...) once created and referenced.`,
  },
};

/** Only real, filled profile URLs — used for Organization sameAs and visible links. */
export function getVerifiedExternalUris(): string[] {
  return Object.values(externalProfiles)
    .map((p) => p.url)
    .filter((u) => u.length > 0);
}

/**
 * Founder identity. Intentionally empty until a human confirms real details —
 * `PersonSchema` renders nothing until `name` is set (never ship placeholders).
 * LinkedIn/X personal URLs belong in `sameAs` here, distinct from the company
 * profiles above.
 */
export const founderConfig = {
  name: "",
  jobTitle: "Founder",
  url: `${siteConfig.url}/about`,
  sameAs: {
    linkedin: "",
    twitter: "",
  },
} as const;

export const founderHasIdentity = founderConfig.name.trim().length > 0;

export function getFounderSameAs(): string[] {
  if (!founderHasIdentity) return [];
  return [founderConfig.sameAs.linkedin, founderConfig.sameAs.twitter].filter(
    (u) => u.length > 0
  );
}