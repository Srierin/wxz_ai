import { createApp } from 'vue'
import router from './router/index'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'

const pinia = createPinia();

createApp(App)
     .use(router) //SPA
     .use(pinia)
     .mount('#app')
     
