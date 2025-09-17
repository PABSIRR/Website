<template>
  <nav class="border-b border-b-black/15">
    <!-- Top section with icons - outside container for full width -->
    <div class="flex justify-end py-2 px-4">
        <div class="flex space-x-3">
        <!-- Theme toggle icon -->
            <button 
            @click="toggleTheme"
            class="w-6 h-6 flex items-center justify-center hover:text-[var(--color-secondary)] transition-colors duration-200"
            :title="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
            >
                <!-- Sun icon for light mode, Moon icon for dark mode -->
                <MoonIcon v-if="isDark" class="w-5 h-5" />
                <SunIcon v-else class="w-5 h-5" />
            </button>
            
            <!-- Placeholder icon -->
            <button 
                class="w-6 h-6 flex items-center justify-center hover:text-[var(--color-secondary)] transition-colors duration-200"
                title="Placeholder for later"
            >
                <!-- Placeholder icon (settings/gear) -->
                <Cog6ToothIcon class="w-5 h-5" />
            </button>
        </div>
    </div>
    
    <!-- Main navigation links - inside container -->
    <div class="navbar-container">
      <div class="flex justify-center py-6 mt-20">
        <ul class="flex space-x-12 text-xl font-mono">
          <li>
            <RouterLink 
              to="/" 
              class="hover:text-[var(--color-secondary)] transition-colors duration-200 [&.router-link-active]:font-bold [&.router-link-active]:underline"
            >
              About
            </RouterLink>
          </li>
          <li>
            <RouterLink 
              to="/projects" 
              class="hover:text-[var(--color-secondary)] transition-colors duration-200 [&.router-link-active]:font-bold [&.router-link-active]:underline"
            >
              Projects
            </RouterLink>
          </li>
          <li>
            <RouterLink 
              to="/books" 
              class="hover:text-[var(--color-secondary)] transition-colors duration-200 [&.router-link-active]:font-bold [&.router-link-active]:underline"
            >
              Books
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { SunIcon, MoonIcon, Cog6ToothIcon } from '@heroicons/vue/24/outline'

// Theme state (you can make this more sophisticated later)
const isDark = ref(true)

// Initialize theme on component mount
onMounted(() => {
  // Check localStorage or default to dark
  const savedTheme = localStorage.getItem('theme')
  isDark.value = savedTheme ? savedTheme === 'dark' : true
  
  // Apply the initial theme
  if (isDark.value) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
})

const toggleTheme = () => {
  isDark.value = !isDark.value
  
  // Actually toggle the dark class on the document
  if (isDark.value) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
  
  // Optional: Save preference to localStorage
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
  
  console.log('Theme toggled:', isDark.value ? 'dark' : 'light')
}
</script>

