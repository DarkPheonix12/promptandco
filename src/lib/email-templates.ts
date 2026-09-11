import type { ScrapedData } from "./scraper";
import type { AnalysisResult } from "./analysis";
import { SCORE_LABELS } from "./analysis";

function getScoreColor(score: number): string {
  if (score >= 80) return "#16a34a";
  if (score >= 70) return "#65a30d";
  if (score >= 60) return "#d97706";
  if (score >= 50) return "#ca8a04";
  return "#dc2626";
}

function getScoreLabel(score: number): { text: string; description: string } {
  if (score >= 80) return { text: "Strong", description: "Your AI visibility is performing well. Focus on maintaining and scaling what's working." };
  if (score >= 70) return { text: "Good", description: "Solid foundation with room to grow. A few targeted optimizations can push you ahead of competitors." };
  if (score >= 60) return { text: "Moderate", description: "Some signals are present, but key gaps exist that may cause AI platforms to overlook your brand." };
  if (score >= 50) return { text: "Needs Work", description: "Significant opportunities are being missed. Without action, competitors will continue to gain AI visibility in your space." };
  return { text: "Critical", description: "Your brand has minimal AI visibility. This is a major gap that needs immediate attention to stay competitive." };
}

function getOverallScore(scores: AnalysisResult["scores"]): number {
  const values = Object.values(scores);
  return Math.round(values.reduce((a, b) => a + b, 0) / values.length);
}

