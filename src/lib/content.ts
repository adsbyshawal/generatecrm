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

// ── Section 2 — Stats bar ───────────────────────────────────────────
export const stats = [
  { value: "15+", label: "Platform Features" },
  { value: "Day 1", label: "Operational After Onboarding" },
  { value: "4", label: "Segments Served" },
  { value: "US & CA", label: "Markets Covered" },
  { value: "7+", label: "Tools Replaced" },
] as const;

// ── Section 3 — Trust badges ────────────────────────────────────────
export const badges = [
  { icon: "meta", label: "Meta Business Partner" },
  { icon: "google", label: "Google Partner" },
  { icon: "ghl", label: "GoHighLevel Infrastructure" },
  { icon: "clutch", label: "Clutch Verified 4.9 / 5.0" },
] as const;

// ── Section 4 — 4-step system ───────────────────────────────────────
export const system = {
  tag: "The Generate CRM Growth System",
  title: "Four steps. One system. Zero leads lost.",
  subtitle:
    "Every client who signs up gets a pre-built revenue system configured for their business — not a blank CRM they have to figure out.",
  steps: [
    {
      num: "01",
      name: "Capture",
      body: "Every lead from every source lands in one place — forms, ads, calls, funnels, DMs. Nothing slips through.",
    },
    {
      num: "02",
      name: "Automate",
      body: "The system follows up for you. SMS, email, and calls fire within seconds of a lead coming in. No manual outreach required.",
    },
    {
      num: "03",
      name: "Manage",
      body: "See every deal, every conversation, and every stage in one clean visual pipeline. You always know exactly where your revenue stands.",
    },
    {
      num: "04",
      name: "Close & Scale",
      body: "More conversations become customers. More revenue without more overhead. This is what scaling without hiring looks like.",
    },
  ],
} as const;

// ── Section 5 — Audience selector tabs ──────────────────────────────
export const audience = {
  tag: "Built For Your Business",
  title: "Stop looking for a CRM that fits. This one was built for you.",
  tabs: [
    {
      id: "coaches",
      emoji: "🎯",
      label: "Coaches",
      hook: "Stop chasing bookings. Let your system fill your calendar.",
      body: "Discovery calls book themselves. Follow-up runs while you're coaching. Your pipeline shows every lead, every stage, every opportunity — without you touching it.",
      uses: [
        "Auto-booking discovery calls from social media traffic",
        "Automated follow-up after webinars and lead magnets",
        "Pipeline tracking from first DM to enrolled client",
        "Broadcast campaigns to past clients for re-enrollment",
        "Testimonial collection automation post-program",
      ],
      link: { label: "See how it works for Coaches →", href: "/industries#coaches" },
      cards: [
        { value: "Auto", label: "Discovery calls book without manual outreach" },
        { value: "24/7", label: "Follow-up runs even while you're coaching" },
        { value: "1", label: "Inbox for all conversations — SMS, email, DMs" },
        { value: "Day 7", label: "Your system is live and running" },
      ],
    },
    {
      id: "consultants",
      emoji: "💼",
      label: "Consultants",
      hook: "Never let a warm lead go cold again.",
      body: "Proposals get followed up automatically. Warm leads stay engaged for months. Your revenue stops depending on your memory and starts running on a system.",
      uses: [
        "Automated nurture sequences for warm leads",
        "Post-proposal follow-up triggered automatically",
        "Pipeline tracking across all active opportunities",
        "Re-engagement broadcasts to past clients",
        "Unified inbox for all client communications",
      ],
      link: { label: "See how it works for Consultants →", href: "/industries#consultants" },
      cards: [
        { value: "0", label: "Warm leads lost to slow follow-up" },
        { value: "Auto", label: "Proposals followed up — no manual chasing" },
        { value: "Full", label: "Pipeline visibility from intro to close" },
        { value: "1", label: "Inbox for email, calls, SMS, WhatsApp" },
      ],
    },
    {
      id: "creators",
      emoji: "📚",
      label: "Course Creators",
      hook: "Turn your audience into buyers — without another launch.",
      body: "Your list becomes a revenue engine. Evergreen funnels sell your courses. Abandoned checkouts get recovered. You stop living launch-to-launch.",
      uses: [
        "Database broadcasts to your full subscriber list",
        "Evergreen funnels that sell without manual launches",
        "Checkout abandonment recovery sequences",
        "Pipeline for high-ticket program applicants",
        "AI assistant to qualify leads and book calls 24/7",
      ],
      link: { label: "See how it works for Course Creators →", href: "/industries#creators" },
      cards: [
        { value: "Evergreen", label: "Sales run without launches or manual effort" },
        { value: "Auto", label: "Abandoned checkouts recovered automatically" },
        { value: "Full", label: "List segmentation and broadcast capability" },
        { value: "AI", label: "Qualifies leads and books calls while you sleep" },
      ],
    },
    {
      id: "local",
      emoji: "🏢",
      label: "Local Businesses",
      hook: "Respond instantly. Book more jobs. Get more reviews.",
      body: "Missed calls become booked jobs within 60 seconds. Reviews write themselves after every appointment. Your calendar fills and your reputation builds — automatically.",
      uses: [
        "Instant lead response — SMS within 60 seconds",
        "Missed call text-back so no lead goes cold",
        "Appointment booking with automated reminders",
        "Review requests fired after every completed job",
        "Database reactivation broadcasts for seasonal promos",
      ],
      link: { label: "See how it works for Local Businesses →", href: "/industries#local" },
      cards: [
        { value: "60s", label: "Response time after a new lead comes in" },
        { value: "Auto", label: "Review requests after every job — no manual work" },
        { value: "0", label: "Missed calls that go cold unanswered" },
        { value: "Full", label: "Calendar fills without manual back-and-forth" },
      ],
    },
  ],
} as const;

