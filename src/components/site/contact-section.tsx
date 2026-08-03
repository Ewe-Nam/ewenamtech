import { Mail, Phone, Link2, GitBranch, FileDown } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="border-t border-sky-200/15 py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-sky-200/15 bg-sky-100/10 p-10 text-center backdrop-blur-xl sm:p-14">
          <div className="pointer-events-none absolute -top-32 left-1/2 h-64 w-96 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="relative">
            <div className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-400">
              Let&apos;s build something
            </div>
            <h2 className="mb-3 text-3xl font-medium tracking-tight text-white sm:text-4xl">
              Have a project in mind?
            </h2>
            <p className="mx-auto mb-8 max-w-md text-sm text-sky-100/70 sm:text-base">
              Open to full-stack development, IT support, network, and cloud-security work —
              and to collaboration with the security community.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="mailto:tekporcharles77@gmail.com"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-sky-950 transition-colors hover:bg-sky-50"
              >
                <Mail className="h-4 w-4" /> tekporcharles77@gmail.com
              </a>
              <a
                href="tel:+233248468450"
                className="inline-flex items-center gap-2 rounded-full border border-sky-200/15 bg-sky-100/10 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-sky-200/15"
              >
                <Phone className="h-4 w-4" /> +233 248 468 450
              </a>
              <a
                href="https://www.linkedin.com/in/charles-tekpor"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-sky-200/15 bg-sky-100/10 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-sky-200/15"
              >
                <Link2 className="h-4 w-4" /> LinkedIn
              </a>
              <a
                href="https://github.com/Ewe-Nam"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-sky-200/15 bg-sky-100/10 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-sky-200/15"
              >
                <GitBranch className="h-4 w-4" /> GitHub
              </a>
              <a
                href="/Charles_Tekpor_CV.pdf"
                download
                className="inline-flex items-center gap-2 rounded-full border border-sky-200/15 bg-sky-100/10 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-sky-200/15"
              >
                <FileDown className="h-4 w-4" /> Download CV
              </a>
            </div>
            <div className="mt-6 font-mono text-xs text-sky-200/60">
              Mamfe-Akuapem, Eastern Region, Ghana
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
