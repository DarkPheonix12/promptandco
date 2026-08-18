"use client";

export function AnnouncementBar() {
  return (
    <div className="relative bg-gradient-to-r from-brand-primary via-brand-primary-dark to-brand-accent text-white text-center py-2 px-4 text-[13px] font-medium overflow-hidden">
      {/* Subtle shimmer */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.08] to-transparent animate-[shimmer_3s_infinite]" />
      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
      <span className="relative">
        🚀 AI search is changing how customers discover brands.{" "}
        <a
          href="/contact"
          className="underline underline-offset-2 decoration-white/40 hover:decoration-white transition-colors font-semibold"
        >
          Get your free AI Visibility Audit →
        </a>
      </span>
    </div>
  );
}
