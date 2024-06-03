// src/main.js
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Teams from './Teams.vue'
import Login from './Login.vue'
import TeamDetail from './TeamDetail.vue'
import CreateTeam from './CreateTeam.vue'
import EditTeam from './EditTeam.vue'
import SignIn from './SignIn.vue'

  const routes = [
      { path: '/teams/user/:id/:name', name:'userteams', component: Teams, },
      { path: '/login', name:'login', component: Login},
      { path: '/team/:teamid/:userid', name:'teamdetail', component: TeamDetail},
      {path: '/team/create/:userid', name:'createteam', component: CreateTeam },
      {path:'/team/:teamid/:userid/edit', name:'editteam', component: EditTeam},
      {path:'/signin', name:'signin', component: SignIn}
    ]

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
})

createApp(App).use(router).mount('#app')


// export { router }