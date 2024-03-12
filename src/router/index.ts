import { createRouter, createWebHistory } from 'vue-router'
import HomeAbout from '@/views/HomeAbout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeAbout
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginPage.vue')
    },
    {
      path: '/main',
      name: 'main',
      component: () => import('../views/MainChallenge.vue')
    },
    {
      path: '/create',
      name: 'create',
      component: () => import('../views/CreateChallenge.vue')
    },
    {
      path: '/detail',
      name: 'detail',
      component: () => import('../views/DetailChallenge.vue')
    },
    {
      path: '/mypage1',
      name: 'mypage1',
      component: () => import('../views/MyPage1.vue')
    },
    {
      path: '/mypage2',
      name: 'mypage2',
      component: () => import('../views/MyPage2.vue')
    }
  ]
})

export default router
