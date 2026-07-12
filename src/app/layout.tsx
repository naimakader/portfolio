import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Naima Kader — Frontend Developer",
  description:
    "Frontend engineer who ships AI-powered products. Next.js, TypeScript, React, Supabase. Open to remote work worldwide.",
  keywords: [
    "frontend developer",
    "Next.js",
    "TypeScript",
    "React",
    "remote developer",
    "Ethiopia",
  ],
  authors: [{ name: "Naima Kader" }],
  openGraph: {
    title: "Naima Kader — Frontend Developer",
    description:
      "Frontend engineer who ships AI-powered products. Next.js, TypeScript, React, Supabase.",
    url: "https://naimakader.dev",
    siteName: "Naima Kader",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Naima Kader — Frontend Developer",
    description:
      "Frontend engineer who ships AI-powered products. Open to remote work.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={jetbrainsMono.variable}>
      <body className="bg-bg-primary text-white antialiased">{children}</body>
    </html>
  );
}
