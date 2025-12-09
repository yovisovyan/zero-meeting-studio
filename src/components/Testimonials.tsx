// src/components/Testimonials.tsx
"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Amanda R.",
    role: "Founder, DTC brand (US)",
    quote:
      "The cleanest website process I’ve had in 10+ years. I filled a form, approved a draft, and we were live in two days.",
    avatar:
      "https://images.pexels.com/photos/3760852/pexels-photo-3760852.jpeg?auto=compress&cs=tinysrgb&w=200&q=80",
  },
  {
    name: "John M.",
    role: "Solo consultant",
    quote:
      "Perfect for busy entrepreneurs. No meetings, no back-and-forth. Just a clear process and a site that feels premium.",
    avatar:
      "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=200&q=80",
  },
  {
    name: "Chris T.",
    role: "Shopify store owner",
    quote:
      "Delivered in 48 hours and looked incredibly polished. My previous agency took three weeks to ship less.",
    avatar:
      "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=200&q=80",
  },
];

export default function Testimonials() {
  return (
    <section className="border-t border-white/5 bg-black py-20 md:py-28">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold sm:text-3xl md:text-4xl">Clients who hate meetings love us.</h2>
            <p className="mt-3 max-w-xl text-sm text-gray-300 sm:text-base">
              Most of our clients are solo founders, small teams, or creators who want big-agency output
              without the big-agency drag.
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs text-amber-300 sm:text-sm">
            <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
            <span>Async-first · 5/5 experience</span>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group flex h-full flex-col rounded-3xl border border-white/8 bg-white/[0.04] p-5 backdrop-blur-md"
            >
              <div className="flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="h-10 w-10 rounded-full object-cover ring-2 ring-white/20"
                />
                <div className="text-sm">
                  <div className="font-medium text-white">{t.name}</div>
                  <div className="text-[11px] text-gray-400">{t.role}</div>
                </div>
              </div>
              <blockquote className="mt-4 flex-1 text-sm text-gray-200">
                “{t.quote}”
              </blockquote>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
