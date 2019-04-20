import Vue from 'vue';
import Buefy from 'buefy';
import App from './App.vue';
import router from './router';
import store from './store';

// import 'buefy/dist/buefy.css';
import 'bulma-divider/dist/css/bulma-divider.min.css';

Vue.config.productionTip = false;

Vue.use(Buefy);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
