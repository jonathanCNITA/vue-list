<template>
    <div class="nav-design">
        <hr>
        <router-link :to="{name: 'ProjectList'}"><button class="btn">Home</button></router-link>
        <router-link :to="{name: 'ProjectList'}"><button class="btn">Public projects</button></router-link>
        <router-link :to="{name: 'Myprojects'}"><button class="btn">my projects</button></router-link>
        <router-link :to="{name: 'ProjectTable'}"><button class="btn">table</button></router-link>
        <router-link :to="{name: 'Account'}"><button class="btn">New account</button></router-link>
        <router-link :to="{name: 'CreateProject'}"><button class="btn">CreateProject</button></router-link>
        <hr>
    </div>
</template>

<script>
    export default {
        name : 'Navigation',
        data() {
            return {

            }
        }
    }
</script>

<style>
    .nav-design {
        margin: 10px;
    }
</style>
