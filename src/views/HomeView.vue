<template>
  <TheCard v-for="(d, i) in docs" :key="d.data().createdAt.seconds">
    <template #user_name>{{ d.data().user_name }}</template>
    <template #content>{{ d.data().content }}</template>
    <template #createdAt>{{ d.data().createdAt.toDate().toLocaleString() }}</template>
    <template #rating>{{ ' ' + d.data().rating }}</template>
    <template #like>{{ ' ' + d.data().like }}</template>
    <template #num_comment>{{ ' ' + d.data().num_comment }}</template>
    <template #image>
      <img :src="getPhotoURL(i)" class="card-img-top" alt="..." />
    </template>
    <template #profile-image>
      <img src="https://picsum.photos/32/32" class="rounded-circle me-3" alt="..." />
    </template>
  </TheCard>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import TheCard from '../components/TheCard.vue'
import { useStore } from '@/stores/authStore'
import type { QuerySnapshot } from 'firebase/firestore'

const store = useStore()
const docs = ref()

onMounted(() => {
  store
    .getDatas(store.COL.POSTS)
    .catch((error) => {
      console.log(error)
    })
    .then((querySnapshot) => {
      docs.value = (querySnapshot as QuerySnapshot)?.docs
      docs.value.sort((a: { data: () => any }, b: { data: () => any }) => {
        return b.data().createdAt.seconds - a.data().createdAt.seconds
      })
    })
})

function getPhotoURL(index: number) {
  return 'https://picsum.photos/1000/1000?random=' + index.toString()
}
</script>

<style scoped></style>
