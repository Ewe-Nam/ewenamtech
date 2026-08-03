import { Code2, Wrench, ArrowRight } from "lucide-react";

export default function WhatWeDoSection() {
  return (
    <section id="what-we-do" className="border-t border-white/10 bg-zinc-950 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <div className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-400">
            What we do
          </div>
          <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">
            Two ways we help
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-0">
          {/* Software */}
          <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/[0.04] p-8 backdrop-blur-xl sm:rounded-r-none sm:border-r-0">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 ring-1 ring-cyan-400/25">
              <Code2 className="h-6 w-6 text-cyan-400" />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-white">Web &amp; Software Development</h3>
            <p className="mb-6 text-sm leading-relaxed text-zinc-400">
              Full-stack development — from database design to deployment. Production
              platforms, secure backends, and interfaces that hold up in daily use.
            </p>
            <a
              href="/#work"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-400 transition-colors hover:text-cyan-300"
            >
              See Featured Projects
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>

          {/* Hardware */}
          <div className="relative rounded-3xl border border-amber-300/25 bg-amber-300/[0.04] p-8 backdrop-blur-xl sm:rounded-l-none">
            <div className="pointer-events-none absolute inset-y-0 -left-px hidden w-px bg-gradient-to-b from-transparent via-white/15 to-transparent sm:block" />
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-300/10 ring-1 ring-amber-300/30">
              <Wrench className="h-6 w-6 text-amber-300" />
            </div>
            <div className="mb-1 font-mono text-[11px] uppercase tracking-[0.18em] text-amber-300/80">
              Smart Solutions, Trusted Repairs
            </div>
            <h3 className="mb-2 text-xl font-semibold text-white">Hardware Repair Services</h3>
            <p className="mb-4 text-sm leading-relaxed text-zinc-400">
              Diagnosing and repairing computer and device hardware faults — from
              motherboard-level issues to peripherals, power problems, and printers — for
              private clients and businesses.
            </p>
            <p className="text-sm leading-relaxed text-zinc-500">
              Currently handles the majority of hardware repairs for Akuapem Community Bank
              PLC as part of an IT Support role, alongside private freelance repair work.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
