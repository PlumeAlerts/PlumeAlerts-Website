import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import VueCookies from 'vue-cookies';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false;

Vue.use(VueCookies);

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount('#app');
