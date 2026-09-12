import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { posts } from "@/content/research";
import { researchPath } from "@/lib/research";

export const metadata: Metadata = {
  title: "AI Search Research",
  description:
    "Original research and evidence-backed analysis on how AI engines cite sources — ChatGPT, Perplexity, Gemini, AI Overviews, AI Mode, Copilot and Claude.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://promptco.online/resources/research",
    siteName: "Prompt&Co.",
    title: "AI Search Research",
    description:
      "Original research and evidence-backed analysis on how AI engines cite sources.",
  },
  alternates: {
    canonical: "/resources/research",
  },
};

const formatDate = (iso: string) =>
  new Date(iso + "T00:00:00Z").toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

export default function ResearchIndexPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-gradient-hero text-white">
          <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-primary-light">
              Research
            </p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              How AI actually cites sources
            </h1>
            <p className="mt-4 max-w-2xl text-[15px] leading-7 text-brand-surface/80 sm:text-base sm:leading-8">
              Evidence-backed analysis of the AI search ecosystem — what the published data
              shows about ChatGPT, Perplexity, Gemini, AI Overviews, AI Mode and Copilot, and
              what it means for how your brand gets discovered, cited and recommended.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-5 py-12 sm:px-8">
          <div className="grid gap-6">
            {posts.map((post) => (
              <Link
                key={post.meta.slug}
                href={researchPath(post.meta.slug)}
                className="group rounded-2xl border border-brand-border bg-white p-6 transition hover:border-brand-primary/40 hover:shadow-lg sm:p-8"
              >
                <div className="flex flex-wrap items-center gap-2 text-[12.5px] font-medium text-brand-muted">
                  <span className="rounded-full bg-brand-surface-alt px-2.5 py-1 text-brand-primary">
                    {post.meta.category}
                  </span>
                  <span>{formatDate(post.meta.datePublished)}</span>
                  <span aria-hidden>·</span>
                  <span>{post.meta.readingTimeMinutes} min read</span>
                </div>
                <h2 className="mt-3 text-xl font-bold tracking-tight text-brand-dark group-hover:text-brand-primary sm:text-2xl">
                  {post.meta.title}
                </h2>
                <p className="mt-3 text-[14.5px] leading-6 text-brand-dark-700">
                  {post.meta.description}
                </p>
                <span className="mt-4 inline-block text-sm font-semibold text-brand-primary">
                  Read the study →
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-12 rounded-2xl bg-gradient-hero p-6 sm:p-8">
            <h2 className="text-xl font-bold text-white sm:text-2xl">
              Running a study? Tell us what AI says about your brand first.
            </h2>
            <p className="mt-2 text-sm leading-6 text-brand-surface/80 sm:text-[15px] sm:leading-7">
              Get a free AI visibility audit across the same engines our research covers —
              with a written, evidence-based action plan.
            </p>
            <Link
              href="/contact"
              className="mt-5 inline-block rounded-lg bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Get your free AI visibility audit
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}