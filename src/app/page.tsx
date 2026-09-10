import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { AIPlatformStrip } from "@/components/AIPlatformStrip";
import { SearchShift } from "@/components/SearchShift";
import { ComparisonTable } from "@/components/ComparisonTable";
import { AIVisibilityAudit } from "@/components/AIVisibilityAudit";
import { Services } from "@/components/Services";
import { Methodology } from "@/components/Methodology";
import { Industries } from "@/components/Industries";
import { Testimonials } from "@/components/Testimonials";
import { CaseStudies } from "@/components/CaseStudies";
import { Founders } from "@/components/Founders";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import {
  OrganizationSchema,
  WebSiteSchema,
  FAQSchema,
} from "@/components/schema/SchemaMarkup";
import { faqData } from "@/lib/data";

export default function Home() {
  return (
    <>
      {/* Structured Data */}
      <OrganizationSchema />
      <WebSiteSchema />
      <FAQSchema faqs={faqData} />

      {/* Page Sections — per strategy §62 */}
      <AnnouncementBar />
      <Header />
      <main>
        {/* 1. Hero */}
        <Hero />

        {/* 2. AI Platform Strip */}
        <AIPlatformStrip />

        {/* 3. The Search Shift */}
        <SearchShift />

        {/* 4. SEO vs AEO vs GEO */}
        <ComparisonTable />

        {/* 5. AI Visibility Audit */}
        <AIVisibilityAudit />

        {/* 6. Services */}
        <Services />

        {/* 7. Methodology */}
        <Methodology />

        {/* 8. Industries */}
        <Industries />

        {/* 9. Proof / Testimonials */}
        <Testimonials />

        {/* 10. Case Studies */}
        <CaseStudies />

        {/* 11. Know the Founders */}
        <Founders />

        {/* 12. FAQ */}
        <FAQ />

        {/* 12. Final CTA */}
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
