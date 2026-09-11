import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import BlogCard from "@/components/blog/BlogCard";
import { blogPosts, primeBlogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "AI Search Blog | Prompt&Co.",
  description:
    "Practical guides and analysis on AI search optimization — how ChatGPT, Perplexity, Gemini, AI Overviews, AI Mode, Copilot and Claude discover, cite and recommend brands.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://promptco.online/resources/blog",
    siteName: "Prompt&Co.",
    title: "AI Search Blog | Prompt&Co.",
    description:
      "Practical guides and analysis on AI search optimization — how AI engines discover, cite and recommend brands.",
  },
  alternates: {
    canonical: "/resources/blog",
  },
};

const formatDate = (iso: string) =>
  new Date(iso + "T00:00:00Z").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

export default function BlogIndexPage() {
  const [prime1, prime2, prime3] = primeBlogPosts;
  const featuredSlugs = new Set(primeBlogPosts.map((p) => p.slug));
  const rest = blogPosts.filter((p) => !featuredSlugs.has(p.slug));

  return (
    <>
      <Header />
      <main>
        {/* ─── Hero ─── */}
        <section className="bg-gradient-hero text-white">
          <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-primary-light">
              Blog
            </p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              The AI search playbook, in plain language
            </h1>
            <p className="mt-4 max-w-2xl text-[15px] leading-7 text-brand-surface/80 sm:text-base sm:leading-8">
              Field notes on getting brands discovered, cited and recommended
              across ChatGPT, Perplexity, Gemini, AI Overviews, AI Mode, Copilot
              and Claude — written by the team doing the work every week.
            </p>
            <div className="mt-6 flex items-center gap-3 text-[13px] text-brand-surface/70">
              <span className="inline-flex h-2 w-2 rounded-full bg-gradient-brand" />
              {blogPosts.length} articles · new posts regularly
            </div>
          </div>
        </section>

        {/* ─── Prime reads (featured 3) ─── */}
        <section className="mx-auto max-w-5xl px-5 py-14 sm:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-brand-primary">
                Prime reads
              </p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-brand-dark sm:text-3xl">
                Start with these three
              </h2>
            </div>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {prime1 && <BlogCard post={prime1} index={0} />}
            {prime2 && <BlogCard post={prime2} index={1} />}
            {prime3 && <BlogCard post={prime3} index={2} />}
          </div>
        </section>

        {/* ─── All posts ─── */}
        <section className="border-t border-brand-border bg-brand-surface/60">
          <div className="mx-auto max-w-5xl px-5 py-14 sm:px-8">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 className="text-2xl font-bold tracking-tight text-brand-dark sm:text-3xl">
                All articles
              </h2>
              <p className="text-sm text-brand-muted">
                {rest.length} more · newest first
              </p>
            </div>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {rest.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className="border-t border-brand-border">
          <div className="mx-auto max-w-5xl px-5 py-14 sm:px-8">
            <div className="rounded-2xl bg-gradient-hero p-6 sm:p-10">
              <h2 className="text-xl font-bold text-white sm:text-2xl">
                Want this working for your brand?
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-brand-surface/80 sm:text-[15px] sm:leading-7">
                Get a free AI visibility audit across the same engines our
                writing covers — with a written, evidence-based action plan.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="rounded-lg bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
                >
                  Get your free AI visibility audit
                </Link>
                <Link
                  href="/resources/research"
                  className="rounded-lg border border-brand-surface/25 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Read the research
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
