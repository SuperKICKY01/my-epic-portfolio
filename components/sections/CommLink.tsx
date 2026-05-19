"use client";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { SOCIALS } from "@/lib/data";

export function CommLink() {
  return (
    <section id="commlink" className="relative isolate overflow-hidden py-32 sm:py-40">
      {/* gradient ambient */}
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-neon-cyan/20 blur-3xl" />
        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-neon-violet/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-mono text-[11px] uppercase tracking-[0.32em] text-neon-cyan/80"
        >
          07 / Comm Link
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 font-display text-[clamp(4rem,16vw,15rem)] font-bold leading-[0.85] tracking-tighter outlined-text cursor-default"
        >
          LET&apos;S TALK
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-10 max-w-xl text-balance text-zinc-400"
        >
          For collaborations, music video commissions, or to ask about my Thammasat application — my inbox is open.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-col items-center gap-6"
        >
          <MagneticButton href="mailto:chutiponwinner@gmail.com" className="text-sm">
            <Mail className="h-4 w-4 text-neon-cyan" />
            chutiponwinner@gmail.com
            <ArrowUpRight className="h-4 w-4" />
          </MagneticButton>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            {SOCIALS.map((s) => {
              const Icon = s.icon;
              return (
                <MagneticButton
                  key={s.label}
                  href={s.href}
                  className="!px-5 !py-3 text-xs"
                  strength={0.5}
                >
                  <Icon className="h-4 w-4" />
                  <span className="font-mono uppercase tracking-widest">{s.label}</span>
                </MagneticButton>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
