import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/lib/data";
import { faqData } from "@/lib/data";
import { serviceDetails } from "@/lib/service-details";
import { BreadcrumbSchema, FAQSchema } from "@/components/schema/SchemaMarkup";

export const metadata: Metadata = {
  title: "AEO, GEO & AI Search — Frequently Asked Questions",
  description:
    "Straight answers to the questions buyers ask about Answer Engine Optimization, Generative Engine Optimization, AI visibility, timelines, costs and what AI search optimization can and cannot do.",
  alternates: {
    canonical: "/faq",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://promptco.online/faq",
    siteName: siteConfig.name,
    title: "AEO, GEO & AI Search — Frequently Asked Questions",
    description:
      "Answers to common questions about AEO, GEO, AI search optimization, timelines and costs.",
  },
};

// Additional FAQ items beyond the homepage set — covering cost, comparison
// and buyer questions drawn from PAA patterns and the prompt universe.
const extendedFaqs = [
  {
    question: "How much do AEO and GEO services cost?",
    answer:
      "Published 2026 market guides put agency retainers roughly between $2,000 and $15,000 per month, with one-off audits around $1,000–$4,000. Cost depends on prompt competitiveness, technical condition and content gaps — see our pricing page for the full breakdown with sources.",
  },
  {
    question: "What is the difference between AEO and GEO?",
    answer:
      "AEO (Answer Engine Optimization) focuses on structuring content so answer engines can retrieve and present it for questions. GEO (Generative Engine Optimization) is broader: strengthening the entity, content and authority signals that determine whether AI systems mention, cite and recommend your brand in generated answers. In practice they overlap heavily and are usually delivered together.",
  },
  {
    question: "Is AEO the same as SEO?",
    answer:
      "No. AEO builds on SEO but focuses explicitly on answer-oriented discovery. Strong technical SEO, crawlability, relevance and authority remain important foundations — AI systems retrieve from crawled web content, so classic fundamentals still carry weight.",
  },
  {
    question: "Does GEO replace SEO?",
    answer:
      "No. SEO remains an important foundation for AI discoverability. GEO and AEO build on top of strong SEO fundamentals — they change the target (being part of the answer, not just ranked below it) rather than replacing the discipline.",
  },
  {
    question: "How do I get my business recommended by ChatGPT?",
    answer:
      "There is no guaranteed formula or direct submission that makes ChatGPT recommend a business. The work is on the underlying signals: technical accessibility for AI crawlers, clear and extractable content, entity clarity, third-party corroboration and genuine authority. We measure your baseline first, then strengthen those signals and track movement.",
  },
  {
    question: "Can you guarantee my brand will appear in AI answers?",
    answer:
      "No — and be skeptical of anyone who does. AI systems are third-party products whose outputs even their creators don't fully control. What we can do is measurably strengthen the signals those systems weigh, and show you movement in share-of-answer over time.",
  },
  {
    question: "How long does AEO/GEO take to show results?",
    answer:
      "Timelines vary by domain authority, competition, technical condition, content depth and industry. Technical fixes can influence retrieval within weeks; content and authority signals compound over months. We establish a baseline in week one so progress is measured, not promised.",
  },
  {
    question: "Which AI platforms do you optimize for?",
    answer:
      "The broader AI search ecosystem rather than a single platform: ChatGPT, Google AI Overviews and AI Mode, Perplexity, Gemini, Microsoft Copilot, Claude and emerging systems. The platform mix is tuned to where your buyers actually search.",
  },
  {
    question: "Do AI systems cite small brands at all, or only big names?",
    answer:
      "Small brands appear — especially for specific, niche prompts. Studies of AI citations consistently show that vertical specialists and clearly defined niche players get recommended for narrow queries where generalists dominate head terms. Specificity is the small brand's advantage.",
  },
  {
    question: "Should I block AI crawlers like GPTBot from my website?",
    answer:
      "If you want to appear in AI answers: generally no. Blocking retrieval bots removes you from the pool of sources AI systems can draw on. The nuanced decision is about training-collection bots versus real-time retrieval bots, and it depends on your content strategy. We review this per-crawler.",
  },
  {
    question: "Does structured data (schema) help AI visibility?",
    answer:
      "Our evidence review says: modestly — it helps systems read and attribute your content, but it's among the weaker signals compared with content quality, entity corroboration and third-party mentions. It's worth doing correctly, and not worth over-investing in.",
  },
  {
    question: "What's the first step to working with Prompt&Co.?",
    answer:
      "The free AI visibility audit. We assess how AI systems currently describe your brand, benchmark it against competitors, and share a written, evidence-based action plan — whether or not you end up engaging us.",
  },
];

