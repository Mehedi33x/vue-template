import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    name:'home',
    component:() =>import('@/components/HomePage.vue'),
  },
  {
    path: '/about',
    name: 'about-page',
    component: () => import('@/components/pages/About.vue'),
  },
  {
    path: '/services',
    name: 'services',
    component: () => import('@/components/pages/Features.vue'),
  },
  {
    path:'/contact-us',
    name:'contact-us',
    component: () => import('@/components/pages/Contact.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

