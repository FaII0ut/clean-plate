import React from "react";
import Image from "next/image";

const SettingsTab: React.FC = () => {
  return (
    <div className="flex-1 flex flex-col z-20 w-full mx-auto container md:px-12 px-4 mt-12">
      <div className="w-full flex flex-col py-12 min-h-[80vh] bg-white">
        <h1 className="text-4xl font-forum font-bold ">Settings</h1>
        <p className="text-gray-400 font-satoshi font-medium mb-12">
          Manage your account settings here.
        </p>
        <div className="grid md:grid-cols-5 grid-cols-2 w-full gap-y-12">
          <div className="col-span-2">
            <p className="font-satoshi font-medium text-gray-700 text-xl">
              Your photo
            </p>
          </div>
          <div className="col-span-3 md:pt-4">
            <div className="w-24 h-24 rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center">
              <Image
                src="/img/avatar.png"
                alt="avatar"
                width={120}
                height={120}
              />
            </div>
          </div>
          <div className="col-span-2 pt-8 border-t border-gray-100">
            <p className="font-satoshi font-medium text-gray-700 text-xl">
              Personal details
            </p>
          </div>
          <div className="col-span-3 flex flex-col gap-y-4 md:border-t md:border-gray-100 md:pt-8">
            <input
              className="w-[300px] border border-gray-200 rounded-2xl p-2"
              value="+960 9123456"
            />
            <input
              className="w-[300px] border border-gray-200 rounded-2xl p-2"
              value="Sam Lee"
            />
            <input
              className="w-[300px] border border-gray-200 rounded-2xl p-2"
              value="sam@hotmail.com"
            />
          </div>
          <div className="col-span-2 pt-8 border-t border-gray-100">
            <p className="font-satoshi font-medium text-gray-700 text-xl">
              Fitness details
            </p>
          </div>
          <div className="col-span-3 flex flex-col gap-y-4 md:border-t md:border-gray-100 md:pt-8">
            <input
              className="w-[300px] border border-gray-200 rounded-2xl p-2"
              value="120cm"
            />
            <input
              className="w-[300px] border border-gray-200 rounded-2xl p-2"
              value="70kg"
            />
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsTab;
