<template>
    <div class="card">
        <div class="card-header">
            <router-link v-bind:to="{name:'userid',params:{id: user.id}}"> {{user.name}}
            </router-link>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">UserName:{{user.username}}</li>
            <li class="list-group-item">email:{{user.email}}</li>
            <li class="list-group-item">phone:{{user.phone}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        props: {
            user: Object
        }
    }
</script>

<style scoped>

</style>