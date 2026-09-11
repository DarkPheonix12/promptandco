import Link from "next/link";
import { blogPosts, primeBlogPosts, type BlogPost } from "@/lib/blog";
import BlogCard from "./BlogCard";

/**
 * "Prime reads" — the three featured posts shown at the bottom of every
 * article page and as the featured section of the blog index. The current
 * article (excludeSlug) is skipped and the list is topped up with the next
 * newest posts so readers always see exactly three.
 */
export default function PrimeReads({
  excludeSlug,
}: {
  excludeSlug?: string;
}) {
  const picks: BlogPost[] = [];
  for (const post of [...primeBlogPosts, ...blogPosts]) {
    if (picks.length === 3) break;
    if (post.slug === excludeSlug) continue;
    if (picks.some((p) => p.slug === post.slug)) continue;
    picks.push(post);
  }
  if (picks.length === 0) return null;

  return (
    <section className="mx-auto w-full max-w-5xl px-5 py-14 sm:px-8">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-primary">
            Prime reads
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-brand-dark sm:text-3xl">
            Start with these three
          </h2>
        </div>
        <Link
          href="/resources/blog"
          className="text-sm font-semibold text-brand-primary hover:underline"
        >
          All posts{" "}
          <span aria-hidden className="inline-block">
            →
          </span>
        </Link>
      </div>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {picks.map((post, i) => (
          <BlogCard key={post.slug} post={post} index={i} />
        ))}
      </div>
    </section>
  );
}
