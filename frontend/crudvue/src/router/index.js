import { createRouter, createWebHashHistory } from 'vue-router'
import RegisterPage from '../components/RegisterPage/RegisterPage.vue'
import UsersPage from '../components/UsersPage/UsersPage.vue'
const routes = [
  {
    path: '/users',
    name: 'users',
    component: UsersPage
  },
  {
    path: '/',
    name: 'register',
    component: RegisterPage
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
