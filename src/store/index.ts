import Vue from 'vue';
import Vuex, {StoreOptions} from 'vuex';
import {RootState} from './types';
import {user} from './user/index';
import util from '@/util/util';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {
    version: '1.0.0', // a simple property
  },
  modules: {
    user,
  },
  strict: util.isProduction(),
};

export default new Vuex.Store<RootState>(store);
