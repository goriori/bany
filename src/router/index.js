import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: ' preview',
    component: () => import('@/views/Preview.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
