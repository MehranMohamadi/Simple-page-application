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

        <div class="card-footer">
            <button class="btn btn-sm btn-danger s-3">Delete</button>
            <button class="btn btn-sm btn-light s-3">Edit</button>
        </div>
    </div>

</template>

<script>
    import axios from "axios";
    import {ref} from 'vue';
    import {useRoute} from 'vue-router'

    export default {

        setup() {

            const post = ref([]);
            const loading = ref(true);
            const route = useRoute();


            function get_post() {
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

            get_post();
            return {post, loading, route};
        }
    }
</script>

<style scoped>

</style>