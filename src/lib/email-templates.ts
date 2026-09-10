import { ScrapedData } from "./scraper";
import { AnalysisResult, SCORE_LABELS } from "./gemini";

function getScoreColor(score: number): string {
  if (score >= 75) return "#16a34a";
  if (score >= 50) return "#ca8a04";
  return "#dc2626";
}

function getScoreLabel(score: number): string {
  if (score >= 75) return "Strong";
  if (score >= 50) return "Needs Work";
  return "Critical";
}

function getOverallScore(scores: AnalysisResult["scores"]): number {
  const values = Object.values(scores);
  return Math.round(values.reduce((a, b) => a + b, 0) / values.length);
}

export function buildReportEmail(
  scrapedData: ScrapedData,
  analysis: AnalysisResult,
  goal: string
): string {
  const overallScore = getOverallScore(analysis.scores);
  const overallColor = getScoreColor(overallScore);

  const scoreRows = Object.entries(analysis.scores)
    .map(
      ([key, score]) => `
    <tr>
      <td style="padding: 12px 16px; border-bottom: 1px solid #f1f5f9;">
        <span style="color: #334155; font-size: 14px; font-weight: 500;">${SCORE_LABELS[key as keyof typeof SCORE_LABELS]}</span>
      </td>
      <td style="padding: 12px 16px; border-bottom: 1px solid #f1f5f9; text-align: right;">
        <span style="display: inline-block; background: ${getScoreColor(score)}15; color: ${getScoreColor(score)}; padding: 4px 12px; border-radius: 20px; font-size: 14px; font-weight: 700;">${score}/100</span>
      </td>
      <td style="padding: 12px 16px; border-bottom: 1px solid #f1f5f9; text-align: right;">
        <span style="color: ${getScoreColor(score)}; font-size: 12px; font-weight: 600;">${getScoreLabel(score)}</span>
      </td>
    </tr>`
    )
    .join("");

  const insightsHtml = analysis.insights
    .map(
      (insight, i) => `
    <div style="padding: 16px; background: ${i % 2 === 0 ? "#f8fafc" : "#ffffff"}; border-radius: 8px; margin-bottom: 8px;">
      <div style="display: flex; align-items: flex-start; gap: 12px;">
        <div style="min-width: 24px; height: 24px; border-radius: 50%; background: rgba(37, 99, 235, 0.1); display: flex; align-items: center; justify-content: center;">
          <span style="color: #2563eb; font-size: 12px; font-weight: 700;">${i + 1}</span>
        </div>
        <p style="margin: 0; color: #334155; font-size: 14px; line-height: 1.6;">${insight}</p>
      </div>
    </div>`
    )
    .join("");

  const fallbackNote = analysis.isFallback
    ? `<div style="background: #fef3c7; border: 1px solid #fcd34d; border-radius: 8px; padding: 16px; margin-bottom: 24px;">
        <p style="margin: 0; color: #92400e; font-size: 13px;">
          <strong>Note:</strong> These are estimated scores based on initial analysis. For a detailed, personalized assessment, book a free consultation with our team.
        </p>
      </div>`
    : "";

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body style="margin: 0; padding: 0; background-color: #f8fafc; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
      <div style="max-width: 600px; margin: 0 auto; padding: 32px 16px;">

        <!-- Header -->
        <div style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); border-radius: 16px; padding: 32px; text-align: center; margin-bottom: 24px;">
          <h1 style="color: white; font-size: 22px; margin: 0 0 8px 0;">Your AI Visibility Report</h1>
          <p style="color: rgba(255,255,255,0.6); font-size: 13px; margin: 0;">${scrapedData.url}</p>
        </div>

        <!-- Overall Score -->
        <div style="background: white; border-radius: 12px; padding: 32px; border: 1px solid #e2e8f0; margin-bottom: 16px; text-align: center;">
          <p style="color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; margin: 0 0 8px 0;">Overall AI Visibility Score</p>
          <div style="display: inline-block; width: 100px; height: 100px; border-radius: 50%; border: 4px solid ${overallColor}; line-height: 92px;">
            <span style="color: ${overallColor}; font-size: 36px; font-weight: 800;">${overallScore}</span>
          </div>
          <p style="color: ${overallColor}; font-size: 14px; font-weight: 600; margin: 8px 0 0 0;">${getScoreLabel(overallScore)}</p>
        </div>

        ${fallbackNote}

        <!-- Detailed Scores -->
        <div style="background: white; border-radius: 12px; border: 1px solid #e2e8f0; margin-bottom: 16px; overflow: hidden;">
          <div style="padding: 16px 16px 8px 16px; border-bottom: 1px solid #e2e8f0;">
            <h2 style="margin: 0; color: #0f172a; font-size: 16px;">Detailed Scores</h2>
          </div>
          <table style="width: 100%; border-collapse: collapse;">
            ${scoreRows}
          </table>
        </div>

        <!-- Insights -->
        <div style="background: white; border-radius: 12px; padding: 20px; border: 1px solid #e2e8f0; margin-bottom: 16px;">
          <h2 style="margin: 0 0 16px 0; color: #0f172a; font-size: 16px;">Key Insights</h2>
          ${insightsHtml}
        </div>

        <!-- CTA Section -->
        <div style="background: linear-gradient(135deg, #2563eb 0%, #06b6d4 100%); border-radius: 12px; padding: 32px; text-align: center; margin-bottom: 16px;">
          <h2 style="color: white; font-size: 20px; margin: 0 0 8px 0;">Ready to Improve Your AI Visibility?</h2>
          <p style="color: rgba(255,255,255,0.8); font-size: 14px; margin: 0 0 24px 0; line-height: 1.6;">
            Get a comprehensive audit and a tailored strategy to help ${scrapedData.title || "your brand"} become the top recommendation across AI search platforms.
          </p>
          <table role="presentation" style="margin: 0 auto;">
            <tr>
              <td style="padding: 0 8px 0 0;">
                <a href="mailto:founder@promptco.online?subject=AI%20Visibility%20Consultation%20-%20${encodeURIComponent(scrapedData.url)}" style="display: inline-block; background: white; color: #2563eb; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 700; font-size: 14px;">
                  Email Us
                </a>
              </td>
              <td style="padding: 0 0 0 8px;">
                <a href="https://promptco.online/contact" style="display: inline-block; background: rgba(255,255,255,0.15); color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 700; font-size: 14px; border: 1px solid rgba(255,255,255,0.3);">
                  Book a Call
                </a>
              </td>
            </tr>
          </table>
        </div>

        <!-- Footer -->
        <div style="text-align: center; padding: 16px 0;">
          <p style="color: #94a3b8; font-size: 12px; margin: 0 0 4px 0;">Prompt&Co. — AI Search Optimization Agency</p>
          <a href="https://promptco.online" style="color: #2563eb; font-size: 12px; text-decoration: none;">promptco.online</a>
        </div>
      </div>
    </body>
    </html>
  `;
}
