// src/components/Features.tsx
"use client";

import { motion } from "framer-motion";
import { Clock, PhoneOff, Star, Rocket } from "lucide-react";

const features = [
  {
    icon: Clock,
    label: "48–72h Delivery",
    body: "Launch fast without sacrificing quality. We work in focused async sprints.",
  },
  {
    icon: PhoneOff,
    label: "Zero Meetings",
    body: "Everything happens via simple forms and clear updates. No calls, no calendars.",
  },
  {
    icon: Star,
    label: "Apple-Grade Aesthetic",
    body: "Clean, modern, premium aesthetics inspired by world-class product design.",
  },
  {
    icon: Rocket,
    label: "Built to Convert",
    body: "Every page is structured around clear offers, social proof, and strong CTAs.",
  },
];

export default function Features() {
  return (
    <section className="border-t border-white/5 bg-gradient-to-b from-black via-[#050509] to-black py-20 md:py-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6">
        <div className="max-w-xl">
          <h2 className="text-2xl font-semibold sm:text-3xl md:text-4xl">Designed to feel effortless.</h2>
          <p className="mt-3 text-sm text-gray-300 sm:text-base">
            Zero-Meeting Studio is built for founders who want{" "}
            <span className="font-medium text-gray-100">clarity, speed, and premium output</span> —
            without babysitting an agency.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {features.map((f, i) => (
            <motion.div
              key={f.label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="group rounded-3xl border border-white/5 bg-white/5 p-5 backdrop-blur-md transition hover:-translate-y-1 hover:border-white/15 hover:bg-white/8"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10">
                <f.icon className="h-5 w-5 text-sky-300" />
              </div>
              <h3 className="text-base font-semibold text-white sm:text-lg">{f.label}</h3>
              <p className="mt-2 text-sm text-gray-300">{f.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
