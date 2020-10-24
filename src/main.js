import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueRouter from 'vue-router'
import HeadlinesList from './components/HeadlinesList'
import CategoryList from './components/CategoryList'

Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
  { path: '/cricket', component: CategoryList },
  { path: '/', component: HeadlinesList }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
