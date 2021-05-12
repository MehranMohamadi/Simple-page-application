import {createRouter, createWebHistory} from 'vue-router';
import Home from "./components/Home.vue";
import index from './components/sections/users/index.vue';
import show from "./components/sections/users/show";
import TemplateUser from './components/sections/users/TemplateUser'

const routes = [
    {path: "/", name: "home", component: Home},
    {
        path: "/users", name: "users", component: TemplateUser, children: [
            {path: "/users", name: "users", component: index},
            {path: ":id", name: "userid", component: show}
        ]
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;