// ── Section 6 — Features grid ───────────────────────────────────────
export const features = {
  tag: "Everything You Need",
  title: "One platform. Fifteen tools retired.",
  subtitle:
    "Every feature built around one goal — helping you capture more leads, automate your follow-up, and close more deals.",
  cards: [
    {
      icon: "pipeline",
      name: "CRM & Pipeline Management",
      body: "See every lead, deal, and conversation in a visual board that tells you what to do next. No spreadsheets. No guessing.",
    },
    {
      icon: "automation",
      name: "Marketing Automation",
      body: "Follow-up sequences run automatically via SMS, email, and calls. Every lead gets the same fast, consistent response — online or off.",
    },
    {
      icon: "funnels",
      name: "Funnels & Website Builder",
      body: "High-converting landing pages without a developer. Built, hosted, and connected to your pipeline — all in one place.",
    },
    {
      icon: "messaging",
      name: "Unified Messaging Hub",
      body: "SMS, email, Instagram DMs, calls, and chat — one inbox. Stop switching tabs. Start responding faster than your competition.",
    },
    {
      icon: "ai",
      name: "AI Assistant",
      body: "Handles first responses, qualifies leads, and books appointments 24/7 — even when you're not available. Your business never sleeps.",
    },
    {
      icon: "reviews",
      name: "Review Generation",
      body: "After every job, session, or appointment — review requests fire automatically. Your reputation builds itself.",
    },
  ],
} as const;

// ── Section 7 — Tool comparison ─────────────────────────────────────
export const comparison = {
  tag: "Replace Your Stack",
  title: "You're paying for six tools that don't work together.",
  subtitle:
    "Mailchimp. Calendly. ClickFunnels. An SMS tool. A review platform. That's $300–$600/month stitched together with Zapier automations that break at 2am.",
  current: {
    header: "Your Current Stack",
    sub: "Multiple disconnected tools",
    items: [
      { name: "CRM Tool (HubSpot / Pipedrive)", cost: "$50–300/mo" },
      { name: "Email (Mailchimp / ActiveCampaign)", cost: "$20–100/mo" },
      { name: "Appointment Booking (Calendly / Acuity)", cost: "$16/mo" },
      { name: "Funnel Builder (ClickFunnels)", cost: "$97/mo" },
      { name: "SMS Platform", cost: "$25/mo" },
      { name: "Review Management", cost: "$49/mo" },
      { name: "Zapier (to connect them all)", cost: "$20–50/mo" },
    ],
    totalLabel: "Monthly Spend",
    totalValue: "$277–642/mo",
  },
  generate: {
    header: "Generate CRM",
    sub: "Everything Connected",
    items: [
      "CRM & Pipeline Management — included",
      "Marketing Automation (SMS + Email) — included",
      "Appointment Booking — included",
      "Funnel & Website Builder — included",
      "Unified Messaging Hub — included",
      "Review Generation — included",
      "AI Assistant — included",
      "Social Media Planner — included",
      "Mobile App — included",
    ],
    bottomLabel: "One Subscription",
    bottomCta: { label: "See Pricing →", href: "/pricing" },
  },
} as const;

