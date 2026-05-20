import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Parchment — warm cinematic paper tones
        parchment: {
          50: "#FEFDFB",
          100: "#FDFBF7", // hero base
          200: "#F7F1E5",
          300: "#EFE4CC",
          400: "#E2D2AE",
          500: "#C9B68A",
        },
        // Deep Ocean — the navigator's blue
        ocean: {
          900: "#0F172A",
          800: "#172033",
          700: "#1E293B",
          600: "#334155",
          500: "#475569",
          400: "#64748B",
          300: "#94A3B8",
        },
        // Cinematic Crimson — drama accent
        crimson: {
          900: "#7F1D1D",
          800: "#8B1414",
          700: "#991B1B",
          600: "#B91C1C",
          500: "#DC2626",
        },
        // Aged Gold — log-pose / compass / "bounty" accent
        gold: {
          700: "#8C6A1A",
          600: "#A8801F",
          500: "#B8860B",
          400: "#D4A53D",
          300: "#E6C374",
        },
        // Sepia — warm secondary
        sepia: {
          900: "#3B2A1A",
          800: "#4A3624",
          700: "#57422C",
          600: "#6E5238",
          500: "#8A6B4A",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: [
          "var(--font-serif)",
          "Cormorant Garamond",
          "Georgia",
          "serif",
        ],
        display: [
          "var(--font-serif)",
          "Cormorant Garamond",
          "Georgia",
          "serif",
        ],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        "paper-grain":
          "radial-gradient(rgba(89,69,40,0.06) 1px, transparent 1px), radial-gradient(rgba(89,69,40,0.04) 1px, transparent 1px)",
        "ocean-haze":
          "radial-gradient(ellipse 90% 60% at 50% -10%, rgba(15,23,42,0.10), transparent 60%)",
        "crimson-wash":
          "radial-gradient(ellipse 60% 40% at 80% 100%, rgba(153,27,27,0.10), transparent 70%)",
        "log-pose":
          "radial-gradient(circle at 50% 50%, rgba(184,134,11,0.25) 0%, transparent 60%)",
      },
      boxShadow: {
        // Realistic cinematic shadows — soft, warm, no glow
        "cinema-sm": "0 2px 6px -2px rgba(15,23,42,0.08), 0 4px 12px -4px rgba(15,23,42,0.10)",
        "cinema": "0 12px 32px -12px rgba(15,23,42,0.18), 0 4px 12px -4px rgba(15,23,42,0.10)",
        "cinema-lg":
          "0 28px 60px -24px rgba(15,23,42,0.28), 0 12px 28px -12px rgba(15,23,42,0.16)",
        "cinema-xl":
          "0 40px 90px -36px rgba(15,23,42,0.32), 0 18px 40px -16px rgba(15,23,42,0.18)",
        "bounty":
          "0 36px 70px -30px rgba(15,23,42,0.36), 0 8px 22px -10px rgba(89,69,40,0.18), inset 0 0 0 1px rgba(15,23,42,0.06)",
        "inset-paper":
          "inset 0 1px 0 0 rgba(255,255,255,0.6), inset 0 -1px 0 0 rgba(89,69,40,0.06)",
      },
      animation: {
        "compass-spin": "compass-spin 22s linear infinite",
        "compass-pulse": "compass-pulse 3s ease-in-out infinite",
        "marquee": "marquee 45s linear infinite",
        "ink-rise": "ink-rise 1.2s cubic-bezier(0.22,1,0.36,1) both",
        "drift": "drift 14s ease-in-out infinite",
      },
      keyframes: {
        "compass-spin": { to: { transform: "rotate(360deg)" } },
        "compass-pulse": {
          "0%, 100%": { transform: "scale(1)", opacity: "0.55" },
          "50%": { transform: "scale(1.06)", opacity: "0.85" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "ink-rise": {
          "0%": { transform: "translateY(110%)", opacity: "0", filter: "blur(6px)" },
          "100%": { transform: "translateY(0)", opacity: "1", filter: "blur(0)" },
        },
        drift: {
          "0%, 100%": { transform: "translate3d(0,0,0)" },
          "50%": { transform: "translate3d(0,-10px,0)" },
        },
      },
      letterSpacing: {
        "title": "-0.02em",
        "wider-x": "0.32em",
      },
    },
  },
  plugins: [],
};
export default config;
