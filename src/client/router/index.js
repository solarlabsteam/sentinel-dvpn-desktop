import { createRouter, createWebHashHistory, RouterView } from 'vue-router'
import Onboarding from '@/client/pages/Login/Onboarding'
import Plans from '@/client/pages/Plans'
import ChangeLocation from '@/client/pages/ChangeLocation'
import PaymentResult from '@/client/pages/PaymentResult'
import BalanceCheckout from '@/client/pages/BalanceCheckout'
import Settings from '@/client/pages/Settings'
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
    path: '/login',
    component: Onboarding,
    name: 'login'
  },
  {
    path: '/node',
    name: 'node',
    component: Node,
    meta: {
      hasStepBackButton: true
    }
  },
  {
    path: '/plans',
    component: RouterView,
    children: [{
      path: '',
      name: 'plans',
      component: Plans,
      meta: {
        title: i18n.global.t('route.plans.title'),
        hasStepBackButton: true
      }
    }, {
      path: 'change-location',
      name: 'plan-change-location',
      component: ChangeLocation,
      meta: {
        title: i18n.global.t('route.changeLocation.title'),
        hasStepBackButton: true
      }
    }, {
      path: 'balance-checkout',
      name: 'balance-checkout',
      component: BalanceCheckout,
      meta: {
        title: i18n.global.t('route.checkout.title'),
        hasStepBackButton: true
      }
    }]
  },
  {
    path: '/payment',
    name: 'payment-result',
    component: PaymentResult
  },
  {
    path: '/settings',
    name: 'settings',
    component: Settings,
    meta: {
      title: i18n.global.t('route.settings.title'),
      hasStepBackButton: true
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
