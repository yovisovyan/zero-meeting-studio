import Link from "next/link";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Launch Landing Page",
    price: "$499",
    description:
      "Perfect for validating an offer, product, or idea — fast.",
    highlight: false,
    features: [
      "One high-converting landing page",
      "Conversion copy guidance & wireframe",
      "Responsive, fast, SEO-ready build",
      "Async delivery in 48–72 hours",
    ],
  },
  {
    name: "Business Website",
    price: "$1,200",
    description:
      "A complete, premium online presence for serious founders.",
    highlight: true,
    features: [
      "Up to 5 custom pages (Home, About, Services, etc.)",
      "Conversion-focused layout & UX structure",
      "Contact form + basic analytics setup",
      "Priority async support (no meetings)",
    ],
  },
  {
    name: "Shopify Store",
    price: "$1,500",
    description:
      "A clean, conversion-optimized store ready to sell.",
    highlight: false,
    features: [
      "Custom Shopify theme setup",
      "High-converting product & collection pages",
      "Essential apps & integrations configured",
      "Email capture + basic conversion setup",
    ],
  },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* HERO */}
      <section className="pt-32 pb-24 border-b border-white/5">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight">
            Simple pricing.
            <span className="block text-white/80">No calls required.</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-white/60 text-base sm:text-lg leading-relaxed">
            Pick a package, answer a focused async brief, and we handle the rest.
            Clear scope. Fixed price. Zero meetings.
          </p>
        </div>
      </section>

      {/* PRICING GRID */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 md:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-3xl border p-8 backdrop-blur-xl ${
                  plan.highlight
                    ? "border-indigo-400/60 bg-gradient-to-b from-indigo-500/20 via-indigo-500/10 to-black"
                    : "border-white/10 bg-white/[0.04]"
                }`}
              >
                {plan.highlight && (
                  <span className="absolute top-5 right-5 rounded-full bg-indigo-500 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white">
                    Most popular
                  </span>
                )}

                <h3 className="text-xl font-semibold">{plan.name}</h3>
                <p className="mt-2 text-sm text-white/65">
                  {plan.description}
                </p>

                <div className="mt-6 text-4xl font-semibold">
                  {plan.price}
                </div>
                <p className="mt-1 text-xs text-white/45">
                  One-time. Fixed scope. No hidden extras.
                </p>

                <ul className="mt-6 space-y-3 text-sm text-white/75">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-3">
                      <Check className="h-4 w-4 text-emerald-400 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/start"
                  className={`mt-8 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition ${
                    plan.highlight
                      ? "bg-white text-black hover:bg-gray-100"
                      : "border border-white/20 bg-white/5 text-white hover:border-white/40 hover:bg-white/10"
                  }`}
                >
                  Start async →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON */}
<section className="border-t border-white/5 py-24">
  <div className="mx-auto max-w-6xl px-6">
    <div className="text-center max-w-3xl mx-auto mb-16">
      <p className="uppercase tracking-widest text-xs text-white/40 mb-4">
        Why founders choose us
      </p>
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
        A calmer alternative to agencies & freelancers
      </h2>
      <p className="mt-4 text-white/60 leading-relaxed">
        Same outcomes. Less friction. Built for founders who value speed, clarity, and focus.
      </p>
    </div>

    <div className="overflow-hidden rounded-3xl border border-white/10 backdrop-blur-xl">
      <div className="grid grid-cols-4 text-sm">
        {/* Header */}
        <div className="col-span-1 bg-white/[0.03] p-5"></div>
        <div className="p-5 text-center font-medium text-white/80">Traditional Agency</div>
        <div className="p-5 text-center font-medium text-white/80">Freelancer</div>
        <div className="p-5 text-center font-semibold text-white">Zero-Meeting Studio</div>

        {/* Rows */}
        {[
          ["Meetings required", "Multiple calls", "Usually yes", "None — async by design"],
          ["Delivery speed", "Weeks or months", "Unpredictable", "48–72 hours"],
          ["Pricing clarity", "Hourly / scope creep", "Varies", "Fixed & upfront"],
          ["Who does the work", "Junior team / handoff", "One person", "Founder-led"],
          ["Process clarity", "Complex, layered", "Depends", "Simple & structured"],
          ["Founder time needed", "High", "Medium", "Minimal"],
          ["Best for", "Large orgs", "Small tasks", "Busy founders"],
        ].map(([label, agency, freelancer, zm]) => (
          <div key={label} className="contents">
            <div className="p-5 bg-white/[0.02] text-white/60">{label}</div>
            <div className="p-5 text-center text-white/50">{agency}</div>
            <div className="p-5 text-center text-white/50">{freelancer}</div>
            <div className="p-5 text-center text-emerald-300 font-medium">{zm}</div>
          </div>
        ))}
      </div>
    </div>

    <p className="mt-10 text-center text-sm text-white/45 max-w-2xl mx-auto">
      We’re not trying to replace agencies or freelancers — we’re built for a different kind of founder.
      One who values execution over meetings.
    </p>
  </div>
</section>


      {/* FOOTER CTA */}
      <section className="border-t border-white/5 py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Start without meetings.
            <span className="block text-white/70">Leave with clarity.</span>
          </h2>

          <p className="mt-6 text-white/60 max-w-2xl mx-auto leading-relaxed">
            A short async brief replaces discovery calls.
            You’ll receive a clear plan, scope, and price — with zero pressure to proceed.
          </p>

          <div className="mt-10 flex justify-center">
            <Link
              href="/start"
              className="inline-flex items-center justify-center rounded-2xl bg-white px-8 py-4 text-base font-semibold text-black hover:bg-gray-100 transition"
            >
              Start your project →
            </Link>
          </div>

          <p className="mt-4 text-xs text-white/40">
            Takes ~3–5 minutes · Founder-reviewed · No obligation
          </p>
        </div>
      </section>
    </main>
  );
}
