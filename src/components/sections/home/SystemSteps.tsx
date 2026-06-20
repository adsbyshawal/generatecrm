import { ArrowRight } from "lucide-react";
import { system } from "@/lib/content";
import SectionTitle from "@/components/ui/SectionTitle";
import FadeIn from "@/components/ui/FadeIn";

// Section 4 — The 4-step Growth System. id="system" anchors the hero CTA.
export default function SystemSteps() {
  return (
    <section id="system" className="scroll-mt-20 bg-bg-primary">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:py-24">
        <SectionTitle
          tag={system.tag}
          title={system.title}
          subtitle={system.subtitle}
          className="mb-14"
        />

        <FadeIn className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
          {system.steps.map((step, i) => (
            <div
              key={step.num}
              className="group relative flex flex-col gap-4 bg-bg-secondary p-8 transition-colors duration-200 hover:bg-bg-card"
            >
              <span className="text-[42px] font-black leading-none text-purple/25">
                {step.num}
              </span>
              <h3 className="text-xl font-bold text-white">{step.name}</h3>
              <p className="text-sm font-light leading-relaxed text-text-sub">
                {step.body}
              </p>

              {/* Purple connector arrow between cards (desktop only) */}
              {i < system.steps.length - 1 ? (
                <ArrowRight
                  className="absolute -right-3 top-1/2 z-10 hidden h-6 w-6 -translate-y-1/2 text-purple lg:block"
                  aria-hidden
                />
              ) : null}
            </div>
          ))}
        </FadeIn>
      </div>
    </section>
  );
}
