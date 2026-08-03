import { Mail, Phone, Link2, GitBranch, FileDown } from "lucide-react";

const LINKS = [
  { href: "tel:+233248468450", icon: Phone, label: "+233 248 468 450" },
  { href: "https://www.linkedin.com/in/charles-tekpor", icon: Link2, label: "LinkedIn", ext: true },
  { href: "https://github.com/Ewe-Nam", icon: GitBranch, label: "GitHub", ext: true },
  { href: "/Charles_Tekpor_CV.pdf", icon: FileDown, label: "Download CV", download: true },
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <div className="eyebrow mb-3 text-cyan-200/75">Get in touch</div>
        <h2 className="text-[clamp(1.9rem,4vw,2.75rem)] font-bold leading-tight text-white">
          Tell us what needs fixing.
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-sky-100/80">
          Networks, systems, hardware or software — describe the problem and
          you&apos;ll get a straight answer on whether we can help.
        </p>

        <a
          href="mailto:tekporcharles77@gmail.com"
          className="mt-8 inline-flex items-center gap-2.5 rounded-full bg-[color:var(--foam)] px-7 py-4 text-sm font-semibold text-[color:var(--ink)] transition hover:bg-white"
        >
          <Mail className="h-4 w-4" />
          tekporcharles77@gmail.com
        </a>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              {...(l.ext ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              {...(l.download ? { download: true } : {})}
              className="inline-flex items-center gap-2 text-sm text-sky-100/85 underline-offset-4 transition hover:text-white hover:underline"
            >
              <l.icon className="h-4 w-4 text-cyan-300" />
              {l.label}
            </a>
          ))}
        </div>

        <div className="eyebrow mt-10 text-cyan-200/50">
          Mamfe-Akuapem · Eastern Region · Ghana
        </div>
      </div>
    </section>
  );
}
