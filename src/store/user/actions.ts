import {ActionTree} from 'vuex';
import {UserState} from './types';
import {RootState} from '../types';
import Vue from 'vue';
import Util from '@/util/util';
import Tokens from '@/util/tokens';
import APILogin from '@/network/v1/login';

const LOGGED_IN = 'loggedIn';

export const actions: ActionTree<UserState, RootState> = {
  async validateLogin({commit}): Promise<boolean> {
    if (Vue.cookies.isKey('accessToken')) {
      const expiredAt = Vue.cookies.get('expiredAt');
      const refreshExpiredAt = Vue.cookies.get('refreshExpiredAt');

      if (Util.beforeNow(expiredAt)) {
        if (Util.beforeNow(refreshExpiredAt)) {
          Tokens.removeTokens();
          commit(LOGGED_IN, false);
          return false;
        }
      } else if (this.getters.loggedIn && new Date().getTime() - this.getters.lastValidated < 1000 * 60 * 5) {
        commit(LOGGED_IN, true);
        return true;
      }

      const loggedIn = await APILogin.postValidate(Vue.cookies.get('accessToken'))
        .then((value) => {
          if (value.status === 200) {
            commit('lastValidated', new Date().getTime());
            return true;
            // TODO Make sure a refresh is done before reaching this point
          } else {
            Tokens.removeTokens();
            return false;
          }
        })
        .catch(() => {
          // TODO Might not be the best option
          return false;
        });

      commit(LOGGED_IN, loggedIn);
      return loggedIn;
    } else {
      commit(LOGGED_IN, false);
      return false;
    }
  },
};
