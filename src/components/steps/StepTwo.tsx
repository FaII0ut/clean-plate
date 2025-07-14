import {DynamicIcon} from "lucide-react/dynamic";
import React, {useState} from "react";

export const getNext7Days = (startDate: string) => {
  if (!startDate) return [];
  const days = [];
  const date = new Date(startDate);
  for (let i = 0; i < 7; i++) {
    const d = new Date(date);
    d.setDate(date.getDate() + i);
    days.push({
      day: d.toLocaleDateString(undefined, {weekday: "short"}),
      date: d.getDate(),
      fullDate: d.toISOString().split("T")[0],
    });
  }
  return days;
};

const StepTwo: React.FC = () => {
  const todayStr = new Date().toISOString().split("T")[0];
  const [selectedDate, setSelectedDate] = useState<string>(todayStr);
  const days = getNext7Days(selectedDate);

  return (
    <div className="flex flex-col h-[calc(100vh-57px)]  overflow-y-auto">
      <h2 className="text-4xl font-forum font-bold mb-2 text-center mt-12 md:mt-0">
        Customize Your Plan
      </h2>
      <p className="text-gray-600 mb-4 text-base font-medium font-satoshi text-center">
        Choose when you want your meals delivered, and which days u want to have
        them
      </p>
      <div className="flex flex-col mt-12 max-w-xl items-center">
        <p className="font-satoshi font-semibold text-base mb-2 text-left w-full">
          Start date
        </p>
        <input
          className="border border-gray-200 px-3 py-3 rounded-xl w-full font-satoshi font-medium text-base"
          type="date"
          value={selectedDate}
          min={
            new Date(Date.now() + 24 * 60 * 60 * 1000)
              .toISOString()
              .split("T")[0]
          }
          onChange={(e) => setSelectedDate(e.target.value)}
        />
        <p className="text-gray-400 mt-2 text-sm font-medium font-satoshi w-full text-left">
          We need at least 24 hours to prepare your first delivery
        </p>
      </div>
      <p className="font-satoshi font-semibold text-base mb-2 text-left w-full mt-10">
        Delivery Days
      </p>
      <div className="flex flex-row gap-4 mt-4 flex-wrap items-center justify-center">
        {days.map((item, index) => (
          <div
            key={item.fullDate}
            className={`flex flex-col ${
              index < 3
                ? "bg-[#eb7147] text-white"
                : "hover:bg-[#eb7147]/20 bg-gray-100"
            } p-2 rounded-xl px-6 py-6 items-center`}
          >
            <p className="font-forum font-bold text-5xl text-inherit">
              {item.date}
            </p>
            <p className="font-satoshi font-semibold text-base text-inherit">
              {item.day}
            </p>
          </div>
        ))}
      </div>
      <div className=" mt-12 bg-[#eb7147]/10 p-4 rounded-xl mb-46 md:mb-0">
        <p className="font-satoshi font-semibold text-base text-left w-full flex flex-row items-center text-[#eb7147]">
          <DynamicIcon
            name="info"
            size={18}
            className="mr-2"
            stroke="#eb7147"
          />{" "}
          Custom Plan
        </p>
        <p className="font-satoshi text-sm font-medium text-gray-500 mt-1 ml-7">
          You&apos;ve selected 5 days per week. This will be set up as a custom
          plan.
        </p>
      </div>
    </div>
  );
};

export default StepTwo;
