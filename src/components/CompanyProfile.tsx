"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function CompanyProfile() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 0"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [80, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.4, 1]);

  return (
    <section ref={ref} className="relative w-full py-40 px-6 overflow-hidden">
      
      {/* BACKGROUND GLOW */}
      <motion.div
        style={{ opacity }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-10 left-20 w-[420px] h-[420px] bg-purple-700/20 blur-[160px]" />
        <div className="absolute bottom-0 right-0 w-[520px] h-[520px] bg-blue-600/20 blur-[200px]" />
      </motion.div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center relative z-10">

        {/* LEFT SIDE — TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <h2 className="text-6xl font-bold mb-10">Zero-Meeting Studio</h2>

          <p className="text-gray-300 text-xl leading-relaxed mb-6">
            A small, focused async web studio. We were founded to solve a simple issue:
            founders wasting days on calls just to get a basic website live.
          </p>

          <p className="text-gray-400 text-lg leading-relaxed mb-6">
            With <span className="text-white font-medium">$20k+ earned on Upwork</span> and years of
            experience building high-performance landing pages, we operate like a product —
            predictable, calm, async-first.
          </p>

          <p className="text-gray-400 text-lg leading-relaxed">
            Based in Indonesia, operating US-friendly hours, crafting clean and fast websites for
            founders across the US, Europe, and Asia.
          </p>
        </motion.div>

        {/* RIGHT SIDE — PHOTO GRID */}
        <motion.div
          style={{ y, opacity }}
          className="grid grid-cols-2 gap-6"
        >
          {/* 1 */}
          <motion.div
            whileHover={{ scale: 1.04 }}
            className="rounded-3xl overflow-hidden bg-white/5 border border-white/10 shadow-2xl backdrop-blur-xl aspect-[4/5]"
          >
            <Image
              src="/studio1.png"
              fill
              alt="Studio photo"
              className="object-cover"
            />
          </motion.div>

          {/* 2 */}
          <motion.div
            whileHover={{ scale: 1.04 }}
            className="rounded-3xl overflow-hidden bg-white/5 border border-white/10 shadow-xl backdrop-blur-xl aspect-square mt-16"
          >
            <Image
              src="/studio2.png"
              fill
              alt="Workspace photo"
              className="object-cover"
            />
          </motion.div>

          {/* 3 */}
          <motion.div
            whileHover={{ scale: 1.04 }}
            className="rounded-3xl overflow-hidden bg-white/5 border border-white/10 shadow-xl backdrop-blur-xl aspect-square"
          >
            <Image
              src="/studio3.png"
              fill
              alt="Minimal desk"
              className="object-cover"
            />
          </motion.div>

          {/* 4 */}
          <motion.div
            whileHover={{ scale: 1.04 }}
            className="rounded-3xl overflow-hidden bg-white/5 border border-white/10 shadow-2xl backdrop-blur-xl aspect-[4/5] mt-16"
          >
            <Image
              src="/studio4.png"
              fill
              alt="Team meeting"
              className="object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
