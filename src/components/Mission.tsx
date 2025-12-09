"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Mission() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0.2 1", "1 0"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.92, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);

  return (
    <section ref={ref} className="w-full py-40 px-6 relative overflow-hidden">
      
      {/* BACKGROUND LIGHT BEAM */}
      <motion.div
        style={{ opacity }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[900px] h-[900px] bg-blue-500/20 blur-[200px]" />
      </motion.div>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10">

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-6xl font-bold mb-8">Mission</h2>

          <p className="text-gray-300 text-xl leading-relaxed mb-6">
            Make world-class execution reachable for small teams. Traditional agencies create friction —
            long calls, layered management, complex scopes.
          </p>

          <p className="text-gray-400 text-lg leading-relaxed">
            Zero-Meeting Studio flips that. We protect <span className="text-white font-medium">your time</span>
            with a streamlined async workflow that delivers Silicon-Valley-grade work at a pace
            founders love.
          </p>
        </motion.div>

        {/* FLOATING GLASS PANEL */}
        <motion.div
          style={{ scale }}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 150, damping: 14 }}
          className="w-full h-[380px] rounded-3xl bg-white/5 border border-white/10 shadow-2xl backdrop-blur-xl"
        />
      </div>
    </section>
  );
}
