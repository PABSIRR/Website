import { createRouter, createWebHistory } from 'vue-router'
// Import vue views
import About from '../views/About.vue'
import Books from '../views/Books.vue'
import Projects from '../views/Projects.vue'

const routes = [
    { path: '/', component: About },
    { path: '/projects', component: Projects },
    { path: '/books', component: Books }
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})