# GENERATE CRM — Claude Code Project Brief

> Paste this file as `CLAUDE.md` in your project root. Claude Code reads it automatically on every session.

---

## WHAT YOU ARE BUILDING

A **marketing website** for Generate CRM — a white-label GoHighLevel CRM platform targeting coaches, consultants, info product creators, and local businesses in the US and Canada.

**Live reference site:** https://generatecrm.co (current site — we are rebuilding it)
**Design language reference:** https://keepgenerating.com (dark aesthetic, results-first, bold typography)
**Demo homepage:** See GenerateCRM_Homepage_Demo.html for the exact visual direction

The primary conversion action across every page is **Book a Demo** — everything leads there.

---

## TECH STACK

```
Framework:     Next.js 14 (App Router)
Language:      TypeScript
Styling:       Tailwind CSS
Animations:    Framer Motion
Icons:         Lucide React
Font:          Poppins (Google Fonts) — weights 300, 400, 500, 600, 700, 800, 900
Deployment:    Vercel (recommended)
```

**Bootstrap command:**
```bash
npx create-next-app@latest generate-crm --typescript --tailwind --eslint --app --src-dir
cd generate-crm
npm install framer-motion lucide-react
```

---

## DESIGN SYSTEM

### Colors — Tailwind config extension

```js
// tailwind.config.ts
colors: {
  purple:  '#6F00CD',
  magenta: '#F900FD',
  bg: {
    primary:   '#0A0A0A',
    secondary: '#111111',
    card:      '#161616',
    card2:     '#1C1C1C',
  },
  border: {
    DEFAULT: 'rgba(255,255,255,0.07)',
    purple:  'rgba(111,0,205,0.35)',
  },
  text: {
    primary: '#FFFFFF',
    sub:     '#BBBBBB',
    muted:   '#666666',
  },
}
```

### CSS Variables (globals.css)

```css
:root {
  --purple:  #6F00CD;
  --magenta: #F900FD;
  --bg:      #0A0A0A;
  --bg2:     #111111;
  --bg3:     #161616;
  --bg4:     #1C1C1C;
  --border:  rgba(255,255,255,0.07);
  --border-purple: rgba(111,0,205,0.35);
  --white:   #FFFFFF;
  --sub:     #BBBBBB;
  --muted:   #666666;
}
```

### Typography

```css
/* Import in app/layout.tsx */
import { Poppins } from 'next/font/google'
const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300','400','500','600','700','800','900']
})

/* Scale */
--text-hero:    clamp(38px, 4.5vw, 58px)   font-weight: 800
--text-h2:      clamp(28px, 3.5vw, 44px)   font-weight: 800
--text-h3:      24px                         font-weight: 700
--text-body:    16-17px                      font-weight: 300
--text-label:   11-12px uppercase            font-weight: 700 letter-spacing: 0.12em
--text-button:  14-15px                      font-weight: 600
--text-micro:   12px                         font-weight: 300
```

### Button Styles

```tsx
// Primary — purple fill
<button className="bg-purple text-white font-semibold text-sm px-7 py-3.5 rounded-lg hover:bg-[#5a00aa] transition-all">
  Book a Demo →
</button>

// Ghost — white border on dark
<button className="bg-transparent text-white font-medium text-sm px-7 py-3.5 rounded-lg border border-white/20 hover:border-white/40 hover:bg-white/5 transition-all">
  See How It Works ↓
</button>

// White on Purple — for CTA sections with purple bg
<button className="bg-white text-purple font-semibold text-sm px-7 py-3.5 rounded-lg hover:bg-purple-50 transition-all">
  Book a Demo →
</button>
```

### Spacing

```
Section padding:     py-24 (96px) desktop / py-16 (64px) mobile
Container:           max-w-6xl mx-auto px-8
Card gap:            gap-4 (16px) to gap-6 (24px)
Card inner padding:  p-8 (32px) desktop / p-6 (24px) mobile
```

---

## PROJECT FILE STRUCTURE

```
src/
├── app/
│   ├── layout.tsx              ← Root layout (font, metadata, nav, footer)
│   ├── page.tsx                ← Homepage (/)
│   ├── solution/page.tsx       ← Solutions page
│   ├── industries/page.tsx     ← Industries page
│   ├── pricing/page.tsx        ← Pricing page
│   ├── partners/page.tsx       ← Partners page
│   ├── about-us/page.tsx       ← About page
│   ├── get-started/page.tsx    ← Demo booking page
│   └── globals.css
│
├── components/
│   ├── layout/
│   │   ├── AnnouncementBar.tsx
│   │   ├── Navigation.tsx
│   │   └── Footer.tsx
│   │
│   ├── ui/
│   │   ├── Button.tsx          ← Primary, Ghost, White variants
│   │   ├── SectionTag.tsx      ← Purple eyebrow pill label
│   │   ├── SectionTitle.tsx    ← Tag + H2 + optional subtitle
│   │   └── FadeIn.tsx          ← Framer Motion scroll reveal wrapper
│   │
│   └── sections/
│       ├── home/
│       │   ├── Hero.tsx
│       │   ├── StatsBar.tsx
│       │   ├── BadgesBar.tsx
│       │   ├── SystemSteps.tsx
│       │   ├── AudienceTabs.tsx
│       │   ├── FeaturesGrid.tsx
│       │   ├── ToolComparison.tsx
│       │   ├── SegmentOutcomes.tsx
│       │   ├── HowItStarts.tsx
│       │   ├── CtaBlock.tsx
│       │   ├── FaqAccordion.tsx
│       │   └── PipelineDashboard.tsx  ← Hero visual mockup
│       │
│       ├── solutions/
│       │   └── SolutionSection.tsx    ← Reusable per-solution block
│       │
│       ├── industries/
│       │   └── IndustrySection.tsx    ← Reusable per-industry block
│       │
│       └── pricing/
│           ├── PricingCards.tsx
│           └── UsageTable.tsx
│
└── lib/
    ├── content.ts              ← All copy/data (no copy hardcoded in components)
    └── types.ts
```

---

