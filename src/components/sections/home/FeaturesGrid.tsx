import {
  KanbanSquare,
  Zap,
  LayoutTemplate,
  MessagesSquare,
  Bot,
  Star,
  type LucideIcon,
} from "lucide-react";
import { features } from "@/lib/content";
import SectionTitle from "@/components/ui/SectionTitle";
import FadeIn from "@/components/ui/FadeIn";

const icons: Record<string, LucideIcon> = {
  pipeline: KanbanSquare,
  automation: Zap,
  funnels: LayoutTemplate,
  messaging: MessagesSquare,
  ai: Bot,
  reviews: Star,
};

// Section 6 — Features grid: 6 cards, gradient accent line on hover.
export default function FeaturesGrid() {
  return (
    <section className="bg-bg-primary">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:py-24">
        <SectionTitle
          tag={features.tag}
          title={features.title}
          subtitle={features.subtitle}
          className="mb-14"
        />

        <FadeIn className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {features.cards.map((card) => {
            const Icon = icons[card.icon] ?? Zap;
            return (
              <div
                key={card.name}
                className="group relative flex flex-col gap-4 bg-bg-secondary p-8 transition-colors duration-200 hover:bg-bg-card"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-[10px] border border-border-purple bg-purple/15">
                  <Icon className="h-5 w-5 text-magenta" aria-hidden />
                </span>
                <h3 className="text-[15px] font-bold text-white">{card.name}</h3>
                <p className="text-[13px] font-light leading-relaxed text-text-sub">
                  {card.body}
                </p>
                {/* Bottom gradient accent — appears on hover */}
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-purple to-magenta opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
              </div>
            );
          })}
        </FadeIn>
      </div>
    </section>
  );
}
