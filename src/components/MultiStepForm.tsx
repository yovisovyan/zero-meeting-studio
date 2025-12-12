"use client";

import { useEffect, useState, ChangeEvent, FormEvent, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, Info } from "lucide-react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const STORAGE_KEY = "zm-onboarding-v1";

type ProjectType = "landing-page" | "multi-page" | "shopify" | "webapp" | "other";

interface FormData {
  fullName: string;
  email: string;
  company: string;
  website: string;
  projectType: ProjectType | "";
  budget: string;
  timeline: string;
  goals: string;
  audience: string;
  style: string;
  referenceLinks: string;
  copyReady: string;
  needCopywriting: string;
  asyncTools: string;
  biggestRisk: string;
  anythingElse: string;
  heardFrom: string;

  industry: string;
  role: string;
  teamSize: string;
  brandAssets: string;

  pagesNeeded: string;
  productStatus: string;
  integrations: string;
  platformPreference: string;

  competitors: string;
  avoid: string;
  tone: string;
  brandPersonality: string;

  deliveryFormat: string;
  timezone: string;
  decisionMaker: string;
  urgency: string;
}

const INITIAL_FORM: FormData = {
  fullName: "",
  email: "",
  company: "",
  website: "",
  projectType: "",
  budget: "",
  timeline: "",
  goals: "",
  audience: "",
  style: "",
  referenceLinks: "",
  copyReady: "",
  needCopywriting: "",
  asyncTools: "",
  biggestRisk: "",
  anythingElse: "",
  heardFrom: "",

  industry: "",
  role: "",
  teamSize: "",
  brandAssets: "",

  pagesNeeded: "",
  productStatus: "",
  integrations: "",
  platformPreference: "",

  competitors: "",
  avoid: "",
  tone: "",
  brandPersonality: "",

  deliveryFormat: "",
  timezone: "",
  decisionMaker: "",
  urgency: "",
};

const steps = [
  { id: 0, label: "You & Business" },
  { id: 1, label: "Project Basics" },
  { id: 2, label: "Strategy & Style" },
  { id: 3, label: "Async & Final Notes" },
];

