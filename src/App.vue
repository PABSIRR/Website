<script lang="ts" setup>
import Navbar from './components/Navbar.vue'
import { SpeedInsights } from '@vercel/speed-insights/vue'
import { Analytics } from '@vercel/analytics/vue';
</script>

<template>
  <SpeedInsights/>
  <Analytics />
  <div id="app">
    <Navbar />
    <main class="page-container">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>

</style>
