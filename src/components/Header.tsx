import React, {useState} from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "./Button";
import MobileNavDropdown from "./MobileNavDropdown";
import {DynamicIcon} from "lucide-react/dynamic";
import {useStoreActions} from "@/store/hooks";
import {StoreModel} from "@/store/models";
import {Actions} from "easy-peasy";

export default function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const setShowCartModal = useStoreActions(
    (actions: Actions<StoreModel>) => actions.global.setShowCartModal
  );
  return (
    <div className="mx-auto container pt-4 px-2 sm:px-4 md:px-8 lg:px-12 sticky top-0 z-50">
      <header className="w-full flex items-center justify-between bg-gray-50 border border-gray-200 bg-blend-darken backdrop-blur-md rounded-full shadow-sm pr-2 pl-1 md:px-2 md:py-2 mt-2 mb-6">
        <div className="flex items-center gap-2 sm:gap-3 ml-2 sm:ml-1 ">
          <Link
            href="/"
            className="w-10 h-10  rounded-full relative flex items-center justify-center"
          >
            <Image
              src="/img/logo.png"
              alt="Clean Plate Logo"
              className="w-10 h-10"
              width={40}
              height={40}
              priority={true}
            />
          </Link>
          {/* <span className="font-forum text-lg sm:text-xl font-bold text-[#22223B]">
            Clean Plate
          </span> */}
        </div>
        {/* Desktop nav */}
        <nav className="hidden md:flex gap-4 md:gap-6 lg:gap-12 text-xs md:text-sm font-satoshi text-[#ffffff]">
          <Link
            href="/"
            className="font-satoshi text-base font-medium text-black"
          >
            Home
          </Link>
          <Link
            href="/menu"
            className="font-satoshi text-base font-medium text-black"
          >
            Menu
          </Link>
          <Link
            href="/about"
            className="font-satoshi text-base font-medium text-black"
          >
            About
          </Link>
          <Link
            href="/pricing"
            className="font-satoshi text-base font-medium text-black"
          >
            How it works
          </Link>

          <Link
            href="/contact"
            className="font-satoshi text-base font-medium text-black"
          >
            Contact
          </Link>
        </nav>
        {/* Hamburger menu for mobile */}
        <div className="md:hidden flex items-center">
          <button
            className="p-2 focus:outline-none"
            aria-label={mobileNavOpen ? "Close Menu" : "Open Menu"}
            onClick={() => setMobileNavOpen((v) => !v)}
          >
            {mobileNavOpen ? (
              <svg
                className="w-7 h-7 text-[#22223B]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-7 h-7 text-[#22223B]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
        <div className="hidden sm:flex flex-row py-0 my-0 items-center gap-2">
          <Button
            href="/create-plan"
            variant="secondary"
            className="px-3 md:px-4 py-2 text-xs md:text-base"
          >
            Subscribe
          </Button>
          <div className="relative cursor-pointer">
            <button
              className="w-12 h-12 rounded-full bg-[#1f3040] flex items-center justify-center focus:outline-none"
              aria-label="Open cart"
              onClick={() => setShowCartModal(true)}
            >
              <DynamicIcon name="shopping-cart" color="white" size={20} />
            </button>
            <span className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center bg-white rounded-full text-xs font-satoshi font-semibold">
              2
            </span>
          </div>
        </div>
        {/* Mobile Nav: expands header down */}
      </header>
      {typeof window !== "undefined" && (
        <MobileNavDropdown
          open={mobileNavOpen}
          onClose={() => setMobileNavOpen(false)}
        />
      )}
    </div>
  );
}
