<template>
    <div>
        <router-link :to="'/'"><button class="btn btn-primary">home</button></router-link>
        <h1>DETAIL COMPONENT</h1>
        <p>name: {{ project.name }}</p>
        <p>Status: {{ project.isActive }}</p>
        <p>Id: {{ project._id }}</p>
    </div>
</template>

<script>
    export default {
        name: 'Detail',
        props: ['id','project'],
        data() {
            return {
                selectedProject: {}
            }
        },
        beforeMount() {
            // let searchProject = this.$route.params.id;
            // let found = this.projects.find(project => project._id === searchProject);
            // this.selectedProject = found;
        }
    }
</script>
