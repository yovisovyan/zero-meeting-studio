"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { Send, Instagram, Linkedin, Globe, Mail } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  // ------------------------------------------------------
  // CURSOR-REACTIVE AURORA LIGHT
  // ------------------------------------------------------
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });

  const handleMouseMove = (e: any) => {
    const { clientX, clientY } = e;
    mouseX.set(clientX);
    mouseY.set(clientY);
  };

  // ------------------------------------------------------
  // NEWSLETTER SUBMIT HANDLER
  // ------------------------------------------------------
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setSent(true);
    setEmail("");

    setTimeout(() => setSent(false), 2500);
  };

  return (
    <footer
      className="relative bg-black text-white pt-32 pb-20 border-t border-white/10 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* =====================================================
          BACKGROUND AURORA
      ===================================================== */}
      <motion.div
        className="pointer-events-none absolute -top-40 left-0 w-[900px] h-[900px] bg-gradient-to-br from-brand-500/20 via-indigo-500/20 to-purple-700/10 blur-[200px]"
        style={{
          translateX: springX,
          translateY: springY,
        }}
      />

      {/* Noise texture */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.06] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* =====================================================
            NEWSLETTER — GOD TIER FIELD
        ===================================================== */}
        <div className="max-w-3xl mx-auto text-center mb-24">
          <h2 className="text-4xl font-semibold tracking-tight mb-4">
            Stay updated — no meetings required.
          </h2>

          <p className="text-white/50 text-lg mb-10">
            One email a month. Pure insights on async work, design, and conversion psychology.
          </p>

          {/* Newsletter Field Container */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="
              relative bg-white/5 border border-white/10 backdrop-blur-xl
              rounded-2xl p-2 pr-3 flex items-center gap-3
              shadow-[0_0_80px_-30px_rgba(255,255,255,0.2)]
            "
          >
            <Mail className="w-5 h-5 text-white/40 ml-2" />

            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="
                flex-1 bg-transparent border-none outline-none text-white
                text-sm placeholder-white/40 px-2 py-3
              "
            />

            <motion.button
              whileTap={{ scale: 0.92 }}
              whileHover={{ scale: 1.05 }}
              type="submit"
              className="
                bg-brand-500 hover:bg-brand-400 transition text-black
                font-semibold text-sm px-5 py-3 rounded-xl flex items-center gap-2
              "
            >
              {sent ? "Subscribed!" : "Subscribe"}
              {!sent && <Send size={16} />}
            </motion.button>
          </motion.form>

          {/* Success Message */}
          {sent && (
            <motion.p
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-brand-400 text-sm mt-4"
            >
              🎉 You're in! Welcome to the async revolution.
            </motion.p>
          )}
        </div>

        {/* =====================================================
            LINK GRID — ULTRA PREMIUM SPACING
        ===================================================== */}
        <div className="grid md:grid-cols-4 gap-14 mb-24">

          {/* Column 1 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Zero-Meeting Studio</h3>
            <p className="text-white/50 leading-relaxed text-sm">
              Premium async studio creating Apple-grade landing pages
              without calls, delays, or chaos.
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="text-white/80 font-medium mb-4">Company</h4>
            <ul className="flex flex-col gap-3 text-sm text-white/60">
              <Link href="/" className="hover:text-white">Home</Link>
              <Link href="/portfolio" className="hover:text-white">Portfolio</Link>
              <Link href="/blog" className="hover:text-white">Blog</Link>
              <Link href="/start" className="hover:text-white">Start</Link>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="text-white/80 font-medium mb-4">Resources</h4>
            <ul className="flex flex-col gap-3 text-sm text-white/60">
              <Link href="/pricing" className="hover:text-white">Pricing</Link>
              <Link href="/process" className="hover:text-white">Process</Link>
              <Link href="/faq" className="hover:text-white">FAQ</Link>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="text-white/80 font-medium mb-4">Contact</h4>
            <p className="text-white/60 text-sm">hello@zeromeeting.studio</p>
            <p className="text-white/60 text-sm mt-1">(62) 8515 6974 570</p>

            <div className="flex gap-4 mt-4">
              <motion.a whileHover={{ scale: 1.2 }} href="#" className="hover:text-white">
                <Instagram size={20} />
              </motion.a>
              <motion.a whileHover={{ scale: 1.2 }} href="#" className="hover:text-white">
                <Linkedin size={20} />
              </motion.a>
            </div>
          </div>
        </div>

        {/* =====================================================
            BOTTOM BAR — CLEANEST VERSION EVER
        ===================================================== */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/40 gap-4">
          <p>© {new Date().getFullYear()} Zero-Meeting Studio</p>

          <div className="flex items-center gap-2">
            <Globe size={14} />
            Indonesia — Serving US, EU & Asia
          </div>

          <div className="flex gap-6">
            <Link href="#" className="hover:text-white">Privacy</Link>
            <Link href="#" className="hover:text-white">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
