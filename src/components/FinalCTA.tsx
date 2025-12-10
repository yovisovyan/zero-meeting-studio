// src/components/FinalCTA.tsx
"use client";

import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="relative bg-black py-28 overflow-hidden">
      {/* background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-br from-purple-600/20 via-indigo-500/10 to-transparent blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6">
          Start without meetings.
          <br />
          <span className="text-white/80">Leave with clarity.</span>
        </h2>

        {/* Subtext */}
        <p className="text-white/60 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
          A short async brief replaces discovery calls.
          <br className="hidden sm:block" />
          You’ll receive a clear plan, scope, and price — no pressure to proceed.
        </p>

        {/* Trust bullets */}
        <div className="mb-10 flex flex-wrap justify-center gap-4 text-sm text-white/60">
          <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10">
            ✓ Takes ~3–5 minutes
          </span>
          <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10">
            ✓ Founder-reviewed
          </span>
          <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10">
            ✓ No obligation
          </span>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/start"
            className="
              px-8 py-4 rounded-2xl
              bg-white text-black
              text-lg font-medium
              hover:bg-gray-100 transition
            "
          >
            Start your project →
          </Link>

          <Link
            href="https://www.upwork.com/"
            target="_blank"
            className="
              px-8 py-4 rounded-2xl
              border border-white/15
              text-white/70
              text-lg
              hover:bg-white/5 hover:text-white transition
            "
          >
            Hire via Upwork →
          </Link>
        </div>

        {/* Soft reassurance */}
        <p className="mt-6 text-xs text-white/40 max-w-xl mx-auto">
          Prefer platform buyer protection? Hiring via Upwork is totally fine.
          Same work. Same standards. Same async process.
        </p>
      </div>
    </section>
  );
}
