<template>
  <div>
    <h1> Projects </h1>
    <!-- Filters -->
    <div>
      <button
        v-for="type in ['all','solo','team']"
        :key="type"
        :class="['px-4 py-2 rounded', selectedType === type ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700']"
        @click="selectedType = type"
        >
        {{ type.charAt(0).toUpperCase() + type.slice(1) }}
      </button>
    </div>
    <div>
      <label>Filter by Tag:</label>
      <select v-model="selectedTag" class="">
        <option value="all">All</option>
        <option v-for="tag in allTags" :key="tag" :value="tag">{{  tag  }}</option>
      </select>
    </div>
    <!-- Actual Projs -->
    <div>
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