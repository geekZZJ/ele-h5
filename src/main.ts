import 'vant/lib/index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

const rootValue = 16
const rootWidth = 399
const deviceWidth = document.documentElement.clientWidth
document.documentElement.style.fontSize = (deviceWidth * rootValue) / rootWidth + 'px'

app.mount('#app')
