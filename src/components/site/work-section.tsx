const PROJECTS = [
  {
    badge: "Networking · Research Project · 2026",
    title: "Accra Metropolitan Area Network",
    subtitle: "Performance Analysis & Penetration Testing",
    role: "Sole Researcher & Network Designer",
    href: null,
    hrefLabel: "Academic research project",
    description:
      "Designed and simulated a metropolitan-scale network in GNS3 to evaluate both performance and security. Analysed throughput, latency, packet loss, and jitter using Wireshark and iperf, then conducted penetration testing with Kali Linux to surface vulnerabilities and recommend hardening measures.",
    highlights: [
      "Metropolitan-scale routed topology designed and simulated in GNS3",
      "Throughput, latency, packet loss & jitter measured with Wireshark and iperf",
      "Penetration testing with Kali Linux to surface and harden vulnerabilities",
      "Findings written up as hardening recommendations for the simulated network",
    ],
    stack: ["GNS3", "Wireshark", "Kali Linux", "iperf", "VyOS", "TCP/IP", "Penetration testing"],
  },
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
    role: "Web Developer & Designer, Freelance (EwenamTech Services)",
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
    <section id="work" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <div className="eyebrow mb-3 text-cyan-200/75">Selected work</div>
          <h2 className="text-[clamp(1.9rem,4vw,2.75rem)] font-bold leading-tight text-white">
            Featured Projects
          </h2>
        </div>

        <div className="flex flex-col gap-5">
          {PROJECTS.map((p) => (
            <article key={p.title} className="panel p-7 sm:p-9">
              <div className="eyebrow mb-3 text-[color:var(--sea)]">{p.badge}</div>
              <h3 className="text-2xl font-bold sm:text-[1.75rem]">{p.title}</h3>
              <p className="muted mt-1">{p.subtitle}</p>
              <div className="mt-3 flex flex-wrap items-center gap-2 font-[family-name:var(--font-mono)] text-xs text-[color:var(--ink-soft)]">
                <span>{p.role}</span>
                <span aria-hidden>·</span>
                {p.href ? (
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-[color:var(--sea)] underline underline-offset-2"
                  >
                    {p.hrefLabel} ↗
                  </a>
                ) : (
                  <span>{p.hrefLabel}</span>
                )}
              </div>
              <p className="muted mt-5 max-w-3xl leading-relaxed">{p.description}</p>
              <ul className="mt-6 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
                {p.highlights.map((h) => (
                  <li
                    key={h}
                    className="border-l-2 border-[color:var(--sea)]/30 pl-3 text-[15px] leading-relaxed text-[color:var(--ink-soft)]"
                  >
                    {h}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-2">
                {p.stack.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-[color:var(--sea)]/8 px-3 py-1 font-[family-name:var(--font-mono)] text-xs text-[color:var(--sea)]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
