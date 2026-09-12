"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { proofPoints } from "@/lib/data";
import { Icon } from "./Icons";

/**
 * Proof section. Previously presented fabricated testimonials (invented names,
 * companies, star ratings) as "real results from real brands" — an E-E-A-T and
 * integrity liability for an agency selling trust. Replaced with honest,
 * verifiable proof points. Real testimonials/case studies ship only when
 * genuine, permissioned client evidence exists.
 */
export function Testimonials() {
  return (
    <section className="relative py-16 lg:py-24 bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-brand-primary/5 border border-brand-primary/10 rounded-full px-4 py-1.5 mb-4"
          >
            <span className="text-xs font-semibold text-brand-primary uppercase tracking-widest">
              Why Prompt&Co.
            </span>
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-brand-dark leading-tight mb-4"
          >
            Proof over promises.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base lg:text-lg text-brand-muted"
          >
            We&apos;re a young agency, and we&apos;d rather earn trust the slow
            way. Here&apos;s what you can verify about us today — and the
            moment we have client results we can publish, they&apos;ll appear
            here as real case studies with real numbers.
          </motion.p>
        </div>

        {/* Proof Points Grid */}
        <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {proofPoints.map((point, i) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative bg-brand-surface/50 rounded-2xl p-6 border border-brand-border/40 hover:border-brand-border/60 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-primary/80 to-brand-accent/80 flex items-center justify-center flex-shrink-0">
                  <Icon name="check" size={18} className="text-white" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-brand-dark">
                    {point.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-brand-dark-700 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Honest CTA row */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-primary to-brand-accent text-white px-6 py-3 rounded-xl text-sm font-semibold hover:shadow-lg hover:shadow-brand-primary/25 transition-all duration-300"
          >
            <Icon name="sparkles" size={16} />
            Judge us by the free audit
          </a>
          <Link
            href="/resources/research"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-primary hover:gap-2.5 transition-all"
          >
            Or judge us by our research
            <Icon name="arrow-right" size={14} />
          </Link>
        </div>

        {/* Trust Bar */}
        <div className="mt-12 pt-8 border-t border-brand-border/30">
          <p className="text-center text-[11px] font-semibold uppercase tracking-[0.15em] text-brand-muted mb-5">
            Built around
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              "AEO",
              "GEO",
              "Technical SEO",
              "Entity Authority",
              "Content",
              "Digital PR",
              "AI Search Analytics",
            ].map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-1.5 bg-brand-surface/60 border border-brand-border/40 rounded-full px-3 py-1.5 text-xs font-medium text-brand-dark-700"
              >
                <Icon name="check" size={12} className="text-brand-primary" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
