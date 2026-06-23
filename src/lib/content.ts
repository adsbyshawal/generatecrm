// Single source of truth for all site copy/data.
// Per CLAUDE.md: no copy is hardcoded in components, it all lives here.
// Conventions: no em-dashes, Lucide icon keys (not emoji), arrows added in JSX.

export const site = {
  name: "Generate CRM",
  domain: "generatecrm.co",
  bookingUrl: "https://api.leadconnectorhq.com/widget/booking/Dou9wt5FOKxY2fubYean",
  ctaHref: "/get-started",
} as const;

export const nav = {
  // Slim top nav: only these two. The rest live in the footer.
  primary: [
    { label: "Solutions", href: "/solution" },
    { label: "Pricing", href: "/pricing" },
  ],
  // Full set — used by the footer / sitemap.
  links: [
    { label: "Solutions", href: "/solution" },
    { label: "Industries", href: "/industries" },
    { label: "Pricing", href: "/pricing" },
    { label: "Partners", href: "/partners" },
    { label: "About", href: "/about-us" },
  ],
  login: { label: "Log in", href: "/get-started" },
  cta: { label: "Book a Demo", href: "/get-started" },
} as const;

export const hero = {
  headlineLead: "Your leads deserve a system that never",
  headlineAccent: "sleeps.",
  // Signature hero animation: the blue word cycles, sliding up + fading.
  headlineRotators: ["sleeps.", "stops.", "forgets.", "misses."],
  subheadline:
    "The all-in-one revenue system built for coaches, consultants, course creators, and local businesses. Capture leads, automate follow-up, manage your pipeline, and close more deals without duct-taping five tools together.",
  primaryCta: { label: "Book a Demo", href: "/get-started" },
  ghostCta: { label: "See how it works", href: "#system" },
  microcopy: "No credit card required. Setup support included.",
} as const;

export const pipeline = {
  browserTitle: "Generate CRM, Pipeline View",
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
      cards: [{ name: "Amy Liu", role: "Real Estate", tag: "Proposal", tone: "proposal" }],
    },
    {
      title: "Closed",
      cards: [
        { name: "Carlos Mendez", role: "Dental Practice", tag: "Won", tone: "won" },
        { name: "Fitness Studio", role: "Local Business", tag: "Won", tone: "won" },
      ],
    },
  ],
  automation:
    "Automation running: SMS sent to Sarah Chen, 42 seconds after form submit",
} as const;

// Hero product visual — a simplified, GoHighLevel-style analytics dashboard.
// Illustrative demo numbers (a product mockup, not a results claim).
export const dashboard = {
  title: "Generate CRM, Dashboard",
  range: "Last 30 days",
  metrics: [
    {
      kind: "donut",
      label: "Opportunity status",
      value: "142",
      caption: "Open",
      percent: 68,
      color: "#2f5bf5",
    },
    {
      kind: "value",
      label: "Pipeline value",
      value: "$48.2K",
      caption: "Total revenue",
      trend: [30, 42, 38, 55, 60, 72],
    },
    {
      kind: "donut",
      label: "Conversion rate",
      value: "57%",
      caption: "Won",
      percent: 57,
      color: "#22c55e",
    },
  ],
  funnel: [
    { stage: "New Lead", pct: 100, color: "#2f5bf5" },
    { stage: "Demo Booked", pct: 72, color: "#22b8cf" },
    { stage: "Proposal", pct: 48, color: "#7c6cf5" },
    { stage: "Won", pct: 31, color: "#22c55e" },
  ],
  distribution: [
    { label: "New Lead", value: 38, color: "#2f5bf5" },
    { label: "Demo Booked", value: 24, color: "#22b8cf" },
    { label: "Proposal", value: 16, color: "#7c6cf5" },
    { label: "Won", value: 8, color: "#22c55e" },
  ],
} as const;

// ── Section 2 — Stats bar ───────────────────────────────────────────
export const stats = [
  { value: "15+", label: "Platform Features" },
  { value: "20+", label: "Platforms Integrated" },
  { value: "10+", label: "Tools Replaced" },
  { value: "Day 1", label: "Operational After Onboarding" },
] as const;

