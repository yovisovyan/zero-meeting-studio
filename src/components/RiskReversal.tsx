// src/components/RiskReversal.tsx
"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Clock, MessageSquare, RefreshCcw } from "lucide-react";

export default function RiskReversal() {
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
            p-10 md:p-16
          "
        >

          {/* Ambient glow */}
          <div className="pointer-events-none absolute -top-24 left-1/3 w-96 h-96 bg-emerald-500/10 blur-3xl rounded-full" />
          <div className="pointer-events-none absolute -bottom-24 right-1/4 w-96 h-96 bg-indigo-500/10 blur-3xl rounded-full" />

          {/* HEADER */}
          <div className="relative text-center max-w-3xl mx-auto mb-14">
            <p className="uppercase tracking-widest text-xs text-white/40 mb-4">
              Risk reversal
            </p>

            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-5">
              Zero pressure. <span className="text-brand-500">Zero risk.</span>
            </h2>

            <p className="text-white/60 text-lg leading-relaxed">
              Starting shouldn’t feel like a gamble.
              <br className="hidden md:block" />
              Here’s how we remove risk before you commit to anything.
            </p>
          </div>

          {/* GUARANTEE GRID */}
          <div className="grid md:grid-cols-2 gap-8 relative z-10">

            <GuaranteeItem
              icon={<ShieldCheck />}
              title="No obligation after the brief"
              desc="Submitting the form does not lock you into a contract or payment. You’ll receive a clear plan and price first."
            />

            <GuaranteeItem
              icon={<Clock />}
              title="Fast async response"
              desc="We review every submission personally and reply within 3 business hours during active days."
            />

            <GuaranteeItem
              icon={<MessageSquare />}
              title="Clear scope before payment"
              desc="You’ll know exactly what’s included, what’s not, timelines, and deliverables — before spending a dollar."
            />

            <GuaranteeItem
              icon={<RefreshCcw />}
              title="Walk away if it’s not a fit"
              desc="If you don’t feel aligned after the proposal, you’re free to say no. No awkward calls. No follow-ups."
            />

          </div>

          {/* FOOTNOTE */}
          <div className="relative z-10 mt-14 text-center">
            <p className="text-sm text-white/45 max-w-2xl mx-auto">
              We’d rather earn trust through clarity than trap you with fine print.
              If we’re not the right partner, we’ll say so — honestly.
            </p>
          </div>

        </motion.div>
      </div>
    </section>
  );
}

/* ----------------- Item ----------------- */

function GuaranteeItem({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div
      className="
        relative rounded-2xl p-6
        bg-black/40 backdrop-blur-xl
        border border-white/10
      "
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-brand-500">
          {icon}
        </div>

        <h3 className="text-lg font-medium">{title}</h3>
      </div>

      <p className="text-white/60 text-sm leading-relaxed">
        {desc}
      </p>
    </div>
  );
}