export default function MultiStepForm() {
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM);
  const [currentStep, setCurrentStep] = useState(0);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const [hasLoadedInitial, setHasLoadedInitial] = useState(false);
  const [showResumePrompt, setShowResumePrompt] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [lastSavedAt, setLastSavedAt] = useState<string | null>(null);

  // ------------------------------
  // Load saved progress
  // ------------------------------
  useEffect(() => {
    if (typeof window === "undefined") return;

    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed?.formData) setFormData({ ...INITIAL_FORM, ...parsed.formData });
        if (typeof parsed?.currentStep === "number") setCurrentStep(parsed.currentStep);
        setShowResumePrompt(true);
      }
    } catch (err) {
      console.error("Failed to load saved onboarding", err);
    } finally {
      setHasLoadedInitial(true);
    }
  }, []);

  // ------------------------------
  // Auto-save
  // ------------------------------
  useEffect(() => {
    if (!hasLoadedInitial || typeof window === "undefined") return;

    setIsSaving(true);
    const timeout = setTimeout(() => {
      try {
        window.localStorage.setItem(
          STORAGE_KEY,
          JSON.stringify({
            formData,
            currentStep,
            savedAt: new Date().toISOString(),
          })
        );

        setLastSavedAt(
          new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
        );
      } catch (err) {
        console.error("Failed to save onboarding form", err);
      } finally {
        setIsSaving(false);
      }
    }, 500);

    return () => clearTimeout(timeout);
  }, [formData, currentStep, hasLoadedInitial]);

  // ------------------------------
  // Handlers
  // ------------------------------
  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleProjectTypeSelect(type: ProjectType) {
    setFormData((prev) => ({ ...prev, projectType: type }));
  }

  function nextStep() {
    setCurrentStep((s) => Math.min(s + 1, steps.length - 1));
  }

  function prevStep() {
    setCurrentStep((s) => Math.max(s - 1, 0));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    try {
      await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
    } catch (err) {
      console.warn("Email send failed (non-blocking).", err);
    }

    window.localStorage.removeItem(STORAGE_KEY);
    setHasSubmitted(true);
  }

  function handleStartOver() {
    setFormData(INITIAL_FORM);
    setCurrentStep(0);
    setShowResumePrompt(false);
    window.localStorage.removeItem(STORAGE_KEY);
  }

  // ------------------------------
  // Thank you screen
  // ------------------------------
  if (hasSubmitted) {
    return <ThankYouScreen formData={formData} />;
  }

  const progress = ((currentStep + 1) / steps.length) * 100;

  // ------------------------------
  // UI
  // ------------------------------
  return (
    <div className="relative">
      {/* Resume prompt */}
      <AnimatePresence>
        {showResumePrompt && (
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -6, opacity: 0 }}
            className="mb-4 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-xs flex items-center justify-between"
          >
            <div className="flex items-center gap-2">
              <Info className="w-4 h-4 text-brand-500" />
              <span className="text-white/70">
                We found a previous session.{" "}
                <span className="text-white font-medium">Resume or start fresh</span>.
              </span>
            </div>
            <button
              type="button"
              onClick={handleStartOver}
              className="text-white/60 underline underline-offset-2 text-[11px]"
            >
              Start over
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <div className="mb-5 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-white/40">
            Step {currentStep + 1} of {steps.length}
          </p>
          <p className="text-sm text-white/60">
            Takes <span className="text-white">3–5 minutes</span>. Detail = better pricing.
          </p>
        </div>

        <div className="text-xs text-white/50 flex items-center gap-2">
          {isSaving ? (
            <>
              <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" /> Saving…
            </>
          ) : (
            <>
              <span className="w-2 h-2 rounded-full bg-emerald-400" /> Saved{" "}
              {lastSavedAt && <span className="text-white/30">· {lastSavedAt}</span>}
            </>
          )}
        </div>
      </div>

      {/* Progress */}
      <div className="mb-8">
        <div className="flex justify-between mb-2 text-[11px] uppercase tracking-[0.16em] text-white/40">
          {steps.map((step) => (
            <span key={step.id} className={step.id === currentStep ? "text-white" : ""}>
              {step.label}
            </span>
          ))}
        </div>

        <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-[#6D28D9] via-[#7C3AED] to-[#A78BFA]"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.35 }}
          />
        </div>
      </div>

      {/* Form fields */}
      <form onSubmit={handleSubmit} className="space-y-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35 }}
            className="space-y-6"
          >
            {currentStep === 0 && (
              <StepOne formData={formData} handleChange={handleChange} />
            )}

            {currentStep === 1 && (
              <StepTwo
                formData={formData}
                handleChange={handleChange}
                handleProjectTypeSelect={handleProjectTypeSelect}
              />
            )}

            {currentStep === 2 && (
              <StepThree formData={formData} handleChange={handleChange} />
            )}

            {currentStep === 3 && (
              <StepFour formData={formData} handleChange={handleChange} />
            )}
          </motion.div>
        </AnimatePresence>

        {/* Buttons */}
        <div className="pt-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-xs text-white/40 max-w-xs">
            Your progress auto-saves — you can close this anytime.
          </div>

          <div className="flex items-center gap-3">
            {currentStep > 0 && (
              <button
                type="button"
                onClick={prevStep}
                className="px-4 py-2 rounded-xl border border-white/10 text-white/70 hover:bg-white/5 text-sm"
              >
                Back
              </button>
            )}

            {currentStep < steps.length - 1 ? (
              <button
                type="button"
                onClick={nextStep}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#6D28D9] via-[#7C3AED] to-[#A78BFA] text-sm font-medium flex items-center gap-2"
              >
                Next step <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                type="submit"
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#6D28D9] via-[#7C3AED] to-[#A78BFA] text-sm font-medium flex items-center gap-2"
              >
                Submit project <Check className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}

/* ---------------------------------------------------------
   STEP COMPONENTS
--------------------------------------------------------- */

function FieldLabel({ children }: { children: React.ReactNode }) {
  return <label className="block text-sm font-medium text-white mb-1">{children}</label>;
}
function FieldDescription({ children }: { children: React.ReactNode }) {
  return <p className="text-xs text-white/40 mb-2">{children}</p>;
}

interface StepProps {
  formData: FormData;
  handleChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => void;
}

interface StepTwoProps extends StepProps {
  handleProjectTypeSelect: (type: ProjectType) => void;
}

function InputBase(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={`
        w-full rounded-2xl border px-3 py-2.5 text-sm
        bg-white/5 border-white/10 
        text-white placeholder:text-white/30
        focus:outline-none focus:ring-2 focus:ring-[#7C3AED]
      `}
    />
  );
}

function SelectBase(props: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      {...props}
      className={`
        w-full rounded-2xl border px-3 py-2.5 text-sm
        bg-white/5 border-white/10
        text-white placeholder:text-white/30
        focus:outline-none focus:ring-2 focus:ring-[#7C3AED]
      `}
    />
  );
}

function TextAreaBase(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      className={`
        w-full rounded-2xl border px-3 py-2.5 min-h-[90px] text-sm
        bg-white/5 border-white/10
        text-white placeholder:text-white/30
        focus:outline-none focus:ring-2 focus:ring-[#7C3AED]
      `}
    />
  );
}

