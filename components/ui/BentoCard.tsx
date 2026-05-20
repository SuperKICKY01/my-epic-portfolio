"use client";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { TiltCard } from "./TiltCard";

type Accent = "ocean" | "crimson" | "gold" | "sepia";

type Props = {
  title: string;
  blurb: string;
  icon: LucideIcon;
  accent: Accent;
  span?: string;
  image?: string;
};

const accentText: Record<Accent, string> = {
  ocean: "text-ocean-900",
  crimson: "text-crimson-700",
  gold: "text-gold-600",
  sepia: "text-sepia-700",
};

const accentBorder: Record<Accent, string> = {
  ocean: "border-ocean-900/15",
  crimson: "border-crimson-700/25",
  gold: "border-gold-500/30",
  sepia: "border-sepia-700/25",
};

const accentBg: Record<Accent, string> = {
  ocean: "bg-ocean-900/[0.04]",
  crimson: "bg-crimson-700/[0.06]",
  gold: "bg-gold-500/[0.08]",
  sepia: "bg-sepia-700/[0.06]",
};

export function BentoCard({ title, blurb, icon: Icon, accent, span, image }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      className={cn("perspective-1000", span)}
    >
      <TiltCard className="h-full" intensity={6}>
        <div
          className={cn(
            "group relative h-full min-h-[240px] overflow-hidden rounded-2xl border bg-parchment-50 p-7 shadow-cinema transition-shadow duration-500 hover:shadow-cinema-lg",
            accentBorder[accent]
          )}
        >
          {/* Subtle painted background image */}
          {image && (
            <div className="absolute inset-0 opacity-[0.16] transition-opacity duration-700 group-hover:opacity-[0.24]">
              <Image
                src={image}
                alt=""
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-parchment-50 via-parchment-50/70 to-transparent" />
            </div>
          )}

          {/* Corner wash */}
          <div
            className={cn(
              "absolute -right-16 -top-16 h-44 w-44 rounded-full blur-2xl opacity-70",
              accentBg[accent]
            )}
          />

          {/* paper grain */}
          <div className="grain absolute inset-0" />

          <div className="relative z-10 flex h-full flex-col justify-between">
            <div
              className={cn(
                "inline-flex h-12 w-12 items-center justify-center rounded-xl border bg-parchment-50/80 shadow-cinema-sm",
                accentBorder[accent]
              )}
            >
              <Icon className={cn("h-5 w-5", accentText[accent])} />
            </div>

            <div className="mt-12">
              <h3 className="font-serif text-3xl font-medium leading-[1.05] tracking-title text-ocean-900">
                {title}
              </h3>
              <p className="mt-3 max-w-md text-[14.5px] leading-relaxed text-ocean-600">
                {blurb}
              </p>
              <span
                className={cn(
                  "mt-5 block h-px w-10 transition-all duration-500 group-hover:w-20",
                  accent === "ocean"
                    ? "bg-ocean-900"
                    : accent === "crimson"
                    ? "bg-crimson-700"
                    : accent === "gold"
                    ? "bg-gold-500"
                    : "bg-sepia-700"
                )}
              />
            </div>
          </div>
        </div>
      </TiltCard>
    </motion.div>
  );
}
