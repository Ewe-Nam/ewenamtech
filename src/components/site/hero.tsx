import { ArrowRight, UserRound } from "lucide-react";
import Topology from "./topology";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 pt-16 pb-20 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:px-8 lg:pt-24 lg:pb-28">
        <div>
          <div className="eyebrow mb-5 text-cyan-200/80">
            Mamfe-Akuapem · Eastern Region, Ghana
          </div>

          <h1 className="text-[clamp(2.6rem,7vw,4.5rem)] font-bold leading-[0.98] text-white">
            Networks that
            <br />
            stay up.
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-sky-100/85">
            Network management and IT infrastructure for businesses and schools
            across the Eastern Region — plus the hardware repair and software that
            keep everything else running.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--foam)] px-7 py-3.5 text-sm font-semibold text-[color:var(--ink)] transition hover:bg-white"
            >
              Start a project
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="/portfolio"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-cyan-200/35 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-cyan-200/10"
            >
              <UserRound className="h-4 w-4" />
              Meet the engineer
            </a>
          </div>

          <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-4 border-t border-cyan-200/20 pt-6">
            <div>
              <dt className="eyebrow text-cyan-200/60">Qualification</dt>
              <dd className="mt-1 text-sm font-medium text-white">
                HND, Computer Network Management
              </dd>
            </div>
            <div>
              <dt className="eyebrow text-cyan-200/60">In production</dt>
              <dd className="mt-1 text-sm font-medium text-white">
                Multi-branch bank network
              </dd>
            </div>
          </dl>
        </div>

        <Topology />
      </div>
    </section>
  );
}
