/**
 * LLM provider chain for the AI visibility pipeline.
 *
 * Primary: Groq (llama-3.3-70b-versatile) — 1,000 req/day free tier, 30 RPM,
 * OpenAI-compatible JSON mode, and a no-training policy on API data.
 * Fallback: Google Gemini flash — existing key, decent quota.
 *
 * Both are OpenAI-style JSON calls with hard timeouts. If a provider is
 * missing, rate-limited (429) or errors, the chain falls through to the next;
 * if all fail, the caller uses heuristic scoring (see analysis.ts).
 */

export interface LlmResult {
  text: string;
  provider: string;
}

const TIMEOUT_MS = 30_000;

async function callGroq(system: string, user: string, maxTokens: number): Promise<string> {
  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) throw new Error("GROQ_API_KEY not set");

  const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "llama-3.3-70b-versatile",
      messages: [
        { role: "system", content: system },
        { role: "user", content: user },
      ],
      temperature: 0.3,
      max_tokens: maxTokens,
      response_format: { type: "json_object" },
    }),
    signal: AbortSignal.timeout(TIMEOUT_MS),
  });

  if (!response.ok) {
    const errText = await response.text().catch(() => "");
    throw new Error(`Groq ${response.status}: ${errText.slice(0, 300)}`);
  }

  const data = await response.json();
  const text = data.choices?.[0]?.message?.content;
  if (!text) throw new Error("Groq returned no content");
  return text;
}

async function callGemini(system: string, user: string, maxTokens: number): Promise<string> {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) throw new Error("GEMINI_API_KEY not set");

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent?key=${apiKey}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        systemInstruction: { parts: [{ text: system }] },
        contents: [{ role: "user", parts: [{ text: user }] }],
        generationConfig: {
          temperature: 0.3,
          maxOutputTokens: maxTokens,
          responseMimeType: "application/json",
        },
      }),
      signal: AbortSignal.timeout(TIMEOUT_MS),
    }
  );

  if (response.status === 429 || response.status === 403) {
    throw new Error(`Gemini quota/limit (${response.status})`);
  }
  if (!response.ok) {
    const errText = await response.text().catch(() => "");
    throw new Error(`Gemini ${response.status}: ${errText.slice(0, 300)}`);
  }

  const data = await response.json();
  const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!text) throw new Error("Gemini returned no content");
  return text;
}

/**
 * Try each configured provider in order. Throws only if every provider fails
 * or none is configured — callers must handle that with heuristic scoring.
 */
export async function callLlm(
  system: string,
  user: string,
  maxTokens = 2048
): Promise<LlmResult> {
  const providers: { name: string; fn: () => Promise<string> }[] = [
    { name: "groq", fn: () => callGroq(system, user, maxTokens) },
    { name: "gemini", fn: () => callGemini(system, user, maxTokens) },
  ];

  const errors: string[] = [];
  for (const provider of providers) {
    try {
      const text = await provider.fn();
      return { text, provider: provider.name };
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      errors.push(`${provider.name}: ${message}`);
      console.warn(`[LLM] ${provider.name} failed, trying next:`, message);
    }
  }

  throw new Error(`All LLM providers failed — ${errors.join(" | ")}`);
}

/** Parse a JSON object out of an LLM response (handles markdown fences). */
export function extractJson(text: string): unknown {
  let jsonStr = text;
  const fenced = text.match(/```(?:json)?\s*([\s\S]*?)```/);
  if (fenced) jsonStr = fenced[1];
  const objectMatch = jsonStr.match(/\{[\s\S]*\}/);
  if (objectMatch) jsonStr = objectMatch[0];
  return JSON.parse(jsonStr);
}
