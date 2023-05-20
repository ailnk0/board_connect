<template>
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
          <MiniItemVue>
            <template #thumb>
              <img :src="b.data()?.thumbnail" class="card-img-top rounded" alt="..." />
            </template>
            <template #title>
              {{ b.data()?.title }}
            </template>
            <template #rating>
              {{ getRating(b.data()?.ratings) }}
            </template>
          </MiniItemVue>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import MiniItemVue from '@/components/MiniItem.vue'
import { useStore } from '@/stores/authStore'
import { getAuth } from 'firebase/auth'
import type { DocumentSnapshot } from 'firebase/firestore'
import { storeToRefs } from 'pinia'
import { onMounted, ref, type Ref } from 'vue'

const store = useStore()
const books: Ref<DocumentSnapshot[]> = ref([])
const { uid } = storeToRefs(store)

onMounted(() => {
  getAuth().onAuthStateChanged((user) => {
    if (user) {
      store
        .getData(store.COL.USERS, uid.value)
        .catch((error) => {
          console.log(error)
        })
        .then((userSnap) => {
          if (!userSnap || !userSnap.exists()) {
            return
          }
          const user = userSnap.data()
          console.log(user)
          user.bookIds.forEach((bookId: string) => {
            store
              .getData(store.COL.BOOKS, bookId)
              .catch((error) => {
                console.log(error)
              })
              .then((bookSnap) => {
                if (!bookSnap || !bookSnap.exists()) {
                  return
                }
                books.value.push(bookSnap)
              })
          })
        })
    }
  })
})

function getRating(ratings: number[]) {
  if (!ratings) {
    return ' 평가 없음'
  } else {
    let total = 0.0
    let count = 0
    for (let i = 0; i < ratings.length; i++) {
      if (ratings[i] === 0) continue
      count += ratings[i]
      total += ratings[i] * i
    }
    return (total / count++).toFixed(2)
  }
}
</script>

<style scoped></style>
