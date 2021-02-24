import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

const  router =  new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes: [
    { path: '*', redirect: '/' },
    {
      path: '/',
      name: 'home',
      component: Home,
      meta:{
        title:'Home | IWD Settat 2021',
        color:'white'
      }
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta:{
        title:'Home | IWD Settat 2021',
        color:'white'
      }
    },
    {
      path: '/team',
      name: 'team',
      component: () => import('./views/Team.vue'),
      meta: { 
        title:"Team | IWD Settat 2021",
        hideNavigation: true,
        color:'yellow'
      }
    },
    {
      path: '/speakers',
      name: 'speakers',
      component: () => import('./views/Speakers.vue'),
      meta:{
        title:'Speakers | IWD Settat 2021',
        color:'blue'
      }
    },
    {
      path: '/agenda',
      name: 'agenda',
      component: () => import('./views/Agenda.vue'),
      meta:{
        title:'Agenda | IWD Settat 2021',
        color:'red'
      }
    },
    {
      path: '/faq',
      name: 'faq',
      component: () => import('./views/FAQ.vue'),
      meta:{
        title:'FAQ | IWD Settat 2021',
        color:'red'
      }
    },
    {
      path: '/resources',
      name: 'resources',
      component: () => import('./views/Resources.vue'),
      meta: {
        title: 'Resources | IWD Settat 2021',
        color: 'blue'
      }
    },
    {
      path: '/testimonials',
      name: 'testimonials',
      component: () => import('./views/Testimonials.vue'),
      meta: {
        title: 'Testimonials | IWD Settat 2021',
        color: 'blue'
      }
    },
    {
      path: '/report',
      name: 'report',
      beforeEnter() {location.href = 'https://drive.google.com/file/d/14_oTnjyHmnq4I6vQoJAPlifryTUAxbyT/view'}
    }
  ],
})

router.beforeEach((to, from, next)=>{
  if(to.meta.title){
    document.title = to.meta.title
  }
  next()
})

export default router
