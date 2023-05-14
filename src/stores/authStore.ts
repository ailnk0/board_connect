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

export const useStore = defineStore('store', () => {
  const isLogin: Ref<boolean> = ref(false)
  const user: Ref<User | null> = ref(null)
  const COL = {
    USERS: 'users',
    POSTS: 'posts'
  }

  function $reset() {
    isLogin.value = false
    user.value = null
  }

  function initAuth() {
    const auth = getAuth()
    auth.onAuthStateChanged((userInfo: User | null) => {
      if (userInfo) {
        isLogin.value = true
        user.value = userInfo
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
    const ui = new firebaseui.auth.AuthUI(auth)
    ui.start('#firebaseui-auth-container', uiConfig)
  }

  function logout() {
    const auth = getAuth()
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log('sign-out')
      })
      .catch((error) => {
        // An error happened.
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
