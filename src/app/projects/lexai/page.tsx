import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "LexAI Case Study — Naima Kader",
  description:
    "How I built LexAI: an AI-powered courtroom simulator with real-time multiplayer, contradiction detection, and session replay.",
};

function BackArrow() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

const techStack = [
  { name: "Next.js 15", reason: "App Router, server components, and Vercel OG for dynamic social cards" },
  { name: "TypeScript", reason: "Strict typing across all AI response schemas and Supabase tables" },
  { name: "OpenAI GPT-4o mini", reason: "Fast, cheap inference for real-time AI personas — 10x cheaper than GPT-4o with comparable quality for this use case" },
  { name: "Supabase", reason: "Postgres database + Realtime for multiplayer sync + Row Level Security for session isolation" },
  { name: "Clerk", reason: "Auth with minimal setup — protected routes and user sessions out of the box" },
  { name: "Framer Motion", reason: "Smooth courtroom transitions, score animations, and loading states" },
  { name: "Tailwind CSS", reason: "Fast, consistent dark UI styling with utility classes" },
];

const challenges = [
  {
    title: "Real-time multiplayer state sync",
    problem: "Multiple users in the same courtroom session needed to see the same evidence, witness answers, and scores without reloading.",
    solution: "Used Supabase Realtime's broadcast channel for live state updates. Each session has an isolated channel keyed by session ID. State mutations are broadcast to all connected clients and merged client-side using React's useReducer.",
  },
  {
    title: "Contradiction detection in AI responses",
    problem: "GPT-4o mini needed to detect when a witness contradicted an earlier statement — but the model has no memory between requests.",
    solution: "Maintained a rolling transcript of all witness statements in the session. Each new AI prompt includes the full transcript and explicit instructions to check for contradictions. The model returns a structured JSON response with a contradiction flag and explanation.",
  },
  {
    title: "Dynamic OG images for session sharing",
    problem: "Shareable session cards needed unique images with the user's score, case name, and outcome — generated at request time.",
    solution: "Used Next.js Vercel OG (ImageResponse) to generate dynamic PNG images server-side. Each card is generated from a React component rendered to an image, with the session data passed as query parameters.",
  },
];

