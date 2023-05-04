<template>
  <div class="container">
    <div class="d-flex justify-content-between align-items-center">
      <div><span class="fs-5">뒤로</span></div>
      <div><span class="fs-1 fw-bold">프로필</span></div>
      <div><span class="fs-5">설정</span></div>
    </div>
    <div class="my-5">
      <div class="my-4">
        <img src="https://picsum.photos/250" class="rounded-circle mx-auto d-block mb-3" alt="User photo" />
      </div>
      <div>
        <div class="text-center">
          <span class="fs-1 fw-bold">{{ displayName }}</span>
        </div>
        <div class="text-center"></div>
        <p class="text-center"><span class="fs-5 fw-bold">나는~ 행복한~ 고구마~</span></p>
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
import router from '@/router'
import { getAuth } from 'firebase/auth'
import { onMounted, ref } from 'vue'
import MiniItemViewVue from './MiniItemView.vue'

const auth = ref()
const displayName = ref()

onMounted(() => {
  auth.value = getAuth().onAuthStateChanged(function (user) {
    console.log(user)
    if (user) {
      displayName.value = user.displayName;
      // Do Something
    } else {
      goToLogin()
    }
  })
})

function goToLogin() {
  router.push('log-in')
}
</script>

<style scoped></style>
