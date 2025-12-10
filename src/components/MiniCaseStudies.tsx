"use client";

import { motion } from "framer-motion";

const cases = [
  {
    title: "SaaS landing page",
    subtitle: "Higher signup conversion",
    client: "Bootstrapped SaaS founder",
    bullets: [
      "Clarified positioning and primary CTA",
      "Async feedback via Notion & Loom",
      "Improved trial signup flow",
    ],
    result: "+38% signup conversion",
  },
  {
    title: "Marketing website",
    subtitle: "Cleaner brand perception",
    client: "Early-stage startup",
    bullets: [
      "Apple-level minimal UI system",
      "Messaging simplified for non-technical users",
      "Delivered without calls in <72 hours",
    ],
    result: "Launched in 3 days",
  },
  {
    title: "Shopify storefront",
    subtitle: "Conversion-focused UX",
    client: "E-commerce brand",
    bullets: [
      "Simplified product & checkout flow",
      "Improved mobile hierarchy",
      "Rapid async iteration cycles",
    ],
    result: "+22% checkout completion",
  },
];

export default function MiniCaseStudies() {
  return (
    <section className="relative py-28 bg-black text-white">

      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <p className="uppercase tracking-widest text-xs text-white/40 mb-4">
            Case snapshots
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
            Built async.{" "}
            <span className="bg-gradient-to-r from-purple-400 to-sky-400 bg-clip-text text-transparent">
              Shipped fast.
            </span>
          </h2>

          <p className="text-white/55 text-lg">
            Small, real examples of how async delivery turns clarity
            into results — without meetings.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="
                relative flex flex-col
                rounded-3xl p-7
                bg-white/[0.04]
                border border-white/10
                backdrop-blur-xl
                hover:border-white/20 transition
              "
            >
              {/* Result pill */}
              <div className="
                mb-6 inline-flex w-fit
                px-3 py-1 rounded-full
                text-xs font-medium
                bg-white/10 text-white/80
                border border-white/10
              ">
                {item.result}
              </div>

              {/* Title */}
              <h3 className="text-lg font-medium">
                {item.title}
              </h3>
              <p className="text-sm text-white/65 mb-1">
                {item.subtitle}
              </p>

              <p className="text-xs text-white/40 mb-5">
                {item.client}
              </p>

              {/* Bullets */}
              <ul className="space-y-3 text-sm text-white/65 mt-auto">
                {item.bullets.map((b) => (
                  <li key={b} className="flex gap-3">
                    <span className="text-purple-400 leading-none">•</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
