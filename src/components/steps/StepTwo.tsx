import {DynamicIcon} from "lucide-react/dynamic";
import React from "react";
import {useStoreState, useStoreActions} from "@/store/hooks";

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
  const selectedTab = useStoreState((state) => state.plan.selectedTab);

  // Custom plan state
  const customPlanData = useStoreState((state) => state.plan.customPlanData);
  const setCustomPlanData = useStoreActions((actions) => actions.plan.setCustomPlanData);

  // Standard plan state
  const startDate = useStoreState((state) => state.plan.startDate);
  const setStartDate = useStoreActions((actions) => actions.plan.setStartDate);
  const setEndDate = useStoreActions((actions) => actions.plan.setEndDate);

  // For UI fallback
  const todayStr = new Date().toISOString().split("T")[0];

  // Custom plan logic
  const handleCustomChange = (field: 'startDate' | 'endDate', value: string) => {
  setCustomPlanData({
    startDate: field === 'startDate' ? value : customPlanData?.startDate ?? "",
    endDate: field === 'endDate' ? value : customPlanData?.endDate ?? "",
  });
};

  // Standard plan logic
  const handleStandardStartChange = (value: string) => {
    setStartDate(value);
    // Calculate end date
    const daysToAdd = selectedTab === 'Weekly' ? 6 : 29;
    const start = new Date(value);
    const end = new Date(start);
    end.setDate(start.getDate() + daysToAdd);
    setEndDate(end.toISOString().split('T')[0]);
  };

  // Use plan state, fallback to today if not set
  const standardStart = startDate || todayStr;

  // For delivery days preview
  const days = getNext7Days(standardStart);

  return (
    <div className="flex flex-col h-[calc(100vh-57px)]  overflow-y-auto">
      <h2 className="text-4xl font-forum font-bold mb-2 text-center mt-12 md:mt-0">
        Customize Your Plan
      </h2>
      <p className="text-gray-600 mb-4 text-base font-medium font-satoshi text-center">
        Choose when you want your meals delivered, and which days u want to have
        them
      </p>
      {selectedTab === "Custom" ? (
        <div className="flex flex-col mt-12 items-center w-full">
          <p className="font-satoshi font-semibold text-base mb-2 text-left w-full">Custom Plan Date Range</p>
          <div className="flex flex-row gap-4 w-full">
            <div className="flex flex-col flex-1 w-full">
              <label className="mb-1 font-satoshi text-sm">Start Date</label>
              <input
                className="border border-gray-200 px-3 py-3 rounded-xl w-full font-satoshi font-medium text-base"
                type="date"
                value={customPlanData?.startDate || todayStr}
                min={todayStr}
                onChange={e => handleCustomChange('startDate', e.target.value)}
              />
            </div>
            <div className="flex flex-col flex-1">
              <label className="mb-1 font-satoshi text-sm">End Date</label>
              <input
                className="border border-gray-200 px-3 py-3 rounded-xl w-full font-satoshi font-medium text-base"
                type="date"
                value={customPlanData?.endDate || todayStr}
                min={customPlanData?.startDate || todayStr}
                onChange={e => handleCustomChange('endDate', e.target.value)}
              />
            </div>
          </div>
          <p className="text-gray-400 mt-2 text-sm font-medium font-satoshi w-full text-left">
            You can select any start and end date for your custom plan.
          </p>
        </div>
      ) : (
        <>
          <div className="flex flex-col mt-12 max-w-xl items-center">
            <p className="font-satoshi font-semibold text-base mb-2 text-left w-full">
              Start date
            </p>
            <input
              className="border border-gray-200 px-3 py-3 rounded-xl w-full font-satoshi font-medium text-base"
              type="date"
              value={standardStart}
              min={todayStr}
              onChange={(e) => handleStandardStartChange(e.target.value)}
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
                    ? "bg-[#e36d4e] text-white"
                    : "hover:bg-[#e36d4e]/20 bg-gray-100"
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
        </>
      )}
      {selectedTab === "Custom" && <div className="flex flex-row items-end justify-between w-full mt-10">
        <div className="flex flex-col">
          <p className="font-satoshi font-semibold text-4xl text-left">
            45 days
          </p>
          <p className="font-satoshi font-semibold text-lg text-left text-[#e36d4e]">
            2 meals per day
          </p>
        </div>
        <p className="font-forum font-bold text-5xl mb-2 text-left">$129.99</p>
      </div>}
      <div className=" mt-12 bg-[#e36d4e]/10 p-4 rounded-xl mb-46 md:mb-0">
        <p className="font-satoshi font-semibold text-base text-left w-full flex flex-row items-center text-[#e36d4e]">
          <DynamicIcon
            name="info"
            size={18}
            className="mr-2"
            stroke="#e36d4e"
          />{" "}
          Note:
        </p>
        <p className="font-satoshi text-sm font-medium text-gray-500 mt-1 ml-7 max-w-xl">
          We are closed on all fridays, and other major holidays. weekly plan
          consists of 6 days per week. and if you selected custom we will skip
          the meals for the holiday and adjust the pricing. if we are closed on
          unexpected days we will notify you in advance and refund.
        </p>
      </div>
    </div>
  );
};

export default StepTwo;
