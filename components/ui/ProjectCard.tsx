"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Play, ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/data";

type Props = {
  project: Project;
  onOpen: (p: Project) => void;
  index: number;
};

export function ProjectCard({ project, onOpen, index }: Props) {
  const isVideo = !!project.youtubeId;
  return (
    <motion.button
      onClick={() => onOpen(project)}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="group relative block w-[78vw] shrink-0 overflow-hidden rounded-3xl border border-white/10 bg-ink-900/60 text-left backdrop-blur-xl sm:w-[520px] md:w-[600px]"
    >
      {/* Image */}
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <Image
          src={project.cover}
          alt={project.title}
          fill
          sizes="(min-width: 768px) 600px, 78vw"
          className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/30 to-transparent" />

        {/* Category badge */}
        <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/40 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-zinc-200 backdrop-blur">
          {project.category}
        </span>

        {/* Play / launch icon */}
        <div className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/40 text-white backdrop-blur transition group-hover:scale-110 group-hover:bg-neon-cyan/30 group-hover:shadow-glow-cyan">
          {isVideo ? <Play className="h-4 w-4 fill-current" /> : <ArrowUpRight className="h-4 w-4" />}
        </div>

        {/* Hover reveal: animated play ring (for videos) */}
        {isVideo && (
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            <span className="relative flex h-20 w-20 items-center justify-center rounded-full bg-white/10 backdrop-blur-md ring-1 ring-white/30">
              <span className="absolute inset-0 animate-pulse-ring rounded-full ring-2 ring-neon-cyan/60" />
              <Play className="h-6 w-6 fill-white text-white" />
            </span>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="flex items-end justify-between gap-4 p-6">
        <div>
          <h3 className="font-display text-2xl font-semibold tracking-tight text-white">
            {project.title}
          </h3>
          <p className="mt-1 text-sm text-zinc-400">{project.meta}</p>
        </div>
        <span className="font-mono text-xs text-zinc-500">{project.year}</span>
      </div>
    </motion.button>
  );
}
