import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Charles Tekpor — Portfolio | EwenamTech",
  description:
    "Charles Tekpor — Network Management professional specialising in LAN/WAN infrastructure, network security, and systems administration, with full-stack development experience. Founder of EwenamTech.",
};

const SKILL_GROUPS = [
  {
    label: "Networking & Infrastructure",
    lead: true,
    items: ["LAN/WAN troubleshooting", "TCP/IP & IPv4", "Switch installation & configuration", "Ethernet cabling", "Connectivity testing", "Network topology design"],
  },
  {
    label: "Network Simulation & Virtualization",
    lead: true,
    items: ["GNS3", "VMware Workstation", "VyOS", "MikroTik CHR", "Cisco networking concepts", "FortiGate fundamentals"],
  },
  {
    label: "Network Security & Monitoring",
    lead: true,
    items: ["Wireshark", "Nmap", "Kali Linux", "Packet analysis", "Penetration testing", "Zabbix", "iperf", "Endpoint protection"],
  },
  {
    label: "Windows & Systems Administration",
    items: ["Windows Server", "Active Directory (AD DS)", "Group Policy", "Account & access management", "Windows 10/11"],
  },
  {
    label: "Hardware Repair & Diagnostics",
    items: ["Motherboard-level troubleshooting", "Component-level repair", "Printers & peripherals", "Power issues"],
  },
  {
    label: "Full-Stack Development",
    items: ["React", "Next.js", "TypeScript", "JavaScript (ES6)", "Node.js", "Tailwind CSS", "Vite"],
  },
  {
    label: "Backend & Data",
    items: ["Supabase (PostgreSQL)", "Row-Level Security", "Edge Functions / Deno", "Prisma ORM", "Zod validation", "MySQL"],
  },
  {
    label: "Authentication & App Security",
    items: ["Auth.js (JWT, RBAC)", "Role-based access control", "SMS OTP (Arkesel API)", "Secure server actions"],
  },
  {
    label: "DevOps & Tooling",
    items: ["Git & GitHub", "CI/CD on Vercel", "Vitest", "Progressive Web Apps"],
  },
  {
    label: "AI-Augmented Development",
    items: ["Claude Code", "AI-assisted architecture & debugging", "Prompt engineering (code generation & review)"],
  },
  {
    label: "Other",
    items: ["Python (Pillow)", "Java", "Leaflet / OpenStreetMap", "Canva", "Microsoft Office & Google Workspace"],
  },
];

const EXPERIENCE = [
  {
    title: "IT Support Assistant (Contract Staff)",
    org: "Akuapem Community Bank PLC — Mamfe, Eastern Region, Ghana",
    period: "Jan 2025 – Present",
    bullets: [
      "Provide technical support to bank staff, diagnosing and resolving hardware, software, and user-related issues; personally repair the majority of the bank's device hardware faults — motherboards, power issues, peripherals, printers — reducing reliance on external vendors.",
      "Install, configure, and maintain Windows OS and Windows Server environments; administer Active Directory (AD DS).",
      "Manage IT asset inventory across multiple branches; prepare monthly IT reports.",
      "Support network operations (connectivity troubleshooting, switch installation, LAN testing) and endpoint security.",
    ],
  },
  {
    title: "IT Support Intern",
    org: "Akuapem Community Bank PLC — Mamfe, Eastern Region, Ghana",
    period: "Oct 2024 – Nov 2024",
    bullets: [
      "Installed/configured Windows OS, drivers, and business applications; diagnosed and repaired hardware/software issues.",
      "Assisted with network troubleshooting, antivirus support, and boardroom technology setup.",
    ],
  },
  {
    title: "Teacher — Computing, Mathematics & Science",
    org: "Mamfe Apostolic School Complex, Ghana",
    period: "Jan 2023 – Dec 2024",
    bullets: [
      "Delivered Mathematics, Computing, and Science lessons to Basic 7–9 students; developed lesson plans aligned with the GES curriculum.",
      "Diagnosed, repaired, and maintained school computers; managed the computer lab and CCTV systems.",
    ],
  },
  {
    title: "Hardware Repair Technician (Freelance)",
    org: "EwenamTech — Smart Solutions, Trusted Repairs",
    period: "Ongoing",
    bullets: [
      "Diagnose and repair computer and device hardware faults for private clients alongside web development work, building a reputation for reliable, trusted repairs.",
    ],
  },
];

const EDUCATION = [
  {
    title: "HND, Computer Network Management",
    school: "Koforidua Technical University — Koforidua, Eastern Region, Ghana",
    period: "2024 – Exp. 2026",
    note: "Graduating soon. Coursework: Computer Networking · Network Security · Operating Systems · Database Management · Systems Administration · Network Infrastructure & Troubleshooting.",
  },
  {
    title: "WASSCE",
    school: "Dorfor Senior High School, Ghana",
    period: "2015 – 2018",
    note: "West African Senior School Certificate Examination.",
  },
  {
    title: "BECE",
    school: "Juapong Methodist Junior High School, Ghana",
    period: "2012 – 2015",
    note: "Basic Education Certificate Examination.",
  },
];

const CERTIFICATIONS = [
  { tag: "2026", tone: "text-green-400 bg-green-400/15", name: "Networking Basics", org: "Cisco Networking Academy — network devices, IP addressing, protocols, connectivity, and basic troubleshooting." },
  { tag: "PLANNED", tone: "text-sky-200/70 bg-sky-200/12", name: "CompTIA Security+", org: "Core security concepts, threats, and risk management." },
  { tag: "PLANNED", tone: "text-sky-200/70 bg-sky-200/12", name: "AWS Certified Security – Specialty", org: "Securing workloads and data in AWS." },
];