/* STEP ONE ----------------------------------------------- */

function StepOne({ formData, handleChange }: StepProps) {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="md:col-span-2">
        <h2 className="text-xl font-semibold mb-1">Let’s start with the basics</h2>
        <p className="text-sm text-white/50">
          This helps us understand who we're building for.
        </p>
      </div>

      <div>
        <FieldLabel>Full name</FieldLabel>
        <FieldDescription>Main point of contact.</FieldDescription>
        <InputBase
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="e.g. Yovi Saputra"
        />
      </div>

      <div>
        <FieldLabel>Work email</FieldLabel>
        <FieldDescription>We'll reply here.</FieldDescription>
        <InputBase
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="you@company.com"
        />
      </div>

      <div>
        <FieldLabel>Company / brand</FieldLabel>
        <InputBase
          name="company"
          value={formData.company}
          onChange={handleChange}
          placeholder="Zero-Meeting Studio"
        />
      </div>

      <div>
        <FieldLabel>Website (optional)</FieldLabel>
        <InputBase
          name="website"
          value={formData.website}
          onChange={handleChange}
          placeholder="https://"
        />
      </div>

      <div>
        <FieldLabel>Industry</FieldLabel>
        <InputBase
          name="industry"
          value={formData.industry}
          onChange={handleChange}
          placeholder="e.g. SaaS, Ecommerce, Agency"
        />
      </div>

      <div>
        <FieldLabel>Your role</FieldLabel>
        <InputBase
          name="role"
          value={formData.role}
          onChange={handleChange}
          placeholder="Founder, Marketing Lead, PM"
        />
      </div>

      <div>
        <FieldLabel>Team size</FieldLabel>
        <InputBase
          name="teamSize"
          value={formData.teamSize}
          onChange={handleChange}
          placeholder="Solo, 2–5, 10+"
        />
      </div>

      <div className="md:col-span-2">
        <FieldLabel>Brand assets</FieldLabel>
        <TextAreaBase
          name="brandAssets"
          value={formData.brandAssets}
          onChange={handleChange}
          placeholder="Logo links, color tokens, Figma files…"
        />
      </div>
    </div>
  );
}

/* STEP TWO ----------------------------------------------- */

