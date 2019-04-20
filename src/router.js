import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/ViewHome.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import(/* webpackChunkName: "dashboard" */ './views/ViewDashboard.vue'),
    },
    {
      path: '/alerts',
      name: 'alerts',
      component: () => import(/* webpackChunkName: "alerts" */ './views/ViewAlerts.vue'),
    },
    {
      path: '/bot',
      name: 'bot',
      component: () => import(/* webpackChunkName: "about" */ './views/ViewBot.vue'),
    },
  ],
});
