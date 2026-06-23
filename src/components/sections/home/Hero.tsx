"use client";

import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "motion/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { hero } from "@/lib/content";
import AnalyticsDashboard from "./AnalyticsDashboard";

const WORDS = hero.headlineRotators;
const LONGEST = WORDS.reduce((a, b) => (b.length > a.length ? b : a), "");

// Orbiting integration logos around the headline. Positions are tuned to
// sit in the side gutters so they never collide with the centered copy.
type Orbit = {
  file: string;
  top: string;
  left: string;
  size: number;
  drift: number; // px of scroll parallax
  float: number; // seconds for idle bob
};
const ORBIT: Orbit[] = [
  { file: "/logos/google.svg", top: "14%", left: "8%", size: 60, drift: -70, float: 4.2 },
  { file: "/logos/slack.svg", top: "40%", left: "4%", size: 64, drift: 46, float: 5.1 },
  { file: "/logos/notion.svg", top: "66%", left: "9%", size: 52, drift: -54, float: 4.6 },
  { file: "/logos/calendly.svg", top: "26%", left: "12%", size: 44, drift: -36, float: 5.4 },
  { file: "/logos/quickbooks.svg", top: "78%", left: "5%", size: 50, drift: 40, float: 4.0 },
  { file: "/logos/canva.svg", top: "88%", left: "12%", size: 46, drift: 60, float: 5.7 },
  { file: "/logos/shopify.svg", top: "13%", left: "90%", size: 60, drift: -64, float: 4.8 },
  { file: "/logos/hubspot.svg", top: "38%", left: "95%", size: 58, drift: 52, float: 4.3 },
  { file: "/logos/whatsapp.svg", top: "64%", left: "91%", size: 54, drift: -46, float: 5.2 },
  { file: "/logos/tiktok.svg", top: "25%", left: "92%", size: 44, drift: -30, float: 5.6 },
  { file: "/logos/instagram.svg", top: "88%", left: "88%", size: 56, drift: 36, float: 4.5 },
  { file: "/logos/stripe.svg", top: "80%", left: "96%", size: 50, drift: 44, float: 5.0 },
];

function FloatingIcon({
  item,
  progress,
}: {
  item: Orbit;
  progress: MotionValue<number>;
}) {
  const reduce = useReducedMotion();
  // Scroll animation: each logo grows a little as you scroll (plus light drift).
  const grow = 1 + Math.min(Math.abs(item.drift) / 180, 0.4);
  const scale = useTransform(progress, [0, 0.7], [1, grow]);
  const y = useTransform(progress, [0, 1], [0, item.drift * 0.5]);

  return (
    <div
      className="absolute -translate-x-1/2 -translate-y-1/2"
      style={{ top: item.top, left: item.left, width: item.size, height: item.size }}
    >
      <motion.div
        style={reduce ? undefined : { y, scale }}
        className="h-full w-full"
      >
        <motion.div
          animate={reduce ? undefined : { y: [0, -7, 0] }}
          transition={
            reduce
              ? undefined
              : { duration: item.float, ease: "easeInOut", repeat: Infinity }
          }
          className="flex h-full w-full items-center justify-center rounded-full border border-black/5 bg-white shadow-[0_8px_24px_rgba(20,21,27,0.10)]"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={item.file}
            alt=""
            style={{ width: item.size * 0.46, height: item.size * 0.46 }}
            className="object-contain"
            loading="lazy"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

// Signature animation: the blue word slides up + fades, looping.
function WordCycler() {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setI((p) => (p + 1) % WORDS.length), 2200);
    return () => clearInterval(id);
  }, [reduce]);

  if (reduce) return <span className="text-accent">{WORDS[0]}</span>;

  return (
    <span className="relative inline-block align-baseline text-accent">
      <span className="invisible" aria-hidden>
        {LONGEST}
      </span>
      {/* clip window expanded vertically so descenders (g, p) aren't cut */}
      <span className="absolute inset-x-0 -inset-y-[0.2em] flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.span
            key={WORDS[i]}
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.42, ease: "easeInOut" }}
            className="inline-block whitespace-nowrap"
          >
            {WORDS[i]}
          </motion.span>
        </AnimatePresence>
      </span>
    </span>
  );
}

export default function Hero() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const rise = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, ease: "easeOut" as const, delay },
        };

  return (
    <section
      ref={sectionRef}
      className="relative isolate overflow-hidden px-4 pb-4 pt-24 sm:px-6 sm:pt-28"
    >
      {/* soft pastel glow behind the headline */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[560px] bg-[radial-gradient(60%_70%_at_50%_0%,var(--accent-soft),transparent_70%)]"
        aria-hidden
      />

      {/* Upper hero: orbiting logos + centered copy */}
      <div className="relative mx-auto max-w-6xl pb-6 pt-8 sm:pb-10">
        {/* Decorative orbit — desktop only */}
        <div
          className="pointer-events-none absolute inset-0 hidden lg:block"
          aria-hidden
        >
          {/* faint orbit rings */}
          {[520, 840, 1160].map((d) => (
            <div
              key={d}
              style={{ width: d, height: d }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-black/[0.045]"
            />
          ))}
          {ORBIT.map((item) => (
            <FloatingIcon key={item.file} item={item} progress={scrollYProgress} />
          ))}
        </div>

        {/* Headline block */}
        <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center">
          <motion.h1
            {...rise(0.05)}
            aria-label={`${hero.headlineLead} ${hero.headlineAccent}`}
            className="max-w-3xl text-balance text-5xl font-extrabold leading-[1.04] tracking-[-0.02em] text-ink sm:text-6xl lg:text-7xl"
          >
            <span className="block">{hero.headlineLead}</span>
            <span className="mt-1 block" aria-hidden>
              <WordCycler />
            </span>
          </motion.h1>

          <motion.p
            {...rise(0.1)}
            className="mt-6 max-w-xl text-pretty text-lg font-light leading-relaxed text-ink-sub"
          >
            {hero.subheadline}
          </motion.p>

          <motion.div
            {...rise(0.2)}
            className="mt-9 flex flex-wrap items-center justify-center gap-3"
          >
            <Link
              href={hero.primaryCta.href}
              className="inline-flex min-h-[48px] items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-base font-medium text-white shadow-sm shadow-accent/25 transition-colors hover:bg-accent-strong"
            >
              {hero.primaryCta.label}
              <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
            </Link>
            <Link
              href={hero.ghostCta.href}
              className="inline-flex min-h-[48px] items-center gap-2 rounded-full border border-black/10 bg-white px-7 py-3.5 text-base font-medium text-ink transition-colors hover:bg-surface"
            >
              {hero.ghostCta.label}
            </Link>
          </motion.div>

          <motion.p {...rise(0.25)} className="mt-5 text-xs text-ink-sub/70">
            {hero.microcopy}
          </motion.p>
        </div>
      </div>

      {/* Product reveal — full-width dashboard, pops up as it scrolls into view */}
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 64, scale: 0.97 }}
        whileInView={reduce ? undefined : { opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative mx-auto mt-10 max-w-7xl"
      >
        <AnalyticsDashboard />
      </motion.div>
    </section>
  );
}
