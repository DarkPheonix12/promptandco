import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/lib/data";
import { BreadcrumbSchema } from "@/components/schema/SchemaMarkup";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms governing the use of promptco.online and Prompt&Co. services.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: siteConfig.url },
          { name: "Terms of Service", url: `${siteConfig.url}/terms` },
        ]}
      />
      <Header />
      <main className="bg-white">
        <div className="mx-auto max-w-3xl px-5 py-14 sm:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl">
            Terms of Service
          </h1>
          <p className="mt-3 text-[14px] text-brand-muted">
            Last updated: September 12, 2026
          </p>

          <div className="mt-10 space-y-8 text-[15px] leading-8 text-brand-dark-700">
            <section>
              <h2 className="text-xl font-bold text-brand-dark">
                1. Agreement
              </h2>
              <p className="mt-3">
                These terms govern your use of promptco.online and any free
                assessments or reports provided through it. Paid services are
                governed by a separately signed agreement, which prevails over
                these terms where they conflict.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-dark">
                2. Free assessments
              </h2>
              <p className="mt-3">
                The free AI visibility assessment is provided &ldquo;as is&rdquo; for
                informational purposes. It is based on automated analysis and
                published third-party research at a point in time; AI-generated
                answers and platform behavior change frequently. Nothing in an
                assessment constitutes a guarantee of results, a professional
                certification, or legal, financial or compliance advice.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-dark">
                3. Acceptable use
              </h2>
              <p className="mt-3">
                You agree not to abuse the site or its forms — including
                automated submission, attempting to bypass rate limits, or
                submitting websites you have no right to have analyzed. We may
                suspend access for abuse.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-dark">
                4. Intellectual property
              </h2>
              <p className="mt-3">
                Site content and the Prompt&Co. name are our property. You may
                quote or summarize our published research with attribution and a
                link to the source page. Reports prepared for you are yours to
                use internally.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-dark">
                5. Disclaimer & liability
              </h2>
              <p className="mt-3">
                To the maximum extent permitted by law, Prompt&Co. disclaims all
                warranties, express or implied, regarding the free materials on
                this site, and its total liability arising from use of the site
                is limited to USD 100. We are not liable for indirect or
                consequential damages.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-dark">
                6. Governing law
              </h2>
              <p className="mt-3">
                These terms are governed by the laws of India, without regard to
                conflict-of-law rules. Disputes will be resolved in the courts
                of the applicable jurisdiction in India.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-dark">
                7. Contact
              </h2>
              <p className="mt-3">
                Questions about these terms:{" "}
                <a
                  href="mailto:hello@promptco.online"
                  className="font-medium text-brand-primary hover:underline"
                >
                  hello@promptco.online
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
