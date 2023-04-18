<template>
  <body>
    <div class="container">
      <div class="row">
        <div class="col">
          <ActionBar />
        </div>
      </div>
      <div class="row">
        <div class="col">
          <TheSearch />
        </div>
      </div>
      <div class="row">
        <div class="col">
          <TheCard />
          <TheCard />
          <TheCard />
          <TheCard />
          <TheCard />
        </div>
      </div>
      <div class="row">
        <div class="col">
          <NavigationBar />
        </div>
      </div>
    </div>
  </body>
</template>

<script setup lang="ts">
import ActionBar from './components/ActionBar.vue'
import NavigationBar from './components/NavigationBar.vue'
import TheCard from './components/TheCard.vue'
import TheSearch from './components/TheSearch.vue'
</script>

<style scoped></style>
