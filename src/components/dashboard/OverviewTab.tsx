import React from "react";
import Image from "next/image";
import {menu} from "@/data/menu";
import AttendanceOverview from "@/components/dashboard/AttendanceOverview";

const OverviewTab: React.FC = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col">
        <p className="text-gray-600 font-forum font-bold text-4xl">
          My dashboard
        </p>
        <h1 className="text-xl font-bold font-satoshi text-[#e36d4e]">
          Hello, Ismail Zaid
        </h1>
      </div>
      <div className="grid grid-cols-4 gap-x-4 mt-12">
        <div className="border border-gray-200 rounded-2xl p-6">
          <p className="font-satoshi font-medium text-sm text-gray-500">
            Total Calories
          </p>
          <p className="font-satoshi font-semibold text-4xl mt-2">871</p>
        </div>
        <div className="border border-gray-200 rounded-2xl p-6">
          <p className="font-satoshi font-medium text-sm text-gray-500">
            Total Meals
          </p>
          <p className="font-satoshi font-semibold text-4xl mt-2">23</p>
        </div>
        <div className="border border-gray-200 rounded-2xl p-6">
          <p className="font-satoshi font-medium text-sm text-gray-500">
            Avg Calories /day
          </p>
          <p className="font-satoshi font-semibold text-4xl mt-2">421</p>
        </div>
        <div className="border border-gray-200 rounded-2xl p-6">
          <p className="font-satoshi font-medium text-sm text-gray-500">
            Avg Meal /day
          </p>
          <p className="font-satoshi font-semibold text-4xl mt-2">23</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div>
          <div className="flex flex-col border border-gray-200 rounded-2xl p-4">
            <p className="font-satoshi font-semibold text-lg">Upcoming meal</p>
            <p className="font-satoshi font-semibold text-sm text-gray-400">
              Monday, July 21
            </p>
            <div className="flex flex-row items-center  rounded-2xl mt-4 w-full gap-x-4 relative">
              <div className="absolute top-6 right-6 bg-[#e36d4e] px-2 py-1 rounded-full">
                <p className="text-white font-satoshi font-semibold text-xs">
                  Cooking
                </p>
              </div>
              <div className="min-w-24 min-h-24 bg-red-400 rounded-2xl overflow-hidden">
                <Image
                  src={menu[0].img}
                  alt={menu[0].name}
                  className="w-full h-full object-cover"
                  width={64}
                  height={64}
                  priority={true}
                />
              </div>
              <div className="flex flex-col w-1/2">
                <p className="font-satoshi font-semibold text-base">
                  {menu[0].name}
                </p>
                <p className="font-satoshi font-semibold text-xs text-gray-400">
                  {menu[0].description}
                </p>
                <div className="flex w-full items-center mb-3 mt-2 gap-x-4">
                  <div className="flex flex-col items-start">
                    <span className="text-[#1f3040] text-xs font-semibold font-satoshi">
                      {menu[0].calories}
                    </span>
                    <span className="text-[#1f3040]  font-medium font-satoshi text-[10px]">
                      Calories
                    </span>
                  </div>
                  <div className="flex flex-col items-start">
                    <span className="text-[#1f3040] text-xs font-semibold font-satoshi">
                      {menu[0].protein}
                    </span>
                    <span className="text-[#1f3040]  font-medium font-satoshi text-[10px]">
                      Protein
                    </span>
                  </div>
                  <div className="flex flex-col items-start">
                    <span className="text-[#1f3040] text-xs font-semibold font-satoshi">
                      {menu[0].carbs}
                    </span>
                    <span className="text-[#1f3040] font-satoshi font-medium  text-[10px]">
                      Carbs
                    </span>
                  </div>
                  <div className="flex flex-col items-start">
                    <span className="text-[#1f3040] text-xs font-semibold font-satoshi">
                      {menu[0].fat}
                    </span>
                    <span className="text-[#1f3040] font-satoshi font-medium  text-[10px]">
                      Fat
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center  rounded-2xl mt-4 w-full gap-x-4 relative">
              <div className="min-w-24 min-h-24 bg-red-400 rounded-2xl overflow-hidden">
                <Image
                  src={menu[2].img}
                  alt={menu[2].name}
                  className="w-full h-full object-cover"
                  width={64}
                  height={64}
                  priority={true}
                />
              </div>
              <div className="flex flex-col w-1/2">
                <p className="font-satoshi font-semibold text-base">
                  {menu[2].name}
                </p>
                <p className="font-satoshi font-semibold text-xs text-gray-400">
                  {menu[2].description}
                </p>
                <div className="flex w-full items-center mb-3 mt-2 gap-x-4">
                  <div className="flex flex-col items-start">
                    <span className="text-[#1f3040] text-xs font-semibold font-satoshi">
                      {menu[2].calories}
                    </span>
                    <span className="text-[#1f3040]  font-medium font-satoshi text-[10px]">
                      Calories
                    </span>
                  </div>
                  <div className="flex flex-col items-start">
                    <span className="text-[#1f3040] text-xs font-semibold font-satoshi">
                      {menu[2].protein}
                    </span>
                    <span className="text-[#1f3040]  font-medium font-satoshi text-[10px]">
                      Protein
                    </span>
                  </div>
                  <div className="flex flex-col items-start">
                    <span className="text-[#1f3040] text-xs font-semibold font-satoshi">
                      {menu[2].carbs}
                    </span>
                    <span className="text-[#1f3040] font-satoshi font-medium  text-[10px]">
                      Carbs
                    </span>
                  </div>
                  <div className="flex flex-col items-start">
                    <span className="text-[#1f3040] text-xs font-semibold font-satoshi">
                      {menu[2].fat}
                    </span>
                    <span className="text-[#1f3040] font-satoshi font-medium  text-[10px]">
                      Fat
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-200 pt-4 mt-3 flex flex-row justify-between">
              <p className="font-satoshi font-semibold text-sm text-gray-400">
                Would you like to skip this meal?
              </p>
              <div className="flex flex-row gap-2">
                <button className="font-satoshi font-semibold text-xs text-red-400 border border-red-200 rounded-full px-3 py-1 hover:bg-red-50">
                  Yes
                </button>
                <button className="font-satoshi font-semibold text-xs text-gray-400 border border-gray-200 rounded-full px-3 py-1 hover:bg-gray-50">
                  No
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* <EventCalendarCard /> */}
        <AttendanceOverview />
      </div>
    </div>
  );
};

export default OverviewTab;
