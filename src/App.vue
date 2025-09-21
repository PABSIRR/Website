<script lang="ts" setup>
import Navbar from './components/Navbar.vue'
import { SpeedInsights } from '@vercel/speed-insights/vue'
</script>

<template>
  <SpeedInsights/>
  <div id="app">
    <Navbar />
    <main class="page-container">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>

</style>