// ── Integrations marquee (animated logo wall under the hero) ────────
// Local SVGs in /public/logos (fetched via scripts/fetch-logos.mjs from SVGL /
// Simple Icons / Iconify). Tools with no findable logo were removed.
export const integrations = {
  heading: "Works with all the software you already use",
  logos: [
    { name: "Google Calendar", file: "/logos/google-calendar.svg" },
    { name: "Google", file: "/logos/google.svg" },
    { name: "Facebook", file: "/logos/facebook.svg" },
    { name: "Instagram", file: "/logos/instagram.svg" },
    { name: "LinkedIn", file: "/logos/linkedin.svg" },
    { name: "TikTok", file: "/logos/tiktok.svg" },
    { name: "WhatsApp", file: "/logos/whatsapp.svg" },
    { name: "Stripe", file: "/logos/stripe.svg" },
    { name: "PayPal", file: "/logos/paypal.svg" },
    { name: "Square", file: "/logos/square.svg" },
    { name: "Google Ads", file: "/logos/google-ads.svg" },
    { name: "Xero", file: "/logos/xero.svg" },
    { name: "QuickBooks", file: "/logos/quickbooks.svg" },
    { name: "Slack", file: "/logos/slack.svg" },
    { name: "Canva", file: "/logos/canva.svg" },
    { name: "Google Business", file: "/logos/google-business.svg" },
    { name: "WooCommerce", file: "/logos/woocommerce.svg" },
    { name: "Shopify", file: "/logos/shopify.svg" },
    { name: "ClickUp", file: "/logos/clickup.svg" },
    { name: "Notion", file: "/logos/notion.svg" },
    { name: "Airtable", file: "/logos/airtable.svg" },
    { name: "Basecamp", file: "/logos/basecamp.svg" },
    { name: "Typeform", file: "/logos/typeform.svg" },
    { name: "Asana", file: "/logos/asana.svg" },
    { name: "Monday.com", file: "/logos/monday.svg" },
    { name: "OpenRouter", file: "/logos/openrouter.svg" },
    { name: "Manus", file: "/logos/manus.svg" },
    { name: "Mistral AI", file: "/logos/mistral.svg" },
    { name: "Linear", file: "/logos/linear.svg" },
    { name: "Cal.com", file: "/logos/calcom.svg" },
    { name: "HubSpot", file: "/logos/hubspot.svg" },
    { name: "Calendly", file: "/logos/calendly.svg" },
  ],
} as const;

