<template>
  <div>
    <div class="my-3 d-flex justify-content-between align-items-center">
      <div>
        <font-awesome-icon :icon="['fas', 'arrow-up-wide-short']" />
        <span> 최근에 담은 순 </span>
      </div>
      <div>
        <font-awesome-icon :icon="['fas', 'list']" />
      </div>
    </div>
    <div class="row row-cols-3 g-3">
      <div class="col">
        <MiniItemVue />
      </div>
      <div class="col">
        <MiniItemVue />
      </div>
      <div class="col">
        <MiniItemVue />
      </div>
      <div class="col">
        <MiniItemVue />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import MiniItemVue from '@/components/MiniItem.vue'
</script>

<style scoped></style>
