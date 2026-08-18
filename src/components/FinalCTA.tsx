"use client";

import { motion } from "framer-motion";
import { Icon } from "./Icons";

export function FinalCTA() {
  return (
    <section className="relative py-16 lg:py-24 bg-gradient-hero overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-primary/[0.08] rounded-full blur-[120px] animate-orb-1" />
      <div className="absolute top-20 right-1/4 w-[300px] h-[300px] bg-brand-accent/[0.06] rounded-full blur-[80px] animate-orb-2" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-white leading-tight mb-5"
        >
          What would AI say about{" "}
          <span
            className="text-gradient bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text"
            style={{ WebkitTextFillColor: "transparent" }}
          >
            your brand
          </span>{" "}
          today?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-base text-white/50 max-w-xl mx-auto mb-8 leading-relaxed"
        >
          Find out where you&apos;re visible, where competitors are winning and
          what opportunities you&apos;re missing. Get your free AI Visibility
          Assessment.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-3 justify-center"
        >
          <a
            href="/contact"
            className="group relative inline-flex items-center justify-center gap-2 bg-gradient-to-r from-brand-primary to-brand-accent text-white px-8 py-4 rounded-xl text-[15px] font-semibold hover:shadow-xl hover:shadow-brand-primary/30 transition-all duration-300 hover:scale-[1.02]"
          >
            <Icon name="sparkles" size={20} />
            Get Your AI Visibility Audit
            <span className="absolute inset-0 rounded-xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
          <a
            href="/about"
            className="inline-flex items-center justify-center gap-2 bg-white/[0.06] backdrop-blur-sm border border-white/[0.12] text-white px-7 py-4 rounded-xl text-[15px] font-medium hover:bg-white/[0.1] transition-all duration-300"
          >
            Talk to an AI Search Strategist
            <Icon name="arrow-right" size={16} />
          </a>
        </motion.div>

        {/* Trust Statement */}
        <div className="mt-10 pt-6 border-t border-white/[0.06]">
          <p className="text-xs text-white/30">
            Prompt&Co. — AI Search Optimization for brands that want to be
            the answer.
          </p>
          <p className="text-xs text-white/20 mt-1 tracking-wider">
            Discoverable. Citable. Recommendable.
          </p>
        </div>
      </div>
    </section>
  );
}
