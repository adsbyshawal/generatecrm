import { Check } from "lucide-react";
import { outcomes } from "@/lib/content";
import FadeIn from "@/components/ui/FadeIn";
import Icon from "@/components/ui/Icon";

export default function SegmentOutcomes() {
  return (
    <section className="bg-lavender/50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">
            {outcomes.tag}
          </p>
          <h2 className="mt-3 text-4xl font-extrabold leading-[1.1] tracking-tight text-ink sm:text-5xl">
            {outcomes.title}
          </h2>
        </FadeIn>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {outcomes.cards.map((card) => (
            <div
              key={card.name}
              className="rounded-2xl border border-black/[0.06] bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-soft text-accent">
                  <Icon name={card.icon} className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <h3 className="text-lg font-bold tracking-tight text-ink">
                  {card.name}
                </h3>
              </div>
              <ul className="mt-5 space-y-3">
                {card.points.map((p) => (
                  <li
                    key={p}
                    className="flex items-start gap-2.5 text-base font-light leading-snug text-ink-sub"
                  >
                    <Check className="mt-1 h-4 w-4 shrink-0 text-accent" strokeWidth={2} />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
