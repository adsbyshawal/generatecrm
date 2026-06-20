import { Check } from "lucide-react";
import { outcomes } from "@/lib/content";
import SectionTitle from "@/components/ui/SectionTitle";
import FadeIn from "@/components/ui/FadeIn";

// Section 8 — Segment outcomes: 4 cards with purple header band + 3 bullets.
export default function SegmentOutcomes() {
  return (
    <section className="bg-bg-primary">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:py-24">
        <SectionTitle tag={outcomes.tag} title={outcomes.title} className="mb-14" />

        <FadeIn className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {outcomes.cards.map((card) => (
            <div
              key={card.name}
              className="flex flex-col overflow-hidden rounded-2xl border border-border bg-bg-card transition-transform duration-200 hover:-translate-y-1"
            >
              <div className="flex items-center gap-2 bg-purple px-5 py-4">
                <span aria-hidden>{card.emoji}</span>
                <span className="text-[13px] font-bold text-white">{card.name}</span>
              </div>
              <ul className="flex flex-col gap-3 p-5">
                {card.points.map((point) => (
                  <li key={point} className="flex items-start gap-2.5">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-purple" aria-hidden />
                    <span className="text-[13px] font-light leading-snug text-text-sub">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </FadeIn>
      </div>
    </section>
  );
}
