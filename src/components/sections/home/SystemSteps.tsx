import FadeIn from "@/components/ui/FadeIn";
import { system } from "@/lib/content";

export default function SystemSteps() {
  return (
    <section id="system" className="mx-auto max-w-7xl px-6 py-24">
      <FadeIn className="max-w-2xl">
        <h2 className="font-serif text-4xl leading-[1.1] tracking-tight text-ink sm:text-5xl">
          {system.title}
        </h2>
        <p className="mt-6 text-lg font-light leading-relaxed text-ink/70">
          {system.subtitle}
        </p>
      </FadeIn>

      <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {system.steps.map((step) => (
          <div
            key={step.num}
            className="rounded-3xl border border-black/[0.03] bg-surface p-8"
          >
            <span className="font-serif text-4xl text-ink/30">{step.num}</span>
            <h3 className="mt-4 text-lg font-medium tracking-tight text-ink">
              {step.name}
            </h3>
            <p className="mt-2 text-base font-light leading-relaxed text-ink/70">
              {step.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
