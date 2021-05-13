<template>


            <div v-if="loading" class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>

            <div v-else class="col-md-4" v-for="user in users" :key="user.id">
                <cardview :user="user"></cardview>
            </div>

</template>

<script>
    import axios from "axios";
    import {ref} from 'vue';
    import cardview from "./cardview";


    export default {
        components: {
            cardview,
        },
        setup() {

            const users = ref([]);
            const loading = ref(true);


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
            return {users, loading};
        }
    }
</script>

<style scoped>

</style>