## GLOBAL ELEMENTS

### AnnouncementBar.tsx

```
Background:  #6F00CD (purple)
Text:        "✦  Now serving coaches, consultants, info creators & local businesses in US & Canada  ✦"
Font:        Poppins 500, 12px, white
Height:      36px
Mobile:      Hide on screens < 768px
```

### Navigation.tsx

```
Background:  rgba(10,10,10,0.92) with backdrop-blur-md
Position:    sticky top-0 z-50
Border:      border-b border-white/7
Height:      64px

LEFT:   Logo — purple rounded-square G icon + "GENERATE CRM" wordmark (Poppins 800)
CENTER: Links — Solutions | Industries | Pricing | Partners | About
        Font: Poppins 400, 14px, color #BBBBBB, hover: #FFFFFF
RIGHT:  "Book a Demo" primary button → /get-started

MOBILE: Hamburger icon right side. Book a Demo button stays visible always.
        Hamburger opens full-screen overlay with nav links + CTA at bottom.

On scroll: add box-shadow: 0 2px 12px rgba(0,0,0,0.3)
```

### Footer.tsx

```
Structure:
  1. Pre-footer CTA row (dark bg, centered)
     - Label: "Stop Losing Leads. Start Closing More Deals."
     - CTA: White-on-purple "Book a Demo →" button

  2. Footer columns (bg #111111)
     - Col 1 (2/5): Logo + tagline + markets served
     - Col 2 (1/5): Platform — Solutions, Industries, Pricing, Partners
     - Col 3 (1/5): Company — About, Book a Demo, Get in Touch, Help Center
     - Col 4 (1/5): Legal — Privacy Policy, Terms of Service, Cookie Policy

  3. Copyright bar (bg #0A0A0A)
     - Left: "© 2026 Generate CRM™. All rights reserved."
     - Right: Green dot + "US & Canada · generatecrm.co"
```

---

## PAGE 1: HOMEPAGE (/)

Build these sections in exact order:

---

### SECTION 1 — HERO

```
Layout:  Two-column grid — 55% left (copy) / 45% right (visual)
Background: #0A0A0A with radial gradient: rgba(111,0,205,0.15) from center-left

LEFT COLUMN (top to bottom):
  EYEBROW:      Small dot (magenta) + "The Revenue System for Service Businesses"
                Font: Poppins 600, 12px, uppercase, #BBBBBB

  H1:           "Your leads deserve a system that never sleeps."
                Font: Poppins 800, clamp(38px,4.5vw,58px), white
                "never sleeps." styled in color: #F900FD (magenta) + italic

  SUBHEADLINE:  "Generate CRM is the all-in-one revenue system built for coaches,
                consultants, course creators, and local businesses. Capture leads,
                automate follow-up, manage your pipeline, and close more deals —
                without duct-taping five tools together."
                Font: Poppins 300, 17px, #BBBBBB, line-height 1.75

  BUTTONS:      Primary: "Book a Demo →" → /get-started
                Ghost:   "See How It Works ↓" → scrolls to #system

  MICROCOPY:    "No credit card required · Setup support included"
                Font: Poppins 300, 12px, #666

RIGHT COLUMN:
  PipelineDashboard component — see specs below
```

#### PipelineDashboard.tsx (Hero Visual)

```
Outer container: bg #161616, border 1px solid rgba(255,255,255,0.07),
                 border-radius 16px, padding 20px
                 Top edge: 2px gradient line from #6F00CD → #F900FD

Fake browser topbar: 3 dots (red/yellow/green) + title "Generate CRM — Pipeline View"

4-column pipeline board showing:
  Col 1 "New Lead":    2 cards
    - Sarah Chen / Business Coach / "New" tag (purple bg)
    - Mark Torres / HVAC Service / "New" tag

  Col 2 "Demo Booked": 2 cards
    - Priya Sharma / Course Creator / "Booked" tag (green bg)
    - James Wright / Consultant / "Booked" tag

  Col 3 "Proposal":   1 card
    - Amy Liu / Real Estate / "Proposal" tag (magenta bg)

  Col 4 "Closed ✓":   2 cards
    - Carlos Mendez / Dental Practice / "Won" tag (yellow bg)
    - Fitness Studio / Local Business / "Won" tag

Bottom automation row:
  Pulsing purple dot (CSS animation) +
  "Automation running: SMS sent to Sarah Chen — 42 seconds after form submit"
```

---

### SECTION 2 — STATS BAR

```
Background: #111111
Border:     top + bottom 1px solid rgba(255,255,255,0.07)
Layout:     5 items with dividers between them (1px vertical lines)

Stat 1:  "15+"       / "Platform Features"
Stat 2:  "Day 1"     / "Operational After Onboarding"
Stat 3:  "4"         / "Segments Served"
Stat 4:  "US & CA"   / "Markets Covered"
Stat 5:  "7+"        / "Tools Replaced"

Number style: Poppins 800, 38px, accent number in #6F00CD
Label style:  Poppins 700, 11px, uppercase, letter-spacing 0.08em, #666
```

---

### SECTION 3 — TRUST BADGES

```
Background: #111111
Border:     bottom 1px solid rgba(255,255,255,0.07)
Layout:     4 badges centered horizontally, gap-10

Badge 1: Meta Business Partner (blue icon)
Badge 2: Google Partner (G icon, white bg)
Badge 3: GoHighLevel Infrastructure (orange-red icon)
Badge 4: Clutch Verified 4.9 / 5.0

Badge style: icon + text stack. opacity-50, hover:opacity-100
```

---

### SECTION 4 — 4-STEP SYSTEM

