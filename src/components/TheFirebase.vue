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

<style scoped>
#message {
  max-width: 360px;
  margin: 16px;
  padding: 32px 24px;
  border-radius: 3px;
  border: 1px solid var(--color-border);
}

#message h2 {
  font-weight: bold;
  font-size: 16px;
  margin: 0 0 8px;
}

#message h1 {
  font-size: 22px;
  font-weight: 300;
  margin: 0 0 16px;
}

#message p {
  line-height: 140%;
  margin: 16px 0 24px;
  font-size: 14px;
}

#message li {
  list-style-type: none;
  line-height: 140%;
  font-size: 14px;
}

#docs {
  display: block;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  padding: 16px;
  border-radius: 4px;
  border: 1px solid var(--color-border);
}
</style>
