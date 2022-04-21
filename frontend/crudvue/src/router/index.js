import { createRouter, createWebHashHistory } from 'vue-router'
import RegisterView from '../components/RegisterView.vue'
import UsersView from '../components/UsersView.vue'
const routes = [
  {
    path: '/users',
    name: 'users',
    component: UsersView
  },
  {
    path: '/',
    name: 'register',
    component: RegisterView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
