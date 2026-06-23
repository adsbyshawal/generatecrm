import { ArrowRight } from "lucide-react";
import { howItStarts } from "@/lib/content";
import FadeIn from "@/components/ui/FadeIn";

export default function HowItStarts() {
  return (
    <section className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">
            {howItStarts.tag}
          </p>
          <h2 className="mt-3 text-4xl font-extrabold leading-[1.1] tracking-tight text-ink sm:text-5xl">
            {howItStarts.title}
          </h2>
        </FadeIn>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {howItStarts.steps.map((step) => (
            <div
              key={step.num}
              className="flex flex-col rounded-2xl border border-black/[0.06] bg-white p-8 shadow-sm"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-lg font-extrabold text-white">
                {step.num}
              </span>
              <h3 className="mt-5 text-lg font-bold tracking-tight text-ink">
                {step.name}
              </h3>
              <p className="mt-2 flex-1 text-base font-light leading-relaxed text-ink-sub">
                {step.body}
              </p>
              <p className="mt-5 flex items-center gap-1.5 text-sm font-semibold text-accent">
                <ArrowRight className="h-4 w-4" strokeWidth={2} />
                {step.note}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-12 text-center text-xl font-bold tracking-tight text-accent sm:text-2xl">
          {howItStarts.closing}
        </p>
      </div>
    </section>
  );
}
