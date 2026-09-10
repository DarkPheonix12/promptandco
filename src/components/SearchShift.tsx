"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

const aiNodes = [
  { name: "ChatGPT", x: "15%", y: "20%", color: "#10a37f", delay: 0.2 },
  { name: "Google AI", x: "75%", y: "15%", color: "#4285f4", delay: 0.4 },
  { name: "Gemini", x: "85%", y: "55%", color: "#1a73e8", delay: 0.6 },
  { name: "Claude", x: "10%", y: "65%", color: "#d97706", delay: 0.3 },
  { name: "Perplexity", x: "50%", y: "75%", color: "#20b8cd", delay: 0.5 },
  { name: "Copilot", x: "40%", y: "10%", color: "#7b68ee", delay: 0.7 },
];

const oldSteps = [
  { label: "Google", icon: "🔍" },
  { label: "Search", icon: "⌨️" },
  { label: "10 Blue Links", icon: "🔗" },
  { label: "Website", icon: "🌐" },
];

const newSteps = [
  { label: "Customer", icon: "👤" },
  { label: "Natural Prompt", icon: "💬" },
  { label: "AI Answer", icon: "✨" },
  { label: "Recommendation", icon: "⭐" },
  { label: "Purchase", icon: "🎯" },
];

function ConnectionLine({
  from,
  to,
  delay,
}: {
  from: { x: string; y: string };
  to: { x: string; y: string };
  delay: number;
}) {
  return (
    <motion.line
      x1={from.x}
      y1={from.y}
      x2={to.x}
      y2={to.y}
      stroke="url(#lineGrad)"
      strokeWidth="1"
      strokeDasharray="4 4"
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 0.3 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 1.5, ease: "easeInOut" }}
    />
  );
}

