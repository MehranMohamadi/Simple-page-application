import {createRouter, createWebHistory} from 'vue-router';
import Home from "./components/Home.vue";
import index from './components/sections/users/index.vue';
import show from "./components/sections/users/show";
import TemplateUser from './components/sections/users/TemplateUser'

import Post from './components/sections/POSTS/POST';
import showPost from "./components/sections/POSTS/showPost";
import TemplatePost from './components/sections/POSTS/TemplatePost'
import CreatePost from './components/sections/POSTS/createPost'
import editPost from './components/sections/POSTS/editpost'

const routes = [
    {path: "/", name: "home", component: Home},
    {
        path: "/users", name: "users", component: TemplateUser, children: [
            {path: '', name: "users", component: index},
            {path: ":id", name: "userid", component: show},

        ]
    },
    {
        path: "/posts", name: "postTemplate", component: TemplatePost, children: [
            {path: '', name: "posts", component: Post},
            {path: ":id", name: "post_id", component: showPost},
            {path: "CREATE", name: "createpost", component: CreatePost},
            {path: "edit/:id", name: "editpost", component: editPost}
        ]
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;