import { createFileRoute } from "@tanstack/react-router";
import {
  Container,
  FinalCta,
  SectionHead,
  WhySection,
} from "@/components/webrix/sections";
import { BRAND, CAPABILITIES } from "@/lib/site";

const title = "About Webrix — Digital Web Studio";
const description =
  "Webrix is a digital web studio building modern, responsive, conversion-focused websites for businesses, brands and creators.";

export const Route = createFileRoute("/about")({
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
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="pt-32 pb-4 md:pt-44">
        <Container>
          <div className="max-w-3xl">
            <p className="eyebrow fade-up">About</p>
            <h1
              className="display fade-up mt-5 text-[clamp(3rem,11vw,8.5rem)] text-ink"
              style={{ animationDelay: "80ms" }}
            >
              A Studio, Not
              <br />A Template Shop
            </h1>
            <p
              className="fade-up mt-7 max-w-xl text-lg leading-relaxed text-ink-soft"
              style={{ animationDelay: "160ms" }}
            >
              {BRAND.name} is a digital web studio. We design and build websites that
              look premium, load fast and turn visitors into enquiries — every project
              designed from scratch around the business behind it.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="eyebrow">What we believe</h2>
              <p className="mt-6 text-lg leading-relaxed text-ink-soft">
                Good design is not decoration. It is clarity — the right message, in the
                right order, on a page that feels effortless on any device. We keep the
                interface quiet so your work can be loud.
              </p>
              <p className="mt-5 text-lg leading-relaxed text-ink-soft">
                We only show live projects and real outcomes. No stock metrics, no
                invented testimonials.
              </p>
            </div>
            <div>
              <h2 className="eyebrow">What we do</h2>
              <ul className="mt-6 space-y-4">
                {CAPABILITIES.map((c) => (
                  <li
                    key={c}
                    className="rule-top pt-4 text-2xl text-ink md:text-3xl"
                  >
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <WhySection />

      <section className="rule-top py-20 md:py-28">
        <Container>
          <SectionHead
            eyebrow="Based in Bangladesh"
            title="Working Worldwide"
            subtitle={`Reach us any time on WhatsApp at ${BRAND.phone} or by email at ${BRAND.email}. We usually reply within one working day.`}
          />
        </Container>
      </section>

      <FinalCta />
    </>
  );
}
