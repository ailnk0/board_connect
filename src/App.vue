<template>
  <body>
    <ActionBar />
    <div class="container mt-3">
      <RouterView />
    </div>
  </body>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import ActionBar from './components/ActionBar.vue'
</script>

<style scoped></style>
