import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, GitBranch, Info } from "lucide-react";
import { PROJECTS, getProject } from "@/lib/projects";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Case study not found" };

  const title = `${project.title} — Case Study`;
  return {
    title,
    description: project.summary,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: {
      title: `${title} | EwenamTech`,
      description: project.summary,
      type: "article",
      url: `/work/${project.slug}`,
      images: [{ url: project.shot, alt: project.shotAlt }],
    },
  };
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-cyan-200/15 pt-8">
      <h2 className="text-xl font-bold sm:text-2xl">{title}</h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li
          key={item}
          className="border-l-2 border-[color:var(--sea)]/30 pl-4 leading-relaxed text-[color:var(--ink-soft)]"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <article className="mx-auto max-w-4xl px-4 pt-12 pb-24 sm:px-6 lg:px-8">
      <Link
        href="/#work"
        className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-cyan-200/85 transition hover:text-white"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden />
        All work
      </Link>

      <header className="mt-6">
        <p className="eyebrow text-cyan-200/75">{project.category}</p>
        <h1 className="mt-3 text-[clamp(2rem,5vw,3.25rem)] font-bold leading-tight text-white">
          {project.title}
        </h1>
        <p className="mt-3 text-lg text-sky-100/85">{project.subtitle}</p>

        <dl className="mt-8 grid gap-x-8 gap-y-5 border-y border-cyan-200/20 py-6 sm:grid-cols-3">
          <div>
            <dt className="eyebrow text-cyan-200/60">My role</dt>
            <dd className="mt-1.5 text-sm font-medium text-white">{project.role}</dd>
          </div>
          <div>
            <dt className="eyebrow text-cyan-200/60">Period</dt>
            <dd className="mt-1.5 text-sm font-medium text-white">{project.period}</dd>
          </div>
          <div>
            <dt className="eyebrow text-cyan-200/60">Status</dt>
            <dd className="mt-1.5 text-sm font-medium text-white">{project.status}</dd>
          </div>
        </dl>

        {(project.href || project.repo) && (
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
            {project.href && (
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-[color:var(--sea)] hover:underline"
              >
                <ExternalLink className="h-4 w-4" aria-hidden />
                {project.hrefLabel}
              </a>
            )}
            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-[color:var(--sea)] hover:underline"
              >
                <GitBranch className="h-4 w-4" aria-hidden />
                Repository
              </a>
            )}
          </div>
        )}
      </header>

      <figure className="mt-10 overflow-hidden rounded-xl border border-[color:var(--sea)]/15 bg-[color:var(--sea)]/5">
        <Image
          src={project.shot}
          alt={project.shotAlt}
          width={1280}
          height={800}
          priority
          sizes="(max-width: 896px) 100vw, 896px"
          className="h-auto w-full"
        />
      </figure>

      <div className="mt-12 space-y-10">
        <Section title="Overview">
          <p className="muted leading-relaxed">{project.overview}</p>
        </Section>

        <Section title="Problem">
          <p className="muted leading-relaxed">{project.problem}</p>
        </Section>

        <Section title="Solution">
          <p className="muted leading-relaxed">{project.solution}</p>
        </Section>

        <Section title="Technical approach">
          <Bullets items={project.approach} />
        </Section>

        <Section title="Key features">
          <Bullets items={project.features} />
        </Section>

        <Section title="Security considerations">
          <Bullets items={project.security} />
        </Section>

        <Section title="Outcome">
          <Bullets items={project.outcome} />
          {project.pending && (
            <p className="muted mt-5 flex gap-3 rounded-xl border border-cyan-200/20 bg-[color:var(--sea)]/5 p-4 text-[15px] leading-relaxed">
              <Info className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--sea)]" aria-hidden />
              <span>{project.pending}</span>
            </p>
          )}
        </Section>

        <Section title="Technologies used">
          <ul className="flex flex-wrap gap-2">
            {project.stack.map((t) => (
              <li
                key={t}
                className="rounded-full border border-[color:var(--sea)]/25 px-3 py-1 font-[family-name:var(--font-plex-mono)] text-xs text-[color:var(--sea)]"
              >
                {t}
              </li>
            ))}
          </ul>
        </Section>
      </div>

      <aside className="panel mt-14 p-7 text-center">
        <h2 className="text-lg font-bold">Have something similar in mind?</h2>
        <p className="muted mx-auto mt-2 max-w-md leading-relaxed">
          Networks, systems, security or software — describe the problem and
          you&rsquo;ll get a straight answer on whether EwenamTech can help.
        </p>
        <Link
          href="/#contact"
          className="mt-5 inline-flex min-h-11 items-center justify-center rounded-full bg-[color:var(--foam)] px-6 py-3 text-sm font-semibold text-[color:var(--ink)] transition hover:bg-white"
        >
          Contact EwenamTech
        </Link>
      </aside>
    </article>
  );
}
