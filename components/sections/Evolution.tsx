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
          eyebrow="Chapter III — The Log Pose"
          title={
            <>
              A chart, <span className="italic text-crimson-700">not a resume.</span>
            </>
          }
          subtitle="Three ports of call — each one a chapter at Detudom School (โรงเรียนเดชอุดม), Ubon Ratchathani."
        />

        <div className="relative mx-auto mt-24 max-w-4xl">
          {/* navigation chart line (dashed) */}
          <div className="absolute left-8 top-0 h-full w-px chart-line md:left-1/2 md:-translate-x-1/2" />

          {/* "N" marker top */}
          <div className="absolute -top-6 left-8 -translate-x-1/2 md:left-1/2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-sepia-700/40 bg-parchment-50 font-serif text-sm italic text-sepia-700 shadow-cinema-sm">
              N
            </div>
          </div>

          <ul className="space-y-20 pt-6">
            {EDUCATION.map((e, i) => {
              const Icon = e.icon;
              const isRight = i % 2 === 0;
              return (
                <motion.li
                  key={e.title}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.95, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  className="relative grid grid-cols-[4rem_1fr] items-start gap-6 md:grid-cols-2 md:gap-16"
                >
                  {/* compass node */}
                  <div className={cn("absolute left-8 -translate-x-1/2 md:left-1/2", "z-10")}>
                    <div className="relative grid h-16 w-16 place-items-center">
                      {/* Outer compass ring */}
                      <span
                        className={cn(
                          "absolute inset-0 rounded-full border",
                          e.current
                            ? "border-crimson-700/60 animate-compass-pulse"
                            : "border-sepia-700/30"
                        )}
                      />
                      {/* inner ring */}
                      <span
                        className={cn(
                          "absolute inset-2 rounded-full border",
                          e.current ? "border-crimson-700/40" : "border-sepia-700/20"
                        )}
                      />
                      {/* cardinals */}
                      <span className="absolute left-1/2 top-0 h-2 w-px -translate-x-1/2 bg-sepia-700/60" />
                      <span className="absolute bottom-0 left-1/2 h-2 w-px -translate-x-1/2 bg-sepia-700/60" />
                      <span className="absolute left-0 top-1/2 h-px w-2 -translate-y-1/2 bg-sepia-700/60" />
                      <span className="absolute right-0 top-1/2 h-px w-2 -translate-y-1/2 bg-sepia-700/60" />
                      {/* center node */}
                      <span
                        className={cn(
                          "relative grid h-7 w-7 place-items-center rounded-full border shadow-cinema-sm",
                          e.current
                            ? "border-crimson-700 bg-crimson-700 text-parchment-50"
                            : "border-sepia-700/50 bg-parchment-50 text-sepia-700"
                        )}
                      >
                        <Icon className="h-3.5 w-3.5" />
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
                    <motion.div
                      whileHover={{ y: -4 }}
                      transition={{ type: "spring", stiffness: 240, damping: 22 }}
                      className="paper-elevated relative rounded-2xl p-7"
                    >
                      <div className="flex items-center gap-3">
                        <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-sepia-700">
                          {e.period}
                        </p>
                        {e.current && (
                          <span className="inline-flex items-center gap-1.5 rounded-full border border-crimson-700/30 bg-crimson-700/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.18em] text-crimson-700">
                            <span className="h-1.5 w-1.5 rounded-full bg-crimson-700" />
                            Present Port
                          </span>
                        )}
                      </div>
                      <h3 className="mt-3 font-serif text-3xl font-medium leading-tight text-ocean-900">
                        {e.title}
                      </h3>
                      <p className="mt-3 text-[15px] leading-relaxed text-ocean-600">
                        {e.place}
                      </p>
                      {/* decorative coordinates */}
                      <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.32em] text-sepia-700/70">
                        15°04′ N · 105°08′ E
                      </p>
                    </motion.div>
                  </div>
                </motion.li>
              );
            })}
          </ul>

          {/* destination marker bottom */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="relative mt-16 flex flex-col items-center gap-3"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-crimson-700 bg-parchment-50 font-serif text-sm italic text-crimson-700 shadow-cinema-sm">
              X
            </div>
            <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-crimson-700">
              Destination — Thammasat University · Computer Science
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
