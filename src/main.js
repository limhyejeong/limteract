import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'
import Home from './views/Home.vue'
import TheHandmaiden from './views/TheHandmaiden.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/the-handmaiden', component: TheHandmaiden },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

createApp(App).use(router).mount('#app')

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDjgr4r-tfydxZoDVCN3k6EJ0yXHlKeh00",
    authDomain: "limteract.firebaseapp.com",
    projectId: "limteract",
    storageBucket: "limteract.appspot.com",
    messagingSenderId: "612867187547",
    appId: "1:612867187547:web:d93c3e2ee366423da4707e",
    measurementId: "G-9XG7L86WWP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);