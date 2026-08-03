import { Network, ServerCog, Wrench, Code2, ArrowRight } from "lucide-react";

const SERVICES = [
  {
    icon: Network,
    title: "Networking & Infrastructure",
    lead: true,
    description:
      "Core specialism. LAN/WAN setup and troubleshooting, switch installation and configuration, TCP/IP addressing, connectivity testing, and network security fundamentals — plus topology design and simulation in GNS3, VyOS, MikroTik, and Cisco environments.",
  },
  {
    icon: ServerCog,
    title: "IT Support & Systems Administration",
    description:
      "Windows Server deployment and maintenance, Active Directory (AD DS) administration, endpoint security, antivirus management, and multi-branch IT asset management.",
  },
  {
    icon: Code2,
    title: "Web & Software Development",
    description:
      "Full-stack development — from database design to deployment. Production platforms, secure backends, and interfaces that hold up in daily use.",
    href: "/#work",
    hrefLabel: "See Featured Projects",
  },
];

export default function WhatWeDoSection() {
  return (
    <section id="services" className="border-t border-white/10 bg-zinc-950 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <div className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-400">
            What we do
          </div>
          <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">
            Networks, systems &amp; software
          </h2>
          <p className="mt-4 text-zinc-400">
            Built on a Computer Network Management background — networking and
            infrastructure first, with software and hardware services alongside.
          </p>
        </div>

        {/* Core technical services */}
        <div className="mb-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <div
              key={s.title}
              className={`rounded-3xl border p-7 backdrop-blur-xl transition-colors ${
                s.lead
                  ? "border-cyan-400/30 bg-cyan-400/[0.06] hover:border-cyan-400/50"
                  : "border-white/10 bg-white/5 hover:border-white/20"
              }`}
            >
              <div
                className={`mb-5 flex h-12 w-12 items-center justify-center rounded-2xl ring-1 ${
                  s.lead ? "bg-cyan-400/15 ring-cyan-400/30" : "bg-white/10 ring-white/20"
                }`}
              >
                <s.icon className="h-6 w-6 text-cyan-400" />
              </div>
              {s.lead && (
                <div className="mb-1 font-mono text-[11px] uppercase tracking-[0.18em] text-cyan-400/80">
                  Core specialism
                </div>
              )}
              <h3 className="mb-2 text-lg font-semibold text-white">{s.title}</h3>
              <p className="text-sm leading-relaxed text-zinc-400">{s.description}</p>
              {s.href && (
                <a
                  href={s.href}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-400 transition-colors hover:text-cyan-300"
                >
                  {s.hrefLabel}
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Hardware repair — visually separate offering */}
        <div className="relative overflow-hidden rounded-3xl border border-amber-300/25 bg-amber-300/[0.05] p-8 backdrop-blur-xl">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-300/10 ring-1 ring-amber-300/30">
              <Wrench className="h-6 w-6 text-amber-300" />
            </div>
            <div>
              <div className="mb-1 font-mono text-[11px] uppercase tracking-[0.18em] text-amber-300/80">
                Smart Solutions, Trusted Repairs
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">Hardware Repair Services</h3>
              <p className="mb-3 max-w-3xl text-sm leading-relaxed text-zinc-400">
                Diagnosing and repairing computer and device hardware faults — from
                motherboard-level issues to peripherals, power problems, and printers — for
                private clients and businesses.
              </p>
              <p className="max-w-3xl text-sm leading-relaxed text-zinc-500">
                Currently handles the majority of hardware repairs for Akuapem Community Bank
                PLC as part of an IT Support role, alongside private freelance repair work.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
