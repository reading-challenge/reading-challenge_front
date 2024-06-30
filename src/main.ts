import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import store from '@/stores/store'
import router from '@/router/router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)

app.use(store)
app.use(router)
app.use(ElementPlus)

app.mount('#app')
