<script setup lang="ts">
import { firebaseApp } from '../main'
import { getAnalytics } from 'firebase/analytics'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseFeatures = {
  firebaseApp: firebaseApp,
  analytics: getAnalytics(firebaseApp),
  auth: getAuth(firebaseApp),
  db: getFirestore(firebaseApp),
  storage: getStorage(firebaseApp)
}
</script>

<template>
  <div>
    <h1>Firebase Hosting Setup Complete</h1>
    <p>
      You're seeing this because you've successfully setup Firebase Hosting. Now it's time to go
      build something extraordinary!
    </p>
    <ul class="list-group">
      <li class="list-group-item" v-for="(v, k) in firebaseFeatures" :key="k">
        Firebase <strong>{{ k.toUpperCase() }}</strong> Loading
        {{ v != null ? 'Successed' : 'Failed' }}.
      </li>
    </ul>
    <a id="docs" target="_blank" href="https://firebase.google.com/docs/hosting/">
      <small>Open Hosting Documentation</small>
    </a>
  </div>
</template>

<style scoped></style>