export function SearchShift() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 lg:py-28 bg-white overflow-hidden"
    >
      {/* Subtle depth gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-surface/50 via-white to-white pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Header ── */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 bg-brand-primary/5 border border-brand-primary/10 rounded-full px-4 py-1.5 mb-5">
              <span className="w-1.5 h-1.5 bg-brand-primary rounded-full" />
              <span className="text-xs font-semibold text-brand-primary uppercase tracking-widest">
                The Shift
              </span>
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-brand-dark leading-[1.15] mb-5"
          >
            Search changed.
            <br />
            <span className="text-brand-muted">Discovery changed with it.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-base lg:text-lg text-brand-muted leading-relaxed"
          >
            Your customers can now ask AI to find, compare, recommend and
            shortlist—before they ever visit a website.
          </motion.p>
        </div>

        {/* ── Discovery Visualization ── */}
        <div className="relative mb-20">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left: Old vs New Flow */}
            <div className="space-y-8">
              {/* Old Discovery */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative bg-brand-surface rounded-2xl p-6 border border-brand-border/60"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2 h-2 rounded-full bg-brand-dark-600" />
                  <span className="text-[11px] font-semibold text-brand-dark-600 uppercase tracking-widest">
                    Traditional Search
                  </span>
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                  {oldSteps.map((step, i) => (
                    <div key={step.label} className="flex items-center gap-2">
                      <div className="flex items-center gap-2 bg-white rounded-lg px-3 py-2 border border-brand-border/50 shadow-sm">
                        <span className="text-sm">{step.icon}</span>
                        <span className="text-xs font-medium text-brand-dark-700">
                          {step.label}
                        </span>
                      </div>
                      {i < oldSteps.length - 1 && (
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          className="text-brand-muted/50 flex-shrink-0"
                        >
                          <path
                            d="M6 4l4 4-4 4"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                          />
                        </svg>
                      )}
                    </div>
                  ))}
                </div>
                <div className="mt-3 pt-3 border-t border-brand-border/40">
                  <p className="text-[11px] text-brand-muted italic">
                    Keyword → Page → Click → Browse
                  </p>
                </div>
              </motion.div>

              {/* New Discovery */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="relative rounded-2xl p-6 border border-brand-primary/20 bg-gradient-to-br from-brand-primary/[0.03] to-brand-accent/[0.03]"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
                  <span className="text-[11px] font-semibold text-brand-primary uppercase tracking-widest">
                    AI Discovery
                  </span>
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                  {newSteps.map((step, i) => (
                    <div key={step.label} className="flex items-center gap-2">
                      <div className="flex items-center gap-2 bg-white rounded-lg px-3 py-2 border border-brand-primary/15 shadow-sm">
                        <span className="text-sm">{step.icon}</span>
                        <span className="text-xs font-medium text-brand-dark-700">
                          {step.label}
                        </span>
                      </div>
                      {i < newSteps.length - 1 && (
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          className="text-brand-primary/40 flex-shrink-0"
                        >
                          <path
                            d="M6 4l4 4-4 4"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                          />
                        </svg>
                      )}
                    </div>
                  ))}
                </div>
                <div className="mt-3 pt-3 border-t border-brand-primary/10">
                  <p className="text-[11px] text-brand-primary/70 italic">
                    Prompt → AI Answer → Recommendation → Trust → Purchase
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Right: AI Ecosystem Network */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="relative h-[380px] lg:h-[420px] rounded-2xl border border-brand-border/40 bg-brand-surface/50 overflow-hidden"
            >
              {/* Network SVG */}
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#2563eb" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.2" />
                  </linearGradient>
                  <radialGradient id="centerGlow" cx="50%" cy="50%" r="30%">
                    <stop offset="0%" stopColor="#2563eb" stopOpacity="0.08" />
                    <stop offset="100%" stopColor="#2563eb" stopOpacity="0" />
                  </radialGradient>
                </defs>

                {/* Center glow */}
                <circle cx="50" cy="50" r="30" fill="url(#centerGlow)" />

                {/* Connection lines from center to each node */}
                {aiNodes.map((node, i) => (
                  <ConnectionLine
                    key={i}
                    from={{ x: "50", y: "50" }}
                    to={{ x: node.x, y: node.y }}
                    delay={node.delay}
                  />
                ))}

                {/* Inter-node connections */}
                {aiNodes.slice(0, -1).map((node, i) => {
                  const next = aiNodes[(i + 1) % aiNodes.length];
                  return (
                    <motion.line
                      key={`conn-${i}`}
                      x1={node.x}
                      y1={node.y}
                      x2={next.x}
                      y2={next.y}
                      stroke="url(#lineGrad)"
                      strokeWidth="0.5"
                      strokeDasharray="2 3"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 0.15 }}
                      viewport={{ once: true }}
                      transition={{ delay: node.delay + 0.3, duration: 1 }}
                    />
                  );
                })}
              </svg>

              {/* Center Hub */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.6, type: "spring" }}
                  className="relative"
                >
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-brand-primary to-brand-accent flex items-center justify-center shadow-xl shadow-brand-primary/20">
                    <span className="text-white text-2xl font-bold">P&C</span>
                  </div>
                  <div className="absolute -inset-2 rounded-full bg-brand-primary/10 animate-glow-pulse" />
                </motion.div>
              </div>

              {/* AI Platform Nodes */}
              {aiNodes.map((node, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: node.delay + 0.3,
                    duration: 0.5,
                    type: "spring",
                  }}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ left: node.x, top: node.y }}
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center shadow-md border-2 border-white/80 bg-white"
                    style={{ boxShadow: `0 4px 20px ${node.color}25` }}
                  >
                    <span
                      className="text-xs font-bold"
                      style={{ color: node.color }}
                    >
                      {node.name.charAt(0)}
                    </span>
                  </div>
                  <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[9px] font-semibold text-brand-muted whitespace-nowrap">
                    {node.name}
                  </span>
                </motion.div>
              ))}

              {/* Center Label */}
              <div className="absolute bottom-5 left-1/2 -translate-x-1/2">
                <span className="text-[10px] font-semibold text-brand-primary uppercase tracking-wider bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full border border-brand-primary/10">
                  Your Brand at the Center
                </span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ── Brand Statement ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Glow behind */}
          <div className="absolute -inset-8 bg-gradient-to-r from-brand-primary/5 via-brand-accent/5 to-brand-primary/5 rounded-3xl blur-2xl pointer-events-none" />

          <div className="relative bg-brand-dark rounded-3xl p-10 lg:p-14 text-center overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-40 h-40 bg-brand-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-brand-accent/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

            <div className="relative">
              {/* Icon */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                className="w-16 h-16 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-brand-primary to-brand-accent flex items-center justify-center"
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                  <path d="M5 3v4" />
                  <path d="M19 17v4" />
                  <path d="M3 5h4" />
                  <path d="M17 19h4" />
                </svg>
              </motion.div>

              {/* Statement */}
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-snug mb-4">
                The question isn&apos;t only whether
                <br className="hidden sm:block" /> your website ranks.
              </h3>

              <p className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug">
                <span className="text-gradient bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text" style={{ WebkitTextFillColor: "transparent" }}>
                  It&apos;s whether your brand is part of the answer.
                </span>
              </p>

              {/* Supporting text */}
              <p className="mt-8 text-base text-white/50 max-w-lg mx-auto leading-relaxed">
                Prompt&Co. helps brands build the technical, content, entity and
                authority signals that make them discoverable, citable and
                recommendable across the AI search ecosystem.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
