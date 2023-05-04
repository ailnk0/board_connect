<template>
  <nav class="navbar bg-body-tertiary sticky-top">
    <div class="container">
      <div>
        <button class="btn border-0 navbar-brand" type="button" @click="$router.push('/')">
          <span class="fs-2">
            <font-awesome-icon :icon="['fas', 'dice']" />
          </span>
        </button>
      </div>
      <div>
        <button class="btn border-0" type="button" @click="$router.push('/search')">
          <i class="bi bi-search fs-5"></i>
        </button>
        <button class="btn border-0" type="button" @click="$router.push('/heart')">
          <i class="bi bi-heart fs-5"></i>
        </button>
        <button
          class="btn border-0"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <i class="bi bi-list fs-2"></i>
        </button>
      </div>
      <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li class="nav-item">
              <div>
                <span class="fw-bold">{{ auth?.currentUser?.displayName }}</span>
              </div>
              <div>
                <span>{{ auth?.currentUser?.email }}</span>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/">
                <i class="bi bi-house"></i>
                <span> 홈</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-bs-dismiss="offcanvas" @click="router.push('/search')">
                <i class="bi bi-search"></i>
                <span> 검색</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-bs-dismiss="offcanvas" @click="router.push('/heart')">
                <i class="bi bi-heart"></i>
                <span> 알림</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-bs-dismiss="offcanvas" @click="router.push('/write-post')">
                <i class="bi bi-pencil"></i>
                <span> 글 작성</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-bs-dismiss="offcanvas" @click="router.push('/profile')">
                <i class="bi bi-person-circle"></i>
                <span> 프로필</span>
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span> 더보기</span>
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a
                    class="dropdown-item"
                    data-bs-dismiss="offcanvas"
                    @click="router.push('/log-in')"
                  >
                    <i class="bi bi-gear"></i>
                    <span> 설정</span>
                  </a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" @click="logout">
                    <i class="bi bi-box-arrow-right"></i>
                    <span> 로그아웃</span>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
//import { RouterLink } from 'vue-router'
import router from '@/router'
import { getAuth, signOut } from 'firebase/auth'

const auth = ref()

onMounted(() => {
  auth.value = getAuth().onAuthStateChanged(function (user) {
    console.log(user)
    if (user) {
      // Do Something
    } else {
      // Do Something
    }
  })
})

function logout() {
  signOut(getAuth())
    .then(() => {
      // Sign-out successful.
      console.log('sign-out')
    })
    .catch((error) => {
      // An error happened.
      console.log(error)
    })
}
</script>

<style scoped></style>
