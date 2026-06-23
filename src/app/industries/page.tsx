import type { Metadata } from "next";
import FadeIn from "@/components/ui/FadeIn";
import PageHero from "@/components/ui/PageHero";
import CtaBand from "@/components/ui/CtaBand";
import IndustrySection from "@/components/sections/industries/IndustrySection";
import { industriesPage } from "@/lib/content";

export const metadata: Metadata = {
  title: "Industries We Serve | Generate CRM",
  description:
    "CRM built for coaches, consultants, info product creators, and local businesses in the US and Canada. Pre-configured for your workflow.",
};

export default function IndustriesPage() {
  const p = industriesPage;
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

      <div className="mx-auto max-w-6xl space-y-20 px-6 py-16 sm:space-y-24 sm:py-20">
        {p.industries.map((ind) => (
          <FadeIn key={ind.id}>
            <IndustrySection item={ind} />
          </FadeIn>
        ))}
      </div>

      <CtaBand {...p.closing} />
    </>
  );
}
