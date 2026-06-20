"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { faq } from "@/lib/content";
import SectionTitle from "@/components/ui/SectionTitle";
import FadeIn from "@/components/ui/FadeIn";

// Section 11 — FAQ accordion. One open at a time; + rotates to × on open.
export default function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-bg-primary">
      <div className="mx-auto max-w-3xl px-6 py-20 sm:px-8 lg:py-24">
        <SectionTitle tag={faq.tag} title={faq.title} className="mb-12" />

        <FadeIn className="flex flex-col gap-3">
          {faq.items.map((item, i) => {
            const isOpen = open === i;
            const panelId = `faq-panel-${i}`;
            const buttonId = `faq-button-${i}`;
            return (
              <div
                key={item.q}
                className="overflow-hidden rounded-lg border border-border bg-bg-secondary"
              >
                <h3>
                  <button
                    id={buttonId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex min-h-[44px] w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  >
                    <span className="text-[15px] font-semibold text-white">{item.q}</span>
                    <Plus
                      className={`h-5 w-5 shrink-0 text-purple transition-transform duration-200 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                      aria-hidden
                    />
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-4 text-sm font-light leading-relaxed text-text-sub">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </FadeIn>
      </div>
    </section>
  );
}
