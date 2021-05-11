<template>

    <Cardview></Cardview>
<div>{{users}}</div>

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