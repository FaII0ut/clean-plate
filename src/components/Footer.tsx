import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#151e18] border-t border-[#222e27] pt-12 pb-4 px-4 text-white">
      <div className="container px-2 sm:px-4 md:px-8 lg:px-12 mx-auto flex flex-col md:flex-row md:justify-between gap-6 md:gap-8 items-start">
        {/* Logo & Social */}
        <div className="flex-1 min-w-[220px]">
          <div className="flex items-center gap-2 mb-4">
            {/* Chef hat icon */}
            <span className="inline-block text-3xl">
              <svg width="36" height="36" fill="none" viewBox="0 0 36 36">
                <path
                  d="M9 26h18v2a2 2 0 01-2 2H11a2 2 0 01-2-2v-2z"
                  fill="#232e27"
                  stroke="#fff"
                  strokeWidth="1.5"
                />
                <path
                  d="M9 26v-2a9 9 0 1118 0v2"
                  stroke="#fff"
                  strokeWidth="1.5"
                />
                <path
                  d="M9 26h18"
                  stroke="#eb7147"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <circle
                  cx="11"
                  cy="17"
                  r="2"
                  fill="#232e27"
                  stroke="#fff"
                  strokeWidth="1.5"
                />
                <circle
                  cx="25"
                  cy="17"
                  r="2"
                  fill="#232e27"
                  stroke="#fff"
                  strokeWidth="1.5"
                />
              </svg>
            </span>
            <span className="font-forum text-2xl text-white font-semibold">
              Craving
            </span>
          </div>
          <p className="text-gray-300 text-sm mb-6 max-w-xs">
            We&#39;re also active on social media! Follow us for engaging industry
            updates.
          </p>
        </div>
        {/* Quick Links */}
        <div className="flex-1 min-w-[120px]">
          <h4 className="font-satoshi text-base font-semibold mb-3 text-white">
            Quick Links
          </h4>
          <ul className="text-gray-300 text-sm space-y-2">
            <li>
              <a href="#" className="hover:text-[#eb7147] transition">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#eb7147] transition">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#eb7147] transition">
                Menu
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#eb7147] transition">
                Contact
              </a>
            </li>
          </ul>
        </div>
        {/* Contact Info */}
        <div className="flex-1 min-w-[180px]">
          <h4 className="font-satoshi text-base font-semibold mb-3 text-white">
            Contact Info
          </h4>
          <div className="text-gray-300 text-sm space-y-2">
            <div>2464 Royal Ln, Mesa, NJ</div>
            <div>(629) 555-0129</div>
            <div>tanya.hill@example.com</div>
          </div>
        </div>
      </div>
      <hr className="my-8 border-[#232e27]" />
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 md:gap-4">
        <div className="text-gray-400 text-xs">
          © Copyright 2024, All Rights Reserved by FramerWebPro
        </div>
        <div className="flex gap-4 mt-2 md:mt-0">
          {/* Socials */}
          <a
            href="#"
            className="w-9 h-9 rounded-full border border-[#232e27] flex items-center justify-center text-gray-300 hover:text-[#eb7147] hover:border-[#eb7147] transition"
          >
            <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
              <path
                d="M17 2.9a2.1 2.1 0 01-2.1 2.1H5.1A2.1 2.1 0 013 2.9V2.1A2.1 2.1 0 015.1 0h9.8A2.1 2.1 0 0117 2.1v.8z"
                fill="#232e27"
              />
              <path
                d="M17 2.9a2.1 2.1 0 01-2.1 2.1H5.1A2.1 2.1 0 013 2.9V2.1A2.1 2.1 0 015.1 0h9.8A2.1 2.1 0 0117 2.1v.8z"
                stroke="#fff"
                strokeWidth="1.3"
              />
              <path
                d="M10 5.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9z"
                fill="#151e18"
                stroke="#fff"
                strokeWidth="1.3"
              />
              <circle cx="10" cy="10" r="2.2" fill="#fff" />
            </svg>
          </a>
          <a
            href="#"
            className="w-9 h-9 rounded-full border border-[#232e27] flex items-center justify-center text-gray-300 hover:text-[#eb7147] hover:border-[#eb7147] transition"
          >
            <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
              <circle cx="10" cy="10" r="10" fill="#232e27" />
              <path
                d="M13.5 7.5a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0z"
                fill="#fff"
              />
              <path
                d="M17 17l-3.5-3.5"
                stroke="#fff"
                strokeWidth="1.3"
                strokeLinecap="round"
              />
            </svg>
          </a>
          <a
            href="#"
            className="w-9 h-9 rounded-full border border-[#232e27] flex items-center justify-center text-gray-300 hover:text-[#eb7147] hover:border-[#eb7147] transition"
          >
            <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
              <circle cx="10" cy="10" r="10" fill="#232e27" />
              <path
                d="M14.5 6.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                fill="#fff"
              />
              <path
                d="M17 17l-3.5-3.5"
                stroke="#fff"
                strokeWidth="1.3"
                strokeLinecap="round"
              />
            </svg>
          </a>
          <a
            href="#"
            className="w-9 h-9 rounded-full border border-[#232e27] flex items-center justify-center text-gray-300 hover:text-[#eb7147] hover:border-[#eb7147] transition"
          >
            <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
              <circle cx="10" cy="10" r="10" fill="#232e27" />
              <path
                d="M7.5 8.5h5a.5.5 0 01.5.5v2a.5.5 0 01-.5.5h-5a.5.5 0 01-.5-.5v-2a.5.5 0 01.5-.5z"
                fill="#fff"
              />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
