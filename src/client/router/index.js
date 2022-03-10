import { createRouter, createWebHashHistory } from 'vue-router'
import ChangeLocation from '@/client/pages/ChangeLocation'
import i18n from '@/client/plugins/i18n'
import Onboarding from '@/client/pages/Login/Onboarding'
import Login from '@/client/pages/Login'
import { getStoreValue } from '@/client/store/plugins/syncElectronStore'

const routes = [
  {
    path: '/',
    component: ChangeLocation,
    name: 'home',
    meta: {
      title: i18n.global.t('route.changeLocation.title')
    },
    props: route => {
      let tab = Number(route.query.tab)
      if (isNaN(tab)) tab = null

      return { tab, continent: route.query.continent }
    }
  },
  {
    path: '/onboarding',
    component: Onboarding,
    name: 'login-onboarding'
  },
  {
    path: '/login',
    component: Login,
    name: 'login',
    props: route => ({ isImport: !!route.query.isImport })
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(async (to, from, next) => {
  const key = await getStoreValue('key')
  if (!to.name.startsWith('login') && !key) next({ name: 'login-onboarding' })
  else next()
})

export default router
