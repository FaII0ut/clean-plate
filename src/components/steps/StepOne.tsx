import React from "react";
import {plans, Plan} from "@/data/plans";
import {useStoreState, useStoreActions} from "@/store/hooks";

const StepOne: React.FC = () => {
  const selectedTab = useStoreState(state => state.plan.selectedTab);
  const setSelectedTab = useStoreActions(actions => actions.plan.setSelectedTab);
  const selectedPlanIndex = useStoreState(state => state.plan.selectedPlanIndex);
  const setSelectedPlanIndex = useStoreActions(actions => actions.plan.setSelectedPlanIndex);

  const filteredPlans = plans.filter(
    (plan) =>
      (selectedTab === "Weekly" && plan.type === "weekly") ||
      (selectedTab === "Monthly" && plan.type === "monthly")
  );

  // Only reset selected plan index if out of bounds for filteredPlans
  React.useEffect(() => {
    if (selectedPlanIndex < 0 || selectedPlanIndex >= filteredPlans.length) {
      setSelectedPlanIndex(1 < filteredPlans.length ? 1 : 0);
    }
    // else, preserve user's previous selection
  }, [selectedTab, setSelectedPlanIndex, filteredPlans.length, selectedPlanIndex]);

  return (
    <div className="flex flex-col h-[calc(100vh-57px)] overflow-y-auto min-w-[80vw]">
      <h2 className="text-4xl font-forum font-bold mb-2 text-center mt-12 md:mt-0">
        Choose a Plan
      </h2>
      <p className="text-gray-600 mb-4 text-base font-medium font-satoshi text-center">
        Choose a meal plan that fits your lifestyle. You can modify or cancel
        your subscription anytime.
      </p>
      <div className="flex flex-row items-center mt-6 md:mt-12 mx-auto">
        <div className="border-full rounded-full p-1 gap-x-4 flex flex-row border-2 border-[#eb7147]">
          <button
            className={`border-full rounded-full px-8 py-2 font-satoshi font-semibold text-lg transition-all duration-150 focus:outline-none ${
              selectedTab === "Weekly"
                ? "bg-[#e36d4e] text-white border-[#e36d4e]"
                : "bg-white text-[#e36d4e]  hover:bg-[#e36d4e]/10"
            }`}
            onClick={() => setSelectedTab("Weekly")}
            type="button"
          >
            Weekly
          </button>
          <button
            className={`border-full rounded-full px-8 py-2 font-satoshi font-semibold text-lg transition-all duration-150 focus:outline-none ${
              selectedTab === "Monthly"
                ? "bg-[#e36d4e] text-white border-[#e36d4e]"
                : "bg-white text-[#e36d4e]  hover:bg-[#e36d4e]/10"
            }`}
            onClick={() => setSelectedTab("Monthly")}
            type="button"
          >
            Monthly
          </button>
        </div>
        <button
          className={`border-full rounded-full px-8 py-2 mx-6 font-satoshi font-semibold text-lg transition-all duration-150 focus:outline-none border-2 ${
            selectedTab === "Custom"
              ? "bg-[#e36d4e] text-white border-[#e36d4e]"
              : "bg-white text-[#e36d4e] border-[#e36d4e] hover:bg-[#e36d4e]/10"
          }`}
          onClick={() => setSelectedTab("Custom")}
          type="button"
        >
          Custom
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 mt-24 md:gap-x-6 gap-y-6">
        {selectedTab !== "Custom" ? (
          <>
            {filteredPlans.map((item: Plan, index: number) => (
              <div
                key={index}
                className={`border-4 relative ${
                  selectedPlanIndex === index
                    ? "border-[#e36d4e] shadow-lg"
                    : "border-gray-200 hover:border-[#e36d4e]/30 hover:shadow-sm cursor-pointer"
                } rounded-4xl p-1 gap-x-4 flex flex-row`}
                onClick={() => setSelectedPlanIndex(index)}
                style={{cursor: "pointer"}}
              >
                <div className="flex flex-col p-6">
                  <p className="text-black text-xl font-satoshi font-semibold mb-3">
                    {item.name}
                  </p>
                  <div className="flex flex-row items-end">
                    <p className="text-black text-5xl font-forum font-bold">
                      ${item.price}
                    </p>
                    <p className="font-satoshi mb-1">/week</p>
                  </div>
                  <p className="font-satoshi text-sm font-medium text-gray-500 mt-3 pb-2 border-b border-gray-200">
                    Billed before the start of the week
                  </p>
                  <p className="font-satoshi text-sm font-semibold text-gray-700 mt-3 w-[300px]">
                    {item.description}
                  </p>
                </div>
                {index === 2 && (
                  <div className="absolute top-6 right-6 bg-[#e36d4e]/80 px-3 py-2 rounded-full">
                    <p className="text-white font-satoshi font-semibold text-xs">
                      Most popular
                    </p>
                  </div>
                )}
              </div>
            ))}
          </>
        ) : (
          <div
            className={`border-4 relative ${
              selectedPlanIndex === 0
                ? "border-[#e36d4e] shadow-lg"
                : "border-gray-200 hover:border-[#e36d4e]/30 hover:shadow-sm cursor-pointer"
            } rounded-4xl p-1 gap-x-4 flex flex-row`}
            onClick={() => setSelectedPlanIndex(0)}
            style={{cursor: "pointer"}}
          >
            <div className="flex flex-col p-6">
              <p className="text-black text-xl font-satoshi font-semibold mb-3">
                Custom
              </p>
              <div className="flex flex-row items-end">
                <p className="text-black text-5xl font-forum font-bold">$$</p>
              </div>
              <p className="font-satoshi text-sm font-medium text-gray-500 mt-3 pb-2 border-b border-gray-200">
                Billed before the start of the week
              </p>
              <p className="font-satoshi text-sm font-semibold text-gray-700 mt-3 w-[300px]">
                You can set you start, end and number of meals per for ur
                choice. select your own meal plan and start your journey to a
                healthier lifestyle.
              </p>
            </div>
            {selectedPlanIndex === 0 && (
              <div className="absolute top-6 right-6 bg-[#e36d4e]/80 px-3 py-2 rounded-full">
                <p className="text-white font-satoshi font-semibold text-xs">
                  Most popular
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default StepOne;
