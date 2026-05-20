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

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["3%", "-68%"]);
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="masterpieces"
      ref={sectionRef}
      className="relative h-[420vh] bg-parchment-200/40"
    >
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        {/* faint scenery wash */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_50%,rgba(15,23,42,0.04),transparent_70%)]" />

        <div className="mx-auto w-full max-w-7xl px-6">
          <SectionHeader
            eyebrow="Chapter VI — Chronicles"
            title={
              <>
                Works that <span className="italic text-crimson-700">moved people.</span>
              </>
            }
            subtitle="A gallery of bounties — music videos with real audiences, software people use, and national-level accolades. Click any poster to view the full story."
          />
        </div>

        <motion.div
          ref={trackRef}
          style={{ x }}
          className="mt-14 flex items-stretch gap-7 pl-[6vw] will-change-transform"
        >
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.id} project={p} onOpen={setActive} index={i} />
          ))}

          {/* trailing chapter card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex w-[78vw] shrink-0 flex-col items-center justify-center gap-3 self-stretch rounded-sm border-2 border-dashed border-sepia-700/40 bg-parchment-50 px-10 py-12 text-center shadow-cinema sm:w-[360px] md:w-[420px]"
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-sepia-700">
              To be continued
            </p>
            <p className="font-serif text-3xl font-medium leading-tight text-ocean-900">
              More chapters
              <br />
              <span className="italic text-crimson-700">on the way.</span>
            </p>
            <p className="mt-2 max-w-[260px] text-sm leading-relaxed text-ocean-600">
              Currently filming, soldering, and coding. Check back soon — or send a message.
            </p>
          </motion.div>
        </motion.div>

        {/* progress chart */}
        <div className="mx-auto mt-10 w-full max-w-7xl px-6">
          <div className="flex items-center gap-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-sepia-700">
              Scroll to chart course
            </p>
            <div className="relative h-px flex-1 overflow-hidden bg-sepia-700/25">
              <motion.div
                style={{ width: progressWidth }}
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-ocean-900 via-sepia-700 to-crimson-700"
              />
            </div>
            <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-sepia-700">
              {String(PROJECTS.length).padStart(2, "0")} chronicles
            </p>
          </div>
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
