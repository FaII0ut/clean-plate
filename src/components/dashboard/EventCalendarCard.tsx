import React from "react";
import { CalendarDays, Plus, Settings } from "lucide-react";

const EventCalendarCard: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 w-full">
      <div className="flex justify-between items-start mb-2">
        <div>
          <div className="text-lg font-semibold">Event Calendar</div>
        </div>
        <div className="flex gap-2">
          <button className="text-[#e36d4e] bg-[#fff3ed] rounded-full p-2 hover:bg-[#ffe5d1]">
            <Settings size={18} />
          </button>
          <button className="text-[#e36d4e] bg-[#fff3ed] rounded-full p-2 hover:bg-[#ffe5d1]">
            <Plus size={18} />
          </button>
        </div>
      </div>
      {/* Date Selector */}
      <div className="flex items-center justify-between my-3">
        <button className="w-8 h-10 rounded-xl border border-gray-200 text-gray-400">{'<'}</button>
        {[12,13,14,15,16].map((d, i) => (
          <div key={d} className={`flex flex-col items-center px-2 ${d===14 ? 'bg-gray-100 rounded-xl border border-[#e36d4e]' : ''}`}>
            <span className={`text-sm font-semibold ${d===13 ? 'text-[#e36d4e]' : d===14 ? 'text-[#1f3040]' : 'text-gray-500'}`}>{d}</span>
            <span className="text-xs text-gray-400">{['SUN','MON','TUE','WED','THU'][i]}</span>
            {d===14 && <span className="w-1 h-1 bg-[#e36d4e] rounded-full mt-1"></span>}
          </div>
        ))}
        <button className="w-8 h-10 rounded-xl border border-gray-200 text-gray-400">{'>'}</button>
      </div>
      {/* Tabs */}
      <div className="flex gap-6 border-b mb-2">
        <button className="flex items-center gap-1 border-b-2 border-[#e36d4e] text-[#e36d4e] pb-1 font-semibold">
          <CalendarDays size={16} /> Events
        </button>
        <button className="flex items-center gap-1 text-gray-400 pb-1 font-semibold">
          <span role="img" aria-label="party">🎉</span> Birthdays
        </button>
        <button className="flex items-center gap-1 text-gray-400 pb-1 font-semibold">
          <span role="img" aria-label="beach">🏖️</span> Holidays
        </button>
      </div>
      {/* Events List */}
      <div className="mt-3 space-y-4 max-h-32 overflow-y-auto pr-2">
        <div>
          <span className="font-semibold">Crafters Meeting</span>
          <span className="ml-2 bg-purple-100 text-purple-700 rounded-full px-2 py-0.5 text-xs font-semibold">12 Days</span>
          <div className="text-gray-400 text-xs mt-1">Jun 12, 2021 — Jun 24, 2022</div>
        </div>
        <div>
          <span className="font-semibold">Presentation</span>
          <span className="ml-2 bg-blue-100 text-blue-700 rounded-full px-2 py-0.5 text-xs font-semibold">7 Days</span>
          <div className="text-gray-400 text-xs mt-1">Aug 17, 2021 — Aug 24, 2022</div>
        </div>
      </div>
    </div>
  );
};

export default EventCalendarCard;
