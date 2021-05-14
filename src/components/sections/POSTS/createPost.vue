<template>
    <div class="col-md-6 align-items-center">
        <form @submit.prevent="validate">
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Title</label>
            <input v-model.lazy="form.title" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">

        </div>

        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Body</label>
            <input v-model.lazy.trim="form.body" type="text" class="form-control" id="exampleInputPassword1" :placeholder="form.titleerror">
        </div>


        <button type="submit" class="btn btn-primary">Post</button>
    </form></div>
</template>

<script>
    import {reactive} from 'vue'
    export default {
        setup(){
            const form=reactive({
                title:"",
                body:"",
                titleerror:""
            });

            function validate() {
                if (form.title===""){
                    form.titleerror='title is required'
                }
            }

            return{form,validate}
        }
    }
</script>

<style scoped>

</style>