import { siteConfig } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-bg-border">
      <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-mono text-xs text-text-muted">
          © 2026 {siteConfig.name}
        </span>
        <span className="font-mono text-xs text-text-muted">
          built with Next.js + Tailwind CSS
        </span>
      </div>
    </footer>
  );
}
