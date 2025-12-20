// src/components/Pricing.tsx
"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Launch Landing Page",
    price: "$499",
    highlight: false,
    description: "Perfect for validating an offer, product, or idea — fast.",
    features: [
      "One high-converting landing page",
      "Conversion copy guidance & wireframe",
      "Responsive, fast, SEO-ready build",
      "Async delivery in 48–72 hours",
    ],
  },
  {
    name: "Business Website",
    price: "$1,200",
    highlight: true,
    description: "A complete, premium online presence for serious founders.",
    features: [
      "Up to 5 custom pages (Home, About, Services, etc.)",
      "Conversion-focused layout & UX structure",
      "Contact form + basic analytics setup",
      "Priority async support (no meetings)",
    ],
  },
  {
    name: "Shopify Store",
    price: "$1,500",
    highlight: false,
    description: "A clean, conversion-optimized store ready to sell.",
    features: [
      "Custom Shopify theme setup",
      "High-converting product & collection pages",
      "Essential apps & integrations configured",
      "Email capture + basic conversion setup",
    ],
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="border-t border-white/5 bg-[#050509] py-20 md:py-28"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6">
        <div className="max-w-xl">
          <h2 className="text-2xl font-semibold sm:text-3xl md:text-4xl">
            Simple pricing. No calls required.
          </h2>
          <p className="mt-3 text-sm text-gray-300 sm:text-base">
            Pick a package, answer a focused async brief, and we handle the rest.
            Clear scope. Fixed price. Zero meetings.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className={`relative flex flex-col rounded-3xl border p-6 backdrop-blur-md ${
                plan.highlight
                  ? "border-indigo-400/60 bg-gradient-to-b from-indigo-500/20 via-indigo-500/10 to-black"
                  : "border-white/10 bg-white/3"
              }`}
            >
              {plan.highlight && (
                <div className="absolute right-4 top-4 rounded-full bg-indigo-500/90 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-white">
                  Most popular
                </div>
              )}

              <div>
                <h3 className="text-lg font-semibold text-white">
                  {plan.name}
                </h3>
                <p className="mt-1 text-xs text-gray-300 sm:text-sm">
                  {plan.description}
                </p>
              </div>

              <div className="mt-5 text-4xl font-semibold text-white">
                {plan.price}
              </div>
              <div className="mt-1 text-xs text-gray-400">
                One-time. Fixed scope. No hidden extras.
              </div>

              <ul className="mt-5 flex-1 space-y-2 text-sm text-gray-200">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check className="mt-[2px] h-4 w-4 text-emerald-400" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="/start"
                className={`mt-6 inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                  plan.highlight
                    ? "bg-white text-black hover:bg-gray-100"
                    : "border border-white/20 bg-white/5 text-white hover:border-white/40 hover:bg-white/10"
                }`}
              >
                Start async
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