```
id="system"   ← Required for hero CTA scroll anchor
Background:   #0A0A0A

TITLE:
  Tag:   "The Generate CRM Growth System"
  H2:    "Four steps. One system. Zero leads lost."
  Sub:   "Every client who signs up gets a pre-built revenue system configured
          for their business — not a blank CRM they have to figure out."

GRID:
  4-column grid (1px gap, border, border-radius 16px, overflow hidden)
  Each card: bg #111111, padding 32px, hover:bg-#161616

  Card 1 — 01 / Capture
    "Every lead from every source lands in one place — forms, ads, calls,
    funnels, DMs. Nothing slips through."
    → purple arrow between cards on desktop

  Card 2 — 02 / Automate
    "The system follows up for you. SMS, email, and calls fire within seconds
    of a lead coming in. No manual outreach required."

  Card 3 — 03 / Manage
    "See every deal, every conversation, and every stage in one clean visual
    pipeline. You always know exactly where your revenue stands."

  Card 4 — 04 / Close & Scale
    "More conversations become customers. More revenue without more overhead.
    This is what scaling without hiring looks like."

Step number style: Poppins 900, 42px, rgba(111,0,205,0.25)
```

---

### SECTION 5 — AUDIENCE SELECTOR (TABS)

```
Background: #111111

TITLE:
  Tag: "Built For Your Business"
  H2:  "Stop looking for a CRM that fits. This one was built for you."

TABS (JS toggle, default: Coaches):
  🎯 Coaches | 💼 Consultants | 📚 Course Creators | 🏢 Local Businesses

  Active tab:    border-bottom: 2px solid #6F00CD, color: white
  Inactive tab:  color: #666, hover: #BBBBBB

CONTENT PANEL (2-col: left=copy, right=4 stat cards):

  — COACHES TAB —
  Hook:  "Stop chasing bookings. Let your system fill your calendar."
  Body:  "Discovery calls book themselves. Follow-up runs while you're coaching.
          Your pipeline shows every lead, every stage, every opportunity —
          without you touching it."
  Uses:
    • Auto-booking discovery calls from social media traffic
    • Automated follow-up after webinars and lead magnets
    • Pipeline tracking from first DM to enrolled client
    • Broadcast campaigns to past clients for re-enrollment
    • Testimonial collection automation post-program
  Link: "See how it works for Coaches →" → /industries#coaches

  Stat cards:
    "Auto"   / Discovery calls book without manual outreach
    "24/7"   / Follow-up runs even while you're coaching
    "1"      / Inbox for all conversations — SMS, email, DMs
    "Day 7"  / Your system is live and running

  — CONSULTANTS TAB —
  Hook: "Never let a warm lead go cold again."
  Body: "Proposals get followed up automatically. Warm leads stay engaged for months.
         Your revenue stops depending on your memory and starts running on a system."
  Uses:
    • Automated nurture sequences for warm leads
    • Post-proposal follow-up triggered automatically
    • Pipeline tracking across all active opportunities
    • Re-engagement broadcasts to past clients
    • Unified inbox for all client communications
  Link: "See how it works for Consultants →" → /industries#consultants

  Stat cards:
    "0"     / Warm leads lost to slow follow-up
    "Auto"  / Proposals followed up — no manual chasing
    "Full"  / Pipeline visibility from intro to close
    "1"     / Inbox for email, calls, SMS, WhatsApp

  — COURSE CREATORS TAB —
  Hook: "Turn your audience into buyers — without another launch."
  Body: "Your list becomes a revenue engine. Evergreen funnels sell your courses.
         Abandoned checkouts get recovered. You stop living launch-to-launch."
  Uses:
    • Database broadcasts to your full subscriber list
    • Evergreen funnels that sell without manual launches
    • Checkout abandonment recovery sequences
    • Pipeline for high-ticket program applicants
    • AI assistant to qualify leads and book calls 24/7
  Link: "See how it works for Course Creators →" → /industries#creators

  Stat cards:
    "Evergreen" / Sales run without launches or manual effort
    "Auto"      / Abandoned checkouts recovered automatically
    "Full"      / List segmentation and broadcast capability
    "AI"        / Qualifies leads and books calls while you sleep

  — LOCAL BUSINESSES TAB —
  Hook: "Respond instantly. Book more jobs. Get more reviews."
  Body: "Missed calls become booked jobs within 60 seconds. Reviews write themselves
         after every appointment. Your calendar fills and your reputation builds —
         automatically."
  Uses:
    • Instant lead response — SMS within 60 seconds
    • Missed call text-back so no lead goes cold
    • Appointment booking with automated reminders
    • Review requests fired after every completed job
    • Database reactivation broadcasts for seasonal promos
  Link: "See how it works for Local Businesses →" → /industries#local

  Stat cards:
    "60s"   / Response time after a new lead comes in
    "Auto"  / Review requests after every job — no manual work
    "0"     / Missed calls that go cold unanswered
    "Full"  / Calendar fills without manual back-and-forth
```

---

### SECTION 6 — FEATURES GRID

```
Background: #0A0A0A (dark — creates contrast after the lighter sections)

TITLE:
  Tag: "Everything You Need"
  H2:  "One platform. Fifteen tools retired."
  Sub: "Every feature built around one goal — helping you capture more leads,
        automate your follow-up, and close more deals."

GRID: 3 columns, 1px gap, border, border-radius 16px, overflow hidden

Feature cards (bg #111111, hover:bg #161616):
  Bottom accent line: 2px gradient #6F00CD → #F900FD (opacity 0 → 1 on hover)

  1. CRM & Pipeline Management
     "See every lead, deal, and conversation in a visual board that tells you
     what to do next. No spreadsheets. No guessing."

  2. Marketing Automation
     "Follow-up sequences run automatically via SMS, email, and calls. Every
     lead gets the same fast, consistent response — online or off."

  3. Funnels & Website Builder
     "High-converting landing pages without a developer. Built, hosted, and
     connected to your pipeline — all in one place."

  4. Unified Messaging Hub
     "SMS, email, Instagram DMs, calls, and chat — one inbox. Stop switching
     tabs. Start responding faster than your competition."

  5. AI Assistant
     "Handles first responses, qualifies leads, and books appointments 24/7 —
     even when you're not available. Your business never sleeps."

  6. Review Generation
     "After every job, session, or appointment — review requests fire
     automatically. Your reputation builds itself."

Each card has: 40x40 icon container (bg rgba(111,0,205,0.15), border border-purple-40,
               border-radius 10px), feature name (Poppins 700 15px), body (Poppins 300 13px #BBBBBB)
```

