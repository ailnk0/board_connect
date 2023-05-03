<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="card">
          <div class="card-body">
            <img
              src="https://via.placeholder.com/150"
              class="rounded-circle mx-auto d-block mb-3"
              alt="User photo"
            />
            <h4 class="text-center">{{ auth?.currentUser?.displayName }}</h4>
            <p class="text-center">{{ auth?.currentUser?.email }}</p>
            <p v-if="!auth?.currentUser?.emailVerified" class="text-center">
              Required to email verification
            </p>
            <hr />
            <ul class="list-group">
              <li class="list-group-item d-flex justify-content-between align-items-center">
                Profile
                <span class="badge badge-primary badge-pill">Edit</span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center">
                Settings
                <span class="badge badge-primary badge-pill">Edit</span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center">
                Billing
                <span class="badge badge-primary badge-pill">Edit</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getAuth } from 'firebase/auth'
import { onMounted, ref } from 'vue'

const auth = ref()

onMounted(() => {
  auth.value = getAuth()
})
</script>

<style scoped></style>
