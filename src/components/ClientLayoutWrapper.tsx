// src/components/ClientLayoutWrapper.tsx
"use client";

import { useSmoothScroll } from "@/lib/smoothScroll";
import Spotlight from "@/components/ui/Spotlight";
import ScrollProgressBar from "@/components/ScrollProgressBar";

export default function ClientLayoutWrapper({ children }: { children: React.ReactNode }) {
  // Activate smooth scrolling once on mount
  useSmoothScroll();

  return (
    <>
      <Spotlight />
      <ScrollProgressBar />
      {children}
    </>
  );
}
