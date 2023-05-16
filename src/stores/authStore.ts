import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'
import { firebaseApp } from '@/main'
import {
  getAuth,
  signOut,
  EmailAuthProvider,
  GoogleAuthProvider,
  FacebookAuthProvider,
  TwitterAuthProvider,
  type User
} from 'firebase/auth'
import * as firebaseui from 'firebaseui'
import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore'
import router from '@/router'

export const useStore = defineStore('store', () => {
  const SESSION_KEY = 'UID'
  const COL = {
    USERS: 'users',
    POSTS: 'posts'
  }

  const isLogin: Ref<boolean> = ref(hasSession())
  const user: Ref<User | null> = ref(null)

  function $reset() {
    isLogin.value = false
    user.value = null
    localStorage.removeItem(SESSION_KEY)
  }

  function onLogin(_user: User | null) {
    if (_user == null) return
    localStorage.setItem(SESSION_KEY, _user.uid)
    user.value = _user
  }

  function initAuth() {
    const auth = getAuth()
    auth.onAuthStateChanged((_user: User | null) => {
      if (_user) {
        onLogin(_user)
      } else {
        $reset()
      }
    })
  }

  function initAuthUI() {
    const auth = getAuth()
    const uiConfig = {
      signInSuccessUrl: '/',
      signInOptions: [
        EmailAuthProvider.PROVIDER_ID,
        GoogleAuthProvider.PROVIDER_ID,
        FacebookAuthProvider.PROVIDER_ID,
        TwitterAuthProvider.PROVIDER_ID
      ],
      callbacks: {
        signInSuccessWithAuthResult: () => {
          return true
        },
        uiShown: () => {}
      }
    }
    let ui = firebaseui.auth.AuthUI.getInstance()
    if (!ui) {
      ui = new firebaseui.auth.AuthUI(auth)
    }
    ui.start('#firebaseui-auth-container', uiConfig)
  }

  function hasSession() {
    return localStorage.getItem(SESSION_KEY) != null
  }

  function logout() {
    const auth = getAuth()
    signOut(auth)
      .then(() => {
        router.push('/')
      })
      .catch((error) => {
        console.log(error)
      })
  }

  async function addData(collectionName: string, data: object) {
    const db = getFirestore(firebaseApp)
    return await addDoc(collection(db, collectionName), data)
  }

  async function getDatas(collectionName: string) {
    const db = getFirestore(firebaseApp)
    const querySnapshot = await getDocs(collection(db, collectionName))
    return querySnapshot
  }

  return { COL, isLogin, user, $reset, initAuth, initAuthUI, logout, addData, getDatas }
})
