import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { industries, seoMetadata } from "@/lib/data";
import { industryDetails } from "@/lib/industry-details";
import { BreadcrumbSchema } from "@/components/schema/SchemaMarkup";

export const metadata: Metadata = {
  title: seoMetadata.industries.title,
  description: seoMetadata.industries.description,
  alternates: {
    canonical: "/industries",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://promptco.online/industries",
    siteName: "Prompt&Co.",
    title: seoMetadata.industries.title,
    description: seoMetadata.industries.description,
  },
};

export default function IndustriesHubPage() {
  const withDetail = industries.filter((i) => i.slug in industryDetails);

  return (
    <>
      <Header />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://promptco.online" },
          { name: "Industries", url: "https://promptco.online/industries" },
        ]}
      />
      <main>
        {/* ─── Hero ─── */}
        <section className="bg-gradient-hero text-white relative overflow-hidden">
          <div className="absolute inset-0 grid-pattern opacity-20" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-brand-primary/[0.08] rounded-full blur-[120px] pointer-events-none" />
          <div className="relative mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-accent">
              Industries
            </p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
              AI search optimization, adapted to{" "}
              <span className="text-gradient">how your market discovers.</span>
            </h1>
            <p className="mt-4 max-w-2xl text-[15px] leading-7 text-white/50 sm:text-base sm:leading-8">
              Every industry has different buyers, prompts, decision criteria
              and sources of authority. We adapt AI search optimization to the
              way each market is actually discovered — starting with the
              verticals where AI-assisted buying runs deepest.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-xl bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
              >
                Get your free AI visibility audit
              </Link>
              <Link
                href="/services"
                className="rounded-xl border border-white/[0.12] bg-white/[0.06] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/[0.1]"
              >
                Explore the services
              </Link>
            </div>
          </div>
        </section>

        {/* ─── Industry cards ─── */}
        <section className="mx-auto max-w-5xl px-5 py-14 sm:px-8">
          <div className="grid gap-6 sm:grid-cols-2">
            {withDetail.map((industry) => {
              const detail = industryDetails[industry.slug];
              return (
                <Link
                  key={industry.slug}
                  href={`/industries/${industry.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-brand-border bg-white p-6 transition duration-200 hover:-translate-y-0.5 hover:border-brand-primary/40 hover:shadow-xl hover:shadow-brand-primary/5"
                >
                  <p className="text-sm font-semibold uppercase tracking-widest text-brand-primary">
                    {industry.name}
                  </p>
                  <h2 className="mt-3 text-lg font-bold tracking-tight text-brand-dark group-hover:text-brand-primary">
                    {detail?.heroTitle}
                  </h2>
                  <p className="mt-2 text-[14px] leading-6 text-brand-dark-700">
                    {detail?.heroSubtitle}
                  </p>
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-semibold text-brand-primary">
                    See the industry playbook
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="transition-transform group-hover:translate-x-0.5"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              );
            })}
          </div>

          {/* Honest note about scope */}
          <p className="mt-8 max-w-3xl text-[13px] leading-6 text-brand-muted">
            We work with brands in many other industries — these five are the
            verticals we&apos;ve studied most deeply and written about most,
            not the only ones we serve. If your industry isn&apos;t listed,
            the free AI visibility audit is still the right starting point.
          </p>
        </section>

        {/* ─── CTA ─── */}
        <section className="border-t border-brand-border">
          <div className="mx-auto max-w-5xl px-5 py-14 sm:px-8">
            <div className="rounded-2xl bg-gradient-hero p-6 sm:p-10">
              <h2 className="text-xl font-bold text-white sm:text-2xl">
                Find out how AI answers describe your industry — and you.
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-brand-surface/80 sm:text-[15px] sm:leading-7">
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
