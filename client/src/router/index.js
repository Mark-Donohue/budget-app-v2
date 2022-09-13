import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import NotFoundViewVue from '@/views/NotFoundView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  }, {
    path: '/about',
    name: 'About',
    component: AboutView,
  }, {
    path: '/login',
    name: 'Login',
    component: LoginView,
  }, {
    path: '/register',
    name: 'Register',
    component: RegisterView,
  }, {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFoundViewVue,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
