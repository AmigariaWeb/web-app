import { createRouter, createWebHistory } from 'vue-router'
import { auth } from '../services/firebase';
import ActivitiesView from '@/views/ActivitiesView.vue';
import AppLogin from '@/components/AppLogin/AppLogin.vue';
import AppRegister from '@/components/AppLogin/AppRegister.vue';
import ActivityDetailView from '@/views/ActivityDetailView.vue';
import { onAuthStateChanged } from 'firebase/auth';

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
      path: "/activityDetail/:id",
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
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (await getCurrentUser()) {
      next()
    } else {
      console.log("You dont have access");
      next('/login');
    }
  } else {
    next();
  }
})

export default router
