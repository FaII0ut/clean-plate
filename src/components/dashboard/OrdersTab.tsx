import React, {useState} from "react";
import {menu} from "@/data/menu";
import OrderMealCard from "@/components/dashboard/OrderMealCard";
import {DynamicIcon} from "lucide-react/dynamic";
import Button from "../Button";

const OrdersTab: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  // Removed unused setItem to fix lint error

  // Request modal
  const [requestModalOpen, setRequestModalOpen] = useState(false);
  const [requestType, setRequestType] = useState("");
  const [remark, setRemark] = useState("");
  const handleRequestSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: handle request logic here
    setRequestModalOpen(false);
    setRequestType("");
    setRemark("");
  };
  return (
    <>
      <div className="w-full pb-32 flex-1 flex flex-col mx-auto container px-4 md:px-12 mt-12">
        <div className="flex flex-col">
          <p className="text-gray-600 font-forum font-bold text-4xl">
            My Orders
          </p>
        </div>
        <div className="grid md:grid-cols-4 grid-cols-2 gap-4 mt-12">
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
        <div className="grid md:grid-cols-3 grid-cols-1 gap-4 mt-4">
          {menu.slice(0, 3).map((item, index) => (
            <OrderMealCard onClick={openModal} key={index} item={item} />
          ))}
        </div>

        <p className="text-gray-600 font-satoshi font-semibold text-xl mt-12">
          Tomorrow
        </p>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-4 mt-4">
          {menu.slice(4, 7).map((item, index) => (
            <OrderMealCard onClick={openModal} key={index} item={item} />
          ))}
        </div>

        <p className="text-gray-600 font-satoshi font-semibold text-xl mt-12">
          12 Jun, 2025
        </p>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-4 mt-4">
          {menu.slice(9, 12).map((item, index) => (
            <OrderMealCard onClick={openModal} key={index} item={item} />
          ))}
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
          <div className="flex justify-between items-center mb-6 p-4 px-6 border-b border-[#f3f3f3] sticky top-0 z-10 bg-white">
            <h2 className="text-3xl font-satoshi font-semibold">
              #ORDER12341231
            </h2>
            <button
              className="text-gray-500 hover:text-black text-2xl hover:bg-[#f3f3f3] cursor-pointer w-12 h-12 rounded-xl flex items-center justify-center"
              onClick={() => closeModal()}
              aria-label="Close cart"
            >
              <DynamicIcon name="x" color="black" size={20} />
            </button>
          </div>

          <div className="flex flex-col px-6 mt-6">
            <div className="flex items-center flex-row justify-between mb-8">
              <p className="font-satoshi font-semibold text-lg text-gray-700">
                History
              </p>
              <button
                className="px-4 py-2 rounded-2xl bg-[#e36d4e]/10"
                onClick={() => setRequestModalOpen(true)}
              >
                <p className="font-satoshi font-semibold text-sm text-[#e36d4e]">
                  Make a request
                </p>
              </button>
            </div>
            <div className="flex flex-col gap-y-8">
              <div className="flex flex-row">
                <div className="min-w-8 min-h-8 max-w-8 max-h-8 rounded-full overflow-hidden bg-[#e36d4e]/10 mr-3">
                  <img src="/img/logo.png" alt="" />
                </div>
                <div className="flex flex-col gap-y-2">
                  <p className="font-satoshi font-semibold text-base text-gray-700">
                    Clean plate
                  </p>
                  <p className="font-satoshi font-medium text-sm text-gray-400">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Officia nulla iure eius nobis, sed vel reprehenderit ad a
                    provident, aliquam aut, aspernatur porro libero quaerat
                    suscipit alias animi labore voluptatem?
                  </p>
                  <p className="font-satoshi font-medium text-sm text-gray-400">
                    22:03 23.07.2025
                  </p>
                </div>
              </div>
              <div className="flex flex-row">
                <div className="min-w-8 min-h-8 max-w-8 max-h-8 rounded-full overflow-hidden bg-[#e36d4e]/10 mr-3">
                  <img src="/img/avatar.png" alt="" />
                </div>
                <div className="flex flex-col gap-y-2">
                  <p className="font-satoshi font-semibold text-base text-gray-700">
                    You
                  </p>
                  <p className="font-satoshi font-medium text-sm text-gray-400">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Officia nulla iure eius nobis, sed vel reprehenderit ad a
                    provident, aliquam aut, aspernatur porro libero quaerat
                    suscipit alias animi labore voluptatem?
                  </p>
                  <p className="font-satoshi font-medium text-sm text-gray-400">
                    22:03 23.07.2025
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Centered Request Modal */}
      {requestModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center">
          <div
            className="fixed inset-0 bg-black/10 bg-opacity-30 backdrop-blur-sm transition-opacity duration-200"
            onClick={() => setRequestModalOpen(false)}
          />
          <form
            className="relative bg-white rounded-2xl shadow-2xl p-8 w-full max-w-lg z-[101] flex flex-col gap-4"
            onSubmit={handleRequestSubmit}
          >
            <h3 className="font-forum text-2xl font-bold mb-2 text-center">
              Make a Request
            </h3>
            <label className="font-satoshi font-semibold text-sm">
              Type of Request
            </label>
            <select
              className="border rounded-xl border-gray-200 px-4 py-2 text-base font-satoshi w-full mb-2"
              value={requestType}
              onChange={(e) => setRequestType(e.target.value)}
              required
            >
              <option value="" disabled>
                Select type
              </option>
              <option value="cancel">Cancel my order</option>
              <option value="change">Change my meal</option>
              <option value="other">Other</option>
            </select>
            <label className="font-satoshi font-semibold text-sm">Remark</label>
            <textarea
              className="border rounded-xl border-gray-200 px-4 py-2 text-base font-satoshi w-full mb-2 min-h-[80px]"
              value={remark}
              onChange={(e) => setRemark(e.target.value)}
              placeholder="Add any remarks..."
              required
            />
            <div className="flex flex-row gap-4 mt-2 justify-end">
              <Button onClick={() => setRequestModalOpen(false)}>Cancel</Button>
              <Button onClick={handleRequestSubmit} variant="secondary">
                Submit
              </Button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default OrdersTab;
