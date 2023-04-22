<template>
  <body>
    <div class="container">
      <ActionBar />
      <div class="container mt-3">
        <TheCard />
        <TheCard />
        <TheCard />
        <TheCard />
        <TheCard />
      </div>
    </div>
  </body>
</template>

<script setup lang="ts">
import ActionBar from './components/ActionBar.vue'
import TheCard from './components/TheCard.vue'
</script>

<style scoped></style>
