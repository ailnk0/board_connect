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
      <div class="col" v-for="(b, i) in books" :key="i">
        <a class="link-dark text-decoration-none" :href="`/detail/${b.id}`">
          <LargeItemVue>
            <template #thumb>
              <img
                :src="b.data().thumbnail"
                class="card-img-top rounded"
                style="height: 160px; object-fit: cover"
                alt="..."
              />
            </template>
            <template #title>
              {{ b.data().title }}
            </template>
            <template #rating>
              {{ counterStore.getRating(b.data().ratings) }}
            </template>
          </LargeItemVue>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import LargeItemVue from '@/components/LargeItem.vue'
import { useStore } from '@/stores/authStore'
import { useCounterStore } from '@/stores/counter'
import type { QuerySnapshot } from 'firebase/firestore'
import { onMounted, ref } from 'vue'

const store = useStore()
const counterStore = useCounterStore()
const books = ref()

onMounted(() => {
  store
    .getDatas(store.COL.BOOKS)
    .catch((error) => {
      console.log(error)
    })
    .then((querySnapshot) => {
      books.value = (querySnapshot as QuerySnapshot)?.docs
    })
})
</script>

<style scoped></style>
