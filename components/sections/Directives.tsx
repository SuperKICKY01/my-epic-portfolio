"use client";
import { motion } from "framer-motion";
import { BentoCard } from "@/components/ui/BentoCard";
import { DIRECTIVES, type DirectiveAccent } from "@/lib/data";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Directives() {
  return (
    <section id="directives" className="relative py-32 sm:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Chapter V — The Compass"
          title={
            <>
              Where my attention <span className="italic text-crimson-700">compounds.</span>
            </>
          }
          subtitle="Four bearings, one operator. Each card reacts to your cursor — like the things themselves."
        />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="mt-16 grid grid-cols-1 gap-6 md:auto-rows-[minmax(240px,auto)] md:grid-cols-3"
        >
          {DIRECTIVES.map((d) => (
            <BentoCard
              key={d.title}
              title={d.title}
              blurb={d.blurb}
              icon={d.icon}
              accent={d.accent as DirectiveAccent}
              span={d.span}
              image={d.image}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