export default function PortfolioPage() {
  return (
    <div className="">
      {/* Intro */}
      <section className="border-b border-sky-200/15 px-4 pt-20 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-4xl grid-cols-1 items-start gap-10 sm:grid-cols-[1fr_auto]">
          <div>
            <div className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-400">
              The developer behind EwenamTech
            </div>
            <h1 className="mb-6 text-4xl font-medium tracking-tight text-white sm:text-5xl">
              Charles Tekpor
            </h1>
            <p className="mb-4 text-lg leading-relaxed text-sky-100">
              Network management professional specialising in LAN/WAN infrastructure,
              network security, and systems administration — backed by an HND in Computer
              Network Management and daily hands-on work maintaining a multi-branch bank
              network, from switch configuration and connectivity troubleshooting to
              Windows Server and Active Directory.
            </p>
            <p className="mb-4 text-sky-100/70">
              That same infrastructure grounding extends into full-stack development: sole
              or lead developer on multiple live platforms, including a salon booking PWA
              and a school management system with a 22-table, Row-Level-Security-protected
              database — plus hardware repair work under the EwenamTech name.
            </p>
            <p className="text-sky-200/60">
              A teaching background sharpens the communication and documentation side.
              Building toward a career in cloud security and secure network architecture.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Networking", "Network Security", "Systems Administration", "Hardware Repair", "Full-Stack Development"].map((c) => (
                <span key={c} className="rounded-md border border-cyan-300/30 bg-cyan-300/12 px-3 py-1.5 font-mono text-xs text-cyan-100">
                  {c}
                </span>
              ))}
            </div>
          </div>
          <div className="relative -order-1 w-40 shrink-0 overflow-hidden rounded-3xl border border-sky-200/15 shadow-2xl sm:order-none sm:w-52">
            <Image
              src="/profile.jpg"
              alt="Charles Tekpor"
              width={834}
              height={1080}
              priority
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-sky-950/60 to-transparent" />
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="border-b border-sky-200/15 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-400">
            Experience
          </div>
          <div className="flex flex-col gap-5">
            {EXPERIENCE.map((e) => (
              <div key={e.title} className="rounded-2xl border border-sky-200/15 bg-sky-100/10 p-6 backdrop-blur-xl">
                <div className="mb-1 flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-semibold text-white">{e.title}</h3>
                  <span className="font-mono text-xs text-cyan-400">{e.period}</span>
                </div>
                <div className="mb-4 text-sm text-sky-200/60">{e.org}</div>
                <ul className="flex flex-col gap-2">
                  {e.bullets.map((b) => (
                    <li key={b} className="text-sm leading-relaxed text-sky-100/70">
                      • {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="border-b border-sky-200/15 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-400">
            Skills &amp; Certifications
          </div>
          <div className="mb-6 rounded-2xl border border-sky-200/15 bg-sky-100/10 p-6 backdrop-blur-xl">
            <h3 className="mb-5 font-mono text-xs uppercase tracking-[0.18em] text-cyan-400">
              Technical Skills
            </h3>
            <div className="flex flex-col gap-4">
              {SKILL_GROUPS.map((g) => (
                <div key={g.label}>
                  <div className="mb-2 flex items-center gap-2">
                    <span className={`text-xs font-medium ${g.lead ? "text-cyan-300" : "text-sky-200/60"}`}>
                      {g.label}
                    </span>
                    {g.lead && (
                      <span className="rounded bg-cyan-400/15 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-cyan-400">
                        Core
                      </span>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {g.items.map((item) => (
                      <span
                        key={item}
                        className={`rounded-full px-3 py-1.5 text-xs ${
                          g.lead
                            ? "border border-cyan-400/40 bg-cyan-400/15 text-cyan-50"
                            : "border border-cyan-400/25 bg-cyan-400/10 text-cyan-100"
                        }`}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-sky-200/15 bg-sky-100/10 p-6 backdrop-blur-xl">
              <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-amber-300">
                Certifications
              </h3>
              <div className="flex flex-col gap-4">
                {CERTIFICATIONS.map((c) => (
                  <div key={c.name}>
                    <div className="mb-1 flex items-center gap-2">
                      <span className={`rounded px-2 py-0.5 text-[10px] font-bold ${c.tone}`}>{c.tag}</span>
                      <span className="text-sm font-semibold text-sky-50">{c.name}</span>
                    </div>
                    <div className="text-xs leading-relaxed text-sky-200/60">{c.org}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-sky-200/15 bg-sky-100/10 p-6 backdrop-blur-xl">
              <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-cyan-400">
                Tools &amp; Platforms
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Windows 10/11", "Windows Server", "AD DS", "Git & GitHub", "Vercel", "Supabase", "VMware Workstation", "GNS3", "Cisco", "VyOS", "MikroTik CHR", "FortiGate", "Wireshark", "Kali Linux", "Nmap", "Zabbix", "Claude AI"].map((t) => (
                  <span key={t} className="rounded border border-sky-200/15 px-2.5 py-1 font-mono text-xs text-sky-100/70">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-400">
            Education
          </div>
          <div className="flex flex-col gap-4">
            {EDUCATION.map((e) => (
              <div key={e.title} className="rounded-2xl border border-sky-200/15 bg-sky-100/10 p-6 backdrop-blur-xl">
                <div className="mb-1 flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-base font-semibold text-white">{e.title}</h3>
                  <span className="font-mono text-xs text-cyan-400">{e.period}</span>
                </div>
                <div className="mb-2 text-sm text-sky-200/60">{e.school}</div>
                <div className="text-sm leading-relaxed text-sky-200/60">{e.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
