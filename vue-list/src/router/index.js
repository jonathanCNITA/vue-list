import Vue from 'vue'
import Router from 'vue-router'
import ProjectList from '@/components/ProjectList'
import Project from '@/components/Project'
Vue.use(Router)

Vue.component('app-project', Project)

export default new Router({
  routes: [
    { path: '/', name: 'ProjectList', component: ProjectList }
  ]
})
