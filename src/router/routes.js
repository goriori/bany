
const routes = [
  {
    path: '/',
    component: () => import('layouts/GuestLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/guests/GuestPage.vue')
      }
    ]


  },
  {
    path:'/main',
    component:()=> import ('layouts/MainLayout.vue'),
    children:[
      {
        path:'',
        component:()=> import('pages/main/MainPage.vue')
      }
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
