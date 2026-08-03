import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-cyan-200/15">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-10 sm:flex-row sm:justify-between sm:px-6 lg:px-8">
        <Image
          src="/logo-mark.png"
          alt="EwenamTech Services — Smart Solutions, Trusted Repairs"
          width={264}
          height={203}
          className="h-20 w-auto"
        />
        <div className="flex flex-col items-center gap-2 text-xs text-sky-100/70 sm:items-end">
          <span>© 2026 EwenamTech Services. Built &amp; run by Charles Tekpor.</span>
          <span className="flex items-center gap-2">
            <span className="led inline-block h-2 w-2 rounded-full bg-[color:var(--link-up)]" />
            open for work
          </span>
        </div>
      </div>
    </footer>
  );
}