// ── Section 8 — Segment outcomes ────────────────────────────────────
export const outcomes = {
  tag: "Real Results",
  title: "What changes when everything works together.",
  cards: [
    {
      emoji: "🎯",
      name: "Coaches",
      points: [
        "Discovery calls fill up automatically",
        "Follow-up runs while you're coaching",
        "Testimonials collect after every program",
      ],
    },
    {
      emoji: "💼",
      name: "Consultants",
      points: [
        "No lead goes cold between deliveries",
        "Proposals auto-follow-up without effort",
        "Past clients re-engage on cue",
      ],
    },
    {
      emoji: "📚",
      name: "Course Creators",
      points: [
        "Database converts without launches",
        "Abandoned carts get recovered",
        "High-ticket applications on autopilot",
      ],
    },
    {
      emoji: "🏢",
      name: "Local Businesses",
      points: [
        "Missed calls become booked jobs",
        "Reviews build your reputation daily",
        "Slow seasons reactivated in one send",
      ],
    },
  ],
} as const;

// ── Section 9 — How it starts ───────────────────────────────────────
export const howItStarts = {
  tag: "Getting Started",
  title: "You'll be operational in 7 days. Here's how.",
  steps: [
    {
      num: "01",
      name: "Book Your Demo",
      body: "A 30-minute strategy session. We look at your current setup, find the gaps, and show you exactly how Generate CRM fits your business — or tell you honestly if it doesn't.",
      note: "→ Takes 30 seconds to book",
    },
    {
      num: "02",
      name: "We Build Your System",
      body: "Pipeline stages, automation sequences, messaging templates, and integrations — all configured for your specific business type. You don't configure anything. We do.",
      note: "→ Zero technical work required from you",
    },
    {
      num: "03",
      name: "Go Live on Day 7",
      body: "Your system is live within the first week. Leads come in, follow-up goes out automatically, and your calendar starts filling. You start closing from day one.",
      note: "→ Operational within 7 days",
    },
  ],
  closing: "You don't set this up. We do. You're live within the first week.",
} as const;

// ── Section 10 — CTA block ──────────────────────────────────────────
export const ctaBlock = {
  title: "Ready to stop losing leads?",
  subtitle:
    "Book a 30-minute strategy session. We'll show you exactly how Generate CRM fits your business — or tell you honestly if it doesn't.",
  cta: { label: "Book a Demo →", href: "/get-started" },
  trust: "No commitment. No credit card. Just a real conversation about your business.",
} as const;

// ── Section 11 — FAQ ────────────────────────────────────────────────
export const faq = {
  tag: "FAQ",
  title: "Got questions? Good.",
  items: [
    {
      q: "I already use a CRM. Why would I switch?",
      a: "Most CRMs track contacts. Generate CRM runs your entire sales process — follow-up, booking, pipeline, SMS, and automation all connected. If your current CRM doesn't do all of that automatically, you don't have a CRM. You have a contact list.",
    },
    {
      q: "Is Generate CRM built on GoHighLevel?",
      a: "Yes, and we're upfront about it. Generate CRM is built on GoHighLevel's infrastructure — the same engine powering thousands of platforms worldwide. What we add is everything GHL doesn't come with: done-for-you setup, segment-specific configuration for your business type, and real human support. The platform is GHL. The system is ours.",
    },
    {
      q: "How long does setup actually take?",
      a: "Seven days. We handle everything — pipeline stages, automation sequences, integrations, and your first campaigns. You show up for the onboarding call and tell us about your business. We build the rest.",
    },
    {
      q: "Do I need technical skills?",
      a: "No. You don't configure anything. Your job is to show up for the onboarding call and tell us about your business. We handle the setup. You handle the growth.",
    },
    {
      q: "What if Generate CRM isn't the right fit?",
      a: "We'll tell you on the demo call. If Generate CRM isn't right for your situation, we'll say so — and point you toward what is. We'd rather lose a sale than onboard the wrong client.",
    },
  ],
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
