<template>
  <div>
    <div class="row">
      <div class="col fs-5 text-start">
        <slot name="btn_start" />
      </div>
      <div class="col-6 fs-1 fw-bold text-center">
        <slot name="title" />
      </div>
      <div class="col fs-5 text-end">
        <slot name="btn_end" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
