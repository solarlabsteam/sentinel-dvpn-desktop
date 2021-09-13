import { createRouter, createWebHashHistory, RouterView } from 'vue-router'
import Home from '@/client/pages/Home'
import Plans from '@/client/pages/Plans'
import ChangeLocation from '@/client/pages/ChangeLocation'
import PaymentResult from '@/client/pages/PaymentResult'
import BalanceCheckout from '@/client/pages/BalanceCheckout'
import Settings from '@/client/pages/Settings'
import Root from '@/client/pages/Root'
import i18n from '@/client/plugins/i18n'

const routes = [
  {
    path: '/',
    name: 'root',
    component: Root
  },
  {
    path: '/home',
    component: Home,
    name: 'home',
    meta: {
      title: i18n.global.t('route.home.title'),
      hasStepBackButton: false
    }
  },
  {
    path: '/change-location',
    name: 'change-location',
    component: ChangeLocation,
    meta: {
      title: i18n.global.t('route.changeLocation.title'),
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
        hasStepBackButton: true,
        blurConnectionScreen: true
      }
    }, {
      path: 'change-location',
      name: 'plan-change-location',
      component: ChangeLocation,
      meta: {
        title: i18n.global.t('route.changeLocation.title'),
        hasStepBackButton: true,
        blurConnectionScreen: true
      }
    }, {
      path: 'balance-checkout',
      name: 'balance-checkout',
      component: BalanceCheckout,
      meta: {
        title: i18n.global.t('route.checkout.title'),
        hasStepBackButton: true,
        blurConnectionScreen: true
      }
    }]
  },
  {
    path: '/payment',
    name: 'payment-result',
    component: PaymentResult,
    meta: {
      blurConnectionScreen: true
    }
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
