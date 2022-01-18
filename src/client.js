import { createApp } from 'vue'
import VueClipboard from 'vue3-clipboard'
import App from './client/App.vue'
import router from './client/router'
import store from '@/client/store/store'
import registerSlrComponents from '@/client/plugins/slr-components'
import i18n from '@/client/plugins/i18n'

const app = createApp(App)

app.config.errorHandler = (err, vm) => {
  if (process.env.NODE_ENV === 'development') {
    console.error(err)
  } else {
    window.logger.error(`${vm.$options.name || 'Unknown component'}. ${err}`)
  }
}

app.use(router)
app.use(store)
app.use(registerSlrComponents)
app.use(VueClipboard, {
  autoSetContainer: true,
  appendToBody: true
})
app.use(i18n)

app.mount('#app')
