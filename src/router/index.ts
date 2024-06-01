import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'layout',
      component: () => import('../layouts/ChallengeLayout.vue'),
      children: [
        {
          path: '/home',
          name: 'home',
          component: () => import('../views/HomeAbout.vue')
        },
        {
          path: '/login',
          name: 'login',
          component: () => import('../views/LoginPage.vue')
        },
        {
          path: '/join',
          name: 'join',
          component: () => import('../views/JoinPage.vue')
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
          path: '/myPage',
          name: 'myPage',
          component: () => import('../views/MyPage.vue'),
          children: [
            {
              path: '/myPage/myChallenge',
              name: 'myChallenge',
              component: () => import('../components/MyChallenge.vue')
            },
            {
              path: '/myPage/myInfo',
              name: 'myInfo',
              component: () => import('../components/MyInfo.vue')
            }
          ]
        }
      ]
    }
  ]
})

export default router
