"use client";

import { motion } from "framer-motion";
import {
  FaShoppingCart,
  FaBuilding,
  FaHeartbeat,
  FaBalanceScale,
  FaHome,
  FaUserTie,
  FaGraduationCap,
  FaHotel,
  FaMicrochip,
  FaMapMarkerAlt,
  FaHandshake,
  FaCloud,
} from "react-icons/fa";
import { IconType } from "react-icons";

const industryData: {
  name: string;
  slug: string;
  icon: IconType;
  color: string;
}[] = [
  { name: "SaaS", slug: "saas", icon: FaCloud, color: "#7c3aed" },
  { name: "E-commerce", slug: "ecommerce", icon: FaShoppingCart, color: "#059669" },
  { name: "B2B", slug: "b2b", icon: FaHandshake, color: "#2563eb" },
  { name: "Healthcare", slug: "healthcare", icon: FaHeartbeat, color: "#dc2626" },
  { name: "Finance", slug: "finance", icon: FaBuilding, color: "#0891b2" },
  { name: "Legal", slug: "legal", icon: FaBalanceScale, color: "#7c2d12" },
  { name: "Real Estate", slug: "real-estate", icon: FaHome, color: "#ca8a04" },
  { name: "Professional Services", slug: "professional-services", icon: FaUserTie, color: "#4338ca" },
  { name: "Education", slug: "education", icon: FaGraduationCap, color: "#2563eb" },
  { name: "Hospitality", slug: "hospitality", icon: FaHotel, color: "#d97706" },
  { name: "Technology", slug: "technology", icon: FaMicrochip, color: "#06b6d4" },
  { name: "Local Services", slug: "local-services", icon: FaMapMarkerAlt, color: "#dc2626" },
];

export function Industries() {
  return (
    <section className="relative py-16 lg:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-brand-surface/40 to-white pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-brand-primary/5 border border-brand-primary/10 rounded-full px-4 py-1.5 mb-4"
          >
            <span className="text-xs font-semibold text-brand-primary uppercase tracking-widest">
              Industries
            </span>
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-brand-dark leading-tight mb-4"
          >
            AI discovery doesn&apos;t stop at one industry.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base lg:text-lg text-brand-muted"
          >
            Every industry has different buyers, questions, decision criteria
            and sources of authority. Prompt&Co. adapts its AEO and GEO
            strategy to the way your market is actually discovered.
          </motion.p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {industryData.map((industry, i) => {
            const IconComp = industry.icon;
            return (
              <motion.a
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                className="group bg-white rounded-xl border border-brand-border/50 p-4 hover:border-brand-primary/25 hover:shadow-md hover:shadow-brand-primary/[0.04] transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                    style={{
                      backgroundColor: `${industry.color}10`,
                    }}
                  >
                    <IconComp
                      size={20}
                      style={{ color: industry.color }}
                      className="transition-colors"
                    />
                  </div>
                  <span className="text-sm font-semibold text-brand-dark group-hover:text-brand-primary transition-colors">
                    {industry.name}
                  </span>
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-8">
          <a
            href="/industries"
            className="inline-flex items-center gap-1.5 text-brand-primary font-semibold hover:gap-2.5 transition-all text-sm"
          >
            Explore your industry
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
