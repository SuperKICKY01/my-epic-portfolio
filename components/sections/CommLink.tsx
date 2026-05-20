"use client";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { SOCIALS } from "@/lib/data";

export function CommLink() {
  return (
    <section id="commlink" className="relative isolate overflow-hidden py-32 sm:py-40">
      {/* warm ambient wash */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-ocean-900/10 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-crimson-700/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-3"
        >
          <span className="h-px w-10 bg-sepia-700/60" />
          <p className="font-mono text-[10px] uppercase tracking-[0.36em] text-sepia-700">
            Chapter VII — Set Sail
          </p>
          <span className="h-px w-10 bg-sepia-700/60" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 font-serif text-[clamp(3.5rem,14vw,12rem)] font-medium leading-[0.88] tracking-title text-ocean-900"
        >
          Let&apos;s
          <span className="ml-4 italic text-crimson-700">talk.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mt-10 max-w-xl text-balance text-base leading-relaxed text-ocean-600 sm:text-lg"
        >
          For collaborations, music video commissions, or questions about my Thammasat
          application — my inbox is open. Send a message.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.32 }}
          className="mt-12 flex flex-col items-center gap-7"
        >
          <MagneticButton
            href="mailto:chutiponwinner@gmail.com"
            variant="crimson"
            className="text-sm"
          >
            <Mail className="h-4 w-4" />
            chutiponwinner@gmail.com
            <ArrowUpRight className="h-4 w-4" />
          </MagneticButton>

          <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
            {SOCIALS.map((s) => {
              const Icon = s.icon;
              return (
                <MagneticButton
                  key={s.label}
                  href={s.href}
                  variant="ghost"
                  className="!px-5 !py-3 text-[11px]"
                  strength={0.45}
                >
                  <Icon className="h-3.5 w-3.5" />
                  <span className="font-mono uppercase tracking-[0.2em]">{s.label}</span>
                </MagneticButton>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
