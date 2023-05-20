<template>
  <div class="container mt-3">
    <div class="form-floating mb-3">
      <input v-model="title" type="text" class="form-control" id="title" placeholder="title" />
      <label for="title">title</label>
    </div>
    <div class="form-floating mb-3">
      <input
        v-model="authors"
        type="text"
        class="form-control"
        id="authors"
        placeholder="authors"
      />
      <label for="authors">authors</label>
    </div>
    <div class="form-floating mb-3">
      <input v-model="arts" type="text" class="form-control" id="arts" placeholder="arts" />
      <label for="arts">arts</label>
    </div>
    <div class="form-floating mb-3">
      <input
        v-model="thumbnail"
        type="text"
        class="form-control"
        id="thumbnail"
        placeholder="thumbnail"
      />
      <label for="thumbnail">thumbnail</label>
    </div>
    <input v-model="datetime" class="form-control mb-3" type="date" id="start" name="trip-start" />
    <button class="btn btn-outline-primary w-100" @click="submit">Submit</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useStore } from '@/stores/authStore'

const store = useStore()

const title = ref('')
const authors = ref('')
const arts = ref('')
const thumbnail = ref('')
const datetime = ref('2023-01-01')

function submit() {
  let arrAuthors = authors.value.split(',').map((item) => item.trim())
  let arrArts = arts.value.split(',').map((item) => item.trim())

  const data = {
    title: title.value,
    authors: arrAuthors,
    arts: arrArts,
    thumbnail: thumbnail.value,
    ratings: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    contents: '',
    isbn: '',
    publisher: '',
    datetime: new Date(datetime.value),
    type: 'boardgame'
  }

  store
    .addData(store.COL.BOOKS, data)
    .catch((err) => {
      alert(err)
    })
    .then(() => {
      alert('등록되었습니다.')
    })
}
</script>

<style scoped></style>
