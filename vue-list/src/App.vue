<template>
  <div id="app">
    <img src="./assets/logo.png">
    <app-navigation></app-navigation>
    <h3 v-if="datas.length === 0">No data - loading</h3>
    <div v-if="datas.length > 0">
      <router-view class="container" :projects="datas"></router-view>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Navigation from '@/components/Navigation'

export default {
  name: 'App',
  components: {
    'app-navigation': Navigation
  },
  data() {
    return {
      datas: [],
    }
  },
  created() {
    const keyAuth = localStorage.getItem('UserTokenKey');
    // axios.get('https://daily-standup-campus.herokuapp.com/api/projects?access_token=' + keyAuth)
    axios.get('https://daily-standup-campus.herokuapp.com/api/projects?access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViMjNmODIzYTM5YjlmMDAxNGViNGJlNiIsImlhdCI6MTUzMTE0Mjg1MX0.K5e_nO1kl0sOOK8rvjYTiRkHPk2vBoGcSGY0Xh3zVQg')
    .then(response => this.datas = response.data)
    .then(data => console.log(data))
    .catch(error => console.log(error))
    .then(() => console.log('Done'))
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
