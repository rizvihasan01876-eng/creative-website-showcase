import { createFileRoute } from "@tanstack/react-router";
import { Container, FaqAccordion, FinalCta } from "@/components/webrix/sections";

const title = "FAQ — Webrix Web Design Questions";
const description =
  "Answers about pricing, timelines, revisions, hosting, maintenance and how working with Webrix actually goes.";

export const Route = createFileRoute("/faq")({
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
  component: FaqPage,
});

function FaqPage() {
  return (
    <>
      <section className="pt-32 pb-4 md:pt-44">
        <Container>
          <div className="max-w-3xl">
            <p className="eyebrow fade-up">Questions</p>
            <h1
              className="display fade-up mt-5 text-[clamp(3rem,11vw,8.5rem)] text-ink"
              style={{ animationDelay: "80ms" }}
            >
              FAQ
            </h1>
            <p
              className="fade-up mt-7 max-w-xl text-lg leading-relaxed text-ink-soft"
              style={{ animationDelay: "160ms" }}
            >
              Everything clients usually ask before starting. Anything missing? Message
              us on WhatsApp — we answer honestly.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <FaqAccordion />
        </Container>
      </section>

      <FinalCta />
    </>
  );
}
