"use client";
import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

type Props = {
  lines: { prompt: string; text: string }[];
  speed?: number;
};

export function TypingEffect({ lines, speed = 26 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  
  // Safe initialization
  const [output, setOutput] = useState<{ prompt: string; typed: string; done: boolean }[]>(
    (lines || []).map((l) => ({ prompt: l?.prompt || "", typed: "", done: false }))
  );

  useEffect(() => {
    // Guard against empty or invalid lines
    if (!inView || !lines || lines.length === 0) return;
    
    let lineIdx = 0;
    let charIdx = 0;
    let timeoutId: NodeJS.Timeout; // Store the CURRENT active timeout

    const tick = () => {
      if (lineIdx >= lines.length) return;
      
      const currentLine = lines[lineIdx];
      // Bulletproof check to prevent "reading properties of undefined"
      if (!currentLine) return; 

      const target = currentLine.text || "";
      charIdx++;
      
      setOutput((prev) => {
        const next = [...prev];
        // Ensure the array element exists before modifying
        if (!next[lineIdx]) {
          next[lineIdx] = { prompt: currentLine.prompt, typed: "", done: false };
        }
        
        next[lineIdx] = {
          prompt: currentLine.prompt,
          typed: target.slice(0, charIdx),
          done: charIdx >= target.length,
        };
        return next;
      });

      if (charIdx >= target.length) {
        lineIdx++;
        charIdx = 0;
        timeoutId = setTimeout(tick, 280);
      } else {
        timeoutId = setTimeout(tick, speed);
      }
    };

    timeoutId = setTimeout(tick, 400);
    
    // Cleanup will now successfully kill the zombie timeouts
    return () => clearTimeout(timeoutId);
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