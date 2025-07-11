import React from "react";
import Button from "./Button";

export default function AboutCravingSection() {
  return (
    <section className="py-56 px-4 bg-[#eef1ef]">
      <div className="container md:px-12 px-4 mx-auto flex flex-col md:flex-row items-center justify-center md:gap-12">
        {/* Left image */}
        <div className="flex-shrink-0 relative md:-top-32 -top-12">
          <img
            src="/img/chef.webp"
            alt="Hero image"
            className="w-[236px] h-[366px]  object-cover rounded-full shadow-lg"
          />
        </div>
        {/* Center content */}
        <div className="flex-1 text-center ">
          <h2 className="font-forum text-3xl md:text-7xl font-semibold text-[#22223B] mb-6 leading-tight">
            At Craving, we joyfully
            <br />
            celebrate flavor and connect
            <br />
            you with the best local
            <br />
            restaurants.
          </h2>
          <p className="text-gray-500 text-base md:text-lg mb-8">
            At Craving, we joyfully celebrate flavor and connect you with the
            best local restaurants.
          </p>
          <Button href="#" variant="secondary" className="mx-auto w-[180px]">
            About Our Story
          </Button>
        </div>
        {/* Right image */}
        <div className="flex-shrink-0 relative -bottom-32 md:flex hidden">
          <img
            src="/img/hero.jpg"
            alt="Chef smiling"
            className="w-[236px] h-[366px]  object-cover rounded-full shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