function StepTwo({ formData, handleChange, handleProjectTypeSelect }: StepTwoProps) {
  const projectTypes = [
    {
      id: "landing-page",
      label: "Landing page",
      desc: "Conversion-focused single page.",
    },
    {
      id: "multi-page",
      label: "Multi-page website",
      desc: "About, features, pricing, contact, etc.",
    },
    {
      id: "shopify",
      label: "Shopify store",
      desc: "Product catalog, checkout, email automation.",
    },
    {
      id: "webapp",
      label: "Web app UI",
      desc: "Dashboards, SaaS interfaces, onboarding flows.",
    },
    {
      id: "other",
      label: "Other",
      desc: "Not sure yet or custom build.",
    },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">What are we building?</h2>

      <div className="grid md:grid-cols-3 gap-4">
        {projectTypes.map((t) => {
          const active = formData.projectType === t.id;
          return (
            <button
              key={t.id}
              type="button"
              onClick={() => handleProjectTypeSelect(t.id as ProjectType)}
              className={`
                rounded-2xl border px-4 py-3 text-left text-sm
                transition-all
                ${
                  active
                    ? "border-[#A78BFA] bg-white/10 shadow-lg"
                    : "border-white/10 hover:border-white/30 hover:bg-white/5"
                }
              `}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="font-medium">{t.label}</span>
                {active && <Check className="w-4 h-4 text-[#A78BFA]" />}
              </div>
              <p className="text-xs text-white/50">{t.desc}</p>
            </button>
          );
        })}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <FieldLabel>Pages needed</FieldLabel>
          <InputBase
            name="pagesNeeded"
            value={formData.pagesNeeded}
            onChange={handleChange}
            placeholder="Home, Pricing, Blog…"
          />
        </div>

        <div>
          <FieldLabel>Product status</FieldLabel>
          <SelectBase
            name="productStatus"
            value={formData.productStatus}
            onChange={handleChange}
          >
            <option value="">Choose...</option>
            <option value="live">Live</option>
            <option value="pre">Pre-launch</option>
            <option value="proto">Prototype</option>
            <option value="not-built">Not built yet</option>
          </SelectBase>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <FieldLabel>Integrations & features</FieldLabel>
          <InputBase
            name="integrations"
            value={formData.integrations}
            onChange={handleChange}
            placeholder="Stripe, Mailchimp, GA4…"
          />
        </div>

        <div>
          <FieldLabel>Platform preference</FieldLabel>
          <SelectBase
            name="platformPreference"
            value={formData.platformPreference}
            onChange={handleChange}
          >
            <option value="">No preference</option>
            <option value="nextjs">Next.js</option>
            <option value="shopify">Shopify</option>
            <option value="webflow">Webflow</option>
          </SelectBase>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <FieldLabel>Budget (USD)</FieldLabel>
          <InputBase
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            placeholder="$1,500–$3,000"
          />
        </div>

        <div>
          <FieldLabel>Timeline</FieldLabel>
          <InputBase
            name="timeline"
            value={formData.timeline}
            onChange={handleChange}
            placeholder="2 weeks, ASAP…"
          />
        </div>
      </div>
    </div>
  );
}

/* STEP THREE ----------------------------------------------- */

function StepThree({ formData, handleChange }: StepProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Strategy & style</h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <FieldLabel>Main goal</FieldLabel>
          <TextAreaBase
            name="goals"
            value={formData.goals}
            onChange={handleChange}
            placeholder="Sell offer, book demos, validate product…"
          />
        </div>

        <div>
          <FieldLabel>Ideal audience</FieldLabel>
          <TextAreaBase
            name="audience"
            value={formData.audience}
            onChange={handleChange}
            placeholder="SaaS founders, e-comm brands…"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <FieldLabel>Visual style</FieldLabel>
          <TextAreaBase
            name="style"
            value={formData.style}
            onChange={handleChange}
            placeholder="Minimal, premium, colorful, bold…"
          />
        </div>

        <div>
          <FieldLabel>Reference links</FieldLabel>
          <TextAreaBase
            name="referenceLinks"
            value={formData.referenceLinks}
            onChange={handleChange}
            placeholder="Websites, Notion pages, Dribbble shots…"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <FieldLabel>Competitors / inspo</FieldLabel>
          <TextAreaBase
            name="competitors"
            value={formData.competitors}
            onChange={handleChange}
            placeholder="List 2–4 competitor sites…"
          />
        </div>

        <div>
          <FieldLabel>What to avoid</FieldLabel>
          <TextAreaBase
            name="avoid"
            value={formData.avoid}
            onChange={handleChange}
            placeholder="Avoid certain colors, layout styles, messaging…"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <FieldLabel>Tone of voice</FieldLabel>
          <InputBase
            name="tone"
            value={formData.tone}
            onChange={handleChange}
            placeholder="Professional, friendly, bold…"
          />
        </div>

        <div>
          <FieldLabel>Brand personality (3 words)</FieldLabel>
          <InputBase
            name="brandPersonality"
            value={formData.brandPersonality}
            onChange={handleChange}
            placeholder="Calm, premium, confident"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <FieldLabel>Copy status</FieldLabel>
          <TextAreaBase
            name="copyReady"
            value={formData.copyReady}
            onChange={handleChange}
            placeholder="Yes / Partially / Need help"
          />
        </div>

        <div>
          <FieldLabel>Need copywriting?</FieldLabel>
          <TextAreaBase
            name="needCopywriting"
            value={formData.needCopywriting}
            onChange={handleChange}
            placeholder="How much help do you need with wording?"
          />
        </div>
      </div>
    </div>
  );
}

/* STEP FOUR ----------------------------------------------- */

