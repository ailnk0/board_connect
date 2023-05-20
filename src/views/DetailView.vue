<template>
  <div>
    <img src="https://picsum.photos/1000/500" class="card-img-top rounded" alt="..." />
  </div>
  <div class="jumbotron jumbotron-fluid mb-5">
    <div class="container">
      <h1 class="display-4">킹도미노</h1>
      <p class="lead">2016, 2-4명, 15-25분, 8세 이상</p>
    </div>
  </div>
  <div class="card mb-3">
    <ul class="list-group list-group-flush">
      <li class="list-group-item">
        <div class="card-body">
          <h5 class="card-title">기본 정보</h5>
          <p class="card-text">2016, 2-4명, 15-25분, 8세 이상</p>
        </div>
      </li>
      <li class="list-group-item">
        <div class="card-body">
          <h5 class="card-title">별점</h5>
          <p class="card-text">
            <font-awesome-icon :icon="['fas', 'star']" style="color: #ffd700" />
            5.0
          </p>
        </div>
      </li>
      <li class="list-group-item">
        <div class="card-body">
          <h5 class="card-title">코멘트</h5>
          <h5 class="card-title">leebd</h5>
          <p class="card-text">정말 멋진 게임이에요</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
