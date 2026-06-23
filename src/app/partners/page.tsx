import type { Metadata } from "next";
import { Check } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import PageHero from "@/components/ui/PageHero";
import CtaBand from "@/components/ui/CtaBand";
import Icon from "@/components/ui/Icon";
import { partnersPage } from "@/lib/content";

export const metadata: Metadata = {
  title: "Partner Program | Generate CRM",
  description:
    "Join the Generate CRM partner program as an agency, reseller, or referral partner and earn recurring revenue.",
};

export default function PartnersPage() {
  const p = partnersPage;
  return (
    <>
      <PageHero {...p.hero} />

      {/* Partner types */}
      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-5 lg:grid-cols-3">
          {p.types.map((t) => (
            <div
              key={t.name}
              className="flex flex-col rounded-3xl border border-black/[0.06] bg-white p-8 shadow-sm"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-soft text-accent">
                <Icon name={t.icon} className="h-6 w-6" strokeWidth={1.75} />
              </span>
              <h3 className="mt-5 text-xl font-bold tracking-tight text-ink">
                {t.name}
              </h3>
              <p className="mt-2 text-base font-light leading-relaxed text-ink-sub">
                {t.desc}
              </p>
              <ul className="mt-6 flex-1 space-y-3">
                {t.benefits.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-2.5 text-sm font-light text-ink/80"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={2} />
                    {b}
                  </li>
                ))}
              </ul>
              <div className="mt-6 rounded-2xl bg-accent-soft/60 px-4 py-3 text-sm font-medium text-ink">
                <span className="font-semibold text-accent">You earn: </span>
                {t.earn}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="bg-cream py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <FadeIn className="text-center">
            <h2 className="text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
              {p.steps.title}
            </h2>
          </FadeIn>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {p.steps.items.map((s) => (
              <div
                key={s.num}
                className="rounded-2xl border border-black/[0.06] bg-white p-7 shadow-sm"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-lg font-extrabold text-white">
                  {s.num}
                </span>
                <p className="mt-5 text-base font-light leading-relaxed text-ink-sub">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand {...p.closing} />
    </>
  );
}
