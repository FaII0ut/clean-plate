import global, {GlobalModal} from "./global";
import user, {UserModal} from "./user";
import cart, {CartModal} from "./cart";
import plan, {PlanModel} from "./plan";

export type StoreModel = {
  user: UserModal;
  global: GlobalModal;
  cart: CartModal;
  plan: PlanModel;
};

const model = {
  global,
  user,
  cart,
  plan,
};

export default model;
