// src/components/FAQ.tsx
"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Do we really not need any meetings?",
    a: "Yes — by design. Everything happens async through a short onboarding form, written updates, and Loom videos when helpful. No Zoom calls, no scheduling, no pressure. Most founders find this faster and more thoughtful than live meetings.",
  },
  {
    q: "How fast is delivery, really?",
    a: "Most landing pages ship in 48–72 hours after onboarding. Multi-page sites and Shopify builds typically take 4–7 days depending on scope. You’ll always get a clear timeline upfront before anything starts.",
  },
  {
    q: "What if I’m not sure about my answers?",
    a: "That’s completely fine. Short, imperfect answers are expected — clarity beats polish. We’ll help refine scope and direction asynchronously before execution begins.",
  },
  {
    q: "Who is actually doing the work?",
    a: "All projects are founder-led. No handoff to juniors, no outsourcing without context. Your brief is reviewed and executed with the same level of care you’d expect from a strategy call — just without the call.",
  },
  {
    q: "What do you need from me to start?",
    a: "You’ll fill out a guided questionnaire (no technical jargon), and optionally share any existing assets like logos, copy docs, or references. That’s it — we handle the rest.",
  },
  {
    q: "Are revisions included?",
    a: "Yes. Reasonable revisions are included to make sure the initial version feels right. Feedback stays async and focused — no endless loops, just progress.",
  },
  {
    q: "What if I don’t like the initial direction?",
    a: "You’re never locked in. If the proposed plan or first direction doesn’t feel right, you can walk away with clarity — no awkward follow-ups, no obligation.",
  },
  {
    q: "Can I hire you directly on Upwork instead?",
    a: "Absolutely. If you prefer platform buyer protection, you can work with the same process and standards via Upwork. Same work. Same async workflow.",
  },
  {
    q: "Do you handle copywriting and strategy too?",
    a: "Yes. We can help with messaging, positioning, and conversion-focused copy — either refining what you already have or writing from scratch if needed.",
  },
  {
    q: "What happens after the project is delivered?",
    a: "You receive all final files, code, and handover notes. If you want ongoing help, iteration, or future pages, we can continue async — totally optional.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="border-t border-white/5 bg-black py-24">
      <div className="mx-auto flex max-w-4xl flex-col gap-12 px-6">

        {/* Header */}
        <div className="text-center">
          <p className="uppercase tracking-widest text-xs text-white/40 mb-3">
            FAQ
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Questions, answered clearly.
          </h2>
          <p className="mt-4 text-white/60 text-sm md:text-base max-w-xl mx-auto">
            If this is your first time working async — or without meetings — this should make everything feel obvious.
          </p>
        </div>

        {/* FAQ items */}
        <div className="space-y-3">
          {faqs.map((item, index) => {
            const open = openIndex === index;

            return (
              <div
                key={item.q}
                className="
                  overflow-hidden rounded-2xl
                  border border-white/10
                  bg-white/[0.04]
                  backdrop-blur-xl
                  transition
                "
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="text-sm md:text-base font-medium text-white">
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 text-white/60 transition-transform ${open ? "rotate-180" : ""}`}
                  />
                </button>

                {open && (
                  <div className="px-5 pb-5 text-sm text-white/65 leading-relaxed">
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
