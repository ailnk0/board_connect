<template>
  <div class="container">
    <TheTitle>
      <template #btn_start>
        <button class="btn btn-lg border-0" @click="$router.go(-1)">뒤로</button>
      </template>
      <template #title>프로필 편집</template>
      <template #btn_end>
        <button class="btn btn-lg border-0" @click="editProfile">확인</button>
      </template>
    </TheTitle>
    <div class="my-5">
      <div class="my-4">
        <img
          :src="getPhotoURL()"
          class="rounded-circle mx-auto d-block mb-3"
          referrerpolicy="no-referrer"
          alt="프로필 사진"
        />
      </div>
      <div>
        <div class="mb-3 border-bottom">
          <input
            v-model="displayName"
            type="text"
            class="form-control shadow-none border-0 fs-1 fw-bold text-center"
            placeholder="이름"
          />
        </div>
        <div class="mb-2 border-bottom">
          <textarea
            id="about_me"
            v-model="aboutMe"
            class="form-control border-bottom shadow-none border-0 fs-5 fw-bold text-center"
            maxlength="150"
            placeholder="소개"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from '@/stores/authStore'
import { storeToRefs } from 'pinia'
import TheTitle from '../components/TheTitle.vue'

const store = useStore()
const { editProfile } = store
const { displayName, aboutMe, photoURL } = storeToRefs(store)

function getPhotoURL() {
  return photoURL.value || 'https://picsum.photos/250'
}
</script>

<style scoped></style>
