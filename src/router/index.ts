import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { useStore } from '@/stores/authStore'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/help',
      name: 'help',
      component: () => import('../views/HelpView.vue')
    },
    {
      path: '/sign-up',
      name: 'sign-up',
      component: () => import('../views/SignUpView.vue')
    },
    {
      path: '/log-in',
      name: 'log-in',
      component: () => import('../views/LogInView.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/ProfileView.vue')
    },
    {
      path: '/edit-profile',
      name: 'edit-profile',
      component: () => import('../views/EditProfileView.vue')
    },
    {
      path: '/write-post/:id',
      name: 'write-post',
      component: () => import('../views/WritePostView.vue')
    },
    {
      path: '/edit-post',
      name: 'edit-post',
      component: () => import('../views/EditPostView.vue')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('../views/SearchView.vue')
    },
    {
      path: '/heart',
      name: 'heart',
      component: () => import('../views/HeartView.vue')
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: () => import('../views/DetailView.vue')
    },
    {
      path: '/jarvis',
      name: 'jarvis',
      component: () => import('../views/JarvisView.vue')
    },
    {
      path: '/manage-book',
      name: 'manage-book',
      component: () => import('../views/ManageBookView.vue')
    }
  ]
})

const needToLogin = ['profile', 'edit-profile', 'write-post', 'edit-post', 'heart']

router.beforeEach((to) => {
  const store = useStore()

  if (!store.isLogin && needToLogin.includes(to.name as string)) {
    return { name: 'log-in' }
  }
})

export default router
