import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import store from '@/store';

import './assets/style.scss';

Vue.use(Router);

const router = new Router({
  mode: 'history',
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
      meta: {requiresAuth: true},
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

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    store.dispatch('validateLogin')
      .then((value: boolean) => {
        if (value) {
          next();
        } else if (Vue.$cookies.isKey('accessToken')) {
          // TODO Status down page
          next();
        } else {
          next({
            path: '/login',
            query: {redirect: to.fullPath},
          });
        }
      });
  } else {
    next();
  }
});

export default router;
