import { createFileRoute } from "@tanstack/react-router";
import { Container } from "@/components/webrix/sections";
import { BRAND } from "@/lib/site";

const title = "Privacy Policy — Webrix";
const description =
  "How Webrix collects, uses and protects the information you share through our website and project enquiry form.";

export const Route = createFileRoute("/privacy")({
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
  component: PrivacyPage,
});

const SECTIONS = [
  {
    h: "What we collect",
    p: "When you submit the project enquiry form we receive the name, email, phone number, business name, project type, budget range, timeline and project details you choose to provide.",
  },
  {
    h: "How we use it",
    p: "Only to respond to your enquiry, prepare a proposal and deliver work you commission. We do not sell or rent your information to anyone.",
  },
  {
    h: "Sharing",
    p: "We share your details with no third party except the tools required to communicate with you, such as email and WhatsApp.",
  },
  {
    h: "Retention",
    p: "Enquiry details are kept only as long as needed for the conversation or project. Ask us to delete your data at any time and we will.",
  },
  {
    h: "Cookies",
    p: "This website does not use advertising or tracking cookies.",
  },
];

function PrivacyPage() {
  return (
    <section className="pt-32 pb-24 md:pt-44 md:pb-32">
      <Container>
        <div className="max-w-2xl">
          <p className="eyebrow">Legal</p>
          <h1 className="display mt-5 text-[clamp(2.5rem,8vw,5.5rem)] text-ink">
            Privacy Policy
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
                Questions about this policy? Email {BRAND.email} or message{" "}
                {BRAND.phone} on WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
