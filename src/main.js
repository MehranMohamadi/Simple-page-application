import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css'

const app=createApp(App);
app.mount('#app');
app.use(router);
