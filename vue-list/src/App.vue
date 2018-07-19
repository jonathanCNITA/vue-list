<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view class="container" :projects="datas"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      datas: [{
                '_id': '5b3e3da860e7c6eeb88e3ceb',
                'isActive': true,
                'picture': 'http://placehold.it/32x32',
                'name': 'ZENTURY',
                'creation': 'Sat May 25 1974 16:52:45 GMT+0100 (Central European Standard Time)'
              },
              {
                '_id': '5b3e3da860e7c6eeb88e3c23',
                'isActive': false,
                'picture': 'http://placehold.it/32x32',
                'name': 'ARAK',
                'creation': 'Sat May 25 1974 16:52:45 GMT+0100 (Central European Standard Time)'
              }]
    }
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
