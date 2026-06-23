import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { features } from "@/lib/content";
import FadeIn from "@/components/ui/FadeIn";
import Icon from "@/components/ui/Icon";

export default function FeaturesGrid() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 sm:py-28">
      <FadeIn className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-accent">
          {features.tag}
        </p>
        <h2 className="mt-3 text-4xl font-extrabold leading-[1.1] tracking-tight text-ink sm:text-5xl">
          {features.title}
        </h2>
        <p className="mt-5 text-lg font-light leading-relaxed text-ink-sub">
          {features.subtitle}
        </p>
        <Link
          href={features.link.href}
          className="mt-6 inline-flex items-center gap-1.5 text-base font-semibold text-accent transition-opacity hover:opacity-70"
        >
          {features.link.label}
          <ArrowRight className="h-4 w-4" strokeWidth={2} />
        </Link>
      </FadeIn>

      <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {features.cards.map((card) => (
          <div
            key={card.name}
            className="group relative overflow-hidden rounded-2xl border border-black/[0.06] bg-white p-7 shadow-[0_1px_3px_rgba(20,21,27,0.04)] transition-all hover:-translate-y-1 hover:shadow-md"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-soft text-accent">
              <Icon name={card.icon} className="h-5 w-5" strokeWidth={1.75} />
            </div>
            <h3 className="mt-5 text-lg font-bold tracking-tight text-ink">
              {card.name}
            </h3>
            <p className="mt-2 text-base font-light leading-relaxed text-ink-sub">
              {card.body}
            </p>
            <span className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-accent to-accent-strong transition-transform duration-300 group-hover:scale-x-100" />
          </div>
        ))}
      </div>
    </section>
  );
}
