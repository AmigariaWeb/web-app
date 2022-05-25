import { createRouter, createWebHistory } from 'vue-router'
import { auth } from '../services/firebase';
import { getUser } from '../services/firebase/crud';
import { onAuthStateChanged } from 'firebase/auth';
import ActivitiesView from '@/views/ActivitiesView.vue';
import AppLogin from '@/components/AppLogin/AppLogin.vue';
import AppRegister from '@/components/AppLogin/AppRegister.vue';
import ActivityDetailView from '@/views/ActivityDetailView.vue';
import RememberPassword from '@/components/AppLogin/RememberPassword.vue'

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
      path: "/activityDetail/:",
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
      component: () => import('@/views/workshops/WorkshopsListView.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/workshops/:slug',
      component: () => import('@/views/workshops/WorkshopShowView.vue'),
      meta: {
        requiresAuth: true
      }
    },
        {
      path: "/workshops/form",
      name: "Crear Taller",
      component: () => import('@/views/workshops/WorkshopFormView.vue'),
      meta: {
        requiresAuth: true,
        requiresBeAssociation:true,
        requiresAdmin:true
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
      component: () => import('@/components/AppActivity/CreateActivityForm.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/myactivities/edit/:",
      name: "Editar Actividad",
      component: () => import('@/components/AppActivity/EditActivityForm.vue'),
      props: true,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/userprofile",
      name: "Perfil de Usuario",
      component: () => import('@/views/UserProfileView.vue'),
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

  /*JAVI esto no lo uses esta registrado bajo licencia © 1992 */
  // var originalText = "éàçèñ"
  // var asd = 'asd asd - asd ñ 1sd `àsd``a s`dàs```´ásd'
	// var result = originalText.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
  // var resultAsd = asd.normalize('NFD')
  //                 .replace(/[\u0300-\u036f]/g, "")
  //                 .replace(/[^\w ]+/g, '')
  //                 .replace(/ +/g, '-');
  const userAuth = await getCurrentUser()
  const userApp = await getUser(userAuth)
  
  if (( userApp.isAdmin ) ) {
    return next();
  }
  if ((await getCurrentUser() === null) && (to.matched.some(record => record.meta.requiresAuth))) {
    next('/login')
    return
  }
  if (( !userApp.isAssociation && to.matched.some( record => record.meta.requiresBeAssociation)) ) {
    return next('/access-denied');
  }
  
  next();
})

export default router
