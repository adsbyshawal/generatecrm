"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type FadeInProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li";
};

// Scroll-reveal wrapper: opacity 0→1, translateY 28px→0.
// Fires once. Respects prefers-reduced-motion (renders static).
export default function FadeIn({
  children,
  delay = 0,
  className = "",
  as = "div",
}: FadeInProps) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as];

  if (reduce) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.65, ease: "easeOut", delay }}
    >
      {children}
    </MotionTag>
  );
}
