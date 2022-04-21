import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import { BootstrapVue } from 'bootstrap-vue'

createApp(App).use(router).mount('#app')

/* eslint-disable */
App.use(router)
// App.use(BootstrapVue)