<template>
  <div>
    <slot name="thumb" />
    <div class="py-2">
      <span>킹도미노</span>
      <p class="fw-bold">
        <font-awesome-icon :icon="['fas', 'star']" style="color: #ffd700" />
        <span> 4.2</span>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
