"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

type Item = { q: string; a: string };

// Reusable accordion: one item open at a time, animated expand/collapse.
export default function Accordion({ items }: { items: readonly Item[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div
            key={item.q}
            className="rounded-2xl border border-black/[0.06] bg-white px-6 shadow-[0_1px_3px_rgba(20,21,27,0.04)]"
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 py-5 text-left"
            >
              <span className="text-lg font-medium text-ink">{item.q}</span>
              <Plus
                className={`h-5 w-5 shrink-0 text-accent transition-transform duration-200 ${
                  isOpen ? "rotate-45" : ""
                }`}
                strokeWidth={2}
              />
            </button>
            <div
              className={`grid transition-all duration-300 ease-out ${
                isOpen
                  ? "grid-rows-[1fr] pb-5 opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="text-base font-light leading-relaxed text-ink-sub">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
