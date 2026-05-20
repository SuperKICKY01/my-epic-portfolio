import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Deep Midnight base — sophisticated navy/slate over harsh blacks
        ink: {
          950: "#020617",
          900: "#060B1A",
          800: "#0B1226",
          700: "#131D38",
          600: "#1D2A4D",
        },
        // K-SciFi Hologram accent stack (no greens, all electric)
        neon: {
          cyan: "#22d3ee",
          emerald: "#38bdf8", // remapped to sky-blue for hologram coherence
          violet: "#a78bfa",
          rose: "#f0abfc", // remapped to fuchsia for magenta-hologram coherence
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-inter)", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        "grid-fade":
          "radial-gradient(circle at center, rgba(34,211,238,0.10) 0%, transparent 70%)",
        "aurora":
          "conic-gradient(from 180deg at 50% 50%, #22d3ee 0deg, #38bdf8 100deg, #a78bfa 220deg, #f0abfc 320deg, #22d3ee 360deg)",
        "holo-scan":
          "repeating-linear-gradient(180deg, rgba(34,211,238,0.04) 0px, rgba(34,211,238,0.04) 1px, transparent 1px, transparent 4px)",
      },
      boxShadow: {
        "glow-cyan": "0 0 32px -6px rgba(34,211,238,0.55), 0 0 80px -20px rgba(34,211,238,0.35)",
        "glow-emerald": "0 0 32px -6px rgba(56,189,248,0.55)",
        "glow-violet": "0 0 32px -6px rgba(167,139,250,0.55)",
        "inset-soft": "inset 0 1px 0 0 rgba(255,255,255,0.06)",
        "holo": "0 0 0 1px rgba(34,211,238,0.12), 0 20px 60px -30px rgba(34,211,238,0.35)",
      },
      animation: {
        "aurora-spin": "aurora-spin 20s linear infinite",
        "pulse-ring": "pulse-ring 2.4s cubic-bezier(0.4,0,0.6,1) infinite",
        "marquee": "marquee 35s linear infinite",
        "marquee-reverse": "marquee 35s linear infinite reverse",
        "shimmer": "shimmer 2.2s linear infinite",
        "blink": "blink 1s step-end infinite",
        "scan": "scan 6s linear infinite",
      },
      keyframes: {
        "aurora-spin": { to: { transform: "rotate(360deg)" } },
        "pulse-ring": {
          "0%": { transform: "scale(0.85)", opacity: "0.8" },
          "100%": { transform: "scale(2.2)", opacity: "0" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        blink: { "50%": { opacity: "0" } },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
