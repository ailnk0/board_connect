<template>
  <div class="card mb-3">
    <img src="https://picsum.photos/2000/2000" class="card-img-top" alt="..." />
    <div class="card-body">
      <div class="d-flex justify-content-between mb-2">
        <div class="d-flex justify-content-start align-items-center">
          <img src="https://picsum.photos/30/30" class="rounded-circle me-3" alt="..." />
          <h5 class="mt-1">Summer.love</h5>
        </div>
        <div class="d-flex justify-content-end align-items-center">
          <p class="card-text">
            <font-awesome-icon :icon="['fas', 'star']" style="color: #ffd700" />
            <span> 5.0</span>
          </p>
        </div>
      </div>
      <p class="card-text">
        재밌고, 귀엽고 내가 좋아하는 모든게 모여있어요. 킹도미노는 단순하고 쉬우면서 해도해도
        재밌어요! 😍
      </p>
      <div class="d-flex justify-content-start mb-2">
        <div>
          <font-awesome-icon :icon="['fas', 'heart']" />
          <span> 47</span>
        </div>
        <div class="mx-2"></div>
        <div>
          <font-awesome-icon :icon="['fas', 'comment']" />
          <span> 3</span>
        </div>
      </div>
      <p class="card-text"><small class="text-body-secondary">3분 전</small></p>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
