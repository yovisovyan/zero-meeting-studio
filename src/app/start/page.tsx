"use client";

import MultiStepForm from "@/components/MultiStepForm";
import { motion } from "framer-motion";

export default function StartPage() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">

      {/* ===============================
          CINEMATIC BACKGROUND LIGHTING
      =============================== */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-[30%] -left-[20%] w-[700px] h-[700px] bg-gradient-to-br from-brand-500/40 via-purple-600/20 to-transparent blur-[260px] rounded-full" />
        <div className="absolute -bottom-[20%] -right-[15%] w-[650px] h-[650px] bg-gradient-to-tr from-sky-500/20 via-blue-700/10 to-transparent blur-[280px] rounded-full" />
      </div>

      {/* Subtle noise for depth */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-soft-light bg-[url('/noise.png')] bg-repeat" />

      <section className="relative z-10 max-w-5xl mx-auto px-6 pt-32 pb-28">

        {/* ===============================
            HEADER / VALUE PROPOSITION
        =============================== */}
        <motion.header
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-center mb-16"
        >
          {/* Eyebrow */}
          <p className="uppercase tracking-widest text-xs text-white/40 mb-5">
            Async project onboarding
          </p>

          {/* Headline */}
          <h1 className="text-5xl md:text-[3.6rem] font-semibold tracking-tight mb-6 leading-tight">
  Start your project
  <br />
  <span
    style={{
      background: "linear-gradient(90deg, #6d28d9, #38bdf8)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
      color: "transparent",
      display: "inline-block",
    }}
  >
    without meetings.
  </span>
</h1>


          {/* Description */}
          <p className="text-white/65 text-lg max-w-[42rem] mx-auto leading-relaxed">
            This short onboarding replaces discovery calls.
            <br className="hidden md:block" />
            It takes about{" "}
            <span className="text-white font-medium">3–5 minutes</span> and helps
            us reply with a clear plan — not another meeting.
          </p>

          {/* Trust indicators */}
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {[
              "No obligation to proceed",
              "100% async process",
              "Response within 3 hours",
            ].map((item) => (
              <div
                key={item}
                className="
                  flex items-center gap-2 px-4 py-2 rounded-full
                  bg-white/5 border border-white/10
                  text-sm text-white/70 backdrop-blur-md
                "
              >
                <span className="text-brand-500">✓</span>
                {item}
              </div>
            ))}
          </div>
        </motion.header>

        {/* ===============================
            FORM INTRO (CONTEXT)
        =============================== */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-10 max-w-3xl mx-auto text-center"
        >
          <p className="text-white/55 leading-relaxed">
            Founders use this form to tell us what they’re building, what matters
            most, and how fast they want to move.
            <br />
            Short answers are perfect — clarity beats polish.
          </p>
        </motion.div>

        {/* ===============================
            FORM CONTAINER
        =============================== */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="
            backdrop-blur-3xl bg-white/5
            border border-white/10
            shadow-[0_0_160px_-40px_rgba(0,0,0,0.8)]
            rounded-3xl p-8 md:p-10
          "
        >
          <MultiStepForm />
        </motion.div>

        {/* ===============================
            SUPPORT / REASSURANCE
        =============================== */}
        <div className="mt-14 flex flex-col md:flex-row items-center justify-center gap-2 text-sm">
          <p className="text-white/50">
            Need help? Email{" "}
            <span className="text-white font-medium">
              info@zeromeeting.site
            </span>
          </p>

          <span className="hidden md:block text-white/20 mx-3">|</span>

          <p className="text-white/60">
            Feeling overwhelmed?{" "}
            <span className="text-brand-500 hover:underline underline-offset-4 cursor-pointer">
              Contact us directly to info@zeromeeting.site
            </span>
          </p>
        </div>

      </section>
    </main>
  );
}
