import React from "react";
import Button from "./Button";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[80vh] -top-32 pt-56  flex  bg-black/70 overflow-hidden rounded-2xl shadow-lg mb-12">
      <div className="mx-auto container px-12">
        <div
          className="absolute inset-0 z-0 bg-center bg-cover"
          style={{backgroundImage: "url('/img/hero.jpg')"}}
        />
        <div className="absolute inset-0 z-10 bg-black/50" />
        <div className="relative z-20 flex flex-col gap-6 p-8 max-w-2xl ">
          <h1 className="font-forum text-7xl font-semibold text-white leading-tight">
            Fuel Your Life with Nutrition
          </h1>
          <p className="text-white/90 text-2xl font-satoshi">
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
