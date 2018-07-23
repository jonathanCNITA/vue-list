<template>
    <div class="col col-md-4 col-lg-4">
        <div v-bind:class="{ projet: true, green: status,  red: !status }">
            <img :src="srcImg" alt="">
            <h2>NAME: {{ name }}</h2>
            <p>machine status: {{ status ? 'OK': 'KO' }}</p>
            <input type="checkbox" v-model="status">
            <router-link :to="{name: 'Detail', params: { id, project } }"><button class="btn btn-primary">Details</button></router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Project',
        props: ['project'],
        data() {
            return {
                id: this.project._id,
                name: this.project.name,
                srcImg: this.project.picture,
                status: this.project.isActive
            }
        },
        computed: {
            convertStatus() {
                return this.status ? 'OK' : 'KO';
            }
        },
        methods: {}
    }
</script>

<style type="text/css">
.projet {
    padding: 20px;
    margin: 20px;
    border: 2px solid teal;
}

.red {
    background-color: rgb(255, 0, 0, 0.2);
}

.green {
    background-color: rgb(0, 255, 0, 0.2);
}
</style>
