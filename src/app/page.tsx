import Hero from "@/components/sections/home/Hero";
import IntegrationsMarquee from "@/components/sections/home/IntegrationsMarquee";
import StatsBar from "@/components/sections/home/StatsBar";
import SystemSteps from "@/components/sections/home/SystemSteps";
import AudienceTabs from "@/components/sections/home/AudienceTabs";
import FeaturesGrid from "@/components/sections/home/FeaturesGrid";
import ToolComparison from "@/components/sections/home/ToolComparison";
import SegmentOutcomes from "@/components/sections/home/SegmentOutcomes";
import HowItStarts from "@/components/sections/home/HowItStarts";
import Testimonial from "@/components/sections/home/Testimonial";
import CtaBlock from "@/components/sections/home/CtaBlock";
import FaqAccordion from "@/components/sections/home/FaqAccordion";

export default function Home() {
  return (
    <>
      <Hero />
      <IntegrationsMarquee />
      <StatsBar />
      <SystemSteps />
      <AudienceTabs />
      <FeaturesGrid />
      <ToolComparison />
      <SegmentOutcomes />
      <HowItStarts />
      <Testimonial />
      <CtaBlock />
      <FaqAccordion />
    </>
  );
}
