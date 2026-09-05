import { createFileRoute, notFound } from "@tanstack/react-router";
import { Container, SectionHead, FinalCta } from "@/components/webrix/sections";
import { MagneticLink } from "@/components/webrix/magnetic-link";
import { Reveal } from "@/components/webrix/reveal";
import { PROJECTS, type Project } from "@/lib/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/work/$slug")({
  loader: async ({ params }) => {
    const project = PROJECTS.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    const project = loaderData?.project;
    const title = project
      ? `${project.name} — Case Study by Webrix`
      : "Case Study — Webrix";
    const description = project
      ? `See how Webrix designed and built the ${project.name} ${project.service.toLowerCase()}. ${project.description}`
      : "Case study by Webrix.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: CaseStudyPage,
  notFoundComponent: CaseStudyNotFound,
});

function CaseStudyNotFound() {
  return (
    <section className="flex min-h-[60vh] items-center justify-center px-4 pt-32">
      <div className="text-center">
        <p className="eyebrow">Case study</p>
        <h1 className="display mt-5 text-[clamp(2.5rem,8vw,5rem)] text-ink">
          Project not found
        </h1>
        <p className="mt-4 text-ink-soft">
          That project does not exist or the URL has changed.
        </p>
        <MagneticLink to="/work" variant="outline" className="mt-8">
          Back to all work
        </MagneticLink>
      </div>
    </section>
  );
}

function MetaRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-b border-hairline py-4">
      <dt className="text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-ink-faint">
        {label}
      </dt>
      <dd className="mt-1 text-base text-ink">{value}</dd>
    </div>
  );
}

function CaseStudyPage() {
  const { project } = Route.useLoaderData() as { project: Project };
  const steps = [
    { label: "The Challenge", body: project.challenge },
    { label: "The Approach", body: project.approach },
    { label: "The Solution", body: project.solution },
    { label: "The Outcome", body: project.outcome },
  ];

  const related = PROJECTS.filter((p) => p.slug !== project.slug).slice(0, 2);

  return (
    <>
      <section className="pt-32 pb-4 md:pt-44">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
            <div>
              <Reveal as="p" className="eyebrow">
                Case study — {project.industry}
              </Reveal>
              <Reveal
                as="h1"
                delay={60}
                className="display mt-5 text-[clamp(3rem,10vw,7.5rem)] text-ink"
              >
                {project.name}
              </Reveal>
              <Reveal as="p" delay={120} className="mt-4 text-sm font-medium uppercase tracking-[0.14em] text-accent">
                {project.service}
              </Reveal>
              <Reveal
                as="p"
                delay={180}
                className="mt-8 max-w-xl text-lg leading-relaxed text-ink-soft"
              >
                {project.description}
              </Reveal>
              <Reveal delay={240} className="mt-10 flex flex-wrap gap-3">
                <MagneticLink href={project.url} variant="solid">
                  View Live Site ↗
                </MagneticLink>
                <MagneticLink to="/work" variant="outline">
                  All Projects
                </MagneticLink>
              </Reveal>
            </div>

            <Reveal delay={120} variant="mask" className="lg:pt-12">
              <dl>
                <MetaRow label="Client / Industry" value={project.industry} />
                <MetaRow label="Service" value={project.service} />
                <MetaRow label="Project No." value={project.no} />
                <MetaRow label="Status" value="Live" />
              </dl>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="rule-top bg-surface py-16 md:py-24">
        <Container>
          <Reveal variant="mask">
            <img
              src={project.image}
              alt={`${project.name} website designed and built by Webrix`}
              loading="eager"
              decoding="async"
              width={1440}
              height={900}
              className="w-full border border-hairline object-cover object-top"
            />
          </Reveal>
        </Container>
      </section>

      <section className="rule-top py-20 md:py-32" aria-labelledby="story-heading">
        <Container>
          <SectionHead
            eyebrow="Inside the build"
            title="How it came together"
            subtitle="A step-by-step look at the thinking behind the project."
          />
          <h2 id="story-heading" className="sr-only">
            Case study story
          </h2>

          <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-20">
            {steps.map((s, i) => (
              <Reveal
                key={s.label}
                delay={i * 80}
                className={cn(
                  "border-t border-hairline pt-8",
                  i === steps.length - 1 && "lg:col-span-2"
                )}
              >
                <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                  {s.label}
                </h3>
                <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-soft">
                  {s.body}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {related.length > 0 && (
        <section className="rule-top bg-surface py-20 md:py-28" aria-labelledby="related-heading">
          <Container>
            <Reveal as="p" className="eyebrow">
              More work
            </Reveal>
            <Reveal
              as="h2"
              id="related-heading"
              delay={60}
              className="display mt-4 text-[clamp(2rem,5vw,4rem)] text-ink"
            >
              Related Projects
            </Reveal>
            <div className="mt-12 grid gap-8 md:grid-cols-2">
              {related.map((p, i) => (
                <Reveal key={p.slug} delay={i * 100}>
                  <Link
                    to="/work/$slug"
                    params={{ slug: p.slug }}
                    className="group block overflow-hidden border border-hairline bg-background"
                  >
                    <img
                      src={p.image}
                      alt={`${p.name} — ${p.service}`}
                      loading="lazy"
                      decoding="async"
                      width={720}
                      height={450}
                      className="aspect-[16/10] w-full object-cover object-top transition-transform duration-[1.2s] group-hover:scale-[1.04]"
                      style={{ transitionTimingFunction: "var(--ease-out-quint)" }}
                    />
                    <div className="p-6 md:p-8">
                      <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-ink-faint">
                        {p.industry}
                      </p>
                      <h3 className="display mt-2 text-2xl text-ink">{p.name}</h3>
                      <p className="mt-2 text-sm text-ink-soft">{p.service}</p>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      )}

      <FinalCta />
    </>
  );
}
