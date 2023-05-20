<template>
  <div class="container mt-3">
    <TheTitle>
      <template #btn_start>
        <a class="nav-link" role="button" @click="$router.go(-1)">뒤로</a>
      </template>
      <template #title>프로필</template>
      <template #btn_end>
        <a class="nav-link" role="button" href="/edit-profile">편집</a>
      </template>
    </TheTitle>
    <div class="my-5">
      <div class="my-4">
        <img
          :src="getPhotoURL()"
          class="rounded-circle mx-auto d-block mb-3"
          style="width: 250px; height: 250px"
          referrerpolicy="no-referrer"
          alt="프로필 사진"
        />
      </div>
      <div>
        <div class="text-center">
          <span class="badge bg-primary" v-if="!emailVerified">이메일 인증 필요</span>
        </div>
        <div class="text-center">
          <span class="fs-1 fw-bold">{{ displayName }}</span>
        </div>
        <div class="text-center"></div>
        <p class="text-center">
          <span class="fs-5 fw-bold">{{ aboutMe }}</span>
        </p>
      </div>
    </div>
    <div>
      <MiniItemViewVue />
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import TheTitle from '../components/TheTitle.vue'
import MiniItemViewVue from '@/components/MiniItemView.vue'
import { useStore } from '@/stores/authStore'

const store = useStore()
const { getPhotoURL } = store
const { displayName, aboutMe, emailVerified } = storeToRefs(store)
</script>

<style scoped></style>
