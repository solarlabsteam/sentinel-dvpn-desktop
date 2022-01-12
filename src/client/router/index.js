import { createRouter, createWebHashHistory } from 'vue-router'
import ChangeLocation from '@/client/pages/ChangeLocation'
import i18n from '@/client/plugins/i18n'
import Node from '@/client/pages/Node'

const routes = [
  {
    path: '/',
    component: ChangeLocation,
    name: 'home',
    meta: {
      title: i18n.global.t('route.changeLocation.title')
    }
  },
  {
    path: '/node',
    name: 'node',
    component: Node,
    meta: {
      hasStepBackButton: true
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
