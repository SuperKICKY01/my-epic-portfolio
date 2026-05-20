"use client";

export function Footer() {
  return (
    <footer className="border-t border-parchment-300 bg-parchment-200/50 px-6 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <p className="font-serif text-lg italic text-ocean-900">
            Chutipon — Director · Engineer · Voyager
          </p>
          <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.28em] text-sepia-700">
            © {new Date().getFullYear()} · Detudom School, Ubon Ratchathani
          </p>
        </div>
        <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-sepia-700">
          Course set ↳ Thammasat Computer Science · 2026
        </p>
      </div>
    </footer>
  );
}
