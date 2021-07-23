import { createRouter, createWebHistory } from 'vue-router'
import Subscriptions from '@/client/views/Subscriptions'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Subscriptions
  },
  {
    path: '/nodes',
    name: 'Nodes',
    component: () => import(/* webpackChunkName: "about" */ '../views/Nodes.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
