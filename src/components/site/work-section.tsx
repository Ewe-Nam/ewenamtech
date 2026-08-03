const PROJECTS = [
  {
    badge: "Live Platform · 2025–2026",
    title: "CBT StyleHub",
    subtitle: "Full-Stack Salon Booking & Management Platform",
    role: "Project Manager & Technical Lead (3-person team)",
    href: "https://cbt-stylehub.vercel.app",
    hrefLabel: "cbt-stylehub.vercel.app",
    description:
      "A full-stack, four-role platform (customer, professional, owner, admin) shipped as an installable Progressive Web App. Auth.js v5 with role-based access control and SMS OTP verification, a real-time booking engine, and owner/admin consoles with map-based salon discovery.",
    highlights: [
      "Auth.js v5, JWT sessions, RBAC, and SMS OTP sign-in",
      "Real-time booking engine — availability, travel fees, status messaging",
      "Led a 3-person team through a 12-week Git branch → PR → CI/CD workflow",
      "Used AI coding tools (Claude Code) to accelerate implementation while owning architecture, security design, and final code review",
    ],
    stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4", "Prisma 6", "Supabase PostgreSQL", "Auth.js v5", "Vercel CI/CD"],
  },
  {
    badge: "Live & In Production · v1.0",
    title: "MASCO Staff Portal",
    subtitle: "Mamfe Apostolic School Complex — Staff Portal",
    role: "Sole Full-Stack Developer",
    href: null,
    hrefLabel: "Live & in daily production use",
    description:
      "A production school management platform — database, backend, React front end, and CI/CD — built end-to-end as the sole developer. A 22-table PostgreSQL database secured with Row-Level Security across six roles, an automated SMS pipeline, and a curriculum-accurate grading engine.",
    highlights: [
      "22-table PostgreSQL schema secured with RLS across six roles",
      "Continuous assessment, WAEC-style aggregates, report cards & transcripts",
      "Traced a live outage to a Vercel build-log issue; closed a privilege-escalation path in a security review",
      "Leveraged AI-assisted development (Claude Code) throughout the build, directing architecture and security decisions while using AI to speed up implementation and debugging",
    ],
    stack: ["React 18", "TypeScript", "Vite", "Supabase (PostgreSQL, Auth, RLS)", "Edge Functions (Deno)", "Arkesel SMS", "Vercel CI/CD"],
  },
  {
    badge: "Live Website · Freelance",
    title: "MASCO Marketing Website",
    subtitle: "Mamfe Apostolic School Complex — Marketing Website",
    role: "Web Developer & Designer, Freelance (EwenamTech)",
    href: "https://masco-eta.vercel.app",
    hrefLabel: "masco-eta.vercel.app",
    description:
      "A responsive 8-page marketing site — Home, About, Academics, Admissions, Campus Life, Gallery, Staff, Contact — with a framework-free, easy-to-host architecture and a serverless contact form.",
    highlights: [
      "8 pages, fully responsive, no framework overhead",
      "Web3Forms integration with validation and spam protection",
      "Branch-per-feature Git workflow with PR review and automatic Vercel deployment",
    ],
    stack: ["HTML5", "CSS3", "JavaScript", "Python (Pillow)", "Web3Forms", "Vercel CI/CD"],
  },
];

export default function WorkSection() {
  return (
    <section id="work" className="border-t border-white/10 bg-zinc-950 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <div className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-400">
            Selected work
          </div>
          <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">
            Featured Projects
          </h2>
        </div>

        <div className="flex flex-col gap-8">
          {PROJECTS.map((p) => (
            <div
              key={p.title}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-colors hover:border-white/20 sm:p-10"
            >
              <div className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-300/80">
                {p.badge}
              </div>
              <h3 className="mb-1 text-2xl font-semibold text-white sm:text-3xl">{p.title}</h3>
              <p className="mb-3 text-sm text-zinc-400">{p.subtitle}</p>
              <div className="mb-6 flex flex-wrap items-center gap-2 text-xs font-mono text-zinc-500">
                <span>{p.role}</span>
                <span>·</span>
                {p.href ? (
                  <a href={p.href} target="_blank" rel="noopener noreferrer" className="font-semibold text-cyan-400 hover:text-cyan-300">
                    {p.hrefLabel} ↗
                  </a>
                ) : (
                  <span>{p.hrefLabel}</span>
                )}
              </div>
              <p className="mb-6 max-w-3xl text-sm leading-relaxed text-zinc-300 sm:text-base">
                {p.description}
              </p>
              <ul className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {p.highlights.map((h) => (
                  <li key={h} className="border-l-2 border-cyan-400/40 pl-3 text-sm leading-relaxed text-zinc-400">
                    {h}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {p.stack.map((t) => (
                  <span key={t} className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-300">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
