import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import routes from '../router/';

window.addEventListener('DOMContentLoaded', function() {
  const router = new VueRouter({
    routes,
    scrollBehavior (to, from, savedPosition) {
      console.log(savedPosition);
    }
  });
  Vue.use(VueRouter);
  new Vue({ router }).$mount('#app')
});
