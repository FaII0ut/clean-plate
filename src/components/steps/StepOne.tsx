import React from "react";

const StepOne: React.FC = () => (
  <div className="flex flex-col h-[calc(100vh-57px)]  overflow-y-auto">
    <h2 className="text-4xl font-forum font-bold mb-2 text-center mt-12 md:mt-0">
      Choose a Plan
    </h2>
    <p className="text-gray-600 mb-4 text-base font-medium font-satoshi text-center">
      Choose a meal plan that fits your lifestyle. You can modify or cancel your
      subscription anytime.
    </p>
    <div className="flex flex-col items-center mt-6 md:mt-12">
      <div className="border-full rounded-full p-1 gap-x-4 flex flex-row border-2 border-[#eb7147]">
        <div className="flex items-center justify-center px-6 py-2 rounded-full bg-[#eb7147]">
          <p className="text-white font-satoshi font-medium">Weekly</p>
        </div>
        <div className="flex items-center justify-center px-6 py-2 rounded-full">
          <p className="text-[#eb7147] font-satoshi font-medium">Monthly</p>
        </div>
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 mt-24 md:gap-x-6 gap-y-6">
      {[
        {
          id: 1,
          name: "Single Meal",
          price: 25,
          description:
            "You can select the meals you want for each day prior to the start of the week. you cant change your selection after the start of the week.",
        },
        {
          id: 2,
          name: "Double Meal",
          price: 45,
          description:
            "you can select the meals you want for each day prior to the start of the week. you cant change your selection after the start of the week.",
        },
        {
          id: 3,
          name: "Full course",
          price: 100,
          description:
            "you can select the meals you want for each day prior to the start of the week. you cant change your selection after the start of the week.",
        },
      ].map((item, index) => (
        <div
          key={index}
          className={`border-4 relative ${
            index === 1
              ? "border-[#eb7147] shadow-lg"
              : "border-gray-200 hover:border-[#eb7147]/30 hover:shadow-sm cursor-pointer"
          } rounded-4xl p-1 gap-x-4 flex flex-row`}
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
         {index === 2 && <div className="absolute top-6 right-6 bg-[#eb7147]/80 px-3 py-2 rounded-full">
            <p className="text-white font-satoshi font-semibold text-xs">
              Most popular
            </p>
          </div>}
        </div>
      ))}
    </div>
    {/* Step-specific content here */}
  </div>
);

export default StepOne;
