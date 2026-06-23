import Link from "next/link";
import { Check, X, ArrowRight } from "lucide-react";
import { comparison } from "@/lib/content";
import FadeIn from "@/components/ui/FadeIn";

export default function ToolComparison() {
  const { current, generate } = comparison;
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 sm:py-28">
      <FadeIn className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-accent">
          {comparison.tag}
        </p>
        <h2 className="mt-3 text-4xl font-extrabold leading-[1.1] tracking-tight text-ink sm:text-5xl">
          {comparison.title}
        </h2>
        <p className="mt-5 text-lg font-light leading-relaxed text-ink-sub">
          {comparison.subtitle}
        </p>
      </FadeIn>

      <div className="mx-auto mt-14 grid max-w-5xl gap-5 lg:grid-cols-2">
        {/* Current stack */}
        <div className="flex flex-col rounded-3xl border border-black/[0.06] bg-white p-8 shadow-sm">
          <div className="mb-6">
            <h3 className="text-xl font-bold tracking-tight text-ink">
              {current.header}
            </h3>
            <p className="text-base font-light text-ink-sub">{current.sub}</p>
          </div>
          <ul className="flex-1 divide-y divide-black/5">
            {current.items.map((item) => (
              <li
                key={item.name}
                className="flex items-center justify-between gap-4 py-3 text-base font-light text-ink/80"
              >
                <span className="flex items-center gap-3">
                  <X className="h-4 w-4 shrink-0 text-rose-400" strokeWidth={2} />
                  {item.name}
                </span>
                <span className="shrink-0 tabular-nums text-ink/50">
                  {item.cost}
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex items-center justify-between rounded-2xl bg-rose-50 px-5 py-4">
            <span className="text-base font-medium text-ink">
              {current.totalLabel}
            </span>
            <span className="text-2xl font-extrabold tracking-tight text-rose-500">
              {current.totalValue}
            </span>
          </div>
        </div>

        {/* Generate CRM */}
        <div className="flex flex-col rounded-3xl bg-accent p-8 text-white shadow-lg shadow-accent/20">
          <div className="mb-6">
            <h3 className="text-xl font-bold tracking-tight">{generate.header}</h3>
            <p className="text-base font-light text-white/70">{generate.sub}</p>
          </div>
          <ul className="flex-1 space-y-3">
            {generate.items.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 text-base font-light text-white/95"
              >
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/20">
                  <Check className="h-3 w-3 text-white" strokeWidth={3} />
                </span>
                {item}
              </li>
            ))}
          </ul>
          <Link
            href={generate.bottomCta.href}
            className="mt-6 flex items-center justify-between rounded-2xl bg-white/15 px-5 py-4 transition-colors hover:bg-white/25"
          >
            <span className="text-base font-semibold">{generate.bottomLabel}</span>
            <span className="flex items-center gap-1.5 font-semibold">
              {generate.bottomCta.label}
              <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
