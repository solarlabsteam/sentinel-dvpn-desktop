import { createApp } from 'vue'
import VueClipboard from 'vue3-clipboard'
import App from './client/App.vue'
import router from './client/router'
import store from '@/client/store/store'
import registerSlrComponents from '@/client/plugins/slr-components'

const app = createApp(App)

app.use(router)
app.use(store)
app.use(registerSlrComponents)
app.use(VueClipboard, {
  autoSetContainer: true,
  appendToBody: true
})

app.mount('#app')
