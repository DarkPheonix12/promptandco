"use client";

import { motion } from "framer-motion";
import { Icon } from "./Icons";

const brandLogos = [
  { name: "Lululemon", color: "#D31334" },
  { name: "Sephora", color: "#000000" },
  { name: "Marriott Vacations Club", color: "#1C1C1C" },
  { name: "And Many More", color: "#2563eb" },
];

const expertise = [
  {
    icon: "brain",
    title: "AI & Machine Learning",
    description:
      "Deep expertise in building intelligent systems that understand, learn and adapt — from computer vision to natural language processing.",
  },
  {
    icon: "sparkles",
    title: "Automation Pipelines",
    description:
      "Architecting end-to-end automation workflows that transform manual processes into scalable, AI-driven operations.",
  },
  {
    icon: "globe",
    title: "LLM & Generative AI",
    description:
      "Hands-on experience with large language models, prompt engineering, fine-tuning and building production-grade generative AI applications.",
  },
  {
    icon: "chart",
    title: "Enterprise Digital Strategy",
    description:
      "Driving digital transformation at scale for Fortune 500 brands — blending technology, data and creative strategy.",
  },
];

export function Founders() {
  return (
    <section className="relative py-16 lg:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-surface/30 via-white to-brand-surface/30 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-primary/[0.04] rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-primary/10 to-brand-accent/10 border border-brand-primary/15 rounded-full px-4 py-1.5 mb-4"
          >
            <Icon name="users" size={14} className="text-brand-primary" />
            <span className="text-xs font-semibold text-brand-primary uppercase tracking-widest">
              The Team
            </span>
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-brand-dark leading-tight mb-4"
          >
            Built by operators,{" "}
            <span className="text-gradient bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text" style={{ WebkitTextFillColor: "transparent" }}>
              not just theorists.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base lg:text-lg text-brand-muted leading-relaxed"
          >
            Our founders have spent years at the intersection of technology, AI and enterprise strategy — working with some of the world&apos;s most recognized brands to solve complex digital challenges at scale.
          </motion.p>
        </div>

        {/* Brand Experience Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mb-14"
        >
          <p className="text-center text-[11px] font-semibold uppercase tracking-[0.15em] text-brand-muted mb-6">
            Trusted by world-class brands
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {brandLogos.map((brand, i) => (
              <motion.div
                key={brand.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.35 + i * 0.08 }}
                className="group relative bg-white border border-brand-border/50 rounded-xl px-5 py-3.5 hover:border-brand-primary/30 hover:shadow-md hover:shadow-brand-primary/[0.04] transition-all duration-300"
              >
                <span
                  className="text-sm font-bold tracking-tight"
                  style={{ color: brand.color }}
                >
                  {brand.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Expertise Grid */}
        <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto mb-14">
          {expertise.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + i * 0.08 }}
              className="group relative bg-white rounded-2xl border border-brand-border/50 p-6 hover:border-brand-primary/25 hover:shadow-lg hover:shadow-brand-primary/[0.04] transition-all duration-300"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-primary/[0.03] to-brand-accent/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div className="relative flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-primary/10 to-brand-accent/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Icon
                    name={item.icon}
                    size={22}
                    className="text-brand-primary"
                  />
                </div>
                <div>
                  <h3 className="text-base font-bold text-brand-dark mb-1.5 group-hover:text-brand-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-brand-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="relative bg-gradient-to-r from-brand-dark via-brand-dark-800 to-brand-dark rounded-2xl p-8 md:p-10 text-center overflow-hidden"
        >
          {/* Subtle glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[150px] bg-brand-primary/[0.12] rounded-full blur-[80px] pointer-events-none" />

          <div className="relative">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-4">
              <Icon name="sparkles" size={14} className="text-brand-accent" />
              <span className="text-xs font-semibold text-white/80 uppercase tracking-widest">
                Why It Matters
              </span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
              We don&apos;t just understand AI —{" "}
              <span className="text-gradient bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text" style={{ WebkitTextFillColor: "transparent" }}>
                we build with it.
              </span>
            </h3>
            <p className="text-sm text-white/55 max-w-2xl mx-auto leading-relaxed">
              From enterprise-scale automation pipelines to production LLM applications, our team brings hands-on technical depth that most agencies simply don&apos;t have. That&apos;s why our strategies aren&apos;t theoretical — they&apos;re built on real engineering expertise.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
