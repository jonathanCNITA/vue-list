<template>
    <div>
        <h1>Project table</h1>
        <div v-if="projects.length > 0">
            <table class="table table-striped" :style="{ width: 300 +'px'}">
                <tr>
                    <th>name</th>
                    <th>delete</th>
                </tr>
                <tr v-for="project in projects" :key="project.id">
                    <td>
                        <p><strong>{{ project.creator.name }}</strong></p>
                    </td>
                    <td>
                        <button :data-id="project.id" @click="deleteProject(project.id)">X</button>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'ProjectTable',
    props: ['projects'],
    data() {
        return {

        }
    }, 
    computed: {},
    methods: {
        deleteProject(id) {
            axios.delete('https://daily-standup-campus.herokuapp.com/api/projects/'+ id, 
            {
                headers: {
                    Authorization:'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViMjNmODIzYTM5YjlmMDAxNGViNGJlNiIsImlhdCI6MTUzMTE0Mjg1MX0.K5e_nO1kl0sOOK8rvjYTiRkHPk2vBoGcSGY0Xh3zVQg'
                }
            } )
            .then(response => console.log(response))
            .catch(error => console.log(error))
            .then(() => console.log('Done'))
        }
    }
}
</script>
