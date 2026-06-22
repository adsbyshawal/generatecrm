"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { faq } from "@/lib/content";

export default function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="mx-auto max-w-7xl border-t border-black/5 px-6 py-24">
      <div className="grid gap-12 md:grid-cols-2 lg:gap-24">
        <div>
          <h2 className="font-serif text-4xl leading-[1.1] tracking-tight text-ink sm:text-5xl">
            {faq.title}
          </h2>
        </div>

        <div className="-mt-2 divide-y divide-black/10 border-t border-black/10">
          {faq.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-6 text-left"
                >
                  <span className="text-lg font-light text-ink">{item.q}</span>
                  <Plus
                    className={`h-5 w-5 shrink-0 text-ink/40 transition-transform duration-200 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                    strokeWidth={1.5}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-xl text-base font-light leading-relaxed text-ink/70">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
