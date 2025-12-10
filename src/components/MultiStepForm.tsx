"use client";

import { useEffect, useState, ChangeEvent, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, Info } from "lucide-react";
import { useRef } from "react";
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


  const formRef = useRef<HTMLDivElement>(null);

  // ---- LOAD FROM LOCAL STORAGE ONCE ----
  useEffect(() => {
    if (typeof window === "undefined") return;

    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed?.formData) {
          setFormData(parsed.formData);
        }
        if (typeof parsed?.currentStep === "number") {
          setCurrentStep(parsed.currentStep);
        }
        setShowResumePrompt(true);
      }
    } catch (err) {
      console.error("Failed to load saved onboarding", err);
    } finally {
      setHasLoadedInitial(true);
    }
  }, []);

  // ---- AUTO-SAVE WHEN FORM CHANGES ----
  useEffect(() => {
    if (!hasLoadedInitial) return;
    if (typeof window === "undefined") return;

    setIsSaving(true);
    const timeout = setTimeout(() => {
      try {
        const payload = {
          formData,
          currentStep,
          savedAt: new Date().toISOString(),
        };
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
        setLastSavedAt(
          new Date().toLocaleTimeString(undefined, { hour: "2-digit", minute: "2-digit" })
        );
      } catch (err) {
        console.error("Failed to save onboarding form", err);
      } finally {
        setIsSaving(false);
      }
    }, 500);

    return () => clearTimeout(timeout);
  }, [formData, currentStep, hasLoadedInitial]);

  // ---- HANDLERS ----
  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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

    // Optional: send to your /api/send endpoint
    try {
      fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      }).catch(() => {
        // fail silently – not critical for UX
      });
    } catch {
      // ignore
    }

    if (typeof window !== "undefined") {
      window.localStorage.removeItem(STORAGE_KEY);
    }

    setHasSubmitted(true);
  }

  function handleStartOver() {
    setFormData(INITIAL_FORM);
    setCurrentStep(0);
    setShowResumePrompt(false);
    if (typeof window !== "undefined") {
      window.localStorage.removeItem(STORAGE_KEY);
    }
  }

  // ---- THANK YOU SCREEN ----
  if (hasSubmitted) {
    return (
      <ThankYouScreen
        formData={formData}
      />
    );
  }

  const progress = ((currentStep + 1) / steps.length) * 100;

  return (
    <div className="relative">
      {/* Resume bar */}
      <AnimatePresence>
        {showResumePrompt && (
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -6, opacity: 0 }}
            className="mb-4 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-xs flex items-center justify-between gap-3"
          >
            <div className="flex items-center gap-2">
              <Info className="w-4 h-4 text-brand-500" />
              <span className="text-white/70">
                We found a previous session. You can{" "}
                <span className="text-white font-medium">resume where you left off</span> or{" "}
                <button
                  type="button"
                  onClick={handleStartOver}
                  className="underline underline-offset-2 text-white/80"
                >
                  start fresh
                </button>
                .
              </span>
            </div>
            <button
              type="button"
              className="text-white/50 hover:text-white text-[11px]"
              onClick={() => setShowResumePrompt(false)}
            >
              Dismiss
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header row: Step & status */}
      <div className="mb-5 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-white/40 mb-1">
            Step {currentStep + 1} of {steps.length}
          </p>
          <p className="text-sm text-white/60">
            Takes about <span className="text-white">3–5 minutes.</span>  
            The more detail you share, the better we can price & scope.
          </p>
        </div>

        <div className="flex items-center gap-3 text-xs text-white/50">
          {isSaving ? (
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
              Saving…
            </span>
          ) : (
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              Saved
              {lastSavedAt && <span className="text-white/30">· {lastSavedAt}</span>}
            </span>
          )}
        </div>
      </div>

      {/* Progress bar */}
      <div className="mb-8">
        <div className="flex justify-between mb-2 text-[11px] uppercase tracking-[0.16em] text-white/40">
          {steps.map((step) => (
            <span key={step.id} className={step.id === currentStep ? "text-white" : ""}>
              {step.label}
            </span>
          ))}
        </div>
        <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-[#6D28D9] via-[#7C3AED] to-[#A78BFA]"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
        </div>
      </div>

      {/* FORM */}
      <form onSubmit={handleSubmit} className="space-y-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
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

        {/* Footer buttons */}
        <div className="pt-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-xs text-white/40 max-w-xs">
            You can stop anytime — your answers are{" "}
            <span className="text-white">auto-saved in your browser.</span>
          </div>

          <div className="flex items-center gap-3">
            {currentStep > 0 && (
              <button
                type="button"
                onClick={prevStep}
                className="px-4 py-2 rounded-xl border border-white/10 text-sm text-white/80 hover:bg-white/5 transition"
              >
                Back
              </button>
            )}

            {currentStep < steps.length - 1 ? (
              <button
                type="button"
                onClick={nextStep}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#6D28D9] via-[#7C3AED] to-[#A78BFA] text-sm font-medium flex items-center gap-2 shadow-lg shadow-purple-900/30 hover:shadow-purple-800/40 transition"
              >
                Next step
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                type="submit"
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#6D28D9] via-[#7C3AED] to-[#A78BFA] text-sm font-medium flex items-center gap-2 shadow-lg shadow-purple-900/30 hover:shadow-purple-800/40 transition"
              >
                Submit project
                <Check className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </form>

      {/* Concierge note */}
      <div className="mt-6 flex items-center gap-3 text-xs text-white/50">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#6D28D9] to-[#A78BFA] flex items-center justify-center text-[13px] font-semibold">
          Z
        </div>
        <p>
          <span className="text-white">Concierge tip:</span> If you’re not sure yet, just give
          your best guess. We’ll refine details together async.
        </p>
      </div>
    </div>
  );
}

/* -------------------- STEP COMPONENTS -------------------- */

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
        bg-white/[0.02] border-white/10 
        text-white placeholder:text-white/30
        focus:outline-none focus:ring-2 focus:ring-[#7C3AED] focus:border-transparent
        ${props.className || ""}
      `}
    />
  );
}

function TextAreaBase(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      className={`
        w-full rounded-2xl border px-3 py-2.5 text-sm min-h-[90px]
        bg-white/[0.02] border-white/10 
        text-white placeholder:text-white/30
        focus:outline-none focus:ring-2 focus:ring-[#7C3AED] focus:border-transparent
        ${props.className || ""}
      `}
    />
  );
}

function StepOne({ formData, handleChange }: StepProps) {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="md:col-span-2">
        <h2 className="text-xl font-semibold mb-1">Let’s start with the basics</h2>
        <p className="text-sm text-white/50">
          This helps us know who we’re working with and where your brand is today.
        </p>
      </div>

      <div>
        <FieldLabel>Full name</FieldLabel>
        <FieldDescription>Who will be our main point of contact?</FieldDescription>
        <InputBase
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="e.g. Yovi Saputra"
          autoComplete="name"
        />
      </div>

      <div>
        <FieldLabel>Work email</FieldLabel>
        <FieldDescription>We’ll reply and share your proposal here.</FieldDescription>
        <InputBase
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="you@company.com"
          autoComplete="email"
        />
      </div>

      <div>
        <FieldLabel>Company / brand name</FieldLabel>
        <FieldDescription>The name that should appear on the site.</FieldDescription>
        <InputBase
          name="company"
          value={formData.company}
          onChange={handleChange}
          placeholder="e.g. Zero-Meeting Studio"
        />
      </div>

      <div>
        <FieldLabel>Existing website (if any)</FieldLabel>
        <FieldDescription>Feel free to paste a placeholder or Notion doc too.</FieldDescription>
        <InputBase
          name="website"
          value={formData.website}
          onChange={handleChange}
          placeholder="https://"
        />
      </div>
    </div>
  );
}

function StepTwo({ formData, handleChange, handleProjectTypeSelect }: StepTwoProps) {
  const projectTypes: { id: ProjectType; label: string; desc: string }[] = [
    { id: "landing-page", label: "Landing page", desc: "Single page, high-conversion launch." },
    {
      id: "multi-page",
      label: "Multi-page site",
      desc: "About, features, pricing, contact — full website.",
    },
    {
      id: "shopify",
      label: "Shopify store",
      desc: "Product-focused store with clean UX.",
    },
    {
      id: "webapp",
      label: "Web app UI",
      desc: "SaaS dashboards or app-like experience.",
    },
    {
      id: "other",
      label: "Other",
      desc: "Not sure yet or something more custom.",
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold mb-1">What are we building together?</h2>
        <p className="text-sm text-white/50">
          This helps us scope layout, content, and technical needs.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {projectTypes.map((type) => {
          const selected = formData.projectType === type.id;
          return (
            <button
              key={type.id}
              type="button"
              onClick={() => handleProjectTypeSelect(type.id)}
              className={`
                text-left rounded-2xl border px-4 py-3 text-sm
                transition-all backdrop-blur-xl
                ${
                  selected
                    ? "border-[#A78BFA] bg-gradient-to-br from-[#6D28D9]/40 via-[#7C3AED]/30 to-[#A78BFA]/20 shadow-lg shadow-purple-900/40"
                    : "border-white/10 bg-white/[0.02] hover:border-white/30 hover:bg-white/[0.04]"
                }
              `}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="font-medium">{type.label}</span>
                {selected && <Check className="w-4 h-4 text-[#A78BFA]" />}
              </div>
              <p className="text-xs text-white/50">{type.desc}</p>
            </button>
          );
        })}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <FieldLabel>Rough budget (USD)</FieldLabel>
          <FieldDescription>
            This doesn’t lock you in — it just guides what’s realistic.
          </FieldDescription>
          <InputBase
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            placeholder="e.g. $1,500–$3,000 or a number"
          />
        </div>

        <div>
          <FieldLabel>Ideal timeline</FieldLabel>
          <FieldDescription>When would you love this to be live?</FieldDescription>
          <InputBase
            name="timeline"
            value={formData.timeline}
            onChange={handleChange}
            placeholder="e.g. 2 weeks, before launch, ASAP"
          />
        </div>
      </div>
    </div>
  );
}

function StepThree({ formData, handleChange }: StepProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold mb-1">Strategy & style</h2>
        <p className="text-sm text-white/50">
          Here’s where we make sure your site actually moves the needle — not just looks pretty.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <FieldLabel>Main goal of this project</FieldLabel>
          <FieldDescription>
            Be specific — e.g. “book more calls”, “grow newsletter”, “sell a specific offer”.
          </FieldDescription>
          <TextAreaBase
            name="goals"
            value={formData.goals}
            onChange={handleChange}
            placeholder="What does “success” look like 30 days after launch?"
          />
        </div>

        <div>
          <FieldLabel>Who is your ideal customer?</FieldLabel>
          <FieldDescription>
            Short description of who you’d love to attract with this site.
          </FieldDescription>
          <TextAreaBase
            name="audience"
            value={formData.audience}
            onChange={handleChange}
            placeholder="e.g. bootstrapped SaaS founders, e-commerce brands, local service business…"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <FieldLabel>Visual style</FieldLabel>
          <FieldDescription>
            Keywords or mood — e.g. “Apple-level minimal”, “bold & colorful”, “warm & friendly”.
          </FieldDescription>
          <TextAreaBase
            name="style"
            value={formData.style}
            onChange={handleChange}
            placeholder="What should this feel like when someone lands on it?"
          />
        </div>

        <div>
          <FieldLabel>Reference links (optional)</FieldLabel>
          <FieldDescription>
            Paste any sites you like, your brand doc, or anything inspiring.
          </FieldDescription>
          <TextAreaBase
            name="referenceLinks"
            value={formData.referenceLinks}
            onChange={handleChange}
            placeholder="https://example.com, Notion links, Dribbble shots..."
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <FieldLabel>Do you already have copy (text)?</FieldLabel>
          <TextAreaBase
            name="copyReady"
            value={formData.copyReady}
            onChange={handleChange}
            placeholder="e.g. “Yes, in a doc”, “Partially”, or “Need help from scratch”."
          />
        </div>

        <div>
          <FieldLabel>Do you want help with copywriting?</FieldLabel>
          <TextAreaBase
            name="needCopywriting"
            value={formData.needCopywriting}
            onChange={handleChange}
            placeholder="Tell us how hands-on you want us to be with the words."
          />
        </div>
      </div>
    </div>
  );
}

function StepFour({ formData, handleChange }: StepProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold mb-1">Async workflow & final notes</h2>
        <p className="text-sm text-white/50">
          We run everything async — no calls required. This helps us plug into how you already work.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <FieldLabel>How do you prefer async communication?</FieldLabel>
          <FieldDescription>
            e.g. email, Slack, WhatsApp, Notion comments, Loom videos.
          </FieldDescription>
          <TextAreaBase
            name="asyncTools"
            value={formData.asyncTools}
            onChange={handleChange}
            placeholder="Where do you live online during the day?"
          />
        </div>

        <div>
          <FieldLabel>Biggest risk or concern</FieldLabel>
          <FieldDescription>
            Be honest — budget, timing, perfectionism, previous bad agency experience, etc.
          </FieldDescription>
          <TextAreaBase
            name="biggestRisk"
            value={formData.biggestRisk}
            onChange={handleChange}
            placeholder="What would make this feel like a “miss” if we’re not careful?"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <FieldLabel>Anything else we should know?</FieldLabel>
          <FieldDescription>
            Offers, constraints, launch events, partners — anything that affects this project.
          </FieldDescription>
          <TextAreaBase
            name="anythingElse"
            value={formData.anythingElse}
            onChange={handleChange}
            placeholder="Drop any extra context, thoughts, or requests."
          />
        </div>

        <div>
          <FieldLabel>How did you hear about Zero-Meeting Studio?</FieldLabel>
          <FieldDescription>Helps us know what’s working on our side.</FieldDescription>
          <TextAreaBase
            name="heardFrom"
            value={formData.heardFrom}
            onChange={handleChange}
            placeholder="e.g. Twitter, referral, Upwork, Google, Newsletter…"
          />
        </div>
      </div>
    </div>
  );
}

/* -------------------- THANK YOU SCREEN -------------------- */

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
      {/* ================= PDF CONTENT (HIDDEN) ================= */}
      <div
        ref={pdfRef}
        className="fixed -left-[9999px] top-0 w-[800px] bg-[#0b0b0f] text-white p-10"
      >
        <h1 className="text-3xl font-semibold mb-6">
          Zero-Meeting Studio — Project Brief
        </h1>

        <div className="space-y-3 text-sm">
          <p><strong>Name:</strong> {formData.fullName}</p>
          <p><strong>Email:</strong> {formData.email}</p>
          <p><strong>Company:</strong> {formData.company}</p>
          <p><strong>Website:</strong> {formData.website}</p>
          <p><strong>Project Type:</strong> {formData.projectType}</p>
          <p><strong>Budget:</strong> {formData.budget}</p>
          <p><strong>Timeline:</strong> {formData.timeline}</p>
          <p><strong>Goals:</strong> {formData.goals}</p>
          <p><strong>Audience:</strong> {formData.audience}</p>
          <p><strong>Style:</strong> {formData.style}</p>
          <p><strong>References:</strong> {formData.referenceLinks}</p>
          <p><strong>Copy Ready:</strong> {formData.copyReady}</p>
          <p><strong>Copywriting:</strong> {formData.needCopywriting}</p>
          <p><strong>Async Tools:</strong> {formData.asyncTools}</p>
          <p><strong>Risks:</strong> {formData.biggestRisk}</p>
          <p><strong>Notes:</strong> {formData.anythingElse}</p>
          <p><strong>Heard From:</strong> {formData.heardFrom}</p>
        </div>

        <p className="mt-10 text-xs opacity-50">
          Generated by Zero-Meeting Studio · zeromeeting.studio
        </p>
      </div>

      {/* ================= VISIBLE UI ================= */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="py-10 px-4 text-center"
      >
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-black via-black/90 to-[#111827] px-6 py-12 md:px-10 md:py-16">

          {/* Confetti glow */}
          <div className="pointer-events-none absolute inset-0 opacity-30">
            <div className="absolute top-0 left-10 w-40 h-40 bg-purple-500 blur-3xl" />
            <div className="absolute bottom-0 right-10 w-32 h-32 bg-indigo-500 blur-3xl" />
          </div>

          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/10 mb-4">
              <Check className="w-7 h-7 text-emerald-400" />
            </div>

            <h2 className="text-3xl md:text-4xl font-semibold mb-3">
              Brief received.
              <span className="text-[#A78BFA]"> You’re all set.</span>
            </h2>

            <p className="text-white/60 mb-6">
              We’ll review everything and reply to{" "}
              <span className="text-white font-medium">
                {formData.email || "your inbox"}
              </span>{" "}
              within <strong>3 hours</strong>.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <button
                onClick={handleDownload}
                className="px-6 py-3 rounded-xl bg-white text-black text-sm font-medium hover:bg-gray-100 transition"
              >
                Download this brief as PDF
              </button>

              <p className="text-xs text-white/40 max-w-sm">
                Save this summary for internal review or sharing with your team.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
