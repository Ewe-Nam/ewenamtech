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
    <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/70 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-sm font-bold uppercase tracking-[0.2em] text-white">
          Ewenam<span className="text-cyan-400">Tech</span>
        </Link>

        <div className="hidden items-center gap-8 text-xs font-medium uppercase tracking-wider text-zinc-400 sm:flex">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="transition-colors hover:text-white">
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/#contact"
            className="hidden items-center rounded-full bg-white px-4 py-2 text-xs font-semibold text-zinc-950 transition-colors hover:bg-zinc-200 sm:inline-flex"
          >
            Start a project
          </Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white sm:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-zinc-950/95 px-4 py-4 backdrop-blur-xl sm:hidden">
          <div className="flex flex-col gap-4 text-sm font-medium uppercase tracking-wider text-zinc-300">
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
              className="mt-1 inline-flex items-center justify-center rounded-full bg-white px-4 py-2.5 text-xs font-semibold text-zinc-950"
            >
              Start a project
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
