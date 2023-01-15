import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'
import Home from './views/Home.vue'
import About from './views/About.vue'
import TheHandmaiden from './views/TheHandmaiden.vue'

const routes = [
    { path: '/', component: Home },
    // { path: '/about', component: About },
    { path: '/the-handmaiden', component: TheHandmaiden },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

createApp(App).use(router).mount('#app')
