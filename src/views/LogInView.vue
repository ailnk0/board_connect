<template>
  <div class="container">
    <div class="d-flex justify-content-between align-items-center">
      <div><span class="fs-5">뒤로</span></div>
      <div><span class="fs-1 fw-bold">로그인</span></div>
      <div><span class="fs-5">설정</span></div>
    </div>
    <div class="py-5">
      <div id="firebaseui-auth-container"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useStore } from '@/stores/authStore'

const store = useStore()

onMounted(() => {
  store.initAuthUI()
})
</script>

<style scoped></style>
