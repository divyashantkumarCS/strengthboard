import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    // return desired position
    return { top: 0 , behavior: 'smooth'}
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/enrollmember',
      name: 'enrollmember',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/EnrollMemberView.vue')
    },
    {
      path: '/strengthboard',
      name: 'strengthboard',
      component: () => import('../views/StrengthBoardView.vue')
    },    
    {
      path: '/feedback',
      name: 'feedback',
      component: () => import('../views/PersonFeedbacksView.vue')
    },
    {
      path: '/addstrength',
      name: 'addstrength',
      component: () => import('../views/AddStrengthView.vue')
    },
  ]
})

export default router
