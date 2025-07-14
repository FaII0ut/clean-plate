import React from "react";
import Link from "next/link";
import Button from "./Button";

const plans = [
  {
    title: "Single session",
    description: "Drop in anytime for a class.",
    price: "$25",
    subtext: "One-time payment",
    highlight: false,
  },
  {
    title: "5-class pack",
    description: "Flexible option, valid for 1 month.",
    price: "$100",
    subtext: "Valid for 3 months",
    highlight: true,
    badge: "Most popular",
  },
  {
    title: "Unlimited monthly",
    description: "Access all classes, no limits.",
    price: "$180",
    subtext: "Billed Monthly",
    highlight: false,
  },
];

export default function PricingSection() {
  return (
    <section className="py-32 px-4 bg-[#f9f5e9] relative overflow-hidden w-full">
      {/* Radial gradient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[420px] md:w-[900px] md:h-[520px] rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at center, #c9fbe6 0%, #f8fff9 60%, transparent 100%)",
          filter: "blur(24px)",
          zIndex: 0,
        }}
      />
      <div
        className="max-w-4xl mx-auto text-center mb-16"
        style={{position: "relative", zIndex: 1}}
      >
        <h2 className="font-forum text-4xl md:text-5xl font-semibold text-[#22223B] mb-3">
          Pricing
        </h2>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto">
          Choose the best plan for your needs. Pay per session, get a package,
          or go unlimited.
        </p>
      </div>
      <div
        className="flex flex-col md:flex-row justify-center items-end gap-8 relative"
        style={{zIndex: 1}}
      >
        {plans.map((plan, i) => (
          <div
            key={plan.title}
            className={`relative bg-white rounded-3xl shadow-lg shadow-[#d1f5d733] p-8 flex flex-col items-center w-full max-w-[260px] min-w-[260px] border border-[#f3f3f3] transition-all duration-200 ${
              plan.highlight ? "scale-105 z-10 border-[#d1f5d7]" : ""
            }`}
            style={{minHeight: 280}}
          >
            {i === 1 && (
              <div className="w-full items-center justify-center flex-row mb-5">
                <p className="w-24 bg-[#3AC98B] mx-auto text-xs px-2 py-1 rounded-full font-satoshi text-center font-medium text-black">
                  Most Popular
                </p>
              </div>
            )}
            <div className="bg-zinc-50 w-full flex-1 flex flex-col justify-center items-center rounded-2xl">
              <h3 className="font-satoshi text-xl font-bold text-[#22223B] mb-2 mt-2 text-center">
                {plan.title}
              </h3>
              <div className="text-gray-400 text-sm mb-6 text-center">
                {plan.description}
              </div>
              <div className="font-forum text-5xl font-bold text-[#22223B] mb-2">
                {plan.price}
              </div>
              <div className="text-gray-400 text-xs mb-4">{plan.subtext}</div>
            </div>
          </div>
        ))}
      </div>
      <div
        className="flex justify-center mt-12"
        style={{zIndex: 1, position: "relative"}}
      >
        <Link href="/create-plan" passHref legacyBehavior>
          <a>
            <Button className="bg-[#3AC98B] hover:bg-[#2ea46e] text-white px-8 py-3 rounded-full text-lg font-satoshi shadow-md transition-all duration-200">
              Subscribe
            </Button>
          </a>
        </Link>
      </div>
    </section>
  );
}
