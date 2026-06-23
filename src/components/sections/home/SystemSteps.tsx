import FadeIn from "@/components/ui/FadeIn";
import { system } from "@/lib/content";

export default function SystemSteps() {
  return (
    <section id="system" className="mx-auto max-w-7xl px-6 py-20 sm:py-28">
      <FadeIn className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-accent">
          {system.tag}
        </p>
        <h2 className="mt-3 text-4xl font-extrabold leading-[1.1] tracking-tight text-ink sm:text-5xl">
          {system.title}
        </h2>
        <p className="mt-5 text-lg font-light leading-relaxed text-ink-sub">
          {system.subtitle}
        </p>
      </FadeIn>

      <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {system.steps.map((step) => (
          <div
            key={step.num}
            className="group rounded-2xl border border-black/[0.06] bg-white p-7 shadow-[0_1px_3px_rgba(20,21,27,0.04)] transition-all hover:-translate-y-1 hover:shadow-md"
          >
            <span className="text-4xl font-extrabold text-accent/25">
              {step.num}
            </span>
            <h3 className="mt-4 text-lg font-bold tracking-tight text-ink">
              {step.name}
            </h3>
            <p className="mt-2 text-base font-light leading-relaxed text-ink-sub">
              {step.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
