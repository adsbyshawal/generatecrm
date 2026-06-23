import type { Metadata } from "next";
import FadeIn from "@/components/ui/FadeIn";
import PageHero from "@/components/ui/PageHero";
import CtaBand from "@/components/ui/CtaBand";
import Icon from "@/components/ui/Icon";
import { aboutPage } from "@/lib/content";

export const metadata: Metadata = {
  title: "About Generate CRM",
  description:
    "Generate CRM was built to fix one problem: businesses lose leads because their systems are slow, disconnected, and manual.",
};

export default function AboutPage() {
  const p = aboutPage;
  return (
    <>
      <PageHero {...p.hero} />

      {/* Origin */}
      <section className="mx-auto max-w-3xl px-6 py-12">
        <FadeIn>
          <h2 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            {p.origin.title}
          </h2>
          <div className="mt-6 space-y-5">
            {p.origin.paragraphs.map((para) => (
              <p
                key={para}
                className="text-lg font-light leading-relaxed text-ink-sub"
              >
                {para}
              </p>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* Mission */}
      <section className="px-4 sm:px-6">
        <div className="mx-auto max-w-5xl rounded-[2rem] bg-accent px-8 py-16 text-center text-white shadow-lg shadow-accent/20 sm:py-20">
          <p className="mx-auto max-w-3xl text-2xl font-medium leading-snug tracking-tight sm:text-3xl">
            {p.mission}
          </p>
        </div>
      </section>

      {/* What makes us different */}
      <section className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-ink sm:text-5xl">
            {p.different.title}
          </h2>
        </FadeIn>
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {p.different.items.map((it) => (
            <div
              key={it.title}
              className="flex gap-4 rounded-2xl border border-black/[0.06] bg-white p-7 shadow-sm"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
                <Icon name={it.icon} className="h-6 w-6" strokeWidth={1.75} />
              </span>
              <div>
                <h3 className="text-lg font-bold text-ink">{it.title}</h3>
                <p className="mt-1 text-base font-light leading-relaxed text-ink-sub">
                  {it.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Who we help */}
      <section className="bg-lavender/50 py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <FadeIn className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-ink sm:text-5xl">
              {p.segments.title}
            </h2>
          </FadeIn>
          <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {p.segments.items.map((s) => (
              <div
                key={s.name}
                className="flex flex-col items-center gap-3 rounded-2xl border border-black/[0.06] bg-white p-8 text-center shadow-sm"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-soft text-accent">
                  <Icon name={s.icon} className="h-7 w-7" strokeWidth={1.75} />
                </span>
                <span className="text-base font-bold text-ink">{s.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="mx-auto max-w-3xl px-6 py-20 text-center sm:py-24">
        <h2 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-ink sm:text-5xl">
          {p.approach.title}
        </h2>
        <p className="mt-6 text-lg font-light leading-relaxed text-ink-sub">
          {p.approach.body}
        </p>
      </section>

      <CtaBand {...p.closing} />
    </>
  );
}
