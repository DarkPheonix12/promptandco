"use client";

import { motion } from "framer-motion";
import { Icon } from "./Icons";

const caseStudies = [
  {
    id: 1,
    client: "Insolvency Tracker",
    url: "https://insolvencytracker.in/",
    title:
      "Specialist insolvency publisher made citable in AI answers about IBC and bankruptcy in India",
    industry: "Legal",
    market: "India",
    engagement: "AEO + GEO + Entity Optimization",
    duration: "8 months",
    challenge:
      "A specialist publisher covering IBC, NCLT, CIRP, auctions and distressed-asset deals across India published authoritative, current content — but when professionals asked AI systems about insolvency cases, the site was rarely retrieved or cited. Generic and competitor sources were recommended instead.",
    result:
      "140% increase in AI brand mentions, 3x improvement in recommendation rate across insolvency-related prompts",
    metrics: {
      mentions: "+140%",
      citations: "+90%",
      recommendations: "3x",
      shareOfVoice: "18%",
    },
  },
  {
    id: 2,
    client: "Alfanumrik",
    url: "https://alfanumrik.com/",
    title:
      "AI learning platform for CBSE students made discoverable to parents and students",
    industry: "Education",
    market: "India",
    engagement: "AI Search Optimization + AI Content Optimization",
    duration: "6 months",
    challenge:
      "Alfanumrik — the AI Learning OS for CBSE students (Classes 6–12) built on NCERT, led by founder Pradeep Sharma — needed to be visible when parents and students asked AI systems which NCERT-aligned, measured study tools to use. Legacy ed-tech brands dominated those answers.",
    result:
      "From zero AI visibility to top-5 recommendation across major platforms for education-related queries",
    metrics: {
      mentions: "+120%",
      citations: "+75%",
      recommendations: "Top 5",
      shareOfVoice: "24%",
    },
  },
];

export function CaseStudies() {
  return (
    <section className="relative py-16 lg:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-brand-surface/30 to-white pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-brand-primary/5 border border-brand-primary/10 rounded-full px-4 py-1.5 mb-4"
          >
            <span className="text-xs font-semibold text-brand-primary uppercase tracking-widest">
              Client Work
            </span>
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-brand-dark leading-tight mb-4"
          >
            What an engagement actually looks like.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base lg:text-lg text-brand-muted"
          >
            Real engagements with real clients. Every one started with a
            measured baseline, then fixes in priority order — and the movement
            you see below is reported against that baseline.
          </motion.p>
        </div>

        {/* Case Study Cards */}
        <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {caseStudies.map((cs, i) => (
            <motion.div
              key={cs.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl border border-brand-border/50 overflow-hidden hover:shadow-lg hover:shadow-brand-primary/[0.04] transition-all duration-300"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-brand-primary to-brand-accent p-5 text-white">
                <div className="flex items-center gap-1.5 mb-2">
                  <span className="text-[10px] font-medium bg-white/20 rounded-full px-2.5 py-0.5">
                    {cs.industry}
                  </span>
                  <span className="text-[10px] font-medium bg-white/20 rounded-full px-2.5 py-0.5">
                    {cs.market}
                  </span>
                </div>
                <h3 className="text-lg font-bold leading-snug">
                  {cs.title}
                </h3>
              </div>

              {/* Content */}
              <div className="p-5">
                {/* Client */}
                <div className="mb-3 flex items-center gap-1.5 text-[12px]">
                  <span className="font-semibold text-brand-dark">
                    {cs.client}
                  </span>
                  <a
                    href={cs.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-medium text-brand-primary hover:underline"
                  >
                    visit site
                    <Icon name="arrow-right" size={11} className="-rotate-45" />
                  </a>
                </div>

                {/* Engagement & Duration */}
                <div className="flex items-center gap-3 mb-3 text-[11px] text-brand-muted">
                  <span className="flex items-center gap-1">
                    <Icon name="compass" size={12} />
                    {cs.engagement}
                  </span>
                  <span className="flex items-center gap-1">
                    <Icon name="chart" size={12} />
                    {cs.duration}
                  </span>
                </div>

                {/* Challenge */}
                <p className="text-xs text-brand-dark-700 leading-relaxed mb-3">
                  {cs.challenge}
                </p>

                {/* Metrics — reported against baseline */}
                <div className="grid grid-cols-2 gap-2 mb-3">
                  {Object.entries(cs.metrics).map(([key, value]) => (
                    <div
                      key={key}
                      className="bg-brand-surface/50 rounded-lg p-2.5 text-center border border-brand-border/20"
                    >
                      <p className="text-base font-bold text-brand-primary">
                        {value}
                      </p>
                      <p className="text-[10px] text-brand-muted capitalize">
                        {key.replace(/([A-Z])/g, " $1").trim()}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Result */}
                <div className="bg-green-50/80 border border-green-200/50 rounded-lg p-2.5">
                  <p className="text-xs font-medium text-green-800 flex items-center gap-1.5">
                    <Icon name="check" size={14} className="text-green-600" />
                    {cs.result}
                  </p>
                </div>

                {/* CTA — /case-studies is not built yet; route to contact
                    rather than promising a page that doesn't exist. */}
                <a
                  href="/contact"
                  className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-brand-primary hover:gap-2.5 transition-all"
                >
                  Ask us how this framework applies to you
                  <Icon name="arrow-right" size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-primary to-brand-accent text-white px-7 py-3.5 rounded-xl text-sm font-semibold hover:shadow-lg hover:shadow-brand-primary/25 transition-all duration-300 hover:scale-[1.02]"
          >
            Apply this framework to your brand
            <Icon name="arrow-right" size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
