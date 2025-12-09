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
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main className="min-h-screen w-full overflow-hidden bg-black text-white">
      <Hero />
      <Mockup />
      <Features />
      <Testimonials />
      <BlogTeaser />
      <Pricing />
      <FAQ />
      <CompanyProfile />
      <Mission />
      <Team />
      <PortfolioSection />
    </main>
  );
}

