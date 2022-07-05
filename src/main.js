import { createApp } from 'vue';
import App from './App.vue';
import '@/styles/index.css';
import router from './router/router';
import store from './store/store';

const app = createApp(App);

app
    .use(store)
    .use(router)
    .mount('#app');