// ── Section 4 — 4-step system ───────────────────────────────────────
export const system = {
  tag: "The Generate CRM Growth System",
  title: "Four steps. One system. Zero leads lost.",
  subtitle:
    "Every client who signs up gets a pre-built revenue system configured for their business, not a blank CRM they have to figure out.",
  steps: [
    {
      num: "01",
      name: "Capture",
      body: "Every lead from every source lands in one place. Forms, ads, calls, funnels, DMs. Nothing slips through.",
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
      name: "Close and Scale",
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
      icon: "target",
      label: "Coaches",
      hook: "Stop chasing bookings. Let your system fill your calendar.",
      body: "Discovery calls book themselves. Follow-up runs while you're coaching. Your pipeline shows every lead, every stage, every opportunity, without you touching it.",
      uses: [
        "Auto-booking discovery calls from social media traffic",
        "Automated follow-up after webinars and lead magnets",
        "Pipeline tracking from first DM to enrolled client",
        "Broadcast campaigns to past clients for re-enrollment",
        "Testimonial collection automation post-program",
      ],
      link: { label: "See how it works for Coaches", href: "/industries#coaches" },
      cards: [
        { value: "Auto", label: "Discovery calls book without manual outreach" },
        { value: "24/7", label: "Follow-up runs even while you're coaching" },
        { value: "1", label: "Inbox for all conversations: SMS, email, DMs" },
        { value: "Day 7", label: "Your system is live and running" },
      ],
    },
    {
      id: "consultants",
      icon: "briefcase",
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
      link: { label: "See how it works for Consultants", href: "/industries#consultants" },
      cards: [
        { value: "0", label: "Warm leads lost to slow follow-up" },
        { value: "Auto", label: "Proposals followed up, no manual chasing" },
        { value: "Full", label: "Pipeline visibility from intro to close" },
        { value: "1", label: "Inbox for email, calls, SMS, WhatsApp" },
      ],
    },
    {
      id: "creators",
      icon: "graduation-cap",
      label: "Course Creators",
      hook: "Turn your audience into buyers without another launch.",
      body: "Your list becomes a revenue engine. Evergreen funnels sell your courses. Abandoned checkouts get recovered. You stop living launch-to-launch.",
      uses: [
        "Database broadcasts to your full subscriber list",
        "Evergreen funnels that sell without manual launches",
        "Checkout abandonment recovery sequences",
        "Pipeline for high-ticket program applicants",
        "AI assistant to qualify leads and book calls 24/7",
      ],
      link: { label: "See how it works for Course Creators", href: "/industries#creators" },
      cards: [
        { value: "Evergreen", label: "Sales run without launches or manual effort" },
        { value: "Auto", label: "Abandoned checkouts recovered automatically" },
        { value: "Full", label: "List segmentation and broadcast capability" },
        { value: "AI", label: "Qualifies leads and books calls while you sleep" },
      ],
    },
    {
      id: "local",
      icon: "store",
      label: "Local Businesses",
      hook: "Respond instantly. Book more jobs. Get more reviews.",
      body: "Missed calls become booked jobs within 60 seconds. Reviews write themselves after every appointment. Your calendar fills and your reputation builds, automatically.",
      uses: [
        "Instant lead response: SMS within 60 seconds",
        "Missed call text-back so no lead goes cold",
        "Appointment booking with automated reminders",
        "Review requests fired after every completed job",
        "Database reactivation broadcasts for seasonal promos",
      ],
      link: { label: "See how it works for Local Businesses", href: "/industries#local" },
      cards: [
        { value: "60s", label: "Response time after a new lead comes in" },
        { value: "Auto", label: "Review requests after every job, no manual work" },
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
    "Every feature built around one goal: helping you capture more leads, automate your follow-up, and close more deals.",
  link: { label: "See how it works", href: "#system" },
  cards: [
    {
      icon: "pipeline",
      name: "CRM and Pipeline Management",
      body: "See every lead, deal, and conversation in a visual board that tells you what to do next. No spreadsheets. No guessing.",
    },
    {
      icon: "automation",
      name: "Marketing Automation",
      body: "Follow-up sequences run automatically via SMS, email, and calls. Every lead gets the same fast, consistent response, online or off.",
    },
    {
      icon: "funnels",
      name: "Funnels and Website Builder",
      body: "High-converting landing pages without a developer. Built, hosted, and connected to your pipeline, all in one place.",
    },
    {
      icon: "messaging",
      name: "Unified Messaging Hub",
      body: "SMS, email, Instagram DMs, calls, and chat in one inbox. Stop switching tabs. Start responding faster than your competition.",
    },
    {
      icon: "ai",
      name: "AI Assistant",
      body: "Handles first responses, qualifies leads, and books appointments 24/7, even when you're not available. Your business never sleeps.",
    },
    {
      icon: "reviews",
      name: "Review Generation",
      body: "After every job, session, or appointment, review requests fire automatically. Your reputation builds itself.",
    },
  ],
} as const;

// ── Section 7 — Tool comparison ─────────────────────────────────────
export const comparison = {
  tag: "Replace Your Stack",
  title: "You're paying for six tools that don't work together.",
  subtitle:
    "Mailchimp. Calendly. ClickFunnels. An SMS tool. A review platform. That's $300-$600 a month stitched together with Zapier automations that break at 2am.",
  current: {
    header: "Your Current Stack",
    sub: "Multiple disconnected tools",
    items: [
      { name: "CRM Tool (HubSpot / Pipedrive)", cost: "$50-300/mo" },
      { name: "Email (Mailchimp / ActiveCampaign)", cost: "$20-100/mo" },
      { name: "Appointment Booking (Calendly / Acuity)", cost: "$16/mo" },
      { name: "Funnel Builder (ClickFunnels)", cost: "$97/mo" },
      { name: "SMS Platform", cost: "$25/mo" },
      { name: "Review Management", cost: "$49/mo" },
      { name: "Zapier (to connect them all)", cost: "$20-50/mo" },
    ],
    totalLabel: "Monthly Spend",
    totalValue: "$277-642/mo",
  },
  generate: {
    header: "Generate CRM",
    sub: "Everything connected",
    items: [
      "CRM and Pipeline Management",
      "Marketing Automation (SMS and Email)",
      "Appointment Booking",
      "Funnel and Website Builder",
      "Unified Messaging Hub",
      "Review Generation",
      "AI Assistant",
      "Social Media Planner",
      "Mobile App",
    ],
    bottomLabel: "One subscription",
    bottomCta: { label: "See Pricing", href: "/pricing" },
  },
} as const;

// ── Section 8 — Segment outcomes ────────────────────────────────────
export const outcomes = {
  tag: "Real Results",
  title: "What changes when everything works together.",
  cards: [
    {
      icon: "target",
      name: "Coaches",
      points: [
        "Discovery calls fill up automatically",
        "Follow-up runs while you're coaching",
        "Testimonials collect after every program",
      ],
    },
    {
      icon: "briefcase",
      name: "Consultants",
      points: [
        "No lead goes cold between deliveries",
        "Proposals auto-follow-up without effort",
        "Past clients re-engage on cue",
      ],
    },
    {
      icon: "graduation-cap",
      name: "Course Creators",
      points: [
        "Database converts without launches",
        "Abandoned carts get recovered",
        "High-ticket applications on autopilot",
      ],
    },
    {
      icon: "store",
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
      body: "A 30-minute strategy session. We look at your current setup, find the gaps, and show you exactly how Generate CRM fits your business, or tell you honestly if it doesn't.",
      note: "Takes 30 seconds to book",
    },
    {
      num: "02",
      name: "We Build Your System",
      body: "Pipeline stages, automation sequences, messaging templates, and integrations, all configured for your specific business type. You don't configure anything. We do.",
      note: "Zero technical work required from you",
    },
    {
      num: "03",
      name: "Go Live on Day 7",
      body: "Your system is live within the first week. Leads come in, follow-up goes out automatically, and your calendar starts filling. You start closing from day one.",
      note: "Operational within 7 days",
    },
  ],
  closing: "You don't set this up. We do. You're live within the first week.",
} as const;

// ── Testimonial (placeholder until a real client quote exists) ──────
export const testimonial = {
  // {/* ADD REAL TESTIMONIAL HERE: quote, name, business type, specific result */}
  placeholder: true,
  quote:
    "Real results from real businesses go here. We're collecting client stories now, and we'd rather show you a true one than invent a fake.",
  attribution: "Client testimonials coming soon",
} as const;

// ── Section 10 — CTA block ──────────────────────────────────────────
export const ctaBlock = {
  title: "Ready to stop losing leads?",
  subtitle:
    "Book a 30-minute strategy session. We'll show you exactly how Generate CRM fits your business, or tell you honestly if it doesn't.",
  cta: { label: "Book a Demo", href: "/get-started" },
  ghostCta: { label: "See how it works", href: "#system" },
  trust: "No commitment. No credit card. Just a real conversation about your business.",
} as const;

// ── Section 11 — FAQ ────────────────────────────────────────────────
export const faq = {
  tag: "FAQ",
  title: "Questions and answers.",
  items: [
    {
      q: "I already use a CRM. Why would I switch?",
      a: "Most CRMs track contacts. Generate CRM runs your entire sales process: follow-up, booking, pipeline, SMS, and automation all connected. If your current CRM doesn't do all of that automatically, you don't have a CRM. You have a contact list.",
    },
    {
      q: "Is Generate CRM built on GoHighLevel?",
      a: "Yes, and we're upfront about it. Generate CRM is built on GoHighLevel's infrastructure, the same engine powering thousands of platforms worldwide. What we add is everything GHL doesn't come with: done-for-you setup, segment-specific configuration for your business type, and real human support. The platform is GHL. The system is ours.",
    },
    {
      q: "How long does setup actually take?",
      a: "Seven days. We handle everything: pipeline stages, automation sequences, integrations, and your first campaigns. You show up for the onboarding call and tell us about your business. We build the rest.",
    },
    {
      q: "Do I need technical skills?",
      a: "No. You don't configure anything. Your job is to show up for the onboarding call and tell us about your business. We handle the setup. You handle the growth.",
    },
    {
      q: "What if Generate CRM isn't the right fit?",
      a: "We'll tell you on the demo call. If Generate CRM isn't right for your situation, we'll say so, and point you toward what is. We'd rather lose a sale than onboard the wrong client.",
    },
  ],
} as const;

export const footer = {
  tagline:
    "The all-in-one revenue system for coaches, consultants, course creators, and local businesses.",
  marketsServed: "Serving the US and Canada",
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
  copyright: "© 2026 Generate CRM. All rights reserved.",
  location: "US and Canada · generatecrm.co",
} as const;

// ════════════════════════════════════════════════════════════════════
//  INNER PAGES
// ════════════════════════════════════════════════════════════════════

// ── Page: Solutions (/solution) ─────────────────────────────────────
export const solutionsPage = {
  hero: {
    tag: "Solutions",
    title: "Solutions built around how you actually sell.",
    subtitle:
      "You don't have a software problem. You have a follow-up problem, a pipeline problem, or a lead capture problem. Generate CRM is built to fix all three, in one system.",
    cta: { label: "Book a Demo", href: "/get-started" },
  },
  intro: {
    title: "One platform. Multiple growth solutions.",
    body: "Most businesses don't lose leads because they're bad at sales. They lose leads because the follow-up never happened, the pipeline was invisible, or the first response came four hours too late. Generate CRM solves all of it.",
  },
  solutions: [
    {
      num: "01",
      icon: "capture",
      name: "Lead Capture System",
      hook: "Leads come from everywhere. They shouldn't go everywhere.",
      desc: "Capture every lead from your website, funnels, ads, and calls in one place so nothing slips through the cracks.",
      benefits: [
        "Never miss a new lead, no matter where it comes from",
        "Instant lead tracking and organization from the moment of contact",
        "Seamless integration with all your existing marketing channels",
      ],
    },
    {
      num: "02",
      icon: "followup",
      name: "Automated Follow-Up System",
      hook: "Your follow-up should run while you sleep.",
      desc: "Automatically follow up with every lead using SMS, email, and calls so you respond instantly and stay top of mind, without lifting a finger.",
      benefits: [
        "Respond to leads within 60 seconds, before your competition does",
        "Increase conversion rates without adding manual work to your day",
        "Stay consistent with every single prospect, every single time",
      ],
    },
    {
      num: "03",
      icon: "pipeline",
      name: "Sales Pipeline Management",
      hook: "If you can't see your pipeline, you can't manage your revenue.",
      desc: "Track every deal and conversation inside a clear visual pipeline so you always know exactly where your revenue stands, and what to do next.",
      benefits: [
        "Full visibility into every stage of your sales process",
        "Move deals forward with clarity, no more lost opportunities",
        "Never lose track of a hot opportunity again",
      ],
    },
    {
      num: "04",
      icon: "booking",
      name: "Appointment Booking System",
      hook: "Stop playing calendar ping-pong.",
      desc: "Let leads book appointments instantly while reducing no-shows with automated reminders and confirmations, all without manual scheduling.",
      benefits: [
        "More booked appointments from the same lead volume",
        "Automated reminders that cut no-show rates significantly",
        "Seamless scheduling experience your prospects actually complete",
      ],
    },
    {
      num: "05",
      icon: "messaging",
      name: "Messaging and Communication Hub",
      hook: "All your conversations. One inbox.",
      desc: "Manage SMS, email, calls, and chats in one inbox so your team can respond faster, stay organized, and never miss a message.",
      benefits: [
        "Every conversation in one place: SMS, email, calls, chat, DMs",
        "Faster response times that directly increase your conversion rate",
        "Better customer experience from first contact through close",
      ],
    },
    {
      num: "06",
      icon: "automation",
      name: "Revenue and Growth Automation",
      hook: "Your business should run systems, not people.",
      desc: "Automate repetitive tasks and workflows so your business can scale without adding more staff, and without you manually managing every step.",
      benefits: [
        "Save hours every week on tasks that should already be automatic",
        "Increase team efficiency across every part of your operation",
        "Scale your business without scaling your headcount",
      ],
    },
  ],
  closing: {
    title: "See how Generate CRM can transform your business.",
    subtitle:
      "Book a demo and we'll show you exactly how to capture more leads, automate your follow-ups, and close more deals.",
    cta: { label: "Book Your Demo", href: "/get-started" },
  },
} as const;

// ── Page: Industries (/industries) ──────────────────────────────────
export const industriesPage = {
  hero: {
    tag: "Industries",
    title: "Built for the businesses that run on leads, sales, and follow-ups.",
    subtitle:
      "Generate CRM is purpose-built for four types of businesses. Each one gets a pre-configured system designed around how they actually sell.",
    cta: { label: "Book a Demo", href: "/get-started" },
  },
  intro: {
    title: "One system. Adapted to your business type.",
    body: "Every business has the same core problem: leads come in, but follow-up is slow, inconsistent, or missed entirely. Generate CRM adapts to how you sell, with pre-built pipelines, automation sequences, and onboarding designed for your specific workflow.",
  },
  industries: [
    {
      id: "coaches",
      icon: "target",
      name: "Coaches",
      hook: "Stop chasing your calendar. Let it fill itself.",
      pains: [
        "Discovery call bookings are inconsistent, leads go cold before they get on a call",
        "Follow-up after webinars or social media is manual and often abandoned",
        "No central view of where each prospect is in the pipeline",
        "Spending more time on admin than on actual coaching",
        "Testimonials and social proof are hard to collect and organize",
      ],
      body: "You built a coaching business to help people, not to spend your afternoons chasing DMs. Generate CRM automates the entire back-end of your coaching business so you can spend your time doing what you're actually paid for.",
      uses: [
        "Auto-booking discovery calls from social media traffic and lead magnets",
        "Automated follow-up sequences after webinars, workshops, or lead magnet downloads",
        "Pipeline tracking for every prospect from first contact to enrolled client",
        "Broadcast campaigns to past clients for program re-enrollment or new offers",
        "Testimonial and review collection automation after program completion",
        "Mobile access to manage conversations and pipeline from anywhere",
      ],
      hookLine: "Discovery calls book themselves. Follow-up runs while you're coaching.",
      cta: { label: "See How Generate CRM Works for Coaches", href: "/get-started" },
    },
    {
      id: "consultants",
      icon: "briefcase",
      name: "Consultants",
      hook: "Your pipeline shouldn't depend on your memory.",
      pains: [
        "Revenue is feast or famine, delivering OR hunting, rarely both",
        "Follow-up with prospects is inconsistent during busy delivery periods",
        "No systematic way to nurture warm leads who aren't ready to buy",
        "Proposals get sent and then chased manually, or forgotten",
        "Client communication scattered across email, WhatsApp, LinkedIn, and phone",
      ],
      body: "The gap between delivering for current clients and hunting for the next engagement is where consultants lose money. Generate CRM closes that gap. Your warm leads stay warm automatically, proposals get followed up, and your pipeline stays active even when you're heads-down on a client project.",
      uses: [
        "Automated lead nurture sequences that keep prospects warm for weeks or months",
        "Pipeline tracking from first contact through proposal and close",
        "Post-proposal follow-up sequences triggered automatically",
        "Unified inbox: all client and prospect communication in one place",
        "Re-engagement broadcasts to past clients for referrals or new retainers",
        "Reporting to show which channels and activities generate the most revenue",
      ],
      hookLine: "Proposals follow up automatically. Your pipeline runs even when you're on a client project.",
      cta: { label: "See How Generate CRM Works for Consultants", href: "/get-started" },
    },
    {
      id: "creators",
      icon: "graduation-cap",
      name: "Info Product Creators",
      hook: "You have an audience. You need a system that converts it.",
      pains: [
        "Large email list with poor conversion, audience exists but no system to monetize it",
        "No automated sequence to move free subscribers to paid customers",
        "Launch-based revenue model is exhausting, living launch-to-launch",
        "Abandoned carts and checkout drop-off with no recovery automation",
        "No systematic way to upsell existing customers into higher-tier offers",
      ],
      body: "You've done the hard part, you've built an audience. Now you need a system that converts that audience into consistent revenue without another exhausting launch cycle. Generate CRM turns your database into an evergreen sales machine.",
      uses: [
        "Database broadcasts to message the full list or specific segments",
        "Automated evergreen funnels that sell courses without manual launches",
        "Checkout abandonment recovery sequences that recapture lost sales",
        "Pipeline tracking for high-ticket program applicants and enrollment calls",
        "Appointment booking for strategy calls and consultation upsells",
        "AI assistant to handle initial DM responses and lead qualification",
      ],
      hookLine: "Your list stops being a list and starts being a revenue engine.",
      cta: { label: "See How Generate CRM Works for Info Creators", href: "/get-started" },
    },
    {
      id: "local",
      icon: "store",
      name: "Local Businesses",
      hook: "The lead came in. Did you respond in time?",
      pains: [
        "Leads from Google Ads not followed up within the critical first 5 minutes",
        "Inbound calls during off-hours missed and never recovered",
        "Google reviews are inconsistent, relying on customers to remember",
        "Appointment no-show rates high because reminders aren't automated",
        "Re-activating past customers requires a manual process that never gets done",
      ],
      body: "Research shows that businesses that respond within 5 minutes are 21x more likely to close that deal. Most local businesses respond in hours, or not at all. Generate CRM fires your response the moment the lead hits.",
      uses: [
        "Instant lead response: automated SMS within 60 seconds of a form submission",
        "Missed call text-back: automatic SMS response when a call goes unanswered",
        "Appointment booking with automated reminders and confirmation messages",
        "Review generation: automated review requests sent after every completed job",
        "Database reactivation: broadcast campaigns to past customers for seasonal promos",
        "Pipeline tracking: visual board showing every active lead and its current stage",
      ],
      hookLine: "Missed calls become booked jobs. Reviews build themselves. Your competitors are still doing this manually.",
      cta: { label: "See How Generate CRM Works for Local Businesses", href: "/get-started" },
    },
  ],
  closing: {
    title: "Your industry needs better follow-up. Not more tools.",
    subtitle:
      "Book a demo and we'll show you exactly how Generate CRM adapts to your business.",
    cta: { label: "Book Your Demo", href: "/get-started" },
  },
} as const;

// ── Page: Pricing (/pricing) ────────────────────────────────────────
// NOTE: prices are intentional [PRICE] placeholders. Fill in manually.
export const pricingPage = {
  hero: {
    tag: "Pricing",
    title: "Simple pricing built to help you grow.",
    subtitle:
      "Choose the plan that fits your business and start capturing more leads, automating follow-ups, and closing more deals.",
    micro: "No long-term contracts. Cancel anytime.",
  },
  intro: {
    title: "One platform. Multiple options.",
    body: "Whether you're just getting started or scaling your business, Generate CRM gives you the tools and systems you need to grow without complexity.",
  },
  plans: [
    {
      name: "Starter",
      price: "[PRICE]",
      period: "/month",
      blurb: "Perfect for small businesses and solopreneurs getting started with automation.",
      features: [
        "CRM and pipeline management",
        "Basic automation workflows",
        "Email and SMS integration",
        "Appointment booking",
        "Funnel and page builder",
        "Mobile app access",
        "Team access (limited users)",
      ],
      popular: false,
      cta: { label: "Book a Demo", href: "/get-started" },
    },
    {
      name: "Growth",
      price: "[PRICE]",
      period: "/month",
      blurb: "Best for growing businesses that want more automation and better control.",
      features: [
        "Everything in Starter",
        "Advanced automation workflows",
        "Full messaging hub (unified inbox)",
        "AI assistant features",
        "Reporting and analytics",
        "Database broadcasts",
        "Social media planner",
        "Review generation",
      ],
      popular: true,
      cta: { label: "Book a Demo", href: "/get-started" },
    },
    {
      name: "Pro",
      price: "[PRICE]",
      period: "/month",
      blurb: "For businesses that want to scale faster with advanced tools.",
      features: [
        "Everything in Growth",
        "Unlimited funnels and users",
        "Power dialer for high-volume outbound",
        "Online payments",
        "Advanced reporting",
        "Priority support",
        "Custom workflows and setup assistance",
      ],
      popular: false,
      cta: { label: "Book a Demo", href: "/get-started" },
    },
    {
      name: "Unlimited",
      price: "Custom",
      period: "",
      blurb: "For agencies and multi-location businesses managing multiple clients.",
      features: [
        "Everything in Pro",
        "Unlimited sub-accounts or locations",
        "WhatsApp messaging",
        "AI appointment booking (fully automated)",
        "White-label capabilities",
        "Advanced customization",
        "Dedicated account support",
      ],
      popular: false,
      cta: { label: "Book a Demo", href: "/get-started" },
    },
  ],
  usage: {
    title: "Usage-based add-ons",
    subtitle:
      "Your platform subscription is fixed. Communication usage is billed only for what you actually use.",
    rows: [
      { name: "Email", cost: "$1.50 per 1,000 emails" },
      { name: "Local Numbers", cost: "$5.00/month per number" },
      { name: "Toll-Free Numbers", cost: "$10.00/month per number" },
      { name: "Outbound SMS", cost: "$0.01 per segment" },
      { name: "Inbound SMS", cost: "$0.001 per segment" },
      { name: "Outbound Calls", cost: "$0.05/minute" },
      { name: "Inbound Calls", cost: "$0.01/minute (local)" },
    ],
  },
  value: {
    title: "More than a CRM. A complete revenue system.",
    body: "Generate CRM replaces multiple tools, saving you time, money, and the headache of stitching everything together.",
    points: [
      {
        icon: "replace",
        title: "What you replace",
        body: "Six or seven disconnected subscriptions held together with Zapier.",
      },
      {
        icon: "save",
        title: "What you save",
        body: "Hundreds of dollars a month and hours of manual work every week.",
      },
      {
        icon: "gain",
        title: "What you gain",
        body: "One connected system that captures, follows up, and closes on autopilot.",
      },
    ],
  },
  faq: {
    title: "Pricing questions.",
    items: [
      { q: "Do I need to commit long-term?", a: "No. There are no long-term contracts. You can cancel anytime." },
      { q: "Are there any setup fees?", a: "No setup fees. Onboarding is included with every plan." },
      { q: "Can I upgrade later?", a: "Yes. You can upgrade your plan at any time as your business grows." },
      { q: "What industries is this built for?", a: "Coaches, consultants, info product creators, and local service businesses in the US and Canada." },
      { q: "What's included in onboarding?", a: "A full setup call where we configure your system. You're operational within 7 days." },
      { q: "How does usage-based billing work?", a: "Your platform subscription is fixed. Communication usage like SMS, email, and calls is billed separately based on what you actually use." },
    ],
  },
  closing: {
    title: "Start building a system that pays for itself.",
    subtitle: "Book a demo and we'll help you find the right plan based on your goals.",
    cta: { label: "Book a Demo", href: "/get-started" },
  },
} as const;

// ── Page: Partners (/partners) ──────────────────────────────────────
export const partnersPage = {
  hero: {
    tag: "Partner Program",
    title: "Grow faster by partnering with Generate CRM.",
    subtitle:
      "Join our partner program and help businesses close more deals, while you earn recurring revenue and scale your own growth.",
    cta: { label: "Apply to Partner", href: "/get-started" },
  },
  types: [
    {
      icon: "agency",
      name: "Agency Partners",
      desc: "Digital marketing agencies that add Generate CRM to their client stack and manage it on the client's behalf.",
      benefits: [
        "Manage multiple client accounts from a single dashboard",
        "Deliver automated follow-up and pipeline management as a service",
        "Increase client retention through measurable results",
        "White-glove onboarding support for your clients",
      ],
      earn: "Revenue share on every active client account you manage.",
    },
    {
      icon: "reseller",
      name: "Reseller Partners",
      desc: "Individuals or small businesses who sell Generate CRM as their own solution and build recurring revenue.",
      benefits: [
        "Sell under your own positioning and packaging",
        "Earn recurring revenue from every active client",
        "Full control over your sales approach and pricing",
        "Sales training, demo scripts, and dedicated support",
      ],
      earn: "Revenue share on every active client for the lifetime of their subscription.",
    },
    {
      icon: "referral",
      name: "Referral Partners",
      desc: "Coaches, consultants, or course creators who refer peers to Generate CRM in exchange for commission. No fulfillment required.",
      benefits: [
        "No fulfillment or onboarding responsibility",
        "Simple referral tracking dashboard",
        "Co-marketing materials to share",
        "Earn commissions as long as referrals stay active",
      ],
      earn: "Recurring or one-time commission per referred client.",
    },
  ],
  steps: {
    title: "How it works.",
    items: [
      { num: "01", body: "Apply to join the partner program using the form on this page." },
      { num: "02", body: "Get access to the platform, sales materials, and onboarding resources." },
      { num: "03", body: "Start onboarding or referring clients." },
      { num: "04", body: "Earn recurring revenue as your clients grow." },
    ],
  },
  closing: {
    title: "Turn your network into a scalable revenue engine.",
    subtitle:
      "Join the Generate CRM partner program and grow your business with a proven system.",
    cta: { label: "Apply to Partner", href: "/get-started" },
  },
} as const;

// ── Page: About (/about-us) ─────────────────────────────────────────
export const aboutPage = {
  hero: {
    tag: "About Generate CRM",
    title: "Built to help businesses close more deals and grow faster.",
    subtitle:
      "Generate CRM was created to solve one problem: businesses lose leads and revenue because their systems are slow, disconnected, and manual.",
    cta: { label: "Book a Demo", href: "/get-started" },
  },
  origin: {
    title: "Why we built Generate CRM.",
    paragraphs: [
      "We saw too many businesses struggling with the same challenges. Leads were coming in, but follow-ups were delayed, missed, or manually sent three days too late.",
      "Conversations were happening in five different places: email, Instagram DMs, text, WhatsApp, and the phone. Nothing was connected. Money was slipping through the cracks every single day.",
      "At the same time, these businesses were paying for six or seven separate tools that were never designed to work together.",
      "We built Generate CRM to fix this. One platform that brings everything together and helps coaches, consultants, course creators, and local businesses capture leads, respond instantly, and close more deals, without adding complexity, cost, or headcount.",
    ],
  },
  mission:
    "Our mission is to give coaches, consultants, info product creators, and local businesses a single, powerful system that captures leads, automates follow-up, and closes deals, so they can grow without adding complexity, cost, or headcount.",
  different: {
    title: "What makes us different.",
    items: [
      { icon: "sparkle", title: "Premium brand", body: "A visual identity above the standard white-label aesthetic." },
      { icon: "rocket", title: "Done-for-you onboarding", body: "Operational within 7 days, not months of configuration." },
      { icon: "target", title: "Segment-specific setup", body: "A coach and a roofing company get different starting setups." },
      { icon: "heart", title: "Human-centered support", body: "Real help at the moments that matter most." },
    ],
  },
  segments: {
    title: "Who we help.",
    items: [
      { icon: "target", name: "Coaches" },
      { icon: "briefcase", name: "Consultants" },
      { icon: "graduation-cap", name: "Info Creators" },
      { icon: "store", name: "Local Businesses" },
    ],
  },
  approach: {
    title: "Our approach.",
    body: "Instead of adding more tools, we simplify your workflow. Instead of manual work, we automate the key processes that drive revenue. Instead of confusion, we give you clarity and control.",
  },
  closing: {
    title: "See how Generate CRM can work for your business.",
    subtitle: "Book a demo and we'll walk you through how the system fits your goals.",
    cta: { label: "Book Your Demo", href: "/get-started" },
  },
} as const;

// ── Page: Get Started (/get-started) ────────────────────────────────
export const getStartedPage = {
  hero: {
    tag: "Book Your Strategy Session",
    title: "30 minutes. Your business. Real answers.",
    subtitle:
      "This isn't a product demo. It's a strategy session. We look at your current setup, find the gaps, and show you exactly how Generate CRM fits, or tell you honestly if it doesn't.",
  },
  qualifier:
    "Before you book: this call works best if you're actively trying to grow, coaching, consulting, selling courses, or running a local service business in the US or Canada. If that's you, pick a time below.",
  booking: {
    url: site.bookingUrl,
    fallback: "If the calendar doesn't load, schedule a call at your preferred time here.",
  },
  onCall: {
    title: "What happens on the call.",
    note: "This is not a sales call. It is a strategy session focused on your growth.",
    steps: [
      "We understand your business model and biggest growth challenge",
      "We show you how Generate CRM maps to your specific workflow",
      "We build a simple pipeline or automation live during the call",
      "You leave with a clear picture of what's possible and what next steps look like",
    ],
  },
  forYou: {
    title: "This is for you if",
    items: [
      "You want more leads and better follow-up without adding staff",
      "You're losing deals because your response time is too slow",
      "You're using multiple disconnected tools and spending too much on subscriptions",
      "You run a coaching, consulting, info product, or local service business",
      "You want a system already set up for your business type",
    ],
  },
  notForYou: {
    title: "This is not for you if",
    items: [
      "You're not actively trying to grow your business",
      "You're looking for a basic contact tracker with no automation",
      "You're not ready to improve your current sales process",
    ],
  },
  walkAway: {
    title: "What you walk away with.",
    items: [
      "A clear understanding of where your lead and sales process is breaking down",
      "A live demo of Generate CRM built around your specific business",
      "An honest answer on whether Generate CRM is the right fit",
      "A concrete plan for getting set up within 7 days if you move forward",
    ],
  },
  closing: {
    title: "Ready to build a system that works for you?",
    subtitle:
      "Book your strategy session and take the first step toward closing more deals.",
    cta: { label: "Book Your Demo", href: "/get-started" },
    urgency: "Limited strategy session slots available each week.",
  },
} as const;
