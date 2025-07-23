import React from "react";

const allergies = [
  "Dairy",
  "Eggs",
  "Fish",
  "Shellfish",
  "Tree Nuts",
  "Peanuts",
  "Wheat",
  "Soy",
];

const restrictions = [
  "Vegetarian",
  "Vegan",
  "Gluten-Free",
  "Keto",
  "Paleo",
  "Low-Carb",
  "Low-Fat",
  "Low-Sodium",
];
const StepFour: React.FC = () => {
  return (
    <div className="flex flex-col h-[calc(100vh-57px)]  overflow-y-auto pt-18 md:pt-46 z-1 w-full md:w-auto">
      <h2 className="text-4xl font-forum font-bold mb-2 text-center mt-12 md:mt-0">
        Special Requirements
      </h2>
      <p className="text-gray-600 mb-4 text-base font-medium font-satoshi text-center">
        Let us know about any allergies or dietary restrictions
      </p>
      <div className="flex flex-col mt-12 md:max-w-xl md:min-w-xl items-center">
        <p className="font-satoshi font-semibold text-base mb-2 text-left w-full">
          Allergies
        </p>
        <div className="flex flex-row flex-wrap gap-2 items-start mt-2">
          {allergies.map((item, index) => (
            <p
              key={item}
              className={`font-satoshi font-semibold text-sm ${
                index < 4 ? "bg-[#1f3040] text-white" : "bg-gray-200"
              } px-4 py-1.5 rounded-full`}
            >
              {item}
            </p>
          ))}
        </div>

        <p className="font-satoshi font-semibold text-base mb-2 text-left w-full mt-8">
          Restrictions
        </p>
        <div className="flex flex-row flex-wrap gap-2 items-start mt-2">
          {restrictions.map((item, index) => (
            <p
              key={item}
              className={`font-satoshi font-semibold text-sm ${
                index < 4 ? "bg-[#1f3040] text-white" : "bg-gray-200"
              } px-4 py-1.5 rounded-full`}
            >
              {item}
            </p>
          ))}
        </div>

        <p className="font-satoshi font-semibold text-base mb-2 text-left w-full mt-8">
          Additional Information
        </p>
        <textarea
          placeholder="E.g., I prefer less spicy food, I need extra protein, etc."
          className="border border-gray-200 px-3 py-3 rounded-xl w-full font-satoshi min-h-[120px] font-medium text-base"
        />
        <p className="text-gray-400 mt-2 text-sm font-medium font-satoshi w-full text-left">
          Any other requirements or preferences we should know about
        </p>
      </div>
    </div>
  );
};

export default StepFour;
