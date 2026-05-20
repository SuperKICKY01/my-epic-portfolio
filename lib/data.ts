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
  Compass,
  Anchor,
  Scroll,
} from "lucide-react";

export const PROFILE = {
  name: "Chutipon",
  alias: "@cwinner",
  tagline: ["The Director.", "The Engineer.", "The Voyager."],
  short:
    "Senior-high student at Detudom School in Ubon Ratchathani. Directing music videos, engineering interfaces, and charting US equities — setting course for Thammasat University, B.Sc. Computer Science.",
  location: "Ubon Ratchathani, Thailand",
  goal: "Thammasat University — B.Sc. Computer Science",
  schoolEmblem: "/images/projects/logo_detudom.png",
  goalEmblem: "/images/projects/Emblem_of_Thammasat_University.svg.png",
};

export const NAV = [
  { id: "hero", label: "Overture" },
  { id: "architect", label: "The Author" },
  { id: "evolution", label: "Log Pose" },
  { id: "arsenal", label: "The Crew" },
  { id: "directives", label: "Compass" },
  { id: "masterpieces", label: "Chronicles" },
  { id: "commlink", label: "Sail" },
];

export const EDUCATION = [
  {
    period: "2014 — 2020",
    title: "Sukcharoenphon · Primary Years",
    place:
      "First port of call. Primary studies at Sukcharoenphon (โรงเรียนสุขเจริญผล), Samut Prakan — first encounters with computers, electronics, and the quiet habit of taking things apart.",
    icon: Anchor,
    current: false,
  },
  {
    period: "2020 — 2024",
    title: "Detudom School · Middle Years",
    place:
      "Middle school at Detudom School. First web pages shipped to the open sea, first frames composed through a real viewfinder. The dual disciplines — code and camera — begin to take shape.",
    icon: Compass,
    current: false,
  },
  {
    period: "2024 — Present",
    title: "Detudom School · Senior High",
    place:
      "Senior high at Detudom School. Competing at provincial and regional academic levels, directing original music video work, and studying capital-market structure independently. Charting a course toward Thammasat University, Computer Science.",
    icon: Scroll,
    current: true,
  },
];

export const SKILLS = [
  {
    category: "Software",
    accent: "ocean",
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
    accent: "sepia",
    icon: Cpu,
    items: ["Arduino", "ESP32", "PCB Design", "3D Printing", "Soldering", "PC Builds"],
  },
  {
    category: "Production",
    accent: "crimson",
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
    accent: "gold",
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

export type DirectiveAccent = "ocean" | "crimson" | "gold" | "sepia";

export const DIRECTIVES: {
  title: string;
  blurb: string;
  icon: typeof Code2;
  accent: DirectiveAccent;
  span: string;
  image: string;
}[] = [
  {
    title: "Software & Systems",
    blurb:
      "Production interfaces in React, Next.js, and TypeScript. Gold Medal in Webpage Engineering at the 71st Arts & Crafts Exhibition (Regional level) — treating the browser as a precision instrument.",
    icon: Code2,
    accent: "ocean",
    span: "md:col-span-2 md:row-span-1",
    image: "/images/projects/08_achievement_page-0003.jpg",
  },
  {
    title: "Generative AI",
    blurb:
      "Consolation Prize, Generative AI — Prompt Engineering at the 2nd Computing Fair 2024, College of Computing, Khon Kaen University. Treating language models as deterministic tools, not magic.",
    icon: Brain,
    accent: "crimson",
    span: "md:col-span-1 md:row-span-2",
    image: "/images/projects/08_achievement_page-0008.jpg",
  },
  {
    title: "Capital Markets",
    blurb:
      "Trading US equities and crypto with technical analysis. Active positions and experience across NVDA, IREN, EOSE, and RKLB — market structure, risk discipline, patience.",
    icon: CandlestickChart,
    accent: "gold",
    span: "md:col-span-1 md:row-span-1",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&q=80&auto=format&fit=crop",
  },
  {
    title: "The Thammasat Course",
    blurb:
      "Destination set: B.Sc. Computer Science at Thammasat University. This portfolio is the chart, the compass, and the application.",
    icon: GraduationCap,
    accent: "sepia",
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
  href?: string;
};

export const PROJECTS: Project[] = [
  {
    id: "mv-signature",
    title: "Original Music Video",
    category: "Music Video",
    year: "2024",
    meta: "11,000+ views · Director, Videographer, Editor",
    cover: "https://i.ytimg.com/vi/yAH6bX0tzwg/maxresdefault.jpg",
    youtubeId: "yAH6bX0tzwg",
    href: "https://www.youtube.com/watch?v=yAH6bX0tzwg",
  },
  {
    id: "ach-ai-infographic",
    title: "AI Infographic Design",
    category: "Achievement",
    year: "2024",
    meta: "1st Place · Ubon Ratchathani Provincial · Senior High Division",
    cover: "/images/projects/08_achievement_page-0002.jpg",
  },
  {
    id: "ach-webpage-gold",
    title: "Webpage Engineering (Text Editor)",
    category: "Achievement",
    year: "2024",
    meta: "Gold Medal · 71st Arts & Crafts Exhibition · Regional Level",
    cover: "/images/projects/08_achievement_page-0003.jpg",
  },
  {
    id: "ach-sci-tech",
    title: "SCI-TECH TEST 2024 Aptitude",
    category: "Achievement",
    year: "2024",
    meta: "5th Place Ranking · National Science & Technology Aptitude Test",
    cover: "/images/projects/08_achievement_page-0005.jpg",
  },
  {
    id: "ach-gen-ai-consolation",
    title: "Generative AI · Prompt Engineering",
    category: "Achievement",
    year: "2024",
    meta: "Consolation Prize · 2nd Computing Fair 2024 · College of Computing, Khon Kaen University",
    cover: "/images/projects/08_achievement_page-0008.jpg",
  },
  {
    id: "ach-youth-leadership",
    title: "Youth Leadership Programme",
    category: "Achievement",
    year: "2026",
    meta: "Certified Participant · Ubon Ratchathani Youth Potential Development · Generation 10",
    cover: "/images/projects/youth_leadership_training.png",
  },
];

export const SOCIALS = [
  { label: "Instagram", href: "https://www.instagram.com/iluvwynne/", icon: Instagram },
  { label: "Facebook", href: "https://www.facebook.com/winne.venin", icon: Facebook },
  { label: "LINE", href: "https://line.me", icon: MessageCircle },
  { label: "YouTube", href: "https://www.youtube.com/@13june-08", icon: Youtube },
];

export { Sparkles, Wrench };
