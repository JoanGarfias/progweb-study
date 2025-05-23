import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import AppHeader from '@/shared/components/layout/AppHeader.vue'

const app = createApp(App) //Nos permite crear una instancia de la aplicación Vue

app.component('AppHeader', AppHeader);
app.use(router);

app.mount('#app');
