import { Check } from "lucide-react";
import { outcomes } from "@/lib/content";
import FadeIn from "@/components/ui/FadeIn";
import Icon from "@/components/ui/Icon";

export default function SegmentOutcomes() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <FadeIn className="max-w-2xl">
        <h2 className="font-serif text-4xl leading-[1.1] tracking-tight text-ink sm:text-5xl">
          {outcomes.title}
        </h2>
      </FadeIn>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {outcomes.cards.map((card) => (
          <div
            key={card.name}
            className="rounded-3xl border border-black/[0.03] bg-surface p-7"
          >
            <div className="flex items-center gap-3">
              <Icon name={card.icon} className="h-5 w-5 text-ink" />
              <h3 className="text-lg font-medium tracking-tight text-ink">
                {card.name}
              </h3>
            </div>
            <ul className="mt-5 space-y-3">
              {card.points.map((p) => (
                <li
                  key={p}
                  className="flex items-start gap-3 text-base font-light leading-snug text-ink/70"
                >
                  <Check className="mt-1 h-4 w-4 shrink-0 text-ink/40" strokeWidth={1.5} />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
