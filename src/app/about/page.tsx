import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/lib/data";
import { BreadcrumbSchema } from "@/components/schema/SchemaMarkup";

export const metadata: Metadata = {
  title: seoTitle(),
  description:
    "Prompt&Co. is an AI search optimization agency specializing in AEO, GEO, entity optimization and AI visibility. What we do, how we work, and the standards we hold.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://promptco.online/about",
    siteName: siteConfig.name,
    title: "About Prompt&Co.",
    description:
      "An AI search optimization agency built by operators — what we do, how we work, and the standards we hold.",
  },
};

function seoTitle() {
  return "About — AI Search & AEO/GEO Agency";
}

const principles = [
  {
    title: "Evidence over promises",
    description:
      "We measure before we change anything, cite third-party data when we make claims, and label estimates as estimates. Where we use illustrative examples instead of real client results, we say so explicitly.",
  },
  {
    title: "No guaranteed placements",
    description:
      "No responsible practitioner can guarantee what a third-party AI model generates. Anyone promising \"#1 in ChatGPT\" is selling certainty that doesn't exist. We strengthen measurable signals and show you the movement.",
  },
  {
    title: "White-hat only",
    description:
      "No fake reviews, fabricated case studies, astroturfed community mentions, link farms or spam. AI systems are increasingly good at detecting manipulation — and beyond the ethics, it simply doesn't last.",
  },
  {
    title: "Teach, don't gatekeep",
    description:
      "Our research hub publishes primary-source analysis of how AI engines cite and recommend. If you never hire us, you should still leave smarter than you arrived.",
  },
];

export default function AboutPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: siteConfig.url },
          { name: "About", url: `${siteConfig.url}/about` },
        ]}
      />
      <Header />
      <main>
        {/* ─── Hero ─── */}
        <section className="bg-gradient-hero text-white relative overflow-hidden">
          <div className="absolute inset-0 grid-pattern opacity-20" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-brand-primary/[0.08] rounded-full blur-[120px] pointer-events-none" />
          <div className="relative mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-accent">
              About
            </p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
              We help brands become part of the{" "}
              <span className="text-gradient">answer.</span>
            </h1>
            <p className="mt-4 max-w-2xl text-[15px] leading-7 text-white/60 sm:text-base sm:leading-8">
              Prompt&Co. is an AI search optimization agency specializing in
              Answer Engine Optimization (AEO), Generative Engine Optimization
              (GEO), entity optimization, technical SEO and digital PR. We work
              with B2B, SaaS, e-commerce and professional-services brands that
              want to be discoverable, citable and recommendable across ChatGPT,
              Google AI Overviews and AI Mode, Perplexity, Gemini, Copilot and
              Claude.
            </p>
          </div>
        </section>

        {/* ─── What we do ─── */}
        <section className="mx-auto max-w-3xl px-5 py-14 sm:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-brand-dark sm:text-3xl">
            What we actually do
          </h2>
          <p className="mt-4 text-[15.5px] leading-8 text-brand-dark-700">
            AI systems answer questions by retrieving sources, weighing
            corroboration and recommending what they can verify. Our work
            strengthens every layer of that pipeline: the technical foundation
            that lets machines read your site, the content architecture that
            makes answers extractable, the entity signals that make your brand
            unambiguous, and the third-party footprint that makes you credible
            beyond your own domain.
          </p>
          <p className="mt-4 text-[15.5px] leading-8 text-brand-dark-700">
            Practically, that means measurement first — a baseline of how often
            and how accurately AI systems mention your brand today — followed by
            fixes in priority order, and monthly reporting that shows movement
            against that baseline. Everything we recommend is something we can
            measure.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/services"
              className="rounded-xl bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Explore the services
            </Link>
            <Link
              href="/resources/research"
              className="rounded-xl border border-brand-border bg-white px-5 py-2.5 text-sm font-semibold text-brand-dark transition hover:border-brand-primary/40"
            >
              Read the research
            </Link>
          </div>
        </section>

        {/* ─── How we're different ─── */}
        <section className="border-y border-brand-border bg-brand-surface/60">
          <div className="mx-auto max-w-4xl px-5 py-14 sm:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-brand-dark sm:text-3xl">
              How we work
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {principles.map((p) => (
                <div
                  key={p.title}
                  className="rounded-2xl border border-brand-border bg-white p-6"
                >
                  <h3 className="text-base font-bold text-brand-dark">{p.title}</h3>
                  <p className="mt-2 text-[14px] leading-6 text-brand-dark-700">
                    {p.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Our research ─── */}
        <section className="mx-auto max-w-3xl px-5 py-14 sm:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-brand-dark sm:text-3xl">
            The research behind our work
          </h2>
          <p className="mt-4 text-[15.5px] leading-8 text-brand-dark-700">
            Our strategies are built on published evidence, not vibes. Our
            research hub analyzes primary 2026 studies — tens of millions of
            measured AI citations — covering per-engine citation divergence, the
            role of reviews and community platforms, local AI ranking factors,
            zero-click economics and more. Every strategy we run starts from
            this evidence base, and we publish what we learn.
          </p>
          <p className="mt-4 text-[15.5px] leading-8 text-brand-dark-700">
            Editorial standards: we cite named sources for claims, label
            estimates as estimates, date-stamp our analysis, and correct the
            record when the data changes. Client work is only ever presented as
            a case study with real, verifiable numbers — never as an
            illustrative model dressed up as proof.
          </p>
        </section>

        {/* ─── Team honesty section ─── */}
        <section className="border-y border-brand-border bg-brand-surface/60">
          <div className="mx-auto max-w-3xl px-5 py-14 sm:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-brand-dark sm:text-3xl">
              Who&apos;s behind Prompt&Co.
            </h2>
            <p className="mt-4 text-[15.5px] leading-8 text-brand-dark-700">
              Prompt&Co. is operated by practitioners with hands-on backgrounds
              in AI and machine learning engineering, LLM applications and
              enterprise digital strategy — including work with globally
              recognized consumer brands. We&apos;re builders who turned to
              optimization because we saw, from the inside, how much of what AI
              systems say about a company is determined by signals that company
              never thought to manage.
            </p>
            <p className="mt-4 text-[15.5px] leading-8 text-brand-dark-700">
              Prefer to talk to a human? Email{" "}
              <a
                href="mailto:hello@promptco.online"
                className="font-medium text-brand-primary hover:underline"
              >
                hello@promptco.online
              </a>{" "}
              or use the{" "}
              <Link
                href="/contact"
                className="font-medium text-brand-primary hover:underline"
              >
                contact form
              </Link>
              . A person — not a bot — reviews every request.
            </p>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className="border-t border-brand-border">
          <div className="mx-auto max-w-5xl px-5 py-14 sm:px-8">
            <div className="rounded-2xl bg-gradient-hero p-6 sm:p-10">
              <h2 className="text-xl font-bold text-white sm:text-2xl">
                See what AI says about your brand today.
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-brand-surface/80 sm:text-[15px] sm:leading-7">
                Free AI visibility audit across the major engines — with a
                written, evidence-based action plan. No obligation.
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
