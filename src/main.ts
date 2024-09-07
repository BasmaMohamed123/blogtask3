import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'



// src/axios.js or in your main.js file
import axios from 'axios';

axios.defaults.baseURL = 'https://interns-blog.nafistech.com/api';



const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')