---

### SECTION 7 — TOOL COMPARISON

```
Background: #111111

TITLE:
  Tag: "Replace Your Stack"
  H2:  "You're paying for six tools that don't work together."
  Sub: "Mailchimp. Calendly. ClickFunnels. An SMS tool. A review platform. That's
        $300–$600/month stitched together with Zapier automations that break at 2am."

LAYOUT: 2-column grid

LEFT COLUMN (bg #161616, border, rounded-2xl):
  Header: "YOUR CURRENT STACK" / "Multiple disconnected tools"
  Items (each: tool name + monthly cost + red ✗):
    ✗ CRM Tool (HubSpot / Pipedrive)                $50–300/mo
    ✗ Email (Mailchimp / ActiveCampaign)            $20–100/mo
    ✗ Appointment Booking (Calendly / Acuity)       $16/mo
    ✗ Funnel Builder (ClickFunnels)                 $97/mo
    ✗ SMS Platform                                  $25/mo
    ✗ Review Management                             $49/mo
    ✗ Zapier (to connect them all)                  $20–50/mo
  Total row (red bg): "Monthly Spend" / "$277–642/mo" in #E24B4A

RIGHT COLUMN (bg #6F00CD, border, rounded-2xl):
  Header: "GENERATE CRM" / "Everything Connected"
  Checkmark list (green ✓, #34D399):
    ✓ CRM & Pipeline Management — included
    ✓ Marketing Automation (SMS + Email) — included
    ✓ Appointment Booking — included
    ✓ Funnel & Website Builder — included
    ✓ Unified Messaging Hub — included
    ✓ Review Generation — included
    ✓ AI Assistant — included
    ✓ Social Media Planner — included
    ✓ Mobile App — included
  Bottom row (green bg): "One Subscription" / "See Pricing →" linking to /pricing
```

---

### SECTION 8 — SEGMENT OUTCOMES

```
Background: #0A0A0A

TITLE:
  Tag: "Real Results"
  H2:  "What changes when everything works together."

GRID: 4 equal columns, gap-4

Outcome cards (bg #161616, border, rounded-2xl, hover:translateY(-4px)):
  Top band: solid purple (#6F00CD), padding 18px 20px, audience name white Poppins 700 13px
  Card body: 3 outcome bullet points with purple ✓ prefix

  🎯 Coaches:
    ✓ Discovery calls fill up automatically
    ✓ Follow-up runs while you're coaching
    ✓ Testimonials collect after every program

  💼 Consultants:
    ✓ No lead goes cold between deliveries
    ✓ Proposals auto-follow-up without effort
    ✓ Past clients re-engage on cue

  📚 Course Creators:
    ✓ Database converts without launches
    ✓ Abandoned carts get recovered
    ✓ High-ticket applications on autopilot

  🏢 Local Businesses:
    ✓ Missed calls become booked jobs
    ✓ Reviews build your reputation daily
    ✓ Slow seasons reactivated in one send
```

---

### SECTION 9 — HOW IT STARTS

```
Background: #111111

TITLE:
  Tag: "Getting Started"
  H2:  "You'll be operational in 7 days. Here's how."

GRID: 3 columns, gap-6
  Connecting line between cards: horizontal 1px gradient (purple → magenta) at step badge height

Step cards (bg #161616, border border-purple-35, rounded-2xl, hover:border-purple-60):
  Step badge: 52x52 purple circle, number Poppins 800 18px white

  01 / Book Your Demo
  "A 30-minute strategy session. We look at your current setup, find the gaps,
  and show you exactly how Generate CRM fits your business — or tell you
  honestly if it doesn't."
  Note: "→ Takes 30 seconds to book"

  02 / We Build Your System
  "Pipeline stages, automation sequences, messaging templates, and integrations —
  all configured for your specific business type. You don't configure anything.
  We do."
  Note: "→ Zero technical work required from you"

  03 / Go Live on Day 7
  "Your system is live within the first week. Leads come in, follow-up goes out
  automatically, and your calendar starts filling. You start closing from day one."
  Note: "→ Operational within 7 days"

CLOSING LINE (below cards, centered):
  "You don't set this up. We do. You're live within the first week."
  Font: Poppins 600, 16px, #6F00CD
```

---

### SECTION 10 — CTA BLOCK

```
Background: #6F00CD (solid purple, full-width)
Text:       centered

H2:    "Ready to stop losing leads?"
       Poppins 800, clamp(32px,4vw,50px), white

Sub:   "Book a 30-minute strategy session. We'll show you exactly how
        Generate CRM fits your business — or tell you honestly if it doesn't."
       Poppins 300, 17px, rgba(255,255,255,0.75), max-width 520px

CTA:   White-on-purple button: "Book a Demo →" → /get-started

Trust: "No commitment. No credit card. Just a real conversation about your business."
       Poppins 300, 12px, rgba(255,255,255,0.45)
```

---

### SECTION 11 — FAQ

```
Background: #0A0A0A
Container:  max-w-3xl mx-auto

TITLE:
  Tag: "FAQ"
  H2:  "Got questions? Good."

ACCORDION (5 items, click to expand, one open at a time):
  Row style: bg #111111, border, rounded-lg, Poppins 600 15px
  Answer style: Poppins 300 14px, #BBBBBB
  + icon rotates to × on open

  Q1: "I already use a CRM. Why would I switch?"
  A1: "Most CRMs track contacts. Generate CRM runs your entire sales process —
      follow-up, booking, pipeline, SMS, and automation all connected. If your
      current CRM doesn't do all of that automatically, you don't have a CRM.
      You have a contact list."

  Q2: "Is Generate CRM built on GoHighLevel?"
  A2: "Yes, and we're upfront about it. Generate CRM is built on GoHighLevel's
      infrastructure — the same engine powering thousands of platforms worldwide.
      What we add is everything GHL doesn't come with: done-for-you setup,
      segment-specific configuration for your business type, and real human support.
      The platform is GHL. The system is ours."

  Q3: "How long does setup actually take?"
  A3: "Seven days. We handle everything — pipeline stages, automation sequences,
      integrations, and your first campaigns. You show up for the onboarding call
      and tell us about your business. We build the rest."

  Q4: "Do I need technical skills?"
  A4: "No. You don't configure anything. Your job is to show up for the onboarding
      call and tell us about your business. We handle the setup. You handle the growth."

  Q5: "What if Generate CRM isn't the right fit?"
  A5: "We'll tell you on the demo call. If Generate CRM isn't right for your situation,
      we'll say so — and point you toward what is. We'd rather lose a sale than onboard
      the wrong client."
```

