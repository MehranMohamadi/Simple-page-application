import {createRouter, createWebHistory} from 'vue-router'
import Home from "./components/Home";
import Index from './components/sections/users/index'
import post from './components/sections/POSTS/POST'

const routes = [
    {path: "/", name: "home", components: Home},
    {path: "/users", name: "users", components: Index},
    {path: "/posts", name: "posts", components: post}
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;