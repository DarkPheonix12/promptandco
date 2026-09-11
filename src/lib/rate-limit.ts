/**
 * Rate limiting for /api/contact — protects the free-tier LLM quota
 * (Groq 1,000/day) and Resend from spam and abuse.
 *
 * Design:
 *  - Per-IP sliding window: 3/hour and 6/day
 *  - Global daily cap on LLM-analyzed submissions: 60/day
 *  - Storage: Cloudflare D1 (durable across edge isolates) with an
 *    in-memory fallback; D1 outages degrade to per-isolate memory, never
 *    take the form down (fail-open on limiter errors)
 */

import { getCloudflareContext } from "@opennextjs/cloudflare";

// Minimal structural typing for the D1 binding — avoids a global
// @cloudflare/workers-types dependency, which conflicts with DOM lib types.
interface MinimalD1PreparedStatement {
  bind(...values: unknown[]): {
    first<T>(): Promise<T | null>;
    run(): Promise<unknown>;
  };
}
interface MinimalD1Database {
  prepare(query: string): MinimalD1PreparedStatement;
}

const IP_HOURLY_LIMIT = 3;
const IP_DAILY_LIMIT = 6;
const GLOBAL_DAILY_LIMIT = 60;

const HOUR_MS = 60 * 60 * 1000;
const DAY_MS = 24 * 60 * 60 * 1000;

export interface RateLimitDecision {
  allowed: boolean;
  reason: string | null;
  retryAfterSeconds: number;
}

// ─── In-memory fallback (per isolate) ───

const memoryEvents: { bucket: string; at: number }[] = [];

function memoryCount(bucket: string, sinceMs: number): number {
  const cutoff = Date.now() - sinceMs;
  return memoryEvents.filter((e) => e.bucket === bucket && e.at >= cutoff).length;
}

function memoryRecord(bucket: string): void {
  memoryEvents.push({ bucket, at: Date.now() });
  const cutoff = Date.now() - DAY_MS;
  for (let i = memoryEvents.length - 1; i >= 0; i--) {
    if (memoryEvents[i].at < cutoff) memoryEvents.splice(i, 1);
  }
}

// ─── D1-backed counting ───

function getDb(): MinimalD1Database | null {
  try {
    const { env } = getCloudflareContext();
    const db = (env as Record<string, unknown>).RATE_LIMIT_DB;
    return (db as MinimalD1Database) ?? null;
  } catch {
    return null;
  }
}

async function d1Count(db: MinimalD1Database, bucket: string, sinceMs: number): Promise<number> {
  const cutoff = Date.now() - sinceMs;
  const result = await db
    .prepare("SELECT COUNT(*) AS n FROM rate_limit_events WHERE bucket = ? AND created_at >= ?")
    .bind(bucket, cutoff)
    .first<{ n: number }>();
  return result?.n ?? 0;
}

async function d1Record(db: MinimalD1Database, bucket: string): Promise<void> {
  await db
    .prepare("INSERT INTO rate_limit_events (bucket, created_at) VALUES (?, ?)")
    .bind(bucket, Date.now())
    .run();
  // Opportunistic prune: keep ~2 days of rows
  await db
    .prepare("DELETE FROM rate_limit_events WHERE created_at < ?")
    .bind(Date.now() - 2 * DAY_MS)
    .run();
}

// ─── Public API ───

/**
 * Extract the best-guess client IP from proxy headers. Cloudflare sets
 * CF-Connecting-IP on all proxied requests; the others are fallbacks.
 */
export function getClientIp(request: Request): string {
  return (
    request.headers.get("cf-connecting-ip") ||
    request.headers.get("x-real-ip") ||
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    "unknown"
  );
}

/**
 * Check all buckets for a submission. Records the events if allowed.
 * Never throws — any internal failure fails open (allows the request).
 */
export async function checkRateLimit(request: Request): Promise<RateLimitDecision> {
  const ip = getClientIp(request);
  const hourlyBucket = `ip-hour:${ip}`;
  const dailyBucket = `ip-day:${ip}`;
  const globalBucket = "global";

  let db: MinimalD1Database | null = null;
  try {
    db = getDb();
  } catch {
    db = null;
  }

  try {
    // Read current counts
    let hourly: number, daily: number, global: number;
    if (db) {
      [hourly, daily, global] = await Promise.all([
        d1Count(db, hourlyBucket, HOUR_MS),
        d1Count(db, dailyBucket, DAY_MS),
        d1Count(db, globalBucket, DAY_MS),
      ]);
    } else {
      hourly = memoryCount(hourlyBucket, HOUR_MS);
      daily = memoryCount(dailyBucket, DAY_MS);
      global = memoryCount(globalBucket, DAY_MS);
    }

    if (hourly >= IP_HOURLY_LIMIT) {
      return {
        allowed: false,
        reason: "hourly_limit",
        retryAfterSeconds: Math.ceil(HOUR_MS / 1000),
      };
    }
    if (daily >= IP_DAILY_LIMIT) {
      return {
        allowed: false,
        reason: "daily_limit",
        retryAfterSeconds: Math.ceil(DAY_MS / 1000),
      };
    }
    if (global >= GLOBAL_DAILY_LIMIT) {
      return {
        allowed: false,
        reason: "global_daily_limit",
        retryAfterSeconds: Math.ceil(DAY_MS / 1000),
      };
    }

    // Allowed — record the events
    if (db) {
      await Promise.all([
        d1Record(db, hourlyBucket),
        d1Record(db, dailyBucket),
        d1Record(db, globalBucket),
      ]);
    } else {
      memoryRecord(hourlyBucket);
      memoryRecord(dailyBucket);
      memoryRecord(globalBucket);
    }

    return { allowed: true, reason: null, retryAfterSeconds: 0 };
  } catch (error) {
    // Fail open — record in memory as best effort
    console.error("[RateLimit] check failed, failing open:", error);
    memoryRecord(hourlyBucket);
    memoryRecord(dailyBucket);
    memoryRecord(globalBucket);
    return { allowed: true, reason: null, retryAfterSeconds: 0 };
  }
}
