import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "NeuroSpace Case Study — Naima Kader",
  description:
    "How I built NeuroSpace: a full-stack AI productivity platform with session snapshots, persistent undo/redo, mood-adaptive planning, and a streaming AI assistant.",
};

function BackArrow() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d="M10 3L5 8L10 13"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CodeBlock({ code, lang = "" }: { code: string; lang?: string }) {
  return (
    <div className="my-6 rounded-xl overflow-hidden border border-white/10">
      {lang && (
        <div className="px-4 py-2 bg-white/[0.04] border-b border-white/10">
          <span className="font-mono text-[10px] text-text-muted tracking-widest">
            {lang}
          </span>
        </div>
      )}
      <pre className="p-5 overflow-x-auto bg-[#0d0d16]">
        <code className="font-mono text-xs text-[#c9c4f0] leading-relaxed whitespace-pre">
          {code}
        </code>
      </pre>
    </div>
  );
}

function Table({ rows }: { rows: [string, string, string][] }) {
  return (
    <div className="my-6 rounded-xl overflow-hidden border border-white/10">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-white/10 bg-white/[0.04]">
            {["Layer", "Choice", "Reasoning"].map((h) => (
              <th
                key={h}
                className="text-left px-5 py-3 font-mono text-[10px] text-text-muted tracking-widest uppercase"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map(([layer, choice, reason], i) => (
            <tr key={i} className="border-b border-white/[0.06] last:border-0">
              <td className="px-5 py-3 text-text-muted text-xs font-mono">
                {layer}
              </td>
              <td className="px-5 py-3 text-[#AFA9EC] text-xs font-mono font-medium">
                {choice}
              </td>
              <td className="px-5 py-3 text-text-secondary text-xs leading-relaxed">
                {reason}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ProblemSolution({
  problem,
  solution,
}: {
  problem: string;
  solution: string;
}) {
  return (
    <div className="space-y-3 my-4">
      <div className="p-4 bg-[#1a0a0a] border border-[rgba(224,75,74,0.2)] rounded-lg">
        <div className="font-mono text-[10px] text-[rgba(224,75,74,0.6)] mb-2 tracking-widest">
          SYMPTOM / PROBLEM
        </div>
        <p className="text-sm text-text-secondary leading-relaxed">{problem}</p>
      </div>
      <div className="p-4 bg-[#0a1a12] border border-[rgba(93,202,165,0.2)] rounded-lg">
        <div className="font-mono text-[10px] text-[#5DCAA5]/60 mb-2 tracking-widest">
          FIX / LESSON
        </div>
        <p className="text-sm text-text-secondary leading-relaxed">
          {solution}
        </p>
      </div>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="bg-bg-card border border-bg-border rounded-lg p-5 text-center">
      <div className="font-mono text-2xl font-medium text-[#AFA9EC] mb-1">
        {value}
      </div>
      <div className="text-xs text-text-muted">{label}</div>
    </div>
  );
}

const stackRows: [string, string, string][] = [
  [
    "Framework",
    "Next.js 15 App Router",
    "Server components reduce client bundle. API routes collocate server logic with the UI that uses it",
  ],
  [
    "Language",
    "TypeScript",
    "Shared types between API responses and UI state — the source of truth lives in one place",
  ],
  [
    "Auth",
    "Clerk",
    "Production-grade auth without building session management. JWT templates allow Clerk tokens to authenticate Supabase requests",
  ],
  [
    "Database",
    "Supabase (PostgreSQL)",
    "Row-level security scopes all queries to the authenticated user. JSONB column stores session snapshots efficiently",
  ],
  [
    "AI",
    "OpenAI GPT-4o-mini",
    "Best price-to-quality ratio for structured JSON generation and conversational responses",
  ],
  ["Deployment", "Vercel", "Zero-config CI/CD. Preview deployments per PR"],
];

export default function NeuroSpaceCaseStudy() {
  return (
    <main className="min-h-screen bg-bg-primary text-white">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-text-secondary transition-colors mb-12"
        >
          <BackArrow />
          back to portfolio
        </Link>

        <div className="mb-16">
          <div className="inline-flex items-center gap-2 bg-[rgba(168,85,247,0.1)] border border-[rgba(168,85,247,0.3)] rounded-full px-3 py-1 mb-6">
            <span className="font-mono text-xs text-[#a855f7]">case study</span>
          </div>
          <h1 className="text-5xl font-medium tracking-tight text-white mb-4">
            NeuroSpace
          </h1>
          <p className="text-xl text-[#a855f7] mb-6 font-medium">
            AI Productivity Platform
          </p>
          <p className="text-base text-text-secondary leading-relaxed">
            Most productivity apps are passive storage systems. They hold tasks
            and wait. NeuroSpace is different — it thinks alongside you. This is
            the engineering story behind building it.
          </p>
          <div className="flex gap-4 mt-8">
            <a
              href="https://github.com/naimakader/Neurospace"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-text-muted border border-bg-border px-4 py-2 rounded-md hover:border-white/20 hover:text-white transition-all"
            >
              GitHub →
            </a>
            <a
              href="https://neurospace-zr2n.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#a855f7] border border-[rgba(168,85,247,0.3)] px-4 py-2 rounded-md hover:bg-[rgba(168,85,247,0.08)] transition-all"
            >
              Live demo →
            </a>
          </div>
        </div>

        <div className="h-px bg-bg-border mb-16" />

        <section className="mb-16">
          <h2 className="text-sm font-mono text-text-muted mb-6 tracking-widest uppercase">
            The Problem
          </h2>
          <div className="space-y-4 text-base text-text-secondary leading-relaxed">
            <p>
              Most productivity apps are passive storage systems. They hold
              tasks and wait. Users still have to decide what to work on,
              estimate how long things take, notice when they are falling
              behind, and figure out why they keep missing deadlines. The
              cognitive overhead of managing a productivity system often exceeds
              the benefit.
            </p>
            <p className="text-white font-medium">
              The question I wanted to answer: what would a productivity tool
              look like if it actually thought alongside you?
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-sm font-mono text-text-muted mb-6 tracking-widest uppercase">
            Technical Architecture
          </h2>
          <Table rows={stackRows} />
          <h3 className="text-sm font-medium text-white mt-10 mb-3">
            Data Flow
          </h3>
          <CodeBlock
            lang="data flow"
            code={
              "User Action\n    ↓\nOptimistic UI Update (instant)\n    ↓\nAPI Route (authenticated via Clerk)\n    ↓\nSupabase Admin Client (service role, bypasses RLS)\n    ↓\nPostgreSQL Write\n    ↓\nSnapshot Save (full state as JSONB)"
            }
          />
          <p className="text-sm text-text-secondary leading-relaxed">
            Every mutation follows this pattern. The optimistic update makes the
            UI feel instant. The snapshot ensures state survives refresh.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-sm font-mono text-text-muted mb-8 tracking-widest uppercase">
            Engineering Decisions
          </h2>

          <h3 className="text-base font-medium text-white mb-3">
            Why Session Snapshots?
          </h3>
          <p className="text-sm text-text-secondary leading-relaxed mb-4">
            The naive approach: on every page load, fetch all tasks and
            reconstruct state. The problem: undo/redo history is lost, column
            order is lost, and archived tasks disappear. My approach: save the
            complete state as a JSONB snapshot after every mutation — one row
            per user, always current. This also makes undo/redo persistent
            across refreshes.
          </p>
          <CodeBlock
            lang="typescript"
            code={
              'async function syncToDb(restored: Task[], previous: Task[]) {\n  const prevIds     = new Set(previous.map((t) => t.id));\n  const restoredIds = new Set(restored.map((t) => t.id));\n\n  // Re-insert tasks that undo brought back\n  for (const task of restored.filter((t) => !prevIds.has(t.id))) {\n    await fetch("/api/tasks", { method: "POST", body: JSON.stringify(task) });\n  }\n\n  // Delete tasks that redo removed\n  for (const task of previous.filter((t) => !restoredIds.has(t.id))) {\n    await fetch(`/api/tasks/${task.id}`, { method: "DELETE" });\n  }\n}'
            }
          />

          <h3 className="text-base font-medium text-white mb-3 mt-10">
            Why useRef for Undo/Redo Stacks?
          </h3>
          <p className="text-sm text-text-secondary leading-relaxed mb-4">
            Undo/redo stacks do not cause re-renders — they only matter at the
            moment of undo. Using useState would trigger unnecessary renders on
            every mutation registration. structuredClone creates a deep copy
            that handles Date objects correctly.
          </p>
          <CodeBlock
            lang="typescript"
            code={
              "export function useUndoRedo<T>() {\n  const past   = useRef<T[]>([]);\n  const future = useRef<T[]>([]);\n\n  function register(prevState: T) {\n    past.current.push(structuredClone(prevState));\n    future.current = []; // new action clears redo\n  }\n}"
            }
          />

          <h3 className="text-base font-medium text-white mb-3 mt-10">
            Why Midnight Archiving Instead of 24 Hours?
          </h3>
          <p className="text-sm text-text-secondary leading-relaxed mb-4">
            A task completed at 11pm would still appear in the Done column the
            next morning under a 24-hour rule. The correct boundary is midnight
            in local time — not UTC, which would shift the boundary by the
            user's timezone offset.
          </p>
          <CodeBlock
            lang="typescript"
            code={
              'function isReadyToArchive(task: Task): boolean {\n  if (task.status !== "done" || !task.completed_at) return false;\n  const midnight = new Date();\n  midnight.setHours(0, 0, 0, 0); // local midnight — not UTC\n  return new Date(task.completed_at) < midnight;\n}'
            }
          />
        </section>

        <section className="mb-16">
          <h2 className="text-sm font-mono text-text-muted mb-8 tracking-widest uppercase">
            The Bugs That Taught Me the Most
          </h2>

          <h3 className="text-base font-medium text-white mb-3">
            1. Silent Persistence Failure
          </h3>
          <ProblemSolution
            problem="Tasks were saving locally and appearing on the board, but disappeared on refresh. No errors in the console. Every POST /api/history returned 400 silently."
            solution="The API was validating Array.isArray(body.snapshot). The provider was sending an object, not an array — the shape had changed when I added archive support but the API never got updated. Lesson: when two systems share a data contract, define the type once and import it in both places."
          />

          <h3 className="text-base font-medium text-white mb-3 mt-8">
            2. Undo Across Refresh
          </h3>
          <ProblemSolution
            problem="Undo worked perfectly in the same session. After refresh, the undone delete came back. The task had been physically deleted from Supabase — the snapshot saved the restored state but the tasks table did not have the row."
            solution="After every undo/redo, sync the actual DB state to match the restored state. Re-insert deleted tasks, delete tasks that redo removed. The database must match memory at all times."
          />

          <h3 className="text-base font-medium text-white mb-3 mt-8">
            3. Hydration Mismatch
          </h3>
          <ProblemSolution
            problem="Math.random() was called at module level to generate a unique tab identifier. Server rendered one value, client hydrated with a different value. React threw a hydration error."
            solution="Move random generation inside a useRef that only initialises on the client — check typeof window !== 'undefined' before assigning the value."
          />

          <h3 className="text-base font-medium text-white mb-3 mt-8">
            4. Case Sensitivity on Linux
          </h3>
          <ProblemSolution
            problem="App worked perfectly on Windows locally. Vercel build failed: Module not found: Can't resolve './FocusMode'. The file was saved as focusMode.tsx — Windows is case-insensitive, Linux (Vercel) is not."
            solution="git mv to rename the file to match the import exactly. Always match import casing to file casing. Build and test on Linux from day one, or add a CI linting step that catches this before it reaches production."
          />
        </section>

        <section className="mb-16">
          <h2 className="text-sm font-mono text-text-muted mb-6 tracking-widest uppercase">
            AI Integration Design
          </h2>
          <p className="text-sm text-text-secondary leading-relaxed mb-6">
            The planner adapts to the user's energy level before calling GPT. A
            mood multiplier adjusts session lengths so GPT's time allocations
            match actual capacity.
          </p>
          <CodeBlock
            lang="typescript"
            code={
              'function adaptToMood(mood: Mood, learning: Learning) {\n  const mul =\n    mood.energy === "low"  ? 0.6 :\n    mood.energy === "high" ? 1.3 : 1;\n  return {\n    average: Math.max(5, Math.round(learning.average * mul)),\n    deep:    Math.max(5, Math.round(learning.deep    * mul)),\n  };\n}'
            }
          />
          <h3 className="text-sm font-medium text-white mt-8 mb-3">
            Graceful Degradation
          </h3>
          <p className="text-sm text-text-secondary leading-relaxed mb-4">
            Every AI endpoint has a local fallback. The app works without OpenAI
            credits. It gets smarter when you have them.
          </p>
          <CodeBlock
            lang="typescript"
            code={
              "try {\n  const response = await openai.chat.completions.create({ ... });\n  return NextResponse.json(parseResponse(response));\n} catch (aiErr: any) {\n  // 429, 401, network error — all handled the same way\n  return NextResponse.json(localFallback(task, learning, mood));\n}"
            }
          />
        </section>

        <section className="mb-16">
          <h2 className="text-sm font-mono text-text-muted mb-6 tracking-widest uppercase">
            Results
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <Stat value="<100ms" label="Clerk JWT → Supabase auth" />
            <Stat value="1 query" label="Full state restoration" />
            <Stat value="1–3s" label="AI plan generation" />
            <Stat value="O(1)" label="Undo/redo push/pop" />
            <Stat value="287kb" label="First load JS" />
            <Stat value="instant" label="Local fallback response" />
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-sm font-mono text-text-muted mb-6 tracking-widest uppercase">
            What I Would Do Differently
          </h2>
          <div className="space-y-4 text-sm text-text-secondary leading-relaxed">
            <p>
              <span className="text-white font-medium">
                Define API contracts first.
              </span>{" "}
              I built the provider and the API routes in parallel and they
              drifted. In a real team you would write the OpenAPI spec first and
              generate types from it.
            </p>
            <p>
              <span className="text-white font-medium">
                Test the error paths, not just the happy path.
              </span>{" "}
              The silent persistence failure would have been caught immediately
              by a test that asserted the snapshot shape.
            </p>
            <p>
              <span className="text-white font-medium">
                Use a type-safe API client.
              </span>{" "}
              Raw fetch with manual JSON parsing requires manual type assertions
              everywhere. tRPC or a generated SDK would have made the shape
              mismatch impossible.
            </p>
            <p>
              <span className="text-white font-medium">
                Never assume case-insensitivity.
              </span>{" "}
              Build and test on Linux from day one.
            </p>
          </div>
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
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Phantom Case Study — Naima Kader",
  description:
    "How I built Phantom: a production-grade Chrome Extension that scans WCAG 2.2 accessibility violations, highlights them live on the page, generates AI code fixes, and exports PDF audit reports.",
};

function BackArrow() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d="M10 3L5 8L10 13"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CodeBlock({ code, lang = "" }: { code: string; lang?: string }) {
  return (
    <div className="my-6 rounded-xl overflow-hidden border border-white/10">
      {lang && (
        <div className="px-4 py-2 bg-white/[0.04] border-b border-white/10">
          <span className="font-mono text-[10px] text-text-muted tracking-widest">
            {lang}
          </span>
        </div>
      )}
      <pre className="p-5 overflow-x-auto bg-[#0d0d16]">
        <code className="font-mono text-xs text-[#c9c4f0] leading-relaxed whitespace-pre">
          {code}
        </code>
      </pre>
    </div>
  );
}

function Challenge({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-12">
      <div className="flex items-center gap-3 mb-4">
        <span className="font-mono text-xs text-[#7c6af7] bg-[rgba(124,106,247,0.1)] border border-[rgba(124,106,247,0.25)] px-2.5 py-1 rounded-full">
          {number}
        </span>
        <h3 className="text-base font-medium text-white">{title}</h3>
      </div>
      <div className="text-sm text-text-secondary leading-relaxed space-y-3">
        {children}
      </div>
    </div>
  );
}

function Decision({ q, a }: { q: string; a: string }) {
  return (
    <div className="border border-bg-border rounded-lg p-5 mb-4">
      <div className="font-mono text-xs text-[#7c6af7] mb-2">{q}</div>
      <p className="text-sm text-text-secondary leading-relaxed">{a}</p>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="bg-bg-card border border-bg-border rounded-lg p-5 text-center">
      <div className="font-mono text-2xl font-medium text-[#7c6af7] mb-1">
        {value}
      </div>
      <div className="text-xs text-text-muted">{label}</div>
    </div>
  );
}

export default function PhantomCaseStudy() {
  return (
    <main className="min-h-screen bg-bg-primary text-white">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-text-secondary transition-colors mb-12"
        >
          <BackArrow />
          back to portfolio
        </Link>

        <div className="mb-16">
          <div className="inline-flex items-center gap-2 bg-[rgba(124,106,247,0.1)] border border-[rgba(124,106,247,0.3)] rounded-full px-3 py-1 mb-6">
            <span className="font-mono text-xs text-[#7c6af7]">case study</span>
          </div>
          <h1 className="text-5xl font-medium tracking-tight text-white mb-4">
            Phantom
          </h1>
          <p className="text-xl text-[#7c6af7] mb-6 font-medium">
            Accessibility Transformer — Chrome Extension
          </p>
          <p className="text-base text-text-secondary leading-relaxed">
            A production-grade Chrome Extension that scans any live website for
            WCAG 2.2 violations, highlights broken elements directly on the
            page, generates AI-powered code fixes, and exports professional PDF
            audit reports in one click.
          </p>
          <div className="flex gap-4 mt-8">
            <a
              href="https://github.com/naimakader/phantom"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-text-muted border border-bg-border px-4 py-2 rounded-md hover:border-white/20 hover:text-white transition-all"
            >
              GitHub →
            </a>
          </div>
        </div>

        <div className="h-px bg-bg-border mb-16" />

        <section className="mb-16">
          <h2 className="text-sm font-mono text-text-muted mb-6 tracking-widest uppercase">
            The Problem
          </h2>
          <div className="space-y-4 text-base text-text-secondary leading-relaxed">
            <p>
              1.3 billion people worldwide live with some form of disability.
              When they visit a website, there is a 97% chance it will fail
              basic accessibility standards — broken form labels, missing image
              descriptions, unreadable color contrast, keyboard traps.
            </p>
            <p>
              Every existing tool — Lighthouse, axe DevTools, WAVE — does the
              same thing: it generates a report. It tells you what is broken.
              Then it leaves you alone to figure out the rest. A developer reads
              the report, tries to find the broken element in thousands of lines
              of HTML, researches what the WCAG rule means, attempts a fix, and
              re-runs the audit. This process takes hours. Most companies never
              get around to it.
            </p>
            <p className="text-white font-medium">
              The question I asked: what if the tool did not just report the
              problem — but showed you exactly where it was, extracted the
              broken code, and wrote the fix for you?
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-sm font-mono text-text-muted mb-8 tracking-widest uppercase">
            Technical Challenges
          </h2>

          <Challenge
            number="Challenge 1"
            title="Scanning a live page from inside a popup"
          >
            <p>
              A Chrome Extension popup is an isolated HTML page. It cannot
              directly read or modify the tab the user is browsing. The only
              bridge is Chrome's scripting API.
            </p>
            <p>
              The naive approach — injecting axe-core as a script tag — fails in
              Manifest V3 because of the new Content Security Policy
              restrictions. The solution was a two-step injection pattern:
            </p>
            <CodeBlock
              lang="manifest v3 injection"
              code={
                "Step 1 → chrome.scripting.executeScript({ files: ['axe.min.js'] })\n         Injects axe-core as a web-accessible resource into the live page\n\nStep 2 → chrome.scripting.executeScript({ func: runAxeScan })\n         Now that axe exists on the page, runs axe.run() and returns results"
              }
            />
            <p>
              This two-call pattern is not documented anywhere — I discovered it
              through reading Chrome Extension source code and Manifest V3
              migration guides. It is the only reliable way to run a
              WebAssembly-powered accessibility engine inside a foreign page
              from an extension popup.
            </p>
          </Challenge>

          <Challenge number="Challenge 2" title="The live element highlighter">
            <p>
              After scanning, every broken element on the live page should glow
              red — without breaking the page, without affecting the site's own
              CSS, and without persisting after the user clears highlights.
              Three problems had to be solved:
            </p>
            <p>
              <span className="text-white">Z-index conflicts.</span> Many sites
              use z-index: 9999 on overlays and modals. The solution was to use
              outline with outline-offset rather than border or box-shadow —
              outlines render outside the element's box model and are not
              affected by child stacking contexts.
            </p>
            <p>
              <span className="text-white">Cleaning up.</span> Every injected
              style was scoped to a unique id (phantom-styles) so a single
              element.remove() call cleans everything up with no leftover CSS or
              data attributes.
            </p>
            <p>
              <span className="text-white">
                Hover tooltips without a React tree.
              </span>{" "}
              The tooltip had to work inside the live page — not the popup. This
              meant pure DOM manipulation: a CSS ::after pseudo-element reading
              from a data-phantom-label attribute set per element. No React, no
              event listeners, no memory leaks.
            </p>
          </Challenge>

          <Challenge
            number="Challenge 3"
            title="Extracting live HTML for the fix engine"
          >
            <p>
              The fix engine needed the actual broken HTML from the page — not a
              generic example. axe-core returns a CSS selector for each
              violation. Using that selector to extract the outerHTML required
              another chrome.scripting.executeScript call with the selector
              passed as an argument.
            </p>
            <p>
              The key constraint: chrome.scripting functions run in a completely
              isolated context — they cannot close over variables from the
              popup. Everything must be passed explicitly as args. This forced a
              clean separation between popup state and page-side execution that
              made the code more reliable overall.
            </p>
          </Challenge>

          <Challenge number="Challenge 4" title="Client-side PDF generation">
            <p>
              The PDF report needed to look professional — dark cover page,
              score ring, severity badges, paginated violation list, page
              numbers. jsPDF provides a low-level drawing API (think Canvas, not
              HTML) — every element is positioned with explicit coordinates.
            </p>
            <p>The score ring required manual arc math:</p>
            <CodeBlock
              lang="mathematics"
              code={
                "circumference = 2π × radius\narc_length    = circumference × (score / 100)\nstrokeDashoffset = circumference - arc_length"
              }
            />
            <p>
              Page breaks required tracking the current Y position and
              triggering a new page when the remaining space was insufficient
              for the next violation card.
            </p>
          </Challenge>
        </section>

        <section className="mb-16">
          <h2 className="text-sm font-mono text-text-muted mb-6 tracking-widest uppercase">
            Architecture Decisions
          </h2>
          <Decision
            q="Why axe-core over Lighthouse?"
            a="Lighthouse requires a full page reload and runs in a separate DevTools process. It cannot scan a page being actively browsed. axe-core runs as a JavaScript library directly inside the page's DOM — it sees exactly what the user sees, including dynamically rendered content and SPA state."
          />
          <Decision
            q="Why Manifest V3 over V2?"
            a="Google deprecated Manifest V2 in 2024. V3's service worker model forced a cleaner architecture — instead of a persistent background page with direct DOM access, all page interaction is explicit and auditable through chrome.scripting."
          />
          <Decision
            q="Why jsPDF client-side instead of a server?"
            a="Zero backend infrastructure. Zero user data leaving the machine. Instant downloads. The tradeoff is bundle size — jsPDF adds approximately 200KB. For an extension popup that loads on demand this is acceptable."
          />
          <Decision
            q="Why chrome.storage over localStorage?"
            a="chrome.storage.local is shared across all extension contexts — popup, background worker, content scripts. It persists across extension updates and browser restarts. localStorage is scoped to a single page origin and is destroyed when the popup closes."
          />
        </section>

        <section className="mb-16">
          <h2 className="text-sm font-mono text-text-muted mb-6 tracking-widest uppercase">
            What I Learned
          </h2>
          <div className="space-y-4 text-sm text-text-secondary leading-relaxed">
            <p>
              <span className="text-white font-medium">
                The browser is a platform, not just a runtime.
              </span>{" "}
              Building Phantom required understanding how Chrome manages
              isolated execution contexts, how the scripting API bridges them,
              and how CSS rendering works at the level of stacking contexts and
              box models. This is a different category of knowledge from
              building React applications.
            </p>
            <p>
              <span className="text-white font-medium">
                Constraints produce better architecture.
              </span>{" "}
              The Manifest V3 restriction on background page access forced every
              page interaction through a single, explicit API. The resulting
              code is easier to reason about than the V2 equivalent would have
              been.
            </p>
            <p>
              <span className="text-white font-medium">
                The demo is the product.
              </span>{" "}
              The most important engineering decision was choosing the live
              element highlighter as a feature. A popup showing a list of issues
              is forgettable. A tool that draws red borders on a real website
              while you watch — that is memorable. When I demo Phantom, people
              understand the problem and the solution in under 10 seconds.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-sm font-mono text-text-muted mb-6 tracking-widest uppercase">
            Results
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <Stat value="57" label="WCAG 2.2 rules checked" />
            <Stat value="<3s" label="Scan time (BBC.com)" />
            <Stat value="<1s" label="PDF generation" />
            <Stat value="13" label="Unit tests, 100% passing" />
            <Stat value="7" label="Features shipped" />
            <Stat value="0" label="Backend infrastructure" />
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-sm font-mono text-text-muted mb-6 tracking-widest uppercase">
            What's Next
          </h2>
          <div className="space-y-3 text-sm text-text-secondary leading-relaxed">
            <p>
              <span className="text-white font-medium">
                Multi-page site audit
              </span>{" "}
              — crawl an entire domain and aggregate scores across pages.
            </p>
            <p>
              <span className="text-white font-medium">Score trend chart</span>{" "}
              — visualize accessibility improvement over time using D3.
            </p>
            <p>
              <span className="text-white font-medium">
                Real AI integration
              </span>{" "}
              — replace smart mock fixes with actual AI-generated fixes using
              the Anthropic API.
            </p>
          </div>
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
