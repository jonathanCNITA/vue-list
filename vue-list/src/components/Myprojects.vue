<template>
    <div>
        <input v-model="matchProject" type="text" placeholder="Search by name">
        <h1>My projects list</h1>
        <hr>
        <app-project v-for="project in projectFiltered" :project="project" :key="project.id" @toto="getDatas"></app-project>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: 'Myprojects',
        data() {
            return {
               matchProject: '',
               projectList: [],
               projectFiltered: []
            }
        },
        created() {
           this.getDatas()
        },
        methods: { 
            refreshPage: function () {
                console.log('hello from child');
                this.getDatas();
            },
            getDatas: function () {
                const keyAuth = localStorage.getItem('UserTokenKey');
                console.log('key', keyAuth);
                // axios.get('https://daily-standup-campus.herokuapp.com/api/projects?access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViMjNmODIzYTM5YjlmMDAxNGViNGJlNiIsImlhdCI6MTUzMTE0Mjg1MX0.K5e_nO1kl0sOOK8rvjYTiRkHPk2vBoGcSGY0Xh3zVQg')
                axios.get('https://daily-standup-campus.herokuapp.com/api/projects?access_token=' + keyAuth)
                .then(response => this.projectList = response.data)
                .then(console.log(this.projectList))
                .catch(error => console.log(error))
                .then(() => console.log('Done'))
            }
        },
        watch: {
            matchProject: function() {
                console.log(this.projectList);
                this.projectFiltered = this.projectList.filter( project => project.name.toLowerCase().startsWith(this.matchProject.toLowerCase()) );
            },
            projectList: function() {
                this.projectFiltered = this.projectList;
            }
        }
    }
</script>


<style type="text/css"></style>
