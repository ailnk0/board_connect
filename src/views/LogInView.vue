<template>
  <div class="container">
    <div id="firebaseui-auth-container"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import {
  EmailAuthProvider,
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
  TwitterAuthProvider
} from 'firebase/auth'
import * as firebaseui from 'firebaseui'
//import { storeToRefs } from 'pinia'
import { useAuthStore } from '@/stores/authStore'
import router from '@/router'

const auth = ref()

const store = useAuthStore()
const { init } = store
//const { uid } = storeToRefs(store)

onMounted(() => {
  auth.value = getAuth().onAuthStateChanged(function (user) {
    console.log(user)
    if (user) {
      router.push('/')
    } else {
      initAuthUI()
    }
  })
})

function initAuthUI() {
  let uiConfig = {
    signInSuccessUrl: '/',
    signInOptions: [
      EmailAuthProvider.PROVIDER_ID,
      GoogleAuthProvider.PROVIDER_ID,
      FacebookAuthProvider.PROVIDER_ID,
      TwitterAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccessWithAuthResult: function (_authResult: any) {
        onSignInSuccess(_authResult)
        return true
      },
      uiShown: function () {
        // The widget is rendered.
        // Hide the loader.
      }
    }
  }
  let ui = new firebaseui.auth.AuthUI(getAuth())
  ui.start('#firebaseui-auth-container', uiConfig)
}

function onSignInSuccess(_authResult: any): void {
  // User successfully signed in.
  // Return type determines whether we continue the redirect automatically
  // or whether we leave that to developer to handle.
  init(_authResult.user.uid)
}
</script>

<style scoped></style>
