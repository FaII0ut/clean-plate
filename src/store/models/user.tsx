import {action, Action} from 'easy-peasy';
import type { User } from '../../types/global';

export type UserModal = {
  user: User | null;
  token: string | null;
  setUser: Action<UserModal, User | null>;
  setToken: Action<UserModal, string | null>;
};

const user: UserModal = {
  user: null,
  token: null,

  setUser: action((state, payload) => {
    state.user = payload;
  }),

  setToken: action((state, payload) => {
    state.token = payload;
  }),


};

export default user;
