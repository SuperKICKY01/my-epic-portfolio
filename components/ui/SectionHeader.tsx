"use client";
import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
};

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "left",
  tone = "light",
}: Props) {
  return (
    <div className={align === "center" ? "text-center" : ""}>
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={cn(
          "inline-flex items-center gap-3",
          align === "center" && "justify-center"
        )}
      >
        <span className={cn("h-px w-8", tone === "dark" ? "bg-parchment-300/60" : "bg-sepia-700/50")} />
        <p className={cn("font-mono text-[10px] uppercase tracking-[0.36em]",
          tone === "dark" ? "text-parchment-300" : "text-sepia-700")}>
          {eyebrow}
        </p>
        <span className={cn("h-px w-8", tone === "dark" ? "bg-parchment-300/60" : "bg-sepia-700/50")} />
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "mt-5 max-w-3xl text-balance font-serif text-5xl font-medium leading-[1.02] tracking-title sm:text-6xl md:text-7xl",
          tone === "dark" ? "text-parchment-50" : "text-ocean-900",
          align === "center" && "mx-auto"
        )}
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.12 }}
          className={cn(
            "mt-6 max-w-2xl text-base leading-relaxed sm:text-lg",
            tone === "dark" ? "text-parchment-200/80" : "text-ocean-600",
            align === "center" && "mx-auto"
          )}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