export default function FaqPage() {
  // Homepage FAQ set + extended set, deduped by question.
  const seen = new Set<string>();
  const allFaqs = [...faqData, ...extendedFaqs].filter((f) => {
    if (seen.has(f.question)) return false;
    seen.add(f.question);
    return true;
  });

  const serviceLinks = [
    serviceDetails["ai-search-optimization"],
    serviceDetails["answer-engine-optimization"],
    serviceDetails["generative-engine-optimization"],
    serviceDetails["ai-visibility"],
    serviceDetails["entity-optimization"],
    serviceDetails["citation-optimization"],
  ];

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: siteConfig.url },
          { name: "FAQ", url: `${siteConfig.url}/faq` },
        ]}
      />
      <FAQSchema faqs={allFaqs} />
      <Header />
      <main>
        {/* ─── Hero ─── */}
        <section className="bg-gradient-hero text-white relative overflow-hidden">
          <div className="absolute inset-0 grid-pattern opacity-20" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-brand-primary/[0.08] rounded-full blur-[120px] pointer-events-none" />
          <div className="relative mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-accent">
              FAQ
            </p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
              AEO, GEO & AI search, answered{" "}
              <span className="text-gradient">directly.</span>
            </h1>
            <p className="mt-4 max-w-2xl text-[15px] leading-7 text-white/60 sm:text-base sm:leading-8">
              The questions buyers actually ask about AI search optimization —
              with direct answers up front, not marketing copy. Where the
              honest answer is &ldquo;it depends&rdquo; or &ldquo;nobody can
              guarantee that&rdquo;, we say so.
            </p>
          </div>
        </section>

        {/* ─── FAQ list ─── */}
        <section className="mx-auto max-w-3xl px-5 py-14 sm:px-8">
          <div className="divide-y divide-brand-border/60 rounded-2xl border border-brand-border bg-white">
            {allFaqs.map((item) => (
              <div key={item.question} className="p-5 sm:p-6">
                <h2 className="text-[16px] font-semibold text-brand-dark">
                  {item.question}
                </h2>
                <p className="mt-2 text-[14.5px] leading-7 text-brand-dark-700">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ─── Related links ─── */}
        <section className="border-t border-brand-border bg-brand-surface/60">
          <div className="mx-auto max-w-5xl px-5 py-14 sm:px-8">
            <h2 className="text-xl font-bold tracking-tight text-brand-dark sm:text-2xl">
              Keep exploring
            </h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              <Link
                href="/pricing"
                className="group rounded-2xl border border-brand-border bg-white p-5 transition hover:border-brand-primary/40"
              >
                <p className="text-[15px] font-semibold text-brand-dark group-hover:text-brand-primary">
                  AEO & GEO pricing
                </p>
                <p className="mt-1.5 text-[13px] leading-5 text-brand-dark-700">
                  What AI search optimization costs in 2026, with sources.
                </p>
              </Link>
              {serviceLinks.slice(0, 2).map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="group rounded-2xl border border-brand-border bg-white p-5 transition hover:border-brand-primary/40"
                >
                  <p className="text-[15px] font-semibold text-brand-dark group-hover:text-brand-primary">
                    {s.heroTitle}
                  </p>
                  <p className="mt-1.5 text-[13px] leading-5 text-brand-dark-700">
                    {s.heroSubtitle.slice(0, 110)}…
                  </p>
                </Link>
              ))}
              <Link
                href="/resources/research"
                className="group rounded-2xl border border-brand-border bg-white p-5 transition hover:border-brand-primary/40"
              >
                <p className="text-[15px] font-semibold text-brand-dark group-hover:text-brand-primary">
                  AI search research
                </p>
                <p className="mt-1.5 text-[13px] leading-5 text-brand-dark-700">
                  Evidence-backed analysis of how AI engines cite sources.
                </p>
              </Link>
            </div>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className="border-t border-brand-border">
          <div className="mx-auto max-w-5xl px-5 py-14 sm:px-8">
            <div className="rounded-2xl bg-gradient-hero p-6 sm:p-10">
              <h2 className="text-xl font-bold text-white sm:text-2xl">
                Question not answered here?
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-brand-surface/80 sm:text-[15px] sm:leading-7">
                Ask it directly — every request gets a human review, and the
                first AI visibility assessment is free.
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
