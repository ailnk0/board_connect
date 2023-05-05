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
import { useStore } from '@/stores/authStore'
import { onMounted } from 'vue'

const store = useStore()

onMounted(() => {
  store.initAuth()
})
</script>

<style scoped></style>
