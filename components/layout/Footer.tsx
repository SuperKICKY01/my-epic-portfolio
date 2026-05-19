"use client";

export function Footer() {
  return (
    <footer className="border-t border-white/5 px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-zinc-500">
          © {new Date().getFullYear()} Chutipon — Built with Next.js, Framer Motion & caffeine.
        </p>
        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-zinc-500">
          Destination: Thammasat CS · 2026 →
        </p>
      </div>
    </footer>
  );
}
