import {createRouter,createWebHistory} from 'vue-router'
import Home from "./components/sections/Home";

const routes=[
    {path: "/",name:"Home",components:Home},
];

const router=createRouter({
    history:createWebHistory(),
    routes
});

export default router;