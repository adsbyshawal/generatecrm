import Link from "next/link";
import { ArrowRight } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";

type Cta = { label: string; href: string };

// Shared closing CTA: dark rounded panel with the green conversion button.
export default function CtaBand({
  title,
  subtitle,
  cta,
  note,
}: {
  title: string;
  subtitle: string;
  cta: Cta;
  note?: string;
}) {
  return (
    <section className="px-4 py-10 sm:px-6">
      <FadeIn className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-dark px-6 py-20 text-center sm:py-24">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[radial-gradient(50%_100%_at_50%_0%,rgba(47,91,245,0.35),transparent_70%)]"
          aria-hidden
        />
        <div className="relative">
          <h2 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl">
            {title}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg font-light leading-relaxed text-white/70">
            {subtitle}
          </p>
          <div className="mt-10">
            <Link
              href={cta.href}
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-cta px-8 py-3.5 text-base font-semibold text-white shadow-sm shadow-cta/30 transition-colors hover:bg-cta-strong"
            >
              {cta.label}
              <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </Link>
          </div>
          {note ? <p className="mt-6 text-sm font-light text-white/50">{note}</p> : null}
        </div>
      </FadeIn>
    </section>
  );
}
