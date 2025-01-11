import './assets/main.css'
import './assets/icomoon (1)/style.css'; // IcoMoon CSS faylini import qilish
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios';                 // Axios HTTP so'rovlarini yuborish uchun


// import client from './api/api';   

const app = createApp(App)

app.use(router)

app.config.globalProperties.$axios = axios;

app.mount('#app')
