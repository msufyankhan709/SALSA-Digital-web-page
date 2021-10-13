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
import overview from '../components/overview'
import team from '../components/team'
import ourBoard from '../components/ourBoard'
import news from '../components/news'
import contributions from '../components/contributions'
import careers from '../components/careers'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirects: 'home',
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
    path:'/about/overview',
    name:'overview',
    component:overview
  },
  {
    path:'/about/team',
    name:'team',
    component:team
  },
  {
    path:'/about/ourBoard',
    name:'ourBoard',
    component:ourBoard
  },
  {
    path:'/about/news',
    name:'news',
    component:news
  },
  {
    path:'/about/contributions',
    name:'contributions',
    component:contributions
  },
  {
    path:'/about/careers',
    name:'careers',
    component:careers
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
