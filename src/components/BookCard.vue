<template>
  <div class="bg-[var(--color-secondary)] rounded-xl shadow p-6 flex flex-col h-full">
    <img :src="img" alt="Book cover" class="w-24 h-32 object-cover mb-3 self-center" v-if="img" />
    <h3 class="text-xl font-bold mb-1">{{ name }}</h3>
    <div class="text-sm text-gray-600 mb-1">by {{ author }}</div>
    <div class="text-xs text-gray-500 mb-2">Read: {{ date }}</div>
    <!--<div class="mb-3 flex-1 text-base">{{ description }}</div>-->
    <div v-if="$slots.default" class="mb-3 text-base flex-1">
        <slot />
    </div>
    <div class="flex items-center gap-1">
        <span v-for="(star,i) in stars" :key="i">
            <font-awesome-icon
                v-if="star === 'full'"
                :icon="['fas', 'star']"
                class="text-blue-400"
            />
            <font-awesome-icon
                v-else-if="star === 'half'"
                :icon="['fas', 'star-half-alt']"
                class="text-blue-400"
            />
            <font-awesome-icon
                v-else
                :icon="['fas', 'star']"
                class="text-blue-100"
            />

        </span>
    </div>
  </div>
</template>


<script setup lang="ts">
import { computed } from 'vue'
const props = defineProps<{
    name: string
    author: string
    //description: string
    date: string
    img: string
    rating: number
}>()


const stars = computed(() => {
    const fullStars = Math.floor(props.rating)
    const halfStar = props.rating % 1 > 0.5 ? 1 : 0
    const emptyStars = 5 - fullStars - halfStar
    return [
        ...Array(fullStars).fill('full'),
        ...Array(halfStar).fill('half'),
        ...Array(emptyStars).fill('empty')
    ]
})

</script>