import {createRouter, createWebHistory} from 'vue-router';
import Home from "./components/Home.vue";
import index from './components/sections/users/index.vue';


const routes = [
    { path: "/", name: "home", component: Home },
    { path: "/users", name: "users", component: index ,children:[
    { path: ":id", name: "userid", component: Show }
        ]}
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;