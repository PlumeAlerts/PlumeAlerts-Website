import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

import './assets/style.scss';

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
      component: () => import(/* webpackChunkName: "twitch-login-response" */ './views/dashboard/Dashboard.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "login" */ './views/login/Login.vue'),
    },
    {
      path: '/login/twitch',
      name: 'login-twitch',
      component: () => import(/* webpackChunkName: "twitch-login" */ './views/login/LoginTwitch.vue'),
    },
    {
      path: '/login/twitch/response',
      name: 'login-twitch-response',
      component: () => import(/* webpackChunkName: "twitch-login-response" */ './views/login/LoginTwitchResponse.vue'),
    },
  ],
});
