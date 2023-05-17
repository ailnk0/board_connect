<template>
  <div class="container">
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
          <span class="fs-1 fw-bold">{{ displayName }}</span>
        </div>
        <div class="text-center"></div>
        <p class="text-center">
          <span class="fs-5 fw-bold">{{ aboutMe }}</span>
        </p>
      </div>
    </div>
    <div>
      <div>
        <div class="row row-cols-3 text-center">
          <div class="col pb-2 border-bottom border-2 border-dark">
            <a class="link-dark text-decoration-none" aria-current="page" href="#">
              <span>보드게임</span>
            </a>
          </div>
          <div class="col pb-2">
            <a class="link-secondary text-decoration-none" href="#">
              <span>책</span>
            </a>
          </div>
          <div class="col pb-2">
            <a class="link-secondary text-decoration-none" href="#">
              <span>영화</span>
            </a>
          </div>
        </div>
      </div>
      <div>
        <MiniItemViewVue />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import TheTitle from '../components/TheTitle.vue'
import MiniItemViewVue from '@/components/MiniItemView.vue'
import { useStore } from '@/stores/authStore'

const store = useStore()
const { displayName, aboutMe, photoURL } = storeToRefs(store)

function getPhotoURL() {
  return photoURL.value || 'https://picsum.photos/250'
}
</script>

<style scoped></style>
