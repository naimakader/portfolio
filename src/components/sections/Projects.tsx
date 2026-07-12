"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import SectionLabel from "@/components/ui/SectionLabel";
import FadeIn from "@/components/ui/FadeIn";
import type { Project } from "@/lib/data";

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
      <path d="M2.5 7H11.5M7.5 3L11.5 7L7.5 11" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
      <path d="M7 1H11V5M11 1L5 7M2 3H1V11H9V10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const isFeatured = project.featured;

  return (
    <FadeIn delay={index * 0.1}>
      <motion.article
        whileHover={{ y: -3 }}
        transition={{ duration: 0.2 }}
        className={`group relative rounded-xl border overflow-hidden ${
          isFeatured
            ? "border-accent-purple-border bg-accent-purple-bg"
            : "border-bg-border bg-bg-card/50 hover:border-white/15"
        } transition-colors`}
      >
        {isFeatured && (
          <div className="absolute top-4 right-4 z-10">
            <span className="font-mono text-[10px] text-accent-teal bg-accent-teal-bg border border-accent-teal-border px-2.5 py-1 rounded-full">
              flagship
            </span>
          </div>
        )}

        {/* Project preview area */}
        <div
          className="h-40 flex items-center justify-center relative overflow-hidden border-b border-bg-border"
          style={{ background: `${project.color}18` }}
        >
          {/* GIF preview (Phantom) or large background text */}
          {project.live?.endsWith(".gif") ? (
            <img
              src={project.live}
              alt={`${project.title} demo`}
              className="w-full h-full object-cover object-top"
            />
          ) : (
            <span
              className="font-mono text-6xl font-medium tracking-tighter select-none"
              style={{ color: `${project.accentColor}15` }}
            >
              {project.slug.toUpperCase()}
            </span>
          )}

          {/* Hover overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            {project.live && !project.live.endsWith(".gif") ? (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-white/80 bg-white/10 border border-white/15 px-3 py-1.5 rounded-md hover:bg-white/20 transition-colors"
              >
                <ExternalIcon />
                view live
              </a>
            ) : (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-white/80 bg-white/10 border border-white/15 px-3 py-1.5 rounded-md hover:bg-white/20 transition-colors"
              >
                <GitHubIcon />
                view code
              </a>
            )}
          </div>
        </div>

        <div className="p-6">
          <div className="mb-1">
            <span className="font-mono text-[10px] text-text-muted">
              {project.subtitle}
            </span>
          </div>
          <h3 className="text-lg font-medium text-white mb-3">
            {project.title}
          </h3>
          <p className="text-sm text-text-secondary leading-relaxed mb-5">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.tags.map((tag) => (
              <span key={tag} className="tech-tag">
                {tag}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex items-center gap-3">
            {project.live ? (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-accent-purple hover:text-white transition-colors"
              >
                <ExternalIcon />
                {project.tags.includes("Chrome Extension") ? "demo video" : "live demo"}
              </a>
            ) : project.tags.includes("Chrome Extension") ? (
              <span className="flex items-center gap-1.5 text-xs text-text-muted border border-bg-border px-2.5 py-1 rounded">
                Chrome Extension
              </span>
            ) : null}
            {project.live && <span className="text-bg-border">·</span>}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-text-muted hover:text-text-secondary transition-colors"
            >
              <GitHubIcon />
              github
            </a>
            {isFeatured && (
              <>
                <span className="text-bg-border">·</span>
                <Link
                  href={`/projects/${project.slug}`}
                  className="flex items-center gap-1 text-xs text-text-muted hover:text-text-secondary transition-colors"
                >
                  case study
                  <ArrowIcon />
                </Link>
              </>
            )}
          </div>
        </div>
      </motion.article>
    </FadeIn>
  );
}

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="work" className="py-28 max-w-5xl mx-auto px-6">
      <SectionLabel number="02" label="selected work" />

      {/* Featured project — full width */}
      {featured.map((project, i) => (
        <div key={project.slug} className="mb-8">
          <ProjectCard project={project} index={i} />
        </div>
      ))}

      {/* Other projects — 2 col grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {rest.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i + featured.length} />
        ))}
      </div>
    </section>
  );
}
