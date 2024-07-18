const routes = [
  {
    path: '/',
    name: 'layout',
    component: () => import('../layouts/ChallengeLayout.vue'),
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('../views/main/HomeAbout.vue')
      },
      {
        path: '/login',
        name: 'login',
        component: () => import('../views/login/LoginPage.vue')
      },
      {
        path: '/join',
        name: 'join',
        component: () => import('../views/login/JoinPage.vue')
      },
      {
        path: '/mainchallenge',
        name: 'mainchallenge',
        component: () => import('../views/challenge/MainChallenge.vue')
      },
      {
        path: '/createchallenge',
        name: 'createchallenge',
        component: () => import('../views/challenge/CreateChallenge.vue')
      },
      {
        path: '/detailchallenge',
        name: 'detailchallenge',
        component: () => import('../views/challenge/DetailChallenge.vue')
      },
      {
        path: '/myPage',
        name: 'myPage',
        component: () => import('../views/mypage/MyPage.vue'),
        children: [
          {
            path: '/myPage/myChallenge',
            name: 'myChallenge',
            component: () => import('../views/mypage/MyChallenge.vue')
          },
          {
            path: '/myPage/myInfo',
            name: 'myInfo',
            component: () => import('../views/mypage/MyInfo.vue')
          }
        ]
      }
    ]
  }
]

export default routes
