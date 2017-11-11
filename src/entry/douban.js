import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from '../router/';
import store from '../store/';

window.addEventListener('DOMContentLoaded', function() {
  const router = new VueRouter({
    routes,
    scrollBehavior (to, from, savedPosition) {
      console.log(savedPosition);
    }
  });

  Vue.use(VueRouter);
  new Vue({ router, store }).$mount('#app')
});
