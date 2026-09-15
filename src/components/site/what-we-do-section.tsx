import { Network, ServerCog, ShieldCheck, Code2, ArrowRight } from "lucide-react";

const SERVICES = [
  {
    id: "network-infrastructure",
    icon: Network,
    title: "Network Infrastructure",
    lead: true,
    blurb:
      "Designing, building and troubleshooting the network a business actually runs on — from addressing and switching through to branch connectivity.",
    items: [
      "LAN/WAN configuration",
      "Router & switch configuration",
      "IP addressing",
      "Network troubleshooting",
      "Structured cabling",
      "Branch connectivity",
      "Network optimisation",
      "Infrastructure documentation",
    ],
  },
  {
    id: "it-support",
    icon: ServerCog,
    title: "IT Support & Systems Administration",
    blurb:
      "Keeping workstations, servers and users working — including hands-on hardware repair rather than sending every fault to a vendor.",
    items: [
      "Windows troubleshooting",
      "Windows Server",
      "Active Directory",
      "Endpoint support",
      "Hardware diagnostics & repair",
      "Software installation",
      "System maintenance",
      "Infrastructure monitoring",
      "IT documentation",
    ],
  },
  {
    id: "network-security",
    icon: ShieldCheck,
    title: "Network Security & Cybersecurity",
    blurb:
      "Security work grounded in the network itself: understanding what traffic is doing, what is exposed, and what to harden first.",
    items: [
      "Network security assessment",
      "Traffic analysis",
      "Vulnerability identification",
      "Firewall configuration & support",
      "Endpoint security",
      "Penetration-testing fundamentals",
      "Security hardening",
      "Security monitoring",
    ],
  },
  {
    id: "software",
    icon: Code2,
    title: "Web & Software Development",
    blurb:
      "Database-backed systems that hold up in daily use — school platforms, business sites and role-based internal tools.",
    items: [
      "Business websites",
      "School systems",
      "Custom web applications",
      "Database-backed applications",
      "Role-based systems",
      "Admin dashboards",
      "Business process automation",
    ],
  },
];

export default function WhatWeDoSection() {
  return (
    <section id="services" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <div className="eyebrow mb-3 text-cyan-200/75">What we do</div>
          <h2 className="text-[clamp(1.9rem,4vw,2.75rem)] font-bold leading-tight text-white">
            Four capabilities. One technical foundation.
          </h2>
          <p className="muted mt-4 leading-relaxed">
            Every one of these starts in the same place — understanding how the
            network and the systems on it actually behave.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {SERVICES.map((s) => (
            <article
              key={s.id}
              id={s.id}
              className={`panel p-7 lg:p-8 ${
                s.lead ? "border-[color:var(--sea)]/30 md:col-span-2" : ""
              }`}
            >
              <div className="mb-5 flex flex-wrap items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[color:var(--sea)]/10 text-[color:var(--sea)]">
                  <s.icon className="h-5 w-5" aria-hidden />
                </span>
                {s.lead && (
                  <span className="eyebrow rounded-full bg-[color:var(--sea)]/10 px-2.5 py-1 text-[color:var(--sea)]">
                    Core specialism
                  </span>
                )}
              </div>

              <h3 className="text-xl font-bold sm:text-2xl">{s.title}</h3>
              <p className="muted mt-3 max-w-2xl leading-relaxed">{s.blurb}</p>

              <ul className="mt-6 flex flex-wrap gap-2">
                {s.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-[color:var(--sea)]/25 px-3 py-1 font-[family-name:var(--font-plex-mono)] text-xs text-[color:var(--sea)]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href="#contact"
            className="group inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[color:var(--foam)] px-6 py-3 text-sm font-semibold text-[color:var(--ink)] transition hover:bg-white"
          >
            Discuss your network
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
          </a>
          <a
            href="#contact"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-cyan-200/35 px-6 py-3 text-sm font-semibold text-white transition hover:bg-cyan-200/10"
          >
            Request IT support
          </a>
        </div>
      </div>
    </section>
  );
}
