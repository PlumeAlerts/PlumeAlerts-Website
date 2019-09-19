import {MutationTree} from 'vuex';
import {UserState} from './types';

export const mutations: MutationTree<UserState> = {
  loggedIn(state, payload: boolean) {
    state.loggedIn = payload;
  },

  lastValidated(state, payload: number) {
    state.lastValidated = payload;
  },
};
