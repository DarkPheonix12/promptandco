"use client";

import { motion } from "framer-motion";

const platforms = [
  {
    name: "ChatGPT",
    color: "#10a37f",
    bg: "#10a37f15",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z" />
      </svg>
    ),
  },
  {
    name: "Google AI",
    color: "#4285f4",
    bg: "#4285f415",
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7">
        <path fill="#4285f4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
        <path fill="#34a853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
        <path fill="#fbbc05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
        <path fill="#ea4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
      </svg>
    ),
  },
  {
    name: "Gemini",
    color: "#1a73e8",
    bg: "#1a73e815",
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7">
        <path fill="#1a73e8" d="M12 2L1.6 18.4l3.2 3.6L12 9.2l7.2 12.8 3.2-3.6L12 2z" opacity="0.8" />
        <path fill="#4285f4" d="M12 2l7.2 12.8-3.2 3.6L12 9.2V2z" />
        <path fill="#ea4335" d="M1.6 18.4L12 2v7.2l-7.2 12.8-.2-3.6z" opacity="0.6" />
        <path fill="#34a853" d="M22.4 18.4L12 2v7.2l7.2 12.8.2-3.6z" opacity="0.6" />
      </svg>
    ),
  },
  {
    name: "Claude",
    color: "#d97706",
    bg: "#d9770615",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M4.709 15.955l4.397-10.987c.2-.499.349-.873.549-.873.2 0 .349.374.549.873l4.397 10.987h-2.028l-1.004-2.602H7.74l-1.004 2.602H4.709zm3.737-4.522h3.486L9.862 6.673h-.044L8.446 11.433z" />
        <path d="M15.458 15.955l4.397-10.987c.2-.499.349-.873.549-.873.2 0 .349.374.549.873l4.397 10.987h-2.028l-1.004-2.602h-4.856l-1.004 2.602h-2.028zm3.737-4.522h3.486L19.162 6.673h-.044L17.746 11.433z" />
      </svg>
    ),
  },
  {
    name: "Perplexity",
    color: "#20b8cd",
    bg: "#20b8cd15",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2.16c5.437 0 9.84 4.403 9.84 9.84S17.437 21.84 12 21.84 2.16 17.437 2.16 12 6.563 2.16 12 2.16zm0 4.08a5.76 5.76 0 1 0 0 11.52 5.76 5.76 0 0 0 0-11.52zm0 2.16a3.6 3.6 0 1 1 0 7.2 3.6 3.6 0 0 1 0-7.2z" />
      </svg>
    ),
  },
  {
    name: "Microsoft Copilot",
    color: "#7b68ee",
    bg: "#7b68ee15",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M11.4 2L2 7.8l3.6 2.4L11.4 4l5.8 6.2 3.6-2.4L11.4 2z" opacity="0.9" />
        <path d="M2 14.4l3.6-2.4L11.4 18l5.8-6L20.8 14.4 11.4 22 2 14.4z" opacity="0.7" />
        <path d="M11.4 10L5.6 4 2 7.8l9.4 6.2L17.2 10l3.6 2.4L11.4 22V10z" opacity="0.5" />
      </svg>
    ),
  },
  {
    name: "Grok",
    color: "#1DA1F2",
    bg: "#1DA1F215",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "Emerging AI",
    color: "#6366f1",
    bg: "#6366f115",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M12 3v3m6.36-.64-2.12 2.12M21 12h-3m.64 6.36-2.12-2.12M12 21v-3m-6.36.64 2.12-2.12M3 12h3m-.64-6.36 2.12 2.12" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    ),
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  },
};

export function AIPlatformStrip() {
  return (
    <section className="relative border-y border-brand-border/50 bg-white overflow-hidden">
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-brand-primary/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Section Label */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-muted mb-10"
        >
          Built for the AI search ecosystem
        </motion.p>

        {/* Logos Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-4 sm:grid-cols-4 lg:grid-cols-8 gap-x-6 gap-y-8"
        >
          {platforms.map((platform) => (
            <motion.div
              key={platform.name}
              variants={itemVariants}
              className="flex flex-col items-center gap-3 group cursor-default"
            >
              {/* Circular Logo Container */}
              <div
                className="relative w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
                style={{
                  background: platform.bg,
                  boxShadow: `0 0 0 1px ${platform.color}20`,
                }}
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
                  style={{ background: platform.bg }}
                />
                <div
                  className="relative transition-colors duration-300"
                  style={{ color: platform.color }}
                >
                  {platform.icon}
                </div>
              </div>

              {/* Platform Name */}
              <span className="text-[11px] font-medium text-brand-dark-600 group-hover:text-brand-dark transition-colors text-center leading-tight">
                {platform.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center text-sm text-brand-muted mt-10 max-w-2xl mx-auto leading-relaxed"
        >
          AI discovery is bigger than a single platform. Prompt&Co. builds the
          underlying search, content, entity and authority signals that help
          brands remain discoverable as AI search evolves.
        </motion.p>
      </div>
    </section>
  );
}
