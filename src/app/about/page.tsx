import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/lib/data";
import { BreadcrumbSchema } from "@/components/schema/SchemaMarkup";
import { AboutContent } from "@/components/about/AboutContent";

export const metadata: Metadata = {
  title: seoTitle(),
  description:
    "Prompt&Co. is an AI search optimization agency specializing in AEO, GEO, entity optimization and AI visibility. What we do, how we work, and the standards we hold.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://promptco.online/about",
    siteName: siteConfig.name,
    title: "About Prompt&Co.",
    description:
      "An AI search optimization agency built by operators — what we do, how we work, and the standards we hold.",
  },
};

function seoTitle() {
  return "About — AI Search & AEO/GEO Agency";
}

export default function AboutPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: siteConfig.url },
          { name: "About", url: `${siteConfig.url}/about` },
        ]}
      />
      <Header />
      <AboutContent />
      <Footer />
    </>
  );
}