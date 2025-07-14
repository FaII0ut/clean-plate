import global, {GlobalModal} from "./global";
import user, {UserModal} from "./user";
import cart, {CartModal} from "./cart";

export type StoreModel = {
  user: UserModal;
  global: GlobalModal;
  cart: CartModal;
};

const model: StoreModel = {
  global,
  user,
  cart,
};

export default model;
