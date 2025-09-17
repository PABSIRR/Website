<script lang="ts" setup>
import Navbar from './components/Navbar.vue'
</script>

<template>
  <div id="app">
    <Navbar />
    <main class="page-container">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>

</style>
