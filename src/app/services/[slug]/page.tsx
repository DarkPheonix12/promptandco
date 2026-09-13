import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Icon } from "@/components/Icons";
import { services, siteConfig } from "@/lib/data";
import { serviceDetails } from "@/lib/service-details";
import { getResearchLinks } from "@/lib/service-research-links";
import { serviceUrl } from "@/lib/service-path";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  const detail = serviceDetails[slug];
  if (!service || !detail) return {};

  // No brand suffix: the layout's "%s | Prompt&Co." template appends it once.
  const title = `${service.title} Services`;
  const description = service.description;

  return {
    title,
    description,
    keywords: service.benefits,
    openGraph: {
      type: "website",
      locale: "en_US",
      url: serviceUrl(slug),
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
      canonical: `/services/${slug}`,
    },
  };
}

const serviceLd = (slug: string, name: string, description: string) =>
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
    url: serviceUrl(slug),
  }).replace(/</g, "\\u003c");

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  const detail = serviceDetails[slug];
  if (!service || !detail) notFound();

  const relatedServices = detail.related
    .map((rel) => services.find((s) => s.slug === rel))
    .filter((s): s is (typeof services)[number] => Boolean(s));
  const researchLinks = getResearchLinks(slug);

  return (
    <>
      <Header />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: serviceLd(service.slug, service.title, service.description),
          }}
        />

        {/* ─── Hero ─── */}
        <section className="bg-gradient-hero text-white relative overflow-hidden">
          <div className="absolute inset-0 grid-pattern opacity-20" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-brand-primary/[0.08] rounded-full blur-[120px] pointer-events-none" />
          <div className="relative mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
            {/* Breadcrumb */}
            <nav
              aria-label="Breadcrumb"
              className="mb-6 flex items-center gap-2 text-[13px] text-white/40"
            >
              <Link href="/services" className="hover:text-white/70 transition-colors">
                Services
              </Link>
              <span aria-hidden>·</span>
              <span className="text-brand-accent">{service.shortTitle}</span>
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

        {/* ─── What's included ─── */}
        <section className="border-y border-brand-border bg-brand-surface/60">
          <div className="mx-auto max-w-5xl px-5 py-14 sm:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-brand-dark sm:text-3xl">
              What&apos;s included
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {detail.deliverables.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-brand-border bg-white p-6"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-surface-alt">
                    <Icon
                      name="check"
                      size={16}
                      className="text-brand-primary"
                    />
                  </div>
                  <h3 className="mt-3.5 text-base font-bold text-brand-dark">
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

        {/* ─── Process ─── */}
        <section className="mx-auto max-w-5xl px-5 py-14 sm:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-brand-dark sm:text-3xl">
            How it works
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {detail.process.map((step, i) => (
              <div
                key={step.title}
                className="flex gap-4 rounded-2xl border border-brand-border bg-white p-6"
              >
                <span className="font-mono text-[13px] font-bold tracking-widest text-brand-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-base font-bold text-brand-dark">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-[14px] leading-6 text-brand-dark-700">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── Outcomes ─── */}
        <section className="border-y border-brand-border bg-brand-surface/60">
          <div className="mx-auto max-w-3xl px-5 py-14 sm:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-brand-dark sm:text-3xl">
              What you get
            </h2>
            <ul className="mt-6 space-y-3">
              {detail.outcomes.map((outcome) => (
                <li key={outcome} className="flex items-start gap-3">
                  <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-brand-primary/10">
                    <Icon name="check" size={12} className="text-brand-primary" />
                  </span>
                  <span className="text-[15px] leading-7 text-brand-dark-700">
                    {outcome}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ─── FAQ ─── */}
        <section className="mx-auto max-w-3xl px-5 py-14 sm:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-brand-dark sm:text-3xl">
            Frequently asked questions
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

        {/* ─── Related services ─── */}
        <section className="border-t border-brand-border bg-brand-surface/60">
          <div className="mx-auto max-w-5xl px-5 py-14 sm:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-brand-dark sm:text-3xl">
              Related services
            </h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {relatedServices.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/services/${rel.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-brand-border bg-white p-6 transition duration-200 hover:-translate-y-0.5 hover:border-brand-primary/40 hover:shadow-xl hover:shadow-brand-primary/5"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-primary/80 to-brand-accent/80">
                    <Icon name={rel.icon} size={18} className="text-white" />
                  </div>
                  <h3 className="mt-3.5 text-base font-bold text-brand-dark group-hover:text-brand-primary">
                    {rel.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-6 text-brand-dark-700">
                    {rel.description}
                  </p>
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-semibold text-brand-primary">
                    Explore {rel.shortTitle}
                    <Icon
                      name="arrow-right"
                      size={14}
                      className="transition-transform group-hover:translate-x-0.5"
                    />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Research cluster ─── */}
        {researchLinks.length > 0 && (
          <section className="mx-auto max-w-5xl px-5 py-14 sm:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-brand-dark sm:text-3xl">
              The research behind this service
            </h2>
            <p className="mt-2 max-w-2xl text-[15px] leading-7 text-brand-dark-700">
              Our published methodology and evidence — the same frameworks this service applies.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {researchLinks.map((link) => (
                <Link
                  key={link.slug}
                  href={link.href}
                  className="group rounded-2xl border border-brand-border bg-white p-6 transition duration-200 hover:-translate-y-0.5 hover:border-brand-primary/40 hover:shadow-xl hover:shadow-brand-primary/5"
                >
                  <h3 className="text-base font-bold text-brand-dark group-hover:text-brand-primary">
                    {link.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-6 text-brand-dark-700">
                    {link.description}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-primary">
                    Read the research
                    <Icon
                      name="arrow-right"
                      size={14}
                      className="transition-transform group-hover:translate-x-0.5"
                    />
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* ─── CTA ─── */}
        <section className="border-t border-brand-border">
          <div className="mx-auto max-w-5xl px-5 py-14 sm:px-8">
            <div className="rounded-2xl bg-gradient-hero p-6 sm:p-10">
              <h2 className="text-xl font-bold text-white sm:text-2xl">
                Find out what AI says about your brand today.
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
