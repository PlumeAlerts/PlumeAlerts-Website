import {Module} from 'vuex';
import {getters} from './getters';
import {actions} from './actions';
import {mutations} from './mutations';
import {UserState} from './types';
import {RootState} from '../types';

export const state: UserState = {
  loggedIn: false,
  lastValidated: 0,
};

export const user: Module<UserState, RootState> = {
  state,
  getters,
  actions,
  mutations,
};
