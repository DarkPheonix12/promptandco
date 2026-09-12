import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { scrapeWebsite } from "@/lib/scraper";
import { analyzeVisibility, heuristicAnalysis } from "@/lib/analysis";
import { buildReportEmail } from "@/lib/email-templates";
import { checkRateLimit, getClientIp } from "@/lib/rate-limit";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

const NOTIFICATION_EMAIL = "founder@promptco.online";
const FROM_EMAIL = "Prompt&Co. <noreply@promptco.online>";

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  website: string;
  industry: string;
  targetMarket: string;
  budget: string;
  improve: string;
  message: string;
}

function buildNotificationEmail(data: ContactFormData): string {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body style="margin: 0; padding: 0; background-color: #f8fafc; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
      <div style="max-width: 600px; margin: 0 auto; padding: 32px 16px;">
        <div style="background: linear-gradient(135deg, #2563eb 0%, #06b6d4 100%); border-radius: 16px; padding: 32px; text-align: center; margin-bottom: 24px;">
          <h1 style="color: white; font-size: 24px; margin: 0 0 8px 0;">New Lead Received</h1>
          <p style="color: rgba(255,255,255,0.8); font-size: 14px; margin: 0;">AI Visibility Assessment Request</p>
        </div>

        <div style="background: white; border-radius: 12px; padding: 24px; border: 1px solid #e2e8f0; margin-bottom: 16px;">
          <h2 style="font-size: 16px; color: #0f172a; margin: 0 0 16px 0; padding-bottom: 12px; border-bottom: 1px solid #e2e8f0;">Contact Details</h2>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-size: 13px; width: 140px;">Name</td>
              <td style="padding: 8px 0; color: #0f172a; font-size: 14px; font-weight: 600;">${data.name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-size: 13px;">Email</td>
              <td style="padding: 8px 0; color: #0f172a; font-size: 14px;">${data.email ? `<a href="mailto:${data.email}" style="color: #2563eb;">${data.email}</a>` : "(not provided)"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-size: 13px;">Company</td>
              <td style="padding: 8px 0; color: #0f172a; font-size: 14px; font-weight: 600;">${data.company}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-size: 13px;">Website</td>
              <td style="padding: 8px 0; font-size: 14px;"><a href="${data.website}" style="color: #2563eb;">${data.website}</a></td>
            </tr>
          </table>
        </div>

        <div style="background: white; border-radius: 12px; padding: 24px; border: 1px solid #e2e8f0; margin-bottom: 16px;">
          <h2 style="font-size: 16px; color: #0f172a; margin: 0 0 16px 0; padding-bottom: 12px; border-bottom: 1px solid #e2e8f0;">Assessment Details</h2>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-size: 13px; width: 140px;">Industry</td>
              <td style="padding: 8px 0; color: #0f172a; font-size: 14px;">${data.industry || "Not specified"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-size: 13px;">Target Market</td>
              <td style="padding: 8px 0; color: #0f172a; font-size: 14px;">${data.targetMarket || "Not specified"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-size: 13px;">Goal</td>
              <td style="padding: 8px 0; color: #0f172a; font-size: 14px; font-weight: 600;">${data.improve}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-size: 13px;">Budget</td>
              <td style="padding: 8px 0; color: #0f172a; font-size: 14px;">${data.budget || "Not specified"}</td>
            </tr>
          </table>
        </div>

        ${
          data.message
            ? `
        <div style="background: white; border-radius: 12px; padding: 24px; border: 1px solid #e2e8f0; margin-bottom: 16px;">
          <h2 style="font-size: 16px; color: #0f172a; margin: 0 0 12px 0;">Additional Notes</h2>
          <p style="color: #334155; font-size: 14px; line-height: 1.6; margin: 0;">${data.message}</p>
        </div>
        `
            : ""
        }

        <div style="text-align: center; padding: 16px 0;">
          <p style="color: #94a3b8; font-size: 12px; margin: 0;">Sent from promptco.online/contact</p>
        </div>
      </div>
    </body>
    </html>
  `;
}

function buildThankYouEmail(data: ContactFormData): string {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body style="margin: 0; padding: 0; background-color: #f8fafc; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
      <div style="max-width: 600px; margin: 0 auto; padding: 32px 16px;">
        <div style="background: linear-gradient(135deg, #2563eb 0%, #06b6d4 100%); border-radius: 16px; padding: 32px; text-align: center; margin-bottom: 24px;">
          <h1 style="color: white; font-size: 24px; margin: 0 0 8px 0;">Thank You, ${data.name}!</h1>
          <p style="color: rgba(255,255,255,0.8); font-size: 14px; margin: 0;">We've received your AI Visibility Assessment request</p>
        </div>

        <div style="background: white; border-radius: 12px; padding: 24px; border: 1px solid #e2e8f0; margin-bottom: 16px;">
          <p style="color: #334155; font-size: 14px; line-height: 1.7; margin: 0 0 16px 0;">
            Hi ${data.name},
          </p>
          <p style="color: #334155; font-size: 14px; line-height: 1.7; margin: 0 0 16px 0;">
            Thank you for reaching out about improving <strong>${data.company}</strong>'s AI visibility. We've received your assessment request and our team is already reviewing your information.
          </p>
          <p style="color: #334155; font-size: 14px; line-height: 1.7; margin: 0;">
            Here's what happens next:
          </p>
        </div>

        <div style="background: white; border-radius: 12px; padding: 24px; border: 1px solid #e2e8f0; margin-bottom: 16px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 0; vertical-align: top;">
                <div style="display: inline-block; width: 28px; height: 28px; border-radius: 50%; background: rgba(37, 99, 235, 0.1); text-align: center; line-height: 28px; color: #2563eb; font-weight: 700; font-size: 13px;">1</div>
              </td>
              <td style="padding: 12px 0 12px 12px; vertical-align: top;">
                <p style="color: #0f172a; font-size: 14px; font-weight: 600; margin: 0 0 4px 0;">We analyze your AI visibility</p>
                <p style="color: #64748b; font-size: 13px; margin: 0;">Across ChatGPT, Google AI, Perplexity, and other major platforms</p>
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 0; vertical-align: top;">
                <div style="display: inline-block; width: 28px; height: 28px; border-radius: 50%; background: rgba(37, 99, 235, 0.1); text-align: center; line-height: 28px; color: #2563eb; font-weight: 700; font-size: 13px;">2</div>
              </td>
              <td style="padding: 12px 0 12px 12px; vertical-align: top;">
                <p style="color: #0f172a; font-size: 14px; font-weight: 600; margin: 0 0 4px 0;">We benchmark against competitors</p>
                <p style="color: #64748b; font-size: 13px; margin: 0;">In your specific industry and target market</p>
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 0; vertical-align: top;">
                <div style="display: inline-block; width: 28px; height: 28px; border-radius: 50%; background: rgba(37, 99, 235, 0.1); text-align: center; line-height: 28px; color: #2563eb; font-weight: 700; font-size: 13px;">3</div>
              </td>
              <td style="padding: 12px 0 12px 12px; vertical-align: top;">
                <p style="color: #0f172a; font-size: 14px; font-weight: 600; margin: 0 0 4px 0;">We identify opportunities</p>
                <p style="color: #64748b; font-size: 13px; margin: 0;">The highest-impact optimizations for your brand</p>
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 0; vertical-align: top;">
                <div style="display: inline-block; width: 28px; height: 28px; border-radius: 50%; background: rgba(37, 99, 235, 0.1); text-align: center; line-height: 28px; color: #2563eb; font-weight: 700; font-size: 13px;">4</div>
              </td>
              <td style="padding: 12px 0 12px 12px; vertical-align: top;">
                <p style="color: #0f172a; font-size: 14px; font-weight: 600; margin: 0 0 4px 0;">You receive a detailed report</p>
                <p style="color: #64748b; font-size: 13px; margin: 0;">With clear, actionable recommendations</p>
              </td>
            </tr>
          </table>
        </div>

        <div style="background: white; border-radius: 12px; padding: 24px; border: 1px solid #e2e8f0; margin-bottom: 16px;">
          <p style="color: #334155; font-size: 14px; line-height: 1.7; margin: 0 0 16px 0;">
            If you have any questions in the meantime, feel free to reply to this email or visit our website.
          </p>
          <p style="color: #334155; font-size: 14px; line-height: 1.7; margin: 0;">
            Best regards,<br>
            <strong>The Prompt&Co. Team</strong>
          </p>
        </div>

        <div style="text-align: center; padding: 16px 0;">
          <a href="https://promptco.online" style="color: #2563eb; font-size: 13px; text-decoration: none;">promptco.online</a>
          <p style="color: #94a3b8; font-size: 11px; margin: 8px 0 0 0;">AI Search Optimization Agency</p>
        </div>
      </div>
    </body>
    </html>
  `;
}

export async function POST(request: NextRequest) {
  try {
    if (!resend) {
      console.error("Contact form error: RESEND_API_KEY is not configured");
      return NextResponse.json(
        { error: "Service not configured" },
        { status: 500 }
      );
    }

    // ── Rate limiting (per-IP + global daily LLM budget) ──
    const limit = await checkRateLimit(request);
    if (!limit.allowed) {
      console.warn(
        `[RateLimit] blocked ${getClientIp(request)} (${limit.reason})`
      );
      return NextResponse.json(
        {
          error:
            limit.reason === "global_daily_limit"
              ? "We've reached today's free assessment capacity. Please try again tomorrow or email founder@promptco.online directly."
              : "Too many assessment requests from your network. Please try again later.",
        },
        { status: 429, headers: { "Retry-After": String(limit.retryAfterSeconds) } }
      );
    }

    const data: ContactFormData = await request.json();

    // Validate required fields. Email/company are optional: the homepage
    // mini-form submits website + market only, and we still want the lead.
    if (!data.name || !data.website || !data.improve) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate email format only when provided
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (data.email && !emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // 1. Send immediate notification to founder
    const notificationResult = await resend.emails.send({
      from: FROM_EMAIL,
      to: NOTIFICATION_EMAIL,
      subject: `New Lead: ${data.name} from ${data.company || "(no company)"} — ${data.improve}`,
      html: buildNotificationEmail(data),
      replyTo: data.email || undefined,
    });

    if (notificationResult.error) {
      console.error("Notification email error:", notificationResult.error);
      return NextResponse.json(
        { error: "Failed to send notification" },
        { status: 500 }
      );
    }

    // 2. Scrape website, analyze with Gemini, and send report to lead
    if (data.website) {
      // Always try to build a report — even if scraping fails, use fallback data
      let scrapedData;
      let analysis;

      try {
        console.log(`[Pipeline] Scraping website: ${data.website}`);
        scrapedData = await scrapeWebsite(data.website);
        console.log(`[Pipeline] Scraped successfully: ${scrapedData.title || "no title"}, ${scrapedData.wordCount} words`);
      } catch (scrapeError) {
        console.error("[Pipeline] Scrape failed, using fallback:", scrapeError);
        // Create minimal scraped data so the report still works
        scrapedData = {
          url: data.website,
          title: data.website,
          description: "",
          headings: [],
          textContent: "",
          images: [],
          links: [],
          hasStructuredData: false,
          hasSchemaMarkup: false,
          openGraph: { title: "", description: "", image: "" },
          twitterCard: { title: "", description: "" },
          wordCount: 0,
          language: "en",
          canonicalUrl: data.website,
        };
      }

      try {
        console.log(`[Pipeline] Running visibility analysis for: ${data.improve}`);
        analysis = await analyzeVisibility(scrapedData, {
          industry: data.industry,
          targetMarket: data.targetMarket,
          improve: data.improve,
          message: data.message,
        });
        console.log(
          `[Pipeline] Provider: ${analysis.provider}, Fallback: ${analysis.isFallback}, Scores:`,
          analysis.scores
        );
      } catch (analysisError) {
        console.error("[Pipeline] Analysis threw unexpectedly, using heuristics:", analysisError);
        analysis = heuristicAnalysis(scrapedData);
      }

      // Build and send the AI visibility report email
      const reportHtml = buildReportEmail(scrapedData, analysis);

      // Send the report to the lead only when we have their email. The
      // homepage mini-form may submit without one — the founder notification
      // above still fires either way.
      if (data.email) {
        const reportResult = await resend.emails.send({
          from: FROM_EMAIL,
          to: data.email,
          subject: `Your AI Visibility Report for ${scrapedData.title || data.website} — Prompt&Co.`,
          html: reportHtml,
        });

        if (reportResult.error) {
          console.error("[Pipeline] Report email error:", reportResult.error);
        } else {
          console.log(`[Pipeline] Report sent successfully to ${data.email}`);
        }

        // Also send report to founder
        await resend.emails.send({
          from: FROM_EMAIL,
          to: NOTIFICATION_EMAIL,
          subject: `AI Report Generated: ${data.name} from ${data.company || "(no company)"}`,
          html: reportHtml,
          replyTo: data.email,
        });
      }
    } else {
      // No website provided, send basic thank you (only possible with email)
      if (data.email) {
        await resend.emails.send({
          from: FROM_EMAIL,
          to: data.email,
          subject: `Thank you for reaching out, ${data.name}! — Prompt&Co.`,
          html: buildThankYouEmail(data),
        });
      }
    }

    return NextResponse.json({
      success: true,
      message: "Form submitted successfully",
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
