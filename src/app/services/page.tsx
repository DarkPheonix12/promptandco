import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Icon } from "@/components/Icons";
import { services, seoMetadata } from "@/lib/data";

export const metadata: Metadata = {
  title: seoMetadata.services.title,
  description: seoMetadata.services.description,
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://promptco.online/services",
    siteName: "Prompt&Co.",
    title: seoMetadata.services.title,
    description: seoMetadata.services.description,
  },
};

export default function ServicesHubPage() {
  return (
    <>
      <Header />
      <main>
        {/* ─── Hero ─── */}
        <section className="bg-gradient-hero text-white relative overflow-hidden">
          <div className="absolute inset-0 grid-pattern opacity-20" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-brand-primary/[0.08] rounded-full blur-[120px] pointer-events-none" />
          <div className="relative mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-accent">
              Services
            </p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
              Everything your brand needs to become{" "}
              <span className="text-gradient">AI-discoverable.</span>
            </h1>
            <p className="mt-4 max-w-2xl text-[15px] leading-7 text-white/50 sm:text-base sm:leading-8">
              Nine integrated services, one goal: making your brand easier to
              discover, understand, verify and recommend across ChatGPT, Google
              AI, Perplexity, Gemini, Copilot, Claude and whatever comes next.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-xl bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
              >
                Get your free AI visibility audit
              </Link>
              <Link
                href="/case-studies"
                className="rounded-xl border border-white/[0.12] bg-white/[0.06] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/[0.1]"
              >
                See the results
              </Link>
            </div>
          </div>
        </section>

        {/* ─── Services Grid ─── */}
        <section className="mx-auto max-w-5xl px-5 py-14 sm:px-8">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <Link
                key={service.id}
                href={`/services/${service.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-brand-border bg-white p-6 transition duration-200 hover:-translate-y-0.5 hover:border-brand-primary/40 hover:shadow-xl hover:shadow-brand-primary/5"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-primary/80 to-brand-accent/80 shadow-lg shadow-brand-primary/10">
                    <Icon name={service.icon} size={20} className="text-white" />
                  </div>
                  <span className="font-mono text-[11px] font-semibold tracking-widest text-brand-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h2 className="mt-4 text-lg font-bold leading-snug tracking-tight text-brand-dark group-hover:text-brand-primary">
                  {service.title}
                </h2>
                <p className="mt-2 text-[14.5px] leading-6 text-brand-dark-700">
                  {service.description}
                </p>
                <ul className="mt-4 space-y-1.5">
                  {service.benefits.slice(0, 4).map((benefit) => (
                    <li
                      key={benefit}
                      className="flex items-start gap-2 text-[13px] text-brand-dark-600"
                    >
                      <Icon
                        name="check"
                        size={14}
                        className="mt-0.5 flex-shrink-0 text-brand-primary"
                      />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-brand-primary">
                  Explore {service.shortTitle}
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

        {/* ─── How we work ─── */}
        <section className="border-t border-brand-border bg-brand-surface/60">
          <div className="mx-auto max-w-5xl px-5 py-14 sm:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-brand-dark sm:text-3xl">
              How engagements work
            </h2>
            <p className="mt-3 max-w-2xl text-[15px] leading-7 text-brand-dark-700">
              Every engagement follows the same measured, compounding loop —
              whether you start with one service or the full program.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  step: "01",
                  title: "Baseline first",
                  description:
                    "We measure current AI visibility across platforms before changing anything — so progress is provable.",
                },
                {
                  step: "02",
                  title: "Foundation before polish",
                  description:
                    "Technical access, entity clarity and structure are fixed before content and authority investments.",
                },
                {
                  step: "03",
                  title: "Compound monthly",
                  description:
                    "Each month expands coverage around the prompts and topics that matter to revenue.",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="rounded-2xl border border-brand-border bg-white p-6"
                >
                  <span className="font-mono text-[11px] font-semibold tracking-widest text-brand-primary">
                    {item.step}
                  </span>
                  <h3 className="mt-2 text-base font-bold text-brand-dark">
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

        {/* ─── CTA ─── */}
        <section className="border-t border-brand-border">
          <div className="mx-auto max-w-5xl px-5 py-14 sm:px-8">
            <div className="rounded-2xl bg-gradient-hero p-6 sm:p-10">
              <h2 className="text-xl font-bold text-white sm:text-2xl">
                Not sure which service you need?
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-white/70 sm:text-[15px] sm:leading-7">
                Start with a free AI visibility audit. We&apos;ll show you where
                you stand across the engines your buyers use — and which
                services would move the needle.
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
