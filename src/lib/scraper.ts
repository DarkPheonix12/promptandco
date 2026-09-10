export interface ScrapedData {
  url: string;
  title: string;
  description: string;
  headings: string[];
  textContent: string;
  images: { src: string; alt: string }[];
  links: string[];
  hasStructuredData: boolean;
  hasSchemaMarkup: boolean;
  openGraph: {
    title: string;
    description: string;
    image: string;
  };
  twitterCard: {
    title: string;
    description: string;
  };
  wordCount: number;
  language: string;
  canonicalUrl: string;
}

function extractTextFromHtml(html: string): string {
  return html
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function extractMeta(html: string, name: string): string {
  const patterns = [
    new RegExp(`<meta[^>]*name=["']${name}["'][^>]*content=["']([^"']*)["']`, "i"),
    new RegExp(`<meta[^>]*content=["']([^"']*)["'][^>]*name=["']${name}["']`, "i"),
    new RegExp(`<meta[^>]*property=["']${name}["'][^>]*content=["']([^"']*)["']`, "i"),
    new RegExp(`<meta[^>]*content=["']([^"']*)["'][^>]*property=["']${name}["']`, "i"),
  ];
  for (const pattern of patterns) {
    const match = html.match(pattern);
    if (match) return match[1];
  }
  return "";
}

function extractHeadings(html: string): string[] {
  const headings: string[] = [];
  const regex = /<h[1-6][^>]*>([\s\S]*?)<\/h[1-6]>/gi;
  let match;
  while ((match = regex.exec(html)) !== null) {
    const text = match[1].replace(/<[^>]+>/g, "").trim();
    if (text) headings.push(text);
  }
  return headings;
}

function extractImages(html: string): { src: string; alt: string }[] {
  const images: { src: string; alt: string }[] = [];
  const regex = /<img[^>]*>/gi;
  let match;
  while ((match = regex.exec(html)) !== null) {
    const tag = match[0];
    const srcMatch = tag.match(/src=["']([^"']*)["']/i);
    const altMatch = tag.match(/alt=["']([^"']*)["']/i);
    if (srcMatch) {
      images.push({
        src: srcMatch[1],
        alt: altMatch ? altMatch[1] : "",
      });
    }
  }
  return images;
}

function extractLinks(html: string): string[] {
  const links: string[] = [];
  const regex = /<a[^>]*href=["']([^"']*)["'][^>]*>/gi;
  let match;
  while ((match = regex.exec(html)) !== null) {
    const href = match[1];
    if (href && !href.startsWith("#") && !href.startsWith("javascript:")) {
      links.push(href);
    }
  }
  return links;
}

export async function scrapeWebsite(url: string): Promise<ScrapedData> {
  // Normalize URL
  let normalizedUrl = url;
  if (!normalizedUrl.startsWith("http")) {
    normalizedUrl = `https://${normalizedUrl}`;
  }

  const response = await fetch(normalizedUrl, {
    headers: {
      "User-Agent": "Mozilla/5.0 (compatible; PromptCoBot/1.0; +https://promptco.online)",
      Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
    },
    signal: AbortSignal.timeout(15000),
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch website: ${response.status} ${response.statusText}`);
  }

  const html = await response.text();

  const title = extractMeta(html, "title") || html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1]?.trim() || "";
  const description = extractMeta(html, "description");
  const headings = extractHeadings(html);
  const textContent = extractTextFromHtml(html);
  const images = extractImages(html);
  const links = extractLinks(html);
  const hasStructuredData = html.includes("application/ld+json");
  const hasSchemaMarkup = html.includes("schema.org") || html.includes("itemtype");

  const ogTitle = extractMeta(html, "og:title");
  const ogDescription = extractMeta(html, "og:description");
  const ogImage = extractMeta(html, "og:image");

  const twitterTitle = extractMeta(html, "twitter:title");
  const twitterDescription = extractMeta(html, "twitter:description");

  const canonicalMatch = html.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']*)["']/i);
  const canonicalUrl = canonicalMatch ? canonicalMatch[1] : normalizedUrl;

  const langMatch = html.match(/<html[^>]*lang=["']([^"']*)["']/i);
  const language = langMatch ? langMatch[1] : "en";

  const wordCount = textContent.split(/\s+/).filter((w) => w.length > 0).length;

  return {
    url: normalizedUrl,
    title,
    description,
    headings,
    textContent: textContent.substring(0, 8000), // Limit for API
    images,
    links,
    hasStructuredData,
    hasSchemaMarkup,
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      image: ogImage,
    },
    twitterCard: {
      title: twitterTitle,
      description: twitterDescription,
    },
    wordCount,
    language,
    canonicalUrl,
  };
}
