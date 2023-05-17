import '@popperjs/core/dist/umd/popper.min.js'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { initializeApp } from 'firebase/app'

import './assets/main.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
library.add(fas)
library.add(far)

const firebaseConfig = {
  apiKey: 'AIzaSyBIF7QwsEZ2hj2_OJSjHgD6kr-vAYi27Io',
  authDomain: 'board-connect.firebaseapp.com',
  projectId: 'board-connect',
  storageBucket: 'board-connect.appspot.com',
  messagingSenderId: '119315799004',
  appId: '1:119315799004:web:000480f797beae27d24d19',
  measurementId: 'G-KMWE4VGH6T'
}
export const firebaseApp = initializeApp(firebaseConfig)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(createPinia())
app.use(router)

app.mount('#app')
