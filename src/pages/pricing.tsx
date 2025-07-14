import PricingSection from "@/components/PricingSection";
import HowItWorksStep from "@/components/HowItWorksStep";
import React from "react";

export default function PricingPage() {
  return (
    <>
      <main className="bg-[#f9f5e9] pt-4">
        <div className="relative -top-32 bg-[#25382c] pt-12">
          <section className="w-full min-h-[40vh] md:min-h-[50vh] container mx-auto px-4 md:px-12 flex flex-col items-center justify-center text-center rounded-2xl mb-12">
            <h1 className="font-forum text-4xl md:text-6xl font-semibold text-white mb-4 mt-16 md:mt-0">
              How it works
            </h1>
            <p className="text-white/90 text-sm md:text-base max-w-xl mx-auto">
              Choose the best plan for your needs. Pay per session, get a
              package, or go unlimited.
            </p>
          </section>
        </div>
      </main>
      <HowItWorksStep />

      <div className="flex items-center justify-center relative">
        <div className="h-32 bg-[#f9f5e9] w-screen absolute -top-32" />
        <PricingSection />
      </div>
    </>
  );
}
