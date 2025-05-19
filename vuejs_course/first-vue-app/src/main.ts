import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App) //Nos permite crear una instancia de la aplicación Vue

app.use(router)

app.mount('#app')
