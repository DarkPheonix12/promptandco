import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { siteConfig, services } from "@/lib/data";
import { BreadcrumbSchema } from "@/components/schema/SchemaMarkup";
import { Reveal } from "@/components/about/Reveal";

export const metadata: Metadata = {
  title: "Pricing — Book a Call, We Scope the Work, Then We Price It",
  description:
    "No fixed packages. Book a call, we'll discuss your goals and the scope of work, then set a price together. Everything Prompt&Co. works on — AEO, GEO, entity, technical SEO, AI content, citations and more.",
  alternates: {
    canonical: "/pricing",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://promptco.online/pricing",
    siteName: siteConfig.name,
    title: "Pricing — Book a Call, We Scope the Work, Then We Price It",
    description:
      "No fixed packages. We agree the scope of work on a call first, then set a price you can trust.",
  },
};

const steps = [
  {
    number: "01",
    title: "Book a call",
    description:
      "Free and no obligation. Tell us what you're working on, where you want to grow, and what questions you have about AI discoverability.",
  },
  {
    number: "02",
    title: "We discuss scope",
    description:
      "Your goals, your category, your current AI visibility and what success actually looks like for you. We'll be straight about what's worth doing — and what isn't.",
  },
  {
    number: "03",
    title: "Set the price together",
    description:
      "You get a price only once the scope is defined: what's included, how it's measured, and what the deliverables are. You decide from there. No lock-in, no pressure.",
  },
];

export default function PricingPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: siteConfig.url },
          { name: "Pricing", url: `${siteConfig.url}/pricing` },
        ]}
      />
      <Header />
      <main>
        {/* ─── Hero ─── */}
        <section className="bg-gradient-hero text-white relative overflow-hidden">
          <div className="absolute inset-0 grid-pattern opacity-20" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-brand-primary/[0.08] rounded-full blur-[120px] pointer-events-none animate-glow-pulse" />
          <div className="relative mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-accent">
              Pricing
            </p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
              Let&apos;s scope the work together —{" "}
              <span className="text-gradient">then we&apos;ll set the price.</span>
            </h1>
            <p className="mt-4 max-w-2xl text-[15px] leading-7 text-white/60 sm:text-base sm:leading-8">
              We don&apos;t sell fixed packages, because an honest price depends
              on what your situation actually requires. Book a call, we&apos;ll
              discuss your goals and the scope of work — and only then agree a
              price you can trust. No obligation, no pressure.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-xl bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
              >
                Book a call
              </Link>
              <Link
                href="#what-we-work-on"
                className="rounded-xl border border-white/[0.12] bg-white/[0.06] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/[0.1]"
              >
                See what we work on
              </Link>
            </div>
          </div>
        </section>

        {/* ─── How pricing works ─── */}
        <section className="mx-auto max-w-4xl px-5 py-14 sm:px-8">
          <Reveal>
            <h2 className="text-2xl font-bold tracking-tight text-brand-dark sm:text-3xl">
              How pricing works
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-3 max-w-2xl text-[15px] leading-7 text-brand-dark-700">
              Scope first, price second. That&apos;s the whole model — so the
              number you hear is for the work you actually need, not a menu
              option.
            </p>
          </Reveal>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {steps.map((step, i) => (
              <Reveal key={step.number} delay={i * 0.1} className="h-full">
                <div className="flex h-full flex-col rounded-2xl border border-brand-border bg-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-primary/30 hover:shadow-lg hover:shadow-brand-primary/[0.07]">
                  <span className="font-mono text-[13px] font-bold tracking-widest text-brand-primary">
                    {step.number}
                  </span>
                  <h3 className="mt-3 text-base font-bold text-brand-dark">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-6 text-brand-dark-700">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1} className="mt-6">
            <div className="rounded-2xl border border-brand-border bg-brand-surface/60 p-5">
              <p className="text-[13.5px] leading-6 text-brand-dark-700">
                <strong className="text-brand-dark">A note on honesty:</strong>{" "}
                we won&apos;t quote a price before we understand the work, and we
                won&apos;t promise results we can&apos;t control. Every engagement
                is measured against a baseline — so if you continue, you continue
                because the numbers moved, not because a contract says so.
              </p>
            </div>
          </Reveal>
        </section>

        {/* ─── What we work on ─── */}
        <section
          id="what-we-work-on"
          className="border-y border-brand-border bg-brand-surface/60"
        >
          <div className="mx-auto max-w-5xl px-5 py-14 sm:px-8">
            <Reveal>
              <h2 className="text-2xl font-bold tracking-tight text-brand-dark sm:text-3xl">
                What we work on
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-3 max-w-3xl text-[15px] leading-7 text-brand-dark-700">
                Everything below is part of the same discipline: making your
                brand discoverable, understandable, citable and recommendable
                across AI-driven search. Most engagements combine several — the
                mix is decided on the call.
              </p>
            </Reveal>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service, i) => (
                <Reveal key={service.slug} delay={(i % 3) * 0.08} className="h-full">
                  <Link
                    href={`/services/${service.slug}`}
                    className="group relative block h-full overflow-hidden rounded-2xl border border-brand-border bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand-primary/40 hover:shadow-xl hover:shadow-brand-primary/10"
                  >
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-primary/[0.04] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="flex items-center justify-between">
                      <h3 className="text-[15px] font-bold text-brand-dark transition-colors group-hover:text-brand-primary">
                        {service.title}
                      </h3>
                      <span className="flex h-6 w-6 -translate-x-1 items-center justify-center rounded-full border border-brand-border text-brand-muted opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                    <p className="mt-1.5 text-[13.5px] leading-5 text-brand-dark-700">
                      {service.description}
                    </p>
                  </Link>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.1}>
              <p className="mt-6 text-[12.5px] leading-5 text-brand-muted">
                Not sure which of these your brand needs? That&apos;s exactly what
                the call is for.{" "}
                <Link
                  href="/contact"
                  className="font-medium text-brand-primary hover:underline"
                >
                  Book a call
                </Link>{" "}
                and we&apos;ll help you figure it out.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className="border-t border-brand-border">
          <div className="mx-auto max-w-5xl px-5 py-14 sm:px-8">
            <Reveal>
              <div className="relative overflow-hidden rounded-2xl bg-gradient-hero p-6 sm:p-10">
                <div className="absolute inset-0 grid-pattern opacity-10" />
                <div className="absolute -top-16 right-0 h-[220px] w-[220px] rounded-full bg-brand-primary/20 blur-[90px] animate-glow-pulse" />
                <div className="relative">
                  <h2 className="text-xl font-bold text-white sm:text-2xl">
                    Let&apos;s talk scope first.
                  </h2>
                  <p className="mt-2 max-w-2xl text-sm leading-6 text-brand-surface/80 sm:text-[15px] sm:leading-7">
                    Book a free, no-obligation call. We&apos;ll discuss where you
                    want to grow, what the work looks like — and agree a price
                    that fits the actual scope.
                  </p>
                  <Link
                    href="/contact"
                    className="mt-5 inline-block rounded-lg bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
                  >
                    Book a call
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}