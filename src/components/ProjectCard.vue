<template>
    <div class=" bg-[var(--color-secondary)] rounded-xl shadow p-6 flex flex-col gap-3">
        <h3 class="text-2xl font-bold mb-2"> {{  name  }}</h3>
        <div v-if="$slots.default" class="mt-2 text-base">
            <slot />
        </div>
        <!-- Tags -->
        <div class="flex flex-wrap gap-2 mb-2">
            <span v-for="tag in tags" :key="tag" 
                class="px-3 py-1 rounded-full text-sm font-medium bg-[var(--color-text2)]">
                {{  tag  }}
            </span>
        </div>
        <!-- Links -->
        <div class="flex items-center gap-4 mt-2">
            <a v-if="github" :href="github" target="_blank" rel="noopener noreferrer" class="flex items-center gap-1 hover:text-[var(--color-text-hover)]">
                <font-awesome-icon :icon="['fab', 'github']" class="text-[1.3em]" />
                <span class="text-sm">GitHub</span>
            </a>
            <a v-if="live" :href="live" target="_blank" rel="noopener noreferrer" class="flex items-center gap-1 hover:text-[var(--color-text-hover)]">
                <font-awesome-icon :icon="['fab', 'external-link-alt']" class="text-[1.3em]" />
                <span class="text-sm">Live</span>
            </a>
        </div>
    </div>
</template>


<script setup lang="ts">
defineProps<{
    name: string
    tags: string[]
    github?: string | null
    live?: string | null
}>()
</script>