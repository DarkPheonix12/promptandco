/**
 * Local smoke test for the visibility pipeline (no API calls required).
 * Run: npx tsx scripts/smoke-analysis.ts [url]
 * Validates: scraper → heuristic analysis → email template rendering.
 */
import { scrapeWebsite } from "../src/lib/scraper";
import { heuristicAnalysis } from "../src/lib/analysis";
import { buildReportEmail } from "../src/lib/email-templates";

async function main() {
  const url = process.argv[2] || "https://promptco.online";
  console.log(`Scraping ${url} ...`);
  const scraped = await scrapeWebsite(url);
  console.log(`Scraped: "${scraped.title}" — ${scraped.wordCount} words, ${scraped.headings.length} headings, schema=${scraped.hasStructuredData}`);

  const analysis = heuristicAnalysis(scraped);
  console.log("Heuristic scores:", analysis.scores);
  console.log("Persona:", analysis.persona.name);
  console.log("Insights:", analysis.insights.length, "| isFallback:", analysis.isFallback);

  const html = buildReportEmail(scraped, analysis);
  const checks = [
    ["overall score ring", /Overall AI Visibility Score/.test(html)],
    ["category breakdown", /Breakdown by Category/.test(html)],
    ["persona section", /buyer persona/.test(html)],
    ["summary section", /Analyst summary/.test(html)],
    ["CTA", /Ready to Boost/.test(html)],
  ] as const;
  for (const [name, ok] of checks) {
    console.log(`${ok ? "PASS" : "FAIL"} — ${name}`);
  }
  if (checks.some(([, ok]) => !ok)) process.exit(1);
  console.log("Smoke test OK");
}

main().catch((err) => {
  console.error("Smoke test failed:", err);
  process.exit(1);
});
