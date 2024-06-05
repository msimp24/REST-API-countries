<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { toggleColorStore } from '@/stores/counter'
const toggleStore = toggleColorStore()
</script>

<template>
  <main :class="[toggleStore.toggle ? 'light-mode' : 'dark-mode']">
    <header>
      <div class="container row">
        <nav class="nav">
          <h1>Where in the world?</h1>
          <div class="modes">
            <font-awesome-icon :icon="['fas', 'moon']" />
            <h1 v-if="toggleStore.toggle" @click="toggleStore.changeMode()">Dark Mode</h1>
            <h1 v-else @click="toggleStore.changeMode()">Light Mode</h1>
          </div>
        </nav>
      </div>
    </header>
    <RouterView />
  </main>
</template>

<style scoped></style>
