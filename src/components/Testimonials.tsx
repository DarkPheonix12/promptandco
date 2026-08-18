"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/lib/data";
import { Icon } from "./Icons";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Icon
          key={i}
          name="star"
          size={16}
          className={i < rating ? "text-amber-400" : "text-brand-border"}
        />
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="relative py-16 lg:py-24 bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-brand-primary/5 border border-brand-primary/10 rounded-full px-4 py-1.5 mb-4"
          >
            <span className="text-xs font-semibold text-brand-primary uppercase tracking-widest">
              Proof
            </span>
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-brand-dark leading-tight mb-4"
          >
            Proof over promises.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base lg:text-lg text-brand-muted"
          >
            Real results from real brands that trusted Prompt&Co. to improve
            their AI discoverability.
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative bg-brand-surface/50 rounded-2xl p-6 border border-brand-border/40 hover:border-brand-border/60 transition-colors"
            >
              {/* Rating */}
              <div className="mb-3">
                <StarRating rating={testimonial.rating} />
              </div>

              {/* Quote */}
              <blockquote className="text-sm text-brand-dark-700 leading-relaxed italic mb-5">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Attribution */}
              <div className="flex items-center gap-3 pt-4 border-t border-brand-border/30">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-brand-primary to-brand-accent flex items-center justify-center">
                  <span className="text-white font-bold text-xs">
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-brand-dark">
                    {testimonial.name}
                  </p>
                  <p className="text-[11px] text-brand-muted">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Bar */}
        <div className="mt-12 pt-8 border-t border-brand-border/30">
          <p className="text-center text-[11px] font-semibold uppercase tracking-[0.15em] text-brand-muted mb-5">
            Built around
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              "AEO",
              "GEO",
              "Technical SEO",
              "Entity Authority",
              "Content",
              "Digital PR",
              "AI Search Analytics",
            ].map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-1.5 bg-brand-surface/60 border border-brand-border/40 rounded-full px-3 py-1.5 text-xs font-medium text-brand-dark-700"
              >
                <Icon name="check" size={12} className="text-brand-primary" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
