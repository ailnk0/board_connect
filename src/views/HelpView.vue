<script setup lang="ts">
import HelloWorld from '../components/HelloWorld.vue'
import TheFirebase from '../components/TheFirebase.vue'
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <header class="text-center py-5">
    <img alt="Vue logo" class="logo" src="../assets/logo.svg" width="125" height="125" />

    <div class="py-5">
      <HelloWorld msg="You did it!" />
    </div>
    <div class="py-5">
      <TheFirebase />
    </div>
  </header>

  <main class="text-center py-5">
    <TheWelcome />
  </main>
</template>

<style scoped></style>
