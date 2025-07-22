import React from "react";

const AttendanceOverview: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6">
      <div className="mb-2">
        <div className="text-lg font-semibold">Calories</div>
        <div className="text-gray-500 text-sm">1 Jan — 31 Jan, 2022</div>
      </div>
      <div className="flex items-center gap-2 mb-2">
        <span className="bg-green-50 text-green-600 rounded-full px-2 py-0.5 text-xs font-semibold flex items-center gap-1">
          <svg width="14" height="14" viewBox="0 0 20 20" fill="none"><path d="M5 10l4 4 6-8" stroke="#16a34a" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
          10%
        </span>
        <span className="text-gray-500 text-sm">Your protein intake is 10% higher than last month</span>
      </div>
      <div className="my-6 h-[200px] overflow-hidden rounded-lg">
        {/* Chart Placeholder */}
        <img
          src="/img/chart.png"
          className="w-full  opacity-90 object-cover"
          style={{minHeight: 160, background: '#f6f7f9'}}
        />
        {/* Replace img with a real chart for production */}
      </div>
      <div className="flex justify-between text-xs text-gray-400 mt-2">
        <span>Jan 1, 2022</span>
        <span>Jan 31, 2022</span>
      </div>
      <div className="flex items-center gap-4 mt-4">
        <span className="flex items-center gap-1">
          <span className="w-3 h-3 rounded-full bg-green-600 inline-block"></span>
          <span className="text-xs text-gray-700">Fat</span>
        </span>
        <span className="flex items-center gap-1">
          <span className="w-3 h-3 rounded-full bg-yellow-400 inline-block"></span>
          <span className="text-xs text-gray-700">Protein</span>
        </span>
        <span className="flex items-center gap-1">
          <span className="w-3 h-3 rounded-full bg-red-500 inline-block"></span>
          <span className="text-xs text-gray-700">Carbs</span>
        </span>
      </div>
    </div>
  );
};

export default AttendanceOverview;
