<template>
  <nav class="navbar bg-body-tertiary sticky-top">
    <div class="container">
      <div>
        <button class="btn border-0 navbar-brand" type="button" @click="$router.push('/')">
          <span class="fs-3">
            <font-awesome-icon :icon="['fas', 'dice']" />
          </span>
        </button>
      </div>
      <div>
        <button class="btn border-0" type="button" @click="$router.push('/search')">
          <span class="fs-5">
            <i class="bi bi-search"></i>
          </span>
        </button>
        <button class="btn border-0" type="button" @click="$router.push('/heart')">
          <span class="fs-5">
            <i class="bi bi-heart"></i>
          </span>
        </button>
        <button
          class="btn border-0"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <img
            :src="getPhotoURL()"
            class="rounded-circle"
            style="width: 32px; height: 32px"
            referrerpolicy="no-referrer"
            alt="프로필 사진"
          />
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
                <span class="fw-bold">{{ store.user?.displayName }}</span>
              </div>
              <div>
                <span>{{ store.user?.email }}</span>
              </div>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                role="button"
                data-bs-dismiss="offcanvas"
                @click="router.push('/')"
              >
                <i class="bi bi-house"></i>
                <span> 홈</span>
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                role="button"
                data-bs-dismiss="offcanvas"
                @click="router.push('/search')"
              >
                <i class="bi bi-search"></i>
                <span> 검색</span>
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                role="button"
                data-bs-dismiss="offcanvas"
                @click="router.push('/heart')"
              >
                <i class="bi bi-heart"></i>
                <span> 알림</span>
              </a>
            </li>
            <!-- <li class="nav-item">
              <a
                class="nav-link"
                role="button"
                data-bs-dismiss="offcanvas"
                @click="router.push('/write-post')"
              >
                <i class="bi bi-pencil"></i>
                <span> 글 작성</span>
              </a>
            </li> -->
            <li class="nav-item">
              <a
                class="nav-link"
                role="button"
                data-bs-dismiss="offcanvas"
                @click="router.push('/profile')"
              >
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
                    role="button"
                    data-bs-dismiss="offcanvas"
                    @click="router.push('/help')"
                  >
                    <i class="bi bi-gear"></i>
                    <span> 설정</span>
                  </a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a
                    class="dropdown-item"
                    role="button"
                    data-bs-dismiss="offcanvas"
                    v-if="!store.isLogin"
                    @click="router.push('/log-in')"
                  >
                    <i class="bi bi-box-arrow-in-right"></i>
                    <span> 로그인</span>
                  </a>
                  <a
                    class="dropdown-item"
                    role="button"
                    data-bs-dismiss="offcanvas"
                    v-if="store.isLogin"
                    @click="store.logout"
                  >
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
import router from '@/router'
import { useStore } from '@/stores/authStore'

const store = useStore()
const { getPhotoURL } = store
</script>

<style scoped></style>
