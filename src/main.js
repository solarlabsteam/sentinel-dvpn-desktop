import { createApp } from 'vue'
import App from './client/App.vue'
import router from './client/router'
import store from '@/client/store/store'

const app = createApp(App)

app.use(router)
app.use(store)
app.mount('#app')
