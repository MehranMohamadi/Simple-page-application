<template>
    <div class="col-md-6 align-items-center">
        <form @submit.prevent="validate">
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Edit post</label>
                <input v-model.lazy="form.title" type="text" class="form-control" id="exampleInputEmail1"
                       aria-describedby="emailHelp">
                <div class="form-text text-danger">
                    {{form.titleerror}}
                </div>
            </div>

            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Body</label>
                <input v-model.lazy.trim="form.body" rows="6" type="text" class="form-control" id="exampleInputPassword1"
                       :placeholder="form.titleerror">
                <div class="form-text text-danger">
                    {{form.bodyerror}}
                </div>
            </div>


            <button type="submit" class="btn btn-primary" :disabled="loading">
                <span v-if="loading" class="spinner-border spinner-border-sm" role="status"></span>
                edit
            </button>
        </form>
    </div>
</template>

<script>
    import {reactive, ref} from 'vue';
    import axios from 'axios';
    import  Swal from 'sweetalert2';
    import {useRoute} from "vue-router";

    export default {
        setup() {
            const form = reactive({
                title: "",
                body: "",
                titleerror: "",
                bodyerror: ""
            });
            const loading = ref(false)
            const route = useRoute();




            function get_post() {
                axios.get(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
                    .then(function (response) {
                        // handle success
                        form.title = response.data.title;
                        form.body = response.data.body;
                    })
                    .catch(function (error) {
                        // handle error
                        console.log(error);
                    })
            }

            get_post();

            function validate() {
                if (form.title === "") {
                    form.titleerror = 'title is required'
                } else {
                    form.titleerror = ''
                }
                if (form.body === "") {
                    form.bodyerror = 'Body is required'
                } else {
                    form.bodyerror = ''
                }
                if (form.title !== "" && form.body !== "") {
                    loading.value=true;
                    updatepost();
                }
            }

            function updatepost() {
                axios
                    .put(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`, {
                    id:route.params.id,
                    title: form.title,
                    body: form.body,
                    userId: 1,
                })
                    .then(function (response) {
                        // handle success
                        console.log(response.data);
                        loading.value=false;
                        Swal.fire({
                            title: 'thanks!',
                            text: 'Post Edited successfully',
                            icon: 'success',
                            confirmButtonText: 'OK'
                        })
                    })
                    .catch(function (error) {
                        // handle error
                        console.log(error);
                    })
            }

            return {form, validate,loading}
        }
    }
</script>

<style scoped>

</style>