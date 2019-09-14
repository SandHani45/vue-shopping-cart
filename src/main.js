import Vue from 'vue'
import App from './App.vue'
//******************************//
//**********bootstarp 4**********//
//******************************//
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
//////////////////////////////
//////////ROUTERS/////////////
//////////////////////////////
import VueRouter from 'vue-router'
//router 
import {routes} from './routes.js';
//vue router 
Vue.use(VueRouter);
const router = new VueRouter({
  mode:'history',
  routes
});
//store
import store from './store';
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
