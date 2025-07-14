import React, {useState} from "react";
import {getNext7Days} from "./StepTwo";
import MenuCard from "../MenuCard";
import {menu} from "@/data/menu";
import {DynamicIcon} from "lucide-react/dynamic";

const StepThree: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const todayStr = new Date().toISOString().split("T")[0];
  const days = getNext7Days(todayStr);

  return (
    <>
      <div className="flex flex-col h-[calc(100vh-57px)]  overflow-y-auto">
        <h2 className="text-4xl font-forum font-bold mb-2 text-center mt-12 md:mt-0">
          Select Your Meals
        </h2>
        <p className="text-gray-600 mb-4 text-base font-medium font-satoshi text-center">
          Select the date and the meals you want to set for the selected day
        </p>
        <div className="flex flex-row flex-wrap items-center justify-center gap-4 mt-4">
          {days.map((item, index) => (
            <div
              key={item.fullDate}
              className={`flex flex-col ${
                index < 1
                  ? "bg-[#396042] text-white"
                  : "hover:bg-[#396042]/20 bg-gray-100"
              } p-2 rounded-xl px-6 py-6 items-center`}
            >
              <p className="font-forum font-bold text-5xl text-inherit">
                {item.date}
              </p>
              <p className="font-satoshi font-semibold text-base text-inherit">
                {item.day}
              </p>
            </div>
          ))}
        </div>
        <div className="flex flex-col mt-12">
          {/* <p className="font-satoshi font-semibold text-base mb-2 text-left w-full">
            Selected meals
          </p> */}
          <div className="flex flex-row flex-wrap gap-4 mt-4">
            {menu.slice(0, 1).map((item) => (
              <MenuCard
                key={item.slug}
                name={item.name}
                price={item.price}
                image={item.img}
                description={item.description}
                slug={item.slug}
                showButton={false}
              />
            ))}
            <div
              onClick={openModal}
              className="bg-gray-50 rounded-3xl p-6 flex flex-col items-center w-full md:max-w-[390px]  md:min-w-[390px] border border-[#f3f3f3]"
            >
              <div className="w-full mb-4 h-[320px]">
                <div
                  className="rounded-2xl w-full h-52 flex items-center justify-center"
                  style={{background: "#e5e7eb"}}
                >
                  <DynamicIcon
                    name="plus"
                    size={56}
                    className="text-gray-500"
                  />
                </div>
              </div>
            </div>
            <div
              onClick={openModal}
              className="bg-gray-50 rounded-3xl p-6 flex flex-col items-center w-full md:max-w-[390px]  md:min-w-[390px] border border-[#f3f3f3] mb-32 md:mb-0"
            >
              <div className="w-full mb-4 h-[320px]">
                <div
                  className="rounded-2xl w-full h-52 flex items-center justify-center"
                  style={{background: "#e5e7eb"}}
                >
                  <DynamicIcon
                    name="plus"
                    size={56}
                    className="text-gray-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div
            className="fixed inset-0 bg-black/10 bg-opacity-30"
            onClick={closeModal}
          ></div>
        </div>
      )}
      <div
        className={`fixed top-0 right-0 max-h-screen h-full w-[600px] p-4 z-[52] transform transition-transform duration-300 ease-in-out ${
          isModalOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-modal="true"
        role="dialog"
      >
        <div className="h-full w-full bg-white rounded-2xl overflow-y-auto">
          <div className="flex justify-between items-center mb-6 p-4 border-b border-[#f3f3f3] sticky top-0 z-10 bg-white">
            <h2 className="text-3xl font-forum font-bold">Select a Meal</h2>
            <button
              className="text-gray-500 hover:text-black text-2xl hover:bg-[#f3f3f3] cursor-pointer w-12 h-12 rounded-xl flex items-center justify-center"
              onClick={() => closeModal()}
              aria-label="Close cart"
            >
              <DynamicIcon name="x" color="black" size={20} />
            </button>
            <div className="w-full h-20 bg-white absolute top-20 border-t border-[#f3f3f3]"></div>
          </div>
          <div className="flex flex-row px-4 relative items-center sticky top-24 z-10 bg-white">
            <input
              className="border border-gray-200 px-3 py-3 rounded-xl w-full font-satoshi font-medium text-base"
              type="text"
              placeholder="Search meals..."
            />
            <div className="flex px-2 py-2 rounded-xl bg-gray-100 items-center absolute right-6 transform ">
              <p className="font-satoshi font-medium text-sm px-4">
                Filter by Goals
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 px-4 mt-6">
            {menu.map((item) => (
              <MenuCard
                key={item.slug}
                name={item.name}
                price={item.price}
                image={item.img}
                description={item.description}
                slug={item.slug}
                showButton={false}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default StepThree;
