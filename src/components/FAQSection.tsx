import React, { useState } from "react";

const FAQS = [
  {
    question: "What can I expect from my initial consultation?",
    answer:
      "During your first visit, we'll discuss your health goals, dietary preferences, and lifestyle to create a personalized nutrition plan tailored just for you. This session is designed to understand your needs thoroughly and to set a clear and achievable path forward.",
  },
  {
    question: "How long does it typically take to see results?",
    answer: null,
  },
  {
    question:
      "Are the diet plans suitable for people with food allergies or specific dietary requirements?",
    answer: null,
  },
  {
    question:
      "How do I maintain my results after reaching my initial goals?",
    answer: null,
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <section className="py-32 px-4 bg-[#151e18] text-white">
      <div className="container px-12 mx-auto flex flex-col md:flex-row gap-14 md:gap-24 items-start">
        {/* Left */}
        <div className="md:w-1/3 w-full mb-8 md:mb-0">
          <span className="inline-block bg-[#232e27] text-gray-200 rounded-full px-4 py-1 text-xs mb-4 font-satoshi">FAQ</span>
          <h2 className="font-forum text-6xl font-semibold mb-4 leading-tight">Frequently asked questions</h2>
          <p className="text-gray-400 text-sm max-w-xs">Discover solutions to the most common queries.</p>
        </div>
        {/* Right */}
        <div className="flex-1 w-full flex flex-col gap-4">
          {FAQS.map((faq, i) => (
            <div
              key={i}
              className={`rounded-xl border border-[#232e27] bg-[#1a241d] transition-all duration-200 ${openIndex === i ? "shadow-lg" : ""}`}
            >
              <button
                className="w-full flex items-center justify-between px-8 py-6 text-left focus:outline-none"
                onClick={() => setOpenIndex(i)}
              >
                <div className="flex gap-4 items-center">
                  <span className="text-gray-400 text-lg font-satoshi font-medium mr-2 min-w-[30px]">{String(i + 1).padStart(2, "0")}</span>
                  <span className="font-satoshi text-lg md:text-xl font-semibold text-white">
                    {faq.question}
                  </span>
                </div>
                <svg
                  className={`w-6 h-6 ml-4 text-gray-400 transition-transform duration-200 ${openIndex === i ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === i && faq.answer && (
                <div className="px-20 pb-8 text-gray-300 text-base font-satoshi leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
