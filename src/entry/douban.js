import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from '../router/';
import store from '../store/';

window.addEventListener('DOMContentLoaded', function() {
  const router = new VueRouter({
    routes,
    scrollBehavior (to, from, savedPosition) {
  	  if (savedPosition) {
  		  return savedPosition
  		} else {
  			if (from.meta.keepAlive) {
  				from.meta.savedPosition = document.body.scrollTop;
  			}
  		  return { x: 0, y: to.meta.savedPosition ||0}
      }
  	}
  });

  Vue.use(VueRouter);
  new Vue({ router, store }).$mount('#app')
});
