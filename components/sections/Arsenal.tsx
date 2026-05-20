"use client";
import { motion } from "framer-motion";
import { SKILLS } from "@/lib/data";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";

const MARQUEE = SKILLS.flatMap((c) => c.items.map((s) => ({ skill: s, cat: c.category })));

const accentRing: Record<string, string> = {
  ocean: "border-ocean-900/20",
  crimson: "border-crimson-700/30",
  gold: "border-gold-500/40",
  sepia: "border-sepia-700/30",
};

const accentChip: Record<string, string> = {
  ocean: "bg-ocean-900 text-parchment-50",
  crimson: "bg-crimson-700 text-parchment-50",
  gold: "bg-gold-600 text-parchment-50",
  sepia: "bg-sepia-700 text-parchment-50",
};

const accentDot: Record<string, string> = {
  ocean: "bg-ocean-900",
  crimson: "bg-crimson-700",
  gold: "bg-gold-500",
  sepia: "bg-sepia-700",
};

export function Arsenal() {
  return (
    <section id="arsenal" className="relative py-32 sm:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Chapter IV — The Crew"
          title={
            <>
              The toolkit, <span className="italic text-crimson-700">stack-ranked.</span>
            </>
          }
          subtitle="Four disciplines that compound. Software thinking sharpens production work; production work pays for hardware; hardware teaches systems thinking back into software."
        />

        {/* Category grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SKILLS.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.85, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6 }}
                className={cn(
                  "group relative overflow-hidden rounded-2xl border bg-parchment-50 p-6 shadow-cinema transition-shadow duration-500 hover:shadow-cinema-lg",
                  accentRing[cat.accent]
                )}
              >
                <div className="grain absolute inset-0" />

                <div className="relative">
                  <div
                    className={cn(
                      "inline-flex h-12 w-12 items-center justify-center rounded-xl shadow-cinema-sm",
                      accentChip[cat.accent]
                    )}
                  >
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="mt-5 font-serif text-2xl font-medium leading-tight text-ocean-900">
                    {cat.category}
                  </h3>

                  <ul className="mt-4 space-y-2">
                    {cat.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 font-mono text-[12px] tracking-wide text-ocean-700"
                      >
                        <span className={cn("h-1 w-1 rounded-full", accentDot[cat.accent])} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Infinite marquee */}
        <div className="relative mt-20 overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-parchment-100 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-parchment-100 to-transparent" />
          <div className="flex w-max animate-marquee gap-4">
            {[...MARQUEE, ...MARQUEE].map((m, i) => (
              <span
                key={i}
                className="inline-flex shrink-0 items-center gap-2 rounded-full border border-sepia-700/25 bg-parchment-50 px-5 py-2 font-mono text-xs tracking-wide text-ocean-700 shadow-cinema-sm"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-crimson-700" />
                {m.skill}
                <span className="text-sepia-700/80">· {m.cat}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
