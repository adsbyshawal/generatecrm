#!/usr/bin/env node
// Gemini image generator for Generate CRM design assets.
// Dependency-free (Node 18+ fetch). Reads GEMINI_API_KEY from env or .env.local.
//
// Usage:
//   node scripts/gen-image.mjs --prompt "..." --out public/hero.png
//   node scripts/gen-image.mjs --prompt "..." --out public/og.png --aspect 16:9
//   node scripts/gen-image.mjs --prompt "..." --out public/shot.png --model gemini-3.1-flash-image
//   node scripts/gen-image.mjs --prompt "..." --out public/photo.png --imagen
//
// Defaults: model = gemini-3-pro-image (Gemini image, generateContent).
// --imagen switches to imagen-4.0-generate-001 (predict API).

import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { dirname } from "node:path";

// --- load .env.local if GEMINI_API_KEY not already in env ---
function loadEnvLocal() {
  if (process.env.GEMINI_API_KEY) return;
  const candidates = [".env.local", ".env"];
  for (const f of candidates) {
    if (!existsSync(f)) continue;
    for (const line of readFileSync(f, "utf8").split("\n")) {
      const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
      if (m && !process.env[m[1]]) process.env[m[1]] = m[2].replace(/^["']|["']$/g, "");
    }
  }
}

function arg(name, fallback = undefined) {
  const i = process.argv.indexOf(`--${name}`);
  if (i === -1) return fallback;
  const v = process.argv[i + 1];
  return v && !v.startsWith("--") ? v : true;
}

async function main() {
  loadEnvLocal();
  const key = process.env.GEMINI_API_KEY;
  if (!key) throw new Error("GEMINI_API_KEY not set (env or .env.local).");

  const prompt = arg("prompt");
  const out = arg("out");
  if (!prompt || !out) throw new Error('Required: --prompt "..." --out path.png');

  const aspect = arg("aspect"); // e.g. 16:9, 1:1, 4:5, 3:2
  const useImagen = process.argv.includes("--imagen");
  const model = arg("model", useImagen ? "imagen-4.0-generate-001" : "gemini-3-pro-image");
  const base = "https://generativelanguage.googleapis.com/v1beta/models";

  let imgB64;
  if (useImagen) {
    const body = {
      instances: [{ prompt }],
      parameters: { sampleCount: 1, ...(aspect ? { aspectRatio: aspect } : {}) },
    };
    const res = await fetch(`${base}/${model}:predict?key=${key}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(`Imagen ${res.status}: ${JSON.stringify(data).slice(0, 400)}`);
    imgB64 = data?.predictions?.[0]?.bytesBase64Encoded;
  } else {
    const body = {
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: {
        responseModalities: ["TEXT", "IMAGE"],
        ...(aspect ? { imageConfig: { aspectRatio: aspect } } : {}),
      },
    };
    const res = await fetch(`${base}/${model}:generateContent?key=${key}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(`Gemini ${res.status}: ${JSON.stringify(data).slice(0, 400)}`);
    const parts = data?.candidates?.[0]?.content?.parts || [];
    imgB64 = parts.find((p) => p.inlineData?.data)?.inlineData?.data;
  }

  if (!imgB64) throw new Error("No image returned by the model.");
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, Buffer.from(imgB64, "base64"));
  const kb = Math.round(Buffer.from(imgB64, "base64").length / 1024);
  console.log(`✓ saved ${out} (${kb} KB) via ${model}${aspect ? ` @ ${aspect}` : ""}`);
}

main().catch((e) => {
  console.error("✗", e.message);
  process.exit(1);
});
