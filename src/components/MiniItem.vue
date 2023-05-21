<template>
  <div>
    <slot name="thumb" />
    <div class="py-2">
      <span>
        <slot name="title" />
      </span>
      <p>
        <small>
          <font-awesome-icon :icon="['fas', 'star']" style="color: #ffd700" />
          <span>
            <slot name="rating" />
          </span>
        </small>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
