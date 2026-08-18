"use client";

import { motion } from "framer-motion";

export function AnimatedLogo({ size = 40 }: { size?: number }) {
  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      {/* Background circle — white with subtle depth */}
      <div className="absolute inset-0 rounded-xl bg-white shadow-lg shadow-black/[0.06] border border-black/[0.04]" />

      {/* Animated scene inside */}
      <svg
        viewBox="0 0 40 40"
        fill="none"
        className="relative"
        style={{ width: size - 8, height: size - 8 }}
      >
        {/* Gradient definitions */}
        <defs>
          <linearGradient id="logoGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2563eb" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
          <linearGradient id="logoGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2563eb" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
        </defs>

        {/* Search magnifier base */}
        <motion.circle
          cx="15"
          cy="15"
          r="5.5"
          stroke="url(#logoGrad1)"
          strokeWidth="1.8"
          fill="none"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
        />
        {/* Magnifier handle */}
        <motion.line
          x1="19.2"
          y1="19.2"
          x2="24"
          y2="24"
          stroke="url(#logoGrad2)"
          strokeWidth="1.8"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.4 }}
        />

        {/* Cursor / mouse pointer */}
        <motion.g
          initial={{ x: 12, y: 8, opacity: 0 }}
          animate={{
            x: [12, 8, 14, 10, 12],
            y: [8, 14, 10, 16, 8],
            opacity: 1,
          }}
          transition={{
            x: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            opacity: { delay: 0.6, duration: 0.3 },
          }}
        >
          <path
            d="M6 2L6 12L9 9L13 14L15 13L11 8L14 8Z"
            fill="#2563eb"
            opacity="0.8"
          />
        </motion.g>

        {/* Sparkle / result indicator */}
        <motion.g
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [0, 1.2, 1], opacity: [0, 1, 0.8] }}
          transition={{ delay: 1.5, duration: 0.6, repeat: Infinity, repeatDelay: 3 }}
        >
          <circle cx="22" cy="10" r="1.5" fill="#06b6d4" />
        </motion.g>

        <motion.g
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [0, 1, 0.8], opacity: [0, 0.6, 0.4] }}
          transition={{ delay: 2, duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
        >
          <circle cx="26" cy="14" r="1" fill="#2563eb" />
        </motion.g>

        {/* Small text lines — like search results */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <motion.rect
            x="4"
            y="28"
            width="14"
            height="1.5"
            rx="0.75"
            fill="#2563eb"
            opacity="0.2"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.2, duration: 0.4 }}
            style={{ transformOrigin: "4px 28.75px" }}
          />
          <motion.rect
            x="4"
            y="31"
            width="10"
            height="1.5"
            rx="0.75"
            fill="#06b6d4"
            opacity="0.15"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.4, duration: 0.4 }}
            style={{ transformOrigin: "4px 31.75px" }}
          />
          <motion.rect
            x="4"
            y="34"
            width="12"
            height="1.5"
            rx="0.75"
            fill="#2563eb"
            opacity="0.1"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.6, duration: 0.4 }}
            style={{ transformOrigin: "4px 34.75px" }}
          />
        </motion.g>
      </svg>
    </div>
  );
}
