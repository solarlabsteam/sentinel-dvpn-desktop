import { createRouter, createWebHistory, RouterView } from 'vue-router'
import Home from '@/client/views/Home'
import Plans from '@/client/views/Plans/Plans'
import ChangeLocation from '@/client/views/ChangeLocation'
import PaymentResult from '@/client/views/PaymentResult'
import BalanceCheckout from '@/client/views/BalanceCheckout/BalanceCheckout'
import Settings from '@/client/views/settings/Settings'
import Root from '@/client/views/Root/Root'

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
    component: RouterView,
    children: [{
      path: '',
      name: 'plans',
      component: Plans,
      meta: {
        title: 'Plans',
        hasStepBackButton: true,
        blurConnectionScreen: true
      }
    }, {
      path: 'change-location',
      name: 'plan-change-location',
      component: ChangeLocation,
      meta: {
        title: 'Change Location',
        hasStepBackButton: true,
        blurConnectionScreen: true
      }
    }, {
      path: 'balance-checkout',
      name: 'balance-checkout',
      component: BalanceCheckout,
      meta: {
        title: 'Checkout',
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
      title: 'Default DNS Server',
      hasStepBackButton: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
