"use client";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { NAV } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 30));

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-4 z-50 flex justify-center px-4"
    >
      <nav
        className={cn(
          "flex items-center gap-1 rounded-full border px-2 py-2 transition-all duration-500",
          scrolled
            ? "border-parchment-300 bg-parchment-50/90 shadow-cinema backdrop-blur-xl"
            : "border-parchment-300/60 bg-parchment-50/55 backdrop-blur-md"
        )}
      >
        <a
          href="#hero"
          className="ml-2 mr-1 hidden items-center gap-2 rounded-full px-3 py-1.5 sm:flex"
        >
          <span className="relative inline-flex h-2.5 w-2.5">
            <span className="absolute inset-0 animate-ping rounded-full bg-crimson-700 opacity-50" />
            <span className="relative inline-block h-2.5 w-2.5 rounded-full bg-crimson-700" />
          </span>
          <span className="font-serif text-base italic leading-none text-ocean-900">
            @cwinner
          </span>
        </a>
        <ul className="flex items-center gap-1">
          {NAV.map((n) => (
            <li key={n.id}>
              <a
                href={`#${n.id}`}
                className="block rounded-full px-3 py-1.5 font-sans text-[12px] font-medium tracking-wide text-ocean-700 transition hover:bg-ocean-900 hover:text-parchment-50 sm:px-4 sm:text-[13px]"
              >
                {n.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
}
