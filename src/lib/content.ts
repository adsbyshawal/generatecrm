// Single source of truth for all site copy/data.
// Per CLAUDE.md: no copy is hardcoded in components — it all lives here.

export const site = {
  name: "Generate CRM",
  domain: "generatecrm.co",
  bookingUrl: "https://api.leadconnectorhq.com/widget/booking/Dou9wt5FOKxY2fubYean",
  ctaHref: "/get-started",
} as const;

export const announcement =
  "✦  Now serving coaches, consultants, info creators & local businesses in US & Canada  ✦";

export const nav = {
  links: [
    { label: "Solutions", href: "/solution" },
    { label: "Industries", href: "/industries" },
    { label: "Pricing", href: "/pricing" },
    { label: "Partners", href: "/partners" },
    { label: "About", href: "/about-us" },
  ],
  cta: { label: "Book a Demo", href: "/get-started" },
} as const;

export const hero = {
  eyebrow: "The Revenue System for Service Businesses",
  // headline split so "never sleeps." can be styled magenta + italic
  headlineLead: "Your leads deserve a system that",
  headlineAccent: "never sleeps.",
  subheadline:
    "Generate CRM is the all-in-one revenue system built for coaches, consultants, course creators, and local businesses. Capture leads, automate follow-up, manage your pipeline, and close more deals — without duct-taping five tools together.",
  primaryCta: { label: "Book a Demo →", href: "/get-started" },
  ghostCta: { label: "See How It Works ↓", href: "#system" },
  microcopy: "No credit card required · Setup support included",
} as const;

export const pipeline = {
  browserTitle: "Generate CRM — Pipeline View",
  columns: [
    {
      title: "New Lead",
      cards: [
        { name: "Sarah Chen", role: "Business Coach", tag: "New", tone: "new" },
        { name: "Mark Torres", role: "HVAC Service", tag: "New", tone: "new" },
      ],
    },
    {
      title: "Demo Booked",
      cards: [
        { name: "Priya Sharma", role: "Course Creator", tag: "Booked", tone: "booked" },
        { name: "James Wright", role: "Consultant", tag: "Booked", tone: "booked" },
      ],
    },
    {
      title: "Proposal",
      cards: [
        { name: "Amy Liu", role: "Real Estate", tag: "Proposal", tone: "proposal" },
      ],
    },
    {
      title: "Closed ✓",
      cards: [
        { name: "Carlos Mendez", role: "Dental Practice", tag: "Won", tone: "won" },
        { name: "Fitness Studio", role: "Local Business", tag: "Won", tone: "won" },
      ],
    },
  ],
  automation:
    "Automation running: SMS sent to Sarah Chen — 42 seconds after form submit",
} as const;

export const footer = {
  preCta: {
    label: "Stop Losing Leads. Start Closing More Deals.",
    cta: { label: "Book a Demo →", href: "/get-started" },
  },
  tagline:
    "The all-in-one revenue system for coaches, consultants, course creators, and local businesses.",
  marketsServed: "Serving the US & Canada",
  columns: [
    {
      title: "Platform",
      links: [
        { label: "Solutions", href: "/solution" },
        { label: "Industries", href: "/industries" },
        { label: "Pricing", href: "/pricing" },
        { label: "Partners", href: "/partners" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "/about-us" },
        { label: "Book a Demo", href: "/get-started" },
        { label: "Get in Touch", href: "/get-started" },
        { label: "Help Center", href: "/get-started" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Service", href: "#" },
        { label: "Cookie Policy", href: "#" },
      ],
    },
  ],
  copyright: "© 2026 Generate CRM™. All rights reserved.",
  location: "US & Canada · generatecrm.co",
} as const;
