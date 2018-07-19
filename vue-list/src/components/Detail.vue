<template>
    <div>
        <router-link :to="'/'"><button class="btn btn-primary">home</button></router-link>
        <h1>DETAIL COMPONENT</h1>
        <p>name: {{ selectedProject.name }}</p>
    </div>
</template>

<script>
    export default {
        name: 'Detail',
        props: ['projects'],
        data() {
            return {
                selectedProject: {},
                num: 5
            }
        },
        beforeMount() {
            let searchProject = this.$route.params.id;
            console.log(searchProject);
            console.log(this.projects);
            let found = this.projects.find(project => project._id === searchProject);
            console.log(found);
			this.selectedProject = found;
		}
    }
</script>
