import React from "react";
import AboutHeroBlock from "../components/AboutHeroBlock";

export default function AboutPage() {
  return (
    <>
      <main className="bg-[#f9f5e9] pt-4">
        <div className="relative -top-32 bg-[#25382c] pt-12">
          <section className="w-full min-h-[40vh] md:min-h-[50vh] container mx-auto px-4 md:px-12 flex flex-col items-center justify-center text-center rounded-2xl mb-12">
            <h1 className="font-forum text-4xl md:text-6xl font-semibold text-white mb-4 mt-16 md:mt-0">
              About us
            </h1>
            <p className="text-white/90 text-sm md:text-base max-w-xl mx-auto">
              Choose the best plan for your needs. Pay per session, get a
              package, or go unlimited.
            </p>
          </section>
        </div>
        {/* About hero block section */}
        <div className="container mx-auto px-4 md:px-12 my-16">
          <AboutHeroBlock />
        </div>
      </main>
    </>
  );
}
