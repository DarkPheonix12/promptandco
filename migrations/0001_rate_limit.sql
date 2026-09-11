-- Rate limiting event log for /api/contact
-- Each allowed submission inserts one row per checked bucket:
--   bucket = "ip:<address>"  (per-client limits)
--   bucket = "global"        (daily LLM budget)
-- Old rows are pruned opportunistically.

CREATE TABLE IF NOT EXISTS rate_limit_events (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  bucket TEXT NOT NULL,
  created_at INTEGER NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_rate_limit_bucket_time
  ON rate_limit_events (bucket, created_at);
