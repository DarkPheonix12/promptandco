"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AnimatedLogo } from "@/components/AnimatedLogo";
import { Icon } from "@/components/Icons";

const improveOptions = [
  "AI Visibility",
  "AEO (Answer Engine Optimization)",
  "GEO (Generative Engine Optimization)",
  "SEO",
  "Content Strategy",
  "Entity Optimization",
  "Competitor Visibility",
  "Not sure yet — need guidance",
];

const industryOptions = [
  "SaaS",
  "E-commerce",
  "B2B / Enterprise",
  "Healthcare",
  "Finance",
  "Legal",
  "Real Estate",
  "Professional Services",
  "Education",
  "Technology",
  "Local Services",
  "Other",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    website: "",
    industry: "",
    targetMarket: "",
    budget: "",
    improve: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Something went wrong. Please try again.");
      }

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Header />

      <main className="relative min-h-screen overflow-hidden">
        {/* ── Background ── */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f1e] via-[#0f172a] to-[#111827]" />
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute top-20 left-[10%] w-[600px] h-[600px] bg-brand-primary/[0.07] rounded-full blur-[150px] animate-orb-1" />
        <div className="absolute bottom-20 right-[10%] w-[500px] h-[500px] bg-brand-accent/[0.06] rounded-full blur-[120px] animate-orb-2" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-purple-500/[0.04] rounded-full blur-[100px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* ── Left Column — Copy ── */}
            <div className="lg:sticky lg:top-32">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-white/[0.06] backdrop-blur-sm border border-white/[0.08] rounded-full px-4 py-1.5 mb-6">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
                  </span>
                  <span className="text-sm text-white/70 font-medium">
                    Free Assessment
                  </span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-6">
                  Let&apos;s find out what AI says about{" "}
                  <span className="relative inline-block">
                    <span
                      className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text"
                      style={{ WebkitTextFillColor: "transparent" }}
                    >
                      your brand
                    </span>
                    <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-60" />
                  </span>
                </h1>

                <p className="text-base text-white/50 leading-relaxed mb-8 max-w-lg">
                  Tell us what you sell, who you sell it to and where you want to
                  grow. We&apos;ll identify the AI-search opportunities worth paying
                  attention to—and where competitors may already be getting
                  discovered instead.
                </p>

                {/* What you get */}
                <div className="space-y-3">
                  {[
                    "AI visibility audit across major platforms",
                    "Competitor benchmarking in your market",
                    "Identification of highest-impact opportunities",
                    "Detailed report with actionable recommendations",
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-5 h-5 rounded-full bg-green-500/15 flex items-center justify-center flex-shrink-0">
                        <Icon name="check" size={12} className="text-green-400" />
                      </div>
                      <span className="text-sm text-white/60">{item}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Trust note */}
                <div className="mt-8 pt-6 border-t border-white/[0.06]">
                  <p className="text-xs text-white/30">
                    No obligation. We&apos; review your information before recommending
                    a next step. Typical response within 24 hours.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* ── Right Column — Form ── */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Card */}
                    <div className="relative">
                      <div className="absolute -inset-1 bg-gradient-to-r from-brand-primary/20 via-brand-accent/15 to-purple-500/15 rounded-3xl blur-xl opacity-50" />
                      <div className="relative bg-white/[0.04] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-6 lg:p-8">
                        {/* Form Header */}
                        <div className="flex items-center gap-3 mb-6">
                          <AnimatedLogo size={36} />
                          <div>
                            <p className="text-sm font-semibold text-white">
                              Get Your AI Visibility Assessment
                            </p>
                            <p className="text-[11px] text-white/40">
                              Free · No obligation · 24h response
                            </p>
                          </div>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                          {/* Name */}
                          <div>
                            <label className="block text-xs font-semibold text-white/70 mb-1.5">
                              Your name <span className="text-red-400">*</span>
                            </label>
                            <input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              placeholder="John Smith"
                              className="w-full px-4 py-2.5 rounded-xl bg-white/[0.06] border border-white/[0.08] text-white placeholder-white/25 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/40 focus:border-brand-primary/40 transition-all"
                              required
                            />
                          </div>

                          {/* Email */}
                          <div>
                            <label className="block text-xs font-semibold text-white/70 mb-1.5">
                              Work email <span className="text-red-400">*</span>
                            </label>
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="john@company.com"
                              className="w-full px-4 py-2.5 rounded-xl bg-white/[0.06] border border-white/[0.08] text-white placeholder-white/25 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/40 focus:border-brand-primary/40 transition-all"
                              required
                            />
                          </div>

                          {/* Company + Website */}
                          <div className="grid grid-cols-2 gap-3">
                            <div>
                              <label className="block text-xs font-semibold text-white/70 mb-1.5">
                                Company <span className="text-red-400">*</span>
                              </label>
                              <input
                                type="text"
                                name="company"
                                value={formData.company}
                                onChange={handleChange}
                                placeholder="Acme Inc."
                                className="w-full px-4 py-2.5 rounded-xl bg-white/[0.06] border border-white/[0.08] text-white placeholder-white/25 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/40 focus:border-brand-primary/40 transition-all"
                                required
                              />
                            </div>
                            <div>
                              <label className="block text-xs font-semibold text-white/70 mb-1.5">
                                Website <span className="text-red-400">*</span>
                              </label>
                              <input
                                type="url"
                                name="website"
                                value={formData.website}
                                onChange={handleChange}
                                placeholder="https://company.com"
                                className="w-full px-4 py-2.5 rounded-xl bg-white/[0.06] border border-white/[0.08] text-white placeholder-white/25 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/40 focus:border-brand-primary/40 transition-all"
                                required
                              />
                            </div>
                          </div>

                          {/* Industry */}
                          <div>
                            <label className="block text-xs font-semibold text-white/70 mb-1.5">
                              Industry
                            </label>
                            <select
                              name="industry"
                              value={formData.industry}
                              onChange={handleChange}
                              className="w-full px-4 py-2.5 rounded-xl bg-white/[0.06] border border-white/[0.08] text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/40 focus:border-brand-primary/40 transition-all appearance-none cursor-pointer"
                              style={{
                                backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='rgba(255,255,255,0.4)' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E")`,
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "right 12px center",
                              }}
                            >
                              <option value="" className="bg-[#1e293b] text-white/50">
                                Select your industry
                              </option>
                              {industryOptions.map((opt) => (
                                <option key={opt} value={opt} className="bg-[#1e293b] text-white">
                                  {opt}
                                </option>
                              ))}
                            </select>
                          </div>

                          {/* Target Market */}
                          <div>
                            <label className="block text-xs font-semibold text-white/70 mb-1.5">
                              Target market / region
                            </label>
                            <input
                              type="text"
                              name="targetMarket"
                              value={formData.targetMarket}
                              onChange={handleChange}
                              placeholder="e.g., India, Global, US & UK"
                              className="w-full px-4 py-2.5 rounded-xl bg-white/[0.06] border border-white/[0.08] text-white placeholder-white/25 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/40 focus:border-brand-primary/40 transition-all"
                            />
                          </div>

                          {/* What to improve */}
                          <div>
                            <label className="block text-xs font-semibold text-white/70 mb-1.5">
                              What are you trying to improve? <span className="text-red-400">*</span>
                            </label>
                            <select
                              name="improve"
                              value={formData.improve}
                              onChange={handleChange}
                              className="w-full px-4 py-2.5 rounded-xl bg-white/[0.06] border border-white/[0.08] text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/40 focus:border-brand-primary/40 transition-all appearance-none cursor-pointer"
                              style={{
                                backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='rgba(255,255,255,0.4)' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E")`,
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "right 12px center",
                              }}
                              required
                            >
                              <option value="" className="bg-[#1e293b] text-white/50">
                                Select primary goal
                              </option>
                              {improveOptions.map((opt) => (
                                <option key={opt} value={opt} className="bg-[#1e293b] text-white">
                                  {opt}
                                </option>
                              ))}
                            </select>
                          </div>

                          {/* Budget */}
                          <div>
                            <label className="block text-xs font-semibold text-white/70 mb-1.5">
                              Monthly marketing budget <span className="text-white/30">(optional)</span>
                            </label>
                            <input
                              type="text"
                              name="budget"
                              value={formData.budget}
                              onChange={handleChange}
                              placeholder="e.g., $5,000 — $10,000"
                              className="w-full px-4 py-2.5 rounded-xl bg-white/[0.06] border border-white/[0.08] text-white placeholder-white/25 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/40 focus:border-brand-primary/40 transition-all"
                            />
                          </div>

                          {/* Message */}
                          <div>
                            <label className="block text-xs font-semibold text-white/70 mb-1.5">
                              Anything else we should know? <span className="text-white/30">(optional)</span>
                            </label>
                            <textarea
                              name="message"
                              value={formData.message}
                              onChange={handleChange}
                              rows={3}
                              placeholder="Tell us about your current challenges, competitors, or specific goals..."
                              className="w-full px-4 py-2.5 rounded-xl bg-white/[0.06] border border-white/[0.08] text-white placeholder-white/25 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/40 focus:border-brand-primary/40 transition-all resize-none"
                            />
                          </div>

                          {/* Error Message */}
                          {error && (
                            <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-3">
                              <p className="text-sm text-red-400 text-center">{error}</p>
                            </div>
                          )}

                          {/* Submit */}
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full text-white py-3.5 rounded-xl text-sm font-bold hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-[1.01] flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                            style={{
                              background: "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)",
                            }}
                          >
                            {isSubmitting ? (
                              <>
                                <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                </svg>
                                Sending...
                              </>
                            ) : (
                              <>
                                <Icon name="sparkles" size={18} />
                                Get My AI Visibility Assessment
                              </>
                            )}
                          </button>

                          <p className="text-center text-[11px] text-white/25">
                            No obligation. We&apos;ll review before recommending next steps.
                          </p>
                        </form>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  /* ── Success State ── */
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 20, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="relative"
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-3xl blur-xl opacity-50" />
                    <div className="relative bg-white/[0.04] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-8 lg:p-10 text-center">
                      {/* Success Icon */}
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                        className="w-16 h-16 mx-auto mb-6 rounded-full bg-green-500/15 border border-green-500/20 flex items-center justify-center"
                      >
                        <Icon name="check" size={32} className="text-green-400" />
                      </motion.div>

                      <h2 className="text-2xl font-bold text-white mb-3">
                        Request Received
                      </h2>
                      <p className="text-sm text-white/50 max-w-md mx-auto mb-8 leading-relaxed">
                        Thank you, {formData.name}. We&apos;ve received your AI
                        visibility assessment request for{" "}
                        <span className="text-white/70 font-medium">
                          {formData.company}
                        </span>
                        . Our team will review your information and get back to
                        you within 24 hours.
                      </p>

                      {/* What Happens Next */}
                      <div className="bg-white/[0.04] border border-white/[0.06] rounded-xl p-5 text-left mb-6">
                        <p className="text-[11px] font-semibold text-white/40 uppercase tracking-wider mb-4">
                          What happens next
                        </p>
                        <div className="space-y-3">
                          {[
                            {
                              step: "1",
                              title: "We analyze your AI visibility",
                              desc: "Across ChatGPT, Google AI, Perplexity, and other major platforms",
                            },
                            {
                              step: "2",
                              title: "We benchmark against competitors",
                              desc: "In your specific industry and target market",
                            },
                            {
                              step: "3",
                              title: "We identify opportunities",
                              desc: "The highest-impact optimizations for your brand",
                            },
                            {
                              step: "4",
                              title: "You receive a detailed report",
                              desc: "With clear, actionable recommendations",
                            },
                          ].map((item) => (
                            <div key={item.step} className="flex items-start gap-3">
                              <div className="w-6 h-6 rounded-full bg-blue-500/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <span className="text-[10px] font-bold text-blue-400">
                                  {item.step}
                                </span>
                              </div>
                              <div>
                                <p className="text-sm font-semibold text-white/80">
                                  {item.title}
                                </p>
                                <p className="text-xs text-white/40">{item.desc}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Back to home */}
                      <a
                        href="/"
                        className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white/60 transition-colors"
                      >
                        <Icon name="arrow-right" size={14} className="rotate-180" />
                        Back to home
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
