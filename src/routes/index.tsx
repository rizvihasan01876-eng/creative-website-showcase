import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/webrix/hero";
import {
  AuditSection,
  CaseStudySection,
  FaqSection,
  FinalCta,
  IntroSection,
  PricingSection,
  ProcessSection,
  ServicesSection,
  WhySection,
  WorkSection,
} from "@/components/webrix/sections";
import { PROJECTS } from "@/lib/site";

const title = "Webrix — Build. Design. Grow.";
const description =
  "Webrix creates modern websites, landing pages and digital experiences for businesses, brands and creators.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <IntroSection />
      <ServicesSection />
      <WorkSection limit={3} />
      <CaseStudySection project={PROJECTS[0]!} />
      <WhySection />
      <ProcessSection />
      <AuditSection />
      <PricingSection />
      <FaqSection />
      <FinalCta />
    </>
  );
}
