import type { StoreModel as _StoreModel } from '../store/models/index';
import type { Actions as _Actions } from 'easy-peasy';

declare global {
  type StoreModel = _StoreModel;
  type StoreActions = _Actions<StoreModel>;
}

export {}; // Ensures this file is treated as a module
