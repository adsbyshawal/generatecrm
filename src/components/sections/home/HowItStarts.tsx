import { ArrowRight } from "lucide-react";
import { howItStarts } from "@/lib/content";
import FadeIn from "@/components/ui/FadeIn";

export default function HowItStarts() {
  return (
    <section className="bg-surface-2/60 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <FadeIn className="max-w-2xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-wider text-ink/50">
            {howItStarts.tag}
          </p>
          <h2 className="font-serif text-4xl leading-[1.1] tracking-tight text-ink sm:text-5xl">
            {howItStarts.title}
          </h2>
        </FadeIn>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {howItStarts.steps.map((step) => (
            <div
              key={step.num}
              className="flex flex-col rounded-3xl border border-black/[0.03] bg-bg p-8"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-ink font-serif text-xl text-bg">
                {step.num}
              </span>
              <h3 className="mt-5 text-lg font-medium tracking-tight text-ink">
                {step.name}
              </h3>
              <p className="mt-2 flex-1 text-base font-light leading-relaxed text-ink/70">
                {step.body}
              </p>
              <p className="mt-5 flex items-center gap-1.5 text-sm font-medium text-ink/80">
                <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
                {step.note}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-12 text-center font-serif text-2xl italic tracking-tight text-ink">
          {howItStarts.closing}
        </p>
      </div>
    </section>
  );
}
