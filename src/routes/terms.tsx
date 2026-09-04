import { createFileRoute } from "@tanstack/react-router";
import { Container } from "@/components/webrix/sections";
import { BRAND } from "@/lib/site";

const title = "Terms of Service — Webrix";
const description =
  "The terms that apply to design and development projects delivered by Webrix, including scope, payment and ownership.";

export const Route = createFileRoute("/terms")({
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
  component: TermsPage,
});

const SECTIONS = [
  {
    h: "Scope of work",
    p: "Every project starts with a written scope covering pages, features, revisions and timeline. Work outside that scope is quoted separately before it begins.",
  },
  {
    h: "Payment",
    p: "Projects usually run on a deposit before work starts and the balance before launch. Exact terms are confirmed in your proposal.",
  },
  {
    h: "Revisions",
    p: "Each package includes a defined number of revision rounds. Additional rounds are available at an agreed rate.",
  },
  {
    h: "Ownership",
    p: "Once the final payment clears, the completed website and its assets are yours. We may show the work in our portfolio unless you ask us not to.",
  },
  {
    h: "Third-party services",
    p: "Hosting, domains, plugins and other third-party services are billed by their providers and governed by their own terms.",
  },
  {
    h: "Liability",
    p: "We take care to deliver reliable work, but we are not liable for indirect losses arising from use of a delivered website.",
  },
];

function TermsPage() {
  return (
    <section className="pt-32 pb-24 md:pt-44 md:pb-32">
      <Container>
        <div className="max-w-2xl">
          <p className="eyebrow">Legal</p>
          <h1 className="display mt-5 text-[clamp(2.5rem,8vw,5.5rem)] text-ink">
            Terms of Service
          </h1>
          <div className="mt-12 space-y-10">
            {SECTIONS.map((s) => (
              <div key={s.h} className="rule-top pt-6">
                <h2 className="text-xl font-semibold text-ink">{s.h}</h2>
                <p className="mt-3 leading-relaxed text-ink-soft">{s.p}</p>
              </div>
            ))}
            <div className="rule-top pt-6">
              <h2 className="text-xl font-semibold text-ink">Contact</h2>
              <p className="mt-3 leading-relaxed text-ink-soft">
                Anything unclear? Email {BRAND.email} before signing off on a project.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
