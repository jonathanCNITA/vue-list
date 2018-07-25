<template>
    <div>
        <input v-model="matchProject" type="text" placeholder="Search by name">
        <h1>HELLO APP</h1>
        <hr>
        <app-project v-for="project in projectList" :project="project" :key="project.id"></app-project>
    </div>
</template>

<script>
    export default {
        props: ['projects'],
        data() {
            return {
               matchProject: '',
               projectList: this.projects,
            }
        },
        methods: { },
        watch: {
            matchProject: function() {
                console.log(this.projectList);
                this.projectList = this.projects.filter( project => project.name.toLowerCase().startsWith(this.matchProject.toLowerCase()));
            }
        }
    }
</script>


<style type="text/css"></style>
