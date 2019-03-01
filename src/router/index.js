import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import orders from '../components/orders'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'home', component: HelloWorld },
  { path: '/orders', name: 'orders', component: orders }
]

// eslint-disable-next-line no-new
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
