import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'main',
      component: () => import('../pages/main-page/Welcome.vue')
    },

    {
      path: '/community',
      name: 'community',
      component: () => import('../pages/main-page/Community.vue')
    },

    {
      path: '/history',
      name: 'history',
      component: () => import('../pages/main-page/Carousel.vue')
    },

    {
      path: '/vacancies',
      name: 'vacancies',
      component: () => import('../pages/vacancies-page/Vacancies.vue')
    },

    {
      path: '/join',
      name: 'join',
      component: () => import('../pages/entrance-page/Enrance.vue')
    }
  ]
})

export default router
