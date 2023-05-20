<template>
  <div class="container">
    <TheTitle>
      <template #btn_start>
        <a class="nav-link" role="button" @click="$router.go(-1)">뒤로</a>
      </template>
      <template #title>검색</template>
      <template #btn_end>
        <a class="nav-link" role="button" href="/detail">설정</a>
      </template>
    </TheTitle>
    <div class="py-5">
      <TheSearch />
    </div>
    <div>
      <LargeItemView />
    </div>
  </div>
</template>

<script setup lang="ts">
import LargeItemView from '@/components/LargeItemView.vue'
import TheSearch from '@/components/TheSearch.vue'
import TheTitle from '../components/TheTitle.vue'
</script>

<style scoped></style>
