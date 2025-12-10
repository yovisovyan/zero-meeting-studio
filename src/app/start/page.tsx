"use client";

import MultiStepForm from "@/components/MultiStepForm";
import { motion } from "framer-motion";

export default function StartPage() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">

      {/* Cinematic Lighting */}
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute top-[-20%] left-[-10%] w-[700px] h-[700px] bg-gradient-to-br from-brand-500/40 via-purple-600/20 to-transparent blur-[240px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[650px] h-[650px] bg-gradient-to-tr from-indigo-500/20 via-blue-700/10 to-transparent blur-[260px] rounded-full" />
      </div>

      {/* Noise Texture for Premium Feel */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.07] mix-blend-soft-light bg-[url('/noise.png')] bg-repeat" />

      <section className="relative z-10 max-w-5xl mx-auto px-6 pt-28 pb-24">

        {/* HEADER */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <h1 className="text-5xl font-semibold tracking-tight mb-4">
            Start your project — 
            <span className="text-brand-500"> without meetings.</span>
          </h1>

          <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
            A calm, guided onboarding that takes <span className="text-white">just ~3 minutes.</span><br />
            No calls. No friction. Just clarity — designed for fast-moving founders.
          </p>
        </motion.header>

        {/* FORM CONTAINER */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="
            backdrop-blur-3xl 
            bg-white/5 
            border border-white/10 
            shadow-[0_0_120px_-30px_rgba(0,0,0,0.6)] 
            rounded-3xl 
            p-10
          "
        >
          <MultiStepForm
          
          />
        </motion.div>

        {/* SUPPORT TEXT */}
        <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-2 text-white/50 text-sm">

          <p>
            Need help? <span className="text-white font-medium">hello@zeromeeting.studio</span>
          </p>

          <span className="hidden md:block text-white/20 mx-2">|</span>

          <p className="text-white/60">
            Feeling overwhelmed?{" "}
            <span className="text-brand-500 underline-offset-4 hover:underline cursor-pointer">
              Contact us directly.
            </span>
          </p>

        </div>

      </section>

    </main>
  );
}
