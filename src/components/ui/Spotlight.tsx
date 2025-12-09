// src/components/ui/Spotlight.tsx
"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Spotlight() {
  const [pos, setPos] = useState({ x: 600, y: 260 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("pointermove", handleMove);
    return () => window.removeEventListener("pointermove", handleMove);
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      <motion.div
        className="absolute h-[480px] w-[480px] rounded-full bg-gradient-to-br from-indigo-500/45 via-purple-500/30 to-cyan-400/25 blur-3xl"
        style={{
          top: pos.y - 240,
          left: pos.x - 240,
        }}
        transition={{ type: "spring", stiffness: 80, damping: 24, mass: 0.6 }}
      />
    </motion.div>
  );
}
