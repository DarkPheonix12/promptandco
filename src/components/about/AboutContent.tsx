"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  siteConfig,
  industries,
  services,
  aiPlatforms,
} from "@/lib/data";
import { industryDetails } from "@/lib/industry-details";
import { Reveal } from "./Reveal";
import { CountUp } from "./CountUp";
import { SignalTerminal } from "./SignalTerminal";
import { AnimatedPipeline } from "./AnimatedPipeline";

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

const capabilityLines: Record<string, string> = {
  saas: "Product and pricing pages made answer-ready; comparison content that earns AI citations; review platform presence your buyers actually read.",
  ecommerce: "Product and category data cleanup at catalog scale; buying guides that assistant systems extract; review-footprint development.",
  b2b: "Category education content that buying committees ask for; expert entities, review platforms and the PR footprint that makes systems trust and cite you.",
  "professional-services": "Entity clarity, credential signals and directory alignment; practitioner-authored expertise content that demonstrates rather than claims.",
  "local-services": "Profile excellence, genuine review systems, consistent local entity signals and answer-formatted local pages.",
  education: "Authority content that AI systems retrieve for learner and enrollment queries; structured course data, program comparisons and third-party corroboration.",
  healthcare: "Accurate clinical and practice entity signals; answer-ready service and condition pages; directory, review and citation hygiene where trust is non-negotiable.",
  finance: "Entity resolution, compliance-sensitive content architecture, comparison pages and the corroboration layer that makes assistants recommend you — not a competitor.",
  technology: "Developer and technical documentation structured for extraction; product, integration and comparison content; category authority that AI systems actually cite.",
  legal: "Credential-readiness across site, schema and directories; practice-area expertise content that earns trust; local and specialty AI visibility.",
  "real-estate": "Listings, location and market intelligence made answer-ready; review and directory signals; local and property-search visibility in AI-mediated discovery.",
  hospitality: "Experience, availability and local-inventory signals that assistants retrieve; review-response and listing consistency; travel and booking intent visibility.",
  india: "English-first retrieval strategy; entity disambiguation for the Indian market; third-party corroboration that cuts through global and domestic noise.",
};

const stats = [
  {
    value: aiPlatforms.length,
    label: "AI platforms in our visibility mapping",
  },
  {
    value: industries.length,
    label: "industry playbooks with published market data",
  },
  {
    value: services.length,
    label: "core services across the AI-search stack",
  },
  {
    value: 4,
    label: "layers we optimize in every engagement",
  },
];

