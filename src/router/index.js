import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/MISTview.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Contact',
    name: 'Contact',
    component: () => import(/* webpackChunkName: "contact" */ '../views/Contactview.vue')
  }
]

const router = new VueRouter({
  routes,
})

export default router
