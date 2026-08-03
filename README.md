# Naima Kader — Portfolio

Built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## Getting started

```powershell
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Before you deploy

Open `src/lib/data.ts` and update:

| Field | What to change |
|-------|---------------|
| `email` | Your real email address |
| `github` | Your GitHub profile URL |
| `linkedin` | Your LinkedIn URL |
| `resumeUrl` | Put your resume PDF in `/public/naima-kader-resume.pdf` |
| `projects[].live` | Real Vercel URLs for each project |
| `projects[].github` | Real GitHub repo links |

## Deploy to Vercel

```powershell
# Option 1: Vercel CLI
npm install -g vercel
vercel

# Option 2: Push to GitHub, then import at vercel.com
git init
git add .
git commit -m "initial portfolio"
git remote add origin https://github.com/naimakader/portfolio
git push -u origin main
```

Then go to vercel.com → New Project → import your repo → deploy.

## Custom domain

After deploying on Vercel:
1. Go to Project Settings → Domains
2. Add `naimakader.dev`
3. Follow DNS instructions (CNAME record at your domain registrar)

## File structure

```
src/
  app/
    page.tsx              ← home page (Hero + Projects + About + Contact)
    layout.tsx            ← root layout, fonts, metadata
    globals.css           ← base styles
    projects/
      lexai/page.tsx      ← LexAI case study (update with your content)
  components/
    layout/
      Navbar.tsx          ← sticky nav with smooth scroll
      Footer.tsx
    sections/
      Hero.tsx            ← headline, stack tags, CTA buttons
      Projects.tsx        ← project cards with hover effects
      About.tsx           ← bio, location, skills grid
      Contact.tsx         ← email + socials CTA
    ui/
      FadeIn.tsx          ← scroll-triggered fade animation
      SectionLabel.tsx    ← "// 02 — SELECTED WORK" headers
  lib/
    data.ts               ← ALL your content lives here
```

## Customising

All content (your name, projects, stack, bio) is in `src/lib/data.ts`.
Colors are in `tailwind.config.ts` under `theme.extend.colors`.
