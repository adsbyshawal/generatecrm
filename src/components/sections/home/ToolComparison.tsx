import Link from "next/link";
import { Check, X, ArrowRight } from "lucide-react";
import { comparison } from "@/lib/content";
import FadeIn from "@/components/ui/FadeIn";

export default function ToolComparison() {
  const { current, generate } = comparison;
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <FadeIn className="max-w-2xl">
        <p className="mb-4 text-sm font-medium uppercase tracking-wider text-ink/50">
          {comparison.tag}
        </p>
        <h2 className="font-serif text-4xl leading-[1.1] tracking-tight text-ink sm:text-5xl">
          {comparison.title}
        </h2>
        <p className="mt-6 text-lg font-light leading-relaxed text-ink/70">
          {comparison.subtitle}
        </p>
      </FadeIn>

      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        {/* Current stack */}
        <div className="flex flex-col rounded-3xl border border-black/5 bg-surface p-8">
          <div className="mb-6">
            <h3 className="text-xl font-medium tracking-tight text-ink">
              {current.header}
            </h3>
            <p className="text-base font-light text-ink/60">{current.sub}</p>
          </div>
          <ul className="flex-1 divide-y divide-black/5">
            {current.items.map((item) => (
              <li
                key={item.name}
                className="flex items-center justify-between gap-4 py-3 text-base font-light text-ink/80"
              >
                <span className="flex items-center gap-3">
                  <X className="h-4 w-4 shrink-0 text-ink/30" strokeWidth={1.5} />
                  {item.name}
                </span>
                <span className="shrink-0 tabular-nums text-ink/50">{item.cost}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex items-center justify-between rounded-2xl bg-bg px-5 py-4">
            <span className="text-base font-medium text-ink">{current.totalLabel}</span>
            <span className="font-serif text-2xl tracking-tight text-ink">
              {current.totalValue}
            </span>
          </div>
        </div>

        {/* Generate CRM */}
        <div className="flex flex-col rounded-3xl bg-hero p-8 text-white">
          <div className="mb-6">
            <h3 className="text-xl font-medium tracking-tight">{generate.header}</h3>
            <p className="text-base font-light text-white/60">{generate.sub}</p>
          </div>
          <ul className="flex-1 space-y-3">
            {generate.items.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 text-base font-light text-white/90"
              >
                <Check className="h-4 w-4 shrink-0 text-white/70" strokeWidth={1.5} />
                {item}
              </li>
            ))}
          </ul>
          <Link
            href={generate.bottomCta.href}
            className="mt-6 flex items-center justify-between rounded-2xl bg-white/10 px-5 py-4 transition-colors hover:bg-white/15"
          >
            <span className="text-base font-medium">{generate.bottomLabel}</span>
            <span className="flex items-center gap-1.5 font-medium">
              {generate.bottomCta.label}
              <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
