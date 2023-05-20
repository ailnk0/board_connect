<template>
  <div class="container mt-3">
    <TheTitle>
      <template #btn_start>
        <button class="btn btn-lg border-0" role="button" @click="$router.go(-1)">취소</button>
      </template>
      <template #title>리뷰 작성</template>
      <template #btn_end>
        <button
          class="btn btn-lg border-0"
          role="button"
          @click="submitPost"
          :disabled="noSubmit()"
        >
          확인
        </button>
      </template>
    </TheTitle>
    <div class="mt-5">
      <div class="row">
        <div class="col d-flex justify-content-center">
          <div class="form-group">
            <div class="rating">
              <input v-model="rating" type="radio" name="star" id="star5" value="10.0" checked />
              <label for="star5">
                <font-awesome-icon :icon="['fas', 'star']" />
              </label>
              <input v-model="rating" type="radio" name="star" id="star4" value="8.0" />
              <label for="star4">
                <font-awesome-icon :icon="['fas', 'star']" />
              </label>
              <input v-model="rating" type="radio" name="star" id="star3" value="6.0" />
              <label for="star3">
                <font-awesome-icon :icon="['fas', 'star']" />
              </label>
              <input v-model="rating" type="radio" name="star" id="star2" value="4.0" />
              <label for="star2">
                <font-awesome-icon :icon="['fas', 'star']" />
              </label>
              <input v-model="rating" type="radio" name="star" id="star1" value="2.0" />
              <label for="star1">
                <font-awesome-icon :icon="['fas', 'star']" />
              </label>
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-4">
        <div class="col">
          <div class="form-group">
            <textarea
              class="form-control border-0 shadow-none my-4"
              style="height: 50vh"
              id="postContent"
              placeholder="감상을 자유롭게 표현해주세요"
              v-model="postContent"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useStore } from '@/stores/authStore'
import router from '@/router'
import TheTitle from '../components/TheTitle.vue'
import { useRoute } from 'vue-router'
import { getAuth } from 'firebase/auth'

const route = useRoute()
const rating = ref('10.0')
const postContent = ref('')
const store = useStore()

function submitPost() {
  getAuth().onAuthStateChanged((user) => {
    if (user) {
      const bookId = route.params.id as string
      if (bookId === undefined || bookId.length === 0) return
      const postData = {
        book_id: bookId,
        rating: rating.value,
        content: postContent.value,
        image: '',
        uid: store.user?.uid,
        user_name: store.user?.displayName,
        user_email: store.user?.email,
        createdAt: new Date(),
        updatedAt: new Date(),
        like: 0,
        num_comment: 0
      }

      store
        .addData(store.COL.POSTS, postData)
        .catch((err) => {
          console.log(err)
        })
        .then(() => {
          store
            .getData(store.COL.BOOKS, bookId)
            .catch((err) => {
              console.log(err)
            })
            .then((docSnap) => {
              if (docSnap && docSnap.exists()) {
                const data = docSnap.data()
                const ratings = data.ratings
                ratings[parseInt(rating.value)] += 1
                store
                  .setData(store.COL.BOOKS, bookId, { ratings: ratings })
                  .catch((err) => {
                    console.log(err)
                  })
                  .then(() => {
                    store
                      .getData(store.COL.USERS, store.user?.uid as string)
                      .catch((err) => {
                        console.log(err)
                      })
                      .then((docSnap) => {
                        if (docSnap && docSnap.exists()) {
                          const data = docSnap.data()
                          let bookIds: string[] = data.bookIds
                          if (bookIds === undefined) bookIds = []
                          console.log(bookIds)
                          if (!bookIds.includes(bookId)) {
                            bookIds.push(bookId)
                          }
                          store
                            .setData(store.COL.USERS, store.user?.uid as string, {
                              bookIds: bookIds
                            })
                            .catch((err) => {
                              console.log(err)
                            })
                            .then(() => {
                              router.push('/')
                            })
                        }
                      })
                  })
              }
            })
        })
    }
  })
}

function noSubmit() {
  if (postContent.value.length > 0) {
    return false
  }
  return true
}
</script>

<style scoped>
.rating > label {
  display: inline-block;
  font-size: 40px;
  cursor: pointer;
  color: #ccc;
}

.rating > input[type='radio'] {
  display: none;
}

.rating > label:hover,
.rating > label:hover ~ label,
.rating > input[type='radio']:checked ~ label {
  color: #ffd700;
}
</style>
