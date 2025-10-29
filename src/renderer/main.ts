import { createApp } from 'vue';

import './style.css';
import '@resources/public/assets/tailwind.css';
import App from './App.vue';
console.log('环境变量VITE_Nihao：', import.meta.env.VITE_Nihao);
console.log('环境变量testNodeEnv：', import.meta.env.testNodeEnv);
createApp(App).mount('#app');
