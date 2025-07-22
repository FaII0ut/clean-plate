import React from "react";
import Image from "next/image";
export default function AboutHeroBlock() {
  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-center py-12npm ">
      {/* Left stats */}
      <div className="flex flex-row md:flex-col gap-8 md:gap-12 items-center md:items-start md:w-1/5 justify-center md:justifddddd2y-start px-4 md:px-0">
        <div className="text-center md:text-left">
          <div className="text-4xl md:text-5xl font-bold text-[#22223B]">20.5k</div>
          <div className="text-gray-500 text-base mt-1">Successfully Trained</div>
        </div>
        <div className="text-center md:text-left">
          <div className="text-4xl md:text-5xl font-bold text-[#22223B]">450+</div>
          <div className="text-gray-500 text-base mt-1">Students Community</div>
        </div>
        <div className="text-center md:text-left">
          <div className="text-4xl md:text-5xl font-bold text-[#22223B]">20.5k</div>
          <div className="text-gray-500 text-base mt-1">Successfully Trained</div>
        </div>
      </div>
      {/* Center image with circle text */}
      <div className="relative flex-shrink-0 flex items-center justify-center md:w-1/3">
        <Image
          src="/img/hero.jpg"
          alt="Woman working on laptop"
          width={340}
          height={420}
          className="rounded-2xl object-cover w-[280px] h-[340px] md:w-[340px] md:h-[420px] shadow-lg"
          priority
        />
        {/* Circle text */}
        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
          <svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <path id="circlePath" d="M48 8a40 40 0 1 1 0 80a40 40 0 1 1 0-80" />
            </defs>
            <text fontSize="10" fill="#22223B">
              <textPath xlinkHref="#circlePath">ABOUT US • ABOUT US • ABOUT US •</textPath>
            </text>
            <circle cx="48" cy="48" r="46" stroke="#e5e5e5" strokeWidth="2" fill="none" />
          </svg>
        </div>
      </div>
      {/* Right content */}
      <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left px-4 md:px-0">
        <span className="text-xs font-satoshi text-[#5f6fff] tracking-widest uppercase mb-3">About Company</span>
        <h2 className="font-forum text-3xl md:text-5xl font-semibold text-[#22223B] mb-4 leading-tight">
          Creative agency & their best solutions
        </h2>
        <p className="text-gray-500 text-base md:text-lg mb-8 max-w-md">
          Ultrices gravida dictum fusce ut placerat orci nulla pellentesque. Aliquet porttitor lacus luctus accumsan tortor.
        </p>
        <a href="#" className="inline-block bg-[#3864fa] hover:bg-[#2746b5] text-white font-satoshi rounded-full px-6 py-3 text-base font-semibold shadow transition-colors">
          Read More &rarr;
        </a>
      </div>
    </section>
  );
}
