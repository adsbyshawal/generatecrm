import type { Metadata } from "next";
import { Check, X } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import PageHero from "@/components/ui/PageHero";
import CtaBand from "@/components/ui/CtaBand";
import { stats, getStartedPage } from "@/lib/content";

export const metadata: Metadata = {
  title: "Book a Demo | Generate CRM",
  description:
    "Book a 30-minute strategy session. We look at your setup, find the gaps, and show you exactly how Generate CRM fits, or tell you honestly if it doesn't.",
};

export default function GetStartedPage() {
  const p = getStartedPage;
  return (
    <>
      <PageHero {...p.hero} />

      {/* Qualifier + booking */}
      <section className="mx-auto max-w-4xl px-6">
        <p className="mx-auto max-w-2xl text-center text-base font-light leading-relaxed text-ink-sub">
          {p.qualifier}
        </p>
        <div className="mt-8 overflow-hidden rounded-2xl border border-black/[0.06] bg-white shadow-sm">
          <iframe
            src={p.booking.url}
            title="Book a strategy session with Generate CRM"
            className="h-[700px] w-full"
            loading="lazy"
          />
        </div>
        <p className="mt-4 text-center text-sm font-light text-ink-sub">
          {p.booking.fallback}{" "}
          <a
            href={p.booking.url}
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-accent hover:opacity-70"
          >
            Open the calendar
          </a>
          .
        </p>
      </section>

      {/* What happens on the call */}
      <section className="mt-16 bg-accent-soft/40 py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <FadeIn className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-ink sm:text-5xl">
              {p.onCall.title}
            </h2>
          </FadeIn>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {p.onCall.steps.map((s, i) => (
              <div
                key={s}
                className="rounded-2xl border border-black/[0.06] bg-white p-6 shadow-sm"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-sm font-extrabold text-white">
                  {i + 1}
                </span>
                <p className="mt-4 text-base font-light leading-relaxed text-ink-sub">
                  {s}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-base font-medium text-accent">
            {p.onCall.note}
          </p>
        </div>
      </section>

      {/* For you / not for you */}
      <section className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
        <div className="grid gap-5 lg:grid-cols-2">
          <div className="rounded-3xl border border-black/[0.06] bg-white p-8 shadow-sm">
            <h3 className="text-xl font-bold text-ink">{p.forYou.title}</h3>
            <ul className="mt-5 space-y-3">
              {p.forYou.items.map((it) => (
                <li
                  key={it}
                  className="flex items-start gap-3 text-base font-light text-ink/80"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-soft">
                    <Check className="h-3 w-3 text-accent" strokeWidth={2.5} />
                  </span>
                  {it}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-black/[0.06] bg-surface p-8">
            <h3 className="text-xl font-bold text-ink">{p.notForYou.title}</h3>
            <ul className="mt-5 space-y-3">
              {p.notForYou.items.map((it) => (
                <li
                  key={it}
                  className="flex items-start gap-3 text-base font-light text-ink/70"
                >
                  <X className="mt-0.5 h-4 w-4 shrink-0 text-rose-400" strokeWidth={2} />
                  {it}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* What you walk away with */}
      <section className="bg-cream py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <FadeIn className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-ink sm:text-5xl">
              {p.walkAway.title}
            </h2>
          </FadeIn>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {p.walkAway.items.map((it) => (
              <div
                key={it}
                className="flex items-start gap-3 rounded-2xl border border-black/[0.06] bg-white p-6 shadow-sm"
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-soft">
                  <Check className="h-3.5 w-3.5 text-accent" strokeWidth={2.5} />
                </span>
                <p className="text-base font-light leading-snug text-ink/80">{it}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social proof placeholder: homepage stats until real testimonials exist */}
      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid grid-cols-2 gap-y-10 rounded-3xl border border-black/[0.06] bg-white py-12 shadow-sm sm:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`flex flex-col items-center px-4 text-center ${
                i === 0 ? "" : "sm:border-l sm:border-black/[0.08]"
              }`}
            >
              <span className="text-4xl font-extrabold tracking-tight text-accent sm:text-5xl">
                {s.value}
              </span>
              <span className="mt-2 max-w-[150px] text-sm font-medium leading-snug text-ink-sub">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      <CtaBand
        title={p.closing.title}
        subtitle={p.closing.subtitle}
        cta={p.closing.cta}
        note={p.closing.urgency}
      />
    </>
  );
}
