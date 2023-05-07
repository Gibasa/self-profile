import {createRouter, createWebHistory} from 'vue-router'
import Home from '@/views/homeComponent.vue'
import About from '@/views/aboutComponent.vue'
import Skills from '@/views/skillsComponent.vue'

const routes= [
    {path: '/', name: 'Home', component: Home},
    {path: '/skills', name: 'Skills', component: Skills},
    {path: '/about', name: 'About', component: About}


]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router