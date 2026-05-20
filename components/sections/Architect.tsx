"use client";
import { motion } from "framer-motion";
import { Quote, MapPin, Target, Film } from "lucide-react";
import Image from "next/image";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PROFILE } from "@/lib/data";

const stats = [
  { label: "Location", value: "Ubon Ratchathani, Thailand", icon: MapPin },
  { label: "Destination", value: "Thammasat — B.Sc. Computer Science", icon: Target },
  { label: "MV Reach", value: "11,000+ views directed", icon: Film },
];

export function Architect() {
  return (
    <section id="architect" className="relative py-32 sm:py-40">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-12">
        <div className="md:col-span-5">
          <SectionHeader
            eyebrow="Chapter II — The Author"
            title={
              <>
                Two crafts. <br />
                <span className="italic text-crimson-700">One operator.</span>
              </>
            }
            subtitle="Senior-high student at Detudom School preparing for Thammasat Computer Science. After hours: directing, shooting, and editing original music video work — including a release that has passed 11,000 views."
          />

          <ul className="mt-10 space-y-5">
            {stats.map((s) => {
              const Icon = s.icon;
              return (
                <motion.li
                  key={s.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="flex items-start gap-4"
                >
                  <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-full border border-sepia-700/30 bg-parchment-50 shadow-cinema-sm">
                    <Icon className="h-3.5 w-3.5 text-sepia-700" />
                  </div>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-sepia-700">
                      {s.label}
                    </p>
                    <p className="mt-1 font-serif text-lg leading-snug text-ocean-900">
                      {s.value}
                    </p>
                  </div>
                </motion.li>
              );
            })}
          </ul>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
          className="md:col-span-7"
        >
          {/* Cinematic manuscript card */}
          <div className="relative overflow-hidden rounded-2xl border border-parchment-300 bg-parchment-50 shadow-cinema-xl">
            {/* paper grain */}
            <div className="grain absolute inset-0" />

            {/* Header strip */}
            <div className="relative flex items-center justify-between border-b border-parchment-300 bg-parchment-100 px-6 py-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-sepia-700">
                Manuscript — Personal Statement
              </p>
              <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-sepia-700/70">
                {PROFILE.alias}
              </p>
            </div>

            <div className="relative grid gap-8 p-8 md:grid-cols-[auto,1fr] md:items-start md:p-10">
              {/* school crest */}
              <div className="flex flex-col items-center gap-3">
                <div className="relative h-24 w-24 overflow-hidden rounded-full border border-parchment-300 bg-parchment-50 shadow-cinema-sm">
                  <Image
                    src={PROFILE.schoolEmblem}
                    alt="Detudom School"
                    fill
                    sizes="96px"
                    className="object-contain p-2"
                  />
                </div>
                <p className="text-center font-mono text-[9px] uppercase tracking-[0.32em] text-sepia-700">
                  Detudom
                  <br />School
                </p>

                {/* vertical rule */}
                <div className="my-3 h-12 w-px bg-sepia-700/25" />

                <div className="relative h-24 w-24 overflow-hidden rounded-full border border-parchment-300 bg-parchment-50 shadow-cinema-sm">
                  <Image
                    src={PROFILE.goalEmblem}
                    alt="Thammasat University"
                    fill
                    sizes="96px"
                    className="object-contain p-2"
                  />
                </div>
                <p className="text-center font-mono text-[9px] uppercase tracking-[0.32em] text-crimson-700">
                  Thammasat
                  <br />Destination
                </p>
              </div>

              <div>
                <Quote className="h-7 w-7 text-crimson-700/80" />
                <p className="mt-5 font-serif text-[26px] italic leading-[1.35] text-ocean-900">
                  &ldquo;Make things that look as good as they think.&rdquo;
                </p>
                <div className="mt-7 space-y-4 text-[15px] leading-relaxed text-ocean-700">
                  <p>
                    I&apos;m Chutipon — a senior-high student at
                    <span className="font-medium text-ocean-900"> Detudom School </span>
                    in Ubon Ratchathani. I write code that ships, I direct music videos that
                    audiences actually watch, and I read price action on US equities the way
                    I read film grammar — patiently, with respect for structure.
                  </p>
                  <p>
                    My active positions cover{" "}
                    <span className="font-medium text-ocean-900">NVDA, IREN, EOSE, RKLB</span>,
                    plus crypto, traded on technical analysis. My directed work has crossed
                    <span className="font-medium text-ocean-900"> 11,000 views</span>. The same
                    operator runs every stack.
                  </p>
                </div>

                <div className="mt-8 inline-flex items-center gap-3 border-l-2 border-crimson-700 pl-4">
                  <p className="font-serif text-base italic text-ocean-900">
                    — Chutipon, Class of 2026
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
