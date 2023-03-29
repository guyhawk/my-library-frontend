import Routing from './index.vue';
import { RouteRecordRaw } from 'vue-router'
import { MainLayout, EmptyLayout } from './ui';

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    meta: {layout: MainLayout, auth: true},
    component: () => import('./home')
  },
  {
    path: '/login',
    name: 'login',
    meta: {layout: EmptyLayout},
    component: () => import('./login')
  },
  {
    path: '/books',
    name: 'books',
    meta: {layout: MainLayout, auth: true},
    component: () => import('./books')
  },
  {
    path: '/categories',
    name: 'categories',
    meta: {layout: MainLayout, auth: true},
    component: () => import('./categories')
  },
]

export {Routing}
