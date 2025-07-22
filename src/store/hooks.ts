import { createTypedHooks } from "easy-peasy";
import { StoreModel } from "./models";

const { useStoreActions, useStoreState, useStoreDispatch } = createTypedHooks<StoreModel>();

export { useStoreActions, useStoreState, useStoreDispatch };