---

## PAGE 2: SOLUTIONS (/solution)

```
HERO:
  Tag: "Solutions"
  H1:  "Solutions Built Around How You Actually Sell."
  Sub: "You don't have a software problem. You have a follow-up problem,
        a pipeline problem, or a lead capture problem. Generate CRM is built
        to fix all three — in one system."
  CTA: "Book a Demo →"

INTRO:
  H2:  "One Platform. Multiple Growth Solutions."
  Body: "Most businesses don't lose leads because they're bad at sales. They lose
         leads because the follow-up never happened, the pipeline was invisible, or
         the first response came four hours too late. Generate CRM solves all of it."

6 SOLUTION SECTIONS (alternating left/right layout):
  Each: Number | Hook line | Description | 3 benefit bullets | Graphic placeholder

  01 — Lead Capture System
  Hook: "Leads come from everywhere. They shouldn't go everywhere."
  Desc: "Capture every lead from your website, funnels, ads, and calls in one place
         so nothing slips through the cracks."
  Benefits:
    ✓ Never miss a new lead — no matter where it comes from
    ✓ Instant lead tracking and organization from the moment of contact
    ✓ Seamless integration with all your existing marketing channels
  Layout: Image left, Copy right

  02 — Automated Follow-Up System
  Hook: "Your follow-up should run while you sleep."
  Desc: "Automatically follow up with every lead using SMS, email, and calls so you
         respond instantly and stay top of mind — without lifting a finger."
  Benefits:
    ✓ Respond to leads within 60 seconds — before your competition does
    ✓ Increase conversion rates without adding manual work to your day
    ✓ Stay consistent with every single prospect, every single time
  Layout: Copy left, Image right

  03 — Sales Pipeline Management
  Hook: "If you can't see your pipeline, you can't manage your revenue."
  Desc: "Track every deal and conversation inside a clear visual pipeline so you
         always know exactly where your revenue stands — and what to do next."
  Benefits:
    ✓ Full visibility into every stage of your sales process
    ✓ Move deals forward with clarity — no more lost opportunities
    ✓ Never lose track of a hot opportunity again
  Layout: Image left, Copy right

  04 — Appointment Booking System
  Hook: "Stop playing calendar ping-pong."
  Desc: "Let leads book appointments instantly while reducing no-shows with automated
         reminders and confirmations — all without manual scheduling."
  Benefits:
    ✓ More booked appointments from the same lead volume
    ✓ Automated reminders that cut no-show rates significantly
    ✓ Seamless scheduling experience your prospects actually complete
  Layout: Copy left, Image right

  05 — Messaging and Communication Hub
  Hook: "All your conversations. One inbox."
  Desc: "Manage SMS, email, calls, and chats in one inbox so your team can respond
         faster, stay organized, and never miss a message."
  Benefits:
    ✓ Every conversation in one place — SMS, email, calls, chat, DMs
    ✓ Faster response times that directly increase your conversion rate
    ✓ Better customer experience from first contact through close
  Layout: Image left, Copy right

  06 — Revenue and Growth Automation
  Hook: "Your business should run systems, not people."
  Desc: "Automate repetitive tasks and workflows so your business can scale without
         adding more staff — and without you manually managing every step."
  Benefits:
    ✓ Save hours every week on tasks that should already be automatic
    ✓ Increase team efficiency across every part of your operation
    ✓ Scale your business without scaling your headcount
  Layout: Copy left, Image right

CLOSING CTA:
  H2:  "See How Generate CRM Can Transform Your Business"
  Sub: "Book a demo and we'll show you exactly how to capture more leads,
        automate your follow-ups, and close more deals."
  CTA: "Book Your Demo →"
```

---

## PAGE 3: INDUSTRIES (/industries)

