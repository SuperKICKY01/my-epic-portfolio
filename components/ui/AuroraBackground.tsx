"use client";
import { cn } from "@/lib/utils";

/**
 * Cinematic parchment haze — replaces the old aurora gradient.
 * Soft warm radials over paper grain, no neon, no grid.
 */
export function AuroraBackground({ className }: { className?: string }) {
  return (
    <div
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
      aria-hidden
    >
      {/* warm wash */}
      <div className="absolute inset-0 bg-parchment-100" />
      <div className="absolute -top-40 left-1/2 h-[80vh] w-[120vh] -translate-x-1/2 rounded-full bg-ocean-haze blur-3xl opacity-90" />
      <div className="absolute -bottom-32 right-0 h-[55vh] w-[80vh] rounded-full bg-crimson-wash blur-3xl opacity-90" />
      <div className="absolute left-0 top-1/3 h-[50vh] w-[60vh] rounded-full bg-log-pose blur-3xl opacity-80" />

      {/* paper grain */}
      <div
        className="absolute inset-0 opacity-[0.18] mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='220' height='220'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
        }}
      />
      {/* vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,transparent_40%,rgba(15,23,42,0.10)_100%)]" />
    </div>
  );
}
