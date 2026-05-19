"use client";
import { motion } from "framer-motion";
import { SKILLS } from "@/lib/data";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";

// Flat list for marquee
const MARQUEE = SKILLS.flatMap((c) => c.items.map((s) => ({ skill: s, cat: c.category })));

export function Arsenal() {
  return (
    <section id="arsenal" className="relative py-32 sm:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="04 / Arsenal"
          title={
            <>
              The toolkit, <span className="text-gradient-neon">stack-ranked.</span>
            </>
          }
          subtitle="Four disciplines that compound. Software thinking sharpens production work; production work pays for hardware; hardware teaches systems thinking back into software."
        />

        {/* Category grid */}
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SKILLS.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.08 }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-ink-900/60 p-6 backdrop-blur-xl"
              >
                <div
                  className={cn(
                    "absolute -inset-1 rounded-3xl opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-30",
                    "bg-gradient-to-br",
                    cat.color
                  )}
                />
                <div className="relative">
                  <div
                    className={cn(
                      "inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br text-white",
                      cat.color
                    )}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-semibold text-white">{cat.category}</h3>
                  <ul className="mt-4 space-y-1.5">
                    {cat.items.map((item) => (
                      <li
                        key={item}
                        className="font-mono text-xs text-zinc-400 transition-colors group-hover:text-zinc-200"
                      >
                        — {item}
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
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-ink-950 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-ink-950 to-transparent" />
          <div className="flex w-max animate-marquee gap-4">
            {[...MARQUEE, ...MARQUEE].map((m, i) => (
              <span
                key={i}
                className="inline-flex shrink-0 items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2 font-mono text-xs text-zinc-300"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-neon-cyan" />
                {m.skill}
                <span className="text-zinc-600">· {m.cat}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
