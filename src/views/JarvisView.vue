<template>
  <section class="overflow-auto" style="height: 90vh">
    <div class="container bg-light container py-3 sticky-top">
      <TheTitle>
        <template #btn_start>
          <a class="nav-link" role="button" @click="$router.go(-1)">뒤로</a>
        </template>
        <template #title>J.A.R.V.I.S.</template>
        <template #btn_end>
          <a class="nav-link" role="button" href="/help">설정</a>
        </template>
      </TheTitle>
    </div>

    <div class="container py-3">
      <div data-mdb-perfect-scrollbar="true">
        <div class="d-flex flex-row justify-content-start">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp"
            alt="avatar 1"
            style="width: 45px; height: 100%"
          />
          <div>
            <p class="small p-2 ms-3 mb-1 rounded-3" style="background-color: #f5f6f7">Hi</p>
            <p class="small p-2 ms-3 mb-1 rounded-3" style="background-color: #f5f6f7">
              How are you ...???
            </p>
            <p class="small p-2 ms-3 mb-1 rounded-3" style="background-color: #f5f6f7">
              What are you doing tomorrow? Can we come up a bar?
            </p>
            <p class="small ms-3 mb-3 rounded-3 text-muted">23:58</p>
          </div>
        </div>

        <div class="divider d-flex align-items-center mb-4">
          <p class="text-center mx-3 mb-0" style="color: #a2aab7">Today</p>
        </div>

        <div class="d-flex flex-row justify-content-end mb-4 pt-1">
          <div>
            <p class="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">Hiii, I'm good.</p>
            <p class="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">How are you doing?</p>
            <p class="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">
              Long time no see! Tomorrow office. will be free on sunday.
            </p>
            <p class="small me-3 mb-3 rounded-3 text-muted d-flex justify-content-end">00:06</p>
          </div>
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava4-bg.webp"
            alt="avatar 1"
            style="width: 45px; height: 100%"
          />
        </div>

        <div class="d-flex flex-row justify-content-start mb-4">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp"
            alt="avatar 1"
            style="width: 45px; height: 100%"
          />
          <div>
            <p class="small p-2 ms-3 mb-1 rounded-3" style="background-color: #f5f6f7">Okay</p>
            <p class="small p-2 ms-3 mb-1 rounded-3" style="background-color: #f5f6f7">
              We will go on Sunday?
            </p>
            <p class="small ms-3 mb-3 rounded-3 text-muted">00:07</p>
          </div>
        </div>

        <div class="d-flex flex-row justify-content-end mb-4">
          <div>
            <p class="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">That's awesome!</p>
            <p class="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">
              I will meet you Sandon Square sharp at 10 AM
            </p>
            <p class="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">Is that okay?</p>
            <p class="small me-3 mb-3 rounded-3 text-muted d-flex justify-content-end">00:09</p>
          </div>
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava4-bg.webp"
            alt="avatar 1"
            style="width: 45px; height: 100%"
          />
        </div>

        <div class="d-flex flex-row justify-content-start mb-4">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp"
            alt="avatar 1"
            style="width: 45px; height: 100%"
          />
          <div>
            <p class="small p-2 ms-3 mb-1 rounded-3" style="background-color: #f5f6f7">
              Okay i will meet you on Sandon Square
            </p>
            <p class="small ms-3 mb-3 rounded-3 text-muted">00:11</p>
          </div>
        </div>

        <div class="d-flex flex-row justify-content-end mb-4">
          <div>
            <p class="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">
              Do you have pictures of Matley Marriage?
            </p>
            <p class="small me-3 mb-3 rounded-3 text-muted d-flex justify-content-end">00:11</p>
          </div>
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava4-bg.webp"
            alt="avatar 1"
            style="width: 45px; height: 100%"
          />
        </div>

        <div class="d-flex flex-row justify-content-start mb-4">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp"
            alt="avatar 1"
            style="width: 45px; height: 100%"
          />
          <div>
            <p class="small p-2 ms-3 mb-1 rounded-3" style="background-color: #f5f6f7">
              Sorry I don't have. i changed my phone.
            </p>
            <p class="small ms-3 mb-3 rounded-3 text-muted">00:13</p>
          </div>
        </div>

        <div class="d-flex flex-row justify-content-end">
          <div>
            <p class="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">
              Okay then see you on sunday!!
            </p>
            <p class="small me-3 mb-3 rounded-3 text-muted d-flex justify-content-end">00:15</p>
          </div>
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava4-bg.webp"
            alt="avatar 1"
            style="width: 45px; height: 100%"
          />
        </div>
      </div>
    </div>

    <div
      class="bg-light text-muted d-flex justify-content-start align-items-center p-2 sticky-bottom"
    >
      <img
        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp"
        alt="avatar 3"
        style="width: 40px; height: 100%"
      />
      <input
        type="text"
        class="form-control mx-2"
        id="exampleFormControlInput1"
        placeholder="Type message"
      />
      <a class="ms-1 text-muted" href="#!"><i class="fas fa-paperclip"></i></a>
      <a class="ms-3 text-muted" href="#!"><i class="fas fa-smile"></i></a>
      <a class="ms-3" href="#!"><i class="fas fa-paper-plane"></i></a>
    </div>
  </section>
</template>

<script setup lang="ts">
import TheTitle from '@/components/TheTitle.vue'
</script>

<style scoped></style>
