import Routing from './index.vue';
import { RouteRecordRaw } from 'vue-router'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    meta: {layout: 'main', auth: true},
    component: () => import('./home')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('./login')
  },
  {
    path: '/books',
    name: 'books',
    meta: {layout: 'main', auth: true},
    component: () => import('./books')
  },
]

export {Routing}
