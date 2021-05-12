<template>

    <div v-if="route.params.id == undefined" class="container mt-5">
        <div class="row g-3">

            <div v-if="loading" class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>

            <div v-else class="col-md-4" v-for="user in users" :key="user.id">
                <cardview :user="user"></cardview>
            </div>

        </div>

    </div>
    <router-view v-else></router-view>

</template>

<script>
    import axios from "axios";
    import {ref} from 'vue';
    import cardview from "./cardview";
    import {useRoute} from 'vue-router'

    export default {
        components: {
            cardview,
        },
        setup() {

            const users = ref([]);
            const loading = ref(true);
            const route = useRoute();


            function getusers() {
                axios.get("https://jsonplaceholder.typicode.com/users")
                    .then(function (response) {
                        // handle success
                        users.value = response.data;
                        loading.value = false;
                    })
                    .catch(function (error) {
                        // handle error
                        console.log(error);
                    })
            }

            getusers();
            return {users, loading, route};
        }
    }
</script>

<style scoped>

</style>