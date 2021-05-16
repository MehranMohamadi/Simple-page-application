<template>
    <Header/>

    <router-view style=" border-radius: 5px;  background-image: url('https://mdbcdn.b-cdn.net/img/new/standard/city/041.jpg')"></router-view>

</template>

<script>
    import Header from "./components/sections/Header";
    export default {
        name: "App",
        components : {
            Header
        }
    };
</script>

<style>

</style>
