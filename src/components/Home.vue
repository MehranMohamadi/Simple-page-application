<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-6">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
                    totam, ratione, voluptas eveniet soluta incidunt itaque optio beatae
                    id temporibus, ex exercitationem sint ad earum in sed? Quam, cum sunt.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
                    totam, ratione, voluptas eveniet soluta incidunt itaque optio beatae
                    id temporibus, ex exercitationem sint ad earum in sed? Quam, cum sunt.
                </p>





                <router-link class="btn btn-light" v-bind:to="{name:'users'}">Users</router-link>
                <router-link class="btn btn-dark ms-3" v-bind:to="{name:'posts'}">Posts</router-link>

            </div>
        </div>
    </div>
</template>

<script>
    export default {};
</script>

<style>
</style>