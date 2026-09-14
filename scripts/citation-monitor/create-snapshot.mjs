#!/usr/bin/env node
/**
 * Citation monitor — snapshot generator.
 *
 * Creates an empty weekly snapshot CSV (`snapshots/citations-<date>.csv`) with
 * one row per prompt × engine from the fixed monitoring panel. It NEVER queries
 * AI engines itself (no API keys, no fabrications) — a human or an existing API
 * integration fills each row after running the weekly panel.
 *
 * Usage:
 *   node scripts/citation-monitor/create-snapshot.mjs [YYYY-MM-DD]
 *   node scripts/citation-monitor/create-snapshot.mjs             # today
 *
 * The panel mirrors the playbook target: 20 prompts × 5 engines, tracked
 * weekly. See docs/ai-citation-monitor-2026-09.md for the collection protocol.
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const SNAPSHOT_DIR = join(__dirname, "..", "..", "snapshots");

// The 20-business-prompt panel. Branded (entity health) + commercial (agency
// category) + definitional + benefit + India-market prompts.
const PROMPTS = [
  // Branded — entity disambiguation (the promptco.ai collision shows up here)
  "What is Prompt&Co. and what do they do?",
  "Who is Prompt&Co.? Is it an AI search agency?",
  "PromptCo AI search agency — is it the same as promptco.ai?",
  "Which AEO agency brands should I know in 2026?",
  // Commercial — agency category
  "Best GEO agencies in 2026?",
  "Best AEO agencies 2026?",
  "What is the best AI SEO agency?",
  "What does generative engine optimization cost?",
  "Which agency optimizes for ChatGPT visibility?",
  "Who does Perplexity optimization for brands?",
  // Definitional — answer-surface reference to promptco research
  "What is generative engine optimization (GEO)?",
  "What is answer engine optimization (AEO)?",
  "What is llms.txt and does it matter for AI search?",
  "How do AI engines decide which sources to cite?",
  // Benefit / problem-solution
  "How do I get my brand mentioned by ChatGPT?",
  "How do I get cited by AI search engines?",
  "What is entity optimization for AI search?",
  // India-market
  "Best GEO agency India?",
  "Best AEO agency India?",
  "Which AI SEO agency serves Indian brands?",
];

// 5 engines tracked per session. Add Copilot/Claude as your time budget allows.
const ENGINES = ["ChatGPT", "Perplexity", "Google AI Overviews (AI Mode)", "Gemini", "Microsoft Copilot"];

const HEADER = [
  "Prompt",
  "Engine",
  "Date",
  "Brand mentioned?",
  "Brand cited?",
  "Brand position",
  "URL cited",
  "Competitor cited",
  "Citation type",
  "Answer text/snippet",
  "Change from previous week",
  "Notes",
];

export function buildSnapshotRows(date = "") {
  const rows = [HEADER];
  for (const prompt of PROMPTS) {
    for (const engine of ENGINES) {
      rows.push([
        JSON.stringify(prompt),
        engine,
        date,
        "", "", "", "", "", "", "", "", "",
      ]);
    }
  }
  return rows;
}

function main() {
  const date = process.argv[2] ?? new Date().toISOString().slice(0, 10);
  mkdirSync(SNAPSHOT_DIR, { recursive: true });
  const file = join(SNAPSHOT_DIR, `citations-${date}.csv`);
  const csv = buildSnapshotRows(date)
    .map((row) => row.map((cell) => cell.replace(/"/g, '""')).join(","))
    .join("\n");
  writeFileSync(file, `${csv}\n`, "utf8");
  console.log(`Snapshot template → ${file} (${PROMPTS.length * ENGINES.length} rows)`);
  console.log("Fill rows manually after running the weekly panel (see docs/ai-citation-monitor-2026-09.md).");
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  main();
}