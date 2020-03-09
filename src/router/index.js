import VueRouter from 'vue-router';
import Vue from 'vue';

import IndexContainer from './../containers/IndexContainer/IndexContainer';

Vue.use(VueRouter);

const routes = [
  {
    name: 'home',
    path: '/',
    component: IndexContainer
  }
];

const router = new VueRouter({ mode: 'history', routes: routes });

export default router;