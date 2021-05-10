<template>
    <div>2345t5</div>
</template>

<script>
    import axios from 'axios'
    export default {

        setup(){
       function getusers() {
           axios.get("https://jsonplaceholder.typicode.com/users")
               .then(function (response) {
                   // handle success
                   console.log(response);
               })
               .catch(function (error) {
                   // handle error
                   console.log(error);
               })
       }

       getusers()
        }
    }
</script>

<style scoped>

</style>