import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/client/views/Home'
import Plans from '@/client/views/Plans'
import Login from '@/client/views/Login'

const routes = [
  {
    path: '/',
    component: Login,
    name: 'login'
  },
  {
    path: '/home',
    component: Home,
    name: 'home',
    meta: {
      title: 'Current Plan'
    }
  },
  {
    path: '/nodes',
    name: 'nodes',
    component: () => import(/* webpackChunkName: "about" */ '../views/Nodes.vue'),
    meta: {
      title: 'Change Location'
    }
  },
  {
    path: '/plans',
    name: 'plans',
    component: Plans,
    meta: {
      title: 'Plans'
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
