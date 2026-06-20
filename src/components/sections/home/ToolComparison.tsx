import Link from "next/link";
import { X, Check } from "lucide-react";
import { comparison } from "@/lib/content";
import SectionTitle from "@/components/ui/SectionTitle";
import FadeIn from "@/components/ui/FadeIn";

// Section 7 — Tool comparison: current stack (cost) vs Generate CRM (included).
export default function ToolComparison() {
  const { current, generate } = comparison;

  return (
    <section className="bg-bg-secondary">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:py-24">
        <SectionTitle
          tag={comparison.tag}
          title={comparison.title}
          subtitle={comparison.subtitle}
          className="mb-14"
        />

        <FadeIn className="grid gap-6 lg:grid-cols-2">
          {/* Left — current stack */}
          <div className="flex flex-col overflow-hidden rounded-2xl border border-border bg-bg-card">
            <div className="border-b border-border p-6">
              <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-text-muted">
                {current.header}
              </p>
              <p className="mt-1 text-sm font-light text-text-sub">{current.sub}</p>
            </div>
            <ul className="flex flex-1 flex-col divide-y divide-border">
              {current.items.map((item) => (
                <li
                  key={item.name}
                  className="flex items-center justify-between gap-4 px-6 py-3.5"
                >
                  <span className="flex items-center gap-3 text-sm font-light text-text-sub">
                    <X className="h-4 w-4 shrink-0 text-[#E24B4A]" aria-hidden />
                    {item.name}
                  </span>
                  <span className="shrink-0 text-sm font-medium text-text-muted">
                    {item.cost}
                  </span>
                </li>
              ))}
            </ul>
            <div className="flex items-center justify-between gap-4 bg-[#E24B4A]/10 px-6 py-4">
              <span className="text-sm font-semibold text-white">
                {current.totalLabel}
              </span>
              <span className="text-lg font-extrabold text-[#E24B4A]">
                {current.totalValue}
              </span>
            </div>
          </div>

          {/* Right — Generate CRM */}
          <div className="flex flex-col overflow-hidden rounded-2xl border border-border-purple bg-purple">
            <div className="border-b border-white/15 p-6">
              <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-white/70">
                {generate.header}
              </p>
              <p className="mt-1 text-sm font-light text-white/80">{generate.sub}</p>
            </div>
            <ul className="flex flex-1 flex-col divide-y divide-white/10">
              {generate.items.map((item) => (
                <li key={item} className="flex items-center gap-3 px-6 py-3">
                  <Check className="h-4 w-4 shrink-0 text-[#34D399]" aria-hidden />
                  <span className="text-sm font-light text-white">{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href={generate.bottomCta.href}
              className="flex items-center justify-between gap-4 bg-[#34D399]/20 px-6 py-4 transition-colors hover:bg-[#34D399]/30"
            >
              <span className="text-sm font-semibold text-white">
                {generate.bottomLabel}
              </span>
              <span className="text-sm font-bold text-white">
                {generate.bottomCta.label}
              </span>
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
