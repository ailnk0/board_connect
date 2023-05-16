<template>
  <TheTitle>
    <template #btn_start>
      <button class="btn btn-lg border-0" role="button" @click="$router.go(-1)">취소</button>
    </template>
    <template #title>리뷰 수정</template>
    <template #btn_end>
      <button class="btn btn-lg border-0" role="button" @click="submitPost" :disabled="noSubmit">
        확인
      </button>
    </template>
  </TheTitle>
  <div class="mt-5">
    <div class="row">
      <div class="col d-flex justify-content-center">
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
    <div class="row mt-4">
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
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import TheTitle from '../components/TheTitle.vue'

const rating = ref('5.0')
const postContent = ref('')

function submitPost() {}

function noSubmit() {
  return false
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
