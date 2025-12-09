// src/components/Hero.tsx
"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap, ShieldCheck, Globe2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="hero-glow -top-32 left-1/2 h-72 w-72 -translate-x-1/2 bg-[radial-gradient(circle_at_center,_rgba(99,102,241,0.55),_transparent_60%)]" />
        <div className="hero-glow bottom-0 right-0 h-72 w-72 bg-[radial-gradient(circle_at_center,_rgba(56,189,248,0.4),_transparent_60%)]" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-10 px-6 text-center">
        {/* Top badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-medium text-gray-200 backdrop-blur-md"
        >
          <Zap className="h-3 w-3 text-amber-400" />
          <span>Done in 48–72 hours · 100% async · Zero meetings</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Premium websites,
          <span className="block bg-gradient-to-r from-indigo-400 via-sky-400 to-cyan-300 bg-clip-text text-transparent">
            zero meetings required.
          </span>
        </motion.h1>

        {/* Subcopy */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-2xl text-balance text-base text-gray-300 sm:text-lg"
        >
          Zero-Meeting Studio builds Apple-grade landing pages, business sites, and Shopify stores
          for founders who value speed, clarity, and results — without calls, calendars, or chaos.
        </motion.p>

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.18 }}
          className="mt-4 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="/start"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold text-black shadow-[0_18px_45px_rgba(0,0,0,0.45)] transition hover:-translate-y-[1px] hover:bg-gray-100"
          >
            Start a project
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#pricing"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-gray-100 backdrop-blur-md transition hover:border-white/40 hover:bg-white/10"
          >
            View pricing
          </a>
        </motion.div>

        {/* Social proof under hero */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-8 grid w-full max-w-3xl gap-4 text-left text-xs text-gray-400 sm:grid-cols-3 sm:text-sm"
        >
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-emerald-400" />
            <span>Clear fixed pricing. No hourly surprises.</span>
          </div>
          <div className="flex items-center gap-2">
            <Globe2 className="h-4 w-4 text-sky-400" />
            <span>Built in Indonesia · serving US & global clients.</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-[10px] font-semibold">
              20k+
            </span>
            <span>USD earned via Upwork before launching this studio.</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
