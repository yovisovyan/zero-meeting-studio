// src/components/FAQ.tsx
"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Do we really not need any meetings?",
    a: "Correct. Everything is handled through simple async forms, Loom videos if needed, and clear written updates. No Zoom, no calendar Tetris.",
  },
  {
    q: "How fast is delivery?",
    a: "Most landing pages ship within 48–72 hours after we receive your answers and assets. Bigger sites and Shopify stores are usually 4–7 days.",
  },
  {
    q: "What do you need from me to start?",
    a: "You’ll fill out a guided questionnaire (no tech speak), share any existing logos or assets, and we’ll take it from there.",
  },
  {
    q: "Are revisions included?",
    a: "Yes. We include revisions until you’re happy with the initial launch version of your site or page.",
  },
  {
    q: "Can you also run ads or help with strategy?",
    a: "Yes, through a small network of trusted partners we can help with ad creatives, basic funnels, and ongoing optimization.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="border-t border-white/5 bg-black py-20 md:py-24">
      <div className="mx-auto flex max-w-4xl flex-col gap-10 px-6">
        <div className="text-center">
          <h2 className="text-2xl font-semibold sm:text-3xl md:text-4xl">Questions, answered fast.</h2>
          <p className="mt-3 text-sm text-gray-300 sm:text-base">
            If you’re new to async collaboration or hiring remotely, this will make everything clear.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((item, index) => {
            const open = openIndex === index;
            return (
              <div
                key={item.q}
                className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-4 py-3 text-left sm:px-5 sm:py-4"
                >
                  <span className="text-sm font-medium text-white sm:text-base">{item.q}</span>
                  <ChevronDown
                    className={`h-4 w-4 text-gray-300 transition-transform ${open ? "rotate-180" : ""}`}
                  />
                </button>
                {open && (
                  <div className="px-4 pb-4 text-sm text-gray-300 sm:px-5 sm:pb-5">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
