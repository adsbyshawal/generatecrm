"use client";

import { useState } from "react";
import Link from "next/link";
import { Check } from "lucide-react";
import { audience } from "@/lib/content";
import SectionTitle from "@/components/ui/SectionTitle";
import FadeIn from "@/components/ui/FadeIn";

// Section 5 — Audience selector. Tabs toggle copy + stat cards (fade only).
export default function AudienceTabs() {
  const [active, setActive] = useState(0);
  const tab = audience.tabs[active];

  return (
    <section className="bg-bg-secondary">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:py-24">
        <SectionTitle tag={audience.tag} title={audience.title} className="mb-12" />

        {/* Tab buttons */}
        <div
          role="tablist"
          aria-label="Audience"
          className="mb-10 flex flex-wrap justify-center gap-x-8 gap-y-2 border-b border-border"
        >
          {audience.tabs.map((t, i) => {
            const selected = i === active;
            return (
              <button
                key={t.id}
                role="tab"
                aria-selected={selected}
                onClick={() => setActive(i)}
                className={`-mb-px flex min-h-[44px] items-center gap-2 border-b-2 px-1 pb-3 text-sm font-medium transition-colors ${
                  selected
                    ? "border-purple text-white"
                    : "border-transparent text-text-muted hover:text-text-sub"
                }`}
              >
                <span aria-hidden>{t.emoji}</span>
                {t.label}
              </button>
            );
          })}
        </div>

        {/* Content panel — keyed so it fades on tab switch */}
        <FadeIn
          key={tab.id}
          delay={0}
          className="grid gap-10 lg:grid-cols-2 lg:items-start"
        >
          {/* Left — copy */}
          <div className="flex flex-col gap-5">
            <h3 className="text-2xl font-bold leading-snug text-white">{tab.hook}</h3>
            <p className="text-[15px] font-light leading-relaxed text-text-sub">
              {tab.body}
            </p>
            <ul className="flex flex-col gap-2.5">
              {tab.uses.map((use) => (
                <li key={use} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-purple" aria-hidden />
                  <span className="text-sm font-light text-text-sub">{use}</span>
                </li>
              ))}
            </ul>
            <Link
              href={tab.link.href}
              className="mt-1 w-fit text-sm font-semibold text-magenta transition-opacity hover:opacity-80"
            >
              {tab.link.label}
            </Link>
          </div>

          {/* Right — 4 stat cards */}
          <div className="grid grid-cols-2 gap-4">
            {tab.cards.map((card) => (
              <div
                key={card.label}
                className="flex flex-col gap-2 rounded-2xl border border-border bg-bg-card p-5"
              >
                <span className="text-2xl font-extrabold text-purple">{card.value}</span>
                <span className="text-xs font-light leading-snug text-text-sub">
                  {card.label}
                </span>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
