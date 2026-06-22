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
    <section className="bg-surface-2/60 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="max-w-3xl font-serif text-4xl leading-[1.1] tracking-tight text-ink sm:text-5xl">
          {audience.title}
        </h2>

        {/* Tabs */}
        <div
          role="tablist"
          aria-label="Choose your business type"
          className="mt-10 flex flex-wrap gap-2"
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
                    ? "border-transparent bg-ink text-bg"
                    : "border-black/10 text-ink/70 hover:bg-black/5"
                }`}
              >
                <Icon name={t.icon} className="h-4 w-4" />
                {t.label}
              </button>
            );
          })}
        </div>

        {/* Panel */}
        <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h3 className="font-serif text-3xl leading-tight tracking-tight text-ink">
              {tab.hook}
            </h3>
            <p className="mt-5 text-lg font-light leading-relaxed text-ink/70">
              {tab.body}
            </p>
            <ul className="mt-8 space-y-3">
              {tab.uses.map((use) => (
                <li
                  key={use}
                  className="flex items-start gap-3 text-base font-light text-ink/80"
                >
                  <Check className="mt-1 h-4 w-4 shrink-0 text-ink/40" strokeWidth={1.5} />
                  {use}
                </li>
              ))}
            </ul>
            <Link
              href={tab.link.href}
              className="mt-8 inline-flex items-center gap-1.5 text-base font-medium text-ink transition-opacity hover:opacity-70"
            >
              {tab.link.label}
              <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4 self-start">
            {tab.cards.map((card) => (
              <div
                key={card.label}
                className="rounded-2xl border border-black/[0.03] bg-bg p-6"
              >
                <div className="font-serif text-3xl tracking-tight text-ink">
                  {card.value}
                </div>
                <p className="mt-2 text-sm font-light leading-snug text-ink/60">
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
