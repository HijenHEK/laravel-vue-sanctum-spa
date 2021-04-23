import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes.js'
import store from '../store'
  
const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name !== 'login' && !store.getters.user) next({ name: 'login' })
  else next()
})

export default router;

