<template>
  <div class="max-w-5xl mx-auto py-10">
    <div class="flex flex-row items-center justify-between mb-12">
      <h1 class="text-4xl font-bold "> Projects </h1>
      <!-- Filters -->
      <div class="flex gap-2 ">
        <button
          v-for="type in ['all','solo','team']"
          :key="type"
          :class="['px-4 py-2 rounded hover:bg-blue-400 active:bg-amber-400', selectedType === type ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700']"
          @click="selectedType = type"
          >
          {{ type.charAt(0).toUpperCase() + type.slice(1) }}
        </button>
      </div>
      <div class="flex">
        <label class="font-semibold mx-2">Filter by Tag:</label>
        <select v-model="selectedTag" class="px-2 py-1 rounded border">
          <option value="all">All</option>
          <option v-for="tag in allTags" :key="tag" :value="tag">{{  tag  }}</option>
        </select>
      </div>
    </div>
    <!-- Actual Projs -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ProjectCard
        v-for="project in filteredProjects"
        :key="project.name"
        :name="project.name"
        :tags="project.tags"
        :github="project.github"
        :live="project.live"
      >
        {{ project.description }}
      </ProjectCard>
    </div>
  </div>
</template>


<script setup lang="ts">
import { ref, computed } from 'vue'
import ProjectCard from '../components/ProjectCard.vue'

type Project = {
  name: string
  tags: string[]
  github?: string | null
  live?: string | null
  type: 'solo' | 'team'
  date: string 
  description: string
}

const projects: Project[] = [
  {
    name: "E-Diary",
    tags: ["Django"],
    github: "https://github.com/PABSIRR/IA",
    type: "solo",
    live: null,
    date: "2023-04-09",
    description: "Website for grouping activities, writing reflections, and analyzing data."
  },
  {
    name: "Personal Website",
    tags: ["Tailwind", "Vue", "Vite"],
    github: "https://github.com/PABSIRR/Website",
    type: "solo",
    live: null,
    date: "2025-09-20",
    description: "Personal Website v1"
  },
  {
    name: "Mini Bomb Challenge",
    tags: ["Makefile", "C++"],
    github: "https://github.com/PABSIRR/LA",
    type: "team",
    live: null,
    date: "2025-02-20",
    description: "Challenge program to teach GDB / Assembly"
  },
  {
    name: "Depth.AI",
    tags: ["Reflex", "Gemini"],
    github: "https://github.com/PABSIRR/LAHACKS24",
    type: "team",
    live: "https://devpost.com/software/depth-ai",
    date: "2024-02-20",
    description: "AI powered platform to give secondary insights on medical records / notes"
  },
  {
    name: "Tennis Match Analyzer",
    tags: ["Firebase","React"],
    github: "https://github.com/bruin-tennis-consulting/match-manager",
    type: "team",
    live: "https://match-viewing-dashboard.web.app/",
    date: "2024-09-09",
    description: "Tag tennis matches + play them back shot by shot"
  }
]

const selectedType = ref("all")
const selectedTag = ref("all")

const allTags = computed(()=>{
  const tagSet = new Set<string>()
  projects.forEach(p => p.tags?.forEach(tag => tagSet.add(tag)))
  return Array.from(tagSet)
})

// Debugging?
const sortedProjects = computed(() =>
  [...projects].sort((a,b) => new Date(b.date).getTime() - new Date(a.date).getTime())
)

const filteredProjects = computed(() => {
  return sortedProjects.value.filter(project => {
    const typeMatch = selectedType.value === "all" || project.type === selectedType.value
    const tagMatch = selectedTag.value === "all" || project.tags?.includes(selectedTag.value)
    return typeMatch && tagMatch
  })
})
</script>