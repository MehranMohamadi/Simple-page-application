<template>
<div>
    <RouterLink class="btn btn-danger" :to="{name:'createpost'}">CreatePost</RouterLink>
</div>

    <div v-if="loading" class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>

    <div v-else class="col-md-4" v-for="post in posts" :key="post.id">
        <div class="card">
            <div class="card-header">
                <router-link v-bind:to="{name:'post_id',params:{id: post.title}}"> {{post.title}}
                </router-link>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">body:{{post.body}}</li>

            </ul>
        </div>
    </div>

    <!-- <router-view v-else></router-view> -->

</template>

<script>
    import axios from "axios";
    import {ref} from 'vue';


    export default {

        setup() {

            const posts = ref([]);
            const loading = ref(true);



            function getpost() {
                axios.get("https://jsonplaceholder.typicode.com/posts")
                    .then(function (response) {
                        // handle success
                        posts.value = response.data;
                        loading.value = false;
                    })
                    .catch(function (error) {
                        // handle error
                        console.log(error);
                    })
            }

            getpost();
            return {posts, loading};
        }
    }
</script>

<style scoped>

</style>