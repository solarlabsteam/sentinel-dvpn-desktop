import { createApp } from 'vue'
import App from './client/App.vue'
import router from './client/router'

// todo: Vuex to store all background responses
createApp(App).use(router).mount('#app')
