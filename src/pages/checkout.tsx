import React from "react";
import Image from "next/image";
import {menu} from "@/data/menu";
import Button from "@/components/Button";

const CheckoutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#fafafa] flex flex-col items-center py-12 mx-auto container px-12">
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Left: Delivery */}
        <div className="bg-white rounded-2xl col-span-2 p-10 flex flex-col gap-8 border border-gray-100">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-forum font-bold mb-2">Checkout</h1>
            <div className="text-gray-500 text-base mb-6">
              2 Items ・ MVR {Number(menu[0].price) + Number(menu[1].price)}
            </div>
          </div>
          {/* Delivery method */}
          <div>
            <div className="text-lg font-semibold mb-3">Delivery method</div>
            <div className="flex flex-col gap-2">
              <label className="flex items-start gap-3 border rounded-xl p-4 cursor-pointer bg-gray-50 border-black">
                <input
                  type="radio"
                  name="shipping"
                  defaultChecked
                  className="mt-1 accent-black"
                />
                <div>
                  <div className="font-semibold">Standard Shipping</div>
                  <div className="text-gray-400 text-sm">5-7 Days</div>
                  <div className="text-gray-400 text-sm">+MVR 10</div>
                </div>
              </label>
              <label className="flex items-start gap-3 border rounded-xl p-4 cursor-pointer">
                <input
                  type="radio"
                  name="shipping"
                  className="mt-1 accent-black"
                />
                <div>
                  <div className="font-semibold">Express Shipping</div>
                  <div className="text-gray-400 text-sm">2-3 Days</div>
                  <div className="text-gray-400 text-sm">+MVR 50</div>
                </div>
              </label>
            </div>
          </div>
          {/* Delivery details */}
          <div>
            <div className="text-lg font-semibold mb-3 mt-8">
              Delivery details
            </div>
            <form className="flex flex-col gap-5">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Email address
                </label>
                <input
                  type="email"
                  placeholder="Enter email"
                  className="w-full border border-gray-200 rounded-full px-4 py-2 outline-none focus:ring-2 focus:ring-[#e36d4e]"
                />
              </div>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  defaultChecked
                  className="accent-black"
                />
                <span className="text-sm font-medium">
                  Sign me up for special offers
                </span>
              </label>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Full name
                </label>
                <input
                  type="text"
                  placeholder="Enter name"
                  className="w-full border border-gray-200 rounded-full px-4 py-2 outline-none focus:ring-2 focus:ring-[#e36d4e]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Country or region
                </label>
                <select className="w-full border border-gray-200 rounded-full px-4 py-2 outline-none focus:ring-2 focus:ring-[#e36d4e] text-gray-500">
                  <option>Choose country</option>
                  <option>Maldives</option>
                  <option>India</option>
                  <option>Sri Lanka</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Address line 1
                </label>
                <input
                  type="text"
                  placeholder="Enter address"
                  className="w-full border border-gray-200 rounded-full px-4 py-2 outline-none focus:ring-2 focus:ring-[#e36d4e]"
                />
              </div>
            </form>
          </div>
        </div>
        <div>
          <div className="bg-white rounded-2xl p-10 border border-gray-100 flex flex-col gap-8">
            <div className="text-xl font-semibold mb-4">Cart details</div>
            {/* Cart items */}
            <div className="flex flex-col gap-6 border-b border-gray-200 pb-6">
              {[menu[0], menu[1]].map((item, idx) => (
                <div className="flex gap-4 items-center" key={idx}>
                  <div className="min-w-20 min-h-20 bg-gray-100 rounded-lg overflow-hidden">
                    <Image
                      src={item.img}
                      alt={item.name}
                      width={80}
                      height={80}
                      className="object-cover"
                    />
                  </div>
                  <div className="font-semibold">
                    <p className="text-lg font-satoshi">{menu[idx].name}</p>
                    <p className="text-xs text-gray-500 font-satoshi ">
                      {menu[idx].description}
                    </p>
                  </div>
                  <div className="font-semibold text-lg">MVR {item.price}</div>
                </div>
              ))}
            </div>
            {/* Order summary */}
            <div className="mt-2">
              <div className="text-lg font-semibold mb-2">Order Summary</div>
              <div className="flex flex-col gap-2 text-sm">
                <div className="flex justify-between">
                  <span>2 Items</span>
                  <span>
                    MVR {Number(menu[0].price) + Number(menu[1].price)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>GST</span>
                  <span>MVR 29.85</span>
                </div>
                <div className="flex justify-between">
                  <span>Standard shipping</span>
                  <span>MVR 29.85</span>
                </div>
                <div className="flex justify-between font-bold text-base mt-2">
                  <span>Subtotal</span>
                  <span>
                    MVR{" "}
                    {(
                      Number(menu[0].price) +
                      Number(menu[1].price) +
                      29.85 +
                      29.85
                    ).toFixed(2)}
                  </span>
                </div>
              </div>
              <Button onClick={() => {}} className="w-full mt-4">
                Continue to Payment
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
