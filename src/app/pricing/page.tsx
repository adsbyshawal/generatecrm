import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import PageHero from "@/components/ui/PageHero";
import CtaBand from "@/components/ui/CtaBand";
import Accordion from "@/components/ui/Accordion";
import Icon from "@/components/ui/Icon";
import { pricingPage } from "@/lib/content";

export const metadata: Metadata = {
  title: "Pricing | Generate CRM",
  description:
    "Simple pricing built to help you grow. One platform that replaces your whole stack. No long-term contracts, cancel anytime.",
};

export default function PricingPage() {
  const p = pricingPage;
  return (
    <>
      <PageHero {...p.hero} />

      <section className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
          {p.intro.title}
        </h2>
        <p className="mt-5 text-lg font-light leading-relaxed text-ink-sub">
          {p.intro.body}
        </p>
      </section>

      {/* Plans */}
      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-5 lg:grid-cols-4">
          {p.plans.map((plan) => (
            <div
              key={plan.name}
              className={`flex flex-col rounded-3xl p-7 ${
                plan.popular
                  ? "border-2 border-accent bg-white shadow-lg shadow-accent/10"
                  : "border border-black/[0.06] bg-white shadow-sm"
              }`}
            >
              {plan.popular ? (
                <span className="mb-4 inline-flex w-fit rounded-full bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                  Most Popular
                </span>
              ) : null}
              <h3 className="text-lg font-bold text-ink">{plan.name}</h3>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold tracking-tight text-ink">
                  {plan.price}
                </span>
                <span className="text-sm text-ink-sub">{plan.period}</span>
              </div>
              <p className="mt-3 text-sm font-light leading-relaxed text-ink-sub">
                {plan.blurb}
              </p>
              <ul className="mt-6 flex-1 space-y-2.5">
                {plan.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2.5 text-sm font-light text-ink/80"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={2} />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href={plan.cta.href}
                className={`mt-7 inline-flex min-h-[44px] items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-colors ${
                  plan.popular
                    ? "bg-accent text-white hover:bg-accent-strong"
                    : "border border-black/10 text-ink hover:bg-surface"
                }`}
              >
                {plan.cta.label}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Usage-based add-ons */}
      <section className="mx-auto max-w-4xl px-6 py-14">
        <FadeIn className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            {p.usage.title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base font-light leading-relaxed text-ink-sub">
            {p.usage.subtitle}
          </p>
        </FadeIn>
        <div className="mt-8 overflow-hidden rounded-2xl border border-black/[0.06] bg-white shadow-sm">
          {p.usage.rows.map((row, i) => (
            <div
              key={row.name}
              className={`flex items-center justify-between px-6 py-4 text-base ${
                i !== 0 ? "border-t border-black/5" : ""
              }`}
            >
              <span className="font-medium text-ink">{row.name}</span>
              <span className="font-light tabular-nums text-ink-sub">{row.cost}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Value */}
      <section className="bg-lavender/50 py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <FadeIn className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-ink sm:text-5xl">
              {p.value.title}
            </h2>
            <p className="mt-5 text-lg font-light leading-relaxed text-ink-sub">
              {p.value.body}
            </p>
          </FadeIn>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {p.value.points.map((pt) => (
              <div
                key={pt.title}
                className="rounded-2xl border border-black/[0.06] bg-white p-7 shadow-sm"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-soft text-accent">
                  <Icon name={pt.icon} className="h-6 w-6" strokeWidth={1.75} />
                </span>
                <h3 className="mt-5 text-lg font-bold text-ink">{pt.title}</h3>
                <p className="mt-2 text-base font-light leading-relaxed text-ink-sub">
                  {pt.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-6 py-20 sm:py-24">
        <h2 className="text-center text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
          {p.faq.title}
        </h2>
        <div className="mt-10">
          <Accordion items={p.faq.items} />
        </div>
      </section>

      <CtaBand {...p.closing} />
    </>
  );
}
