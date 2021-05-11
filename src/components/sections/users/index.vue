<template>

<div class="container mt-5">
    <div class="row g-3">
        <div class="col-md-3"  v-for="user in users" :key="user.id">
            <cardview :user="user"></cardview>
        </div>

    </div>
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

            function getusers() {
                axios.get("https://jsonplaceholder.typicode.com/users")
                    .then(function (response) {
                        // handle success
                        users.value = response.data;
                    })
                    .catch(function (error) {
                        // handle error
                        console.log(error);
                    })
            }

            getusers();
            return {users};
        }
    }
</script>

<style scoped>

</style>