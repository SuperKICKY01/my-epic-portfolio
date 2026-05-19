import {
  Code2,
  Cpu,
  Film,
  LineChart,
  Gamepad2,
  Wrench,
  CandlestickChart,
  GraduationCap,
  Instagram,
  Facebook,
  MessageCircle,
  Youtube,
} from "lucide-react";

export const PROFILE = {
  name: "Chutipon",
  alias: "@cwinner",
  tagline: ["Director.", "Developer.", "Creator."],
  short:
    "Music-video director by night, computer-science apprentice by day. Building things that look as good as they think.",
  location: "Bangkok, Thailand",
  goal: "Thammasat University — Computer Science",
};

export const NAV = [
  { id: "hero", label: "Home" },
  { id: "architect", label: "Profile" },
  { id: "evolution", label: "Journey" },
  { id: "arsenal", label: "Skills" },
  { id: "directives", label: "Interests" },
  { id: "masterpieces", label: "Works" },
  { id: "commlink", label: "Contact" },
];

export const EDUCATION = [
  {
    period: "2011 — 2017",
    title: "Primary School",
    place: "First sparks: curiosity, drawing, broken toys reassembled.",
    icon: GraduationCap,
    current: false,
  },
  {
    period: "2018 — 2020",
    title: "Middle School",
    place: "Picked up a camera. Wrote my first <script> tag. No turning back.",
    icon: GraduationCap,
    current: false,
  },
  {
    period: "2021 — Present",
    title: "High School",
    place: "Directing music videos, shipping side projects, prepping for TU CS.",
    icon: GraduationCap,
    current: true,
  },
];

export const SKILLS = [
  {
    category: "Software",
    color: "from-neon-cyan to-sky-500",
    icon: Code2,
    items: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Framer Motion", "Python"],
  },
  {
    category: "Hardware",
    color: "from-neon-emerald to-teal-500",
    icon: Cpu,
    items: ["Arduino", "ESP32", "PC Building", "3D Printing", "Soldering"],
  },
  {
    category: "Production",
    color: "from-neon-rose to-orange-500",
    icon: Film,
    items: ["Cinematography", "Premiere Pro", "DaVinci Resolve", "After Effects", "Color Grading"],
  },
  {
    category: "Finance",
    color: "from-neon-violet to-fuchsia-500",
    icon: LineChart,
    items: ["Technical Analysis", "Trading", "Risk Management", "Market Structure"],
  },
];

export const DIRECTIVES = [
  {
    title: "Game Development",
    blurb: "Real-time worlds, shaders, and the math of fun.",
    icon: Gamepad2,
    accent: "neon-cyan",
    span: "md:col-span-2 md:row-span-1",
    image:
      "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=1200&q=80&auto=format&fit=crop",
  },
  {
    title: "Hardware Engineering",
    blurb: "Where solder smoke meets clean abstractions.",
    icon: Wrench,
    accent: "neon-emerald",
    span: "md:col-span-1 md:row-span-2",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80&auto=format&fit=crop",
  },
  {
    title: "Financial Markets",
    blurb: "Charts, candles, and the choreography of capital.",
    icon: CandlestickChart,
    accent: "neon-violet",
    span: "md:col-span-1 md:row-span-1",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&q=80&auto=format&fit=crop",
  },
  {
    title: "Thammasat CS Dream",
    blurb: "The next four years, mapped — and earned.",
    icon: GraduationCap,
    accent: "neon-cyan",
    span: "md:col-span-2 md:row-span-1",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&q=80&auto=format&fit=crop",
  },
];

export type Project = {
  id: string;
  title: string;
  category: "Music Video" | "Hardware" | "Software";
  year: string;
  meta: string;
  cover: string;
  youtubeId?: string;
};

export const PROJECTS: Project[] = [
  {
    id: "mv-aurora",
    title: "AURORA — Music Video",
    category: "Music Video",
    year: "2024",
    meta: "11K+ views · Director / Editor",
    cover: "https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    id: "idesk",
    title: "iDesk — Acrylic Cube Smart Lamp",
    category: "Hardware",
    year: "2024",
    meta: "ESP32 · WS2812B · Custom PCB",
    cover:
      "https://images.unsplash.com/photo-1558002038-1055907df827?w=1400&q=80&auto=format&fit=crop",
  },
  {
    id: "mv-midnight",
    title: "MIDNIGHT — Short Film",
    category: "Music Video",
    year: "2023",
    meta: "Cinematographer · 4K HDR",
    cover: "https://i.ytimg.com/vi/jNQXAC9IVRw/maxresdefault.jpg",
    youtubeId: "jNQXAC9IVRw",
  },
  {
    id: "portfolio-os",
    title: "Portfolio OS — This Website",
    category: "Software",
    year: "2025",
    meta: "Next.js · Framer Motion · Tailwind",
    cover:
      "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=1400&q=80&auto=format&fit=crop",
  },
  {
    id: "trade-deck",
    title: "TradeDeck — Charting Tool",
    category: "Software",
    year: "2024",
    meta: "React · Lightweight Charts · TA Indicators",
    cover:
      "https://images.unsplash.com/photo-1640340434855-6084b1f4901c?w=1400&q=80&auto=format&fit=crop",
  },
  {
    id: "mv-echo",
    title: "ECHO — Visualizer",
    category: "Music Video",
    year: "2023",
    meta: "Reactive visuals · After Effects",
    cover: "https://i.ytimg.com/vi/9bZkp7q19f0/maxresdefault.jpg",
    youtubeId: "9bZkp7q19f0",
  },
];

export const SOCIALS = [
  { label: "Instagram", href: "https://instagram.com", icon: Instagram },
  { label: "Facebook", href: "https://facebook.com", icon: Facebook },
  { label: "LINE", href: "https://line.me", icon: MessageCircle },
  { label: "YouTube", href: "https://youtube.com", icon: Youtube },
];
