// src/components/Mockup.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function Mockup() {
  const [hovered, setHovered] = useState(false);

  return (
    <section className="relative w-full pb-24 pt-4">
      {/* Background strip */}
      <div className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-40 max-w-5xl rounded-full bg-gradient-to-r from-indigo-500/10 via-sky-500/10 to-emerald-400/10 blur-3xl" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-semibold sm:text-3xl md:text-4xl">
            A studio-grade look, out of the box.
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-gray-300 sm:text-base">
            Every project ships with a responsive, fast, and conversion-ready layout —
            no templates, no drag-and-drop builders. Custom-crafted for your brand.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="relative flex w-full justify-center"
        >
          <motion.div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            animate={{
              rotateX: hovered ? 8 : 2,
              rotateY: hovered ? -10 : -4,
              translateY: hovered ? -6 : 0,
              scale: hovered ? 1.03 : 1,
              boxShadow: hovered
                ? "0px 40px 120px rgba(0,0,0,0.75)"
                : "0px 22px 60px rgba(0,0,0,0.55)",
            }}
            transition={{ type: "spring", stiffness: 180, damping: 18 }}
            className="relative w-full max-w-4xl rounded-[32px] border border-white/12 bg-gradient-to-br from-slate-900 via-slate-950 to-black p-4"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Bezel */}
            <div className="relative h-full w-full rounded-[26px] border border-white/8 bg-black/80 p-3">
              <div className="mb-2 flex items-center justify-between px-2">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                </div>
                <div className="h-1.5 w-20 rounded-full bg-white/10" />
              </div>

              {/* Screenshot */}
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
                <Image
                  src="/mockup 19.46.01.png"
                  alt="Zero-Meeting website mockup"
                  fill
                  className="object-cover object-top"
                  priority
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
              </div>
            </div>

            {/* Reflection / soft highlight */}
            <div className="pointer-events-none absolute inset-x-10 -bottom-10 h-10 rounded-full bg-black/70 blur-2xl" />
          </motion.div>
        </motion.div>

        <p className="mt-8 text-center text-xs text-gray-400 sm:text-sm">
          You’ll preview everything inside a private live link — no Figma logins, no calls.
        </p>
      </div>
    </section>
  );
}
