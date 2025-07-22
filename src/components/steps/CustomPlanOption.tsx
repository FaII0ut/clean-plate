import React, {useState} from "react";

const CustomPlanOption: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<string>();
  const [numberOfMeals, setNumberOfMeals] = useState<string>("2");

  return (
    <div className="flex flex-col mt-12 min-w-xl items-center w-full">
      <p className="font-satoshi font-semibold text-base mb-2 text-left w-full">
        Date range
      </p>
      <div className="flex flex-row gap-4 w-full">
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
      </div>
      <p className="text-gray-400 mt-2 text-sm font-medium font-satoshi w-full text-left">
        We need at least 24 hours to prepare your first delivery
      </p>
      <p className="font-satoshi font-semibold text-base mb-2 text-left w-full mt-8">
        Number of meals
      </p>
      <input
        className="border border-gray-200 px-3 py-3 rounded-xl w-full font-satoshi font-medium text-base"
        type="number"
        value={numberOfMeals}
        min={1}
        onChange={(e) => setNumberOfMeals(e.target.value)}
      />
    </div>
  );
};

export default CustomPlanOption;
