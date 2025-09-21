<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
    <!-- Column 1 -->
    <div class=" col-span-1 rounded-lg">
      <h1 class="text-3xl font-bold mb-4 ">Pavan Gudavalli</h1>
      <div class="flex space-x-4 mt-4">
        <a v-for="item in iconLinks" :key="item.href" :href="item.href" target="_blank" rel="noopener noreferrer">
          <font-awesome-icon :icon="item.icon" class="text-[1.3em]" />
        </a>
      </div>
      <img src="/pg2.jpg" alt="Backpacking!" class="rounded-lg w-64 h-80 object-cover mt-4"></img>
      <p class=" mt-10 ">I'm Pavan! I'm a CS & E / Math & Econ student at UCLA entering my junior year. 
        Focused on creating meaningful products!</p>
    </div>

    <!-- Column 3 -->
    <div class=" col-span-1 rounded-lg">
      <span class=" block h-10"></span>
      <h2 class="text-2xl font-bold mb-4">At UCLA</h2>
      <div class="space-y-4 mt-4">
        <div v-for="item in uclaItems" :key="item.header">
          <div class="font-bold text-l">{{ item.header }}</div>
          <div class="text-gray-700 dark:text-gray-300">{{ item.text }}</div>
        </div>
      </div>
    </div>

    <div class=" col-span-1 rounded-lg">
      <span class=" block h-10"></span>
      <h2 class="text-2xl font-bold mb-4">For the Love of the Game</h2>
      <div class="space-y-4 mt-4">
        <div v-for="item in loveItems" :key="item.header">
          <a :href="item.href" target="_blank" rel="noopener noreferrer">
            <div class="font-bold text-l">{{ item.header }}</div>
          </a>
          <div class="text-gray-700 dark:text-gray-300">{{ item.text }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const uclaItems = [
  {header: "CEC Director", text:"Leading the reconstruction of uclacec.com"},
  {header: "Bruin Tennis Consulting VP", text:"Crunching data + developing tools for the D1 Tennis Team"},
  {header: "UCLA Student Media", text:"Adding features to Bruinwalk"},
  {header: "LA Program LCC", text:"Teaching Software Construction / Operating Systems"}
]

const iconLinks = [
  { href: "https://github.com/yourusername", icon: ['fab', 'github'] },
  { href: "https://linkedin.com/in/yourusername", icon: ['fab', 'linkedin'] },
  { href: "/resume.pdf", icon: ['fas', 'file-alt'] }
]

const loveItems = [
  { header: "League", href: "https://www.op.gg/summoners/na/pabsirr-NA1", text:"One year hiatus ... 6 months left"},
  { header: "Chess", href: "https://lichess.org/@/F_pabsirr_10", text:"Trying to reach 2000 again"},
  { header: "Outside", href: "https://www.strava.com/athletes/129668098", text: "225 bench + sub 18 5k again?"},
  { header: "Movies", href: "https://letterboxd.com/PaGoat/", text: "Too many movies to watch"}
]
</script>
