import React from "react";
import Image from "next/image";
import {DynamicIcon} from "lucide-react/dynamic";

interface OrderMealCardProps {
  item: {
    img: string;
    name: string;
    description: string;
    calories: number | string;
    protein: number | string;
    carbs: number | string;
    fat: number | string;
  };
}

const OrderMealCard: React.FC<OrderMealCardProps> = ({item}) => {
  return (
    <div className="flex flex-col border border-gray-200 rounded-2xl p-4 group pb-14 relative">
      <div className="flex flex-row items-center  rounded-2xl w-full gap-x-4 relative">
        <div className="absolute top-2 right-2 p-2 rounded-full group-hover:opacity-100 opacity-0 transition-all duration-150">
          <DynamicIcon name="pencil" size={20} color="#e36d4e" />
        </div>
        <div className="min-w-24 min-h-24 max-w-24 max-h-24 bg-red-400 rounded-2xl overflow-hidden">
          <Image
            src={item.img}
            alt={item.name}
            className="w-full h-full object-cover"
            width={64}
            height={64}
            priority={true}
          />
        </div>
        <div className="flex flex-col w-1/2">
          <p className="font-satoshi font-semibold text-base">{item.name}</p>
          <p className="font-satoshi font-semibold text-xs text-gray-400">
            {item.description}
          </p>
          <div className="flex w-full items-center mb-3 mt-2 gap-x-4">
            <div className="flex flex-col items-start">
              <span className="text-[#1f3040] text-xs font-semibold font-satoshi">
                {item.calories}
              </span>
              <span className="text-[#1f3040]  font-medium font-satoshi text-[10px]">
                Calories
              </span>
            </div>
            <div className="flex flex-col items-start">
              <span className="text-[#1f3040] text-xs font-semibold font-satoshi">
                {item.protein}
              </span>
              <span className="text-[#1f3040]  font-medium font-satoshi text-[10px]">
                Protein
              </span>
            </div>
            <div className="flex flex-col items-start">
              <span className="text-[#1f3040] text-xs font-semibold font-satoshi">
                {item.carbs}
              </span>
              <span className="text-[#1f3040] font-satoshi font-medium  text-[10px]">
                Carbs
              </span>
            </div>
            <div className="flex flex-col items-start">
              <span className="text-[#1f3040] text-xs font-semibold font-satoshi">
                {item.fat}
              </span>
              <span className="text-[#1f3040] font-satoshi font-medium  text-[10px]">
                Fat
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200 mt-4 mt-3 flex flex-row justify-between items-center absolute bottom-0 h-12 w-[93%]">
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
  );
};

export default OrderMealCard;
