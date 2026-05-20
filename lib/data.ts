import {
  Code2,
  Cpu,
  Film,
  LineChart,
  Wrench,
  CandlestickChart,
  GraduationCap,
  Instagram,
  Facebook,
  MessageCircle,
  Youtube,
  Sparkles,
  Brain,
} from "lucide-react";

export const PROFILE = {
  name: "Chutipon",
  alias: "@cwinner",
  tagline: ["Architect.", "Director.", "Operator."],
  short:
    "Student developer based in Ubon Ratchathani. Building interfaces, training prompts, and directing music videos — applying to Thammasat University, B.Sc. Computer Science.",
  location: "Ubon Ratchathani, Thailand",
  goal: "Thammasat University — B.Sc. Computer Science",
  schoolEmblem: "/images/projects/logo_detudom.png",
  goalEmblem: "/images/projects/Emblem_of_Thammasat_University.svg.png",
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
    title: "Detudom School · Primary",
    place:
      "Early years at Detudom School, Ubon Ratchathani. First exposure to computers, electronics, and the curiosity loop that became everything after.",
    icon: GraduationCap,
    current: false,
  },
  {
    period: "2018 — 2020",
    title: "Detudom School · Middle",
    place:
      "Continued at Detudom School. First web pages shipped, first frames composed through a real viewfinder — the dual-stack identity begins to form.",
    icon: GraduationCap,
    current: false,
  },
  {
    period: "2021 — Present",
    title: "Detudom School · Senior High",
    place:
      "Currently a senior high student at Detudom School. Active in national-level academic competitions, music video production, and independent capital markets practice. Applying to Thammasat University, Computer Science.",
    icon: GraduationCap,
    current: true,
  },
];

export const SKILLS = [
  {
    category: "Software",
    color: "from-neon-cyan to-sky-500",
    icon: Code2,
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Python",
    ],
  },
  {
    category: "Hardware",
    color: "from-neon-emerald to-sky-500",
    icon: Cpu,
    items: ["Arduino", "ESP32", "PCB Design", "3D Printing", "Soldering", "PC Builds"],
  },
  {
    category: "Production",
    color: "from-neon-rose to-neon-violet",
    icon: Film,
    items: [
      "Direction",
      "Cinematography",
      "Premiere Pro",
      "DaVinci Resolve",
      "After Effects",
      "Color Grading",
    ],
  },
  {
    category: "Capital Markets",
    color: "from-neon-violet to-fuchsia-500",
    icon: LineChart,
    items: [
      "Technical Analysis",
      "NVDA · IREN · EOSE · RKLB",
      "Crypto Markets",
      "Risk Management",
      "Market Structure",
    ],
  },
];

export const DIRECTIVES = [
  {
    title: "Software & Systems",
    blurb:
      "Building production interfaces with React, Next.js, and TypeScript. Webpage Engineering gold-medalist at the 71st Arts & Crafts Exhibition, Area level.",
    icon: Code2,
    accent: "neon-cyan",
    span: "md:col-span-2 md:row-span-1",
    image: "/images/projects/08_achievement_page-0003.jpg",
  },
  {
    title: "Generative AI",
    blurb:
      "Consolation Prize, Generative AI: Prompt Engineering — 2nd Computing Fair 2024, College of Computing, Khon Kaen University. Treating language models as deterministic tools, not magic.",
    icon: Brain,
    accent: "neon-violet",
    span: "md:col-span-1 md:row-span-2",
    image: "/images/projects/08_achievement_page-0008.jpg",
  },
  {
    title: "Capital Markets",
    blurb:
      "Active positions in US equities and digital assets — NVDA, IREN, EOSE, RKLB. Technical analysis, market structure, risk discipline.",
    icon: CandlestickChart,
    accent: "neon-emerald",
    span: "md:col-span-1 md:row-span-1",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&q=80&auto=format&fit=crop",
  },
  {
    title: "The Thammasat Trajectory",
    blurb:
      "Target: B.Sc. Computer Science at Thammasat University. This portfolio is the application.",
    icon: GraduationCap,
    accent: "neon-rose",
    span: "md:col-span-2 md:row-span-1",
    image: "/images/projects/08_achievement_page-0005.jpg",
  },
];

export type Project = {
  id: string;
  title: string;
  category: "Music Video" | "Hardware" | "Software" | "Achievement";
  year: string;
  meta: string;
  cover: string;
  youtubeId?: string;
};

export const PROJECTS: Project[] = [
  {
    id: "mv-signature",
    title: "Original Music Video",
    category: "Music Video",
    year: "2024",
    meta: "11,000+ views · Director · Cinematographer · Editor",
    cover: "https://i.ytimg.com/vi/yAH6bX0tzwg/maxresdefault.jpg",
    youtubeId: "yAH6bX0tzwg",
  },
  {
    id: "ach-ai-infographic",
    title: "AI Infographic Design Competition",
    category: "Achievement",
    year: "2024",
    meta: "1st Place Winner (รางวัลชนะเลิศ) · Ubon Ratchathani Provincial Senior High Division",
    cover: "/images/projects/08_achievement_page-0002.jpg",
  },
  {
    id: "ach-webpage-gold",
    title: "Webpage Engineering (Text Editor)",
    category: "Achievement",
    year: "2024",
    meta: "Gold Medal Winner (ชนะเลิศระดับเหรียญทอง) · 71st Arts & Crafts Exhibition · Regional / Area Level",
    cover: "/images/projects/08_achievement_page-0003.jpg",
  },
  {
    id: "ach-sci-tech",
    title: "SCI-TECH TEST 2024 Aptitude",
    category: "Achievement",
    year: "2024",
    meta: "5th Place Ranking (อันดับ 5 ระดับชั้น ม.5) · National Science & Technology Aptitude Test",
    cover: "/images/projects/08_achievement_page-0005.jpg",
  },
  {
    id: "ach-gen-ai-consolation",
    title: "Generative AI: Prompt Engineering",
    category: "Achievement",
    year: "2024",
    meta: "Consolation Prize (รางวัลชมเชย) · 2nd Computing Fair 2024 · College of Computing, Khon Kaen University",
    cover: "/images/projects/08_achievement_page-0008.jpg",
  },
  {
    id: "ach-youth-leadership",
    title: "Youth Leadership Programme",
    category: "Achievement",
    year: "2026",
    meta: "Certified Participant · Ubon Ratchathani Youth Potential Development · Generation-10 Cohort",
    cover: "/images/projects/youth_leadership_training.png",
  },
];

export const SOCIALS = [
  { label: "Instagram", href: "https://instagram.com", icon: Instagram },
  { label: "Facebook", href: "https://facebook.com", icon: Facebook },
  { label: "LINE", href: "https://line.me", icon: MessageCircle },
  { label: "YouTube", href: "https://www.youtube.com/watch?v=yAH6bX0tzwg", icon: Youtube },
];

export { Sparkles, Wrench };
