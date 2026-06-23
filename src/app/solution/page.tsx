import type { Metadata } from "next";
import FadeIn from "@/components/ui/FadeIn";
import PageHero from "@/components/ui/PageHero";
import CtaBand from "@/components/ui/CtaBand";
import SolutionSection from "@/components/sections/solutions/SolutionSection";
import { solutionsPage } from "@/lib/content";

export const metadata: Metadata = {
  title: "Solutions | Generate CRM",
  description:
    "Lead capture, automated follow-up, pipeline management, booking, and a unified inbox. The solutions that capture more leads and close more deals.",
};

export default function SolutionsPage() {
  const p = solutionsPage;
  return (
    <>
      <PageHero {...p.hero} />

      <section className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
          {p.intro.title}
        </h2>
        <p className="mt-5 text-lg font-light leading-relaxed text-ink-sub">
          {p.intro.body}
        </p>
      </section>

      <div className="mx-auto max-w-6xl space-y-20 px-6 py-16 sm:space-y-28 sm:py-20">
        {p.solutions.map((s, i) => (
          <FadeIn key={s.num}>
            <SolutionSection item={s} flip={i % 2 === 1} />
          </FadeIn>
        ))}
      </div>

      <CtaBand {...p.closing} />
    </>
  );
}
