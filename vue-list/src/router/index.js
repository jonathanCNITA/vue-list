import Vue from 'vue'
import Router from 'vue-router'
import ProjectList from '@/components/ProjectList'
import Project from '@/components/Project'
import Detail from '@/components/Detail'
import ProjectTable from '@/components/ProjectTable'
import CreateProject from '@/components/CreateProject'
import Account from '@/components/Account'
import Login from '@/components/Login'
import UpdateProject from '@/components/UpdateProject'
import Myprojects from '@/components/Myprojects'

Vue.use(Router)

Vue.component('app-project', Project)

export default new Router({
  routes: [
    { path: '/', name: 'ProjectList', component: ProjectList, beforeEnter: requireAuth },
    { path: '/login', name: 'Login', component: Login },
    { path: '/detail/:id', name: 'Detail', component: Detail, props: true, beforeEnter: requireAuth },
    { path: '/table', name: 'ProjectTable', component: ProjectTable, beforeEnter: requireAuth },
    { path: '/create', name: 'CreateProject', component: CreateProject, beforeEnter: requireAuth },
    { path: '/account', name: 'Account', component: Account },
    { path: '/update/:id', name: 'Update', component: UpdateProject, props: true, beforeEnter: requireAuth },
    { path: '/myprojects', name: 'Myprojects', component: Myprojects, beforeEnter: requireAuth }
  ]
})

function requireAuth (to, from, next) {
  if (!localStorage.getItem('UserTokenKey')) {
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
}
