<template>
  <div>
    <slot name="thumb" />
    <div class="py-2">
      <span>
        <slot name="title" />
      </span>
      <p class="fw-bold">
        <font-awesome-icon :icon="['fas', 'star']" style="color: #ffd700" />
        <span>
          <slot name="rating" />
        </span>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
