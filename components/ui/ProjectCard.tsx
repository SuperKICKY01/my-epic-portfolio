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
  const number = String(index + 1).padStart(2, "0");

  return (
    <motion.button
      onClick={() => onOpen(project)}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.85, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8 }}
      className="group relative block w-[78vw] shrink-0 text-left sm:w-[360px] md:w-[420px]"
    >
      <div className="bounty-frame relative overflow-hidden rounded-sm bg-parchment-50">
        {/* Poster image — portrait orientation */}
        <div className="relative aspect-[3/4] w-full overflow-hidden bg-parchment-200">
          <Image
            src={project.cover}
            alt={project.title}
            fill
            sizes="(min-width: 768px) 420px, 78vw"
            className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
          />
          {/* paper-tint overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-ocean-900/55 via-ocean-900/10 to-transparent" />
          <div className="absolute inset-0 mix-blend-multiply bg-parchment-200/15" />

          {/* Top-left chapter number */}
          <div className="absolute left-4 top-4 flex items-center gap-2">
            <span className="rounded-sm border border-parchment-50/70 bg-ocean-900/65 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.28em] text-parchment-50 backdrop-blur-sm">
              № {number}
            </span>
          </div>

          {/* Top-right action */}
          <div className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-parchment-50/70 bg-ocean-900/55 text-parchment-50 backdrop-blur transition group-hover:scale-110 group-hover:bg-crimson-700 group-hover:border-crimson-700">
            {isVideo ? <Play className="h-3.5 w-3.5 fill-current" /> : <ArrowUpRight className="h-4 w-4" />}
          </div>

          {/* Category — bottom */}
          <div className="absolute inset-x-4 bottom-4 flex items-end justify-between">
            <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-parchment-100">
              {project.category}
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-parchment-200">
              {project.year}
            </span>
          </div>

          {/* Hover play ring (for videos) */}
          {isVideo && (
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <span className="relative flex h-20 w-20 items-center justify-center rounded-full border border-parchment-50/80 bg-crimson-700/90 shadow-cinema-lg backdrop-blur-sm">
                <Play className="h-5 w-5 fill-parchment-50 text-parchment-50" />
              </span>
            </div>
          )}
        </div>

        {/* Caption — parchment strip */}
        <div className="relative border-t border-parchment-300 bg-parchment-50 px-5 py-5">
          <h3 className="font-serif text-[22px] font-medium leading-tight tracking-title text-ocean-900">
            {project.title}
          </h3>
          <p className="mt-1.5 text-[12.5px] leading-relaxed text-ocean-600">
            {project.meta}
          </p>
          {/* hand-drawn underline */}
          <span className="mt-3 block h-px w-12 bg-crimson-700/70 transition-all duration-500 group-hover:w-20" />
        </div>
      </div>
    </motion.button>
  );
}
