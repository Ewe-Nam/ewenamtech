import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const DISCIPLINES = [
  "Network management",
  "IT infrastructure",
  "Systems administration",
  "Cybersecurity",
  "Software development",
  "Hardware support",
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_auto] lg:items-start lg:gap-16">
          <div>
            <div className="eyebrow mb-3 text-cyan-200/75">About EwenamTech</div>
            <h2 className="text-[clamp(1.9rem,4vw,2.75rem)] font-bold leading-tight text-white">
              One technical partner across the whole stack.
            </h2>

            <p className="muted mt-5 leading-relaxed">
              EwenamTech is a Ghanaian technology services practice based in
              Mamfe-Akuapem, Eastern Region. It brings network management, IT
              infrastructure, systems administration, cybersecurity, software
              development and hardware support together under one roof — so a
              business, school or organisation does not have to coordinate a
              different supplier for each layer of its technology.
            </p>

            <p className="muted mt-4 leading-relaxed">
              That range is deliberate. Most faults do not respect the boundary
              between &ldquo;the network&rdquo;, &ldquo;the server&rdquo; and
              &ldquo;the application&rdquo;, and diagnosing them is far quicker
              when the same person can follow the problem across all three.
            </p>

            <ul className="mt-7 flex flex-wrap gap-2">
              {DISCIPLINES.map((d) => (
                <li
                  key={d}
                  className="rounded-full border border-[color:var(--sea)]/25 px-3 py-1 font-[family-name:var(--font-plex-mono)] text-xs text-[color:var(--sea)]"
                >
                  {d}
                </li>
              ))}
            </ul>
          </div>

          <aside className="panel max-w-md p-7">
            <div className="flex items-center gap-4">
              <Image
                src="/profile.jpg"
                alt="Charles Tekpor"
                width={834}
                height={1080}
                className="h-20 w-20 shrink-0 rounded-xl object-cover object-top"
              />
              <div>
                <p className="text-lg font-bold">Charles Tekpor</p>
                <p className="muted text-sm">
                  Network &amp; IT Infrastructure Professional
                </p>
              </div>
            </div>

            <p className="muted mt-5 leading-relaxed">
              The technical professional behind EwenamTech. Works day to day in
              network administration and IT support within a professional
              financial-services environment, covering Windows Server and Active
              Directory administration, network operations and hardware support
              across multiple branches.
            </p>

            <p className="muted mt-4 leading-relaxed">
              Holds an HND in Computer Network Management and Cisco Networking
              Academy credentials in networking and cybersecurity, alongside a
              background teaching computing — which is where the habit of
              documenting and explaining the work comes from.
            </p>

            <Link
              href="/portfolio"
              className="mt-6 inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-[color:var(--sea)] hover:underline"
            >
              Full background &amp; skills
              <ArrowRight className="h-3.5 w-3.5" aria-hidden />
            </Link>
          </aside>
        </div>
      </div>
    </section>
  );
}
