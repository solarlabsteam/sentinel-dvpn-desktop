import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/client/views/Home'

const routes = [
  {
    path: '/',
    component: Home,
    name: 'home'
  },
  {
    path: '/nodes',
    name: 'nodes',
    component: () => import(/* webpackChunkName: "about" */ '../views/Nodes.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
