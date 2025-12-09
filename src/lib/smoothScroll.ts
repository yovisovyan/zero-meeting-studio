// src/lib/smoothScroll.ts
"use client";

import { useEffect } from "react";

export function useSmoothScroll() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const html = document.documentElement;
    const body = document.body;

    const prevHtmlScroll = html.style.scrollBehavior;
    const prevBodyScroll = body.style.scrollBehavior;

    html.style.scrollBehavior = "smooth";
    body.style.scrollBehavior = "smooth";

    return () => {
      html.style.scrollBehavior = prevHtmlScroll;
      body.style.scrollBehavior = prevBodyScroll;
    };
  }, []);
}
