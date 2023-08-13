import { createApp } from 'vue'
import '../src/style/main.scss'
import App from './App.vue'

import {routers} from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'


library.add(fas,far,fab)
const app = createApp(App)
app.use(routers)
app.component('fa', FontAwesomeIcon)
app.mount('#app')