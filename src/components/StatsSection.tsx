import React from "react";

const stats = [
  {
    value: "15",
    label: "Years of Experience",
  },
  {
    value: "800+",
    label: "Projects Completed",
  },
  {
    value: "10",
    label: "Experienced Employees",
  },
  {
    value: "50+",
    label: "Covered Locations",
  },
];

export default function StatsSection() {
  return (
    <section className="w-full flex justify-center py-8 bg-transparent relative -top-28">
      <div className="container px-12 flex flex-col items-center">
        <div className="w-full flex flex-col md:flex-row gap-6 md:gap-8 justify-center">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex-1 min-w-[220px] bg-[#f6f6f6] rounded-xl flex flex-col items-center py-8 px-6 shadow-sm"
            >
              <div className="text-4xl md:text-7xl font-bold text-[#232e27] font-forum mb-1">{stat.value}</div>
              <div className="text-xs md:text-sm text-[#232e27] opacity-80 font-satoshi text-center font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
