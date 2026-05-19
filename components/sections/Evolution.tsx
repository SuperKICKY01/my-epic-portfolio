"use client";
import { motion } from "framer-motion";
import { EDUCATION } from "@/lib/data";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";

export function Evolution() {
  return (
    <section id="evolution" className="relative py-32 sm:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="03 / Evolution"
          title={
            <>
              A timeline, not a <span className="text-gradient-neon">resume.</span>
            </>
          }
        />

        <div className="relative mx-auto mt-20 max-w-3xl">
          {/* spine */}
          <div className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-transparent via-white/20 to-transparent md:left-1/2 md:-translate-x-1/2" />

          <ul className="space-y-16">
            {EDUCATION.map((e, i) => {
              const Icon = e.icon;
              const isRight = i % 2 === 0;
              return (
                <motion.li
                  key={e.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                  className="relative grid grid-cols-[3rem_1fr] items-start gap-6 md:grid-cols-2 md:gap-12"
                >
                  {/* node */}
                  <div
                    className={cn(
                      "absolute left-6 top-2 -translate-x-1/2 md:left-1/2",
                      "z-10"
                    )}
                  >
                    <div className="relative grid place-items-center">
                      {e.current && (
                        <span className="absolute inline-flex h-6 w-6 animate-pulse-ring rounded-full bg-neon-cyan/50" />
                      )}
                      <span
                        className={cn(
                          "relative grid h-6 w-6 place-items-center rounded-full border",
                          e.current
                            ? "border-neon-cyan bg-neon-cyan/20 shadow-glow-cyan"
                            : "border-white/30 bg-ink-900"
                        )}
                      >
                        <Icon
                          className={cn(
                            "h-3 w-3",
                            e.current ? "text-neon-cyan" : "text-zinc-400"
                          )}
                        />
                      </span>
                    </div>
                  </div>

                  {/* card */}
                  <div
                    className={cn(
                      "col-start-2 md:col-start-1",
                      isRight && "md:col-start-2"
                    )}
                  >
                    <div className="glass glass-hover rounded-2xl p-6">
                      <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-zinc-500">
                        {e.period}
                      </p>
                      <h3 className="mt-2 font-display text-2xl font-semibold text-white">
                        {e.title}
                        {e.current && (
                          <span className="ml-3 inline-flex items-center gap-1.5 rounded-full border border-neon-cyan/40 bg-neon-cyan/10 px-2.5 py-0.5 align-middle font-sans text-[10px] uppercase tracking-widest text-neon-cyan">
                            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-neon-cyan" />
                            Current
                          </span>
                        )}
                      </h3>
                      <p className="mt-2 text-sm text-zinc-400">{e.place}</p>
                    </div>
                  </div>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
