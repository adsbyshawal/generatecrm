"use client";

import { motion, useReducedMotion } from "motion/react";
import { integrations } from "@/lib/content";

type Logo = { name: string; file: string };

function Chip({ item }: { item: Logo }) {
  return (
    <span className="flex shrink-0 items-center gap-2.5 rounded-full border border-black/[0.06] bg-white px-4 py-2.5 shadow-[0_1px_2px_rgba(20,21,27,0.04)]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={item.file}
        alt=""
        width={18}
        height={18}
        className="h-[18px] w-[18px] object-contain"
        loading="lazy"
      />
      <span className="whitespace-nowrap text-sm font-medium text-ink/70">
        {item.name}
      </span>
    </span>
  );
}

function Row({ items, reverse }: { items: Logo[]; reverse?: boolean }) {
  const reduce = useReducedMotion();
  const loop = [...items, ...items];
  const keyframes = reverse ? ["-50%", "0%"] : ["0%", "-50%"];

  return (
    <div className="flex w-max">
      <motion.div
        className="flex gap-3 pr-3"
        animate={reduce ? undefined : { x: keyframes }}
        transition={
          reduce ? undefined : { duration: 50, ease: "linear", repeat: Infinity }
        }
      >
        {loop.map((item, i) => (
          <Chip key={`${item.name}-${i}`} item={item} />
        ))}
      </motion.div>
    </div>
  );
}

export default function IntegrationsMarquee() {
  const all = integrations.logos as unknown as Logo[];
  const mid = Math.ceil(all.length / 2);
  const rowA = all.slice(0, mid);
  const rowB = all.slice(mid);

  return (
    <section className="py-16 sm:py-20">
      <p className="mb-8 text-center text-base font-medium text-ink-sub">
        {integrations.heading}
      </p>

      <div className="flex flex-col gap-3 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
        <Row items={rowA} />
        <Row items={rowB} reverse />
      </div>
    </section>
  );
}
