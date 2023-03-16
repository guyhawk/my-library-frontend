import {createRouter, createWebHistory} from 'vue-router';
import {routes} from '@/pages';

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  
  const user = localStorage.getItem('user')
  let currentUser = null
  if (user !== null) {
    if (user !== '') {
      currentUser = JSON.parse(user)
    }
  }

  const requireAuth = to.matched.some(record => record.meta.auth === true)
  if(requireAuth && !currentUser) {
    next('/login')
  } else {
    next()
  }
})

export { router }


