import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/70 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-sm font-bold uppercase tracking-[0.2em] text-white">
          Ewenam<span className="text-cyan-400">Tech</span>
        </Link>
        <div className="hidden items-center gap-8 text-xs font-medium uppercase tracking-wider text-zinc-400 sm:flex">
          <Link href="/#services" className="transition-colors hover:text-white">Services</Link>
          <Link href="/#work" className="transition-colors hover:text-white">Work</Link>
          <Link href="/portfolio" className="transition-colors hover:text-white">Portfolio</Link>
          <Link href="/#contact" className="transition-colors hover:text-white">Contact</Link>
        </div>
        <Link
          href="/#contact"
          className="inline-flex items-center rounded-full bg-white px-4 py-2 text-xs font-semibold text-zinc-950 transition-colors hover:bg-zinc-200"
        >
          Start a project
        </Link>
      </nav>
    </header>
  );
}
