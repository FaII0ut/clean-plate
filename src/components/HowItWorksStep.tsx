import React from "react";
import Image from "next/image";

export default function HowItWorksStep() {
  return (
    <section className="py-16 relative -top-24 bg-[#f9f5e9]">
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12 md:gap-0"
        >
          <div
            className={`flex-1 flex justify-center w-[500px] min-w-[500px] max-w-[500px] ${
              i % 2 === 0 ? "order-3" : "order-1"
            }`}
          >
            <div
              className="rounded-xl shadow-lg px-8 py-10 min-w-[350px] min-h-[450px] max-w-xs text-center bg-white"
              style={{boxShadow: "0 4px 24px 0 rgba(34,34,59,.07)"}}
            >
              <Image src={`/img/howto${i}.png`} className="w-full h-full object-contain" alt={`How it works step ${i}`} width={64} height={64} />
            </div>
          </div>
          <div className="flex flex-col items-center mb-6 flex-1 max-w-20 h-[450px] order-2">
            <span className="text-5xl md:text-6xl font-bold text-[#49564a] mr-4 py-6">
              {i}
            </span>
            <div className="block h-full flex-1 w-1 bg-[#49564a]/30 rounded"></div>
          </div>
          <div
            className={`flex-1 flex flex-col justify-center items-start md:pl-16 w-[500px] min-w-[500px] max-w-[500px] ${
              i % 2 === 0 ? "order-1" : "order-3"
            }`}
          >
            <div>
              <h3 className="text-5xl font-semibold text-[#49564a] mb-2 font-forum">
                Choose your subscription plan.
              </h3>
              <p className="text-[#49564a]/80 text-xl max-w-md font-satoshi">
                Subscribe to our subscription plan — there’s only one so you
                won’t have a hard time choosing. Enjoy unlimited designs
                tailored to your brand.
              </p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
