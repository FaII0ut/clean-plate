import React from "react";
import Button from "./Button";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[85vh] md:min-h-[80vh] -top-32 pt-56 flex bg-black/70 overflow-hidden rounded-2xl shadow-lg mb-6 md:mb-8 lg:mb-12">
      <div className="mx-auto container px-2 sm:px-4 md:px-8 lg:px-12">
        <div
          className="absolute inset-0 z-0 bg-center bg-cover"
          style={{backgroundImage: "url('/img/newhero.heic')"}}
        />
        <div className="absolute inset-0 z-10 bg-black/50" />
        <div className="relative z-20 flex flex-col gap-3 sm:gap-5 md:gap-6 p-2 sm:p-4 md:p-8 max-w-full md:max-w-2xl ">
          <h1 className="font-forum text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-tight">
            Fuel Your Life with Nutrition
          </h1>
          <p className="text-white/90 text-base sm:text-lg md:text-2xl font-satoshi">
            Our nutrition counseling helps you make lasting, healthy changes.
            Boost energy, manage weight, and feel better with our guidance.
          </p>
          <Button href="#" className="flex items-center gap-2 mt-2 w-[160px]" variant="secondary">
            Contact us
          </Button>
        </div>
      </div>
    </section>
  );
}
