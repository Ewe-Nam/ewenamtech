import { Network, ServerCog, Wrench, Code2, ArrowRight } from "lucide-react";

export default function WhatWeDoSection() {
  return (
    <section id="services" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <div className="eyebrow mb-3 text-cyan-200/75">What we do</div>
          <h2 className="text-[clamp(1.9rem,4vw,2.75rem)] font-bold leading-tight text-white">
            Four services, one foundation
          </h2>
        </div>

        {/* Asymmetric on purpose: the wide panels are the deep specialisms. */}
        <div className="grid gap-5 lg:grid-cols-3">
          {/* Networking — the core, given the most room */}
          <article className="panel p-7 lg:col-span-2 lg:p-9">
            <div className="mb-5 flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[color:var(--sea)]/10 text-[color:var(--sea)]">
                <Network className="h-5 w-5" />
              </span>
              <span className="eyebrow rounded-full bg-[color:var(--sea)]/10 px-2.5 py-1 text-[color:var(--sea)]">
                Core specialism
              </span>
            </div>
            <h3 className="text-2xl font-bold">Networking &amp; Infrastructure</h3>
            <p className="muted mt-3 max-w-2xl leading-relaxed">
              LAN/WAN setup and troubleshooting, switch installation and
              configuration, TCP/IP addressing, and connectivity testing — backed by
              topology design and simulation in GNS3, VyOS, MikroTik and Cisco
              environments before anything touches your live network.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {["LAN/WAN", "Switch config", "TCP/IP", "Topology design", "Network security"].map(
                (t) => (
                  <li
                    key={t}
                    className="rounded-full border border-[color:var(--sea)]/25 px-3 py-1 font-[family-name:var(--font-mono)] text-xs text-[color:var(--sea)]"
                  >
                    {t}
                  </li>
                )
              )}
            </ul>
          </article>

          {/* IT Support */}
          <article className="panel p-7">
            <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[color:var(--sea)]/10 text-[color:var(--sea)]">
              <ServerCog className="h-5 w-5" />
            </span>
            <h3 className="text-xl font-bold">IT Support &amp; Systems Administration</h3>
            <p className="muted mt-3 text-[15px] leading-relaxed">
              Windows Server, Active Directory, endpoint security, and IT asset
              management across multiple branches.
            </p>
          </article>

          {/* Software */}
          <article className="panel p-7">
            <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[color:var(--sea)]/10 text-[color:var(--sea)]">
              <Code2 className="h-5 w-5" />
            </span>
            <h3 className="text-xl font-bold">Web &amp; Software Development</h3>
            <p className="muted mt-3 text-[15px] leading-relaxed">
              Full-stack builds from database design to deployment — production
              platforms that hold up in daily use.
            </p>
            <a
              href="#work"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[color:var(--sea)] hover:underline"
            >
              See the projects
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </article>

          {/* Hardware — warm accent, the one non-blue thing on the page */}
          <article className="panel relative overflow-hidden p-7 lg:col-span-2 lg:p-9">
            <span
              aria-hidden
              className="absolute inset-y-0 left-0 w-1.5 bg-[color:var(--activity)]"
            />
            <div className="mb-5 flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[color:var(--activity)]/15 text-[color:var(--brand-orange-ink)]">
                <Wrench className="h-5 w-5" />
              </span>
              <span className="eyebrow text-[color:var(--brand-orange-ink)]">Smart Solutions, Trusted Repairs</span>
            </div>
            <h3 className="text-2xl font-bold">Hardware Repair Services</h3>
            <p className="muted mt-3 max-w-2xl leading-relaxed">
              Diagnosing and repairing computer and device hardware faults — from
              motherboard-level issues to peripherals, power problems and printers —
              for private clients and businesses.
            </p>
            <p className="muted mt-3 max-w-2xl text-[15px] leading-relaxed">
              Currently handles the majority of hardware repairs for Akuapem Community
              Bank PLC as part of an IT Support role, alongside private freelance work.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
