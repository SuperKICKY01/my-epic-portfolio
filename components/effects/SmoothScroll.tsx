"use client";
import { useEffect } from "react";
import Lenis from "lenis";

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      // Higher lerp = snappier response, less rubber-band drag on desktop wheel
      lerp: 0.12,
      // Native mouse-wheel smoothing
      smoothWheel: true,
      wheelMultiplier: 1.25,
      // Don't intercept touch — mobile already has good native momentum
      syncTouch: false,
      touchMultiplier: 1.5,
    });

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
