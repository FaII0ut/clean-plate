import React from "react";
import Image from "next/image";

interface MenuCardProps {
  name: string;
  price: string;
  image: string;
  description: string;
  slug: string;
  showButton?: boolean;
}

export default function MenuCard({
  name,
  price,
  image,
  description,
  showButton = true,
}: MenuCardProps) {

  return (
    <div className="bg-[#faf9f7] rounded-3xl p-6 flex flex-col items-center w-full md:max-w-[390px] border border-[#f3f3f3]">
      <div className="w-full mb-4">
        <Image
          src={image}
          alt={name}
          className="rounded-2xl w-full h-52 object-cover"
          style={{background: "#e5e7eb"}}
          width={400}
          height={208}
          priority={true}
        />
      </div>
      <div className="flex w-full items-center justify-between mb-2">
        <span className="font-forum text-3xl text-[#eb7147] font-bold">
          MVR {price}
        </span>
      </div>
      <h3 className="font-satoshi text-lg font-bold text-[#22223B] mb-1 w-full text-left">
        {name}
      </h3>
      <p className="text-gray-500 text-sm mb-2">{description}</p>
      {showButton && (
        <button
          className="w-full mt-2 bg-[#396042] hover:bg-[#396042] text-white font-satoshi font-semibold py-2 rounded-full shadow transition-all duration-150 text-sm cursor-pointer"
          type="button"
        >
          View more
        </button>
      )}
    </div>
  );
}
