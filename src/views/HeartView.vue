<template>
  <div class="container">
    <TheTitle>
      <template #btn_start>
        <a class="nav-link" role="button" @click="$router.go(-1)">뒤로</a>
      </template>
      <template #title>알림</template>
      <template #btn_end>
        <a class="nav-link" role="button" href="/help">설정</a>
      </template>
    </TheTitle>
    <div class="container py-5">
      <div class="row pb-3">
        <div class="col">
          <ul class="list-group">
            <li class="list-group-item active">오늘</li>
            <li class="list-group-item">summer.love님이 회원님의 게시물을 좋아합니다.</li>
          </ul>
        </div>
      </div>
      <div class="row pb-3">
        <div class="col">
          <ul class="list-group">
            <li class="list-group-item active">어제</li>
            <li class="list-group-item">John Doe님이 회원님의 게시물을 좋아합니다.</li>
            <li class="list-group-item">Jane Smith님이 회원님의 사진을 좋아합니다.</li>
            <li class="list-group-item">Mike Johnson님이 회원님의 상태를 좋아합니다.</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TheTitle from '../components/TheTitle.vue'
</script>

<style scoped></style>
