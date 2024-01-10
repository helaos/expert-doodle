import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  // route => component
  routes: [
    {
      path: '/',
      redirect: '/main'
    },
    {
      path: '/login',
      component: () => import('@/views/login/index.vue')
    },
    {
      path: '/main',
      component: () => import('@/views/main/index.vue')
    },
    {
      path: '/:pacthMatch(.*)',
      component: () => import('@/views/error/NotFound.vue')
    }
  ]
})

export default router
