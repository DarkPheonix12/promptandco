"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TERMINAL_LINES = [
  { text: "promptco --audit promptco.online", tag: "run" as const },
  { text: "entity.resolve(Prompt&Co.)", tag: "run" as const },
  { text: "[✓] organization schema validated", tag: "ok" as const },
  { text: "[✓] knowledge graph linked", tag: "ok" as const },
  { text: "engines: 8 surfaces mapped", tag: "ok" as const },
  { text: "industries: 13 vertical playbooks loaded", tag: "ok" as const },
  { text: "pipeline: discover → understand → verify → corroborate", tag: "ok" as const },
  { text: "measuring. fixing. compounding.", tag: "ok" as const },
];

const LINE_INTERVAL = 1200;
const LOOP_RESET_DELAY = 6000;

export function SignalTerminal() {
  const [visibleCount, setVisibleCount] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const reset = useCallback(() => {
    setVisibleCount(0);
    setIsPaused(false);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    if (visibleCount >= TERMINAL_LINES.length) {
      const timer = setTimeout(reset, LOOP_RESET_DELAY);
      return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => {
      setVisibleCount((c) => c + 1);
    }, LINE_INTERVAL);

    return () => clearTimeout(timer);
  }, [visibleCount, isPaused, reset]);

  return (
    <div className="rounded-xl border border-white/[0.08] bg-black/40 backdrop-blur-sm p-4 font-mono text-[12px] leading-[1.7] text-white/70 overflow-hidden">
      <div className="flex items-center gap-2 mb-3">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        </div>
        <span className="ml-2 text-[10px] text-white/30 tracking-wide">
          promptco.terminal
        </span>
      </div>

      <div className="space-y-0.5 min-h-[156px]">
        <AnimatePresence>
          {TERMINAL_LINES.slice(0, visibleCount).map((line) => (
            <motion.div
              key={line.text}
              initial={{ opacity: 0, x: -6 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.25 }}
              className="whitespace-nowrap overflow-hidden text-ellipsis"
            >
              <span className="text-white/30 mr-2">{line.tag === "run" ? ">" : ""}</span>
              {line.tag === "ok" && (
                <span className="text-emerald-400 mr-1">✓</span>
              )}
              <span className={line.tag === "ok" ? "text-white/60" : "text-cyan-300/80"}>
                {line.text}
              </span>
            </motion.div>
          ))}
        </AnimatePresence>

        {visibleCount < TERMINAL_LINES.length && (
          <div className="inline-flex items-center mt-1">
            <span className="text-white/30 mr-1.5">{"//"}</span>
            <span className="w-[6px] h-[14px] bg-cyan-400/70 animate-pulse ml-0.5 rounded-[1px]" />
          </div>
        )}
      </div>
    </div>
  );
}