"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "left" | "none";
}

export default function FadeIn({
  children,
  delay = 0,
  className = "",
  direction = "up",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 24 : 0,
      x: direction === "left" ? -24 : 0,
    },
    visible: { opacity: 1, y: 0, x: 0 },
  };

  return (
    <div ref={ref} className={className}>
      <motion.div
        variants={variants}
        initial="hidden"
        animate={visible ? "visible" : "hidden"}
        transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98], delay }}
      >
        {children}
      </motion.div>
    </div>
  );
}
