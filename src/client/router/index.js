import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/client/views/Home'
import Plans from '@/client/views/Plans'
import Login from '@/client/views/Login'
import ChangeLocation from '@/client/views/ChangeLocation'

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
      title: 'Current Plan',
      hasStepBackButton: false
    }
  },
  {
    path: '/change-location',
    name: 'change-location',
    component: ChangeLocation,
    meta: {
      title: 'Change Location',
      hasStepBackButton: true
    }
  },
  {
    path: '/plans',
    name: 'plans',
    component: Plans,
    meta: {
      title: 'Plans',
      hasStepBackButton: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
