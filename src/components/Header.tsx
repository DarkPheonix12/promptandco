"use client";

import { useState, useEffect } from "react";
import { navigation } from "@/lib/data";
import { Icon } from "./Icons";
import { AnimatedLogo } from "./AnimatedLogo";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl shadow-[0_1px_3px_rgba(0,0,0,0.04)] border-b border-brand-border/40"
          : "bg-white"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-15 lg:h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2.5 group">
            <AnimatedLogo size={36} />
            <span className="text-lg font-bold text-brand-dark tracking-tight">
              Prompt<span className="text-brand-primary">&</span>Co.
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navigation.main.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className="flex items-center gap-1 px-3 py-2 text-[13px] font-medium text-brand-dark-700 hover:text-brand-primary transition-colors rounded-lg hover:bg-brand-surface/80"
                  aria-expanded={!!item.children}
                >
                  {item.label}
                  {item.children && (
                    <Icon
                      name="chevron-down"
                      size={12}
                      className="opacity-40"
                    />
                  )}
                </button>

                {/* Dropdown */}
                {item.children && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 pt-2 z-50">
                    <div className="bg-white rounded-xl shadow-xl shadow-black/[0.06] border border-brand-border/50 p-1.5 min-w-[220px]">
                      {item.children.map((child) => (
                        <a
                          key={child.label}
                          href={child.href}
                          className="block px-3 py-2 text-[13px] text-brand-dark-700 hover:bg-brand-surface hover:text-brand-primary rounded-lg transition-colors"
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="/contact"
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-[13px] font-bold text-white transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:shadow-blue-500/25"
              style={{
                background: "linear-gradient(135deg, #2563eb 0%, #06b6d4 100%)",
              }}
            >
              <Icon name="sparkles" size={14} />
              Get AI Visibility Audit
              <span className="absolute inset-0 rounded-xl bg-white/15 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-brand-dark-700 hover:bg-brand-surface rounded-lg transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            <Icon name={mobileOpen ? "close" : "menu"} size={22} />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-brand-border/40 py-3 animate-fade-in-up">
            <div className="flex flex-col gap-0.5">
              {navigation.main.map((item) => (
                <div key={item.label}>
                  <a
                    href={item.href}
                    className="block px-4 py-2.5 text-sm font-medium text-brand-dark-700 hover:bg-brand-surface rounded-lg transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </a>
                  {item.children && (
                    <div className="pl-6 pb-1">
                      {item.children.slice(0, 5).map((child) => (
                        <a
                          key={child.label}
                          href={child.href}
                          className="block px-4 py-1.5 text-xs text-brand-muted hover:text-brand-primary transition-colors"
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="mt-3 px-4">
                <a
                  href="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 text-white px-5 py-3 rounded-xl text-sm font-bold"
                  style={{
                    background: "linear-gradient(135deg, #2563eb 0%, #06b6d4 100%)",
                  }}
                  onClick={() => setMobileOpen(false)}
                >
                  <Icon name="sparkles" size={16} />
                  Get AI Visibility Audit
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
