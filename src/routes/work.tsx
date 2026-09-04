import { createFileRoute } from "@tanstack/react-router";
import {
  CaseStudySection,
  Container,
  FinalCta,
  SectionHead,
  WorkSection,
} from "@/components/webrix/sections";
import { PROJECTS } from "@/lib/site";

const title = "Selected Work — Webrix";
const description =
  "Live websites, landing pages and e-commerce projects designed and built by Webrix, including Luxa, Pure Bliss, Nova Skin and a creative developer portfolio.";

export const Route = createFileRoute("/work")({
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
  component: WorkPage,
});

function WorkPage() {
  return (
    <>
      <section className="pt-32 pb-4 md:pt-44">
        <Container>
          <div className="max-w-3xl">
            <p className="eyebrow fade-up">Portfolio</p>
            <h1
              className="display fade-up mt-5 text-[clamp(3rem,11vw,8.5rem)] text-ink"
              style={{ animationDelay: "80ms" }}
            >
              Selected Work
            </h1>
            <p
              className="fade-up mt-7 max-w-xl text-lg leading-relaxed text-ink-soft"
              style={{ animationDelay: "160ms" }}
            >
              From ideas to digital experiences. Every project below is live — click
              through and judge the work for yourself.
            </p>
          </div>
        </Container>
      </section>

      <WorkSection />
      <CaseStudySection project={PROJECTS[1]!} />

      <section className="rule-top py-20 md:py-28">
        <Container>
          <SectionHead
            eyebrow="Note"
            title="No Invented Numbers"
            subtitle="We only publish results when the client shares real data. Everything above is a live site you can open and inspect."
          />
        </Container>
      </section>

      <FinalCta />
    </>
  );
}
