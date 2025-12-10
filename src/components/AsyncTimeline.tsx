"use client";

import { motion } from "framer-motion";
import { FileText, Wand2, MessageCircle, PlayCircle } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Submit a focused brief",
    desc: "You answer a short set of questions about goals, constraints, and priorities. No prep work. No decks. Just clarity.",
    reassurance: "Takes ~3–5 minutes",
    icon: FileText,
  },
  {
    step: "02",
    title: "Founder-level review",
    desc: "We personally analyze your brief to identify scope, risks, and opportunities — the same thinking you’d expect from a strategy call.",
    reassurance: "No junior handoff",
    icon: Wand2,
  },
  {
    step: "03",
    title: "Clear async proposal",
    desc: "You receive a written plan with pricing, timeline, and execution details you can review on your own time.",
    reassurance: "No sales pressure",
    icon: MessageCircle,
  },
  {
    step: "04",
    title: "Execution starts (optional)",
    desc: "Only if everything feels right. If not, you walk away with clarity — no awkward follow-ups or commitments.",
    reassurance: "You’re in control",
    icon: PlayCircle,
  },
];

export default function AsyncTimeline() {
  return (
    <section className="relative py-28 bg-black text-white overflow-hidden">

      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute top-1/3 left-[-10%] w-[500px] h-[500px] bg-purple-500/20 blur-[200px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-indigo-500/20 blur-[240px] rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-24"
        >
          <p className="uppercase tracking-widest text-xs text-white/40 mb-4">
            How it works
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
            A calm, async process —{" "}
            <span className="bg-gradient-to-r from-purple-400 to-sky-400 bg-clip-text text-transparent">
              designed for builders.
            </span>
          </h2>

          <p className="text-white/60 text-lg leading-relaxed">
            Everything happens without meetings, blockers, or pressure.
            <br className="hidden md:block" />
            You stay informed, aligned, and in control — start to finish.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative grid md:grid-cols-4 gap-10">

          {/* Connector line */}
          <div className="hidden md:block absolute top-11 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

          {steps.map((item, idx) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.6 }}
              >
                <div className="
                  h-full rounded-3xl p-7
                  bg-white/[0.045]
                  border border-white/10
                  backdrop-blur-2xl
                  shadow-[0_0_80px_-40px_rgba(0,0,0,0.9)]
                ">

                  {/* Step header */}
                  <div className="flex items-center gap-4 mb-5">
                    <div className="
                      w-12 h-12 rounded-2xl
                      bg-gradient-to-br from-purple-500 to-indigo-400
                      flex items-center justify-center
                      shadow-lg shadow-purple-900/40
                    ">
                      <Icon className="w-5 h-5 text-white" />
                    </div>

                    <div>
                      <p className="text-xs tracking-widest text-white/40">
                        STEP {item.step}
                      </p>
                      <p className="text-sm text-purple-400 font-medium">
                        {item.reassurance}
                      </p>
                    </div>
                  </div>

                  <h3 className="text-lg font-medium mb-3">
                    {item.title}
                  </h3>

                  <p className="text-sm text-white/65 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom reassurance */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20 text-center"
        >
          <p className="text-sm text-white/45 max-w-2xl mx-auto">
            No upfront payment. No obligation.
            <br />
            If the plan doesn’t feel right, you simply don’t proceed.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
