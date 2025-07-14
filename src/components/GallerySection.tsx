import React from "react";
import Image from "next/image";
import Button from "./Button";

const galleryImages = [
  "/img/gallary.heic",
  "/img/gallary1.jpg",
  "/img/gallary2.webp",
  "/img/gallary.heic",
];

export default function GallerySection() {
  return (
    <section className="py-10 md:py-16 lg:py-24 bg-white mx-auto container px-2 sm:px-4 md:px-8 lg:px-12 max-h-50vh">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-4 md:gap-6 items-stretch">
        {/* Left - Text */}
        <div className="sm:col-span-2 md:col-span-6 flex flex-col justify-between gap-4 md:gap-6">
          <div>
            <span className="inline-block bg-[#f3f3f3] text-gray-500 rounded-full px-4 py-1 text-xs mb-4 font-satoshi tracking-widest uppercase">
              Gallery
            </span>
            <h2 className="font-forum text-4xl md:text-5xl font-semibold text-[#22223B] mb-3 md:mb-4">
              Discover Our Work and Landscape Gallery
            </h2>
            <p className="text-gray-500 text-sm md:text-base max-w-md">
              Explore our gallery and immerse yourself in the beauty of our
              completed projects, drawing inspiration for your own outdoor
              oasis.
            </p>
          </div>
          <div className="hidden md:block">
            <Button
              href="#"
              className="flex items-center gap-2 border-2 border-[#eb7147] text-[#eb7147] bg-white px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full text-sm sm:text-base md:text-lg font-satoshi shadow-md transition-all duration-200"
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
            <Image
              src={galleryImages[1]}
              alt="Gallery image 2"
              className="rounded-2xl w-full h-52 object-cover"
              width={400}
              height={208}
              priority={false}
            />
          </div>
        </div>
        {/* Center - Main Images */}
        <div className="sm:col-span-2 md:col-span-2 flex flex-col gap-3 sm:gap-4 md:gap-6">
          <div className="object-cover flex flex-row h-full w-full">
            <Image
              src={galleryImages[0]}
              alt="Gallery image 1"
              className="rounded-2xl w-full h-52 object-cover"
              width={400}
              height={208}
              priority={true}
            />
          </div>

          <div className="bg-[#e8f3e8] rounded-2xl flex flex-col items-center justify-center py-4 sm:py-6 md:py-8 px-2 sm:px-3 md:px-4">
            <span className="text-5xl md:text-4xl font-bold text-[#396042] font-forum">
              10
            </span>
            <span className="text-gray-500 mt-2 text-xs sm:text-sm md:text-base">Exclusive Albums</span>
          </div>
          <div className="bg-[#f6f6f6] rounded-2xl flex flex-col items-center justify-center py-4 sm:py-6 md:py-8 px-2 sm:px-3 md:px-4">
            <span className="text-5xl md:text-4xl font-bold text-[#396042] font-forum">
              200+
            </span>
            <span className="text-gray-500 mt-2 text-xs sm:text-sm md:text-base">Photo Samples</span>
          </div>
        </div>
        <div className="sm:col-span-2 md:col-span-4 hidden md:flex flex-col gap-3 sm:gap-4 md:gap-6">
          <div className="object-cover flex flex-row h-full w-full">
            <Image
              src={galleryImages[2]}
              alt="Gallery image 3"
              className="rounded-2xl w-full h-52 object-cover"
              width={400}
              height={208}
              priority={false}
            />
          </div>
          <div className="object-cover flex flex-row h-full w-full">
            <Image
              src={galleryImages[3]}
              alt="Gallery image 4"
              className="rounded-2xl w-full h-52 object-cover"
              width={400}
              height={208}
              priority={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
