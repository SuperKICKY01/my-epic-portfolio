"use client";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef, type ReactNode, type MouseEvent } from "react";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  strength?: number;
};

export function MagneticButton({ children, className, href, onClick, strength = 0.35 }: Props) {
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 18, mass: 0.35 });
  const sy = useSpring(y, { stiffness: 200, damping: 18, mass: 0.35 });

  const move = (e: MouseEvent<HTMLElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    x.set((e.clientX - (rect.left + rect.width / 2)) * strength);
    y.set((e.clientY - (rect.top + rect.height / 2)) * strength);
  };
  const reset = () => { x.set(0); y.set(0); };

  const baseClass = cn(
    "group relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5",
    "font-medium tracking-tight text-white",
    "border border-white/15 bg-white/[0.04] backdrop-blur-xl",
    "transition-shadow hover:shadow-glow-cyan",
    className
  );

  const inner = (
    <motion.span style={{ x: sx, y: sy }} className="inline-flex items-center gap-2">
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <motion.a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        onMouseMove={move}
        onMouseLeave={reset}
        className={baseClass}
      >
        {inner}
      </motion.a>
    );
  }
  return (
    <motion.button
      ref={ref as React.RefObject<HTMLButtonElement>}
      onMouseMove={move}
      onMouseLeave={reset}
      onClick={onClick}
      className={baseClass}
    >
      {inner}
    </motion.button>
  );
}
