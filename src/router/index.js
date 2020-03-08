import VueRouter from 'vue-router';
import Vue from 'vue';

import HomeContainer from './../containers/HomeContainer'
import CreateContainer from './../containers/CreateContainer';
import IndexContainer from './../containers/IndexContainer';
import EditContainer from './../containers/EditContainer';

Vue.use(VueRouter);

const routes = [
  {
    name: 'home',
    path: '/',
    component: HomeContainer
  },
  {
    name: 'create',
    path: '/create',
    component: CreateContainer
  },
  {
    name: 'addressBooks',
    path: '/addressBooks',
    component: IndexContainer
  },
  {
    name: 'edit',
    path: '/edit/:id',
    component: EditContainer
  }
];

const router = new VueRouter({ mode: 'history', routes: routes });

export default router;