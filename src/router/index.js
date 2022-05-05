import { createRouter, createWebHistory } from 'vue-router'
import { auth } from '../services/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import ActivitiesView from '@/views/ActivitiesView.vue';
import AppLogin from '@/components/AppLogin/AppLogin.vue';
import AppRegister from '@/components/AppLogin/AppRegister.vue';
import ActivityDetailView from '@/views/ActivityDetailView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Actividades",
      component: ActivitiesView,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/activityDetail",
      name: "Actividad",
      component: ActivityDetailView,
      props: true,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/workshops",
      name: "Talleres",
      component: () => import('@/views/WorkshopsListView.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/workshops/:slug',
      component: () => import('@/views/WorkshopShowView.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/myactivities",
      name: "Mis Actividades",
      component: () => import('@/views/MyActivitiesView.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/myactivities/form",
      name: "Crear Actividad",
      component: () => import('@/views/ActivityFormView.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/login",
      name: " - ",
      component: () => import('@/views/LoginRegisterView.vue'),
      children: [{
        name: "Iniciar sesión",
        path: '',
        component: AppLogin,
      },
      {
        name: "Registrarse",
        path: 'register',
        component: AppRegister,
      }]
    },
    {
      path: '/workinprogress',
      component: () => import('@/views/WorkInProgressView.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/:pathMatch(.*)*',
      component: () => import('@/views/PageNotFound.vue')
    },
  ]
})

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      auth,
      (user) => {
        removeListener();
        resolve(user)
      },
      reject
    )
  })
}

router.beforeEach(async (to, from, next) => {
  if ((await getCurrentUser() === null) && (to.matched.some(record => record.meta.requiresAuth))) {
    next('/login')
    return
  }
  next();
})

export default router
