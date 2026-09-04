import { Link } from "@tanstack/react-router";
import { Reveal } from "./reveal";
import { MagneticLink } from "./magnetic-link";
import {
  CAPABILITIES,
  FAQS,
  PRICING,
  PROCESS,
  PROJECTS,
  SERVICES,
  WHY,
  type Project,
} from "@/lib/site";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

export function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-[1440px] px-5 md:px-10", className)}>
      {children}
    </div>
  );
}

export function SectionHead({
  eyebrow,
  title,
  subtitle,
  className,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  className?: string;
}) {
  return (
    <div className={cn("max-w-3xl", className)}>
      {eyebrow ? (
        <Reveal as="p" className="eyebrow">
          {eyebrow}
        </Reveal>
      ) : null}
      <Reveal as="h2" delay={60} className="display mt-4 text-[clamp(2.5rem,7vw,5.5rem)] text-ink">
        {title}
      </Reveal>
      {subtitle ? (
        <Reveal as="p" delay={130} className="mt-5 max-w-xl text-lg leading-relaxed text-ink-soft">
          {subtitle}
        </Reveal>
      ) : null}
    </div>
  );
}

/* ---------------- Intro / trust ---------------- */

export function IntroSection() {
  return (
    <section className="rule-top py-20 md:py-32" aria-labelledby="intro-heading">
      <Container>
        <Reveal
          as="h2"
          id="intro-heading"
          className="max-w-5xl text-[clamp(1.6rem,4.2vw,3.25rem)] leading-[1.15] font-medium tracking-tight text-ink"
        >
          Your website is more than a digital presence. It&rsquo;s your first
          impression, your storefront and your growth engine.
        </Reveal>

        <div className="mt-14 grid gap-10 md:grid-cols-[1fr_1.1fr] md:gap-20">
          <Reveal as="p" delay={80} className="text-base leading-relaxed text-ink-soft">
            Webrix is a digital web studio. We design and build websites that look
            considered, load fast and give visitors an obvious next step. No
            templates dressed up as custom work — every project starts from your
            business, your audience and what you actually need the site to do.
          </Reveal>
          <Reveal delay={140}>
            <ul className="grid grid-cols-1 sm:grid-cols-2">
              {CAPABILITIES.map((c, i) => (
                <li
                  key={c}
                  className="flex items-baseline gap-4 border-b border-hairline py-4"
                >
                  <span className="font-mono text-xs text-ink-faint">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-base font-medium text-ink">{c}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

/* ---------------- Services ---------------- */

export function ServicesList() {
  return (
    <ul className="rule-top mt-14">
      {SERVICES.map((s, i) => (
        <li key={s.no}>
          <Reveal delay={i * 60}>
            <Link
              to="/start-project"
              className="group grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-5 border-b border-hairline py-8 transition-colors duration-500 hover:bg-surface md:grid-cols-[5rem_minmax(0,1.1fr)_minmax(0,1.2fr)_auto] md:gap-8 md:px-4"
            >
              <span className="font-mono text-xs text-ink-faint">{s.no}</span>
              <h3 className="display text-[clamp(1.6rem,4vw,3rem)] text-ink transition-transform duration-500 group-hover:translate-x-2">
                {s.title}
              </h3>
              <p className="col-span-3 text-sm leading-relaxed text-ink-soft md:col-span-1">
                {s.description}
              </p>
              <span
                aria-hidden
                className="hidden h-11 w-11 shrink-0 place-items-center rounded-full border border-ink/15 text-ink transition-all duration-500 group-hover:border-accent group-hover:bg-accent group-hover:text-accent-foreground md:grid"
              >
                ↗
              </span>
            </Link>
          </Reveal>
        </li>
      ))}
    </ul>
  );
}

export function ServicesSection() {
  return (
    <section className="rule-top py-20 md:py-32" aria-labelledby="services-heading">
      <Container>
        <SectionHead eyebrow="Services" title="What We Build" />
        <div id="services-heading" className="sr-only">
          What We Build
        </div>
        <ServicesList />
      </Container>
    </section>
  );
}

/* ---------------- Work ---------------- */

export function ProjectBlock({ project, index }: { project: Project; index: number }) {
  const flip = index % 2 === 1;
  return (
    <article className="grid items-center gap-8 md:grid-cols-12 md:gap-14">
      <Reveal
        variant="mask"
        className={cn("md:col-span-7", flip && "md:order-2 md:col-start-6")}
      >
        <a
          href={project.url}
          target="_blank"
          rel="noreferrer"
          className="group block overflow-hidden border border-hairline bg-surface"
        >
          <img
            src={project.image}
            alt={`${project.name} — ${project.service} designed and built by Webrix`}
            loading="lazy"
            decoding="async"
            width={1440}
            height={900}
            className="aspect-[16/10] w-full object-cover object-top transition-transform duration-[1.2s] group-hover:scale-[1.04]"
            style={{ transitionTimingFunction: "var(--ease-out-quint)" }}
          />
        </a>
      </Reveal>

      <div className={cn("md:col-span-5", flip && "md:order-1 md:col-start-1")}>
        <Reveal as="p" className="eyebrow">
          Project {project.no} — {project.industry}
        </Reveal>
        <Reveal as="h3" delay={60} className="display mt-4 text-[clamp(2rem,5vw,3.75rem)] text-ink">
          {project.name}
        </Reveal>
        <Reveal as="p" delay={100} className="mt-3 text-sm font-medium uppercase tracking-[0.14em] text-accent">
          {project.service}
        </Reveal>
        <Reveal as="p" delay={140} className="mt-5 text-base leading-relaxed text-ink-soft">
          {project.description}
        </Reveal>
        <Reveal delay={190} className="mt-8 flex flex-wrap gap-3">
          <MagneticLink href={project.url} variant="outline">
            View Live Site ↗
          </MagneticLink>
        </Reveal>
      </div>
    </article>
  );
}

export function WorkSection({ limit }: { limit?: number }) {
  const items = limit ? PROJECTS.slice(0, limit) : PROJECTS;
  return (
    <section className="rule-top py-20 md:py-32" aria-labelledby="work-heading">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHead
            eyebrow="Portfolio"
            title="Selected Work"
            subtitle="From ideas to digital experiences."
          />
          <Reveal delay={160}>
            <Link
              to="/work"
              className="link-underline text-sm font-semibold uppercase tracking-[0.14em] text-ink"
            >
              All projects ↗
            </Link>
          </Reveal>
        </div>
        <h2 id="work-heading" className="sr-only">
          Selected Work
        </h2>

        <div className="mt-16 space-y-24 md:mt-24 md:space-y-36">
          {items.map((p, i) => (
            <ProjectBlock key={p.slug} project={p} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ---------------- Case study ---------------- */

export function CaseStudySection({ project }: { project: Project }) {
  const steps = [
    { label: "The Challenge", body: project.challenge },
    { label: "The Approach", body: project.approach },
    { label: "The Solution", body: project.solution },
    { label: "The Outcome", body: project.outcome },
  ];

  return (
    <section className="rule-top bg-surface py-20 md:py-32" aria-labelledby="case-heading">
      <Container>
        <SectionHead
          eyebrow={`Case study — ${project.name}`}
          title="Inside The Build"
          subtitle={`How the ${project.name} ${project.service.toLowerCase()} came together, step by step.`}
        />
        <h2 id="case-heading" className="sr-only">
          Case study
        </h2>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <Reveal variant="mask">
            <img
              src={project.image}
              alt={`${project.name} website designed by Webrix`}
              loading="lazy"
              decoding="async"
              width={1440}
              height={900}
              className="w-full border border-hairline object-cover object-top"
            />
          </Reveal>
          <ol className="space-y-0">
            {steps.map((s, i) => (
              <Reveal as="li" key={s.label} delay={i * 70} className="border-b border-hairline py-7">
                <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                  {s.label}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-ink-soft">{s.body}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}

/* ---------------- Why ---------------- */

export function WhySection() {
  return (
    <section className="rule-top py-20 md:py-32" aria-labelledby="why-heading">
      <Container>
        <SectionHead eyebrow="Why us" title="Why Webrix?" />
        <h2 id="why-heading" className="sr-only">
          Why Webrix
        </h2>
        <div className="mt-14 grid gap-px bg-hairline sm:grid-cols-2">
          {WHY.map((w, i) => (
            <Reveal key={w.no} delay={i * 70} className="bg-background p-8 md:p-12">
              <span className="font-mono text-xs text-ink-faint">{w.no}</span>
              <h3 className="display mt-6 text-[clamp(1.5rem,3vw,2.25rem)] text-ink">
                {w.title}
              </h3>
              <p className="mt-4 max-w-sm text-base leading-relaxed text-ink-soft">{w.body}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ---------------- Process ---------------- */

export function ProcessTimeline() {
  return (
    <ol className="mt-14 border-l border-hairline">
      {PROCESS.map((p, i) => (
        <Reveal as="li" key={p.no} delay={i * 70} className="relative pb-12 pl-8 last:pb-0 md:pl-14">
          <span
            aria-hidden
            className="absolute top-2 -left-[5px] h-2.5 w-2.5 rounded-full bg-ink"
          />
          <div className="grid gap-2 md:grid-cols-[8rem_minmax(0,1fr)] md:items-baseline md:gap-8">
            <span className="font-mono text-xs tracking-[0.2em] text-ink-faint">
              {p.no} — STEP
            </span>
            <div>
              <h3 className="display text-[clamp(1.6rem,3.6vw,2.75rem)] text-ink">{p.title}</h3>
              <p className="mt-3 max-w-lg text-base leading-relaxed text-ink-soft">{p.body}</p>
            </div>
          </div>
        </Reveal>
      ))}
    </ol>
  );
}

export function ProcessSection() {
  return (
    <section className="rule-top py-20 md:py-32" aria-labelledby="process-heading">
      <Container>
        <SectionHead
          eyebrow="Process"
          title="How We Work"
          subtitle="Five steps, reviewed with you at every stage."
        />
        <h2 id="process-heading" className="sr-only">
          How We Work
        </h2>
        <ProcessTimeline />
      </Container>
    </section>
  );
}

/* ---------------- Pricing ---------------- */

export function PricingSection() {
  return (
    <section className="rule-top py-20 md:py-32" aria-labelledby="pricing-heading">
      <Container>
        <SectionHead
          eyebrow="Pricing"
          title="Simple Guidance"
          subtitle="Every project is different. Tell us what you need and we'll recommend the right solution."
        />
        <h2 id="pricing-heading" className="sr-only">
          Pricing
        </h2>

        <div className="mt-14 grid gap-px bg-hairline md:grid-cols-3">
          {PRICING.map((p, i) => (
            <Reveal
              key={p.name}
              delay={i * 80}
              className={cn(
                "flex flex-col bg-background p-8 md:p-10",
                p.featured && "bg-ink text-background",
              )}
            >
              <h3
                className={cn(
                  "display text-[clamp(1.75rem,3.4vw,2.5rem)]",
                  p.featured ? "text-background" : "text-ink",
                )}
              >
                {p.name}
              </h3>
              <p
                className={cn(
                  "mt-3 text-sm leading-relaxed",
                  p.featured ? "text-background/70" : "text-ink-soft",
                )}
              >
                {p.for}
              </p>
              <ul className="mt-8 flex-1 space-y-3">
                {p.points.map((pt) => (
                  <li
                    key={pt}
                    className={cn(
                      "flex gap-3 text-sm",
                      p.featured ? "text-background/85" : "text-ink-soft",
                    )}
                  >
                    <span aria-hidden className={p.featured ? "text-background" : "text-accent"}>
                      —
                    </span>
                    {pt}
                  </li>
                ))}
              </ul>
              <Link
                to="/start-project"
                className={cn(
                  "mt-10 inline-flex items-center justify-center px-6 py-3.5 text-[0.75rem] font-semibold uppercase tracking-[0.14em] transition-colors duration-300",
                  p.featured
                    ? "bg-background text-ink hover:bg-accent hover:text-accent-foreground"
                    : "border border-ink/20 text-ink hover:bg-ink hover:text-background",
                )}
              >
                Get a Custom Quote
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ---------------- FAQ ---------------- */

export function FaqAccordion() {
  return (
    <Accordion type="single" collapsible className="mt-12 w-full">
      {FAQS.map((f, i) => (
        <AccordionItem key={f.q} value={`item-${i}`} className="border-b border-hairline">
          <AccordionTrigger className="py-7 text-left text-lg font-medium text-ink hover:no-underline md:text-2xl">
            {f.q}
          </AccordionTrigger>
          <AccordionContent className="max-w-2xl pb-8 text-base leading-relaxed text-ink-soft">
            {f.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export function FaqSection() {
  return (
    <section className="rule-top py-20 md:py-32" aria-labelledby="faq-heading">
      <Container>
        <SectionHead eyebrow="FAQ" title="Good Questions" />
        <h2 id="faq-heading" className="sr-only">
          Frequently asked questions
        </h2>
        <FaqAccordion />
      </Container>
    </section>
  );
}

/* ---------------- Free audit ---------------- */

export function AuditSection() {
  return (
    <section className="rule-top bg-surface py-20 md:py-28" aria-labelledby="audit-heading">
      <Container>
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr] md:items-end md:gap-20">
          <div>
            <Reveal as="p" className="eyebrow">
              Free website audit
            </Reveal>
            <Reveal
              as="h2"
              id="audit-heading"
              delay={60}
              className="display mt-4 text-[clamp(2rem,5.5vw,4rem)] text-ink"
            >
              Send us your site.
              <br />
              We&rsquo;ll find 3 problems.
            </Reveal>
          </div>
          <div>
            <Reveal as="p" delay={100} className="text-base leading-relaxed text-ink-soft">
              Share the link to your current website and we&rsquo;ll reply with three
              specific things holding it back — design, speed or structure. Free, no
              obligation, no sales script.
            </Reveal>
            <Reveal delay={160} className="mt-8 flex flex-wrap gap-3">
              <MagneticLink to="/start-project" variant="solid">
                Request Free Audit
              </MagneticLink>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ---------------- Final CTA ---------------- */

export function FinalCta() {
  return (
    <section className="rule-top py-24 md:py-40" aria-labelledby="cta-heading">
      <Container className="text-center">
        <Reveal as="p" className="eyebrow">
          Have a project in mind?
        </Reveal>
        <Reveal
          as="h2"
          id="cta-heading"
          delay={70}
          className="display mx-auto mt-6 max-w-5xl text-[clamp(2.5rem,9vw,8rem)] text-ink"
        >
          Let&rsquo;s build something people remember.
        </Reveal>
        <Reveal as="p" delay={140} className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-ink-soft">
          Tell us about your idea, and let&rsquo;s turn it into a digital experience.
        </Reveal>
        <Reveal delay={200} className="mt-12 flex flex-wrap justify-center gap-4">
          <MagneticLink to="/start-project" variant="solid">
            Start a Project ↗
          </MagneticLink>
          <MagneticLink to="/work" variant="outline">
            View Our Work
          </MagneticLink>
        </Reveal>
      </Container>
    </section>
  );
}
