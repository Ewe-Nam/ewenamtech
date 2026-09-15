/**
 * Single source of truth for project content.
 *
 * The homepage cards and the /work/[slug] case studies both read from here,
 * so the summary a visitor sees can never drift from the detail page.
 *
 * Rule for this file: every claim must be something that actually happened.
 * Where a real figure isn't recorded yet, the field is left out and the case
 * study says so plainly rather than inventing a number.
 */

export type ProjectCategory =
  | "Professional / Client Work"
  | "Product Development"
  | "Research & Cybersecurity";

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  status: string;
  role: string;
  period: string;
  shot: string;
  shotAlt: string;
  href: string | null;
  hrefLabel: string;
  repo?: string;
  summary: string;
  stack: string[];
  /* case study */
  overview: string;
  problem: string;
  solution: string;
  approach: string[];
  features: string[];
  security: string[];
  outcome: string[];
  /** Genuine gaps, surfaced rather than papered over. */
  pending?: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "masco-staff-portal",
    title: "MASCO Staff Portal",
    subtitle: "School management platform for Mamfe Apostolic School Complex",
    category: "Professional / Client Work",
    status: "Live · in daily production use (v1.0)",
    role: "Sole Full-Stack Developer",
    period: "2025–2026",
    shot: "/shots/masco-portal.jpg",
    shotAlt:
      "Staff sign-in screen of the MASCO school portal, showing the authorised-use and data-protection notice",
    href: null,
    hrefLabel: "Private system — staff access only",
    summary:
      "A production school management platform built end-to-end as sole developer: a 22-table PostgreSQL database secured with Row Level Security across six roles, an automated SMS pipeline, and a curriculum-accurate grading engine.",
    stack: [
      "React 18",
      "TypeScript",
      "Vite",
      "Supabase (PostgreSQL, Auth, RLS)",
      "Edge Functions (Deno)",
      "Arkesel SMS API",
      "Vercel CI/CD",
    ],
    overview:
      "A school management platform used by teaching and administrative staff for pupil records, terminal report cards and school-fee accounts. Built end-to-end — database schema, backend, React front end and deployment pipeline — as the sole developer.",
    problem:
      "Pupil records, assessment scores and fee accounts were handled manually, which made termly reporting slow and made it hard to keep a consistent, auditable record across staff. The school needed something accurate and print-ready that non-technical staff could use daily without training overhead.",
    solution:
      "A role-based web portal on a PostgreSQL database, with access enforced at the database layer rather than only in the interface. Staff sign in, see only what their role permits, and produce report cards and transcripts directly from recorded assessment data.",
    approach: [
      "22-table PostgreSQL schema modelled around pupils, classes, terms, assessments and fee accounts",
      "Row Level Security policies enforced in the database, so access rules hold regardless of how the data is reached",
      "Six-tier role model: admin, headteacher, teacher, bursar, auditor and staff",
      "Supabase Edge Functions (Deno) for server-side work that must not run in the browser",
      "Continuous deployment from Git via Vercel",
    ],
    features: [
      "Role-based dashboards scoped to what each staff member is permitted to see",
      "Grading engine covering continuous assessment and WAEC-style aggregates with ranked positions",
      "Report cards, transcripts and BECE records generated from recorded data",
      "Automated SMS pipeline for payment confirmations, fee reminders and report summaries",
      "Fee-account tracking for the bursar role",
    ],
    security: [
      "Row Level Security applied across the schema, so authorisation is enforced by the database and not only by the UI",
      "Six-tier role model limiting each account to the minimum data it needs",
      "SMS gateway credentials held server-side in Edge Functions, never exposed to the client",
      "A self-directed security review during the build identified and closed a privilege-escalation path",
      "An authorised-use and data-protection notice presented at sign-in",
    ],
    outcome: [
      "Released as v1.0 and in daily production use by teaching and administrative staff",
      "Diagnosed and resolved a live production outage by tracing Vercel build logs to a broken environment-variable substitution",
    ],
    pending:
      "Adoption figures — staff accounts in use, records managed, SMS volume — are not recorded here yet and can be added once measured.",
  },
  {
    slug: "masco-marketing-website",
    title: "MASCO Marketing Website",
    subtitle: "Public website for Mamfe Apostolic School Complex",
    category: "Professional / Client Work",
    status: "Live",
    role: "Web Developer & Designer (Freelance, EwenamTech)",
    period: "2025–2026",
    shot: "/shots/masco-website.jpg",
    shotAlt:
      "Home page of the Mamfe Apostolic School Complex website showing the admissions hero section",
    href: "https://masco-eta.vercel.app",
    hrefLabel: "masco-eta.vercel.app",
    summary:
      "A responsive eight-page school website with a serverless contact form and an automated image-optimisation pipeline, built framework-free so the school can host it cheaply and simply.",
    stack: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Python (Pillow)",
      "Web3Forms",
      "Git / GitHub",
      "Vercel CI/CD",
    ],
    overview:
      "The public-facing website for Mamfe Apostolic School Complex, covering admissions, academics and campus life for prospective parents. Delivered as freelance client work under EwenamTech.",
    problem:
      "The school needed a credible public presence that parents could browse on a phone, with admissions information easy to find and a reliable way to get in touch — without ongoing platform costs or a CMS the staff would have to learn.",
    solution:
      "A framework-free static site: fast, cheap to host, and simple to hand over. Information architecture organised around what a prospective parent actually looks for, with a serverless contact form so enquiries arrive by email without a backend to maintain.",
    approach: [
      "Eight pages: Home, About, Academics, Admissions, Campus Life, Gallery, Staff and Contact",
      "No framework — plain HTML, CSS and JavaScript, so hosting stays trivial and the site has no build-time dependencies to rot",
      "Image-optimisation pipeline automated in Python with Pillow for the media-heavy gallery",
      "Branch-per-feature Git workflow with pull-request review and automatic Vercel deployment",
    ],
    features: [
      "Responsive layout across phone, tablet and desktop",
      "Admissions and academics information structured for prospective parents",
      "Gallery and campus-life pages presenting the school visually",
      "Serverless contact form via Web3Forms, with validation and spam protection",
    ],
    security: [
      "Contact form validation and spam protection through Web3Forms",
      "Static architecture with no database or server-side application code, which keeps the attack surface minimal",
    ],
    outcome: [
      "Live and serving as the school's public presence",
      "No ongoing platform or CMS cost for the school to carry",
    ],
  },
  {
    slug: "cbt-stylehub",
    title: "CBT StyleHub",
    subtitle: "Salon booking and management platform",
    category: "Product Development",
    status: "Live platform",
    role: "Project Manager & Technical Lead (3-person team)",
    period: "2025–2026",
    shot: "/shots/cbt-stylehub.jpg",
    shotAlt: "CBT StyleHub progressive web app landing screen on a phone",
    href: "https://cbt-stylehub.vercel.app",
    hrefLabel: "cbt-stylehub.vercel.app",
    summary:
      "A four-role salon booking platform shipped as an installable Progressive Web App, with role-based access control, SMS OTP verification and a real-time booking engine.",
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "Prisma 6",
      "Supabase PostgreSQL",
      "Auth.js v5",
      "Arkesel SMS API",
      "Leaflet / OpenStreetMap",
      "Vitest",
      "Vercel CI/CD",
    ],
    overview:
      "A booking platform connecting customers with hairdressers and barbers, supporting both in-salon and at-home appointments. Built by a three-person team over a structured twelve-week delivery, with Charles as project manager and technical lead.",
    problem:
      "Booking a salon appointment locally usually means phone calls and messaging back and forth, with no reliable view of availability. Salon owners equally lack a single place to manage appointments, staff and inventory.",
    solution:
      "A four-role platform — customer, professional, owner and admin — where each role gets an interface built for its job, on shared authentication and a shared booking engine. Shipped as an installable PWA so customers can add it to a phone home screen without an app store.",
    approach: [
      "Four distinct roles — customer, professional, owner, admin — on one authentication and permission model",
      "Auth.js v5 with JWT sessions, role-based access control and rate-limited sign-in",
      "Phone-based SMS OTP verification with Zod-validated server actions",
      "Prisma 6 over Supabase PostgreSQL for schema and data access",
      "Automated Vitest tests in a Git branch → pull request → CI/CD workflow",
      "AI coding tools (Claude Code) used to accelerate implementation, with architecture, security design and final code review retained by the team",
    ],
    features: [
      "Customer: salon discovery via Leaflet/OpenStreetMap, booking, and status updates",
      "Professional: availability windows, at-home service logic and travel fees",
      "Owner: console for appointments, inventory and staff",
      "Admin: user and role management, and moderation",
      "Real-time booking engine with status-driven messaging",
      "Installable Progressive Web App",
    ],
    security: [
      "Role-based access control across all four roles",
      "JWT sessions with rate-limited sign-in to blunt credential stuffing",
      "SMS OTP verification for phone-number ownership",
      "Server actions validated with Zod so untrusted input is checked before it reaches the database",
    ],
    outcome: [
      "Delivered and live as an installable PWA across all four roles",
      "Twelve-week delivery led through a structured branch → PR → CI/CD workflow with automated tests",
    ],
  },
  {
    slug: "accra-metropolitan-area-network",
    title: "Accra Metropolitan Area Network",
    subtitle: "Performance analysis and penetration testing of a simulated MAN",
    category: "Research & Cybersecurity",
    status: "Academic research project",
    role: "Sole Researcher & Network Designer",
    period: "2026",
    shot: "/shots/accra-man.jpg",
    shotAlt:
      "Network topology diagram of the simulated metropolitan area network built in GNS3",
    href: null,
    hrefLabel: "Academic research project",
    summary:
      "A metropolitan-scale network designed and simulated in GNS3, then measured for performance and tested for security — combining QoS measurement with penetration-testing activity and hardening recommendations.",
    stack: [
      "GNS3",
      "VMware Workstation",
      "VyOS",
      "Kali Linux",
      "Wireshark",
      "iperf",
      "Windows Server",
      "Ubuntu Server",
      "TCP/IP",
    ],
    overview:
      "A research project that designs a metropolitan area network for an Accra-scale deployment, builds it as a working simulation, and then evaluates it on two axes that are usually studied separately: how well it performs under load, and how well it holds up under attack.",
    problem:
      "Network designs are often evaluated for performance or for security, rarely both. A design that moves traffic efficiently can still expose services across segments it shouldn't, and hardening applied after the fact frequently costs throughput. The project set out to measure both on the same topology.",
    solution:
      "A routed, segmented topology built in GNS3 with VyOS routing and virtualised hosts, instrumented for quality-of-service measurement and then subjected to penetration-testing activity from a Kali Linux attack host inside the simulation.",
    approach: [
      "Routed, segmented topology designed and built in GNS3",
      "VyOS providing routing between segments; VMware Workstation hosting the virtual machines",
      "Windows Server and Ubuntu Server deployed as representative segment services",
      "Network segmentation used to separate service groups from one another",
      "Traffic captured and inspected in Wireshark; throughput generated and measured with iperf",
      "Kali Linux used as the attack host for penetration-testing activity against the simulated network",
    ],
    features: [
      "Quality-of-service measurement across four dimensions: throughput, latency, packet loss and jitter",
      "Packet-level traffic analysis in Wireshark",
      "Segment-to-segment reachability testing",
      "Penetration-testing activity to surface exposed services and weak configuration",
      "Hardening recommendations derived from what the testing exposed",
    ],
    security: [
      "Penetration-testing activity conducted entirely against a self-built simulation, never against third-party infrastructure",
      "Network segmentation evaluated as a control — what remains reachable across segments once routing is in place",
      "Findings written up as hardening recommendations rather than left as raw output",
    ],
    outcome: [
      "A working simulated metropolitan topology that can be rebuilt and re-tested",
      "A combined performance-and-security method applied to a single design rather than to two separate ones",
    ],
    pending:
      "Measured QoS figures — throughput, latency, packet loss and jitter — sit in the research write-up and are not reproduced here. They can be added once confirmed against the final report.",
  },
];

export const CATEGORY_ORDER: ProjectCategory[] = [
  "Professional / Client Work",
  "Product Development",
  "Research & Cybersecurity",
];

export const CATEGORY_BLURB: Record<ProjectCategory, string> = {
  "Professional / Client Work": "Built and delivered for organisations in daily use.",
  "Product Development": "Products built end-to-end, from schema to shipped interface.",
  "Research & Cybersecurity": "Network design measured for performance and tested for security.",
};

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}

export function projectsByCategory(category: ProjectCategory): Project[] {
  return PROJECTS.filter((p) => p.category === category);
}
