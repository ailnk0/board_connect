<template>
  <nav class="navbar bg-body-tertiary fixed-top">
    <div class="container">
      <button
        class="btn border-0"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar"
        aria-label="Toggle navigation"
      >
        <i class="bi bi-list fs-4"></i>
      </button>
      <a class="navbar-brand" href="#">
        <i class="bi bi-dice-2 fs-3"></i>
      </a>
      <a class="navbar-brand" href="#">
        <i class="bi bi-heart"></i>
      </a>
      <div
        class="offcanvas offcanvas-start"
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
          <ul class="navbar-nav justify-content-start flex-grow-1 pe-3">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                <i class="bi bi-house"></i> 홈
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"> <i class="bi bi-search"></i> 검색 </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"> <i class="bi bi-star"></i> 알림 </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"> <i class="bi bi-heart"></i> 글 작성 </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"> <i class="bi bi-person-circle"></i> 프로필 </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                더보기
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#"><i class="bi bi-gear"></i> 설정</a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="#"
                    ><i class="bi bi-box-arrow-right"></i> 로그아웃</a
                  >
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts"></script>

<style scoped></style>
