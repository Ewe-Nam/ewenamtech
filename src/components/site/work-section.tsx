import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { CATEGORY_BLURB, CATEGORY_ORDER, projectsByCategory } from "@/lib/projects";

export default function WorkSection() {
  return (
    <section id="work" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <div className="eyebrow mb-3 text-cyan-200/75">Selected work</div>
          <h2 className="text-[clamp(1.9rem,4vw,2.75rem)] font-bold leading-tight text-white">
            Client systems, products and research
          </h2>
        </div>

        <div className="space-y-14">
          {CATEGORY_ORDER.map((category) => {
            const projects = projectsByCategory(category);
            if (projects.length === 0) return null;

            return (
              <div key={category}>
                <div className="mb-6 border-b border-cyan-200/20 pb-4">
                  <h3 className="eyebrow text-cyan-200/85">{category}</h3>
                  <p className="muted mt-1.5 text-[15px]">
                    {CATEGORY_BLURB[category]}
                  </p>
                </div>

                <div className="grid gap-5 lg:grid-cols-2">
                  {projects.map((p) => (
                    <article key={p.slug} className="panel flex flex-col overflow-hidden">
                      <Link
                        href={`/work/${p.slug}`}
                        className="block overflow-hidden border-b border-[color:var(--sea)]/15 bg-[color:var(--sea)]/5"
                        tabIndex={-1}
                        aria-hidden
                      >
                        <Image
                          src={p.shot}
                          alt=""
                          width={1280}
                          height={800}
                          sizes="(max-width: 1024px) 100vw, 560px"
                          className="h-auto w-full"
                        />
                      </Link>

                      <div className="flex flex-1 flex-col p-7">
                        <p className="eyebrow text-[color:var(--sea)]">{p.status}</p>
                        <h4 className="mt-2 text-xl font-bold sm:text-2xl">
                          <Link
                            href={`/work/${p.slug}`}
                            className="transition hover:text-[color:var(--sea)] focus-visible:text-[color:var(--sea)]"
                          >
                            {p.title}
                          </Link>
                        </h4>
                        <p className="muted mt-1 text-[15px]">{p.subtitle}</p>

                        <p className="muted mt-4 flex-1 leading-relaxed">{p.summary}</p>

                        <dl className="mt-5 space-y-1.5 font-[family-name:var(--font-plex-mono)] text-xs text-[color:var(--ink-soft)]">
                          <div className="flex gap-2">
                            <dt className="shrink-0">Role —</dt>
                            <dd>{p.role}</dd>
                          </div>
                          <div className="flex gap-2">
                            <dt className="shrink-0">Period —</dt>
                            <dd>{p.period}</dd>
                          </div>
                        </dl>

                        <ul className="mt-5 flex flex-wrap gap-1.5">
                          {p.stack.slice(0, 5).map((t) => (
                            <li
                              key={t}
                              className="rounded-full border border-[color:var(--sea)]/20 px-2.5 py-1 font-[family-name:var(--font-plex-mono)] text-[11px] text-[color:var(--sea)]"
                            >
                              {t}
                            </li>
                          ))}
                          {p.stack.length > 5 && (
                            <li className="px-1 py-1 font-[family-name:var(--font-plex-mono)] text-[11px] text-[color:var(--ink-soft)]">
                              +{p.stack.length - 5} more
                            </li>
                          )}
                        </ul>

                        <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-1">
                          <Link
                            href={`/work/${p.slug}`}
                            className="inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-[color:var(--sea)] hover:underline"
                          >
                            View case study
                            <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                          </Link>
                          {p.href && (
                            <a
                              href={p.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex min-h-11 items-center gap-1.5 text-sm text-[color:var(--ink-soft)] hover:text-[color:var(--sea)] hover:underline"
                            >
                              Live site
                              <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                            </a>
                          )}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
