import Vue from 'vue'
import VueAxios from 'vue-axios';
import Vuelidate from 'vuelidate'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'

import router from './router';
import App from './App.vue'

import "./assets/styles/app.scss";

Vue.config.productionTip = false
Vue.use(VueAxios, axios);
Vue.use(Vuelidate);

new Vue(Vue.util.extend({ router }, App)).$mount('#app');