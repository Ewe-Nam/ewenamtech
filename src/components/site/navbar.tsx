"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const LINKS = [
  { href: "/#services", label: "Services" },
  { href: "/#work", label: "Work" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-cyan-200/20 bg-[#052f45]/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-[0.18em] text-white">
          Ewenam<span className="text-cyan-300">Tech</span>{" "}
          <span className="font-medium tracking-[0.18em] text-sky-200/70">Services</span>
        </Link>

        <div className="hidden items-center gap-8 text-xs font-medium uppercase tracking-wider text-sky-100/70 sm:flex">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="transition-colors hover:text-white">
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/#contact"
            className="hidden items-center rounded-full bg-white px-4 py-2 text-xs font-semibold text-sky-950 transition-colors hover:bg-sky-50 sm:inline-flex"
          >
            Start a project
          </Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-cyan-200/20 bg-sky-100/10 text-white sm:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-cyan-200/20 bg-sky-950/85 px-4 py-4 backdrop-blur-xl sm:hidden">
          <div className="flex flex-col gap-4 text-sm font-medium uppercase tracking-wider text-sky-100">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="transition-colors hover:text-white"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              onClick={() => setOpen(false)}
              className="mt-1 inline-flex items-center justify-center rounded-full bg-white px-4 py-2.5 text-xs font-semibold text-sky-950"
            >
              Start a project
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
