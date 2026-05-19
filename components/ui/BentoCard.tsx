"use client";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { TiltCard } from "./TiltCard";

type Props = {
  title: string;
  blurb: string;
  icon: LucideIcon;
  accent: "neon-cyan" | "neon-emerald" | "neon-violet" | "neon-rose";
  span?: string;
  image?: string;
};

const accentMap: Record<Props["accent"], string> = {
  "neon-cyan": "from-neon-cyan/40 to-transparent shadow-[0_0_40px_-10px_rgba(34,211,238,0.5)]",
  "neon-emerald": "from-neon-emerald/40 to-transparent shadow-[0_0_40px_-10px_rgba(52,211,153,0.5)]",
  "neon-violet": "from-neon-violet/40 to-transparent shadow-[0_0_40px_-10px_rgba(167,139,250,0.5)]",
  "neon-rose": "from-neon-rose/40 to-transparent shadow-[0_0_40px_-10px_rgba(251,113,133,0.5)]",
};

export function BentoCard({ title, blurb, icon: Icon, accent, span, image }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={cn("perspective-1000", span)}
    >
      <TiltCard className="h-full">
        <div className="group relative h-full min-h-[220px] overflow-hidden rounded-3xl border border-white/10 bg-ink-900/60 p-7 backdrop-blur-xl">
          {/* Background image */}
          {image && (
            <div className="absolute inset-0 opacity-25 transition-opacity duration-700 group-hover:opacity-40">
              <Image
                src={image}
                alt=""
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/70 to-transparent" />
            </div>
          )}

          {/* Accent glow corner */}
          <div
            className={cn(
              "absolute -right-12 -top-12 h-44 w-44 rounded-full bg-gradient-radial blur-2xl transition-opacity duration-500 group-hover:opacity-100",
              "bg-gradient-to-br opacity-70",
              accentMap[accent]
            )}
          />

          {/* Noise */}
          <div className="absolute inset-0 noisy" />

          <div className="relative z-10 flex h-full flex-col justify-between">
            <div
              className={cn(
                "inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur"
              )}
            >
              <Icon className={cn("h-5 w-5", `text-${accent}`)} />
            </div>

            <div className="mt-12">
              <h3 className="font-display text-2xl font-semibold tracking-tight text-white">
                {title}
              </h3>
              <p className="mt-2 max-w-sm text-sm leading-relaxed text-zinc-400">{blurb}</p>
            </div>
          </div>

          {/* Hover ring */}
          <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/0 transition group-hover:ring-white/20" />
        </div>
      </TiltCard>
    </motion.div>
  );
}
