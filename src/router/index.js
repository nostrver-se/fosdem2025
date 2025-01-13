import { createRouter, createWebHistory } from 'vue-router'
import Index from '../pages/Index.vue'

const router = createRouter({
  history: createWebHistory('/fosdem2025'),
  routes: [
    {
      path: '/index',
      name: 'Start',
      component: Index
    },
    {
      path: '/nostr-swiper',
      name: 'Swiper',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../pages/NostrUSPs.vue')
    }
  ]
})

export default router