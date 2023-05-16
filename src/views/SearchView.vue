<template>
  <div class="container">
    <TheTitle>
      <template #btn_start>
        <a class="nav-link" role="button" @click="$router.go(-1)">뒤로</a>
      </template>
      <template #title>검색</template>
      <template #btn_end>
        <a class="nav-link" role="button" href="/help">설정</a>
      </template>
    </TheTitle>
    <div class="py-5">
      <div class="row">
        <div class="col-md-8 offset-md-2">
          <form action="#" method="get">
            <div class="input-group mb-3">
              <input type="text" class="form-control" placeholder="검색" name="q" />
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TheTitle from '../components/TheTitle.vue'
</script>

<style scoped></style>
