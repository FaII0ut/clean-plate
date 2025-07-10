import React from "react";
import Button from "./Button";

export default function Header() {
  return (
    <div className="mx-auto container pt-4 px-12 sticky top-0 z-50">
      <header className="w-full flex items-center justify-between bg-white/10 backdrop-blur-md rounded-full shadow-sm px-3 py-2 mt-2 mb-6">
        <div className="flex items-center gap-3 ml-2">
          <div className="w-7 h-7 rounded-full bg-[#FFD600] relative flex items-center justify-center">
            <div className="absolute left-1 top-1 w-2 h-2 rounded-full bg-[#3AC98B]" />
            <div className="absolute left-4 top-1 w-2 h-2 rounded-full bg-[#3AC98B]" />
          </div>
          <span className="font-forum text-xl font-bold text-[#22223B]">
            NutriWell
          </span>
        </div>
        <nav className="flex gap-8 text-sm font-satoshi text-[#ffffff]">
          <a href="#" className="font-forum text-xl font-medium">
            Menu
          </a>
          <a href="#" className="font-forum text-xl font-medium">
            About
          </a>
          <a href="#" className="font-forum text-xl font-medium">
            Service
          </a>
          <a href="#" className="font-forum text-xl font-medium">
            Blog
          </a>
          <a href="#" className="font-forum text-xl font-medium">
            FAQ
          </a>
          <a href="#" className="font-forum text-xl font-medium">
            Contact
          </a>
        </nav>
        <Button href="#">
          Get Template
        </Button>
      </header>
    </div>
  );
}
