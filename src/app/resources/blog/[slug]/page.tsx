import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import ArticleLayout from "@/components/research/ArticleLayout";
import PrimeReads from "@/components/blog/PrimeReads";
import { getPostMeta, postsMeta } from "@/content/research/research-meta";
import { loadArticleContent } from "@/content/research/research-content";
import { blogPath, blogUrl } from "@/lib/blog";
import { siteConfig } from "@/lib/data";

export const dynamicParams = false;

export function generateStaticParams() {
  return postsMeta.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostMeta(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    keywords: post.tags,
    authors: [{ name: siteConfig.name, url: siteConfig.url }],
    openGraph: {
      type: "article",
      locale: "en_US",
      url: blogUrl(slug),
      siteName: siteConfig.name,
      title: post.title,
      description: post.description,
      publishedTime: post.datePublished,
      modifiedTime: post.dateModified,
      // Use the generated root OG image (opengraph-image.tsx). The legacy
      // /og-image.svg is not a valid OG format for some platforms.
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: ["/og-image.svg"],
    },
    alternates: {
      canonical: blogPath(slug),
    },
  };
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const meta = getPostMeta(slug);
  if (!meta) notFound();

  // Article bodies are lazy-loaded per slug so each MDX file is its own
  // chunk and this route never bundles the whole content library.
  const Content = await loadArticleContent(slug);
  if (!Content) notFound();

  return (
    <>
      <Header />
      <main>
        <ArticleLayout meta={meta}>
          <Content />
        </ArticleLayout>
        <PrimeReads excludeSlug={meta.slug} />
      </main>
      <Footer />
    </>
  );
}
