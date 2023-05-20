<template>
  <div class="container mt-3">
    <TheTitle>
      <template #btn_start>
        <a class="nav-link" role="button" @click="$router.go(-1)">뒤로</a>
      </template>
      <template #title>보드게임</template>
      <template #btn_end>
        <a class="nav-link" role="button" @click="$router.push(`/write-post/${bookId}`)">리뷰</a>
      </template>
    </TheTitle>
    <div class="d-flex justify-content-center align-items-center" style="height: 450px">
      <img
        :src="books?.thumbnail"
        class="card-img-top rounded shadow"
        style="width: 200px; object-fit: cover"
        alt="..."
      />
    </div>
    <div class="card mb-3 border-0">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">
          <h1 class="mb-5">{{ books?.title }}</h1>
          <h5 class="card-title"><strong>기본 정보</strong></h5>
          <div class="row">
            <div class="col-3">출시연도</div>
            <div class="col-9">{{ books?.datetime.toDate().getFullYear() }}</div>
            <div class="col-3">작가</div>
            <div class="col-9">{{ books?.authors.toString() }}</div>
            <div class="col-3">아트</div>
            <div class="col-9">{{ books?.arts.toString() }}</div>
          </div>
        </li>
        <li class="list-group-item">
          <h5 class="card-title"><strong>별점</strong></h5>
          <p class="card-text">
            <font-awesome-icon :icon="['fas', 'star']" style="color: #ffd700" />
            {{ counterStore.getRating(books?.ratings) }}
          </p>
        </li>
        <li class="list-group-item">
          <div class="d-flex justify-content-between align-items-center mb-2">
            <h5 class="card-title"><strong>리뷰</strong></h5>
            <button
              class="btn btn-outline-secondary rounded-pill px-3"
              @click="$router.push(`/write-post/${bookId}`)"
            >
              작성
            </button>
          </div>
          <TheCard v-for="d in docs" :key="d.data().createdAt.seconds">
            <template #user_name>{{ d.data().user_name }}</template>
            <template #content>{{ d.data().content }}</template>
            <template #createdAt>{{ d.data().createdAt.toDate().toLocaleString() }}</template>
            <template #rating>{{ ' ' + d.data().rating }}</template>
            <template #like>{{ ' ' + d.data().like }}</template>
            <template #num_comment>{{ ' ' + d.data().num_comment }}</template>
            <template #image> </template>
            <template #profile-image>
              <img src="https://picsum.photos/32/32" class="rounded-circle me-3" alt="..." />
            </template>
          </TheCard>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import TheCard from '@/components/TheCard.vue'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from '@/stores/authStore'
import { useCounterStore } from '@/stores/counter'
import { QuerySnapshot, where } from 'firebase/firestore'
import TheTitle from '@/components/TheTitle.vue'

const route = useRoute()
const store = useStore()
const counterStore = useCounterStore()
const bookId = ref(route.params.id)
const docs = ref()
const books = ref()

onMounted(() => {
  store
    .getData(store.COL.BOOKS, bookId.value as string)
    .catch((error) => {
      console.log(error)
    })
    .then((docSnap) => {
      if (docSnap && docSnap.exists()) {
        const data = docSnap.data()
        books.value = data
      }
    })

  store
    .querayDatas(store.COL.POSTS, where('book_id', '==', bookId.value as string))
    .catch((error) => {
      console.log(error)
    })
    .then((querySnapshot) => {
      docs.value = (querySnapshot as QuerySnapshot).docs
    })
})
</script>

<style scoped></style>
