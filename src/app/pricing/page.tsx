import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/lib/data";
import { BreadcrumbSchema, FAQSchema } from "@/components/schema/SchemaMarkup";

export const metadata: Metadata = {
  title: "AEO & GEO Pricing — What AI Search Optimization Costs",
  description:
    "What AI search optimization (AEO/GEO) actually costs in 2026: published market ranges for agencies, audits and tools, what drives price, and how Prompt&Co. engagements are scoped.",
  alternates: {
    canonical: "/pricing",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://promptco.online/pricing",
    siteName: siteConfig.name,
    title: "AEO & GEO Pricing — What AI Search Optimization Costs",
    description:
      "Published 2026 market ranges for AI search optimization, what drives cost, and how Prompt&Co. engagements are scoped.",
  },
};

const pricingFaqs = [
  {
    question: "How much does Generative Engine Optimization (GEO) cost?",
    answer:
      "Published 2026 market guides put GEO/AEO agency retainers roughly between $2,000 and $15,000 per month depending on scope and competitiveness, with one-off AI visibility audits typically $1,000–$4,000. Budget-tier offerings exist ($199–$999/month), but market consensus is that retainers under ~$1,500/month are usually traditional SEO rebranded. Final pricing depends on your market's competitiveness, the state of your technical foundation and how much content and third-party work is required.",
  },
  {
    question: "How much does an AI visibility audit cost?",
    answer:
      "Third-party 2026 guides cite roughly $1,000–$4,000 for a professional audit. Prompt&Co. starts with a free preliminary AI visibility assessment, then scopes a paid, full-depth audit only when there is a genuine engagement to plan.",
  },
  {
    question: "Can we just use an AI visibility tool instead of an agency?",
    answer:
      "Tools and agencies do different jobs. Monitoring platforms (roughly $50–$1,000/month in 2026) tell you where you stand; they don't fix rendering problems, build comparison content, or earn third-party citations. Many engagements pair a tool for measurement with an agency for the work — Prompt&Co.'s monitoring-only option works this way.",
  },
  {
    question: "Why doesn't Prompt&Co. publish fixed price tiers?",
    answer:
      "Because honest scoping comes before honest pricing. The cost of an AI visibility program is driven by measurable factors — baseline visibility, technical condition, content depth, competitive citation footprint — that we assess first. Quoting a tier before the audit would be guessing, and we'd rather show you the assessment than a number picked to close a call.",
  },
  {
    question: "How long do engagements run?",
    answer:
      "Audits are one-off projects. Foundation work typically runs three to six months, and measurement plus authority building compounds best over six to twelve. Monitoring engagements can run standalone indefinitely. We baseline everything in week one, so continuation is a decision based on measured movement — not lock-in.",
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
      <FAQSchema faqs={pricingFaqs} />
      <Header />
      <main>
        {/* ─── Hero ─── */}
        <section className="bg-gradient-hero text-white relative overflow-hidden">
          <div className="absolute inset-0 grid-pattern opacity-20" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-brand-primary/[0.08] rounded-full blur-[120px] pointer-events-none" />
          <div className="relative mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-accent">
              Pricing
            </p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
              What AI search optimization actually{" "}
              <span className="text-gradient">costs in 2026</span>
            </h1>
            <p className="mt-4 max-w-2xl text-[15px] leading-7 text-white/60 sm:text-base sm:leading-8">
              Straight answer first: published market guides put AEO/GEO agency
              retainers between roughly <strong className="text-white">$2,000 and $15,000 per month</strong>,
              one-off audits around <strong className="text-white">$1,000–$4,000</strong>, and
              monitoring tools at <strong className="text-white">$50–$1,000 per month</strong>.
              Here&apos;s what drives those numbers — and how we scope engagements.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-xl bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
              >
                Get your free AI visibility audit
              </Link>
              <Link
                href="/services/ai-visibility"
                className="rounded-xl border border-white/[0.12] bg-white/[0.06] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/[0.1]"
              >
                See what monitoring includes
              </Link>
            </div>
          </div>
        </section>

        {/* ─── Market rate table ─── */}
        <section className="mx-auto max-w-4xl px-5 py-14 sm:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-brand-dark sm:text-3xl">
            2026 market rates, with sources
          </h2>
          <p className="mt-3 max-w-2xl text-[15px] leading-7 text-brand-dark-700">
            These are ranges reported by independent 2026 pricing guides — not
            our price list. We publish them because almost every &ldquo;what does GEO
            cost&rdquo; page online is an agency hiding its own number; the ranges are
            useful context regardless of who you hire.
          </p>

          <div className="mt-8 overflow-hidden rounded-2xl border border-brand-border">
            <table className="w-full text-left text-[14px]">
              <thead className="bg-brand-surface text-[12px] uppercase tracking-wider text-brand-muted">
                <tr>
                  <th className="px-5 py-3.5 font-semibold">Engagement type</th>
                  <th className="px-5 py-3.5 font-semibold">Typical 2026 range</th>
                  <th className="px-5 py-3.5 font-semibold">What it buys</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-border/60 bg-white">
                <tr>
                  <td className="px-5 py-4 font-semibold text-brand-dark">
                    AI visibility audit (one-off)
                  </td>
                  <td className="px-5 py-4 text-brand-dark-700">~$1,000 – $4,000</td>
                  <td className="px-5 py-4 text-brand-dark-700">
                    Baseline measurement, technical + content + citation audit,
                    prioritized roadmap
                  </td>
                </tr>
                <tr>
                  <td className="px-5 py-4 font-semibold text-brand-dark">
                    Foundation retainer
                  </td>
                  <td className="px-5 py-4 text-brand-dark-700">~$2,000 – $6,000 / mo</td>
                  <td className="px-5 py-4 text-brand-dark-700">
                    Technical fixes, answer architecture, initial content and
                    entity work for a focused scope
                  </td>
                </tr>
                <tr>
                  <td className="px-5 py-4 font-semibold text-brand-dark">
                    Growth retainer
                  </td>
                  <td className="px-5 py-4 text-brand-dark-700">~$6,000 – $15,000 / mo</td>
                  <td className="px-5 py-4 text-brand-dark-700">
                    Competitive categories: content programs, digital PR,
                    citation building, full measurement
                  </td>
                </tr>
                <tr>
                  <td className="px-5 py-4 font-semibold text-brand-dark">
                    Monitoring-only
                  </td>
                  <td className="px-5 py-4 text-brand-dark-700">Below retainer rates</td>
                  <td className="px-5 py-4 text-brand-dark-700">
                    Prompt-panel tracking, share-of-answer and accuracy reporting
                    without execution
                  </td>
                </tr>
                <tr>
                  <td className="px-5 py-4 font-semibold text-brand-dark">
                    Self-serve AI visibility tools
                  </td>
                  <td className="px-5 py-4 text-brand-dark-700">~$50 – $1,000 / mo</td>
                  <td className="px-5 py-4 text-brand-dark-700">
                    Software-only tracking — useful measurement, no execution
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-[12.5px] leading-5 text-brand-muted">
            Sources: 2026 pricing guides from OutreachBloom ($2k–$10k B2B
            retainers; $1k–$4k audits), RevvGrowth ($3k–$6k basic, $6k–$12k
            growth tiers), The Remarkable Agency ($3k–$15k retainers),
            PageTraffic ($1.5k–$10k/mo, up to $30k), Icecube Digital
            ($1.5k–$50k+), and tool-cost roundups from Strategi.is and XSeek
            ($50–$1,000/mo platforms). Low-cost subscription GEO tiers
            ($199–$999/mo, Mainstreethost) exist but sit far below the
            consensus floor for genuine multi-engine work. Ranges vary by
            market and study methodology; treat them as orientation, not
            quotes.
          </p>

          <div className="mt-8 rounded-2xl border border-amber-300/40 bg-amber-50/60 p-5">
            <p className="text-[14px] leading-6 text-brand-dark-700">
              <strong className="text-brand-dark">One warning from the market:</strong>{" "}
              2026 guides consistently note that AI-search retainers priced
              under ~$1,500/month are usually traditional SEO rebranded — the
              economics of genuine AI visibility work (audits across engines,
              content restructuring, citation building, measurement) don&apos;t
              support it. If a quote seems too cheap, ask what specifically
              gets delivered.
            </p>
          </div>
        </section>

        {/* ─── What drives cost ─── */}
        <section className="border-y border-brand-border bg-brand-surface/60">
          <div className="mx-auto max-w-4xl px-5 py-14 sm:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-brand-dark sm:text-3xl">
              What actually drives the price
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: "Competitive density of your prompts",
                  description:
                    "Getting cited for \"best CRM for dentists\" costs less than displacing incumbents for \"best CRM\". We measure prompt-level competitiveness before quoting.",
                },
                {
                  title: "Technical condition",
                  description:
                    "A site blocking AI crawlers or rendering empty to agents needs foundation work before content or PR can compound. Clean sites skip that phase entirely.",
                },
                {
                  title: "Content depth vs. gap",
                  description:
                    "Rebuilding existing strong content into answer-ready form is cheaper than creating the comparison, research and vertical pages your category's answers require.",
                },
                {
                  title: "Third-party footprint",
                  description:
                    "If review platforms, directories and publications already corroborate your brand, the authority phase is shorter. If you're absent from them, that build-out is the bulk of the effort.",
                },
                {
                  title: "Number of surfaces measured",
                  description:
                    "Full-panel measurement across ChatGPT, AI Overviews, AI Mode, Perplexity, Gemini, Copilot and Claude costs more to run than a two-engine check — but it's the difference between data and anecdotes.",
                },
                {
                  title: "Who executes",
                  description:
                    "We implement directly, work alongside your team, or hand engineering-ready tickets. More of your team executing means lower cost and faster internal capability.",
                },
              ].map((item) => (
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

        {/* ─── How Prompt&Co. engagements work ─── */}
        <section className="mx-auto max-w-4xl px-5 py-14 sm:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-brand-dark sm:text-3xl">
            How Prompt&Co. engagements are scoped
          </h2>
          <p className="mt-3 max-w-2xl text-[15px] leading-7 text-brand-dark-700">
            We don&apos;t publish fixed tiers because the honest price depends on
            what the audit finds. Every engagement follows the same sequence:
          </p>
          <ol className="mt-8 space-y-6">
            {[
              {
                title: "Free preliminary assessment",
                description:
                  "We run a focused AI visibility check on your brand across the major engines and share what we find — including whether there's enough opportunity to justify a paid engagement. If there isn't, we'll say so.",
                price: "Free",
              },
              {
                title: "Full audit & roadmap",
                description:
                  "Baseline measurement on a defined prompt panel, technical and content audit, citation-landscape mapping and a prioritized roadmap with effort estimates you could hand to any competent team.",
                price: "Fixed fee, scoped before start",
              },
              {
                title: "Foundation phase",
                description:
                  "Technical fixes, structured data, answer architecture, priority content and entity work — the highest-impact changes first, measured against the baseline.",
                price: "Monthly, sized to scope",
              },
              {
                title: "Growth & authority phase",
                description:
                  "Content program, digital PR and citation building, tracked monthly with share-of-answer reporting and accuracy checks. Continue because the numbers moved — not because a contract says so.",
                price: "Monthly, sized to scope",
              },
              {
                title: "Monitoring-only option",
                description:
                  "Already have execution capacity in-house? We run the measurement layer — prompt panel, share of answer, citation sources, accuracy — and hand you the prioritized actions each month.",
                price: "Monthly, below retainer rates",
              },
            ].map((step, i) => (
              <li key={step.title} className="flex gap-4">
                <span className="font-mono text-[13px] font-bold tracking-widest text-brand-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex-1 rounded-2xl border border-brand-border bg-white p-5">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-base font-bold text-brand-dark">
                      {step.title}
                    </h3>
                    <span className="rounded-full bg-brand-surface-alt px-3 py-1 text-[12px] font-semibold text-brand-primary">
                      {step.price}
                    </span>
                  </div>
                  <p className="mt-2 text-[14.5px] leading-7 text-brand-dark-700">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* ─── FAQ ─── */}
        <section className="border-t border-brand-border bg-brand-surface/60">
          <div className="mx-auto max-w-3xl px-5 py-14 sm:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-brand-dark sm:text-3xl">
              Pricing FAQs
            </h2>
            <div className="mt-6 divide-y divide-brand-border/60 rounded-xl border border-brand-border/60 bg-white">
              {pricingFaqs.map((item) => (
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
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className="border-t border-brand-border">
          <div className="mx-auto max-w-5xl px-5 py-14 sm:px-8">
            <div className="rounded-2xl bg-gradient-hero p-6 sm:p-10">
              <h2 className="text-xl font-bold text-white sm:text-2xl">
                The audit is free. The findings are yours either way.
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-brand-surface/80 sm:text-[15px] sm:leading-7">
                Start with a free AI visibility assessment across ChatGPT,
                Perplexity, Gemini, AI Overviews, AI Mode, Copilot and Claude —
                then decide if a paid engagement is worth it, with numbers in
                hand.
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
