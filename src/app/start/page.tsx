// src/app/start/page.tsx
"use client";

import MultiStepForm from "../../components/MultiStepForm";

export default function StartPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-slate-100 text-slate-900">
      <section className="max-w-4xl mx-auto px-6 py-16">
        <header className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
            Start your project — <span className="text-indigo-600">Zero Meetings.</span>
          </h1>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Quick multi-step questionnaire to collect everything we need. Designed for business
            owners who want a smooth, meeting-free experience.
          </p>
        </header>

        <div className="bg-white rounded-3xl shadow-lg p-6 md:p-10">
          <MultiStepForm />
        </div>

        <p className="text-sm text-center text-gray-500 mt-6">
          Need help? Email <span className="font-medium">hello@yourdomain.com</span>
        </p>
      </section>
    </main>
  );
}
