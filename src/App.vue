<template>
<Header/>
  <router-view></router-view>
</template>

<script>

import Header from "./components/sections/Header";
export default {
  name: 'App',
components:{
    Header
}
}
</script>

<style>

</style>
