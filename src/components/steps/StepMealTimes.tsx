import React, {useEffect} from "react";
import {useStoreState, useStoreActions} from "@/store/hooks";

const StepMealTimes: React.FC = () => {
  const numberOfMeals = useStoreState((state) => state.plan.numberOfMeals);
  const mealTimeSlots = useStoreState((state) => state.plan.mealTimeSlots);
  const setMealTimeSlots = useStoreActions(
    (actions) => actions.plan.setMealTimeSlots
  );

  // Sync slots to always match numberOfMeals
  const TIME_SLOTS = [
    {value: "morning", label: "6:00–10:00"},
    {value: "afternoon", label: "12:00–13:00"},
    {value: "evening", label: "13:00–18:00"},
    {value: "night", label: "18:00–23:00"},
  ];

  useEffect(() => {
    // If numberOfMeals changes, reset meal time slots
    setMealTimeSlots(
      Array.from({ length: numberOfMeals }, () => ({
        label: '',
        time: '',
      }))
    );
  }, [numberOfMeals, setMealTimeSlots]);

  const handleSlotChange = (idx: number, slotValue: string) => {
    console.log(idx, slotValue);
    const updated = mealTimeSlots.map((slot, i) =>
      i === idx ? {...slot, time: slotValue} : slot
    );
    setMealTimeSlots(updated);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-57px)] overflow-y-auto min-w-[80vw] items-center pt-18 md:pt-46 z-1 w-full md:w-auto">
      <h2 className="text-4xl font-forum font-bold mb-2 text-center mt-12 md:mt-0">
        Select Your Meal Times
      </h2>
      <p className="text-gray-600 mb-8 text-base font-medium font-satoshi text-center">
        Choose a time for each meal. We&apos;ll deliver your meals accordingly!
      </p>
      <div className="flex flex-row gap-8 w-full max-w-md mx-auto items-center justify-center">
        {[...Array(numberOfMeals)].map((_, idx) => (
          <div key={idx} className="flex flex-col items-center gap-6">
            <p className="font-satoshi font-semibold text-lg w-32 text-center">
              Meal {idx + 1}
            </p>

            {TIME_SLOTS.map((ts) => (
              <div
                onClick={() => handleSlotChange(idx, ts.value)}
                className={`flex flex-col items-center bg-gray-100 rounded-xl p-4 overflow-hidden relative group hover:bg-gray-200 cursor-pointer ${
                  mealTimeSlots[idx]?.time === ts.value
                    ? "ring-2 ring-gray-400"
                    : ""
                }`}
                key={ts.value}
              >
                <div
                  className={`absolute top-2 -right-4 w-20 h-20 rounded-full overflow-hidden  ${
                    mealTimeSlots[idx]?.time === ts.value
                      ? " opacity-100"
                      : "opacity-25 group-hover:opacity-50"
                  }`}
                >
                  <img src={`/img/slots/${ts.value}.png`} alt={ts.value} />
                </div>
                <p
                  key={ts.value}
                  className="font-satoshi font-semibold text-sm w-32 text-center capitalize z-10"
                >
                  {ts.value.replace("_", " ")}
                </p>
                <span className="text-xs text-gray-400 font-satoshi font-semibold">
                  Don&apos;t forget to select a time slot for each meal.
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepMealTimes;
