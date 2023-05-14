<template>
  <div class="m-4">
    <div class="row">
      <div class="col">
        <div class="form-group">
          <div class="rating">
            <input v-model="rating" type="radio" name="star" id="star5" value="5.0" checked />
            <label for="star5">
              <font-awesome-icon :icon="['fas', 'star']" />
            </label>
            <input v-model="rating" type="radio" name="star" id="star4" value="4.0" />
            <label for="star4">
              <font-awesome-icon :icon="['fas', 'star']" />
            </label>
            <input v-model="rating" type="radio" name="star" id="star3" value="3.0" />
            <label for="star3">
              <font-awesome-icon :icon="['fas', 'star']" />
            </label>
            <input v-model="rating" type="radio" name="star" id="star2" value="2.0" />
            <label for="star2">
              <font-awesome-icon :icon="['fas', 'star']" />
            </label>
            <input v-model="rating" type="radio" name="star" id="star1" value="1.0" />
            <label for="star1">
              <font-awesome-icon :icon="['fas', 'star']" />
            </label>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="form-group">
          <textarea
            class="form-control border-0 shadow-none my-4"
            style="height: 60vh"
            id="postContent"
            placeholder="감상을 자유롭게 표현해주세요"
            v-model="postContent"
          ></textarea>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <button
          class="btn btn-outline-primary rounded-pill w-100"
          @click="submitPost"
          :disabled="noSubmit()"
        >
          저장
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useStore } from '@/stores/authStore'
import router from '@/router'

const rating = ref('5.0')
const postContent = ref('')
const store = useStore()

function submitPost() {
  const data = {
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
    .addData(store.COL.POSTS, data)
    .catch((err) => {
      console.log(err)
    })
    .then(() => {
      router.push('/')
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
