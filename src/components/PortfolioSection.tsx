"use client";

import { portfolio } from "@/lib/portfolio";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function PortfolioSection() {
  return (
    <section className="py-32">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-semibold mb-6">Selected Work</h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-20">
          A curated collection of projects — crafted with precision, clarity, and speed.
        </p>

        <div className="grid md:grid-cols-3 gap-12">
          {portfolio.slice(0, 3).map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
              className="bg-glass p-4 rounded-3xl border border-white/10 hover:-translate-y-1 hover:shadow-2xl transition-all"
            >
              <Link href={`/portfolio/${p.slug}`}>
                <div className="relative w-full h-60 mb-4 overflow-hidden rounded-2xl">
                  <Image
                    src={p.thumbnail}
                    alt={p.title}
                    fill
                    className="object-cover hover:scale-110 transition-all duration-700"
                  />
                </div>
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <p className="text-gray-400 text-sm mt-2">{p.tagline}</p>
              </Link>
            </motion.div>
          ))}
        </div>

        <Link
          href="/portfolio"
          className="block mt-14 text-brand-500 hover:underline"
        >
          View full portfolio →
        </Link>
      </div>
    </section>
  );
}
