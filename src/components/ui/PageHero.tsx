import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Cta = { label: string; href: string };

// Shared inner-page hero. pt clears the fixed floating nav.
export default function PageHero({
  tag,
  title,
  subtitle,
  cta,
  micro,
}: {
  tag: string;
  title: string;
  subtitle?: string;
  cta?: Cta;
  micro?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden px-6 pb-16 pt-36 text-center sm:pb-20 sm:pt-40">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[440px] bg-[radial-gradient(55%_60%_at_50%_0%,var(--accent-soft),transparent_70%)]"
        aria-hidden
      />
      <div className="mx-auto max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-wider text-accent">
          {tag}
        </p>
        <h1 className="mt-4 text-4xl font-extrabold leading-[1.05] tracking-tight text-ink sm:text-6xl">
          {title}
        </h1>
        {subtitle ? (
          <p className="mx-auto mt-6 max-w-2xl text-lg font-light leading-relaxed text-ink-sub">
            {subtitle}
          </p>
        ) : null}
        {cta ? (
          <div className="mt-9">
            <Link
              href={cta.href}
              className="inline-flex min-h-[48px] items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-base font-semibold text-white shadow-sm shadow-accent/25 transition-colors hover:bg-accent-strong"
            >
              {cta.label}
              <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </Link>
          </div>
        ) : null}
        {micro ? <p className="mt-5 text-xs text-ink-sub/70">{micro}</p> : null}
      </div>
    </section>
  );
}
