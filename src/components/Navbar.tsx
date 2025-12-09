"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastY, setLastY] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Start", href: "/start" },
  ];

  const [badge, setBadge] = useState<string | null>(null);

useEffect(() => {
  const hour = new Date().getHours();

  if (hour >= 9 && hour <= 21) {
    setBadge("We reply in under 3 hours");
  } else {
    setBadge("We reply first thing in the morning");
  }
}, []);


  // -------------------------------------
  // SCROLL BEHAVIOR (hide/reveal + blur)
  // -------------------------------------
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setIsScrolled(y > 20);

      if (y > lastY && y > 80) setHidden(true);
      else setHidden(false);

      setLastY(y);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastY]);

  // -------------------------------------
  // REALTIME BADGE LOGIC ("Reply under 3 hours")
  // -------------------------------------
  const getBadge = () => {
    const now = new Date().getHours();
    if (now >= 9 && now <= 21) return "We reply in under 3 hours";
    return "We reply first thing in the morning";
  };


  return (
    <>
      {/* ------------------------------------- */}
      {/* NAVBAR */}
      {/* ------------------------------------- */}
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: hidden ? -80 : 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 140, damping: 20 }}
        className={`
          fixed top-0 left-0 w-full z-50 transition-all duration-300 
          backdrop-blur-xl
          ${isScrolled ? "bg-white/5 border-b border-white/10 shadow-xl" : "bg-transparent border-transparent"}
        `}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

          {/* ------------------------------------- */}
          {/* 3D LOGO HOVER TILT */}
          {/* ------------------------------------- */}
          <motion.div
            whileHover={{ rotateX: 8, rotateY: -8, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="cursor-pointer"
          >
            <Link href="/" className="font-semibold text-[1.15rem] tracking-tight">
              Zero-Meeting Studio
            </Link>
          </motion.div>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <motion.div
                  key={item.href}
                  whileHover={{ scale: 1.08, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="flex flex-col items-center"
                >
                  <Link
                    href={item.href}
                    className={`
                      text-sm tracking-wide transition 
                      ${isActive ? "text-white" : "opacity-70 hover:opacity-100"}
                    `}
                  >
                    {item.label}
                  </Link>

                  {/* Active underline */}
                  {isActive && (
                    <motion.div
                      layoutId="underline"
                      className="h-[2px] w-4 bg-white rounded-full mt-1"
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    />
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* RIGHT SECTION (BADGE + CTA) */} 
          <div className="hidden md:flex items-center gap-6">
            {badge && (
  <motion.p
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="text-xs text-white/60"
  >
    {badge}
  </motion.p>
)}

            <Link
              href="/start"
              className="
                px-4 py-2 text-sm rounded-xl 
                bg-white text-black hover:bg-gray-200 transition font-medium
              "
            >
              Start a Project →
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden"
            onClick={() => setMobileOpen(true)}
          >
            <Menu size={22} />
          </button>
        </div>
      </motion.nav>


      {/* ------------------------------------- */}
      {/* MOBILE DRAWER MENU */}
      {/* ------------------------------------- */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
              onClick={() => setMobileOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 120, damping: 22 }}
              className="fixed right-0 top-0 h-full w-72 bg-black/90 backdrop-blur-xl border-l border-white/10 p-8 z-[70]"
            >
              <div className="flex justify-between items-center mb-10">
                <h3 className="text-lg font-semibold">Menu</h3>
                <button onClick={() => setMobileOpen(false)}>
                  <X size={24} />
                </button>
              </div>

              <div className="flex flex-col gap-6">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-lg opacity-70 hover:opacity-100 transition"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              {/* Divider */}
              <div className="h-px bg-white/10 my-8" />

              {/* Contact */}
              <p className="text-sm opacity-70 mb-3">Contact</p>
              <p className="text-white text-lg">(62) 8515 6974 570</p>

              {/* CTA */}
              <Link
                href="/start"
                className="block mt-8 px-4 py-3 rounded-xl bg-white text-black text-center font-medium hover:bg-gray-200 transition"
              >
                Start a Project →
              </Link>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
