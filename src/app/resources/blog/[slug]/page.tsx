import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import ArticleLayout from "@/components/research/ArticleLayout";
import PrimeReads from "@/components/blog/PrimeReads";
import { getPost, posts } from "@/content/research";
import { blogPath, blogUrl } from "@/lib/blog";
import { siteConfig } from "@/lib/data";

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.meta.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  return {
    title: post.meta.title,
    description: post.meta.description,
    keywords: post.meta.tags,
    authors: [{ name: siteConfig.name, url: siteConfig.url }],
    openGraph: {
      type: "article",
      locale: "en_US",
      url: blogUrl(slug),
      siteName: siteConfig.name,
      title: post.meta.title,
      description: post.meta.description,
      publishedTime: post.meta.datePublished,
      modifiedTime: post.meta.dateModified,
      // Use the generated root OG image (opengraph-image.tsx). The legacy
      // /og-image.svg is not a valid OG format for some platforms.
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: post.meta.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.meta.title,
      description: post.meta.description,
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
  const post = getPost(slug);
  if (!post) notFound();

  const Content = post.Content;

  return (
    <>
      <Header />
      <main>
        <ArticleLayout meta={post.meta}>
          <Content />
        </ArticleLayout>
        <PrimeReads excludeSlug={post.meta.slug} />
      </main>
      <Footer />
    </>
  );
}
