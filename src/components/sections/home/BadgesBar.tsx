import { BadgeCheck, Globe, Layers, Star } from "lucide-react";
import { badges } from "@/lib/content";
import FadeIn from "@/components/ui/FadeIn";

const icons = {
  meta: BadgeCheck,
  google: Globe,
  ghl: Layers,
  clutch: Star,
} as const;

const iconColor: Record<string, string> = {
  meta: "text-[#1877F2]",
  google: "text-white",
  ghl: "text-[#FF5C35]",
  clutch: "text-yellow-400",
};

// Section 3 — Trust badges: 4 partner badges, dimmed until hover.
export default function BadgesBar() {
  return (
    <section className="border-b border-border bg-bg-secondary">
      <FadeIn className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-10 gap-y-6 px-6 py-10 sm:px-8">
        {badges.map((badge) => {
          const Icon = icons[badge.icon];
          return (
            <div
              key={badge.label}
              className="flex items-center gap-2.5 opacity-50 transition-opacity duration-200 hover:opacity-100"
            >
              <Icon
                className={`h-5 w-5 shrink-0 ${iconColor[badge.icon] ?? "text-white"}`}
                aria-hidden
              />
              <span className="text-sm font-medium text-text-sub">{badge.label}</span>
            </div>
          );
        })}
      </FadeIn>
    </section>
  );
}
