import React from "react";
import {menu} from "@/data/menu";
import OrderMealCard from "@/components/dashboard/OrderMealCard";

const OrdersTab: React.FC = () => {
  return (
    <div className="w-full pb-32">
      <div className="flex flex-col">
        <p className="text-gray-600 font-forum font-bold text-4xl">My Orders</p>
      </div>
      <div className="grid grid-cols-4 gap-x-4 mt-12">
        <div className="border border-[#e36d4e] ring-2 ring-[#e36d4e] bg-[#e36d4e]/10 rounded-2xl p-6">
          <p className="font-satoshi font-medium text-sm text-gray-500">
            Upcoming Orders
          </p>
          <p className="font-satoshi font-semibold text-4xl mt-2">23</p>
        </div>
        <div className="border border-gray-200 rounded-2xl p-6">
          <p className="font-satoshi font-medium text-sm text-gray-500">
            Completed Orders
          </p>
          <p className="font-satoshi font-semibold text-4xl mt-2">871</p>
        </div>
        <div className="border border-gray-200 rounded-2xl p-6">
          <p className="font-satoshi font-medium text-sm text-gray-500">
            Cancelled Orders
          </p>
          <p className="font-satoshi font-semibold text-4xl mt-2">871</p>
        </div>
      </div>

      <p className="text-gray-600 font-satoshi font-semibold text-xl mt-12">
        Today
      </p>
      <div className="grid grid-cols-3 gap-4 mt-4">
        {menu.slice(0, 3).map((item, index) => (
          <OrderMealCard key={index} item={item} />
        ))}
      </div>

      <p className="text-gray-600 font-satoshi font-semibold text-xl mt-12">
        Tomorrow
      </p>
      <div className="grid grid-cols-3 gap-4 mt-4">
        {menu.slice(4, 7).map((item, index) => (
          <OrderMealCard key={index} item={item} />
        ))}
      </div>

      <p className="text-gray-600 font-satoshi font-semibold text-xl mt-12">
        12 Jun, 2025
      </p>
      <div className="grid grid-cols-3 gap-4 mt-4">
        {menu.slice(9, 12).map((item, index) => (
          <OrderMealCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default OrdersTab;
