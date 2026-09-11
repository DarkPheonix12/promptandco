import { posts } from "@/content/research";

/**
 * The blog reuses the research article pipeline — the same MDX content is
 * surfaced at /resources/blog with a magazine-style layout. Slugs are shared,
 * but blog URLs get their own canonical path (/resources/blog/<slug>) so each
 * surface can rank independently.
 */

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  datePublished: string;
  dateModified: string;
  category: string;
  tags: string[];
  readingTimeMinutes: number;
  href: string;
}

export const blogPath = (slug: string) => `/resources/blog/${slug}`;

export const blogUrl = (slug: string) =>
  `https://promptco.online/resources/blog/${slug}`;

const toBlogPost = (post: (typeof posts)[number]["meta"]): BlogPost => ({
  slug: post.slug,
  title: post.title,
  description: post.description,
  datePublished: post.datePublished,
  dateModified: post.dateModified,
  category: post.category,
  tags: post.tags,
  readingTimeMinutes: post.readingTimeMinutes,
  href: blogPath(post.slug),
});

export const blogPosts: BlogPost[] = posts
  .map((post) => toBlogPost(post.meta))
  .sort(
    (a, b) =>
      new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime()
  );

/**
 * The 3 prime (featured) posts: the three most recent articles.
 */
export const primeBlogPosts: BlogPost[] = blogPosts.slice(0, 3);

export const getBlogPost = (slug: string): BlogPost | undefined =>
  blogPosts.find((post) => post.slug === slug);
