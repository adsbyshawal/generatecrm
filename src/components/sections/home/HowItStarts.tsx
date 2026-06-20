import { howItStarts } from "@/lib/content";
import SectionTitle from "@/components/ui/SectionTitle";
import FadeIn from "@/components/ui/FadeIn";

// Section 9 — How it starts: 3 numbered step cards + closing line.
export default function HowItStarts() {
  return (
    <section className="bg-bg-secondary">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:py-24">
        <SectionTitle
          tag={howItStarts.tag}
          title={howItStarts.title}
          className="mb-14"
        />

        <FadeIn className="relative grid gap-6 md:grid-cols-3">
          {/* Connecting gradient line behind the step badges (desktop) */}
          <div
            aria-hidden
            className="absolute left-0 right-0 top-[26px] hidden h-px bg-gradient-to-r from-purple to-magenta md:block"
          />

          {howItStarts.steps.map((step) => (
            <div
              key={step.num}
              className="relative flex flex-col gap-4 rounded-2xl border border-border-purple bg-bg-card p-7 transition-colors duration-200 hover:border-purple"
            >
              <span className="flex h-13 w-13 items-center justify-center rounded-full bg-purple text-lg font-extrabold text-white">
                {step.num}
              </span>
              <h3 className="text-xl font-bold text-white">{step.name}</h3>
              <p className="text-sm font-light leading-relaxed text-text-sub">
                {step.body}
              </p>
              <p className="mt-auto pt-2 text-[13px] font-medium text-magenta">
                {step.note}
              </p>
            </div>
          ))}
        </FadeIn>

        <FadeIn className="mt-12 text-center">
          <p className="text-base font-semibold text-purple">{howItStarts.closing}</p>
        </FadeIn>
      </div>
    </section>
  );
}
