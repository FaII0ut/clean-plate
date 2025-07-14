import {action, Action} from "easy-peasy";

export type GlobalModal = {
  showCartModal: boolean;
  setShowCartModal: Action<GlobalModal, boolean>;
};

const global: GlobalModal = {
  showCartModal: false,

  setShowCartModal: action((state, payload) => {
    state.showCartModal = payload;
  }),
};

export default global;
