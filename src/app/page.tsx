// src/app/page.tsx

import Hero from "@/components/Hero";
import Mockup from "@/components/Mockup";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import BlogTeaser from "@/components/BlogTeaser";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CompanyProfile from "@/components/CompanyProfile";
import Mission from "@/components/Mission";
import Team from "@/components/Team";
import PortfolioSection from "@/components/PortfolioSection";
import UpworkProof from "@/components/UpworkProof";
import RiskReversal from "@/components/RiskReversal";
import AsyncTimeline from "@/components/AsyncTimeline";
import MiniCaseStudies from "@/components/MiniCaseStudies";
import FounderPromise from "@/components/FounderPromise";
import FinalCTA from "@/components/FinalCTA";


export default function Page() {
  return (
    <main className="min-h-screen w-full overflow-hidden bg-black text-white">
      <Hero />
      <Mockup />
      <Features />
      <AsyncTimeline />
      <RiskReversal />
      <MiniCaseStudies />
      <UpworkProof />
      <Testimonials />
      <Pricing />
      <FounderPromise />
      <FAQ />
      <PortfolioSection />
      <BlogTeaser />
      <CompanyProfile />
      <Mission />
      <Team />
      <FinalCTA />
    </main>
  );
}

