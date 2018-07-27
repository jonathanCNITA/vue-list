<template>
    <div>
        <h1>Create project form</h1>
        <form action="" method="post">
            Name : <input v-model="newProjet.name" name="creatorName" type="text">
            Description : <input v-model="newProjet.description" name="creatorRole" type="text">
            Picture : <input name="creatorPicture" type="text">
        </form>
        <p @click="createProject">Post new project</p>
        <input v-model="publicProject" type="checkbox">
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'CreateProject',
    data() {
        return {
            publicProject: false,
            newProjet: {
                name: 'jojo',
                description: 'A test !',
                collaborators: []
            },
        }
    },
    methods: { 
        createProject() {
            let tokenKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViMjNmODIzYTM5YjlmMDAxNGViNGJlNiIsImlhdCI6MTUzMTE0Mjg1MX0.K5e_nO1kl0sOOK8rvjYTiRkHPk2vBoGcSGY0Xh3zVQg';
            if (!this.publicProject) {
                tokenKey = localStorage.getItem('UserTokenKey')
            }
            axios.post('https://daily-standup-campus.herokuapp.com/api/projects', this.newProjet, 
            {
                headers: {
                    Authorization:'Bearer ' + tokenKey
                }
            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        }
    }
}
</script>
