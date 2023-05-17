<template>
  <div class="card mb-3">
    <slot name="image" />
    <div class="card-body">
      <div class="d-flex justify-content-between mb-2">
        <div class="d-flex justify-content-start align-items-center">
          <slot name="profile-image" />
          <h5 class="mt-1">
            <slot name="user_name" />
          </h5>
        </div>
        <div class="d-flex justify-content-end align-items-center">
          <p class="card-text">
            <font-awesome-icon :icon="['fas', 'star']" style="color: #ffd700" />
            <slot name="rating" />
          </p>
        </div>
      </div>
      <p class="card-text">
        <slot name="content" />
      </p>
      <div class="d-flex justify-content-start mb-2">
        <div>
          <font-awesome-icon :icon="['fas', 'heart']" />
          <slot name="like" />
        </div>
        <div class="mx-2"></div>
        <div>
          <font-awesome-icon :icon="['fas', 'comment']" />
          <slot name="num_comment" />
        </div>
      </div>
      <p class="card-text">
        <small class="text-body-secondary">
          <slot name="createdAt" />
        </small>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
