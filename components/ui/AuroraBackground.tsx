"use client";
import { cn } from "@/lib/utils";

export function AuroraBackground({ className }: { className?: string }) {
  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)} aria-hidden>
      <div className="absolute -top-1/2 left-1/2 h-[120vh] w-[120vh] -translate-x-1/2 rounded-full bg-aurora opacity-20 blur-3xl animate-aurora-spin" />
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ink-950/40 to-ink-950" />
    </div>
  );
}
