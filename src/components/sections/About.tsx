import { siteConfig, skills } from "@/lib/data";
import SectionLabel from "@/components/ui/SectionLabel";
import FadeIn from "@/components/ui/FadeIn";

const skillGroups = [
  { label: "languages", items: skills.languages },
  { label: "frameworks", items: skills.frameworks },
  { label: "backend & api", items: skills.backend },
  { label: "tools", items: skills.tools },
];

export default function About() {
  return (
    <section id="about" className="py-28 max-w-5xl mx-auto px-6">
      <SectionLabel number="03" label="about" />

      <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
        {/* Left — bio */}
        <FadeIn>
          <div>
            <p className="text-base text-text-secondary leading-relaxed mb-6">
              I&apos;m a self-taught frontend developer from{" "}
              <span className="text-white">Jijiga, Ethiopia</span>. I build
              AI-powered web apps that feel as good as they work — fast,
              accessible, and thoughtfully designed.
            </p>
            <p className="text-base text-text-secondary leading-relaxed mb-6">
              Everything I know, I learned by building. I&apos;ve shipped three
              production projects using a modern stack: Next.js 15, TypeScript,
              Supabase, and the OpenAI API. I take real problems seriously and
              care about the quality of what I ship.
            </p>
            <p className="text-base text-text-secondary leading-relaxed">
              I&apos;m currently looking for my first remote role — full-time or
              contract — where I can contribute from day one and keep growing.
            </p>

            {/* Info cards */}
            <div className="mt-8 grid grid-cols-2 gap-3">
              {[
                { label: "// location", value: siteConfig.location },
                { label: "// remote", value: "Worldwide" },
                { label: "// type", value: "Full-time / Contract" },
                { label: "// status", value: "Open to work" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-bg-card border border-bg-border rounded-lg p-4"
                >
                  <div className="font-mono text-[10px] text-text-muted mb-1.5">
                    {item.label}
                  </div>
                  <div className="text-sm text-white">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Right — skills */}
        <FadeIn delay={0.15}>
          <div>
            <div className="font-mono text-xs text-text-muted mb-6">
              // stack
            </div>
            <div className="space-y-6">
              {skillGroups.map((group) => (
                <div key={group.label}>
                  <div className="text-xs text-text-muted mb-2.5 tracking-wide">
                    {group.label}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs text-text-secondary bg-white/[0.04] border border-bg-border px-3 py-1.5 rounded-md hover:border-white/20 hover:text-white transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
