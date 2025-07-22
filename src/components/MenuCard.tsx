import React from "react";
import Image from "next/image";
import {DynamicIcon} from "lucide-react/dynamic";
import {useStoreActions} from "@/store/hooks";
import {StoreModel} from "@/store/models";
import {Actions} from "easy-peasy";

interface MenuCardProps {
  name: string;
  price: string;
  image: string;
  description: string;
  slug: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  showButton?: boolean;
}

export default function MenuCard({
  name,
  price,
  image,
  description,
  calories,
  protein,
  carbs,
  fat,
  showButton = true,
}: MenuCardProps) {
  const setShowCartModal = useStoreActions(
    (actions: Actions<StoreModel>) => actions.global.setShowCartModal
  );
  return (
    <div className="bg-[#faf9f7] rounded-3xl p-6 flex flex-col group items-center w-full md:max-w-[390px] border border-[#f3f3f3]">
      <div className="w-full mb-4 relative">
        <Image
          src={image}
          alt={name}
          className="rounded-2xl w-full h-52 object-cover"
          style={{background: "#e5e7eb"}}
          width={400}
          height={208}
          priority={true}
        />
        <div className="flex items-center gap-2 absolute bottom-2 right-2 bg-[#e36d4e] rounded-full px-2 py-1 group-hover:opacity-100 opacity-0 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
          <DynamicIcon name="heart" color="white" size={14}/>
          <p className="text-white text-xs font-medium font-satoshi">2.4K</p>
        </div>
      </div>
      <div className="flex w-full items-center justify-between mb-2">
        <span className="font-forum text-3xl text-[#e36d4e] font-bold">
          MVR {price}
        </span>
      </div>
      <h3 className="font-satoshi text-lg font-bold text-[#22223B] mb-1 w-full text-left">
        {name}
      </h3>
      <p className="text-gray-500 text-sm mb-2">{description}</p>
      <div className="flex w-full items-center mb-3 mt-2 gap-x-4">
        <div className="flex flex-col items-start">
          <span className="text-[#1f3040] text-sm font-semibold font-satoshi">
            {calories}
          </span>
          <span className="text-[#1f3040]  font-medium font-satoshi text-[10px]">
            Calories
          </span>
        </div>
        <div className="flex flex-col items-start">
          <span className="text-[#1f3040] text-sm font-semibold font-satoshi">
            {protein}
          </span>
          <span className="text-[#1f3040]  font-medium font-satoshi text-[10px]">
            Protein
          </span>
        </div>
        <div className="flex flex-col items-start">
          <span className="text-[#1f3040] text-sm font-semibold font-satoshi">
            {carbs}
          </span>
          <span className="text-[#1f3040] font-satoshi font-medium  text-[10px]">
            Carbs
          </span>
        </div>
        <div className="flex flex-col items-start">
          <span className="text-[#1f3040] text-sm font-semibold font-satoshi">
            {fat}
          </span>
          <span className="text-[#1f3040] font-satoshi font-medium  text-[10px]">
            Fat
          </span>
        </div>
      </div>
      {showButton && (
        <div className="flex items-center gap-2 w-full mt-4">
          <button
            className="w-full bg-[#1f3040] hover:bg-[#1f3040] text-white font-satoshi font-semibold py-2 rounded-full shadow transition-all duration-150 text-sm cursor-pointer"
            type="button"
            onClick={() => setShowCartModal(true)}
          >
            Add to cart
          </button>
        </div>
      )}
    </div>
  );
}
