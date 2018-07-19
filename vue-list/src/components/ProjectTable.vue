<template>
    <div>
        <h1>Project table</h1>
        <table class="table table-striped" :style="{ width: 300 +'px'}">
            <tr><th>name</th></tr>
            <tr v-for="project in projects" :key="project._id"><td>{{ project.name }}</td></tr>
        </table>
    </div>
</template>

<script>
export default {
    name: 'ProjectTable',
    props: ['projects'],
    data() {
        return {

        }
    }, 
    computed: {},
    methods: {}
}
</script>
