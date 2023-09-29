import {createRouter, createWebHistory} from 'vue-router'

import LandingPage from "./../components/Landingpage.vue"
import About from "./../components/About.vue"
import Login from "./../components/Login.vue"
import SignUp from "./../components/SignUp.vue"


const routes = [
  {
    path:'/',
    name:'landingpage',
    component: LandingPage,
  },
  {
    path:'/about',
    name:'about',
    component: About ,
  },
  {
    path:'/signup',
    name:'signup',
    component: SignUp ,
  },
  {
    path:'/login',
    name:'login',
    component: Login ,
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router 