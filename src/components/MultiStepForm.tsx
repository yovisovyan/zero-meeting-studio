// src/components/MultiStepForm.tsx
"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import classNames from "classnames";

type FormState = {
  name: string;
  email: string;
  service: string;
  websiteUrl: string;
  message: string;
  budget: string;
};

const defaultState: FormState = {
  name: "",
  email: "",
  service: "Landing Page ($149)",
  websiteUrl: "",
  message: "",
  budget: "",
};

const steps = ["Contact", "Project", "Details", "Review"];

export default function MultiStepForm() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<FormState>(defaultState);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function update(partial: Partial<FormState>) {
    setData((d) => ({ ...d, ...partial }));
  }

  function canNext() {
    if (step === 0) return data.name.trim() && /\S+@\S+\.\S+/.test(data.email);
    if (step === 1) return !!data.service;
    if (step === 2) return data.message.trim().length >= 10;
    return true;
  }

  async function handleSubmit() {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, subject: `New submission — ${data.service}` }),
      });

      const json = await res.json();
      if (res.ok && json.success) {
        setSent(true);
      } else {
        setError(json?.error?.message || "Failed to send. Please try again.");
      }
    } catch (err: any) {
      setError(err?.message || "Network error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      {/* Progress */}
      <div className="mb-6">
        <div className="flex items-center justify-between text-sm text-gray-500">
          {steps.map((s, i) => (
            <div key={s} className="flex-1 text-center">
              <div
                className={classNames(
                  "mx-auto w-9 h-9 rounded-full flex items-center justify-center font-semibold",
                  i <= step ? "bg-indigo-600 text-white" : "bg-gray-100 text-gray-600"
                )}
              >
                {i + 1}
              </div>
              <div className="mt-2">{s}</div>
            </div>
          ))}
        </div>

        <div className="mt-4 bg-gray-200 h-2 rounded-full overflow-hidden">
          <div
            className="h-2 bg-gradient-to-r from-indigo-500 to-cyan-400 transition-all"
            style={{ width: `${(step / (steps.length - 1)) * 100}%` }}
          />
        </div>
      </div>

      <div className="min-h-[280px]">
        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.div
              key="step-0"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
            >
              <h3 className="text-lg font-semibold mb-3">Contact details</h3>
              <div className="grid gap-4">
                <label className="flex flex-col">
                  <span className="text-sm font-medium text-gray-700">Full name</span>
                  <input
                    value={data.name}
                    onChange={(e) => update({ name: e.target.value })}
                    className="mt-2 border rounded-xl px-4 py-3"
                    placeholder="Jane Doe"
                  />
                </label>

                <label className="flex flex-col">
                  <span className="text-sm font-medium text-gray-700">Email</span>
                  <input
                    value={data.email}
                    onChange={(e) => update({ email: e.target.value })}
                    type="email"
                    className="mt-2 border rounded-xl px-4 py-3"
                    placeholder="you@example.com"
                  />
                </label>
              </div>
            </motion.div>
          )}

          {step === 1 && (
            <motion.div
              key="step-1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
            >
              <h3 className="text-lg font-semibold mb-3">What do you need?</h3>

              <div className="grid gap-4">
                <label className="flex flex-col">
                  <span className="text-sm font-medium text-gray-700">Pick a service</span>
                  <select
                    value={data.service}
                    onChange={(e) => update({ service: e.target.value })}
                    className="mt-2 border rounded-xl px-4 py-3"
                  >
                    <option>Landing Page ($149)</option>
                    <option>Business Website ($399)</option>
                    <option>Shopify Store ($499)</option>
                    <option>Branding & Logo ($299)</option>
                  </select>
                </label>

                <label className="flex flex-col">
                  <span className="text-sm font-medium text-gray-700">Your current website (optional)</span>
                  <input
                    value={data.websiteUrl}
                    onChange={(e) => update({ websiteUrl: e.target.value })}
                    className="mt-2 border rounded-xl px-4 py-3"
                    placeholder="https://example.com"
                  />
                </label>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step-2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
            >
              <h3 className="text-lg font-semibold mb-3">Project details</h3>

              <div className="grid gap-4">
                <label className="flex flex-col">
                  <span className="text-sm font-medium text-gray-700">Describe what you want</span>
                  <textarea
                    value={data.message}
                    onChange={(e) => update({ message: e.target.value })}
                    rows={6}
                    placeholder="What is your offer, who is your customer, what's the key message?"
                    className="mt-2 border rounded-xl px-4 py-3"
                  />
                </label>

                <label className="flex flex-col">
                  <span className="text-sm font-medium text-gray-700">Estimated budget (optional)</span>
                  <input
                    value={data.budget}
                    onChange={(e) => update({ budget: e.target.value })}
                    placeholder="$"
                    className="mt-2 border rounded-xl px-4 py-3"
                  />
                </label>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step-3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
            >
              <h3 className="text-lg font-semibold mb-3">Review & submit</h3>

              <div className="space-y-4 text-sm text-gray-700">
                <div>
                  <div className="font-medium">Name</div>
                  <div className="mt-1">{data.name || "—"}</div>
                </div>

                <div>
                  <div className="font-medium">Email</div>
                  <div className="mt-1">{data.email || "—"}</div>
                </div>

                <div>
                  <div className="font-medium">Service</div>
                  <div className="mt-1">{data.service}</div>
                </div>

                <div>
                  <div className="font-medium">Website</div>
                  <div className="mt-1">{data.websiteUrl || "—"}</div>
                </div>

                <div>
                  <div className="font-medium">Project details</div>
                  <div className="mt-1 whitespace-pre-wrap">{data.message || "—"}</div>
                </div>

                <div>
                  <div className="font-medium">Budget</div>
                  <div className="mt-1">{data.budget || "—"}</div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="mt-6 flex items-center justify-between">
        <button
          disabled={step === 0 || loading}
          onClick={() => setStep((s) => Math.max(0, s - 1))}
          className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 disabled:opacity-50"
        >
          Back
        </button>

        <div className="flex items-center gap-3">
          {step < steps.length - 1 ? (
            <button
              onClick={() => {
                if (!canNext()) return;
                setStep((s) => Math.min(steps.length - 1, s + 1));
              }}
              disabled={!canNext()}
              className={classNames(
                "px-6 py-3 rounded-xl font-semibold",
                canNext() ? "bg-indigo-600 text-white hover:bg-indigo-700" : "bg-gray-200 text-gray-400 cursor-not-allowed"
              )}
            >
              Next
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 text-white font-semibold hover:opacity-95"
            >
              {loading ? "Sending..." : "Submit"}
            </button>
          )}
        </div>
      </div>

      {/* Status */}
      {sent && (
        <div className="mt-6 p-4 rounded-lg bg-emerald-50 border border-emerald-100 text-emerald-800">
          Thanks — your project has been sent. We’ll email you shortly.
        </div>
      )}

      {error && (
        <div className="mt-6 p-4 rounded-lg bg-rose-50 border border-rose-100 text-rose-800">
          {error}
        </div>
      )}
    </div>
  );
}
