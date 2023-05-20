<template>
  <div>
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
    </div>
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
      <div class="col" v-for="i in items" :key="i">
        <LargeItemVue>
          <template #thumb>
            <a href="/detail">
              <img :src="getPhotoURL(i)" class="card-img-top rounded" alt="..." />
            </a>
          </template>
        </LargeItemVue>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import LargeItemVue from '@/components/LargeItem.vue'

const items = [0, 1, 2, 3, 4]
function getPhotoURL(index: number) {
  return 'https://picsum.photos/150/200?random=' + index.toString()
}
</script>

<style scoped></style>
