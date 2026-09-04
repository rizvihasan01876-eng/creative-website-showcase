import { createFileRoute } from "@tanstack/react-router";
import {
  AuditSection,
  Container,
  FinalCta,
  PricingSection,
  ServicesList,
} from "@/components/webrix/sections";
import { Reveal } from "@/components/webrix/reveal";
import { SERVICES } from "@/lib/site";

const title = "Services — Web Design & Development | Webrix";
const description =
  "Web design, landing pages, e-commerce, portfolios and custom development. Webrix builds responsive, conversion-focused websites from scratch.";

export const Route = createFileRoute("/services")({
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
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <section className="pt-32 pb-4 md:pt-44">
        <Container>
          <div className="max-w-3xl">
            <p className="eyebrow fade-up">Services</p>
            <h1
              className="display fade-up mt-5 text-[clamp(3rem,11vw,8.5rem)] text-ink"
              style={{ animationDelay: "80ms" }}
            >
              What We Build
            </h1>
            <p
              className="fade-up mt-7 max-w-xl text-lg leading-relaxed text-ink-soft"
              style={{ animationDelay: "160ms" }}
            >
              Five things, done properly. Each one starts with your business goal, not
              a template.
            </p>
          </div>
          <ServicesList />
        </Container>
      </section>

      <section className="rule-top py-20 md:py-32">
        <Container>
          <div className="grid gap-px bg-hairline md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => (
              <Reveal key={s.no} delay={i * 60} className="bg-background p-8 md:p-10">
                <span className="font-mono text-xs text-ink-faint">{s.no}</span>
                <h2 className="display mt-5 text-[clamp(1.4rem,2.6vw,2rem)] text-ink">
                  {s.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{s.description}</p>
                <ul className="mt-6 space-y-2">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex gap-3 text-sm text-ink-soft">
                      <span aria-hidden className="text-accent">
                        —
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <PricingSection />
      <AuditSection />
      <FinalCta />
    </>
  );
}
