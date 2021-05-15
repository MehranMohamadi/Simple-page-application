<template>
    <div class="col-md-6 align-items-center">
        <form @submit.prevent="validate">
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Title</label>
                <input v-model.lazy="form.title" type="text" class="form-control" id="exampleInputEmail1"
                       aria-describedby="emailHelp">
                <div class="form-text text-danger">
                    {{form.titleerror}}
                </div>
            </div>

            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Body</label>
                <input v-model.lazy.trim="form.body" type="text" class="form-control" id="exampleInputPassword1"
                       :placeholder="form.titleerror">
                <div class="form-text text-danger">
                    {{form.bodyerror}}
                </div>
            </div>


            <button type="submit" class="btn btn-primary" :disabled="loading">
                <span v-if="loading" class="spinner-border spinner-border-sm" role="status"></span>
                Post
            </button>
        </form>
    </div>
</template>

<script>
    import {reactive, ref} from 'vue';
    import axios from 'axios';

    export default {
        setup() {
            const form = reactive({
                title: "",
                body: "",
                titleerror: "",
                bodyerror: ""
            });
            const loading = ref(false)

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
                    createpost();
                }
            }

            function createpost() {
                axios.post('https://jsonplaceholder.typicode.com/posts', {
                    title: form.title,
                    body: form.body,
                    userId: 1,
                })
                    .then(function (response) {
                        // handle success
                        console.log(response.data);
                        loading.value=false;
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