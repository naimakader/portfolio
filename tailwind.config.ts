import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "#0a0a0f",
          secondary: "#111118",
          card: "#13131c",
          border: "rgba(255,255,255,0.08)",
        },
        accent: {
          purple: "#AFA9EC",
          "purple-dim": "#7F77DD",
          "purple-bg": "rgba(127,119,221,0.08)",
          "purple-border": "rgba(127,119,221,0.3)",
          teal: "#5DCAA5",
          "teal-bg": "rgba(93,202,165,0.12)",
          "teal-border": "rgba(93,202,165,0.3)",
        },
        text: {
          primary: "#ffffff",
          secondary: "rgba(255,255,255,0.6)",
          muted: "rgba(255,255,255,0.35)",
          code: "rgba(175,169,236,0.9)",
        },
      },
      fontFamily: {
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      animation: {
        "blink": "blink 2s ease-in-out infinite",
        "fade-up": "fadeUp 0.6s ease forwards",
        "spin-slow": "spin 8s linear infinite",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.3" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "40px 40px",
      },
    },
  },
  plugins: [],
};

export default config;
