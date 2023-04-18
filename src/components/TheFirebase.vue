<script setup lang="ts">
import { firebase } from '../main'
</script>

<template>
  <div id="message">
    <h2>Welcome</h2>
    <h1>Firebase Hosting Setup Complete</h1>
    <p>
      You're seeing this because you've successfully setup Firebase Hosting. Now it's time to go
      build something extraordinary!
    </p>
    <ul>
      <li v-for="(v, k) in firebase" :key="k">
        Firebase <a>{{ k.toUpperCase() }}</a> Loading {{ v != null ? 'Successed' : 'Failed' }}.
      </li>
    </ul>

    <a id="docs" target="_blank" href="https://firebase.google.com/docs/hosting/">
      Open Hosting Documentation
    </a>
  </div>
</template>

<style scoped></style>
