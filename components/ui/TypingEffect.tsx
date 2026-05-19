"use client";
import { useEffect, useState } from "react";
import { useInView } from "framer-motion";
import { useRef } from "react";

type Props = {
  lines: { prompt: string; text: string }[];
  speed?: number;
};

export function TypingEffect({ lines, speed = 26 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [output, setOutput] = useState<{ prompt: string; typed: string; done: boolean }[]>(
    lines.map((l) => ({ prompt: l.prompt, typed: "", done: false }))
  );

  useEffect(() => {
    if (!inView) return;
    let lineIdx = 0;
    let charIdx = 0;
    const tick = () => {
      if (lineIdx >= lines.length) return;
      const target = lines[lineIdx].text;
      charIdx++;
      setOutput((prev) => {
        const next = [...prev];
        next[lineIdx] = {
          prompt: lines[lineIdx].prompt,
          typed: target.slice(0, charIdx),
          done: charIdx >= target.length,
        };
        return next;
      });
      if (charIdx >= target.length) {
        lineIdx++;
        charIdx = 0;
        setTimeout(tick, 280);
      } else {
        setTimeout(tick, speed);
      }
    };
    const t = setTimeout(tick, 400);
    return () => clearTimeout(t);
  }, [inView, lines, speed]);

  return (
    <div ref={ref} className="font-mono text-sm leading-relaxed">
      {output.map((l, i) => (
        <div key={i} className="text-zinc-300">
          <span className="text-neon-emerald">{l.prompt}</span>
          <span className="ml-2 text-zinc-100">{l.typed}</span>
          {i === output.findIndex((o) => !o.done) && (
            <span className="ml-0.5 inline-block w-[8px] translate-y-[2px] bg-neon-cyan animate-blink">
              &nbsp;
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
