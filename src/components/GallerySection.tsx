import React from "react";
import Button from "./Button";

const galleryImages = [
  "/img/hero.jpg",
  "/img/hero.jpg",
  "/img/hero.jpg",
  "/img/hero.jpg",
];

export default function GallerySection() {
  return (
    <section className="py-24 bg-white mx-auto container px-12">
      <div className="grid grid-cols-12 gap-6 items-stretch">
        {/* Left - Text */}
        <div className="col-span-6 flex flex-col justify-between gap-6">
          <div>
            <span className="inline-block bg-[#f3f3f3] text-gray-500 rounded-full px-4 py-1 text-xs mb-4 font-satoshi tracking-widest uppercase">
              Gallery
            </span>
            <h2 className="font-forum text-4xl md:text-5xl font-semibold text-[#22223B] mb-4">
              Discover Our Work and Landscape Gallery
            </h2>
            <p className="text-gray-500 text-lg max-w-md">
              Explore our gallery and immerse yourself in the beauty of our
              completed projects, drawing inspiration for your own outdoor
              oasis.
            </p>
          </div>
          <div className="hidden md:block">
            <Button
              href="#"
              className="flex items-center gap-2 bg-[#f9f9f9] border border-[#e2e2e2] text-[#22223B] px-8 py-3 rounded-full text-lg font-satoshi shadow-md transition-all duration-200"
            >
              <span className="mr-2">View Gallery</span>
              <svg width="22" height="22" fill="none" viewBox="0 0 22 22">
                <circle cx="11" cy="11" r="10.5" stroke="#eb7147" />
                <path
                  d="M8 11h6m0 0l-2-2m2 2l-2 2"
                  stroke="#eb7147"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Button>
          </div>
          <div className="object-cover flex flex-row h-full w-full">
            <img
              src={galleryImages[1]}
              alt="Gallery 2"
              className="rounded-2xl object-cover"
            />
          </div>
        </div>
        {/* Center - Main Images */}
        <div className="col-span-2 gap-4 flex flex-col gap-6">
          <div className="object-cover flex flex-row h-full w-full">
            <img
              src={galleryImages[0]}
              alt="Gallery 1"
              className="rounded-2xl object-cover"
            />
          </div>

          <div className="bg-[#e8f3e8] rounded-2xl flex flex-col items-center justify-center py-8 px-4">
            <span className="text-4xl font-bold text-[#396042] font-forum">
              10
            </span>
            <span className="text-gray-500 mt-2 text-sm">Exclusive Albums</span>
          </div>
          <div className="bg-[#f6f6f6] rounded-2xl flex flex-col items-center justify-center py-8 px-4">
            <span className="text-4xl font-bold text-[#396042] font-forum">
              200+
            </span>
            <span className="text-gray-500 mt-2 text-sm">Photo Samples</span>
          </div>
        </div>
        <div className="col-span-4 flex flex-col gap-6">
          <div className="object-cover flex flex-row h-full w-full">
            <img
              src={galleryImages[2]}
              alt="Gallery 3"
              className="rounded-2xl object-cover"
            />
          </div>
          <div className="object-cover flex flex-row h-full w-full">
            <img
              src={galleryImages[3]}
              alt="Gallery 4"
              className="rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
