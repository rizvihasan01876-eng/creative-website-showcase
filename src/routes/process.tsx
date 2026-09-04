import { createFileRoute } from "@tanstack/react-router";
import {
  Container,
  FinalCta,
  ProcessTimeline,
  SectionHead,
} from "@/components/webrix/sections";

const title = "How We Work — Webrix Process";
const description =
  "Our five-step web design process: discovery, strategy, design, development and launch — clear timelines, no surprises.";

export const Route = createFileRoute("/process")({
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
  component: ProcessPage,
});

function ProcessPage() {
  return (
    <>
      <section className="pt-32 pb-4 md:pt-44">
        <Container>
          <div className="max-w-3xl">
            <p className="eyebrow fade-up">Process</p>
            <h1
              className="display fade-up mt-5 text-[clamp(3rem,11vw,8.5rem)] text-ink"
              style={{ animationDelay: "80ms" }}
            >
              How We Work
            </h1>
            <p
              className="fade-up mt-7 max-w-xl text-lg leading-relaxed text-ink-soft"
              style={{ animationDelay: "160ms" }}
            >
              A calm, structured process. You always know what is happening, what is
              next, and when your website goes live.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <ProcessTimeline />
        </Container>
      </section>

      <section className="rule-top py-20 md:py-28">
        <Container>
          <SectionHead
            eyebrow="Communication"
            title="You Are Never Left Guessing"
            subtitle="Updates on WhatsApp or email at every stage, a preview link you can share with your team, and revisions handled inside the timeline we agree on."
          />
        </Container>
      </section>

      <FinalCta />
    </>
  );
}
