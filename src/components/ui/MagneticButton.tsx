"use client";
import { motion, useMotionValue, useTransform } from "framer-motion";

export default function MagneticButton({ children }: { children: React.ReactNode }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  function handleMove(e: any) {
    const rect = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - (rect.left + rect.width / 2);
    const offsetY = e.clientY - (rect.top + rect.height / 2);
    x.set(offsetX * 0.3);
    y.set(offsetY * 0.3);
  }

  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.button
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ x, y }}
      className="px-8 py-3 text-lg rounded-xl bg-white text-black font-semibold shadow-lg hover:shadow-xl transition"
    >
      {children}
    </motion.button>
  );
}
