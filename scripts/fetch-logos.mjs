#!/usr/bin/env node
// Fetch brand logos for the integrations marquee from multiple sources:
// SVGL (svgl.app) -> Simple Icons CDN -> Iconify (logos / simple-icons).
// Saves local SVGs to public/logos/, prints found/missing + a TS snippet.
import { writeFileSync, mkdirSync, existsSync, readFileSync } from "node:fs";

// key, name, and optional source hints (si = Simple Icons slug, logos = Iconify "logos" slug)
const items = [
  { key: "google-calendar", name: "Google Calendar", logos: ["google-calendar"] },
  { key: "google", name: "Google", si: ["google"], logos: ["google-icon", "google"] },
  { key: "facebook", name: "Facebook", si: ["facebook"], logos: ["facebook"] },
  { key: "instagram", name: "Instagram", si: ["instagram"], logos: ["instagram-icon"] },
  { key: "linkedin", name: "LinkedIn", si: ["linkedin"], logos: ["linkedin-icon"] },
  { key: "tiktok", name: "TikTok", si: ["tiktok"], logos: ["tiktok-icon"] },
  { key: "whatsapp", name: "WhatsApp", si: ["whatsapp"], logos: ["whatsapp-icon"] },
  { key: "stripe", name: "Stripe", si: ["stripe"], logos: ["stripe"] },
  { key: "paypal", name: "PayPal", si: ["paypal"], logos: ["paypal"] },
  { key: "square", name: "Square", si: ["square"], logos: ["square"] },
  { key: "google-ads", name: "Google Ads", si: ["googleads"], logos: ["google-ads"] },
  { key: "xero", name: "Xero", si: ["xero"], logos: ["xero"] },
  { key: "quickbooks", name: "QuickBooks", si: ["quickbooks"], logos: ["quickbooks"] },
  { key: "wave", name: "Wave", si: ["wave"], logos: ["wave"] },
  { key: "slack", name: "Slack", si: ["slack"], logos: ["slack-icon"] },
  { key: "clio", name: "Clio", si: ["clio"], logos: ["clio"] },
  { key: "canva", name: "Canva", si: ["canva"], logos: ["canva-icon", "canva"] },
  { key: "google-business", name: "Google Business", si: ["googlemybusiness"], logos: ["google-my-business"] },
  { key: "woocommerce", name: "WooCommerce", si: ["woocommerce"], logos: ["woocommerce-icon", "woocommerce"] },
  { key: "shopify", name: "Shopify", si: ["shopify"], logos: ["shopify"] },
  { key: "printful", name: "Printful", si: ["printful"], logos: ["printful"] },
  { key: "printify", name: "Printify", si: ["printify"], logos: ["printify"] },
  { key: "shippo", name: "Shippo", si: ["shippo"], logos: ["shippo"] },
  { key: "shipstation", name: "ShipStation", si: ["shipstation"], logos: ["shipstation"] },
  { key: "clickup", name: "ClickUp", si: ["clickup"], logos: ["clickup-icon", "clickup"] },
  { key: "notion", name: "Notion", si: ["notion"], logos: ["notion-icon", "notion"] },
  { key: "google-contacts", name: "Google Contacts", logos: ["google-contacts"] },
  { key: "airtable", name: "Airtable", si: ["airtable"], logos: ["airtable"] },
  { key: "basecamp", name: "Basecamp", si: ["basecamp"], logos: ["basecamp-icon", "basecamp"] },
  { key: "typeform", name: "Typeform", si: ["typeform"], logos: ["typeform-icon", "typeform"] },
  { key: "asana", name: "Asana", si: ["asana"], logos: ["asana-icon", "asana"] },
  { key: "google-forms", name: "Google Forms", logos: ["google-forms"] },
  { key: "monday", name: "Monday.com", logos: ["monday-icon", "monday"] },
  { key: "openrouter", name: "OpenRouter", logos: ["openrouter"] },
  { key: "mistral", name: "Mistral AI", logos: ["mistral-ai-icon", "mistral"] },
  { key: "linear", name: "Linear", si: ["linear"], logos: ["linear-icon", "linear"] },
  { key: "calcom", name: "Cal.com", logos: ["cal-com", "calcom"] },
  { key: "hubspot", name: "HubSpot", si: ["hubspot"], logos: ["hubspot"] },
  { key: "klaviyo", name: "Klaviyo", si: ["klaviyo"], logos: ["klaviyo"] },
  { key: "housecall-pro", name: "Housecall Pro", logos: ["housecall-pro"] },
  { key: "apify", name: "Apify", si: ["apify"], logos: ["apify"] },
  { key: "fathom", name: "Fathom", logos: ["fathom"] },
  { key: "calendly", name: "Calendly", si: ["calendly"], logos: ["calendly"] },
  { key: "asana2", name: "Asana", skip: true },
];

const OUT = "public/logos";
mkdirSync(OUT, { recursive: true });

const isSvg = (s) => typeof s === "string" && s.includes("<svg") && !s.includes("404");

async function tryFetch(url) {
  try {
    const r = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0" } });
    if (!r.ok) return null;
    const t = await r.text();
    return isSvg(t) ? t : null;
  } catch {
    return null;
  }
}

const found = [];
const missing = [];

for (const it of items) {
  if (it.skip) continue;
  const file = `${OUT}/${it.key}.svg`;

  // Keep an already-downloaded SVGL file (official artwork) if present.
  if (existsSync(file) && isSvg(readFileSync(file, "utf8"))) {
    found.push(it);
    continue;
  }

  const si = it.si || [];
  const logos = it.logos || [];
  const candidates = [
    ...si.map((s) => `https://cdn.simpleicons.org/${s}`),
    ...logos.map((s) => `https://api.iconify.design/logos/${s}.svg`),
    ...si.map((s) => `https://api.iconify.design/simple-icons/${s}.svg`),
  ];

  let svg = null;
  for (const url of candidates) {
    svg = await tryFetch(url);
    if (svg) break;
  }
  if (svg) {
    writeFileSync(file, svg);
    found.push(it);
  } else {
    missing.push(it.name);
  }
}

console.log(`\nFOUND ${found.length}`);
console.log(`MISSING ${missing.length}: ${missing.join(", ") || "(none)"}`);
console.log(`\n--- paste into content.ts integrations.logos ---`);
for (const f of found) console.log(`    { name: ${JSON.stringify(f.name)}, file: "/logos/${f.key}.svg" },`);