export default function LexAICaseStudy() {
  return (
    <main className="min-h-screen bg-bg-primary text-white">
      <div className="max-w-3xl mx-auto px-6 py-20">

        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-text-secondary transition-colors mb-12"
        >
          <BackArrow />
          back to portfolio
        </Link>

        {/* Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 bg-accent-teal-bg border border-accent-teal-border rounded-full px-3 py-1 mb-6">
            <span className="font-mono text-xs text-[#5DCAA5]">case study</span>
          </div>
          <h1 className="text-5xl font-medium tracking-tight text-white mb-4">
            LexAI
          </h1>
          <p className="text-xl text-[#AFA9EC] mb-6 font-medium">
            AI Courtroom Simulator
          </p>
          <p className="text-base text-text-secondary leading-relaxed">
            A full-stack web application where law students and curious users
            argue real cases against AI-powered courtroom personas — with
            real-time multiplayer, contradiction detection, and scored session
            replay.
          </p>

          <div className="flex gap-4 mt-8">
            <a
              href="https://github.com/naimakader/Lexai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-text-muted border border-bg-border px-4 py-2 rounded-md hover:border-white/20 hover:text-white transition-all"
            >
              GitHub →
            </a>
            <a
              href="https://lexai.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#AFA9EC] border border-accent-purple-border px-4 py-2 rounded-md hover:bg-accent-purple-bg transition-all"
            >
              Live demo →
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-bg-border mb-16" />

        {/* What I built */}
        <section className="mb-16">
          <h2 className="text-sm font-mono text-text-muted mb-6 tracking-widest uppercase">What I built</h2>
          <div className="space-y-4 text-base text-text-secondary leading-relaxed">
            <p>
              LexAI is a courtroom simulator where users take the role of an
              attorney and argue cases against AI-powered judges, witnesses, and
              opposing counsel. I built it as both a learning tool for law
              students and a showcase of what&apos;s possible when you combine
              real-time infrastructure with modern AI.
            </p>
            <p>
              The core experience: you select a case, the AI assigns roles,
              and you conduct cross-examination. The AI witness answers from
              a character brief — and will contradict earlier statements if
              pressed hard enough. At the end, you get a score with replay.
            </p>
          </div>
        </section>

        {/* Features */}
        <section className="mb-16">
          <h2 className="text-sm font-mono text-text-muted mb-6 tracking-widest uppercase">Features shipped</h2>
          <div className="grid gap-3">
            {[
              "Core courtroom simulator with multiple AI personas (judge, witness, opposing counsel)",
              "Witness cross-examination with contradiction detection",
              "Professor dashboard with student analytics and session tracking",
              "Real-time multiplayer via Supabase Realtime broadcast channels",
              "Session replay with score visualization and timeline",
              "Shareable session cards with dynamic OG images (Vercel ImageResponse)",
              "Loading skeletons and error boundaries for production UX",
              "Authentication and protected routes via Clerk",
            ].map((feature) => (
              <div
                key={feature}
                className="flex gap-3 p-4 bg-bg-card border border-bg-border rounded-lg"
              >
                <span className="text-[#5DCAA5] mt-0.5 text-sm flex-shrink-0">✓</span>
                <span className="text-sm text-text-secondary">{feature}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Tech stack decisions */}
        <section className="mb-16">
          <h2 className="text-sm font-mono text-text-muted mb-6 tracking-widest uppercase">Tech decisions</h2>
          <div className="space-y-4">
            {techStack.map((item) => (
              <div key={item.name} className="border border-bg-border rounded-lg p-5">
                <div className="font-mono text-sm text-[#AFA9EC] mb-2">{item.name}</div>
                <p className="text-sm text-text-secondary leading-relaxed">{item.reason}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Challenges */}
        <section className="mb-16">
          <h2 className="text-sm font-mono text-text-muted mb-6 tracking-widest uppercase">Hardest problems</h2>
          <div className="space-y-8">
            {challenges.map((c) => (
              <div key={c.title}>
                <h3 className="text-base font-medium text-white mb-3">{c.title}</h3>
                <div className="space-y-3">
                  <div className="p-4 bg-[#1a0a0a] border border-[rgba(224,75,74,0.2)] rounded-lg">
                    <div className="font-mono text-[10px] text-[rgba(224,75,74,0.6)] mb-2 tracking-widest">PROBLEM</div>
                    <p className="text-sm text-text-secondary leading-relaxed">{c.problem}</p>
                  </div>
                  <div className="p-4 bg-[#0a1a12] border border-[rgba(93,202,165,0.2)] rounded-lg">
                    <div className="font-mono text-[10px] text-[#5DCAA5]/60 mb-2 tracking-widest">SOLUTION</div>
                    <p className="text-sm text-text-secondary leading-relaxed">{c.solution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* What I'd improve */}
        <section className="mb-16">
          <h2 className="text-sm font-mono text-text-muted mb-6 tracking-widest uppercase">What I&apos;d improve</h2>
          <div className="space-y-3 text-sm text-text-secondary leading-relaxed">
            <p>
              <span className="text-white">Streaming AI responses.</span> Currently the AI persona&apos;s answer appears all at once. Using OpenAI&apos;s streaming API would make responses feel more like a real witness answering under pressure.
            </p>
            <p>
              <span className="text-white">Caching session transcripts.</span> Every new question re-sends the full conversation history. Redis or Supabase Edge Functions could cache this server-side and reduce token costs significantly.
            </p>
            <p>
              <span className="text-white">Accessibility.</span> The courtroom UI needs a proper keyboard navigation pass and ARIA roles for the live question/answer flow. I&apos;d add this before recommending it to screen reader users.
            </p>
          </div>
        </section>

        {/* What I learned */}
        <section className="mb-16">
          <h2 className="text-sm font-mono text-text-muted mb-6 tracking-widest uppercase">What I learned</h2>
          <p className="text-base text-text-secondary leading-relaxed">
            Building LexAI taught me that AI reliability is a UX problem as much as a technical one. You can&apos;t trust the model to always return valid JSON — you need to validate, retry, and degrade gracefully. It also showed me how much architecture matters: the decision to isolate each multiplayer session by ID made everything else easier. If I were starting over, I&apos;d spend twice as long on the data model before writing a single line of UI.
          </p>
        </section>

        <div className="h-px bg-bg-border mb-12" />

        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-text-secondary transition-colors"
        >
          <BackArrow />
          back to portfolio
        </Link>
      </div>
    </main>
  );
}