export function buildReportEmail(
  scrapedData: ScrapedData,
  analysis: AnalysisResult
): string {
  const overallScore = getOverallScore(analysis.scores);
  const overallColor = getScoreColor(overallScore);

  const scoreRows = Object.entries(analysis.scores)
    .map(
      ([key, score]) => {
        const label = getScoreLabel(score);
        return `
    <tr>
      <td style="padding: 14px 16px; border-bottom: 1px solid #f1f5f9;">
        <span style="color: #0f172a; font-size: 14px; font-weight: 600;">${SCORE_LABELS[key as keyof typeof SCORE_LABELS]}</span>
        <p style="color: #64748b; font-size: 12px; margin: 2px 0 0 0;">${label.description}</p>
      </td>
      <td style="padding: 14px 16px; border-bottom: 1px solid #f1f5f9; text-align: right; white-space: nowrap;">
        <span style="display: inline-block; background: ${getScoreColor(score)}12; color: ${getScoreColor(score)}; padding: 6px 14px; border-radius: 20px; font-size: 15px; font-weight: 700; border: 1px solid ${getScoreColor(score)}25;">${score}/100</span>
      </td>
    </tr>`;
      }
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

  // ── Persona section ──
  const personaHtml = analysis.persona
    ? `
    <div style="background: white; border-radius: 12px; padding: 20px; border: 1px solid #e2e8f0; margin-bottom: 20px;">
      <h2 style="margin: 0 0 4px 0; color: #0f172a; font-size: 16px;">Who's asking AI about businesses like yours</h2>
      <p style="margin: 0 0 16px 0; color: #64748b; font-size: 12px;">The buyer persona our analysts modeled for this assessment</p>
      <div style="background: #f8fafc; border-radius: 8px; padding: 16px;">
        <p style="margin: 0 0 6px 0; color: #0f172a; font-size: 15px; font-weight: 700;">${analysis.persona.name} — ${analysis.persona.role}</p>
        <p style="margin: 0 0 10px 0; color: #64748b; font-size: 12.5px;">${analysis.persona.companyType}</p>
        <p style="margin: 0 0 4px 0; color: #334155; font-size: 13.5px; line-height: 1.6;"><strong style="color: #0f172a;">Goal:</strong> ${analysis.persona.goals}</p>
        <p style="margin: 0; color: #334155; font-size: 13.5px; line-height: 1.6;"><strong style="color: #0f172a;">Pain:</strong> ${analysis.persona.painPoints}</p>
      </div>
    </div>`
    : "";

  // ── Simulated AI prompts section ──
  const outcomeMeta: Record<string, { label: string; color: string }> = {
    mentions_brand: { label: "MENTIONS YOU", color: "#16a34a" },
    cites_brand: { label: "CITES YOU", color: "#16a34a" },
    competitor_only: { label: "COMPETITOR NAMED", color: "#dc2626" },
    no_mention: { label: "YOU'RE INVISIBLE", color: "#dc2626" },
  };
  const promptsHtml =
    analysis.simulatedPrompts.length > 0
      ? `
    <div style="background: white; border-radius: 12px; padding: 20px; border: 1px solid #e2e8f0; margin-bottom: 20px;">
      <h2 style="margin: 0 0 4px 0; color: #0f172a; font-size: 16px;">Prompts your buyers are asking AI right now</h2>
      <p style="margin: 0 0 16px 0; color: #64748b; font-size: 12px;">Modeled from your market — this is where AI visibility is won or lost</p>
      ${analysis.simulatedPrompts
        .map(
          (p) => `
      <div style="border: 1px solid #e2e8f0; border-radius: 8px; padding: 14px 16px; margin-bottom: 8px;">
        <p style="margin: 0 0 8px 0; color: #334155; font-size: 14px; line-height: 1.5; font-style: italic;">\u201c${p.prompt}\u201d</p>
        <span style="display: inline-block; background: ${outcomeMeta[p.outcome]?.color ?? "#64748b"}12; color: ${outcomeMeta[p.outcome]?.color ?? "#64748b"}; font-size: 10.5px; font-weight: 700; letter-spacing: 0.08em; padding: 4px 10px; border-radius: 12px; border: 1px solid ${outcomeMeta[p.outcome]?.color ?? "#64748b"}25;">${outcomeMeta[p.outcome]?.label ?? "CHECK MANUALLY"}</span>
      </div>`
        )
        .join("")}
    </div>`
      : "";

  // ── Quick wins section ──
  const impactColors: Record<string, string> = { high: "#16a34a", medium: "#d97706", low: "#64748b" };
  const quickWinsHtml =
    analysis.quickWins.length > 0
      ? `
    <div style="background: white; border-radius: 12px; padding: 20px; border: 1px solid #e2e8f0; margin-bottom: 20px;">
      <h2 style="margin: 0 0 4px 0; color: #0f172a; font-size: 16px;">Your 90-day action plan</h2>
      <p style="margin: 0 0 16px 0; color: #64748b; font-size: 12px;">Highest-impact moves first</p>
      ${analysis.quickWins
        .map(
          (w, i) => `
      <div style="border-left: 3px solid ${impactColors[w.impact] ?? "#2563eb"}; background: #f8fafc; border-radius: 0 8px 8px 0; padding: 14px 16px; margin-bottom: 8px;">
        <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 6px;">
          <span style="color: #2563eb; font-weight: 700; font-size: 13px;">${i + 1}.</span>
          <span style="color: #0f172a; font-weight: 700; font-size: 14px;">${w.title}</span>
          <span style="margin-left: auto; font-size: 10px; font-weight: 700; letter-spacing: 0.06em; color: ${impactColors[w.impact] ?? "#64748b"}; text-transform: uppercase;">${w.impact} impact</span>
        </div>
        <p style="margin: 0; color: #475569; font-size: 13.5px; line-height: 1.6;">${w.action}</p>
      </div>`
        )
        .join("")}
    </div>`
      : "";

  const summaryHtml = analysis.summary
    ? `
    <div style="background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 12px; padding: 18px 20px; margin-bottom: 20px;">
      <p style="margin: 0; color: #1e40af; font-size: 14px; line-height: 1.65;"><strong>Analyst summary:</strong> ${analysis.summary}</p>
    </div>`
    : "";

  const fallbackNote = analysis.isFallback
    ? `<div style="background: #fef3c7; border: 1px solid #fcd34d; border-radius: 8px; padding: 16px; margin-bottom: 24px;">
        <p style="margin: 0; color: #92400e; font-size: 13px;">
          <strong>Note:</strong> These are estimated scores based on initial analysis. For a detailed, personalized assessment, book a free consultation with our team.
        </p>
      </div>`
    : "";

  const overallLabel = getScoreLabel(overallScore);

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body style="margin: 0; padding: 0; background-color: #f0f4f0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
      <div style="max-width: 600px; margin: 0 auto; padding: 32px 16px;">

        <!-- Header -->
        <div style="background: linear-gradient(160deg, #0f172a 0%, #1e293b 50%, #0f172a 100%); border-radius: 16px; padding: 32px; text-align: center; margin-bottom: 24px; position: relative; overflow: hidden;">
          <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: radial-gradient(circle at 30% 50%, rgba(37, 99, 235, 0.15) 0%, transparent 60%); pointer-events: none;"></div>
          <div style="position: relative;">
            <p style="color: rgba(255,255,255,0.5); font-size: 11px; text-transform: uppercase; letter-spacing: 0.15em; margin: 0 0 8px 0;">Prompt&Co.</p>
            <h1 style="color: white; font-size: 24px; margin: 0 0 8px 0; font-weight: 800;">Your AI Visibility Report</h1>
            <p style="color: rgba(255,255,255,0.5); font-size: 13px; margin: 0;">${scrapedData.url}</p>
          </div>
        </div>

        <!-- Overall Score with Nature Background -->
        <div style="border-radius: 16px; overflow: hidden; margin-bottom: 24px; position: relative;">
          <!-- Nature background image -->
          <div style="background: linear-gradient(180deg, #87CEEB 0%, #87CEEB 35%, #90EE90 35%, #228B22 60%, #2d5a27 100%); padding: 40px 32px; text-align: center; position: relative;">
            <!-- Sky elements -->
            <div style="position: absolute; top: 8px; left: 40px; width: 60px; height: 25px; background: rgba(255,255,255,0.6); border-radius: 20px;"></div>
            <div style="position: absolute; top: 15px; right: 60px; width: 45px; height: 18px; background: rgba(255,255,255,0.5); border-radius: 20px;"></div>
            <div style="position: absolute; top: 5px; left: 200px; width: 35px; height: 14px; background: rgba(255,255,255,0.4); border-radius: 20px;"></div>
            <!-- Sun -->
            <div style="position: absolute; top: 10px; right: 30px; width: 40px; height: 40px; background: #FFD700; border-radius: 50%; box-shadow: 0 0 20px rgba(255,215,0,0.5);"></div>
            <!-- Trees -->
            <div style="position: absolute; bottom: 0; left: 15px;">
              <div style="width: 0; height: 0; border-left: 18px solid transparent; border-right: 18px solid transparent; border-bottom: 40px solid #1a6b1a;"></div>
              <div style="width: 8px; height: 15px; background: #5c3d2e; margin: 0 auto;"></div>
            </div>
            <div style="position: absolute; bottom: 0; right: 20px;">
              <div style="width: 0; height: 0; border-left: 14px solid transparent; border-right: 14px solid transparent; border-bottom: 35px solid #228B22;"></div>
              <div style="width: 6px; height: 12px; background: #5c3d2e; margin: 0 auto;"></div>
            </div>
            <div style="position: absolute; bottom: 0; left: 80px;">
              <div style="width: 0; height: 0; border-left: 12px solid transparent; border-right: 12px solid transparent; border-bottom: 28px solid #2d8b2d;"></div>
              <div style="width: 5px; height: 10px; background: #5c3d2e; margin: 0 auto;"></div>
            </div>

            <!-- Score overlay -->
            <div style="position: relative; z-index: 2;">
              <p style="color: rgba(255,255,255,0.9); font-size: 11px; text-transform: uppercase; letter-spacing: 0.15em; margin: 0 0 12px 0; text-shadow: 0 1px 3px rgba(0,0,0,0.3);">Overall AI Visibility Score</p>
              <div style="display: inline-block; width: 120px; height: 120px; border-radius: 50%; background: white; box-shadow: 0 8px 32px rgba(0,0,0,0.2); line-height: 120px; border: 4px solid ${overallColor};">
                <span style="color: ${overallColor}; font-size: 42px; font-weight: 800;">${overallScore}</span>
              </div>
              <p style="color: white; font-size: 16px; font-weight: 700; margin: 12px 0 4px 0; text-shadow: 0 1px 3px rgba(0,0,0,0.3);">${overallLabel.text}</p>
              <p style="color: rgba(255,255,255,0.85); font-size: 13px; margin: 0; max-width: 380px; margin-left: auto; margin-right: auto; line-height: 1.5; text-shadow: 0 1px 2px rgba(0,0,0,0.2);">${overallLabel.description}</p>
            </div>
          </div>
        </div>

        ${fallbackNote}

        ${summaryHtml}

        ${personaHtml}

        <!-- Detailed Scores -->
        <div style="background: white; border-radius: 12px; border: 1px solid #e2e8f0; margin-bottom: 20px; overflow: hidden;">
          <div style="padding: 16px 16px 12px 16px; border-bottom: 1px solid #e2e8f0;">
            <h2 style="margin: 0; color: #0f172a; font-size: 16px;">Breakdown by Category</h2>
          </div>
          <table style="width: 100%; border-collapse: collapse;">
            ${scoreRows}
          </table>
        </div>

        <!-- Insights -->
        <div style="background: white; border-radius: 12px; padding: 20px; border: 1px solid #e2e8f0; margin-bottom: 20px;">
          <h2 style="margin: 0 0 16px 0; color: #0f172a; font-size: 16px;">Key Insights & Recommendations</h2>
          ${insightsHtml}
        </div>

        ${promptsHtml}

        ${quickWinsHtml}

        <!-- CTA Section -->
        <div style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); border-radius: 16px; padding: 32px; text-align: center; margin-bottom: 20px; position: relative; overflow: hidden;">
          <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: radial-gradient(circle at 50% 0%, rgba(37, 99, 235, 0.2) 0%, transparent 60%); pointer-events: none;"></div>
          <div style="position: relative;">
            <h2 style="color: white; font-size: 20px; margin: 0 0 8px 0;">Ready to Boost Your AI Visibility?</h2>
            <p style="color: rgba(255,255,255,0.6); font-size: 14px; margin: 0 0 24px 0; line-height: 1.6;">
              Book a free 15-minute consultation and let's discuss how to get ${scrapedData.title || "your brand"} recommended by AI platforms.
            </p>
            <table role="presentation" style="margin: 0 auto;">
              <tr>
                <td style="padding: 0 6px 0 0;">
                  <a href="mailto:founder@promptco.online?subject=AI%20Visibility%20Consultation%20-%20${encodeURIComponent(scrapedData.url)}" style="display: inline-block; background: linear-gradient(135deg, #2563eb 0%, #06b6d4 100%); color: white; padding: 14px 28px; border-radius: 10px; text-decoration: none; font-weight: 700; font-size: 14px; box-shadow: 0 4px 15px rgba(37, 99, 235, 0.4);">
                    Email Us
                  </a>
                </td>
                <td style="padding: 0 0 0 6px;">
                  <a href="https://cal.com" style="display: inline-block; background: rgba(255,255,255,0.1); color: white; padding: 14px 28px; border-radius: 10px; text-decoration: none; font-weight: 700; font-size: 14px; border: 1px solid rgba(255,255,255,0.2);">
                    Book a Free Call
                  </a>
                </td>
              </tr>
            </table>
          </div>
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
