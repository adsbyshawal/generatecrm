"use client";

import { motion, useReducedMotion } from "motion/react";
import { hero } from "@/lib/content";
import Button from "@/components/ui/Button";
import PipelineDashboard from "./PipelineDashboard";

export default function Hero() {
  const reduce = useReducedMotion();

  const rise = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, ease: "easeOut" as const, delay },
        };

  const slide = reduce
    ? {}
    : {
        initial: { opacity: 0, x: 32 },
        animate: { opacity: 1, x: 0 },
        transition: { duration: 0.6, ease: "easeOut" as const, delay: 0.15 },
      };

  return (
    <section className="relative overflow-hidden bg-bg-primary">
      {/* Radial purple glow, center-left */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 50% at 25% 40%, rgba(111,0,205,0.15), transparent 70%)",
        }}
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 sm:px-8 lg:grid-cols-[55fr_45fr] lg:py-28">
        {/* Left — copy */}
        <div className="flex flex-col gap-6">
          <motion.p
            {...rise(0)}
            className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-text-sub"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-magenta" aria-hidden />
            {hero.eyebrow}
          </motion.p>

          <motion.h1
            {...rise(0.05)}
            className="text-[clamp(38px,4.5vw,58px)] font-extrabold leading-[1.05] text-white"
          >
            {hero.headlineLead}{" "}
            <span className="italic text-magenta">{hero.headlineAccent}</span>
          </motion.h1>

          <motion.p
            {...rise(0.1)}
            className="max-w-xl text-[17px] font-light leading-[1.75] text-text-sub"
          >
            {hero.subheadline}
          </motion.p>

          <motion.div {...rise(0.2)} className="flex flex-wrap items-center gap-3">
            <Button variant="primary" href={hero.primaryCta.href}>
              {hero.primaryCta.label}
            </Button>
            <Button variant="ghost" href={hero.ghostCta.href}>
              {hero.ghostCta.label}
            </Button>
          </motion.div>

          <motion.p {...rise(0.25)} className="text-xs font-light text-text-muted">
            {hero.microcopy}
          </motion.p>
        </div>

        {/* Right — visual */}
        <motion.div {...slide}>
          <PipelineDashboard />
        </motion.div>
      </div>
    </section>
  );
}