```
HERO:
  Tag: "Industries"
  H1:  "Built for the Businesses That Run on Leads, Sales, and Follow-Ups."
  Sub: "Generate CRM is purpose-built for four types of businesses. Each one gets
        a pre-configured system designed around how they actually sell."
  CTA: "Book a Demo →"

INTRO:
  H2:  "One System. Adapted to Your Business Type."
  Body: "Every business has the same core problem: leads come in, but follow-up is
         slow, inconsistent, or missed entirely. Generate CRM adapts to how you sell —
         with pre-built pipelines, automation sequences, and onboarding designed for
         your specific workflow."

4 INDUSTRY SECTIONS with anchor IDs:

  id="coaches" — 🎯 COACHES
  Hook:  "Stop chasing your calendar. Let it fill itself."
  Pains (displayed as problem statements):
    • Discovery call bookings are inconsistent — leads go cold before they get on a call
    • Follow-up after webinars or social media is manual and often abandoned
    • No central view of where each prospect is in the pipeline
    • Spending more time on admin than on actual coaching
    • Testimonials and social proof are hard to collect and organize
  Body:  "You built a coaching business to help people — not to spend your afternoons
          chasing DMs. Generate CRM automates the entire back-end of your coaching
          business so you can spend your time doing what you're actually paid for."
  Uses:
    • Auto-booking discovery calls from social media traffic and lead magnets
    • Automated follow-up sequences after webinars, workshops, or lead magnet downloads
    • Pipeline tracking for every prospect from first contact to enrolled client
    • Broadcast campaigns to past clients for program re-enrollment or new offers
    • Testimonial and review collection automation after program completion
    • Mobile access to manage conversations and pipeline from anywhere
  Hook line: "Discovery calls book themselves. Follow-up runs while you're coaching."
  CTA: "See How Generate CRM Works for Coaches →" → /get-started

  id="consultants" — 💼 CONSULTANTS
  Hook:  "Your pipeline shouldn't depend on your memory."
  Pains:
    • Revenue is feast or famine — delivering OR hunting, rarely both
    • Follow-up with prospects is inconsistent during busy delivery periods
    • No systematic way to nurture warm leads who aren't ready to buy
    • Proposals get sent and then chased manually — or forgotten
    • Client communication scattered across email, WhatsApp, LinkedIn, and phone
  Body:  "The gap between delivering for current clients and hunting for the next
          engagement is where consultants lose money. Generate CRM closes that gap —
          your warm leads stay warm automatically, proposals get followed up, and your
          pipeline stays active even when you're heads-down on a client project."
  Uses:
    • Automated lead nurture sequences that keep prospects warm for weeks or months
    • Pipeline tracking from first contact through proposal and close
    • Post-proposal follow-up sequences triggered automatically
    • Unified inbox: all client and prospect communication in one place
    • Re-engagement broadcasts to past clients for referrals or new retainers
    • Reporting to show which channels and activities generate the most revenue
  Hook line: "Proposals follow up automatically. Your revenue pipeline runs even when you're on a client project."
  CTA: "See How Generate CRM Works for Consultants →" → /get-started

  id="creators" — 📚 INFO PRODUCT CREATORS
  Hook:  "You have an audience. You need a system that converts it."
  Pains:
    • Large email list with poor conversion — audience exists but no system to monetize it
    • No automated sequence to move free subscribers to paid customers
    • Launch-based revenue model is exhausting — living launch-to-launch
    • Abandoned carts and checkout drop-off with no recovery automation
    • No systematic way to upsell existing customers into higher-tier offers
  Body:  "You've done the hard part — you've built an audience. Now you need a system
          that converts that audience into consistent revenue without another exhausting
          launch cycle. Generate CRM turns your database into an evergreen sales machine."
  Uses:
    • Database broadcasts to message the full list or specific segments
    • Automated evergreen funnels that sell courses without manual launches
    • Checkout abandonment recovery sequences that recapture lost sales
    • Pipeline tracking for high-ticket program applicants and enrollment calls
    • Appointment booking for strategy calls and consultation upsells
    • AI assistant to handle initial DM responses and lead qualification
  Hook line: "Your list stops being a list and starts being a revenue engine."
  CTA: "See How Generate CRM Works for Info Creators →" → /get-started

  id="local" — 🏢 LOCAL BUSINESSES
  Hook:  "The lead came in. Did you respond in time?"
  Pains:
    • Leads from Google Ads not followed up within the critical first 5 minutes
    • Inbound calls during off-hours missed and never recovered
    • Google reviews are inconsistent — relying on customers to remember
    • Appointment no-show rates high because reminders aren't automated
    • Re-activating past customers requires a manual process that never gets done
  Body:  "Research shows that businesses that respond within 5 minutes are 21x more
          likely to close that deal. Most local businesses respond in hours — or not at
          all. Generate CRM fires your response the moment the lead hits."
  Uses:
    • Instant lead response: automated SMS within 60 seconds of a form submission
    • Missed call text-back: automatic SMS response when a call goes unanswered
    • Appointment booking with automated reminders and confirmation messages
    • Review generation: automated review requests sent after every completed job
    • Database reactivation: broadcast campaigns to past customers for seasonal promos
    • Pipeline tracking: visual board showing every active lead and its current stage
  Hook line: "Missed calls become booked jobs. Reviews build themselves. Your competitors are still doing this manually."
  CTA: "See How Generate CRM Works for Local Businesses →" → /get-started

INDUSTRIES FINAL CTA:
  H2:  "Your Industry Needs Better Follow-Up. Not More Tools."
  Sub: "Book a demo and we'll show you exactly how Generate CRM adapts to your business."
  CTA: "Book Your Demo →"
```

---

## PAGE 4: PRICING (/pricing)

```
NOTE: Exact dollar amounts are placeholders — Shawal will fill in.

HERO:
  Tag: "Pricing"
  H1:  "Simple Pricing Built to Help You Grow."
  Sub: "Choose the plan that fits your business and start capturing more leads,
        automating follow-ups, and closing more deals."
  Micro: "No long-term contracts · Cancel anytime"

INTRO:
  H2:  "One Platform. Multiple Options."
  Body: "Whether you're just getting started or scaling your business, Generate CRM
         gives you the tools and systems you need to grow without complexity."

4 PRICING CARDS (side by side, Growth = Most Popular):

  STARTER — [PRICE]/month
  "Perfect for small businesses and solopreneurs getting started with automation."
  Features:
    ✓ CRM and pipeline management
    ✓ Basic automation workflows
    ✓ Email and SMS integration
    ✓ Appointment booking
    ✓ Funnel and page builder
    ✓ Mobile app access
    ✓ Team access (limited users)
  CTA: "Book a Demo"

  GROWTH — [PRICE]/month — ★ MOST POPULAR (purple border + badge)
  "Best for growing businesses that want more automation and better control."
  Features:
    ✓ Everything in Starter
    ✓ Advanced automation workflows
    ✓ Full messaging hub (unified inbox)
    ✓ AI assistant features
    ✓ Reporting and analytics
    ✓ Database broadcasts
    ✓ Social media planner
    ✓ Review generation
  CTA: "Book a Demo" (primary button)

  PRO — [PRICE]/month
  "For businesses that want to scale faster with advanced tools."
  Features:
    ✓ Everything in Growth
    ✓ Unlimited funnels and users
    ✓ Power dialer for high-volume outbound
    ✓ Online payments
    ✓ Advanced reporting
    ✓ Priority support
    ✓ Custom workflows and setup assistance
  CTA: "Book a Demo"

  UNLIMITED — Custom Pricing
  "For agencies and multi-location businesses managing multiple clients."
  Features:
    ✓ Everything in Pro
    ✓ Unlimited sub-accounts or locations
    ✓ WhatsApp messaging
    ✓ AI appointment booking (fully automated)
    ✓ White-label capabilities
    ✓ Advanced customization
    ✓ Dedicated account support
  CTA: "Book a Demo"

USAGE-BASED ADD-ONS TABLE:
  Email:           $1.50 per 1,000 emails
  Local Numbers:   $5.00/month per number
  Toll-Free:       $10.00/month per number
  Outbound SMS:    $0.01 per segment
  Inbound SMS:     $0.001 per segment
  Outbound Calls:  $0.05/minute
  Inbound Calls:   $0.01/minute (local)

VALUE COMPARISON SECTION:
  H2:  "More Than a CRM. A Complete Revenue System."
  Body: "Generate CRM replaces multiple tools — saving you time, money, and the
         headache of stitching everything together."
  3 points: What you replace | What you save | What you gain

PRICING FAQ (6 items, accordion):
  1. Do I need to commit long-term? → No. Cancel anytime.
  2. Are there any setup fees? → No setup fees. Onboarding included.
  3. Can I upgrade later? → Yes. Any time.
  4. What industries is this built for? → Coaches, consultants, info creators, local businesses.
  5. What's included in onboarding? → Full setup call, operational within 7 days.
  6. How does usage-based billing work? → Platform subscription + communication usage billed separately.

FINAL CTA:
  H2:  "Start Building a System That Pays for Itself."
  Sub: "Book a demo and we'll help you find the right plan based on your goals."
  CTA: "Book a Demo →"
```

