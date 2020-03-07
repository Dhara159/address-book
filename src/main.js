import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import VueAxios from 'vue-axios';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'

import HomeComponent from './components/HomeComponent.vue';
import CreateComponent from './components/CreateComponent.vue';
import IndexComponent from './components/IndexComponent.vue';
import EditComponent from './components/EditComponent.vue';

Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(VueAxios, axios);

const routes = [
  {
      name: 'home',
      path: '/',
      component: HomeComponent
  },
  {
      name: 'create',
      path: '/create',
      component: CreateComponent
  },
  {
      name: 'addressBooks',
      path: '/addressBooks',
      component: IndexComponent
  },
  {
      name: 'edit',
      path: '/edit/:id',
      component: EditComponent
  }
];

const router = new VueRouter({ mode: 'history', routes: routes });

new Vue(Vue.util.extend({ router }, App)).$mount('#app');