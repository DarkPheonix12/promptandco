"use client";

import { motion } from "framer-motion";
import { comparisonData } from "@/lib/data";

export function ComparisonTable() {
  return (
    <section className="relative py-16 lg:py-24 overflow-hidden">
      {/* Subtle depth */}
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
              Understanding the Landscape
            </span>
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-brand-dark leading-tight mb-4"
          >
            SEO vs AEO vs GEO
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base lg:text-lg text-brand-muted"
          >
            AI discoverability doesn&apos;t replace SEO. It builds on it.
          </motion.p>
        </div>

        {/* Desktop Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="hidden md:block"
        >
          <div className="bg-white rounded-2xl border border-brand-border/60 shadow-lg shadow-black/[0.03] overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-4 bg-gradient-to-r from-brand-dark to-brand-dark-800 text-white">
              <div className="px-6 py-4" />
              {[
                { label: "SEO", color: "bg-blue-400" },
                { label: "AEO", color: "bg-cyan-400" },
                { label: "GEO", color: "bg-green-400" },
              ].map((col) => (
                <div
                  key={col.label}
                  className="px-6 py-4 text-center border-l border-white/10"
                >
                  <span className="inline-flex items-center gap-2 text-sm font-semibold">
                    <span className={`w-2 h-2 ${col.color} rounded-full`} />
                    {col.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Rows */}
            {comparisonData.map((row, i) => (
              <div
                key={row.dimension}
                className={`grid grid-cols-4 transition-colors hover:bg-brand-surface/50 ${
                  i % 2 === 0 ? "bg-white" : "bg-brand-surface/30"
                } border-t border-brand-border/40`}
              >
                <div className="px-6 py-4 font-semibold text-sm text-brand-dark-700 flex items-center">
                  {row.dimension}
                </div>
                <div className="px-6 py-4 text-sm text-brand-muted border-l border-brand-border/40">
                  {row.seo}
                </div>
                <div className="px-6 py-4 text-sm text-brand-dark-700 border-l border-brand-border/40 font-medium">
                  {row.aeo}
                </div>
                <div className="px-6 py-4 text-sm text-brand-dark-700 border-l border-brand-border/40 font-medium">
                  {row.geo}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-3">
          {comparisonData.map((row, i) => (
            <motion.div
              key={row.dimension}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-white rounded-xl border border-brand-border/60 p-4 shadow-sm"
            >
              <p className="text-[11px] font-semibold text-brand-primary uppercase tracking-wider mb-3">
                {row.dimension}
              </p>
              <div className="space-y-2">
                {[
                  { color: "bg-blue-400", label: "SEO", value: row.seo },
                  { color: "bg-cyan-400", label: "AEO", value: row.aeo },
                  { color: "bg-green-400", label: "GEO", value: row.geo },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-2">
                    <span className={`w-2 h-2 ${item.color} rounded-full mt-1.5 flex-shrink-0`} />
                    <div>
                      <span className="text-[10px] font-semibold text-brand-muted uppercase mr-1.5">
                        {item.label}
                      </span>
                      <span className="text-sm text-brand-dark-700">
                        {item.value}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-8">
          <p className="text-sm text-brand-muted max-w-xl mx-auto">
            Prompt&Co. connects all three. Because AI discoverability doesn&apos;t
            replace SEO—it builds on it.
          </p>
        </div>
      </div>
    </section>
  );
}
