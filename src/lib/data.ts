export const siteConfig = {
  name: "Naima Kader",
  initials: "nk",
  title: "Frontend Developer",
  headline: "Frontend engineer who ships AI-powered products.",
  subheadline:
    "I build fast, beautiful web apps with Next.js, TypeScript & Tailwind. Self-taught. 3 production projects. Ready for your team.",
  location: "Jijiga, Ethiopia",
  availability: "Open to remote work — worldwide",
  email: "naimakader976@gmail.com",
  github: "https://github.com/naimakader",
  linkedin: "https://www.linkedin.com/in/naima-kader-9971b3301",
  resumeUrl: "/naima-kader-resume.pdf", // add your PDF to /public
  domain: "naimakader.dev",
};

export const stack = [
  "Next.js 15",
  "TypeScript",
  "React",
  "Tailwind CSS",
  "Supabase",
  "OpenAI API",
  "Framer Motion",
  "Clerk",
];

export const skills = {
  languages: ["HTML", "CSS", "JavaScript", "TypeScript"],
  frameworks: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
  backend: ["Supabase", "Clerk", "OpenAI API"],
  tools: ["Git", "GitHub", "VS Code", "Vercel", "PowerShell"],
};

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  tags: string[];
  github: string;
  live: string;
  featured: boolean;
  color: string;
  accentColor: string;
};

export const projects: Project[] = [
  {
    slug: "lexai",
    title: "LexAI",
    subtitle: "AI-Powered Courtroom Simulator",
    description:
      "A full-stack legal training platform where users argue 10 real landmark cases against an AI judge, prosecutor, and witness. Features real-time argument scoring, session replay timelines, multiplayer battle mode, and a professor dashboard for class management.",
    longDescription:
      "LexAI is a production-grade legal training platform built with Next.js 15, TypeScript, Clerk authentication, and Supabase PostgreSQL. It puts users inside a real courtroom simulation where three AI personas — a strict federal judge, an aggressive prosecutor, and a defensive witness — respond dynamically to every argument. The argument scoring engine evaluates each turn on logic, precedent accuracy, and persuasiveness using GPT-4o-mini structured JSON outputs. The session replay timeline saves every argument with score deltas and renders a visual bar chart showing exactly where the user won or lost the case. The witness cross-examination mode detects contradictions across the entire session and awards score bonuses when the user catches the witness in a lie. The multiplayer battle mode uses Supabase Realtime to sync two players arguing opposite sides of the same case in real time, with the AI judge scoring both simultaneously. The professor dashboard lets educators create classes with auto-generated join codes, assign cases with due dates, and track every student's session history and average score. Shareable session cards generate dynamic OG images on the Vercel edge runtime so students can post their results to LinkedIn.",
    tags: [
      "Next.js 15",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "Supabase Realtime",
      "Clerk",
      "OpenAI GPT-4o-mini",
      "Framer Motion",
      "Vercel OG",
      "PostgreSQL",
    ],
    github: "https://github.com/naimakader/Lexai",
    live: "https://lexai.vercel.app",
    featured: true,
    color: "#03030A",
    accentColor: "#6366F1",
  },
  {
    slug: "neurospace",
    title: "NeuroSpace",
    subtitle: "AI Productivity Platform",
    description:
      "A full-stack AI productivity system with a smart Kanban board, GPT-4o-mini work planner, Pomodoro focus mode, streak tracking, and a real-time AI chat assistant that knows your tasks.",
    longDescription:
      "NeuroSpace is a production-grade productivity platform built with Next.js 15, TypeScript, Clerk authentication, and Supabase PostgreSQL. It goes beyond task management — the AI Work Planner generates mood-adaptive step-by-step work plans using GPT-4o-mini, the Productivity Intelligence engine analyses your real completion patterns to identify peak hours and bottlenecks, and the Pomodoro Focus Mode guides you through AI-generated steps with ambient sound and automatic break timers. Tasks auto-archive at midnight so you plan fresh every day, and every action supports full undo/redo that persists across page refreshes by syncing state back to Supabase. The Neuro AI chat assistant knows your exact tasks and stats and responds with streaming word-by-word output.",
    tags: [
      "Next.js 15",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "Clerk",
      "OpenAI GPT-4o-mini",
      "Framer Motion",
      "Recharts",
      "PostgreSQL",
    ],
    github: "https://github.com/naimakader/Neurospace",
    live: "https://neurospace-zr2n.vercel.app",
    featured: true,
    color: "#0d0f1a",
    accentColor: "#a855f7",
  },
  {
    slug: "phantom",
    title: "Phantom",
    subtitle: "Accessibility Transformer — Chrome Extension",
    description:
      "A Chrome Extension that scans any website for WCAG 2.2 accessibility violations, highlights broken elements live on the page with colored borders, generates AI-powered code fixes, simulates disability modes, and exports professional PDF audit reports.",
    longDescription:
      "Phantom is a production-grade Chrome Extension built with React 18, TypeScript, and Manifest V3. It uses the axe-core WebAssembly engine to run 57 WCAG 2.2 accessibility checks against any live website in under 3 seconds — finding violations that affect 1.3 billion people with disabilities. The Live Element Highlighter injects colored CSS borders directly onto broken DOM elements with hover tooltips, making invisible problems instantly visible. The AI Fix Engine extracts the real broken HTML from the page using CSS selectors and chrome.scripting, then generates corrected code with a before/after diff and one-click copy. Disability Simulation Modes apply live CSS filters to simulate colorblindness, low vision, and dyslexia — no page reload required. Every scan is saved automatically to chrome.storage with score delta tracking so you can see whether a site is improving over time. The PDF Export generates a branded multi-page audit report with a dark cover page, score ring, severity badges, and full violation breakdown — the kind accessibility consultants charge clients for.",
    tags: [
      "React 18",
      "TypeScript",
      "Chrome Extension",
      "Manifest V3",
      "axe-core",
      "WCAG 2.2",
      "jsPDF",
      "chrome.scripting API",
      "Vite",
    ],
    github: "https://github.com/naimakader/phantom",
    live: "/phantom-demo.gif",
    featured: true,
    color: "#0a0a0f",
    accentColor: "#7c6af7",
  },
];

export const stats = [
  { value: "3", label: "live projects" },
  { value: "7+", label: "tech stack" },
  { value: "AI", label: "powered apps" },
];
