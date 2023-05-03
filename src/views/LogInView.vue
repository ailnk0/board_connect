<template>
  <div class="container">
    <div id="firebaseui-auth-container"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import {
  EmailAuthProvider,
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
  TwitterAuthProvider
} from 'firebase/auth'
import * as firebaseui from 'firebaseui'

onMounted(() => {
  initAuthUI()
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
      signInSuccessWithAuthResult: function (authResult: any, redirectUrl: any) {
        onSignInSuccess(authResult, redirectUrl)
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

function onSignInSuccess(authResult: any, redirectUrl: any): void {
  // User successfully signed in.
  // Return type determines whether we continue the redirect automatically
  // or whether we leave that to developer to handle.
  console.log(authResult, redirectUrl)
}
</script>

<style scoped></style>
