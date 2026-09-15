import { Search, ShieldCheck, MessageSquare, Scale } from "lucide-react";

const POINTS = [
  {
    icon: Search,
    title: "Fixed at the root, not the symptom",
    body: "A machine that keeps dropping off the network has a cause. Finding it takes longer than rebooting the switch, and it is the only thing that stops the fault coming back next week.",
  },
  {
    icon: ShieldCheck,
    title: "Security considered while building, not bolted on",
    body: "Access rules belong in the system's foundations. On the school portal that meant enforcing permissions at the database layer, so the rules hold even if the interface is bypassed.",
  },
  {
    icon: Scale,
    title: "Sized to your budget and your environment",
    body: "The right answer for a school in the Eastern Region is rarely the enterprise answer. Solutions are specified for the equipment, connectivity and budget actually available.",
  },
  {
    icon: MessageSquare,
    title: "Explained in language you can act on",
    body: "A teaching background means technical findings get written down and explained clearly — so the people paying for the work understand what was wrong and what changed.",
  },
];

export default function WhySection() {
  return (
    <section id="why" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <div className="eyebrow mb-3 text-cyan-200/75">Why EwenamTech</div>
          <h2 className="text-[clamp(1.9rem,4vw,2.75rem)] font-bold leading-tight text-white">
            Technology should solve problems, not create new ones.
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {POINTS.map((p) => (
            <article key={p.title} className="panel p-7">
              <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[color:var(--sea)]/10 text-[color:var(--sea)]">
                <p.icon className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="text-lg font-bold">{p.title}</h3>
              <p className="muted mt-3 leading-relaxed">{p.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
