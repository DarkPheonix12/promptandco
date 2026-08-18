"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "./Icons";

const demoQueries = [
  "What's the best AI search optimization agency?",
  "Which companies help with AEO and GEO?",
  "Who are the top agencies for AI visibility?",
];

export function Hero() {
  const [promptText, setPromptText] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [isAutoDemo, setIsAutoDemo] = useState(false);
  const [demoPhase, setDemoPhase] = useState<"idle" | "typing" | "analyzing" | "results" | "resetting">("idle");
  const demoQueryIdx = useRef(0);
  const typingTimerRef = useRef<ReturnType<typeof setTimeout>>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // ── Auto Demo Logic ──
  const startAutoDemo = useCallback(() => {
    setIsAutoDemo(true);
    setDemoPhase("typing");
    setPromptText("");
    setShowResults(false);
    setIsAnalyzing(false);
    demoQueryIdx.current = 0;
  }, []);

  // Typing phase — type query character by character
  useEffect(() => {
    if (demoPhase !== "typing") return;

    const query = demoQueries[demoQueryIdx.current % demoQueries.length];
    let charIndex = 0;

    const typeChar = () => {
      if (charIndex <= query.length) {
        setPromptText(query.slice(0, charIndex));
        charIndex++;
        typingTimerRef.current = setTimeout(typeChar, 40 + Math.random() * 30);
      } else {
        // Done typing, trigger analyze after short pause
        typingTimerRef.current = setTimeout(() => {
          setDemoPhase("analyzing");
        }, 600);
      }
    };

    typingTimerRef.current = setTimeout(typeChar, 500);

    return () => {
      if (typingTimerRef.current) clearTimeout(typingTimerRef.current);
    };
  }, [demoPhase]);

  // Analyzing phase
  useEffect(() => {
    if (demoPhase !== "analyzing") return;

    setIsAnalyzing(true);
    typingTimerRef.current = setTimeout(() => {
      setIsAnalyzing(false);
      setShowResults(true);
      setDemoPhase("results");
    }, 2200);

    return () => {
      if (typingTimerRef.current) clearTimeout(typingTimerRef.current);
    };
  }, [demoPhase]);

  // Results phase — show for 5 seconds then reset
  useEffect(() => {
    if (demoPhase !== "results") return;

    typingTimerRef.current = setTimeout(() => {
      setDemoPhase("resetting");
    }, 5000);

    return () => {
      if (typingTimerRef.current) clearTimeout(typingTimerRef.current);
    };
  }, [demoPhase]);

  // Resetting phase — go back to input, then next query
  useEffect(() => {
    if (demoPhase !== "resetting") return;

    setShowResults(false);
    setPromptText("");
    demoQueryIdx.current += 1;

    typingTimerRef.current = setTimeout(() => {
      setDemoPhase("typing");
    }, 800);

    return () => {
      if (typingTimerRef.current) clearTimeout(typingTimerRef.current);
    };
  }, [demoPhase]);

  // Start auto-demo on mount
  useEffect(() => {
    const timer = setTimeout(startAutoDemo, 1500);
    return () => {
      clearTimeout(timer);
      if (typingTimerRef.current) clearTimeout(typingTimerRef.current);
    };
  }, [startAutoDemo]);

  // ── Manual Handlers ──
  const handleAnalyze = () => {
    if (!promptText.trim()) return;
    setIsAutoDemo(false);
    setIsAnalyzing(true);
    setShowResults(false);
    setTimeout(() => {
      setIsAnalyzing(false);
      setShowResults(true);
    }, 2200);
  };

  const handleExampleClick = (prompt: string) => {
    setIsAutoDemo(false);
    setPromptText(prompt);
    setIsAnalyzing(true);
    setShowResults(false);
    setTimeout(() => {
      setIsAnalyzing(false);
      setShowResults(true);
    }, 2200);
  };

  const handleReset = () => {
    setIsAutoDemo(false);
    setShowResults(false);
    setPromptText("");
    setIsAnalyzing(false);
  };

  return (
    <section className="relative bg-gradient-hero overflow-hidden min-h-[90vh] flex items-center">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="absolute top-20 left-[15%] w-[500px] h-[500px] bg-brand-primary/[0.07] rounded-full blur-[120px] animate-orb-1" />
      <div className="absolute bottom-10 right-[10%] w-[400px] h-[400px] bg-brand-accent/[0.06] rounded-full blur-[100px] animate-orb-2" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-purple-500/[0.04] rounded-full blur-[80px] animate-orb-1" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 lg:pt-12 lg:pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* ── Left Column ── */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white/[0.07] backdrop-blur-sm border border-white/[0.08] rounded-full px-4 py-1.5 mb-7"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
              </span>
              <span className="text-sm text-white/75 font-medium tracking-wide">
                AI Search Optimization Agency
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.7 }}
              className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6"
            >
              Be the brand{" "}
              <span className="relative inline-block">
                <span
                  className="text-gradient bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text"
                  style={{ WebkitTextFillColor: "transparent" }}
                >
                  AI recommends.
                </span>
                <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-60" />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-lg lg:text-xl text-white/65 max-w-xl mx-auto lg:mx-0 mb-3 leading-relaxed font-light"
            >
              AEO + GEO + AI Search Optimization for brands that want to be
              discovered where customers are{" "}
              <span className="text-white/85 font-medium">asking questions</span>
              —not just where they&apos;re clicking links.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-sm text-white/40 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              Prompt&Co. builds the technical, content, entity and authority
              signals that help brands become more discoverable, understandable,
              citable and recommendable across the evolving AI search ecosystem.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
            >
              <a
                href="/contact"
                className="group relative inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-brand-primary to-brand-accent text-white px-7 py-3.5 rounded-xl text-[15px] font-semibold hover:shadow-xl hover:shadow-brand-primary/30 transition-all duration-300 hover:scale-[1.02]"
              >
                <Icon name="sparkles" size={18} />
                Get Your AI Visibility Audit
                <span className="absolute inset-0 rounded-xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a
                href="#methodology"
                className="inline-flex items-center justify-center gap-2 bg-white/[0.06] backdrop-blur-sm border border-white/[0.12] text-white/90 px-7 py-3.5 rounded-xl text-[15px] font-medium hover:bg-white/[0.1] hover:border-white/[0.2] transition-all duration-300"
              >
                See How It Works
                <Icon name="arrow-right" size={16} />
              </a>
            </motion.div>
          </div>

          {/* ── Right Column — White Prompt Interface ── */}
          <motion.div
            initial={{ opacity: 0, x: 40, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative"
          >
            <div className="absolute -inset-8 bg-gradient-to-r from-brand-primary/20 via-brand-accent/15 to-purple-500/15 rounded-3xl blur-3xl opacity-60" />

            <div className="relative bg-white rounded-2xl p-5 shadow-2xl shadow-black/30 border border-white/80">
              {/* Browser Chrome */}
              <div className="flex items-center gap-2 mb-4 px-1">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f57] shadow-sm" />
                  <div className="w-3 h-3 rounded-full bg-[#febc2e] shadow-sm" />
                  <div className="w-3 h-3 rounded-full bg-[#28c840] shadow-sm" />
                </div>
                <div className="flex-1 bg-gray-100 rounded-lg px-3 py-1.5 text-[11px] text-gray-400 font-mono truncate">
                  promptco.online/audit
                </div>
              </div>

              <AnimatePresence mode="wait">
                {!showResults ? (
                  <motion.div
                    key="input"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {/* Prompt Input */}
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 mb-4">
                      <div className="flex items-start gap-3">
                        <div className="mt-0.5 w-8 h-8 rounded-lg bg-gradient-to-br from-brand-primary to-brand-accent flex items-center justify-center flex-shrink-0 shadow-md shadow-brand-primary/20">
                          <Icon name="search" size={14} className="text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-widest mb-1.5">
                            Ask AI
                          </p>
                          <input
                            ref={inputRef}
                            type="text"
                            value={promptText}
                            onChange={(e) => {
                              setPromptText(e.target.value);
                              setIsAutoDemo(false);
                            }}
                            onKeyDown={(e) => e.key === "Enter" && handleAnalyze()}
                            placeholder={!isAutoDemo ? "Type a question about your brand..." : ""}
                            className="w-full bg-transparent text-gray-900 placeholder-gray-300 text-sm focus:outline-none font-mono"
                          />
                          <span className="inline-block w-[2px] h-4 bg-brand-primary cursor-blink ml-0.5 align-middle" />
                        </div>
                      </div>
                    </div>

                    {/* Example Prompts */}
                    {!isAnalyzing && !isAutoDemo && (
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {demoQueries.map((prompt, i) => (
                          <button
                            key={i}
                            onClick={() => handleExampleClick(prompt)}
                            className="text-[11px] text-gray-500 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-full px-3 py-1.5 transition-all hover:text-gray-700 hover:border-gray-300"
                          >
                            {prompt}
                          </button>
                        ))}
                      </div>
                    )}

                    {/* Analyze Button — Solid Blue */}
                    <button
                      onClick={handleAnalyze}
                      disabled={!promptText.trim() || isAnalyzing}
                      className="w-full text-white py-3 rounded-xl text-sm font-semibold disabled:opacity-40 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 flex items-center justify-center gap-2"
                      style={{
                        background: "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)",
                      }}
                    >
                      {isAnalyzing ? (
                        <>
                          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          Analyzing AI Visibility...
                        </>
                      ) : (
                        <>
                          <Icon name="sparkles" size={16} />
                          Analyze AI Visibility
                        </>
                      )}
                    </button>
                  </motion.div>
                ) : (
                  /* ── Results Dashboard ── */
                  <motion.div
                    key="results"
                    initial={{ opacity: 0, y: 15, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    {/* Header */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-md bg-green-100 flex items-center justify-center">
                          <Icon name="check" size={12} className="text-green-600" />
                        </div>
                        <p className="text-xs font-bold text-gray-900">
                          AI Visibility Report
                        </p>
                      </div>
                      <span className="text-[10px] text-green-600 bg-green-50 px-2 py-0.5 rounded-full font-medium">
                        Live Analysis
                      </span>
                    </div>

                    {/* Score Cards */}
                    <div className="grid grid-cols-2 gap-2 mb-3">
                      {[
                        { label: "Visibility Score", value: "73/100", change: "+34%", color: "text-blue-600" },
                        { label: "AI Mentions", value: "156", change: "+89%", color: "text-green-600" },
                        { label: "Citation Rate", value: "28%", change: "+142%", color: "text-cyan-600" },
                        { label: "Recommendations", value: "41%", change: "+67%", color: "text-amber-600" },
                      ].map((m) => (
                        <div key={m.label} className="bg-gray-50 border border-gray-100 rounded-lg p-2.5">
                          <p className="text-[10px] text-gray-400 mb-0.5">{m.label}</p>
                          <div className="flex items-end gap-1.5">
                            <p className={`text-lg font-bold ${m.color}`}>{m.value}</p>
                            <span className="text-[10px] font-semibold text-green-600 mb-0.5">
                              {m.change}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Platform Presence */}
                    <div className="bg-gray-50 border border-gray-100 rounded-lg p-3 mb-3">
                      <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider mb-2">
                        Platform Presence
                      </p>
                      <div className="space-y-1.5">
                        {[
                          { platform: "ChatGPT", status: "Recommended", score: 82, color: "bg-green-500" },
                          { platform: "Google AI", status: "Mentioned", score: 65, color: "bg-amber-500" },
                          { platform: "Perplexity", status: "Cited", score: 71, color: "bg-blue-500" },
                        ].map((p) => (
                          <div key={p.platform} className="flex items-center gap-2">
                            <span className="text-[11px] text-gray-600 font-medium w-20">
                              {p.platform}
                            </span>
                            <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                              <motion.div
                                className={`h-full ${p.color} rounded-full`}
                                initial={{ width: 0 }}
                                animate={{ width: `${p.score}%` }}
                                transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
                              />
                            </div>
                            <span className="text-[10px] text-gray-400 w-12 text-right">
                              {p.status}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Improvement Callout */}
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200/50 rounded-lg p-3 mb-3">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 7 13.5 15.5 8.5 10.5 2 17" />
                            <path d="M16 7h6v6" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-xs font-bold text-green-800">
                            3.2x improvement potential
                          </p>
                          <p className="text-[10px] text-green-600">
                            Based on competitor gaps in your market
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Top Prompt */}
                    <div className="bg-blue-50 border border-blue-100 rounded-lg p-3 text-center">
                      <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider mb-0.5">
                        Top opportunity prompt
                      </p>
                      <p className="text-xs text-gray-700 font-medium">
                        &quot;best [category] for [use case]&quot;
                      </p>
                    </div>

                    {/* Reset */}
                    <button
                      onClick={handleReset}
                      className="w-full mt-3 text-[11px] text-gray-400 hover:text-gray-600 transition-colors py-1"
                    >
                      ← Try another search
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
