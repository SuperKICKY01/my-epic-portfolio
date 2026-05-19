import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        ink: { 950: "#05060a", 900: "#0a0c12", 800: "#10131c", 700: "#171b27", 600: "#222736" },
        neon: {
          cyan: "#22d3ee",
          emerald: "#34d399",
          violet: "#a78bfa",
          rose: "#fb7185",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-inter)", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        "grid-fade":
          "radial-gradient(circle at center, rgba(34,211,238,0.08) 0%, transparent 70%)",
        "aurora":
          "conic-gradient(from 180deg at 50% 50%, #22d3ee 0deg, #a78bfa 120deg, #34d399 240deg, #22d3ee 360deg)",
      },
      boxShadow: {
        "glow-cyan": "0 0 30px -5px rgba(34,211,238,0.55), 0 0 60px -15px rgba(34,211,238,0.35)",
        "glow-emerald": "0 0 30px -5px rgba(52,211,153,0.55)",
        "inset-soft": "inset 0 1px 0 0 rgba(255,255,255,0.06)",
      },
      animation: {
        "aurora-spin": "aurora-spin 20s linear infinite",
        "pulse-ring": "pulse-ring 2.4s cubic-bezier(0.4,0,0.6,1) infinite",
        "marquee": "marquee 35s linear infinite",
        "marquee-reverse": "marquee 35s linear infinite reverse",
        "shimmer": "shimmer 2.2s linear infinite",
        "blink": "blink 1s step-end infinite",
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
      },
    },
  },
  plugins: [],
};
export default config;