---

## PAGE 5: PARTNERS (/partners)

```
HERO:
  Tag: "Partner Program"
  H1:  "Grow Faster by Partnering with Generate CRM."
  Sub: "Join our partner program and help businesses close more deals — while
        you earn recurring revenue and scale your own growth."
  CTA: "Apply to Partner"

3 PARTNER TYPE CARDS:

  AGENCY PARTNERS
  "Digital marketing agencies that add Generate CRM to their client stack and
  manage it on the client's behalf."
  Benefits:
    • Manage multiple client accounts from a single dashboard
    • Deliver automated follow-up and pipeline management as a service
    • Increase client retention through measurable results
    • White-glove onboarding support for your clients
  Earn: Revenue share on every active client account you manage

  RESELLER PARTNERS
  "Individuals or small businesses who sell Generate CRM as their own solution
  and build recurring revenue."
  Benefits:
    • Sell under your own positioning and packaging
    • Earn recurring revenue from every active client
    • Full control over your sales approach and pricing
    • Sales training, demo scripts, and dedicated support
  Earn: Revenue share on every active client for the lifetime of their subscription

  REFERRAL PARTNERS
  "Coaches, consultants, or course creators who refer peers to Generate CRM
  in exchange for commission. No fulfillment required."
  Benefits:
    • No fulfillment or onboarding responsibility
    • Simple referral tracking dashboard
    • Co-marketing materials to share
    • Earn commissions as long as referrals stay active
  Earn: Recurring or one-time commission per referred client

4-STEP HOW IT WORKS:
  1. Apply to join the partner program (form on page)
  2. Get access to platform, sales materials, and onboarding resources
  3. Start onboarding or referring clients
  4. Earn recurring revenue as your clients grow

FINAL CTA:
  H2:  "Turn Your Network into a Scalable Revenue Engine."
  Sub: "Join the Generate CRM partner program and grow your business with a proven system."
  CTA: "Apply to Partner"
```

---

## PAGE 6: ABOUT (/about-us)

```
HERO:
  Tag: "About Generate CRM"
  H1:  "Built to Help Businesses Close More Deals and Grow Faster."
  Sub: "Generate CRM was created to solve one problem: businesses lose leads and
        revenue because their systems are slow, disconnected, and manual."
  CTA: "Book a Demo"

ORIGIN STORY:
  H2:  "Why We Built Generate CRM."
  Body paragraphs:
    "We saw too many businesses struggling with the same challenges. Leads were
    coming in — but follow-ups were delayed, missed, or manually sent three days
    too late."

    "Conversations were happening in five different places: email, Instagram DMs,
    text, WhatsApp, and the phone. Nothing was connected. Money was slipping
    through the cracks every single day."

    "At the same time, these businesses were paying for six or seven separate tools
    that were never designed to work together."

    "We built Generate CRM to fix this. One platform that brings everything together
    and helps coaches, consultants, course creators, and local businesses capture
    leads, respond instantly, and close more deals — without adding complexity, cost,
    or headcount."

MISSION CALLOUT (purple bg block):
  "Our mission is to give coaches, consultants, info product creators, and local
  businesses a single, powerful system that captures leads, automates follow-up,
  and closes deals — so they can grow without adding complexity, cost, or headcount."

WHAT MAKES US DIFFERENT (4 feature rows):
  Premium Brand:           "Visual identity above the standard white-label aesthetic."
  Done-For-You Onboarding: "Operational within 7 days — not months of configuration."
  Segment-Specific Setup:  "A coach and a roofing company get different starting setups."
  Human-Centered Support:  "Real help at the moments that matter most."

WHO WE HELP (4 segment cards):
  🎯 Coaches | 💼 Consultants | 📚 Info Creators | 🏢 Local Businesses

APPROACH SECTION:
  H2:  "Our Approach."
  Body: "Instead of adding more tools — we simplify your workflow.
         Instead of manual work — we automate the key processes that drive revenue.
         Instead of confusion — we give you clarity and control."

CTA:
  H2:  "See How Generate CRM Can Work for Your Business."
  Sub: "Book a demo and we'll walk you through how the system fits your goals."
  CTA: "Book Your Demo →"
```

---

## PAGE 7: GET STARTED (/get-started)

