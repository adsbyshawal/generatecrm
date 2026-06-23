"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { audience } from "@/lib/content";
import Icon from "@/components/ui/Icon";

export default function AudienceTabs() {
  const [active, setActive] = useState(0);
  const tab = audience.tabs[active];

  return (
    <section className="bg-accent-soft/40 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">
            {audience.tag}
          </p>
          <h2 className="mt-3 text-4xl font-extrabold leading-[1.1] tracking-tight text-ink sm:text-5xl">
            {audience.title}
          </h2>
        </div>

        {/* Tabs */}
        <div
          role="tablist"
          aria-label="Choose your business type"
          className="mt-10 flex flex-wrap justify-center gap-2"
        >
          {audience.tabs.map((t, i) => {
            const selected = i === active;
            return (
              <button
                key={t.id}
                role="tab"
                aria-selected={selected}
                onClick={() => setActive(i)}
                className={`flex items-center gap-2 rounded-full border px-5 py-2.5 text-base font-medium transition-colors ${
                  selected
                    ? "border-transparent bg-accent text-white shadow-sm shadow-accent/25"
                    : "border-black/10 bg-white text-ink/70 hover:bg-white"
                }`}
              >
                <Icon name={t.icon} className="h-4 w-4" />
                {t.label}
              </button>
            );
          })}
        </div>

        {/* Panel */}
        <div className="mt-12 grid gap-10 rounded-3xl border border-black/[0.06] bg-white p-8 shadow-sm lg:grid-cols-2 lg:gap-16 lg:p-12">
          <div>
            <h3 className="text-2xl font-bold leading-tight tracking-tight text-ink sm:text-3xl">
              {tab.hook}
            </h3>
            <p className="mt-5 text-lg font-light leading-relaxed text-ink-sub">
              {tab.body}
            </p>
            <ul className="mt-8 space-y-3">
              {tab.uses.map((use) => (
                <li
                  key={use}
                  className="flex items-start gap-3 text-base font-light text-ink/80"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-soft">
                    <Check className="h-3 w-3 text-accent" strokeWidth={2.5} />
                  </span>
                  {use}
                </li>
              ))}
            </ul>
            <Link
              href={tab.link.href}
              className="mt-8 inline-flex items-center gap-1.5 text-base font-semibold text-accent transition-opacity hover:opacity-70"
            >
              {tab.link.label}
              <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4 self-start">
            {tab.cards.map((card) => (
              <div
                key={card.label}
                className="rounded-2xl border border-black/[0.06] bg-bg p-6"
              >
                <div className="text-3xl font-extrabold tracking-tight text-accent">
                  {card.value}
                </div>
                <p className="mt-2 text-sm font-light leading-snug text-ink-sub">
                  {card.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
