#!/usr/bin/env node
// Fetch brand logos from SVGL (svgl.app) for the integrations marquee.
// Downloads matched SVGs into public/logos/ and prints found/missing.
import { writeFileSync, mkdirSync } from "node:fs";

const items = [
  { key: "google-calendar", name: "Google Calendar", tries: ["google calendar"] },
  { key: "google", name: "Google", tries: ["google"] },
  { key: "facebook", name: "Facebook", tries: ["facebook"] },
  { key: "instagram", name: "Instagram", tries: ["instagram"] },
  { key: "linkedin", name: "LinkedIn", tries: ["linkedin"] },
  { key: "tiktok", name: "TikTok", tries: ["tiktok"] },
  { key: "whatsapp", name: "WhatsApp", tries: ["whatsapp"] },
  { key: "stripe", name: "Stripe", tries: ["stripe"] },
  { key: "paypal", name: "PayPal", tries: ["paypal"] },
  { key: "square", name: "Square", tries: ["square"] },
  { key: "google-ads", name: "Google Ads", tries: ["google ads", "googleads", "google adsense"] },
  { key: "xero", name: "Xero", tries: ["xero"] },
  { key: "quickbooks", name: "QuickBooks", tries: ["quickbooks", "intuit quickbooks"] },
  { key: "wave", name: "Wave", tries: ["wave", "waveapps"] },
  { key: "slack", name: "Slack", tries: ["slack"] },
  { key: "clio", name: "Clio", tries: ["clio"] },
  { key: "canva", name: "Canva", tries: ["canva"] },
  { key: "google-business", name: "Google Business", tries: ["google my business", "google business"] },
  { key: "woocommerce", name: "WooCommerce", tries: ["woocommerce"] },
  { key: "shopify", name: "Shopify", tries: ["shopify"] },
  { key: "printful", name: "Printful", tries: ["printful"] },
  { key: "printify", name: "Printify", tries: ["printify"] },
  { key: "shippo", name: "Shippo", tries: ["shippo"] },
  { key: "shipstation", name: "ShipStation", tries: ["shipstation"] },
  { key: "clickup", name: "ClickUp", tries: ["clickup"] },
  { key: "notion", name: "Notion", tries: ["notion"] },
  { key: "google-contacts", name: "Google Contacts", tries: ["google contacts"] },
  { key: "airtable", name: "Airtable", tries: ["airtable"] },
  { key: "basecamp", name: "Basecamp", tries: ["basecamp"] },
  { key: "typeform", name: "Typeform", tries: ["typeform"] },
  { key: "asana", name: "Asana", tries: ["asana"] },
  { key: "google-forms", name: "Google Forms", tries: ["google forms"] },
  { key: "monday", name: "Monday.com", tries: ["monday", "mondaycom", "monday.com"] },
  { key: "openrouter", name: "OpenRouter", tries: ["openrouter", "open router"] },
  { key: "manus", name: "Manus", tries: ["manus"] },
  { key: "fathom", name: "Fathom", tries: ["fathom"] },
  { key: "apify", name: "Apify", tries: ["apify"] },
  { key: "mistral", name: "Mistral AI", tries: ["mistral ai", "mistral"] },
  { key: "linear", name: "Linear", tries: ["linear"] },
  { key: "calcom", name: "Cal.com", tries: ["cal.com", "calcom", "cal"] },
  { key: "hubspot", name: "HubSpot", tries: ["hubspot"] },
  { key: "klaviyo", name: "Klaviyo", tries: ["klaviyo"] },
  { key: "housecall-pro", name: "Housecall Pro", tries: ["housecall pro", "housecallpro"] },
  { key: "calendly", name: "Calendly", tries: ["calendly"] },
];

const OUT = "public/logos";
mkdirSync(OUT, { recursive: true });

const norm = (s) => String(s || "").toLowerCase().replace(/[^a-z0-9]/g, "");

const res = await fetch("https://api.svgl.app");
const catalog = await res.json();
const byNorm = new Map();
for (const e of catalog) {
  const title = typeof e.title === "string" ? e.title : "";
  const t = norm(title);
  if (t && !byNorm.has(t)) byNorm.set(t, e);
}

const pickRoute = (e) => {
  const r = e.route;
  if (!r) return null;
  if (typeof r === "string") return r;
  return r.light || r.dark || null; // light = dark artwork for light backgrounds
};

const found = [];
const missing = [];
for (const it of items) {
  let entry = null;
  for (const cand of [it.name, ...it.tries]) {
    const e = byNorm.get(norm(cand));
    if (e) {
      entry = e;
      break;
    }
  }
  const route = entry && pickRoute(entry);
  if (!route) {
    missing.push(it.name);
    continue;
  }
  try {
    const svg = await (await fetch(route)).text();
    if (!svg.includes("<svg")) {
      missing.push(it.name);
      continue;
    }
    writeFileSync(`${OUT}/${it.key}.svg`, svg);
    found.push({ name: it.name, key: it.key, title: entry.title });
  } catch {
    missing.push(it.name);
  }
}

console.log(`\nFOUND ${found.length}/${items.length}`);
for (const f of found) console.log(`  + ${f.name}  ->  ${f.key}.svg  (svgl: ${f.title})`);
console.log(`\nMISSING ${missing.length}`);
for (const m of missing) console.log(`  - ${m}`);
