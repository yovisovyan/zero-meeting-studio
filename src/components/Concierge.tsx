"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Concierge() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-[200]">

      {/* Chat Bubble */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="w-14 h-14 rounded-full border border-white/20 bg-white/10 backdrop-blur-lg shadow-xl overflow-hidden"
        >
          <Image src="/avatar.jpg" alt="Concierge" width={56} height={56} className="rounded-full" />
        </motion.div>
      </motion.div>

      {/* Popup */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute bottom-20 right-0 w-64 p-4 bg-black/90 border border-white/10 rounded-2xl backdrop-blur-xl shadow-2xl"
        >
          <p className="text-sm text-white/70">
            Hey! I’m <span className="text-white font-medium">your personal assistant</span>.  
            If you ever get stuck, feel free to message me anytime.
          </p>
        </motion.div>
      )}
    </div>
  );
}
