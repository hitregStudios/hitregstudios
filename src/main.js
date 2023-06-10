import './assets/main.css'

import { createApp } from 'vue'
import VueSilentbox from 'vue-silentbox'
import 'vue-silentbox/dist/style.css'
import { createPinia } from 'pinia'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'


library.add(faUserSecret)


import App from './App.vue'
import router from './router'

const app = createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)


app.use(VueSilentbox)
app.use(createPinia())
app.use(router)

app.mount('#app')
