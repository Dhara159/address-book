// After removing multiple pages, there is no need of VueRouter! Not removing the code because of future use purpose
import VueRouter from 'vue-router';
import Vue from 'vue';

import Index from './../containers/Index';

Vue.use(VueRouter);

const routes = [
  {
    name: 'home',
    path: '/',
    component: Index
  }
];

const router = new VueRouter({ mode: 'history', routes: routes });

export default router;