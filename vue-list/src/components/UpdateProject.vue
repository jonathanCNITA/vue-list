<template>
    <div>
        <h1>Update project</h1>
        <form action="" method="post">
            Name : <input v-model="projectName" name="creatorName" type="text" value="projectName">
            Description : <input v-model="projectDescription" name="creatorRole" type="text" value="projectDescription">
            Picture : <input name="creatorPicture" type="text" value="projectPicture">
            <router-link :to="{name: 'ProjectList'}"><button @click="updateProject()">UPDATE</button></router-link>
        </form>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'UpdateProject',
    props: ['project'],
    data() {
        return {
            id : this.project.id,
            projectName: this.project.name,
            projectDescription: this.project.description,
            projectPicture: this.project.picture,

            updatedProject: {
                name: 'toto',
                description: 'titi',
                collaborators: []
            }
        }
    },
    created() {
        // console.log(this.project);
    },
    methods: {
        updateProject() {
            axios.post('https://daily-standup-campus.herokuapp.com/api/projects/' + this.id, this.updatedProject,
            {
                headers: {
                    Authorization:'Bearer ' + localStorage.getItem('UserTokenKey')
                }
            })
            .then(res => console.log(res))
            .catch(err => console.log(err));
        }
    }
}
</script>

