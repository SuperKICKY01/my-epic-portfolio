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
    "I architect software by daylight and direct frames after dark — shipping interfaces that breathe, training generative models with surgical prompts, and composing stories that have already reached audiences eleven thousand strong. One operator, two stacks, zero shortcuts.",
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
    title: "Primary School",
    place:
      "First principles, learned the hard way — disassembling household electronics, sketching impossible interfaces years before discovering the vocabulary for them.",
    icon: GraduationCap,
    current: false,
  },
  {
    period: "2018 — 2020",
    title: "Middle School",
    place:
      "First production <script> tag shipped to a live page. First frame composed through a real viewfinder. The dual-stack identity quietly takes shape.",
    icon: GraduationCap,
    current: false,
  },
  {
    period: "2021 — Present",
    title: "Detudom School · Senior High",
    place:
      "National Champion in Generative AI Prompt Engineering. Music-video director with 11K+ aggregate views. Active operator across US equities and digital assets. Final approach vector locked on Thammasat Computer Science.",
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
    color: "from-neon-emerald to-teal-500",
    icon: Cpu,
    items: ["Arduino", "ESP32", "PCB Design", "3D Printing", "Soldering", "PC Builds"],
  },
  {
    category: "Production",
    color: "from-neon-rose to-orange-500",
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
      "From component composition to production deployment — engineering interfaces that hold sixty frames per second and refuse to blink under load. National-finalist credentials in webpage engineering, built with nothing but a text editor.",
    icon: Code2,
    accent: "neon-cyan",
    span: "md:col-span-2 md:row-span-1",
    image: "/images/projects/08_achievement_page-0003.jpg",
  },
  {
    title: "Generative AI",
    blurb:
      "National Champion at the 2nd Computing Fair 2024, College of Computing. Treating language models as precision instruments — disciplined inputs, predictable outputs, zero hallucinated guesswork.",
    icon: Brain,
    accent: "neon-violet",
    span: "md:col-span-1 md:row-span-2",
    image: "/images/projects/08_achievement_page-0008.jpg",
  },
  {
    title: "Capital Markets",
    blurb:
      "Live positions across US equities and digital assets — NVDA, IREN, EOSE, RKLB — executed on technical structure and risk geometry, never on sentiment or hope.",
    icon: CandlestickChart,
    accent: "neon-emerald",
    span: "md:col-span-1 md:row-span-1",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&q=80&auto=format&fit=crop",
  },
  {
    title: "The Thammasat Trajectory",
    blurb:
      "Four years mapped, every credit accounted for — a B.Sc. in Computer Science at Thammasat University, earned by the very portfolio you are reading right now.",
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
    title: "Signature Cut — Original Music Video",
    category: "Music Video",
    year: "2024",
    meta: "11,000+ views · Director · Cinematographer · Editor",
    cover: "https://i.ytimg.com/vi/yAH6bX0tzwg/maxresdefault.jpg",
    youtubeId: "yAH6bX0tzwg",
  },
  {
    id: "ach-gen-ai-champion",
    title: "Champion — Generative AI Prompt Engineering",
    category: "Achievement",
    year: "2024",
    meta: "1st Place · 2nd Computing Fair 2024 · College of Computing · National Showcase",
    cover: "/images/projects/08_achievement_page-0008.jpg",
  },
  {
    id: "ach-webpage-national-r10",
    title: "Webpage Engineering — National Finalist",
    category: "Achievement",
    year: "2024",
    meta: "70th National Arts & Crafts · Text-Editor Build · Senior High Division",
    cover: "/images/projects/08_achievement_page-0003.jpg",
  },
  {
    id: "ach-sci-tech-gold",
    title: "SCI-TECH TEST 2024 — Gold Medal",
    category: "Achievement",
    year: "2024",
    meta: "Science & Technology Aptitude · National Standardised Competition · Gold Tier",
    cover: "/images/projects/08_achievement_page-0005.jpg",
  },
  {
    id: "ach-ai-infographic",
    title: "AI Infographic Competition",
    category: "Achievement",
    year: "2024",
    meta: "Senior High Division · Visual Computing × Information Design",
    cover: "/images/projects/08_achievement_page-0002.jpg",
  },
  {
    id: "ach-webpage-finals",
    title: "Webpage Engineering — Championship Round",
    category: "Achievement",
    year: "2024",
    meta: "National Bracket · Text-Editor Build · Round 10",
    cover: "/images/projects/08_achievement_page-0004.jpg",
  },
  {
    id: "ach-ict-equation",
    title: "ICT Computational Skills",
    category: "Achievement",
    year: "2024",
    meta: "9th Ubon · Amnat Charoen Secondary Education Bracket · Senior High Division",
    cover: "/images/projects/08_achievement_page-0001.jpg",
  },
  {
    id: "ach-webpage-regional",
    title: "Webpage Engineering — Regional Qualifier",
    category: "Achievement",
    year: "2024",
    meta: "Provincial Bracket · Text-Editor Build · Top Performer",
    cover: "/images/projects/08_achievement_page-0006.jpg",
  },
  {
    id: "ach-webpage-provincial",
    title: "Webpage Engineering — Provincial Champion",
    category: "Achievement",
    year: "2024",
    meta: "Provincial Final · Text-Editor Build · Champion Bracket",
    cover: "/images/projects/08_achievement_page-0007.jpg",
  },
  {
    id: "ach-youth-leadership",
    title: "Youth Leadership · Community Impact",
    category: "Achievement",
    year: "2026",
    meta: "Ubon Ratchathani Youth Potential Programme · Generation-10 Cohort",
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
