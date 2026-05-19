"use client";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import { useRef } from "react";
import { AuroraBackground } from "@/components/ui/AuroraBackground";
import { ParticleField } from "@/components/effects/ParticleField";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { PROFILE } from "@/lib/data";

const containerV: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};
const wordV: Variants = {
  hidden: { y: "110%", opacity: 0, filter: "blur(8px)" },
  show: {
    y: "0%",
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 1.05, ease: [0.22, 1, 0.36, 1] },
  },
};
const fadeV: Variants = {
  hidden: { y: 24, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
};

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative isolate flex min-h-[100svh] items-center justify-center overflow-hidden"
    >
      <AuroraBackground />
      <ParticleField density={70} />

      <motion.div
        style={{ y, opacity, scale }}
        className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 text-center"
      >
        <motion.div
          variants={fadeV}
          initial="hidden"
          animate="show"
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-zinc-400 backdrop-blur"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-neon-emerald opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-neon-emerald" />
          </span>
          Available for collaboration · {PROFILE.location}
        </motion.div>

        <motion.h1
          variants={containerV}
          initial="hidden"
          animate="show"
          className="font-display text-[clamp(3rem,11vw,9rem)] font-bold leading-[0.92] tracking-tight"
        >
          {PROFILE.tagline.map((word, i) => (
            <span key={word} className="block overflow-hidden">
              <motion.span
                variants={wordV}
                className={
                  i === 1
                    ? "inline-block text-gradient-neon"
                    : "inline-block text-gradient"
                }
              >
                {word}
              </motion.span>
            </span>
          ))}
        </motion.h1>

        <motion.p
          variants={fadeV}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.9 }}
          className="mt-10 max-w-xl text-balance text-base text-zinc-400 sm:text-lg"
        >
          {PROFILE.short}
        </motion.p>

        <motion.div
          variants={fadeV}
          initial="hidden"
          animate="show"
          transition={{ delay: 1.05 }}
          className="mt-12 flex flex-col items-center gap-4 sm:flex-row"
        >
          <MagneticButton href="#architect" className="text-sm">
            <Sparkles className="h-4 w-4 text-neon-cyan" />
            Explore My Universe
            <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
          </MagneticButton>
          <a
            href="#masterpieces"
            className="text-sm font-medium text-zinc-400 underline-offset-4 transition hover:text-white hover:underline"
          >
            Jump to works ↗
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-zinc-500"
      >
        <span>Scroll</span>
        <span className="relative block h-10 w-px overflow-hidden bg-white/10">
          <motion.span
            animate={{ y: [-40, 40] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-x-0 top-0 h-5 bg-gradient-to-b from-transparent via-neon-cyan to-transparent"
          />
        </span>
      </motion.div>
    </section>
  );
}
