"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";
import { stats } from "@/lib/content";

// Splits a stat value like "15+" or "Day 1" into prefix / number / suffix.
// Values with no digits (e.g. "US & CA") animate nothing.
function parseValue(value: string) {
  const match = value.match(/\d+/);
  if (!match) return { prefix: value, target: null as number | null, suffix: "" };
  const target = parseInt(match[0], 10);
  const start = match.index ?? 0;
  return {
    prefix: value.slice(0, start),
    target,
    suffix: value.slice(start + match[0].length),
  };
}

function CountUp({ value }: { value: string }) {
  const reduce = useReducedMotion();
  const { prefix, target, suffix } = parseValue(value);
  const [display, setDisplay] = useState<number>(reduce && target !== null ? target : 0);
  const ref = useRef<HTMLSpanElement>(null);
  const fired = useRef(false);

  useEffect(() => {
    if (target === null || reduce) return;
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting || fired.current) return;
        fired.current = true;
        const duration = 1200;
        let startTs: number | null = null;
        const tick = (ts: number) => {
          if (startTs === null) startTs = ts;
          const progress = Math.min((ts - startTs) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3); // ease-out
          setDisplay(Math.round(eased * target));
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        observer.disconnect();
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, reduce]);

  return (
    <span ref={ref} className="text-[38px] font-extrabold leading-none text-purple">
      {prefix}
      {target === null ? "" : display}
      {suffix}
    </span>
  );
}

// Section 2 — Stats bar: 5 stats with vertical dividers, count-up on first view.
export default function StatsBar() {
  return (
    <section className="border-y border-border bg-bg-secondary">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-y-8 px-6 py-12 sm:px-8 md:grid-cols-5 md:gap-y-0">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={`flex flex-col items-center gap-2 text-center md:px-4 ${
              i > 0 ? "md:border-l md:border-border" : ""
            }`}
          >
            <CountUp value={stat.value} />
            <span className="text-[11px] font-bold uppercase tracking-[0.08em] text-text-muted">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
