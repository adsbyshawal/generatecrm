"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { hero } from "@/lib/content";
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

  return (
    <section className="mx-auto max-w-[90rem] px-4 pb-20 pt-4 sm:px-6">
      {/* Dark rounded hero card */}
      <div className="relative isolate flex min-h-[600px] flex-col items-start overflow-hidden rounded-[2rem] bg-hero px-8 pt-16 lg:flex-row lg:px-20">
        {/* mauve undertone + grain */}
        <div className="absolute inset-0 -z-20 bg-hero-tint/20" aria-hidden />
        <div
          className="grain-overlay pointer-events-none absolute inset-0 -z-10 opacity-25 mix-blend-overlay"
          aria-hidden
        />

        {/* Left — copy */}
        <div className="z-10 flex w-full flex-col items-start pb-16 pt-10 lg:w-1/2 lg:pb-28 lg:pt-20">
          <motion.h1
            {...rise(0.05)}
            className="mb-6 max-w-2xl font-serif text-5xl leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            {hero.headlineLead}{" "}
            <span className="italic">{hero.headlineAccent}</span>
          </motion.h1>

          <motion.p
            {...rise(0.1)}
            className="mb-10 max-w-lg text-lg font-light leading-relaxed text-white/80"
          >
            {hero.subheadline}
          </motion.p>

          <motion.div
            {...rise(0.2)}
            className="flex flex-wrap items-center gap-3"
          >
            <Link
              href={hero.primaryCta.href}
              className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-white px-6 py-3 text-base font-medium text-ink transition-colors hover:bg-white/90"
            >
              {hero.primaryCta.label}
              <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
            </Link>
            <Link
              href={hero.ghostCta.href}
              className="inline-flex min-h-[44px] items-center gap-2 rounded-full px-6 py-3 text-base font-medium text-white/90 transition-colors hover:bg-white/10"
            >
              {hero.ghostCta.label}
            </Link>
          </motion.div>

          <motion.p {...rise(0.25)} className="mt-6 text-xs text-white/50">
            {hero.microcopy}
          </motion.p>
        </div>

        {/* Right — product mockup bleeding off the edge */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          className="z-10 mt-8 flex w-full justify-center lg:absolute lg:bottom-0 lg:right-0 lg:mt-0 lg:w-1/2 lg:translate-x-12 lg:translate-y-16 lg:justify-end"
        >
          <PipelineDashboard />
        </motion.div>
      </div>
    </section>
  );
}
