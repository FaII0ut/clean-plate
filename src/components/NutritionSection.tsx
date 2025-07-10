import React from "react";

const features = [
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32" className="text-[#c7e7b2]">
        <circle cx="16" cy="16" r="16" fill="currentColor" opacity="0.15" />
        <path d="M10 20.5l3.5-4 2.5 3L22 13.5" stroke="#B5D98C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M11 9h10v14H11z" stroke="#B5D98C" strokeWidth="2" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Certified Nutritionist",
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32" className="text-[#c7e7b2]">
        <circle cx="16" cy="16" r="16" fill="currentColor" opacity="0.15" />
        <path d="M16 8v8l6 3" stroke="#B5D98C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="16" cy="16" r="7" stroke="#B5D98C" strokeWidth="2"/>
      </svg>
    ),
    title: "Always On Time Service",
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32" className="text-[#c7e7b2]">
        <circle cx="16" cy="16" r="16" fill="currentColor" opacity="0.15" />
        <rect x="9" y="13" width="14" height="10" rx="2" stroke="#B5D98C" strokeWidth="2"/>
        <path d="M13 17h6" stroke="#B5D98C" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: "24/7 Support",
  },
];

const services = [
  [
    "Children Nutrition",
    "Lifestyle In Pregnancy",
    "Diet Health Service",
    "Protein advice",
  ],
  [
    "Balance Body & Mind",
    "Workout Routines",
    "Poor Eating Habits",
    "Digestive Problems",
  ],
];

export default function NutritionSection() {
  return (
    <section className="pb-20 px-4 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-[#396042] font-satoshi font-bold uppercase tracking-wider mb-2 text-lg">Who We Are</p>
        <h2 className="font-forum text-6xl md:text-7xl font-bold text-[#22223B] mb-6 leading-tight">
          Prioritize Nutrition for<br />Optimal Health
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-6">
          {features.map((f, i) => (
            <div key={i} className="flex flex-col items-center">
              {f.icon}
              <span className="mt-2 font-satoshi font-bold text-lg text-[#22223B]">{f.title}</span>
            </div>
          ))}
        </div>
        <p className="text-gray-500 text-base md:text-lg mb-10">
          Discover the key to vibrant living with our guide on prioritizing nutrition for optimal health. Explore expert tips and insights to nourish your body and elevate your well-being today!
        </p>
        <div className="bg-[#fcfcf7] rounded-2xl p-8 flex flex-col md:flex-row gap-8 justify-center items-center">
          {services.map((col, i) => (
            <ul key={i} className="flex-1 space-y-4 text-left">
              {col.map((item, j) => (
                <li key={j} className="flex items-center gap-2 text-[#396042] text-lg font-satoshi">
                  <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="#c7e7b2" opacity="0.4"/><path d="M6 10.5l2 2 5-5" stroke="#B5D98C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  {item}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
