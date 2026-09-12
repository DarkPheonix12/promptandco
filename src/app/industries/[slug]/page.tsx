import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Icon } from "@/components/Icons";
import { siteConfig } from "@/lib/data";
import { industryDetails } from "@/lib/industry-details";
import { BreadcrumbSchema, FAQSchema } from "@/components/schema/SchemaMarkup";
import { serviceDetails } from "@/lib/service-details";

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(industryDetails).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const detail = industryDetails[slug];
  if (!detail) return {};

  // No brand suffix: the layout's "%s | Prompt&Co." template appends it once.
  const title = `AI Search Optimization for ${detail.heroTitle
    .replace(/^AI Search Optimization for /, "")}`;
  const description = detail.heroSubtitle;

  return {
    title,
    description,
    openGraph: {
      type: "website",
      locale: "en_US",
      url: `https://promptco.online/industries/${slug}`,
      siteName: siteConfig.name,
      title,
      description,
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
    alternates: {
      canonical: `/industries/${slug}`,
    },
  };
}

const industryLd = (
  slug: string,
  name: string,
  description: string
) =>
  JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: "Worldwide",
    url: `https://promptco.online/industries/${slug}`,
  }).replace(/</g, "\\u003c");

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const detail = industryDetails[slug];
  if (!detail) notFound();

  const relatedServices = detail.relatedServices
    .map((rel) => serviceDetails[rel])
    .filter(Boolean);

  const industryName = detail.heroTitle
    .replace(/^AI Search Optimization for /, "")
    .replace("AI Search", "AI search");

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: siteConfig.url },
          { name: "Industries", url: `${siteConfig.url}/industries` },
          { name: industryName, url: `${siteConfig.url}/industries/${slug}` },
        ]}
      />
      <FAQSchema faqs={detail.faq} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: industryLd(slug, detail.heroTitle, detail.heroSubtitle),
        }}
      />
      <Header />
      <main>
        {/* ─── Hero ─── */}
        <section className="bg-gradient-hero text-white relative overflow-hidden">
          <div className="absolute inset-0 grid-pattern opacity-20" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-brand-primary/[0.08] rounded-full blur-[120px] pointer-events-none" />
          <div className="relative mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
            <nav
              aria-label="Breadcrumb"
              className="mb-6 flex items-center gap-2 text-[13px] text-white/40"
            >
              <Link
                href="/industries"
                className="hover:text-white/70 transition-colors"
              >
                Industries
              </Link>
              <span aria-hidden>·</span>
              <span className="text-brand-accent">{industryName}</span>
            </nav>

            <p className="text-sm font-semibold uppercase tracking-widest text-brand-accent">
              {detail.heroTag}
            </p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
              {detail.heroTitle}
            </h1>
            <p className="mt-4 max-w-2xl text-[15px] leading-7 text-white/60 sm:text-base sm:leading-8">
              {detail.heroSubtitle}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-xl bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
              >
                Get your free AI visibility audit
              </Link>
              <Link
                href="/resources/research"
                className="rounded-xl border border-white/[0.12] bg-white/[0.06] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/[0.1]"
              >
                Read the research
              </Link>
            </div>
          </div>
        </section>

        {/* ─── Market data ─── */}
        <section className="border-b border-brand-border bg-brand-surface/60">
          <div className="mx-auto max-w-5xl px-5 py-12 sm:px-8">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-brand-muted">
              What the 2026 data shows
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {detail.marketData.map((item) => (
                <div
                  key={item.stat}
                  className="rounded-2xl border border-brand-border bg-white p-5"
                >
                  <p className="text-2xl font-bold text-brand-primary">
                    {item.stat}
                  </p>
                  <p className="mt-2 text-[13px] leading-5 text-brand-dark-700">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-[12px] leading-5 text-brand-muted">
              Figures are from published third-party studies, cited as
              reported; see the linked research below for methodology and
              caveats. Prompt&Co. does not present these as guarantees of
              results.
            </p>
          </div>
        </section>

        {/* ─── Intro ─── */}
        <section className="mx-auto max-w-3xl px-5 py-14 sm:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-brand-dark sm:text-3xl">
            {detail.intro.heading}
          </h2>
          {detail.intro.body.map((paragraph) => (
            <p
              key={paragraph.slice(0, 40)}
              className="mt-4 text-[15.5px] leading-8 text-brand-dark-700"
            >
              {paragraph}
            </p>
          ))}
        </section>

        {/* ─── Dynamics ─── */}
        <section className="border-y border-brand-border bg-brand-surface/60">
          <div className="mx-auto max-w-5xl px-5 py-14 sm:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-brand-dark sm:text-3xl">
              How AI discovery works in {industryName.toLowerCase()}
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {detail.dynamics.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-brand-border bg-white p-6"
                >
                  <h3 className="text-base font-bold text-brand-dark">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-6 text-brand-dark-700">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Priorities ─── */}
        <section className="mx-auto max-w-3xl px-5 py-14 sm:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-brand-dark sm:text-3xl">
            Where we focus first
          </h2>
          <ol className="mt-8 space-y-6">
            {detail.priorities.map((item, i) => (
              <li key={item.title} className="flex gap-4">
                <span className="font-mono text-[13px] font-bold tracking-widest text-brand-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-base font-bold text-brand-dark">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-[14.5px] leading-7 text-brand-dark-700">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* ─── Metrics ─── */}
        <section className="border-y border-brand-border bg-brand-surface/60">
          <div className="mx-auto max-w-5xl px-5 py-14 sm:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-brand-dark sm:text-3xl">
              How success is measured
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {detail.metrics.map((metric) => (
                <div
                  key={metric.title}
                  className="flex gap-4 rounded-2xl border border-brand-border bg-white p-6"
                >
                  <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-brand-primary/10">
                    <Icon name="chart" size={13} className="text-brand-primary" />
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-brand-dark">
                      {metric.title}
                    </h3>
                    <p className="mt-1.5 text-[14px] leading-6 text-brand-dark-700">
                      {metric.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── FAQ ─── */}
        <section className="mx-auto max-w-3xl px-5 py-14 sm:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-brand-dark sm:text-3xl">
            {industryName} AI search FAQs
          </h2>
          <div className="mt-6 divide-y divide-brand-border/60 rounded-xl border border-brand-border/60 bg-brand-surface">
            {detail.faq.map((item) => (
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

        {/* ─── Related services + research ─── */}
        <section className="border-t border-brand-border bg-brand-surface/60">
          <div className="mx-auto max-w-5xl px-5 py-14 sm:px-8">
            <div className="grid gap-10 lg:grid-cols-2">
              <div>
                <h2 className="text-xl font-bold tracking-tight text-brand-dark sm:text-2xl">
                  Relevant services
                </h2>
                <div className="mt-6 space-y-3">
                  {relatedServices.map((rel) => (
                    <Link
                      key={rel.slug}
                      href={`/services/${rel.slug}`}
                      className="group flex items-start justify-between gap-4 rounded-xl border border-brand-border bg-white p-4 transition hover:border-brand-primary/40"
                    >
                      <div>
                        <p className="text-[15px] font-semibold text-brand-dark group-hover:text-brand-primary">
                          {rel.heroTitle} — {rel.heroTag}
                        </p>
                        <p className="mt-1 text-[13px] leading-5 text-brand-dark-700">
                          {rel.heroSubtitle.slice(0, 110)}…
                        </p>
                      </div>
                      <Icon
                        name="arrow-right"
                        size={16}
                        className="mt-1 flex-shrink-0 text-brand-primary"
                      />
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="text-xl font-bold tracking-tight text-brand-dark sm:text-2xl">
                  Research behind this page
                </h2>
                <div className="mt-6 space-y-3">
                  {detail.relatedResearch.map((r) => (
                    <Link
                      key={r.href}
                      href={r.href}
                      className="group flex items-start justify-between gap-4 rounded-xl border border-brand-border bg-white p-4 transition hover:border-brand-primary/40"
                    >
                      <p className="text-[15px] font-semibold text-brand-dark group-hover:text-brand-primary">
                        {r.title}
                      </p>
                      <Icon
                        name="arrow-right"
                        size={16}
                        className="mt-1 flex-shrink-0 text-brand-primary"
                      />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className="border-t border-brand-border">
          <div className="mx-auto max-w-5xl px-5 py-14 sm:px-8">
            <div className="rounded-2xl bg-gradient-hero p-6 sm:p-10">
              <h2 className="text-xl font-bold text-white sm:text-2xl">
                Find out what AI tells {industryName.toLowerCase()} buyers
                about you today.
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-white/70 sm:text-[15px] sm:leading-7">
                Free AI visibility audit across ChatGPT, Perplexity, Gemini, AI
                Overviews, AI Mode, Copilot and Claude — with a written,
                evidence-based action plan.
              </p>
              <Link
                href="/contact"
                className="mt-5 inline-block rounded-lg bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
              >
                Get your free AI visibility audit
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
