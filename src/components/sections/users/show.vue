<template>

    <div class="container mt-5">
        <div class="row g-3">

            <div v-if="loading" class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>

            <div v-else  class="col-md-4">
                <cardview :user="user"></cardview>
            </div>

        </div>
    </div>


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

            const user = ref([]);
            const loading=ref(true);
            const route=useRoute();
            function getuser() {
                axios.get(`https://jsonplaceholder.typicode.com/users/${route.params.id}`)
                    .then(function (response) {
                        // handle success
                        user.value = response.data;
                        loading.value=false;
                    })
                    .catch(function (error) {
                        // handle error
                        console.log(error);
                    })
            }

            getuser();
            return {user,loading};
        }
    }
</script>

<style scoped>

</style>