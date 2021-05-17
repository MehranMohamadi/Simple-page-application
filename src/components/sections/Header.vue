<template>
    <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand blue" href="#">MehranMohammadi.ir</a>
                <button
                        class="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <router-link class="nav-link" to="/">Home</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/users">Users</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/posts">Posts</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
    export default {
        name : "Header"
    };
</script>

<style scoped>
    .router-link-active  {
        color: rgba(0, 0, 0, 0.9) !important;
        border-bottom: 2px solid rgba(0, 0, 0, 0.9) !important;
    }
    .blue{
        background: #333333;
        text-shadow: #FFF 0 0 5px, #FFF 0 0 10px, #FFF 0 0 15px, #FF2D95 0 0 20px, #FF2D95 0 0 30px, #FF2D95 0 0 40px, #FF2D95 0 0 50px, #FF2D95 0 0 75px;
        font-family: "Comic Sans MS", cursive, sans-serif;
        font-size: 19px;
        letter-spacing: -1px;
        word-spacing: 2.4px;
        color: #FFFFFF;
        font-weight: normal;
        text-decoration: none;
        font-style: normal;
        font-variant: normal;
        text-transform: none;
        border-radius: 20px;
    }

</style>