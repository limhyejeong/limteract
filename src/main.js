import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Work from './views/Work.vue'

const routes = [
    { path: '/', component: Home },
    // { path: '/about', component: About },
    { path: '/work', component: Work },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

createApp(App).use(router).mount('#app')
