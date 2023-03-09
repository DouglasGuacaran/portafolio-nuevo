import Vue from 'vue'
import VueRouter from 'vue-router'
import Bienvenida from '../views/Bienvenida.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Bienvenida',
    component: Bienvenida
  },
  {
    path: '/home-es',
    name: 'HomeEsp',
    component: () => import("../views/HomeViewEsp.vue"),
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
