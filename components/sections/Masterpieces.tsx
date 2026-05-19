"use client";
import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { VideoLightbox } from "@/components/ui/VideoLightbox";
import { PROJECTS, type Project } from "@/lib/data";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Masterpieces() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<Project | null>(null);

  // scroll-linked horizontal translation
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  // 0 → -75% so the row scrolls horizontally as the section scrolls vertically
  const x = useTransform(scrollYProgress, [0, 1], ["2%", "-72%"]);
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="masterpieces"
      ref={sectionRef}
      // tall section so we get horizontal scroll travel
      className="relative h-[420vh]"
    >
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <div className="mx-auto w-full max-w-7xl px-6">
          <SectionHeader
            eyebrow="06 / Masterpieces"
            title={
              <>
                Works that <span className="text-gradient-neon">moved people.</span>
              </>
            }
            subtitle="Music videos with real audiences, hardware that lives on desks, and software people actually use."
          />
        </div>

        <motion.div
          ref={trackRef}
          style={{ x }}
          className="mt-12 flex gap-6 pl-[6vw] will-change-transform"
        >
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.id} project={p} onOpen={setActive} index={i} />
          ))}
          {/* trailing CTA card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex w-[60vw] shrink-0 items-center justify-center rounded-3xl border border-dashed border-white/15 bg-white/[0.02] p-12 text-center sm:w-[420px]"
          >
            <div>
              <p className="font-display text-3xl text-white">More on the way.</p>
              <p className="mt-2 text-sm text-zinc-400">
                Currently filming + soldering. Check back soon, or DM me on IG.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Progress bar */}
        <div className="mx-auto mt-10 w-full max-w-7xl px-6">
          <div className="relative h-px w-full overflow-hidden bg-white/10">
            <motion.div
              style={{ width: progressWidth }}
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-neon-cyan via-neon-violet to-neon-emerald"
            />
          </div>
          <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.25em] text-zinc-500">
            Scroll to explore · {PROJECTS.length} works
          </p>
        </div>
      </div>

      <VideoLightbox
        open={!!active?.youtubeId}
        onOpenChange={(o) => !o && setActive(null)}
        youtubeId={active?.youtubeId}
        title={active?.title}
      />
    </section>
  );
}
