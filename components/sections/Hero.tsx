"use client";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { ArrowDown, Compass } from "lucide-react";
import { useRef } from "react";
import { AuroraBackground } from "@/components/ui/AuroraBackground";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { PROFILE } from "@/lib/data";

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.18, delayChildren: 0.2 } },
};

const lineV: Variants = {
  hidden: { y: "110%", opacity: 0, filter: "blur(8px)" },
  show: {
    y: "0%",
    opacity: 1,
    filter: "blur(0)",
    transition: { duration: 1.25, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeV: Variants = {
  hidden: { y: 28, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 1.0, ease: [0.22, 1, 0.36, 1] } },
};

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.96]);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative isolate flex min-h-[100svh] items-center justify-center overflow-hidden"
    >
      <AuroraBackground />

      {/* Decorative compass — top right */}
      <motion.div
        initial={{ opacity: 0, rotate: -30 }}
        animate={{ opacity: 0.85, rotate: 0 }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        className="absolute right-8 top-24 z-0 hidden h-48 w-48 md:block"
        aria-hidden
      >
        <div className="relative h-full w-full">
          <div className="absolute inset-0 compass-ring animate-compass-spin" />
          <div className="absolute inset-6 rounded-full border border-sepia-700/30" />
          <div className="absolute inset-12 rounded-full border border-sepia-700/30" />
          <Compass className="absolute left-1/2 top-1/2 h-7 w-7 -translate-x-1/2 -translate-y-1/2 text-sepia-700/70" />
        </div>
      </motion.div>

      <motion.div
        style={{ y, opacity, scale }}
        className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 text-center"
      >
        {/* Cinematic chapter slate */}
        <motion.div
          variants={fadeV}
          initial="hidden"
          animate="show"
          className="mb-10 flex items-center gap-4"
        >
          <span className="h-px w-12 bg-sepia-700/60" />
          <p className="font-mono text-[11px] uppercase tracking-[0.36em] text-sepia-700">
            Chapter 00 — Overture
          </p>
          <span className="h-px w-12 bg-sepia-700/60" />
        </motion.div>

        <motion.h1
          variants={stagger}
          initial="hidden"
          animate="show"
          className="font-serif font-medium leading-[0.92] tracking-title text-ocean-900"
        >
          {PROFILE.tagline.map((word, i) => (
            <span key={word} className="block overflow-hidden">
              <motion.span
                variants={lineV}
                className={
                  "inline-block " +
                  (i === 1
                    ? "italic text-crimson-700 text-[clamp(3.2rem,12vw,9.5rem)]"
                    : "text-[clamp(3rem,11vw,9rem)] text-cinema")
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
          transition={{ delay: 1.05 }}
          className="mt-12 max-w-xl text-balance text-base leading-relaxed text-ocean-600 sm:text-lg"
        >
          {PROFILE.short}
        </motion.p>

        <motion.div
          variants={fadeV}
          initial="hidden"
          animate="show"
          transition={{ delay: 1.25 }}
          className="mt-14 flex flex-col items-center gap-5 sm:flex-row"
        >
          <MagneticButton href="#architect" variant="ocean">
            Begin the Voyage
            <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
          </MagneticButton>
          <a
            href="#masterpieces"
            className="font-serif text-lg italic text-ocean-700 underline-offset-[6px] transition hover:text-crimson-700 hover:underline"
          >
            ↳ Skip to the chronicles
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2.5 text-[10px] uppercase tracking-[0.4em] text-sepia-700/80"
      >
        <span className="font-mono">Scroll</span>
        <span className="relative block h-12 w-px overflow-hidden bg-sepia-700/30">
          <motion.span
            animate={{ y: [-48, 48] }}
            transition={{ duration: 2.1, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-x-0 top-0 h-6 bg-gradient-to-b from-transparent via-crimson-700 to-transparent"
          />
        </span>
      </motion.div>
    </section>
  );
}
