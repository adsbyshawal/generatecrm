import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { ctaBlock } from "@/lib/content";
import FadeIn from "@/components/ui/FadeIn";

export default function CtaBlock() {
  return (
    <section className="px-4 py-10 sm:px-6">
      <FadeIn className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-dark px-6 py-20 text-center sm:py-24">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[radial-gradient(50%_100%_at_50%_0%,rgba(47,91,245,0.35),transparent_70%)]"
          aria-hidden
        />
        <div className="relative">
          <h2 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl">
            {ctaBlock.title}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg font-light leading-relaxed text-white/70">
            {ctaBlock.subtitle}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href={ctaBlock.cta.href}
              className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full bg-cta px-8 py-3.5 text-base font-semibold text-white shadow-sm shadow-cta/30 transition-colors hover:bg-cta-strong sm:w-auto"
            >
              {ctaBlock.cta.label}
              <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </Link>
            <Link
              href={ctaBlock.ghostCta.href}
              className="inline-flex min-h-[48px] w-full items-center justify-center gap-1.5 rounded-full border border-white/25 px-8 py-3.5 text-base font-medium text-white transition-colors hover:bg-white/10 sm:w-auto"
            >
              {ctaBlock.ghostCta.label}
              <ChevronRight className="h-4 w-4" strokeWidth={2} />
            </Link>
          </div>
          <p className="mt-8 text-sm font-light text-white/50">{ctaBlock.trust}</p>
        </div>
      </FadeIn>
    </section>
  );
}
