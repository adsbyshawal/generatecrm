import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { ctaBlock } from "@/lib/content";
import FadeIn from "@/components/ui/FadeIn";

export default function CtaBlock() {
  return (
    <section className="border-t border-black/5">
      <FadeIn className="mx-auto max-w-4xl px-6 py-28 text-center">
        <h2 className="font-serif text-4xl leading-[1.1] tracking-tight text-ink sm:text-5xl">
          {ctaBlock.title}
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg font-light leading-relaxed text-ink/70">
          {ctaBlock.subtitle}
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href={ctaBlock.cta.href}
            className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-full bg-ink px-8 py-3 text-base font-medium text-bg shadow-sm transition-colors hover:bg-ink/90 sm:w-auto"
          >
            {ctaBlock.cta.label}
            <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
          </Link>
          <Link
            href={ctaBlock.ghostCta.href}
            className="inline-flex min-h-[44px] w-full items-center justify-center gap-1.5 rounded-full px-8 py-3 text-base font-medium text-ink transition-colors hover:bg-black/5 sm:w-auto"
          >
            {ctaBlock.ghostCta.label}
            <ChevronRight className="h-4 w-4" strokeWidth={1.5} />
          </Link>
        </div>
        <p className="mt-8 text-sm font-light text-ink/50">{ctaBlock.trust}</p>
      </FadeIn>
    </section>
  );
}
