import Link from "next/link";
import type { BlogPost } from "@/lib/blog";

const formatDate = (iso: string) =>
  new Date(iso + "T00:00:00Z").toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

export default function BlogCard({
  post,
  index,
}: {
  post: BlogPost;
  index?: number;
}) {
  return (
    <Link
      href={post.href}
      className="group flex h-full flex-col rounded-2xl border border-brand-border bg-white p-6 transition duration-200 hover:-translate-y-0.5 hover:border-brand-primary/40 hover:shadow-xl hover:shadow-brand-primary/5 sm:p-7"
    >
      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[12.5px] font-medium text-brand-muted">
        {typeof index === "number" && (
          <span className="font-mono text-[11px] font-semibold tracking-widest text-brand-primary">
            {String(index + 1).padStart(2, "0")}
          </span>
        )}
        <span className="rounded-full bg-brand-surface-alt px-2.5 py-1 text-brand-primary">
          {post.category}
        </span>
        <span>{formatDate(post.datePublished)}</span>
        <span aria-hidden>·</span>
        <span>{post.readingTimeMinutes} min read</span>
      </div>
      <h3 className="mt-4 text-lg font-bold leading-snug tracking-tight text-brand-dark group-hover:text-brand-primary sm:text-xl">
        {post.title}
      </h3>
      <p className="mt-3 line-clamp-3 text-[14.5px] leading-6 text-brand-dark-700">
        {post.description}
      </p>
      <span className="mt-auto inline-block pt-5 text-sm font-semibold text-brand-primary">
        Read article{" "}
        <span
          aria-hidden
          className="inline-block transition-transform group-hover:translate-x-0.5"
        >
          →
        </span>
      </span>
    </Link>
  );
}
