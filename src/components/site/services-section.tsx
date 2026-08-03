import { Code2, ShieldCheck, Network, Cpu } from "lucide-react";

const SERVICES = [
  {
    icon: Code2,
    title: "Full-Stack Web Development",
    description:
      "Production web apps built with Next.js, React, and TypeScript — real-time features, secure auth, and clean, maintainable code from schema to UI.",
  },
  {
    icon: ShieldCheck,
    title: "Business & School Management Systems",
    description:
      "Role-based portals on Supabase/PostgreSQL with Row-Level Security, automated SMS pipelines, and grading/reporting engines built for daily production use.",
  },
  {
    icon: Network,
    title: "IT Support & Network Setup",
    description:
      "Windows Server & Active Directory administration, LAN/WAN troubleshooting, hardware diagnostics, and endpoint security for growing teams.",
  },
  {
    icon: Cpu,
    title: "AI-Augmented Development",
    description:
      "AI coding tools (Claude Code) accelerate implementation — architecture, security decisions, and final code review stay with a human, always.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="border-t border-white/10 bg-zinc-950 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <div className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-400">
            What we do
          </div>
          <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">
            Services
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s) => (
            <div
              key={s.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-colors hover:border-white/20"
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/20">
                <s.icon className="h-5 w-5 text-cyan-400" />
              </div>
              <h3 className="mb-2 text-base font-semibold text-white">{s.title}</h3>
              <p className="text-sm leading-relaxed text-zinc-400">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
