import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeViewEsp from '../views/HomeViewEsp.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeViewEsp
  },
  {
    path: '/home-eng',
    name: 'HomeEn',
    component: () => import("../views/HomeViewEng.vue"),
  },
  {
    path: "/*",
    name: "Error404",
    component: () => import("../views/Error404.vue"),
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
