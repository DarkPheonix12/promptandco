import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/lib/data";
import { BreadcrumbSchema } from "@/components/schema/SchemaMarkup";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Prompt&Co. collects, uses and protects information submitted through promptco.online.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: siteConfig.url },
          { name: "Privacy Policy", url: `${siteConfig.url}/privacy-policy` },
        ]}
      />
      <Header />
      <main className="bg-white">
        <div className="mx-auto max-w-3xl px-5 py-14 sm:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-3 text-[14px] text-brand-muted">
            Last updated: September 12, 2026
          </p>

          <div className="mt-10 space-y-8 text-[15px] leading-8 text-brand-dark-700">
            <section>
              <h2 className="text-xl font-bold text-brand-dark">
                1. Who we are
              </h2>
              <p className="mt-3">
                Prompt&Co. (&ldquo;we&rdquo;, &ldquo;us&rdquo;) operates the website
                promptco.online and provides AI search optimization services.
                For any privacy question or request, contact us at{" "}
                <a
                  href="mailto:hello@promptco.online"
                  className="font-medium text-brand-primary hover:underline"
                >
                  hello@promptco.online
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-dark">
                2. What we collect
              </h2>
              <p className="mt-3">When you submit our contact or assessment form, you give us:</p>
              <ul className="mt-3 list-disc space-y-1.5 pl-6">
                <li>Identity and contact data: name, work email, company, website.</li>
                <li>
                  Context data you choose to share: industry, target market,
                  budget range, goals and any message content.
                </li>
              </ul>
              <p className="mt-3">
                When you submit a website URL for a free assessment, we also
                fetch and analyze that website&apos;s publicly available content
                (page text, headings, metadata, structured data) to generate your
                report.
              </p>
              <p className="mt-3">
                Like most websites, our hosting provider (Cloudflare) processes
                standard technical logs such as IP address, user agent and
                requested URLs for security and rate limiting.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-dark">
                3. How we use it
              </h2>
              <ul className="mt-3 list-disc space-y-1.5 pl-6">
                <li>To respond to your inquiry and prepare your assessment.</li>
                <li>
                  To generate your AI visibility report: we scrape the website
                  URL you provide and may process its content using third-party
                  AI services to draft analysis.
                </li>
                <li>To send you the report and, where relevant, follow up.</li>
              </ul>
              <p className="mt-3">
                We do not sell personal information, and we do not use your form
                submissions to train AI models.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-dark">
                4. Third-party processors
              </h2>
              <p className="mt-3">We rely on a small number of processors:</p>
              <ul className="mt-3 list-disc space-y-1.5 pl-6">
                <li>
                  <strong>Cloudflare</strong> — hosting, CDN, security and bot
                  management.
                </li>
                <li>
                  <strong>Resend</strong> — transactional email delivery (your
                  report and our notification).
                </li>
                <li>
                  <strong>Cloudflare D1</strong> — rate-limit counters; stores
                  hashed request metadata, not form content.
                </li>
                <li>
                  <strong>AI providers (e.g., Groq, Google Gemini)</strong> —
                  used to draft assessment reports. Only the scraped content of
                  the website URL you submit is processed, not your identity or
                  contact details.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-dark">
                5. Retention
              </h2>
              <p className="mt-3">
                We keep inquiry emails and reports for as long as needed to
                serve you and for reasonable record-keeping. Rate-limit records
                expire automatically. You can ask us to delete your information
                at any time.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-dark">
                6. Your rights
              </h2>
              <p className="mt-3">
                Depending on where you live, you may have rights to access,
                correct, export or delete your personal information, and to
                object to processing. Email{" "}
                <a
                  href="mailto:hello@promptco.online"
                  className="font-medium text-brand-primary hover:underline"
                >
                  hello@promptco.online
                </a>{" "}
                and we will respond within 30 days. If you are in the EEA or UK,
                you may also lodge a complaint with your local data protection
                authority.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-dark">
                7. Cookies & analytics
              </h2>
              <p className="mt-3">
                This site does not set advertising or cross-site tracking
                cookies. If we add analytics in the future, this section will be
                updated first.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-dark">
                8. Changes to this policy
              </h2>
              <p className="mt-3">
                If we change this policy materially, we will update the date
                above and, where appropriate, note what changed.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
