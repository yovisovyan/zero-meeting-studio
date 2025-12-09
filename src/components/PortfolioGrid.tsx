"use client";

import { portfolio } from "@/lib/portfolio";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function PortfolioGrid() {
  return (
    <section className="max-w-6xl mx-auto px-6">
      <h1 className="text-5xl font-bold mb-14 text-center">Our Work</h1>

      <div className="grid md:grid-cols-3 gap-12">
        {portfolio.map((p, i) => (
          <motion.div
            key={p.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <Link
              href={`/portfolio/${p.slug}`}
              className="block bg-glass p-4 rounded-3xl border border-white/10"
            >
              <div className="relative w-full h-64 rounded-2xl overflow-hidden mb-4">
                <Image src={p.thumbnail} alt={p.title} fill className="object-cover" />
              </div>

              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="text-gray-400 text-sm">{p.tagline}</p>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
