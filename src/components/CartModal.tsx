import React from "react";
import {useStoreActions, useStoreState} from "easy-peasy";
import {Actions} from "easy-peasy";
import {StoreModel} from "../store/models/index";
import {DynamicIcon} from "lucide-react/dynamic";
import Button from "./Button";
import CartItem from "./CartItem";
import {useRouter} from "next/router";
import { menu } from "@/data/menu";

const CartModal: React.FC = () => {
  const showCartModal = useStoreState(
    (state: StoreModel) => state.global.showCartModal
  );
  const setShowCartModal = useStoreActions(
    (actions: Actions<StoreModel>) => actions.global.setShowCartModal
  );

  const router = useRouter();

  return (
    <>
      {showCartModal && (
        <div
          className="fixed inset-0 bg-black/40 bg-opacity-50 z-[51] transition-opacity duration-300"
          onClick={() => setShowCartModal(false)}
          aria-label="Close cart overlay"
        />
      )}
      <div
        className={`fixed top-0 right-0 max-h-screen h-full w-[600px] p-4 z-[52] transform transition-transform duration-700 ease-in-out ${
          showCartModal ? "translate-x-0" : "translate-x-full"
        }`}
        aria-modal="true"
        role="dialog"
      >
        <div className="h-full w-full bg-white rounded-2xl overflow-y-auto">
          <div className="flex justify-between items-center p-4 border-b border-[#f3f3f3] sticky top-0 z-10 bg-white">
            <h2 className="text-3xl font-forum font-bold">My Cart</h2>
            <button
              className="text-gray-500 hover:text-black text-2xl hover:bg-[#f3f3f3] cursor-pointer w-12 h-12 rounded-xl flex items-center justify-center"
              onClick={() => setShowCartModal(false)}
              aria-label="Close cart"
            >
              <DynamicIcon name="x" color="black" size={20} />
            </button>
          </div>
          <div className="p-4 bg-gray-50 h-full pb-36 overflow-y-auto">
            {[...Array(4)].map((_, i) => (
              <CartItem
                key={i}
                name={menu[i].name}
                price={menu[i].price}
                img={menu[i].img}
              />
            ))}
          </div>
          {/* Sticky bottom bar */}
          <div className="sticky bottom-0 left-0 w-full bg-white border-t border-gray-200 p-6 z-20">
            <div className="flex items-center justify-between mb-4">
              <span className="font-forum text-xl font-bold">Subtotal</span>
              <span className="font-forum text-2xl font-bold">$1200</span>
            </div>
            <Button
              className="w-full py-2 rounded-xl bg-[#1f3040] text-white text-2xl font-satoshi font-bold"
              onClick={() => router.push("/checkout")}
            >
              Checkout
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartModal;
