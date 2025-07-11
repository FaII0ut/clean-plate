import React from "react";
import Button from "./Button";

export default function Header() {
  return (
    <div className="mx-auto container pt-4 px-2 sm:px-4 md:px-8 lg:px-12 sticky top-0 z-50">
      <header className="w-full flex items-center justify-between bg-white/10 backdrop-blur-md rounded-full shadow-sm pr-2 pl-1 md:px-2 md:py-4 mt-2 mb-6">
        <div className="flex items-center gap-2 sm:gap-3 ml-1 sm:ml-2">
          <div className="w-7 h-7 rounded-full bg-[#FFD600] relative flex items-center justify-center">
           <img src="/img/logo.png" alt="Logo" className="w-full h-full object-cover" />
          </div>
          {/* <span className="font-forum text-lg sm:text-xl font-bold text-[#22223B]">
            Clean Plate
          </span> */}
        </div>
        {/* Desktop nav */}
        <nav className="hidden md:flex gap-4 md:gap-6 lg:gap-8 text-xs md:text-sm font-satoshi text-[#ffffff]">
          <a href="#" className="font-forum text-base lg:text-xl font-medium">Menu</a>
          <a href="#" className="font-forum text-base lg:text-xl font-medium">About</a>
          <a href="#" className="font-forum text-base lg:text-xl font-medium">Service</a>
          <a href="#" className="font-forum text-base lg:text-xl font-medium">Blog</a>
          <a href="#" className="font-forum text-base lg:text-xl font-medium">FAQ</a>
          <a href="#" className="font-forum text-base lg:text-xl font-medium">Contact</a>
        </nav>
        {/* Hamburger menu for mobile */}
        <div className="md:hidden flex items-center">
          <button className="p-2 focus:outline-none" aria-label="Open Menu">
            <svg className="w-7 h-7 text-[#22223B]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        <div className="hidden sm:block">
          <Button href="#" className="ml-1 md:ml-2 px-3 md:px-4 py-2 text-xs md:text-base">Get Template</Button>
        </div>
      </header>
    </div>
  );
}
