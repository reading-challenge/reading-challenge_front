const routes = [
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
        path: '/mainchallenge',
        name: 'mainchallenge',
        component: () => import('../views/MainChallenge.vue')
      },
      {
        path: '/createchallenge',
        name: 'createchallenge',
        component: () => import('../views/CreateChallenge.vue')
      },
      {
        path: '/detailchallenge',
        name: 'detailchallenge',
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

export default routes
