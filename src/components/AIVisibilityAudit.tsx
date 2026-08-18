"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Icon } from "./Icons";

export function AIVisibilityAudit() {
  const [website, setWebsite] = useState("");
  const [market, setMarket] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!website.trim() || !market.trim()) return;
    setSubmitted(true);
  };

  return (
    <section className="relative py-16 lg:py-24 bg-white overflow-hidden">
      {/* Subtle depth */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-brand-primary/[0.04] rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-brand-primary/5 border border-brand-primary/10 rounded-full px-4 py-1.5 mb-4"
          >
            <span className="text-xs font-semibold text-brand-primary uppercase tracking-widest">
              Free Assessment
            </span>
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-brand-dark leading-tight mb-4"
          >
            What&apos;s AI saying about your brand today?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base lg:text-lg text-brand-muted"
          >
            Find out where you&apos;re visible, where competitors are winning and
            what opportunities you&apos;re missing.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="max-w-xl mx-auto"
        >
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-primary/20 to-brand-accent/20 rounded-2xl blur-lg opacity-60" />
            <div className="relative bg-white rounded-2xl border border-brand-border/60 shadow-xl shadow-brand-primary/[0.04] p-6 lg:p-8">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-semibold text-brand-dark mb-1.5">
                      Your website
                    </label>
                    <input
                      type="url"
                      value={website}
                      onChange={(e) => setWebsite(e.target.value)}
                      placeholder="https://yourcompany.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-brand-border/60 bg-brand-surface/50 text-brand-dark placeholder-brand-muted/60 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/30 focus:border-brand-primary/50 transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-brand-dark mb-1.5">
                      Your market / industry
                    </label>
                    <input
                      type="text"
                      value={market}
                      onChange={(e) => setMarket(e.target.value)}
                      placeholder="e.g., SaaS, E-commerce, Healthcare"
                      className="w-full px-4 py-2.5 rounded-xl border border-brand-border/60 bg-brand-surface/50 text-brand-dark placeholder-brand-muted/60 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/30 focus:border-brand-primary/50 transition-all"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-brand-primary to-brand-accent text-white py-3 rounded-xl text-sm font-semibold hover:shadow-lg hover:shadow-brand-primary/25 transition-all duration-300 hover:scale-[1.01] flex items-center justify-center gap-2"
                  >
                    <Icon name="sparkles" size={18} />
                    Analyze My Visibility
                  </button>

                  <p className="text-center text-[11px] text-brand-muted/70">
                    No obligation. We&apos;ll review your information before
                    recommending a next step.
                  </p>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center border border-green-200">
                      <Icon name="check" size={18} className="text-green-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-brand-dark text-sm">
                        Analysis Request Received
                      </p>
                      <p className="text-xs text-brand-muted">
                        We&apos;ll be in touch within 24 hours.
                      </p>
                    </div>
                  </div>

                  <div className="bg-brand-surface/50 rounded-xl p-4 border border-brand-border/30">
                    <p className="text-[11px] font-semibold text-brand-primary uppercase tracking-wider mb-3">
                      What happens next
                    </p>
                    <div className="space-y-2.5">
                      {[
                        "We analyze your current AI visibility across major platforms",
                        "We benchmark against competitors in your market",
                        "We identify your highest-impact optimization opportunities",
                        "We share a detailed report with actionable recommendations",
                      ].map((step, i) => (
                        <div key={i} className="flex items-start gap-2.5">
                          <div className="w-5 h-5 rounded-full bg-brand-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-[10px] font-bold text-brand-primary">
                              {i + 1}
                            </span>
                          </div>
                          <p className="text-xs text-brand-dark-700 leading-relaxed">
                            {step}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
