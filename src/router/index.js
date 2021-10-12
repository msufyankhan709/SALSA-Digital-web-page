import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import purpose from '../components/purpose'
import expertise from '../components/expertise'
import insights from '../components/insights'
import caseStudies from '../components/caseStudies'
import services from '../components/services'
import contact from '../components/contact'
import about from '../components/about'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/purpose',
    name:'purpose',
    component:purpose
  },
  {
    path:'/about',
    name:'about',
    component:about
  },
  {
    path:'/expertise',
    name:'expertise',
    component:expertise
  },
  {
    path:'/insights',
    name:'insights',
    component:insights
  },
  {
    path:'/caseStudies',
    name:'caseStudies',
    component:caseStudies
  }, {
    path:'/services',
    name:'services',
    component:services
  }, {
    path:'/contact',
    name:'contact',
    component:contact
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
