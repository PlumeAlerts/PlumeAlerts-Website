import {GetterTree} from 'vuex';
import {UserState} from './types';
import {RootState} from '../types';

export const getters: GetterTree<UserState, RootState> = {
  loggedIn(state): boolean {
    return state.loggedIn;
  },
  lastValidated(state): number {
    return state.lastValidated;
  },
};
