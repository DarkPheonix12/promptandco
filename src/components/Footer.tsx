"use client";

import Link from "next/link";
import { Icon } from "./Icons";
import { AnimatedLogo } from "./AnimatedLogo";

const footerLinks = {
  services: [
    { label: "AEO", href: "/services/answer-engine-optimization" },
    { label: "GEO", href: "/services/generative-engine-optimization" },
    { label: "AI Search Optimization", href: "/services/ai-search-optimization" },
    { label: "AI Visibility", href: "/services/ai-visibility" },
    { label: "Entity Optimization", href: "/services/entity-optimization" },
    { label: "AI Content", href: "/services/ai-content-optimization" },
    { label: "Citation Optimization", href: "/services/citation-optimization" },
  ],
  industries: [
    { label: "SaaS", href: "/industries/saas" },
    { label: "E-commerce", href: "/industries/ecommerce" },
    { label: "B2B", href: "/industries/b2b" },
    { label: "Professional Services", href: "/industries/professional-services" },
    { label: "Local Services", href: "/industries/local-services" },
  ],
  resources: [
    { label: "Blog", href: "/resources/blog" },
    { label: "Guides", href: "/resources/guides" },
    { label: "Research", href: "/resources/research" },
    { label: "FAQ", href: "/faq" },
    { label: "Glossary", href: "/resources/glossary" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Reviews", href: "/reviews" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-brand-dark text-white relative overflow-hidden">
      {/* Subtle depth */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-brand-primary/[0.04] rounded-full blur-[80px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-10">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-3">
              <AnimatedLogo size={32} />
              <span className="text-lg font-bold tracking-tight">
                Prompt<span className="text-brand-accent">&</span>Co.
              </span>
            </Link>
            <p className="text-xs text-white/40 leading-relaxed max-w-[260px] mb-5">
              AI search optimization agency specializing in AEO, GEO, entity
              optimization, content and authority across the AI search
              ecosystem.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-primary to-brand-accent text-white px-5 py-2.5 rounded-xl text-xs font-semibold hover:shadow-lg hover:shadow-brand-primary/25 transition-all duration-300"
            >
              Make Your Brand Discoverable in AI
              <Icon name="arrow-right" size={14} />
            </a>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.15em] text-white/60 mb-3">
              Services
            </h4>
            <ul className="space-y-1.5">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-xs text-white/40 hover:text-white/80 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.15em] text-white/60 mb-3">
              Industries
            </h4>
            <ul className="space-y-1.5">
              {footerLinks.industries.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-xs text-white/40 hover:text-white/80 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.15em] text-white/60 mb-3">
              Resources
            </h4>
            <ul className="space-y-1.5">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-xs text-white/40 hover:text-white/80 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.15em] text-white/60 mb-3">
              Company
            </h4>
            <ul className="space-y-1.5">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-xs text-white/40 hover:text-white/80 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-white/[0.06]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-[11px] text-white/25">
              © {new Date().getFullYear()} Prompt&Co. All rights reserved.
            </p>
            <div className="flex items-center gap-5">
              {footerLinks.legal.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-[11px] text-white/25 hover:text-white/50 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
