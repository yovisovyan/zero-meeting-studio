// src/components/FounderPromise.tsx
"use client";

export default function FounderPromise() {
  return (
    <section className="border-t border-white/5 bg-black py-20 md:py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">

        <div
          className="
            relative overflow-hidden rounded-3xl
            border border-white/10
            bg-white/[0.04]
            backdrop-blur-2xl
            px-8 py-10
          "
        >
          {/* subtle glow */}
          <div className="pointer-events-none absolute inset-0 opacity-30">
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-br from-purple-500/20 via-indigo-500/10 to-transparent blur-3xl" />
          </div>

          <div className="relative z-10">
            <p className="uppercase tracking-widest text-xs text-white/40 mb-3">
              Founder promise
            </p>

            <h3 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">
              If the plan doesn’t feel right,
              <br className="hidden sm:block" />
              <span className="text-white"> you don’t proceed.</span>
            </h3>

            <p className="text-white/65 leading-relaxed">
              No pressure. No obligation.
              <br />
              Just clarity — before you commit to anything.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
