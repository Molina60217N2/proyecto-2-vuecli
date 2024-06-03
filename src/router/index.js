import { createRouter, createWebHistory } from 'vue-router'
import Teams from '../components/Teams.vue'
import Login from '../components/Login.vue'
import TeamDetail from '../components/TeamDetail.vue'
import CreateTeam from '../components/CreateTeam.vue'
import EditTeam from '../components/EditTeam.vue'
import SignIn from '../components/SignIn.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/teams/user/:id/:name', name:'userteams', component: Teams, },
    { path: '/login', name:'login', component: Login},
    { path: '/team/:teamid/:userid', name:'teamdetail', component: TeamDetail},
    {path: '/team/create/:userid', name:'createteam', component: CreateTeam },
    {path:'/team/:teamid/:userid/edit', name:'editteam', component: EditTeam},
    {path:'/signin', name:'signin', component: SignIn}
  ]
})

export default router
