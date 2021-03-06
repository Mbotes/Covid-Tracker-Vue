import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Country from '../views/Country.vue'
import Maps from '../views/Maps.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  },
  {
    path:'/country/:name',
    name:'Country',
    component: Country
  },
  {
    path:'/map',
    name:'Maps',
    component: Maps
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router