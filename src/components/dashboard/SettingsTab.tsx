import React from "react";
import Image from "next/image";

const SettingsTab: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center py-12 min-h-[80vh] bg-white">
      <h1 className="text-4xl font-forum font-bold mb-12 text-center">Your Profile</h1>
      <div className="w-full max-w-xl flex flex-col gap-8">
        <div className="flex items-center justify-between bg-white border border-gray-200 rounded-2xl px-6 py-5">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
              <Image src="/img/avatar.png" alt="avatar" width={64} height={64} />
            </div>
            <div>
              <div className="text-lg font-semibold">Sam Lee</div>
              <div className="text-gray-400 text-sm">Tenant since April 23, 2025</div>
            </div>
          </div>
          <button className="text-[#e36d4e] font-medium">Edit</button>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <div className="text-lg font-semibold">Mobile</div>
            <div className="text-gray-400 text-base mt-1">+960 9123456</div>
          </div>
          <button className="text-[#e36d4e] font-medium">Edit</button>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <div className="text-lg font-semibold">Email</div>
            <div className="text-gray-400 text-base mt-1">sam@hotmail.com</div>
          </div>
          <button className="text-[#e36d4e] font-medium">Edit</button>
        </div>
      </div>
    </div>
  );
};

export default SettingsTab;
