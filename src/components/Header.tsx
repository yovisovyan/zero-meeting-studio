"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowRight } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Zero-Meeting Studio logo"
            width={32}
            height={32}
            priority
          />
          <span className="hidden sm:block text-sm font-semibold tracking-tight text-white">
            Zero-Meeting Studio
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link href="/portfolio" className="text-sm text-white/70 hover:text-white transition">
            Work
          </Link>
          <Link href="/pricing" className="text-sm text-white/70 hover:text-white transition">
            Pricing
          </Link>
          <Link href="/process" className="text-sm text-white/70 hover:text-white transition">
            Process
          </Link>
          <Link href="/blog" className="text-sm text-white/70 hover:text-white transition">
            Blog
          </Link>

          <Link
            href="/start"
            className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-gray-100 transition"
          >
            Start async
            <ArrowRight className="h-4 w-4" />
          </Link>
        </nav>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white/80 hover:text-white"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-black">
          <nav className="flex flex-col gap-4 px-6 py-6">
            <Link href="/portfolio" onClick={() => setOpen(false)}>Work</Link>
            <Link href="/pricing" onClick={() => setOpen(false)}>Pricing</Link>
            <Link href="/process" onClick={() => setOpen(false)}>Process</Link>
            <Link href="/blog" onClick={() => setOpen(false)}>Blog</Link>

            <Link
              href="/start"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-black"
            >
              Start async
              <ArrowRight className="h-4 w-4" />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
