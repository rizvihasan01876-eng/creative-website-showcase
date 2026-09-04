import { createFileRoute } from "@tanstack/react-router";
import { Container } from "@/components/webrix/sections";
import { InquiryForm } from "@/components/webrix/inquiry-form";
import { BRAND } from "@/lib/site";

const title = "Start a Project — Webrix";
const description =
  "Tell us about your website project: type, budget, timeline and goals. We reply within one working day.";

export const Route = createFileRoute("/start-project")({
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
  component: StartProjectPage,
});

function StartProjectPage() {
  return (
    <>
      <section className="pt-32 pb-4 md:pt-44">
        <Container>
          <div className="max-w-3xl">
            <p className="eyebrow fade-up">Start a project</p>
            <h1
              className="display fade-up mt-5 text-[clamp(3rem,11vw,8.5rem)] text-ink"
              style={{ animationDelay: "80ms" }}
            >
              Let&rsquo;s Build
              <br />
              Something
            </h1>
            <p
              className="fade-up mt-7 max-w-xl text-lg leading-relaxed text-ink-soft"
              style={{ animationDelay: "160ms" }}
            >
              Fill in the details below and we&rsquo;ll come back with a plan, a price
              and a timeline. Prefer WhatsApp? Message {BRAND.phone} directly.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-14 md:py-20">
        <Container>
          <div className="max-w-3xl">
            <InquiryForm />
          </div>
        </Container>
      </section>
    </>
  );
}
