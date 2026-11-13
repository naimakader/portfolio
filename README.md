
# Naima Kader — Portfolio

**Frontend Developer · Next.js 15 · TypeScript · AI-Powered Apps**

[![Live](https://img.shields.io/badge/Live-naimakader.vercel.app-AFA9EC?style=flat-square&logo=vercel&logoColor=white)](https://naimakader.vercel.app)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-naima--kader-0A66C2?style=flat-square&logo=linkedin&logoColor=white)](https://linkedin.com/in/naima-kader-9971b3301)
[![Email](https://img.shields.io/badge/Email-naimakader976%40gmail.com-EA4335?style=flat-square&logo=gmail&logoColor=white)](mailto:naimakader976@gmail.com)

</div>

---

## Overview

Personal portfolio site showcasing three production-grade AI-powered projects. Built with Next.js 15 App Router, TypeScript, Tailwind CSS, and Framer Motion. Dark theme, scroll animations, and full case study pages for every project.

**Live:** [naimakader.vercel.app](https://naimakader.vercel.app)

---

## Projects

### [LexAI](https://lexai.vercel.app) — AI Courtroom Simulator
Full-stack legal training platform. Users argue landmark cases against three AI personas (judge, prosecutor, witness) powered by GPT-4o-mini. Features real-time multiplayer via Supabase Realtime, contradiction detection, session replay with score visualization, professor dashboard with class management, and dynamic OG images at the Vercel edge.

`Next.js 15` `TypeScript` `GPT-4o-mini` `Supabase Realtime` `Clerk` `Framer Motion` `Vercel OG` `PostgreSQL`

---

### [NeuroSpace](https://neurospace-zr2n.vercel.app) — AI Productivity Platform
Production-grade productivity platform that thinks alongside you. Mood-adaptive AI work planner, smart Kanban board, Pomodoro focus mode with AI-generated steps, Productivity Intelligence engine that surfaces peak focus hours, persistent undo/redo across page refreshes, automatic midnight archiving, and a streaming AI chat assistant with full task context.

`Next.js 15` `TypeScript` `GPT-4o-mini` `Supabase` `Clerk` `Recharts` `Framer Motion` `PostgreSQL`

---

### [Phantom](https://github.com/naimakader/phantom) — WCAG 2.2 Accessibility Chrome Extension
Chrome Extension that runs 57 WCAG 2.2 accessibility checks against any live website in under 3 seconds using axe-core. Live element highlighter injects colored borders onto broken DOM elements. AI fix engine extracts real broken HTML and generates corrected code with before/after diff. Disability simulation modes (colorblindness, low vision, dyslexia) via live CSS filter injection. PDF audit report generator with score rings and severity badges.

`React 18` `TypeScript` `Manifest V3` `axe-core` `WCAG 2.2` `jsPDF` `chrome.scripting API` `Vite`

---

## Tech Stack

| Category | Technologies |
|----------|-------------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animation | Framer Motion |
| Font | JetBrains Mono (Google Fonts) |
| Deployment | Vercel |

---

## Project Structure

```
src/
├── app/
│   ├── page.tsx                    # Home — Hero, Projects, About, Contact
│   ├── layout.tsx                  # Root layout, fonts, metadata, favicon
│   ├── globals.css                 # Base styles, scrollbar, selection color
│   └── projects/
│       ├── lexai/page.tsx          # LexAI case study
│       ├── neurospace/page.tsx     # NeuroSpace case study
│       └── phantom/page.tsx        # Phantom case study
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx              # Sticky nav, blur on scroll, mobile menu
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx                # Headline, badge, stack tags, stats
│   │   ├── Projects.tsx            # Project cards with hover effects + GIF preview
│   │   ├── About.tsx               # Bio, location, skills grid
│   │   └── Contact.tsx             # Email, LinkedIn, GitHub, resume download
│   └── ui/
│       ├── FadeIn.tsx              # Scroll-triggered fade animation
│       └── SectionLabel.tsx        # "// 02 — SELECTED WORK" section headers
├── lib/
│   └── data.ts                     # All content in one place — edit here
public/
├── favicon.svg                     # nk monogram, dark bg, purple text
├── phantom-demo.gif                # Phantom extension demo
└── Naima_Kader_Resume.pdf         # Resume — linked from contact section
```

---

## Running Locally

```bash
# Clone
git clone https://github.com/naimakader/portfolio.git
cd portfolio

# Install
npm install

# Dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Customizing

All content lives in **`src/lib/data.ts`** — one file controls everything:

```ts
export const siteConfig = {
  name: "Naima Kader",
  email: "naimakader976@gmail.com",
  github: "https://github.com/naimakader",
  linkedin: "https://linkedin.com/in/naima-kader-9971b3301",
  // ...
};

export const projects = [
  {
    title: "LexAI",
    live: "https://lexai.vercel.app",
    github: "https://github.com/naimakader/Lexai",
    // ...
  },
];
```

Colors are in `tailwind.config.ts` under `theme.extend.colors`.

---

## Deploying

```bash
# Push to GitHub
git add .
git commit -m "deploy"
git push

# Then import at vercel.com → New Project → select this repo → Deploy
```

No environment variables needed — this is a static portfolio.

---

## Design Decisions

**Dark theme** — matches the aesthetic of the projects (LexAI, NeuroSpace, Phantom are all dark apps). Feels more senior and intentional than generic white portfolios.

**No skill bars or percentages** — "90% React" means nothing. Plain tags are honest. Projects prove the skill level.

**Projects section as experience** — no work history, so projects *are* the experience. Every bullet uses action verbs and describes what was built and how, not what the project is.

**Case studies** — each project has a dedicated page with architecture decisions, real bugs, and code. This is what separates a portfolio from a project gallery.

**Single data file** — all content in `src/lib/data.ts`. Update once, changes everywhere.

---

## License

MIT — feel free to use this as a template. If you do, a credit link back would be appreciated but is not required.

---

<div align="center">
Built by <a href="https://naimakader.vercel.app">Naima Kader</a> · <a href="mailto:naimakader976@gmail.com">naimakader976@gmail.com</a>
</div>
