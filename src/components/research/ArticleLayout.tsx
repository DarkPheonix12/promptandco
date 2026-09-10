import Link from "next/link";
import type { ReactNode } from "react";
import { siteConfig } from "@/lib/data";
import { researchUrl, type ResearchMeta } from "@/lib/research";

const sanitizeLd = (jsonLd: Record<string, unknown>) =>
  JSON.stringify(jsonLd).replace(/</g, "\\u003c");

export default function ArticleLayout({
  meta,
  children,
}: {
  meta: ResearchMeta;
  children: ReactNode;
}) {
  const blogPostingLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: meta.title,
    description: meta.description,
    datePublished: meta.datePublished,
    dateModified: meta.dateModified,
    inLanguage: "en",
    keywords: meta.tags.join(", "),
    author: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    mainEntityOfPage: researchUrl(meta.slug),
  };

  const faqLd = meta.faq?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: meta.faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      }
    : null;

  return (
    <article className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: sanitizeLd(blogPostingLd) }}
      />
      {faqLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: sanitizeLd(faqLd) }}
        />
      ) : null}

      <div className="mx-auto max-w-3xl px-5 pb-16 pt-10 sm:px-8">
        <div className="mb-6 flex flex-wrap items-center gap-2 text-[13px] text-brand-muted">
          <Link
            href="/resources/research"
            className="font-medium text-brand-primary hover:underline"
          >
            Research
          </Link>
          <span aria-hidden>·</span>
          <span className="font-medium uppercase tracking-wide text-brand-primary">
            {meta.category}
          </span>
          <span aria-hidden>·</span>
          <time dateTime={meta.datePublished}>
            {new Date(meta.datePublished + "T00:00:00Z").toLocaleDateString(
              "en-US",
              { year: "numeric", month: "long", day: "numeric" }
            )}
          </time>
          <span aria-hidden>·</span>
          <span>{meta.readingTimeMinutes} min read</span>
        </div>

        <h1 className="text-3xl font-bold leading-tight tracking-tight text-brand-dark sm:text-4xl">
          {meta.title}
        </h1>

        <p className="mt-4 text-lg leading-8 text-brand-dark-700">
          {meta.description}
        </p>

        <div className="mt-8 border-b border-brand-border/60 pb-8">{children}</div>

        {meta.faq?.length ? (
          <section className="mt-10">
            <h2 className="text-2xl font-bold tracking-tight text-brand-dark">
              Frequently asked questions
            </h2>
            <div className="mt-4 divide-y divide-brand-border/60 rounded-xl border border-brand-border/60 bg-brand-surface">
              {meta.faq.map((item) => (
                <div key={item.question} className="p-5">
                  <h3 className="text-[15px] font-semibold text-brand-dark">
                    {item.question}
                  </h3>
                  <p className="mt-2 text-[14.5px] leading-7 text-brand-dark-700">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>
        ) : null}

        <div className="mt-8 flex flex-wrap gap-2">
          {meta.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-brand-surface-alt px-3 py-1 text-[12.5px] font-medium text-brand-dark-700"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-10 rounded-2xl bg-gradient-hero p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white sm:text-2xl">
            Know what AI actually says about your brand.
          </h2>
          <p className="mt-2 text-sm leading-6 text-brand-surface/80 sm:text-[15px] sm:leading-7">
            We audit your visibility across ChatGPT, Perplexity, Gemini, AI Overviews,
            AI Mode, Copilot and Claude — with a written, evidence-based action plan.
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
              More research
            </Link>
          </div>
        </div>

        <p className="mt-8 text-[12.5px] leading-5 text-brand-muted">
          Prompt&Co. is an AI search optimization agency specializing in AEO and GEO.
          Published {new Date(meta.datePublished + "T00:00:00Z").toLocaleDateString(
            "en-US",
            { year: "numeric", month: "long" }
          )}.
        </p>
      </div>
    </article>
  );
}