```
HERO:
  Tag: "Book Your Strategy Session"
  H1:  "30 Minutes. Your Business. Real Answers."
  Sub: "This isn't a product demo. It's a strategy session. We look at your current
        setup, find the gaps, and show you exactly how Generate CRM fits — or tell
        you honestly if it doesn't."

QUALIFIER (above calendar):
  "Before you book: This call works best if you're actively trying to grow —
  coaching, consulting, selling courses, or running a local service business in
  the US or Canada. If that's you, pick a time below."
  Font: Poppins Light, #BBBBBB

BOOKING WIDGET (iframe embed):
  URL: https://api.leadconnectorhq.com/widget/booking/Dou9wt5FOKxY2fubYean
  Embed as iframe, full width, min-height 700px
  If iframe doesn't load: show "Schedule a call at your preferred time below"
  with a direct link to the booking URL

WHAT HAPPENS ON THE CALL (4 steps):
  1. We understand your business model and biggest growth challenge
  2. We show you how Generate CRM maps to your specific workflow
  3. We build a simple pipeline or automation live during the call
  4. You leave with a clear picture of what's possible and what next steps look like
  Note: "This is not a sales call. It is a strategy session focused on your growth."

THIS IS FOR YOU IF:
  ✓ You want more leads and better follow-up without adding staff
  ✓ You're losing deals because your response time is too slow
  ✓ You're using multiple disconnected tools spending too much on subscriptions
  ✓ You run a coaching, consulting, info product, or local service business
  ✓ You want a system already set up for your business type

THIS IS NOT FOR YOU IF:
  ✗ You're not actively trying to grow your business
  ✗ You're looking for a basic contact tracker with no automation
  ✗ You're not ready to improve your current sales process

WHAT YOU WALK AWAY WITH:
  ✓ A clear understanding of where your lead and sales process is breaking down
  ✓ A live demo of Generate CRM built around your specific business
  ✓ An honest answer on whether Generate CRM is the right fit
  ✓ A concrete plan for getting set up within 7 days if you move forward

SOCIAL PROOF PLACEHOLDER:
  [ADD REAL TESTIMONIALS HERE with name, business type, and specific result]
  Until real testimonials exist: show the 4 stat cards from the homepage

FINAL CTA:
  H2:  "Ready to Build a System That Works for You?"
  Sub: "Book your strategy session and take the first step toward closing more deals."
  CTA: "Book Your Demo →"
  Urgency: "Limited strategy session slots available each week."
```

---

## ANIMATIONS

```
Page load:     Hero headline fades in + slides up (0.6s ease)
               Hero subtext follows with 0.1s delay
               Hero buttons: 0.2s delay
               Hero visual: 0.15s delay, slides from right

Scroll reveal: FadeIn component wraps sections
               opacity: 0 → 1, translateY: 28px → 0
               Duration: 0.65s, easing: ease-out
               Trigger: IntersectionObserver threshold 0.12
               Once only (do not re-trigger on scroll back up)

Hover states:
               Feature cards: background lightens + bottom accent line appears
               Outcome cards: translateY(-4px)
               Step cards: border-color brightens
               Nav links: color #FFFFFF
               Buttons: slight scale-up (transform: scale(1.01))

Pipeline dashboard:
               Automation dot: CSS pulse animation (scale + opacity)
               Lead cards: subtle stagger fade-in on page load

Stat counter (homepage stats bar):
               Count up from 0 to target value on first viewport entry
               Duration: 1.2s, easing: ease-out
               Fire ONCE only — use IntersectionObserver { once: true }

Tab switching:
               Content panel: opacity transition 0.2s ease
               No slide — just fade for speed

FAQ accordion:
               max-height transition for smooth expand/collapse
               Icon rotates 45deg on open
```

---

## SEO

```
Page titles:
  Home:        "Generate CRM — Close More Deals. Automate Your Growth."
  Solutions:   "Solutions — Generate CRM"
  Industries:  "Industries We Serve — Generate CRM"
  Pricing:     "Pricing — Generate CRM"
  Partners:    "Partner Program — Generate CRM"
  About:       "About Generate CRM"
  Get Started: "Book a Demo — Generate CRM"

Meta descriptions (155 chars max):
  Home:      "Generate CRM is the all-in-one revenue system for coaches, consultants,
               course creators, and local businesses. Capture leads, automate follow-up."
  Industries:"CRM built for coaches, consultants, info product creators, and local
               businesses in the US and Canada. Pre-configured for your workflow."

Heading structure: One H1 per page. All other headings H2/H3/H4.
Image alt text:    Descriptive for all images. Empty alt="" for decorative only.
Schema markup:     Organization schema on homepage and About page.
                   FAQ schema on all FAQ sections.
Canonical URLs:    Set canonical tags to prevent duplicate content.
robots.txt:        Allow all pages.
sitemap.xml:       Generate automatically with Next.js sitemap package.
```

---

## IMPORTANT NOTES FOR CLAUDE CODE

1. **No copy hardcoded in components.** All text, headlines, body copy, and CTAs should be imported from `src/lib/content.ts`. This makes future copy changes instant.

2. **Mobile-first.** Build every component mobile-first. Desktop is enhanced, not the starting point. Test at 375px, 768px, 1024px, 1280px breakpoints.

3. **No fake social proof.** Any testimonial section should use placeholder comments like `{/* ADD REAL TESTIMONIAL HERE */}` — never invent client names or results.

4. **The booking embed is critical.** The iframe on /get-started is the primary conversion endpoint. If it doesn't load for any reason, show a clear fallback with the direct booking URL as a text link.

5. **Keep the GoHighLevel FAQ answer.** Q2 in the FAQ ("Is Generate CRM built on GoHighLevel?") is intentional. Do not soften or remove it.

6. **Accessibility.** All interactive elements (accordion, tabs, buttons) must be keyboard-accessible. Minimum touch target size: 44×44px. Add ARIA labels to icon-only buttons.

7. **No animations on prefers-reduced-motion.** Wrap all Framer Motion animations with the `useReducedMotion()` hook.

8. **Dark mode only.** This site does not have a light mode. Background is always #0A0A0A or #111111. Do not add a mode toggle.

9. **Performance targets.** LCP under 2.5s. Use next/image for all images. Use next/font for Poppins. Lazy-load below-fold images.

10. **Pricing is intentionally blank.** Leave all price fields as `[PRICE]` placeholders in the component. Shawal will fill these in manually.
