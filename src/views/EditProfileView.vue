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
          style="width: 250px; height: 250px"
          referrerpolicy="no-referrer"
          alt="프로필 사진"
        />
      </div>
      <div>
        <div class="mb-3 text-center">
          <input type="file" ref="input" style="display: none" @change="loadFile" />
          <a class="link" @click="openFileChooser">프로필 사진 편집</a>
        </div>
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
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control text-center"
            disabled
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
            :value="store.email"
          />
          <button
            class="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
            @click="emailVerification"
            v-if="!emailVerified"
          >
            인증
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from '@/stores/authStore'
import { storeToRefs } from 'pinia'
import { ref, type Ref } from 'vue'
import TheTitle from '../components/TheTitle.vue'

const store = useStore()
const { editProfile, getPhotoURL, emailVerification } = store
const { displayName, aboutMe, photoURL, photoChanged, emailVerified } = storeToRefs(store)

const input: Ref<HTMLElement | null> = ref(null)

function openFileChooser() {
  input.value?.click()
}

function loadFile() {
  const target = input.value as HTMLInputElement
  const file = target.files?.item(0)
  if (file) {
    photoURL.value = URL.createObjectURL(file)
    photoChanged.value = file
  }
}
</script>

<style scoped></style>
