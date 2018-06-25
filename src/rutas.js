import login from './components/login.vue'
import register from './components/register.vue'
import teams from './components/teams.vue'
import addArticle from './components/addArticle.vue'
import addTeam from './components/addTeam.vue'

export const rutas =[
  { path:'/login',component: login},
  { path:'/register',component: register},
  { path:'/teams',component: teams},
  { path:'/addArticle',component: addArticle},
  { path:'/addTeam',component: addTeam}
]