<template>
  <div class="container">
    <TheTitle>
      <template #btn_start>
        <a class="nav-link" role="button" @click="$router.go(-1)">뒤로</a>
      </template>
      <template #title>로그인</template>
      <template #btn_end>
        <a class="nav-link" role="button" href="/help">설정</a>
      </template>
    </TheTitle>
    <div class="py-5 d-flex justify-content-center align-items-center" style="height: 70vh">
      <div id="firebaseui-auth-container"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useStore } from '@/stores/authStore'
import TheTitle from '../components/TheTitle.vue'

const store = useStore()

onMounted(() => {
  store.initAuthUI()
})
</script>

<style scoped></style>
