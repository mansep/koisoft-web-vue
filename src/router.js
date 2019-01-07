import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('./views/Home.vue')
    },
    {
      path: '/about',
      name: 'About Us',
      component: () => import('./views/About.vue')
    },
    {
      path: '/services',
      name: 'Services',
      component: () => import('./views/Services.vue')
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () => import('./views/Contact.vue')
    },
    {
      path: '*',
      name: "Page not found",
      component: () => import('./views/NotFound')
    }
  ]
})
