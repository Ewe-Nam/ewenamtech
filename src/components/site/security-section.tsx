import Link from "next/link";
import { ArrowRight } from "lucide-react";

const CAPABILITIES = [
  "Network traffic analysis",
  "Vulnerability assessment",
  "Penetration-testing fundamentals",
  "Firewall security",
  "Endpoint protection",
  "Network hardening",
  "Security monitoring",
  "Security-aware infrastructure design",
];

const GROUNDING = [
  {
    label: "Hands-on with",
    body: "Wireshark, Nmap, Kali Linux and iperf — used to capture traffic, surface exposed services and measure what hardening costs in throughput.",
  },
  {
    label: "Applied in",
    body: "A simulated metropolitan network built in GNS3 and tested from an attack host inside the simulation, never against third-party infrastructure.",
  },
  {
    label: "Developing toward",
    body: "Cloud security and secure network architecture, building on Cisco Networking Academy foundations in networking and cybersecurity.",
  },
];

export default function SecuritySection() {
  return (
    <section id="security" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
          <div>
            <div className="eyebrow mb-3 text-cyan-200/75">Network security</div>
            <h2 className="text-[clamp(1.9rem,4vw,2.75rem)] font-bold leading-tight text-white">
              Security starts with understanding the network.
            </h2>
            <p className="muted mt-5 leading-relaxed">
              You cannot protect traffic you have never looked at. The security
              work here is grounded in network fundamentals — reading what is
              actually crossing the wire, finding what is exposed between
              segments, and hardening the things that matter first.
            </p>

            <dl className="mt-8 space-y-5 border-t border-cyan-200/20 pt-6">
              {GROUNDING.map((g) => (
                <div key={g.label}>
                  <dt className="eyebrow text-cyan-200/60">{g.label}</dt>
                  <dd className="muted mt-1.5 leading-relaxed">{g.body}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="panel p-7 lg:p-9">
            <h3 className="text-lg font-bold">Practical capabilities</h3>
            <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
              {CAPABILITIES.map((c) => (
                <li
                  key={c}
                  className="border-l-2 border-[color:var(--sea)]/30 pl-3 text-[15px] leading-relaxed text-[color:var(--ink-soft)]"
                >
                  {c}
                </li>
              ))}
            </ul>

            <div className="mt-7 rounded-xl border border-[color:var(--sea)]/20 bg-[color:var(--sea)]/5 p-5">
              <p className="text-sm font-semibold">
                Where this was put to work
              </p>
              <p className="muted mt-2 text-[15px] leading-relaxed">
                A metropolitan-scale network designed in GNS3, measured for
                throughput, latency, packet loss and jitter, then penetration
                tested to surface what segmentation left reachable.
              </p>
              <Link
                href="/work/accra-metropolitan-area-network"
                className="mt-4 inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-[color:var(--sea)] hover:underline"
              >
                View the case study
                <ArrowRight className="h-3.5 w-3.5" aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
