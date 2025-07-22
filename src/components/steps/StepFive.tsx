import {DynamicIcon} from "lucide-react/dynamic";
import React from "react";

const StepFive: React.FC = () => (
  <div className="flex flex-col h-[calc(100vh-57px)]  overflow-y-auto">
    <h2 className="text-4xl font-forum font-bold mb-2 text-center mt-12 md:mt-0 w-full">
      Confirm & Pay
    </h2>
    <p className="text-gray-600 mb-4 text-base font-medium font-satoshi text-center">
      Review your plan and complete payment
    </p>
    <div className="bg-gray-50 rounded-xl mt-8 p-6 w-full md:max-w-3xl md:min-w-3xl mx-auto border border-[#f3f3f3]">
      <div className="mb-4">
        <h3 className="text-2xl font-forum font-bold mb-2">Order Summary</h3>
        <div className="flex flex-col gap-2 text-gray-600 text-base font-medium">
          <div className="flex flex-row justify-between">
            <span className="font-satoshi text-base">Plan Type:</span>
            <span className="text-black font-satoshi text-base">Weekly</span>
          </div>
          <div className="flex flex-row justify-between">
            <span className="font-satoshi text-base">Meals Per Day:</span>
            <span className="text-black font-satoshi text-base">2</span>
          </div>
          <div className="flex flex-row justify-between">
            <span className="font-satoshi text-base">Delivery Days:</span>
            <span className="text-black font-satoshi text-base">
              5 days per week
            </span>
          </div>
          <div className="flex flex-row justify-between">
            <span className="font-satoshi text-base">Start Date:</span>
            <span className="text-black font-satoshi text-base">
              July 15, 2025
            </span>
          </div>
        </div>
      </div>
      <hr className="my-4 border-gray-200" />
      <div className="flex flex-row justify-between items-center">
        <span className="font-bold font-satoshi text-lg">Total</span>
        <span className="font-bold font-satoshi text-2xl">MVR 44.99</span>
      </div>
    </div>
    <div className="flex flex-col mt-8 w-full">
      <p className="font-satoshi font-semibold text-sm mb-2 text-left w-full">
        Account details
      </p>
      <div className="bg-gray-50 rounded-xl px-4 py-3 border border-gray-100 relative justify-center flex flex-col ">
        <p className="font-satoshi font-semibold text-sm text-left w-full text-gray-700">
          Ismail Zaid
        </p>
        <p className="font-satoshi font-semibold text-sm text-left w-full text-gray-400">
          7770012 01200012012
        </p>
        <div className="absolute right-4 w-10 h-10 flex items-center justify-center cursor-pointer bg-[#e36d4e]/10 rounded-xl">
          <DynamicIcon name="copy" size={20} color="#e36d4e" />
        </div>
      </div>
    </div>
    {/* Upload Section */}
    <div className="bg-white border border-dashed border-gray-200 rounded-2xl mt-8 w-full max-w-3xl min-h-[220px] flex flex-col items-center justify-center mx-auto cursor-pointer mb-32 md:mb-0">
      <div className="flex flex-col items-center justify-center py-10 w-full">
        <div className="bg-gray-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
          <DynamicIcon name="upload" size={20} className="text-gray-400" />
        </div>
        <p className="text-sm font-satoshi text-[#8a4f1d] font-semibold mb-1">
          Click to upload
        </p>
        <p className="text-gray-600 text-sm font-satoshi mb-1">
          or drag and drop
        </p>
        <p className="text-gray-400 text-xs font-satoshi">
          PNG, JPG or AVIF (max. 800×400px)
        </p>
      </div>
    </div>
  </div>
);

export default StepFive;
