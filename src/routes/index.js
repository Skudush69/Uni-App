import {createRouter, createWebHistory} from 'vue-router'

import LandingPage from "./../components/Landingpage.vue"
import About from "./../components/About.vue"
import Login from "./../components/Login.vue"
import SignUp from "./../components/SignUp.vue"
import Course from "./../components/Course.vue"
import Blog from "./../components/Blog.vue"
import Students from "./../components/Students.vue"


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
  },
  {
    path:'/Course',
    name:'Course',
    component: Course ,
  },
  {
    path:'/Blog',
    name:'Blog',
    component: Blog ,
  },
  {
    path:'/students',
    name:'students',
    component: Students ,
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router 