function StepFour({ formData, handleChange }: StepProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Async workflow & final notes</h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <FieldLabel>Preferred async communication</FieldLabel>
          <TextAreaBase
            name="asyncTools"
            value={formData.asyncTools}
            onChange={handleChange}
            placeholder="Email, Slack, WhatsApp, Loom…"
          />
        </div>

        <div>
          <FieldLabel>Biggest risk</FieldLabel>
          <TextAreaBase
            name="biggestRisk"
            value={formData.biggestRisk}
            onChange={handleChange}
            placeholder="Budget, timing, unclear scope…"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <FieldLabel>Anything else?</FieldLabel>
          <TextAreaBase
            name="anythingElse"
            value={formData.anythingElse}
            onChange={handleChange}
            placeholder="Launch dates, partners, constraints…"
          />
        </div>

        <div>
          <FieldLabel>How did you hear about us?</FieldLabel>
          <TextAreaBase
            name="heardFrom"
            value={formData.heardFrom}
            onChange={handleChange}
            placeholder="Twitter, referral, Upwork, Google…"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <FieldLabel>Delivery format</FieldLabel>
          <InputBase
            name="deliveryFormat"
            value={formData.deliveryFormat}
            onChange={handleChange}
            placeholder="Notion, Figma, GitHub…"
          />
        </div>

        <div>
          <FieldLabel>Timezone</FieldLabel>
          <InputBase
            name="timezone"
            value={formData.timezone}
            onChange={handleChange}
            placeholder="UTC+7, PST, EST…"
          />
        </div>

        <div>
          <FieldLabel>Decision-maker(s)</FieldLabel>
          <InputBase
            name="decisionMaker"
            value={formData.decisionMaker}
            onChange={handleChange}
            placeholder="Name + role"
          />
        </div>

        <div>
          <FieldLabel>Urgency</FieldLabel>
          <SelectBase name="urgency" value={formData.urgency} onChange={handleChange}>
            <option value="">Choose urgency</option>
            <option value="1">1 — Flexible</option>
            <option value="2">2 — Low</option>
            <option value="3">3 — Normal</option>
            <option value="4">4 — Fast</option>
            <option value="5">5 — Rush</option>
          </SelectBase>
        </div>
      </div>
    </div>
  );
}

/* THANK YOU SCREEN -------------------------------------------- */

function ThankYouScreen({ formData }: { formData: FormData }) {
  const pdfRef = useRef<HTMLDivElement>(null);

  async function handleDownload() {
    if (!pdfRef.current) return;

    const canvas = await html2canvas(pdfRef.current, {
      scale: 2,
      backgroundColor: "#0b0b0f",
    });

    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "px",
      format: [canvas.width, canvas.height],
    });

    pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
    pdf.save("zero-meeting-project-brief.pdf");
  }

  return (
    <>
      {/* Hidden PDF generator */}
      <div ref={pdfRef} className="fixed -left-[9999px] top-0 w-[800px] bg-[#0b0b0f] text-white p-10">
        <h1 className="text-3xl font-semibold mb-6">Zero-Meeting Studio — Project Brief</h1>
        <div className="space-y-2 text-sm">
          {Object.entries(formData).map(([key, value]) => (
            <p key={key}>
              <strong>{key.replace(/([A-Z])/g, " $1")}: </strong>
              {value || "-"}
            </p>
          ))}
        </div>
      </div>

      {/* Visible thank-you screen */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="py-10 px-4 text-center"
      >
        <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-black to-[#111827] px-6 py-12">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/10 mb-4">
            <Check className="w-7 h-7 text-emerald-400" />
          </div>

          <h2 className="text-3xl md:text-4xl font-semibold mb-3">
            Brief received. <span className="text-[#A78BFA]">You’re all set.</span>
          </h2>

          <p className="text-white/60 mb-6">
            We’ll review everything and reply to{" "}
            <span className="text-white font-medium">{formData.email}</span>{" "}
            within <strong>3 hours</strong>.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-4">
            <button
              onClick={handleDownload}
              className="px-6 py-3 bg-white text-black rounded-xl text-sm hover:bg-gray-100"
            >
              Download this brief as PDF
            </button>

            <button
              onClick={() => window.location.assign("/")}
              className="px-6 py-3 border border-white/10 text-white rounded-xl text-sm hover:bg-white/5"
            >
              Go back home
            </button>
          </div>
        </div>
      </motion.div>
    </>
  );
}
