"use client";
import { motion } from "framer-motion";
import { BentoCard } from "@/components/ui/BentoCard";
import { DIRECTIVES } from "@/lib/data";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Directives() {
  return (
    <section id="directives" className="relative py-32 sm:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="05 / Directives"
          title="Where my attention compounds."
          subtitle="Four passions, one operating system. Each card tilts to your cursor — like the things themselves."
        />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-14 grid grid-cols-1 gap-5 md:auto-rows-[minmax(220px,auto)] md:grid-cols-3"
        >
          {DIRECTIVES.map((d) => (
            <BentoCard
              key={d.title}
              title={d.title}
              blurb={d.blurb}
              icon={d.icon}
              accent={d.accent as "neon-cyan" | "neon-emerald" | "neon-violet" | "neon-rose"}
              span={d.span}
              image={d.image}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
