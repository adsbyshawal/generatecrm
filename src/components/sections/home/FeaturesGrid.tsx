import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { features } from "@/lib/content";
import FadeIn from "@/components/ui/FadeIn";
import Icon from "@/components/ui/Icon";

export default function FeaturesGrid() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <FadeIn className="max-w-2xl">
        <h2 className="font-serif text-4xl leading-[1.1] tracking-tight text-ink sm:text-5xl">
          {features.title}
        </h2>
        <p className="mt-6 text-lg font-light leading-relaxed text-ink/70">
          {features.subtitle}
        </p>
        <Link
          href={features.link.href}
          className="mt-6 inline-flex items-center gap-1.5 text-base font-medium text-ink transition-opacity hover:opacity-70"
        >
          {features.link.label}
          <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
        </Link>
      </FadeIn>

      <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.cards.map((card) => (
          <div
            key={card.name}
            className="rounded-3xl border border-black/[0.03] bg-surface p-8"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-black/5 bg-bg">
              <Icon name={card.icon} className="h-5 w-5 text-ink" />
            </div>
            <h3 className="mt-5 text-lg font-medium tracking-tight text-ink">
              {card.name}
            </h3>
            <p className="mt-2 text-base font-light leading-relaxed text-ink/70">
              {card.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
