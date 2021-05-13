<template>


    <div v-if="loading" class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>

    <div v-else class="col-md-4">
        <div class="card">
            <div class="card-header">

                    {{post.title}}

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
    import {useRoute} from 'vue-router'

    export default {

        setup() {

            const post = ref({});
            const loading = ref(true);
            const route = useRoute();


            function getpost() {
                axios.get(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
                    .then(function (response) {
                        // handle success
                        post.value = response.data;
                        loading.value = false;
                    })
                    .catch(function (error) {
                        // handle error
                        console.log(error);
                    })
            }

            getpost();
            return {post, loading, route};
        }
    }
</script>

<style scoped>

</style>