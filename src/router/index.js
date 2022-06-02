import { createRouter, createWebHistory } from 'vue-router'
import { auth } from '../services/firebase';
import { getUser } from '../services/firebase/crud';
import { onAuthStateChanged } from 'firebase/auth';
import ActivitiesView from '@/views/ActivitiesView.vue';
import AppLogin from '@/components/AppLogin/AppLogin.vue';
import AppRegister from '@/components/AppLogin/AppRegister.vue';
import ActivityDetailView from '@/views/ActivityDetailView.vue';
import RememberPassword from '@/components/AppLogin/RememberPassword.vue'
import FAQ from '@/components/FAQ/FAQsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Actividades",
      component: ActivitiesView,
      meta: {
        requiresAuth: true,
        requiresBeAssociation:false
      }
    },
    {
      path: "/activityDetail/:",
      name: "Actividad",
      component: ActivityDetailView,
      props: true,
      meta: {
        requiresAuth: true,
        requiresBeAssociation:false
      }
    },
    {
      path: "/workshops",
      name: "Talleres",
      component: () => import('@/views/workshops/WorkshopsListView.vue'),
      meta: {
        requiresAuth: true,
      }
    },
    {
      path: '/workshops/:slug',
      component: () => import('@/views/workshops/WorkshopShowView.vue'),
      meta: {
        requiresAuth: true,
      }
    },
        {
      path: "/workshops/form",
      name: "Crear Taller",
      component: () => import('@/views/workshops/WorkshopFormView.vue'),
      meta: {
        requiresAuth: true,
        requiresBeAssociation:true
      }
    },
    {
      path: "/workshops/edit/:",
      name: "Editar Taller",
      component: () => import('@/components/AppWorkshop/EditWorkshopForm.vue'),
      meta: {
        requiresAuth: true,
        requiresBeAssociation:true
      }
    },
    {
      path: "/myactivities",
      name: "Mis Actividades",
      component: () => import('@/views/MyActivitiesView.vue'),
      meta: {
        requiresAuth: true,
        requiresBeAssociation:false
      }
    },
    {
      path: "/myactivities/form",
      name: "Crear Actividad",
      component: () => import('@/components/AppActivity/CreateActivityForm.vue'),
      meta: {
        requiresAuth: true,
        requiresBeAssociation:false
      }
    },
    {
      path: "/myactivities/edit/:",
      name: "Editar Actividad",
      component: () => import('@/components/AppActivity/EditActivityForm.vue'),
      props: true,
      meta: {
        requiresAuth: true,
        requiresBeAssociation:false
      }
    },
    {
      path: "/userprofile",
      name: "Perfil de Usuario",
      component: () => import('@/views/UserProfileView.vue'),
      meta: {
        requiresAuth: true,
      }
    },
    {
      path: "/login",
      name: " - ",
      component: () => import('@/views/LoginRegisterView.vue'),
      meta: {
        requiresAuth: false,
      },
      children: [{
        name: "Iniciar sesión",
        path: '',
        component: AppLogin,
      },
      {
        name: "Registrarse",
        path: 'register',
        component: AppRegister,
      },
      {
        name: "Recuperar contraseña",
        path: 'resetpassword',
        component: RememberPassword
      }
      ]
    },
    {
      path: '/workinprogress',
      component: () => import('@/views/WorkInProgressView.vue'),
      meta: {
        requiresAuth: true,
        requiresBeAssociation:false
      }
    },
    {
      path: '/access-denied',
      component: () => import('@/views/PageAccessDeniedView.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/:pathMatch(.*)*',
      component: () => import('@/views/PageNotFound.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/FAQ',
      name: "Preguntas",
      component: FAQ,
      meta: {
        requiresAuth: true
      }
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
  const userAuth = await getCurrentUser()
  let userApp;
  if ((userAuth === null) && (to.matched.some(record => record.meta.requiresAuth))) {
    return next('/login')
  }
  try{
    if (userAuth) {
      userApp = await getUser(userAuth);
      if (( userApp.isAdmin ) ) {
        return next();
      }
      if ( ( !userApp.isAssociation && (to.matched.some( record => record.meta.requiresBeAssociation)) ) ) {
        return next('/access-denied');
      }
      if ( ( userApp.isAssociation && ( to.matched.some( record => false === record.meta.requiresBeAssociation)) ) ) {
        return next('/access-denied');
      }
    }
  }catch (error) {
    console.log(error);
    return error;
  }
  next();
})

export default router