export function AboutContent() {
  return (
    <main>
      {/* ─── Hero ─── */}
      <section className="relative overflow-hidden bg-gradient-hero text-white">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-brand-primary/[0.08] rounded-full blur-[120px] pointer-events-none animate-glow-pulse" />
        <div className="absolute bottom-0 right-[5%] w-[400px] h-[400px] bg-brand-accent/[0.06] rounded-full blur-[110px] pointer-events-none animate-orb-2" />

        <div className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.07] px-4 py-1.5 backdrop-blur-sm"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                <span className="text-xs font-semibold uppercase tracking-widest text-brand-accent">
                  About
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.12, duration: 0.7 }}
                className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-tight"
              >
                We help brands become part of the{" "}
                <span className="text-gradient">answer.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.24, duration: 0.7 }}
                className="mt-5 max-w-2xl text-[15px] leading-7 text-white/60 sm:text-base sm:leading-8"
              >
                Prompt&Co. is an AI search optimization agency specializing in
                Answer Engine Optimization (AEO), Generative Engine Optimization
                (GEO), entity optimization, technical SEO and digital PR. We work
                with B2B, SaaS, e-commerce and professional-services brands that
                want to be discoverable, citable and recommendable across ChatGPT,
                Google AI Overviews and AI Mode, Perplexity, Gemini, Copilot and
                Claude.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.34, duration: 0.7 }}
                className="mt-7 flex flex-wrap gap-3"
              >
                <Link
                  href="/services"
                  className="rounded-xl bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
                >
                  Explore the services
                </Link>
                <Link
                  href="/resources/research"
                  className="rounded-xl border border-white/[0.14] bg-white/[0.06] px-5 py-2.5 text-sm font-semibold text-white/85 backdrop-blur-sm transition hover:border-white/25 hover:bg-white/[0.1]"
                >
                  Read the research
                </Link>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 32, y: 16 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative"
            >
              <div className="absolute -inset-6 rounded-3xl bg-gradient-to-r from-brand-primary/20 via-brand-accent/15 to-purple-500/10 opacity-70 blur-2xl" />
              <div className="relative">
                <SignalTerminal />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Stats bar ─── */}
      <section className="border-b border-brand-border bg-white">
        <div className="mx-auto max-w-5xl px-5 py-12 sm:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 0.08} className="text-center">
                <p className="text-4xl font-bold tracking-tight">
                  <span className="text-gradient">
                    <CountUp to={stat.value} />
                  </span>
                </p>
                <p className="mt-2 text-[12.5px] leading-5 text-brand-muted">
                  {stat.label}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── What we do ─── */}
      <section className="mx-auto max-w-3xl px-5 py-14 sm:px-8">
        <Reveal>
          <h2 className="text-2xl font-bold tracking-tight text-brand-dark sm:text-3xl">
            What we actually do
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mt-4 text-[15.5px] leading-8 text-brand-dark-700">
            AI systems answer questions by retrieving sources, weighing
            corroboration and recommending what they can verify. Our work
            strengthens every layer of that pipeline: the technical foundation
            that lets machines read your site, the content architecture that
            makes answers extractable, the entity signals that make your brand
            unambiguous, and the third-party footprint that makes you credible
            beyond your own domain.
          </p>
        </Reveal>
        <Reveal delay={0.14}>
          <p className="mt-4 text-[15.5px] leading-8 text-brand-dark-700">
            Practically, that means measurement first — a baseline of how often
            and how accurately AI systems mention your brand today — followed by
            fixes in priority order, and monthly reporting that shows movement
            against that baseline. Everything we recommend is something we can
            measure.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-10">
          <AnimatedPipeline />
        </Reveal>
      </section>

      {/* ─── Industries we serve ─── */}
      <section className="border-y border-brand-border bg-brand-surface/60">
        <div className="mx-auto max-w-5xl px-5 py-14 sm:px-8">
          <Reveal>
            <h2 className="text-2xl font-bold tracking-tight text-brand-dark sm:text-3xl">
              Industries we deliver AI search optimization for
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 max-w-3xl text-[15.5px] leading-8 text-brand-dark-700">
              Every page below maps to our full service stack — AEO, GEO,
              entity optimization, technical SEO, citation optimization, AI
              content and digital PR. Nothing about the method changes by
              vertical; what changes is which signals, corroboration sources
              and KPIs matter most in your category.
            </p>
          </Reveal>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industries
              .filter((ind) => industryDetails[ind.slug])
              .map((ind, i) => {
                const detail = industryDetails[ind.slug];
                return (
                  <motion.div
                    key={ind.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ delay: (i % 3) * 0.08, duration: 0.55, ease: "easeOut" }}
                  >
                    <Link
                      href={`/industries/${ind.slug}`}
                      className="group relative block h-full overflow-hidden rounded-2xl border border-brand-border bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand-primary/40 hover:shadow-xl hover:shadow-brand-primary/10"
                    >
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-primary/[0.04] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-semibold text-brand-primary">
                          {ind.name}
                        </p>
                        <span className="flex h-6 w-6 items-center justify-center rounded-full border border-brand-border text-brand-muted opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 -translate-x-1">
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
                      <h3 className="mt-2 text-[15px] font-bold text-brand-dark transition-colors group-hover:text-brand-primary">
                        {detail.heroTitle}
                      </h3>
                      <p className="mt-1.5 text-[13.5px] leading-5 text-brand-dark-700">
                        {capabilityLines[ind.slug] ?? "Full AEO / GEO capability, adapted to this vertical."}
                      </p>
                    </Link>
                  </motion.div>
                );
              })}
          </div>

          <Reveal delay={0.1}>
            <p className="mt-6 text-[12.5px] leading-5 text-brand-muted">
              Don&apos;t see your vertical listed here? Our methodology applies
              to any category where AI-assisted discovery is happening — the
              starting point is always a measured baseline.{" "}
              <Link
                href="/contact"
                className="font-medium text-brand-primary hover:underline"
              >
                Get a free AI visibility audit
              </Link>{" "}
              and we&apos;ll tell you what your category looks like today.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ─── How we're different ─── */}
      <section className="border-y border-brand-border bg-brand-surface/60">
        <div className="mx-auto max-w-4xl px-5 py-14 sm:px-8">
          <Reveal>
            <h2 className="text-2xl font-bold tracking-tight text-brand-dark sm:text-3xl">
              How we work
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {principles.map((p, i) => (
              <Reveal key={p.title} delay={(i % 2) * 0.08}>
                <div className="group h-full rounded-2xl border border-brand-border bg-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-primary/30 hover:shadow-lg hover:shadow-brand-primary/[0.07]">
                  <div className="h-1.5 w-8 rounded-full bg-gradient-to-r from-brand-primary to-brand-accent transition-all duration-300 group-hover:w-14" />
                  <h3 className="mt-3 text-base font-bold text-brand-dark">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-6 text-brand-dark-700">
                    {p.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Our research ─── */}
      <section className="mx-auto max-w-3xl px-5 py-14 sm:px-8">
        <Reveal>
          <h2 className="text-2xl font-bold tracking-tight text-brand-dark sm:text-3xl">
            The research behind our work
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mt-4 text-[15.5px] leading-8 text-brand-dark-700">
            Our strategies are built on published evidence, not vibes. Our
            research hub analyzes primary 2026 studies — tens of millions of
            measured AI citations — covering per-engine citation divergence, the
            role of reviews and community platforms, local AI ranking factors,
            zero-click economics and more. Every strategy we run starts from
            this evidence base, and we publish what we learn.
          </p>
        </Reveal>
        <Reveal delay={0.14}>
          <p className="mt-4 text-[15.5px] leading-8 text-brand-dark-700">
            Editorial standards: we cite named sources for claims, label
            estimates as estimates, date-stamp our analysis, and correct the
            record when the data changes. Client work is only ever presented as
            a case study with real, verifiable numbers — never as an
            illustrative model dressed up as proof.
          </p>
        </Reveal>
      </section>

      {/* ─── Official identity ─── */}
      <section className="mx-auto max-w-3xl px-5 py-14 sm:px-8">
        <Reveal>
          <h2 className="text-2xl font-bold tracking-tight text-brand-dark sm:text-3xl">
            Official identity and domain
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mt-4 text-[15.5px] leading-8 text-brand-dark-700">
            Prompt&Co. operates solely at{" "}
            <a
              href={siteConfig.url}
              className="font-medium text-brand-primary hover:underline"
            >
              promptco.online
            </a>
            . Our canonical company name is{" "}
            <strong>Prompt&Co.</strong> (with the ampersand).
          </p>
        </Reveal>
        <Reveal delay={0.14}>
          <p className="mt-4 text-[15.5px] leading-8 text-brand-dark-700">
            A separate, unrelated product operating at promptco.ai uses a similar
            name. Prompt&Co. is an independent AI search optimization agency with
            no affiliation, ownership or partnership with that entity.
          </p>
        </Reveal>
      </section>

      {/* ─── Team honesty section ─── */}
      <section className="border-y border-brand-border bg-brand-surface/60">
        <div className="mx-auto max-w-3xl px-5 py-14 sm:px-8">
          <Reveal>
            <h2 className="text-2xl font-bold tracking-tight text-brand-dark sm:text-3xl">
              Who&apos;s behind Prompt&Co.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 text-[15.5px] leading-8 text-brand-dark-700">
              Prompt&Co. is operated by practitioners with hands-on backgrounds
              in AI and machine learning engineering, LLM applications and
              enterprise digital strategy — including work with globally
              recognized consumer brands. We&apos;re builders who turned to
              optimization because we saw, from the inside, how much of what AI
              systems say about a company is determined by signals that company
              never thought to manage.
            </p>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-4 text-[15.5px] leading-8 text-brand-dark-700">
              Prefer to talk to a human? Email{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="font-medium text-brand-primary hover:underline"
              >
                {siteConfig.email}
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
          </Reveal>
        </div>
      </section>
    </main>
  );
}