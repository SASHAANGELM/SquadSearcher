import Vue from 'vue';
import Router from 'vue-router';

import AppTemplate from '@/templates/AppTemplate';
import Home from '@/pages/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: AppTemplate,
      children: [{
        path: '',
        name: 'home',
        component: Home
      }]
    },
    {
      path: '/home',
      redirect: '/'
    },
    {
      path: '/about',
      component: AppTemplate,
      children: [{
        path: '',
        name: 'about',
        component: () => import(/* webpackChunkName: "about" */ './pages/About.vue')
      }]
    },
    {
      path: '/test-connection',
      component: AppTemplate,
      children: [{
        path: '',
        name: 'test-connection',
        component: () => import(/* webpackChunkName: "about" */ './pages/TestConnection.vue')
      }]
    },

    {
      path: '/auth/wargaming/success',
      component: () => import(/* webpackChunkName: "about" */ './pages/AuthWargamingSuccess.vue')
    }
  ]
});
