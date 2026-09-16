"use client";

import { motion } from "framer-motion";
import { Icon } from "../Icons";

const STAGES = [
  {
    step: "01",
    title: "Read",
    description: "Technical foundation that lets machines read your site cleanly.",
    icon: "wrench",
  },
  {
    step: "02",
    title: "Extract",
    description: "Content architecture that makes your answers extractable.",
    icon: "document",
  },
  {
    step: "03",
    title: "Resolve",
    description: "Entity signals that make your brand unambiguous.",
    icon: "building",
  },
  {
    step: "04",
    title: "Verify",
    description: "Third-party footprint that makes you credible beyond your domain.",
    icon: "shield",
  },
];

export function AnimatedPipeline() {
  return (
    <div className="relative">
      {/* Progress line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="hidden sm:block absolute top-[22px] left-0 right-0 h-[2px] origin-left bg-gradient-to-r from-brand-primary via-brand-accent to-transparent"
      />

      <div className="relative grid gap-4 sm:grid-cols-4">
        {STAGES.map((stage, i) => (
          <motion.div
            key={stage.step}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: i * 0.18, duration: 0.6, ease: "easeOut" }}
            className="group relative"
          >
            <div className="h-full rounded-2xl border border-brand-border bg-white p-5 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-brand-primary/30 group-hover:shadow-xl group-hover:shadow-brand-primary/10">
              <div className="relative z-10 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-primary to-brand-accent text-white shadow-lg shadow-brand-primary/20 transition-transform duration-300 group-hover:scale-105">
                  <Icon name={stage.icon} size={18} />
                </div>
                <span className="font-mono text-[11px] font-semibold tracking-widest text-brand-muted">
                  {stage.step}
                </span>
              </div>
              <h3 className="mt-4 text-base font-bold text-brand-dark group-hover:text-brand-primary transition-colors">
                {stage.title}
              </h3>
              <p className="mt-1.5 text-[13px] leading-5 text-brand-dark-700">
                {stage.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}