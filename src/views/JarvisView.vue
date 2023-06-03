<template>
  <section class="overflow-auto" style="height: 90vh">
    <div class="container bg-light container py-3 sticky-top">
      <TheTitle>
        <template #btn_start>
          <a class="nav-link" role="button" @click="$router.go(-1)">뒤로</a>
        </template>
        <template #title>자비스</template>
        <template #btn_end>
          <a class="nav-link" role="button" href="/help">설정</a>
        </template>
      </TheTitle>
    </div>

    <div class="container py-3" style="min-height: 50vh">
      <div id="chat" data-mdb-perfect-scrollbar="true"></div>
    </div>

    <div class="d-flex justify-content-center my-3">
      <i class="fas fa-spinner" v-if="isLoading"></i>
    </div>

    <div
      class="bg-light text-muted d-flex justify-content-start align-items-center p-2 sticky-bottom"
    >
      <img
        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava4-bg.webp"
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
  '너는 이제부터 보드게임 전문가야. 너는 항상 255자 이내의 답변을 해. 너는 이렇게 질문을 하면서 대화를 시작해. "안녕하세요! 저는 보드게임 전문가 자비스입니다. 오늘 몇 명의 친구들과 어떤 분위기의 게임을 찾고 계신가요? 그러면 재미있는 보드게임을 추천해드릴게요. 혹은 보드게임과 관련된 어떤 질문에도 답변해드릴 수 있습니다! 어떤 도움이 필요하신가요?" \n '

const isLoading = ref(true)
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
    role: 'system',
    content: prompt
    //+ myRatings.value.join(', ')
  })

  try {
    const response = await axios.post(endpoint, chatData.value)
    appendResponse(response.data.content)
    chatData.value.push({ role: 'assistant', content: response.data.content })
  } catch (error) {
    console.error(error)
  }

  message.value = ''
  isLoading.value = false
}

async function postMessage() {
  if (!message.value) return

  appendMessage(message.value)
  chatData.value.push({ role: 'user', content: message.value })

  isLoading.value = true

  try {
    const response = await axios.post(endpoint, chatData.value)
    appendResponse(response.data.content)
    chatData.value.push({ role: 'assistant', content: response.data.content })
  } catch (error) {
    console.error(error)
  }

  isLoading.value = false
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

<style scoped>
.fa-spinner {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
