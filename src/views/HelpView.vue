<template>
  <header class="text-center py-5">
    <img alt="Vue logo" class="logo" src="../assets/logo.svg" width="125" height="125" />

    <div class="py-5">
      <h1>localStorage</h1>
      <p v-for="d in datas" :key="d.key">{{ d.key }} : {{ d.value }}</p>
    </div>
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

<script setup lang="ts">
import { ref } from 'vue'
import HelloWorld from '../components/HelloWorld.vue'
import TheFirebase from '../components/TheFirebase.vue'
import TheWelcome from '../components/TheWelcome.vue'

const datas = ref([{ key: '', value: '' }])

datas.value.pop()
const len = localStorage.length
for (let i = 0; i < len; i++) {
  let k: string = localStorage.key(i) || ''
  let v: string = localStorage.getItem(k) || ''
  datas.value.push({ key: k, value: v })
}
console.log(datas.value)
</script>

<style scoped></style>
