<template>
    <div>
        <h1>HELLO APP</h1>
        <app-project v-for="project in projects" :project="project" :key="project.id"></app-project>

        <!-- <div v-for="project in datas" :key="project.id">
            <h1>{{ project.name }}</h1>
        </div> -->
    </div>
</template>

<script>
    export default {
        props: ['projects'],
        data() {
            return {}
        }
    }
</script>


<style type="text/css"></style>
