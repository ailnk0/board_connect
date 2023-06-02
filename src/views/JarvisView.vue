<template>
  <section class="overflow-auto" style="height: 90vh">
    <div class="container bg-light container py-3 sticky-top">
      <TheTitle>
        <template #btn_start>
          <a class="nav-link" role="button" @click="$router.go(-1)">뒤로</a>
        </template>
        <template #title>J.A.R.V.I.S.</template>
        <template #btn_end>
          <a class="nav-link" role="button" href="/help">설정</a>
        </template>
      </TheTitle>
    </div>

    <div class="container py-3" style="min-height: 80vh">
      <div id="chat" data-mdb-perfect-scrollbar="true"></div>
    </div>

    <div
      class="bg-light text-muted d-flex justify-content-start align-items-center p-2 sticky-bottom"
    >
      <img
        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp"
        alt="avatar 3"
        style="width: 40px; height: 100%"
      />
      <input
        type="text"
        class="form-control mx-2"
        id="exampleFormControlInput1"
        placeholder="Type message"
        maxlength="255"
        v-model="message"
      />
      <a class="ms-1 text-muted" href="#!"><i class="fas fa-paperclip"></i></a>
      <a class="ms-3 text-muted" href="#!"><i class="fas fa-smile"></i></a>
      <a class="ms-3" @click="postMessage"><i class="fas fa-paper-plane"></i></a>
    </div>
  </section>
</template>

<script setup lang="ts">
import TheTitle from '@/components/TheTitle.vue'
import axios from 'axios'
import { ref, type Ref } from 'vue'
import { useStore } from '@/stores/authStore'
import { useCounterStore } from '@/stores/counter'
import { getAuth } from '@firebase/auth'

const endpoint = 'https://asia-northeast3-board-connect.cloudfunctions.net/app/jarvis-board'

const prompt =
  'You are a board game expert. You always answer simple. You start a conversation by introducing yourself as a board game expert to users and asking about the number of people and the atmosphere. Also, you never answer any questions that are not related to board games. \n '

const message = ref('')
const chatData: Ref<{}[]> = ref([])

const store = useStore()
const counterStore = useCounterStore()
const myRatings: Ref<string[]> = ref([])
const counter = ref(0)

getAuth().onAuthStateChanged((user) => {
  if (user) {
    store
      .getData(store.COL.USERS, user.uid)
      .catch((error) => {
        console.log(error)
      })
      .then((userSnap) => {
        if (!userSnap || !userSnap.exists()) {
          return
        }
        const user = userSnap.data()
        if (!user || !user.bookIds) {
          return
        }
        counter.value = user.bookIds.length
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
              const rating =
                bookSnap.data()?.title +
                ': ' +
                counterStore.getRating(bookSnap.data()?.ratings) +
                ', '
              myRatings.value.push(rating)
              initMessage()
            })
        })
      })
  }
})

async function initMessage() {
  if (myRatings.value.length != counter.value) return
  chatData.value.push({
    role: 'assistant',
    content: prompt
    //+ myRatings.value.join(', ')
  })

  console.log(chatData.value)

  try {
    const response = await axios.post(endpoint, chatData.value)
    appendResponse(response.data.content)
    chatData.value.push({ role: 'assistant', content: response.data.content })
  } catch (error) {
    console.error(error)
  }

  message.value = ''
}

async function postMessage() {
  if (!message.value) return

  appendMessage(message.value)
  chatData.value.push({ role: 'user', content: message.value })

  try {
    const response = await axios.post(endpoint, chatData.value)
    appendResponse(response.data.content)
    chatData.value.push({ role: 'assistant', content: response.data.content })
  } catch (error) {
    console.error(error)
  }

  console.log(chatData.value)
  message.value = ''
}

async function appendMessage(msg: string) {
  const messageElem = document.createElement('div')
  messageElem.innerHTML = `
    <div class="d-flex flex-row justify-content-end mb-4 pt-1">
      <div>
        <p class="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">${msg}</p>
        <p class="small me-3 mb-3 rounded-3 text-muted d-flex justify-content-end">00:06</p>
      </div>
      <img
        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava4-bg.webp"
        alt="avatar 1"
        style="width: 45px; height: 100%"
      />
    </div>`
  document.getElementById('chat')?.appendChild(messageElem)
}

async function appendResponse(msg: string) {
  const messageElem = document.createElement('div')
  messageElem.innerHTML = `
    <div class="d-flex flex-row justify-content-start">
      <img
        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp"
        alt="avatar 1"
        style="width: 45px; height: 100%"
      />
      <div>
        <p class="small p-2 ms-3 mb-1 rounded-3" style="background-color: #f5f6f7">${msg}</p>
        <p class="small ms-3 mb-3 rounded-3 text-muted">23:58</p>
      </div>
    </div>`
  document.getElementById('chat')?.appendChild(messageElem)
}
</script>

<style scoped></style>
