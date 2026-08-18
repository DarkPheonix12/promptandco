"use client";

import { motion } from "framer-motion";
import { methodology } from "@/lib/data";
import { Icon } from "./Icons";

export function Methodology() {
  return (
    <section id="methodology" className="relative py-16 lg:py-24 bg-white overflow-hidden">
      {/* Subtle depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-surface/30 via-white to-brand-surface/20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-brand-primary/5 border border-brand-primary/10 rounded-full px-4 py-1.5 mb-4"
          >
            <span className="text-xs font-semibold text-brand-primary uppercase tracking-widest">
              Our Methodology
            </span>
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-brand-dark leading-tight mb-4"
          >
            From invisible to discoverable.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base lg:text-lg text-brand-muted"
          >
            We don&apos;t optimize one page for one algorithm. We build the
            interconnected digital footprint your brand needs to remain
            discoverable as search evolves.
          </motion.p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {methodology.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="relative group"
            >
              <div className="bg-white rounded-2xl border border-brand-border/50 p-6 shadow-sm hover:shadow-md hover:border-brand-primary/20 transition-all duration-300">
                {/* Step Number + Title */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-primary to-brand-accent flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-brand-primary/15 group-hover:scale-105 transition-transform duration-300">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-bold text-brand-dark">
                    {step.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-sm text-brand-muted leading-relaxed pl-[52px]">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-10">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-primary to-brand-accent text-white px-7 py-3.5 rounded-xl text-sm font-semibold hover:shadow-lg hover:shadow-brand-primary/25 transition-all duration-300 hover:scale-[1.02]"
          >
            <Icon name="sparkles" size={16} />
            See Where Your Brand Is Missing
          </a>
        </div>
      </div>
    </section>
  );
}
