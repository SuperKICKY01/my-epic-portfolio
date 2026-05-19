"use client";
import { motion } from "framer-motion";
import { Terminal } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TypingEffect } from "@/components/ui/TypingEffect";

export function Architect() {
  return (
    <section id="architect" className="relative py-32 sm:py-40">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-12">
        <div className="md:col-span-5">
          <SectionHeader
            eyebrow="02 / The Architect"
            title={
              <>
                Two crafts. <br />
                <span className="text-gradient-neon">One operator.</span>
              </>
            }
            subtitle="By day I'm prepping for Thammasat Computer Science. By night I'm behind the camera, directing music videos that have crossed 11K+ views. The same brain runs both."
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="md:col-span-7"
        >
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-ink-900/80 backdrop-blur-xl shadow-glow-cyan">
            {/* Title bar */}
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-500/80" />
                <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
                <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
              </div>
              <div className="flex items-center gap-2 text-xs text-zinc-400">
                <Terminal className="h-3.5 w-3.5" />
                <span className="font-mono">chutipon@portfolio: ~/whoami</span>
              </div>
              <span />
            </div>
            <div className="p-6">
              <TypingEffect
                lines={[
                  { prompt: "$", text: "cat profile.json" },
                  { prompt: ">", text: '{ "alias": "@cwinner", "role": "Director · Developer · Creator" }' },
                  { prompt: "$", text: "ls ./obsessions" },
                  { prompt: ">", text: "music-video/  hardware/  finance/  game-dev/  thammasat-cs/" },
                  { prompt: "$", text: "echo $MISSION" },
                  { prompt: ">", text: "Make things that look as good as they think." },
                  { prompt: "$", text: "_" },
                ]}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
