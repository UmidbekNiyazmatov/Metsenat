import './assets/main.css'
import './assets/icomoon (1)/style.css'; 
import { createApp } from 'vue'
import Vue3Autocounter from 'vue3-autocounter';

import App from './App.vue'
import router from './router'

import VueApexCharts from "vue3-apexcharts";



const app = createApp(App)

app.component('vue3-autocounter', Vue3Autocounter)
app.use(VueApexCharts);
app.use(router)



app.mount('#app')
