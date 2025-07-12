import React from "react";
import Button from "./Button";

interface MenuCardProps {
  name: string;
  price: string;
  image: string;
  description: string;
}

export default function MenuCard({
  name,
  price,
  image,
  description,
}: MenuCardProps) {
  return (
    <div className="bg-[#faf9f7] rounded-3xl p-6 flex flex-col items-center w-full md:max-w-[390px] border border-[#f3f3f3]">
      <div className="w-full mb-4">
        <img
          src={image}
          alt={name}
          className="rounded-2xl w-full h-52 object-cover"
          style={{background: "#e5e7eb"}}
        />
      </div>
      <div className="flex w-full items-center justify-between mb-2">
        <span className="font-forum text-3xl text-[#eb7147] font-bold">
          {price}
        </span>
      </div>
      <h3 className="font-satoshi text-lg font-bold text-[#22223B] mb-1 w-full text-left">
        {name}
      </h3>
      <p className="text-gray-500 text-sm mb-2">{description}</p>
      <button
        className="w-full mt-2 bg-[#396042] hover:bg-[#396042] text-white font-satoshi font-semibold py-2 rounded-full shadow transition-all duration-150 text-sm"
        type="button"
      >
        Add to Cart
      </button>
    </div>
  );
}
