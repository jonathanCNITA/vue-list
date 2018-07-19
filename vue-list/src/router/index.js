import Vue from 'vue'
import Router from 'vue-router'
import ProjectList from '@/components/ProjectList'
import Project from '@/components/Project'
import Detail from '@/components/Detail'
import ProjectTable from '@/components/ProjectTable'

Vue.use(Router)

Vue.component('app-project', Project)

export default new Router({
  routes: [
    { path: '/', name: 'ProjectList', component: ProjectList },
    { path: '/detail/:id', name: 'Detail', component: Detail },
    { path: '/table', name: 'ProjectTable', component: ProjectTable }
  ]
})
