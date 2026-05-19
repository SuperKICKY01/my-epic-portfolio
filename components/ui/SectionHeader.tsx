"use client";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  align?: "left" | "center";
};

export function SectionHeader({ eyebrow, title, subtitle, align = "left" }: Props) {
  return (
    <div className={align === "center" ? "text-center" : ""}>
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="font-mono text-[11px] uppercase tracking-[0.32em] text-neon-cyan/80"
      >
        {eyebrow}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="mt-4 max-w-3xl text-balance font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-5 max-w-2xl text-base text-zinc-400 sm:text-lg"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
