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
        component: () => import('../views/login/LoginPage.vue'),
        children: [
          {
            path: '/login/loginform',
            name: 'loginform',
            component: () => import('../views/login/LoginForm.vue')
          },
          {
            path: '/login/joinform',
            name: 'joinform',
            component: () => import('../views/login/JoinForm.vue')
          },
        ]
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
        path: '/mypage',
        name: 'mypage',
        component: () => import('../views/mypage/MyPage.vue'),
        children: [
          {
            path: '/mypage/mychallenge',
            name: 'mychallenge',
            component: () => import('../views/mypage/MyChallenge.vue')
          },
          {
            path: '/mypage/myinfo',
            name: 'myinfo',
            component: () => import('../views/mypage/MyInfo.vue')
          }
        ]
      }
    ]
  }
]

export default routes
