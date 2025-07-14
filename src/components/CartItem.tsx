import React from "react";
import Image from "next/image";
import { DynamicIcon } from "lucide-react/dynamic";

interface CartItemProps {
  name: string;
  price: string;
  img: string;
}

const CartItem: React.FC<CartItemProps> = ({ name, price, img }) => {
  return (
    <div className="flex flex-row relative mb-6 border-b border-gray-200 pb-4">
      <div className="w-24 h-24 bg-red-400 rounded-xl mr-4 overflow-hidden">
        <Image src={img} alt={name} className="w-full h-full object-cover" width={64} height={64} />
      </div>
      <div className="flex flex-col">
        <p className="font-satoshi text-xl font-medium">{name}</p>
        <p className="font-satoshi text-lg text-black/60">MVR {price}</p>
      </div>
      <div className="absolute right-0 top-0">
        <div className="w-10 h-10 bg-gray-100 hover:bg-red-100 rounded-lg flex items-center justify-center cursor-pointer">
          <DynamicIcon name="trash" color="black" size={18} />
        </div>
      </div>
      <div className="flex flex-row absolute right-0 bottom-4">
        <div className="flex flex-row border border-black/30 rounded-lg w-min overflow-hidden">
          <div className="w-8 h-8 flex items-center justify-center text-base hover:bg-[#396042] hover:text-white cursor-pointer">-</div>
          <div className="w-8 h-8 flex items-center justify-center text-base ">1</div>
          <div className="w-8 h-8 flex items-center justify-center text-base hover:bg-[#396042] hover:text-white cursor-pointer">+</div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
