"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, type MouseEvent, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  className?: string;
  intensity?: number;
};

export function TiltCard({ children, className, intensity = 10 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const smx = useSpring(mx, { stiffness: 160, damping: 18 });
  const smy = useSpring(my, { stiffness: 160, damping: 18 });

  const rotateY = useTransform(smx, [0, 1], [-intensity, intensity]);
  const rotateX = useTransform(smy, [0, 1], [intensity, -intensity]);
  const glareX = useTransform(smx, [0, 1], ["0%", "100%"]);
  const glareY = useTransform(smy, [0, 1], ["0%", "100%"]);

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width);
    my.set((e.clientY - r.top) / r.height);
  };
  const onLeave = () => { mx.set(0.5); my.set(0.5); };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      className={cn("preserve-3d relative", className)}
    >
      {children}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 mix-blend-overlay transition-opacity duration-300 hover:opacity-100"
        style={{
          background: `radial-gradient(220px circle at ${glareX.get()} ${glareY.get()}, rgba(255,255,255,0.18), transparent 60%)`,
        }}
      />
    </motion.div>
  );
}
