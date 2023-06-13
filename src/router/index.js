import { createRouter, createWebHistory } from 'vue-router'
import AgainstGreatDarknessPressKit from '../data/AgainstGreatDarknessPressKit.json'
import AgainstGreatDarkness from '../data/AgainstGreatDarkness.json'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  mode : 'hash',
  routes: [
    {
      path: '/',
      redirect: to => {
        return { path: '/games'}
      },
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue')
    },
    {
      path: '/games',
      name: 'games',
      component: () => import('../views/GameView.vue'),
      props: AgainstGreatDarkness
    },
    {
      path: '/games/AgainstGreatDarkness',
      name: 'games',
      component: () => import('../views/GameView.vue'),
      props: AgainstGreatDarkness
    },
    {
      path: '/games/AgainstGreatDarkness/presskit',
      name: 'AGDPressKit',
      component: () => import('../views/PressKitView.vue'),
      props: AgainstGreatDarknessPressKit
    }
  ]
})

export default router
