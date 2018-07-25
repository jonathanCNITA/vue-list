<template>
    <div>
        <router-link :to="'/'"><button class="btn btn-primary">home</button></router-link>
        <h1>DETAIL COMPONENT</h1>
        <p><strong>Name:</strong> {{ project.creator.name }}</p>
        <p><strong>Status:</strong> {{ project.description }}</p>
        <p><strong>Id:</strong> {{ project.id }}</p>
        <router-link :to="{name: 'Update', params: { project: selectedProject } }"><button class="btn btn-primary">Update</button></router-link>
    </div>
</template>

<script>
    export default {
        name: 'Detail',
        props: ['id','project'],
        data() {
            return {
                selectedProject: this.project
            }
        },
        beforeMount() {
            // let searchProject = this.$route.params.id;
            // let found = this.projects.find(project => project._id === searchProject);
            // this.selectedProject = found;
        }
    }
</script>
