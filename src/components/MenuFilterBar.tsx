import React from "react";

const FILTERS = [
  {key: "sunday", label: "Sunday"},
  {key: "monday", label: "Monday"},
  {key: "tuesday", label: "Tuesday"},
  {key: "wednesday", label: "Wednesday"},
  {key: "thursday", label: "Thursday"},
  {key: "friday", label: "Friday"},
  {key: "saturday", label: "Saturday"},
];

interface MenuFilterBarProps {
  selected: string;
  onSelect: (key: string) => void;
}

export default function MenuFilterBar({
  selected = "sunday",
  onSelect,
}: MenuFilterBarProps) {
  return (
    <div className="w-full flex justify-center ">
      <div className="flex overflow-x-auto no-scrollbar whitespace-nowrap border-2 border-[#e36d4e] rounded-full px-2 py-2 gap-2 md:gap-4 max-w-full">
        {FILTERS.map((filter) => (
          <button
            key={filter.key}
            className={`px-8 py-3 rounded-full font-satoshi font-semibold text-lg transition-all duration-150 focus:outline-none ${
              selected === filter.key
                ? "bg-[#e36d4e] text-white shadow"
                : "bg-white text-[#22223B] hover:bg-[#f3f3f3]"
            } `}
            onClick={() => onSelect(filter.key)}
            type="button"
          >
            {filter.label}
          </button>
        ))}
      </div>
    </div>
  );
}
