// src/components/UpworkProof.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ShieldCheck, Star, ExternalLink } from "lucide-react";

export default function UpworkProof() {
  return (
    <section className="py-28 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="
            relative overflow-hidden rounded-3xl 
            bg-white/[0.04] border border-white/10
            backdrop-blur-2xl
            shadow-[0_0_120px_-40px_rgba(0,0,0,0.8)]
            p-10 md:p-14
          "
        >

          {/* Glow */}
          <div className="pointer-events-none absolute -top-20 -left-20 w-80 h-80 bg-emerald-500/10 blur-3xl rounded-full" />
          <div className="pointer-events-none absolute -bottom-24 -right-24 w-96 h-96 bg-indigo-500/10 blur-3xl rounded-full" />

          <div className="relative grid md:grid-cols-2 gap-10 items-center">

            {/* LEFT — PROFILE */}
            <div className="flex gap-6 items-start">

              {/* Avatar */}
              <div className="relative">
                <Image
                  src="/avatar.jpg"
                  alt="Founder avatar"
                  width={96}
                  height={96}
                  className="rounded-full ring-4 ring-emerald-500/80"
                />

                {/* Upwork badge dot */}
                <div className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-emerald-500 flex items-center justify-center text-black text-xs font-bold">
                  ✓
                </div>
              </div>

              {/* Identity */}
              <div>
                <p className="text-xs uppercase tracking-widest text-white/40 mb-2">
                  Founder · Zero-Meeting Studio
                </p>

                <h3 className="text-2xl font-semibold mb-3">
                  Founder-led delivery
                </h3>

                <p className="text-white/65 text-sm leading-relaxed max-w-md">
                  Before launching Zero-Meeting Studio as a productized async service,
                  I worked directly with founders and teams through Upwork —
                  delivering conversion-focused sites with consistent 5-star feedback.
                </p>
              </div>
            </div>

            {/* RIGHT — PROOF */}
            <div className="space-y-6">

              {/* Badges */}
              <div className="flex flex-wrap gap-3">
                <Badge icon={<ShieldCheck size={14} />} label="100% Job Success" accent="emerald" />
                <Badge icon={<Star size={14} />} label="Top Rated Freelancer" accent="blue" />
                <Badge label="$20,000+ earned" />
                <Badge label="5-star client feedback" />
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 mt-4">
                <Link
                  href="https://www.upwork.com/freelancers/~01731a55e280e4b81f"
                  target="_blank"
                  className="
                    inline-flex items-center justify-center gap-2
                    px-6 py-3 rounded-xl text-sm
                    bg-white/10 hover:bg-white/15 border border-white/15
                    transition
                  "
                >
                  View Upwork profile
                  <ExternalLink size={14} />
                </Link>

                <Link
                  href="/start"
                  className="
                    inline-flex items-center justify-center gap-2
                    px-6 py-3 rounded-xl text-sm font-medium
                    bg-white text-black hover:bg-gray-100
                    transition
                  "
                >
                  Start a project →
                </Link>
              </div>

              {/* Trust note */}
              <p className="text-xs text-white/40 mt-3 leading-relaxed">
                Prefer platform buyer protection? Hiring via Upwork is totally fine.
                Same work. Same standards. Same response time.
              </p>

            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}

/* ------------------ Badge ------------------ */

function Badge({
  label,
  icon,
  accent,
}: {
  label: string;
  icon?: React.ReactNode;
  accent?: "emerald" | "blue";
}) {
  const accentClass =
    accent === "emerald"
      ? "border-emerald-400/30 text-emerald-300"
      : accent === "blue"
      ? "border-blue-400/30 text-blue-300"
      : "border-white/15 text-white/70";

  return (
    <div
      className={`
        inline-flex items-center gap-2
        px-4 py-2 rounded-full text-xs
        bg-black/30 backdrop-blur-md
        border ${accentClass}
      `}
    >
      {icon}
      {label}
    </div>
  );
}
