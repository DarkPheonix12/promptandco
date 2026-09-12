"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { services } from "@/lib/data";
import { Icon } from "./Icons";

export function Services() {
  return (
    <section className="relative py-16 lg:py-24 bg-brand-dark text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-primary/[0.06] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-brand-accent/[0.04] rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-white/[0.06] border border-white/[0.08] rounded-full px-4 py-1.5 mb-4"
          >
            <span className="text-xs font-semibold text-brand-accent uppercase tracking-widest">
              Our Services
            </span>
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold leading-tight mb-4"
          >
            Everything your brand needs to become{" "}
            <span
              className="text-gradient bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text"
              style={{ WebkitTextFillColor: "transparent" }}
            >
              AI-discoverable.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base text-white/50"
          >
            Build the signals behind AI discoverability with our integrated
            optimization services.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, i) => (
            <motion.a
              key={service.id}
              href={`/services/${service.slug}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="group relative bg-white/[0.04] backdrop-blur-sm border border-white/[0.06] rounded-2xl p-5 hover:bg-white/[0.08] hover:border-white/[0.12] transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-brand-primary/80 to-brand-accent/80 flex items-center justify-center mb-3.5 group-hover:from-brand-primary group-hover:to-brand-accent transition-all duration-300 shadow-lg shadow-brand-primary/10">
                <Icon name={service.icon} size={20} className="text-white" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold mb-2 group-hover:text-brand-accent transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-white/45 leading-relaxed mb-3">
                {service.description}
              </p>

              {/* CTA */}
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-accent/80 group-hover:text-brand-accent group-hover:gap-2.5 transition-all">
                Explore {service.shortTitle}
                <Icon name="arrow-right" size={14} />
              </span>
            </motion.a>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-10">
          <Link
            href="/services/ai-search-optimization"
            className="inline-flex items-center gap-2 bg-white/[0.06] backdrop-blur-sm border border-white/[0.12] text-white px-6 py-3 rounded-xl text-sm font-semibold hover:bg-white/[0.1] transition-all duration-300"
          >
            Explore All Services
            <Icon name="arrow-right" size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
