// src/components/ui/Parallax.tsx
"use client";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";

export default function Parallax({
  children,
  depth = 30,
  className = "",
}: {
  children: React.ReactNode;
  depth?: number;
  className?: string;
}) {
  // small mouse-follow parallax (works on client)
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const tx = useTransform(x, (v) => `${v / depth}px`);
  const ty = useTransform(y, (v) => `${v / depth}px`);

  useEffect(() => {
    const handle = (e: MouseEvent) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      x.set(e.clientX - cx);
      y.set(e.clientY - cy);
    };
    window.addEventListener("mousemove", handle);
    return () => window.removeEventListener("mousemove", handle);
  }, [x, y]);

  return (
    <motion.div style={{ translateX: tx, translateY: ty }} className={className}>
      {children}
    </motion.div>
  );
}
