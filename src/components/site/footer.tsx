export default function Footer() {
  return (
    <footer className="border-t border-sky-200/15">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 text-xs text-sky-200/60 sm:flex-row sm:px-6 lg:px-8">
        <span>© 2026 EwenamTech. Built &amp; run by Charles Tekpor.</span>
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
          </span>
          open for work
        </div>
      </div>
    </footer>
  );
}
