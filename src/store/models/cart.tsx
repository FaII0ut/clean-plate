import {action, Action, thunk, Thunk} from "easy-peasy";
import {Cart} from "@/types/cart";

export type CartModal = {
  cart: Cart | null;
  setCart: Action<CartModal, Cart | null>;
  fetchCart: Thunk<CartModal>;
};

const cart: CartModal = {
  cart: null,

  setCart: action((state, payload: Cart | null) => {
    state.cart = payload;
  }),

  fetchCart: thunk(async () => {
    try {
      // fetch logic here if needed
    } catch {
      // handle error if needed
    }
  }),
};

export default cart;
