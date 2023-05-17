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
import { getFirestore, collection, addDoc, getDocs, setDoc, doc, getDoc } from 'firebase/firestore'
import router from '@/router'

export const useStore = defineStore('store', () => {
  const SESSION_KEY = 'UID'
  const COL = {
    USERS: 'users',
    POSTS: 'posts'
  }

  const isLogin: Ref<boolean> = ref(hasSession())
  const user: Ref<User | null> = ref(null)
  const uid: Ref<string> = ref('')
  const displayName: Ref<string> = ref('')
  const photoURL: Ref<string> = ref('')
  const email: Ref<string> = ref('')
  const emailVerified: Ref<boolean> = ref(false)
  const aboutMe: Ref<string> = ref('')
  const firstName: Ref<string> = ref('')
  const lastName: Ref<string> = ref('')

  function $reset() {
    isLogin.value = false
    user.value = null
    uid.value = ''
    displayName.value = ''
    photoURL.value = ''
    email.value = ''
    emailVerified.value = false
    aboutMe.value = ''
    firstName.value = ''
    lastName.value = ''
    localStorage.removeItem(SESSION_KEY)
  }

  function editProfile() {
    if (isLogin.value == false) return

    const data = {
      displayName: displayName.value,
      photoURL: photoURL.value,
      email: email.value,
      emailVerified: (emailVerified.value = false),
      aboutMe: aboutMe.value,
      firstName: firstName.value,
      lastName: lastName.value
    }

    setData(COL.USERS, uid.value, data)
      .catch((error) => {
        console.log(error)
      })
      .then(() => {
        router.push('/profile')
      })
  }

  function onLogin(authUser: User | null) {
    if (authUser == null) return
    localStorage.setItem(SESSION_KEY, authUser.uid)

    user.value = authUser
    uid.value = authUser.uid || ''

    getData(COL.USERS, authUser.uid)
      .catch((error) => {
        console.log(error)
      })
      .then((docSnap) => {
        if (docSnap && docSnap.exists()) {
          const data = docSnap.data()
          displayName.value = data.displayName || ''
          photoURL.value = data.photoURL || ''
          email.value = data.email || ''
          emailVerified.value = data.emailVerified || false
          aboutMe.value = data.aboutMe || ''
          firstName.value = data.firstName || ''
          lastName.value = data.lastName || ''
        } else {
          displayName.value = authUser.displayName || ''
          photoURL.value = authUser.photoURL || ''
          email.value = authUser.email || ''
          emailVerified.value = authUser.emailVerified
          editProfile()
        }
      })
  }

  function initAuth() {
    const auth = getAuth()
    auth.onAuthStateChanged((authUser: User | null) => {
      if (authUser) {
        onLogin(authUser)
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

  async function setData(collectionName: string, docName: string, data: object) {
    const db = getFirestore(firebaseApp)
    const docRef = doc(db, collectionName, docName)
    return await setDoc(docRef, data, { merge: true })
  }

  async function getData(collectionName: string, docName: string) {
    const db = getFirestore(firebaseApp)
    const docRef = doc(db, collectionName, docName)
    return await getDoc(docRef)
  }

  return {
    COL,
    isLogin,
    user,
    photoURL,
    displayName,
    email,
    emailVerified,
    aboutMe,
    firstName,
    lastName,
    $reset,
    editProfile,
    initAuth,
    initAuthUI,
    logout,
    addData,
    getDatas
  }
})
