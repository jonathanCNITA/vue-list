<template>
    <div class="col col-md-4 col-lg-4">
        <div v-bind:class="{ projet: true }">
            <img :src="srcImg" alt="">
            <h3>{{ name }}</h3>
            <p class="description">description: {{ description }}</p>
            <router-link :to="{name: 'Detail', params: { id, project } }"><button class="btn btn-primary">Details</button></router-link>
            <button @click="deleteProject(id)" class="btn btn-danger">Delete</button>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: 'Project',
        props: ['project'],
        data() {
            return {
                id: this.project.id,
                name: this.project.name,
                srcImg: this.project.creator.picture,
                description: this.project.description
            }
        },
        computed: {
            
        },
        methods: {
            deleteProject(id) {
                let tokenKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViMjNmODIzYTM5YjlmMDAxNGViNGJlNiIsImlhdCI6MTUzMTE0Mjg1MX0.K5e_nO1kl0sOOK8rvjYTiRkHPk2vBoGcSGY0Xh3zVQg';
                if (this.$route.path === '/myprojects') {
                    tokenKey = localStorage.getItem('UserTokenKey')
                }
                axios.delete('https://daily-standup-campus.herokuapp.com/api/projects/'+ id, 
                {
                    headers: {
                        Authorization:'Bearer ' + tokenKey
                    }
                })
                .then(response => {
                    console.log(response);
                    this.$emit('toto');
                    })
                .catch(error => console.log(error))
                .then(() => console.log('Done')
                )
            }
        }
    }
</script>

<style type="text/css">
.projet {
    padding: 20px;
    margin: 20px;
    border: 2px solid teal;
}

.description {
    height: 200px;
    max-height: 300px;
    overflow: hidden;
}
</style>
