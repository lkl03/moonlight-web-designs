import * as React from "react";
import { HeroSection } from "./components/HeroSection";
import { FirstSection } from "./components/FirstSection";
import { ProcessSection } from "./components/ProcessSection";
import { PortfolioSection } from "./components/PortfolioSection";
import { OfferingSection } from "./components/OfferingSection";
import { CTASection } from "./components/CTASection";
import { PricingSection } from "./components/PricingSection";
import Footer from "./components/Footer";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen bg-neutral-50">
      <HeroSection />
      <FirstSection />
      <ProcessSection />
      <PortfolioSection />
      <OfferingSection />
      <CTASection />
      <PricingSection />
      <CTASection />
      <Footer />
    </div>
  );
}