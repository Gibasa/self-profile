import {createRouter, createWebHistory} from 'vue-router'
import Home from '@/views/homeComponent.vue'
import Skills from '@/views/skillsComponent.vue'

const routes= [
    {path: '/', name: 'Home', component: Home},
    {path: '/skills', name: 'Skills', component: Skills},


]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router