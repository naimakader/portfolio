"use client";

import { motion } from "framer-motion";
import { siteConfig, stack, stats } from "@/lib/data";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98], delay },
});

export default function Hero() {
  const handleScrollToWork = () => {
    document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Radial glow — top center */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center top, rgba(127,119,221,0.12) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-5xl mx-auto px-6 py-24 w-full">
        <div className="max-w-3xl">

          {/* Available badge */}
          <motion.div {...fadeUp(0)} className="mb-8">
            <div className="inline-flex items-center gap-2 bg-accent-teal-bg border border-accent-teal-border rounded-full px-3 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-teal animate-blink" />
              <span className="text-xs text-text-secondary font-mono">
                {siteConfig.availability}
              </span>
            </div>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            {...fadeUp(0.1)}
            className="text-5xl sm:text-6xl lg:text-7xl font-medium leading-[1.05] tracking-[-0.03em] text-white mb-6"
          >
            Frontend engineer
            <br />
            who ships{" "}
            <span className="text-accent-purple">AI-powered</span>
            <br />
            products.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            {...fadeUp(0.2)}
            className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-xl mb-8"
          >
            {siteConfig.subheadline}
          </motion.p>

          {/* Stack tags */}
          <motion.div {...fadeUp(0.3)} className="flex flex-wrap gap-2 mb-10">
            {stack.map((tech) => (
              <span key={tech} className="tech-tag">
                {tech}
              </span>
            ))}
          </motion.div>

          {/* CTA buttons */}
          <motion.div {...fadeUp(0.4)} className="flex flex-wrap gap-3">
            <button
              onClick={handleScrollToWork}
              className="px-6 py-3 bg-accent-purple text-bg-primary text-sm font-medium rounded-md hover:bg-white transition-colors"
            >
              view my work
            </button>
            <a
              href={siteConfig.resumeUrl}
              download
              className="px-6 py-3 bg-white/5 border border-white/10 text-text-secondary text-sm rounded-md hover:bg-white/10 hover:text-white transition-all"
            >
              download resume
            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            {...fadeUp(0.5)}
            className="mt-16 border border-bg-border rounded-xl overflow-hidden"
          >
            <div className="px-4 py-2.5 bg-white/[0.03] border-b border-bg-border">
              <span className="font-mono text-xs text-text-muted">
                // projects shipped
              </span>
            </div>
            <div className="grid grid-cols-3 divide-x divide-bg-border">
              {stats.map((stat) => (
                <div key={stat.label} className="px-6 py-5">
                  <div className="font-mono text-2xl font-medium text-accent-purple">
                    {stat.value}
                  </div>
                  <div className="text-xs text-text-muted mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
