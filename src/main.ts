import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

import './assets/main.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

library.add(faStar)

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
export const firebase = {
  analytics: getAnalytics(firebaseApp),
  auth: getAuth(firebaseApp),
  db: getFirestore(firebaseApp),
  storage: getStorage(firebaseApp)
}

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(createPinia())
app.use(router)

app.mount('#app')
